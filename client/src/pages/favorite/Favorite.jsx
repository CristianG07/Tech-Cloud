import { CategoryList } from '@/components/home/CategoryList'
import { InputSelect } from '@/components/singlePage/InputSelect'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Favorite = () => {
  const { favorites } = useSelector((state) => state.favorite)

  return (
    <section className='container_products'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary flex gap-2'>
            <Link to='/'>Home</Link> /<span>Favorites</span>
          </div>
          <div className='hidden md:block'>
            <InputSelect />
          </div>
        </div>
        <div className=''>
          <div className={`${favorites.length === 0 ? '' : 'content_products'}`}>
            {favorites.length === 0 ? (
              <div className='flex items-center justify-center h-[40vh] text-4xl text-accent_primary'>
                <p>There are no product</p>
              </div>
            ) : (
              favorites.map((product) => (
                <CategoryList key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Favorite