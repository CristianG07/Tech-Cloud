// components
import { CategoryList } from '@/components/home/CategoryList'
import { Title } from '@/components/home/Title'
import { useFetchProducts } from '@/hooks/useFetchProducts'

const Home = () => {
  const { products } = useFetchProducts('/products')

  return (
    <main className='w-[90%] lg:w-[70%] mx-auto py-20 text-pretty'>
      <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {products.map((product) => (
          <CategoryList key={product.id} {...product} />
        ))}
      </section>

      {/* Section Best Sellers */}
      <section className='my-20'>
        <Title>Best Sellers</Title>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {products
            .filter((product) => product.category === 'best seller')
            .map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
        </div>
      </section>

      {/* Section Mobile Phones */}
      <section className='my-20'>
        <Title>Mobile Phones</Title>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {products
            .filter((product) => product.category === 'best seller')
            .map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
        </div>
      </section>

      {/* Section Tablets */}
      <section className='my-20'>
        <Title>Tablets</Title>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {products
            .filter((product) => product.category === 'best seller')
            .map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
        </div>
      </section>

      {/* Section Laptops */}
      <section className='my-20'>
        <Title>Laptops</Title>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {products
            .filter((product) => product.category === 'best seller')
            .map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
        </div>
      </section>

      {/* Section Accessories */}
      <section className='my-20'>
        <Title>Accessories</Title>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {products
            .filter((product) => product.category === 'best seller')
            .map((product) => (
              <CategoryList key={product.id} {...product} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Home