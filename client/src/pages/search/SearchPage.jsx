import { useSelector, useDispatch } from 'react-redux'
import { CategoryList } from "@/components/home/CategoryList"
import { InputSelect } from "@/components/singlePage/InputSelect"
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { fetchProductsBySearch } from '@/redux/products/searchSlice'

const SearchPage = () => {
  const dispatch = useDispatch()
  const { searchName } = useParams()
  const { data: products } = useSelector((state) => state.search)

  useEffect(() => {
    if (searchName) {
      dispatch(fetchProductsBySearch(searchName))
    }
  }, [searchName, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary flex gap-2'>
            <Link to='/'>Home</Link> /<span>{searchName}</span>
          </div>
          <div className='hidden md:block'>
            <InputSelect />
          </div>
        </div>
        <div className=''>
          <div className={`${products.length === 0 ? '' : 'content_products'}`}>
            {products.length === 0 ? (
              <div className='flex items-center justify-center h-[40vh] text-4xl text-accent_primary'>
                <p>Product not found</p>
              </div>
            ) : (
              products.map((product) => (
                <CategoryList key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default SearchPage