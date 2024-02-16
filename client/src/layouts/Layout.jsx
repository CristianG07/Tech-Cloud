import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
// components
import { Footer } from './Footer'
import { Header } from './Header'
import { Suspense, useEffect } from 'react'
import { Loader } from '@/components/loader/Loader'
// utils
import { STATUS } from '@/utils/status'
import { fetchProducts } from '@/redux/products/productSlice'
// redux
import { useDispatch } from 'react-redux'

export const Layout = () => {
  const dispatch = useDispatch()
  const { status: productStatus } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (productStatus === STATUS.LOADING) {
    return (
      <>
        <Header />
        <Loader />
      </>
    )
  }

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}
