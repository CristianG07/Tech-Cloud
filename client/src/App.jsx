import { lazy, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// utils
import { wait } from './utils/wait'
// pages
import { CategoryPage } from './pages/category/CategoryPage'
import Home from './pages/home/Home'
const SinglePage = lazy(() => wait(1000).then(() => import('./pages/single/SinglePage')))
// axios
import axios from 'axios'
// redux
import { useDispatch } from 'react-redux'
// slices
import { addProducts, setLoading } from '@/redux/products/productSlice'

function App() {
  const base_url = 'https://tech-cloud-api.vercel.app'
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${base_url}/products`);
        dispatch(addProducts(response.data))
      } catch (error) {
        console.log(error)
      } finally {
        wait(1000).then(() => dispatch(setLoading(false)))
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<SinglePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
