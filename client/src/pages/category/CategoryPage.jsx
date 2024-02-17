import { useSelector } from 'react-redux'
import { CategoryList } from '@/components/home/CategoryList'
import { InputSelect } from '@/components/singlePage/InputSelect'
import { Link, useParams } from 'react-router-dom'

const CategoryPage = () => {
  const { categoryName } = useParams()
  const { data: products } = useSelector((state) => state.category)

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary capitalize flex gap-2'>
            <Link to='/'>Home</Link> /<span>{categoryName}</span>
          </div>
          <div className='hidden md:block'>
            <InputSelect />
          </div>
        </div>
        <div className=''>
          <div className='content_products'>
            {products.map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
