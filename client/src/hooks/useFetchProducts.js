import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
// slices
import { addProducts, setLoading } from '@/redux/products/productSlice'
import { wait } from '@/utils/wait'

export const useFetchProducts = (path) => {
  const base_url = 'https://tech-cloud-api.vercel.app'
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const isLoading = useSelector((state) => state.showLoading)

  console.log(products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${base_url + path}`);
        dispatch(addProducts(response.data))
        // dispatch(setLoading(true))
      } catch (error) {
        console.log(error)
      } finally {
        wait(1000).then(() => dispatch(setLoading(false)))
      }
    }

    fetchProducts()
  }, [])

  return { products, isLoading }
}
