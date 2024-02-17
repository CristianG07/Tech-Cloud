import { Link, NavLink, useParams } from 'react-router-dom';
import { tabsNav } from '@/utils/data';
import { useDispatch } from 'react-redux'
import { fetchProductsByCategory } from '@/redux/products/categorySlice';
import { useEffect } from 'react';

export const TabsCategories = () => {
  const dispatch = useDispatch()
  const { categoryName } = useParams()

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProductsByCategory(categoryName));
    }
  }, [categoryName, dispatch])
  

  return (
    <nav className='show_lg lg:flex justify-center bg-accent_primary text-white h-16'>
      <div className='flex items-center h-full'>
        <Link
          exact='true'
          to='/'
          className={`tabs_categories ${!categoryName ? 'bg-dark' : ''}`}
        >
          All Products
        </Link>
        <div className='flex h-full'>
          {tabsNav.map((tab, i) => (
            <div key={i}>
              <Link
                to={`/category/${tab.name.toLowerCase()}`}
                className={`tabs_categories ${
                  categoryName && categoryName.includes(tab.name.toLowerCase()) ? 'bg-dark' : ''
                }`}
              >
                {tab.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

