import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CategoryList } from '@/components/home/CategoryList'
import { Title } from '@/components/home/Title'

const Home = () => {
  const [numToShow, setNumToShow] = useState(10)
  const { data: products } = useSelector((state) => state.product)
  const [startIndexByCategory, setStartIndexByCategory] = useState({
    'best seller': 0,
    'mobile phones': 0,
    tablets: 0,
    laptops: 0,
    accessories: 0
  })

  const handleShowMoreAll = () => {
    setNumToShow(numToShow + 5)
  }

  const filterByCategory = (category) => {
    return products.filter((product) => product.category === category)
  }

  const handleShowMore = (category) => {
    setStartIndexByCategory((prevState) => ({
      ...prevState,
      [category]: prevState[category] + 5
    }))
  }

  return (
    <main className='w-[80%] lg:w-[90%] max-w-full md:max-w-[90%] lg:max-w-[80%] mx-auto py-20 text-pretty'>
      <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {products.slice(0, numToShow).map((product) => (
          <CategoryList key={product.id} {...product} />
        ))}
      </section>

      {products.length > numToShow && (
        <div className='btn_show_all lg:justify-end'>
            <button onClick={handleShowMoreAll}>See all products</button>
        </div>
      )}

      {[
        'best seller',
        'mobile phones',
        'tablets',
        'laptops',
        'accessories'
      ].map((category) => (
        <section key={category} className='my-20'>
          <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
            {filterByCategory(category)
              .slice(0, startIndexByCategory[category] + 5)
              .map((product) => (
                <CategoryList key={product.id} {...product} />
              ))}
          </div>
          <div className='btn_show_all'>
            <button onClick={() => handleShowMore(category)}>See all products</button>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Home
