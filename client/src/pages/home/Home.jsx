import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import { CategoryList } from '@/components/home/CategoryList'
import { Title } from '@/components/home/Title'
// slices
import { addProducts, getAllProducts } from '@/redux/products/productSlice'

export const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)

  const fetchProducts = async () => {
    const response = await axios
      .get('https://tech-cloud-api.vercel.app/products')
      .catch((err) => console.log(err))
    dispatch(addProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  },[])

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
