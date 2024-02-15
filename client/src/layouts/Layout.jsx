import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
// components
import { Footer } from './Footer'
import { Header } from './Header'
import { Suspense } from 'react'
import { Loader } from '@/components/loader/Loader'

export const Layout = () => {
  const isLoading = useSelector((state) => state.showLoading)
  console.log(isLoading)
  if (isLoading) {
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
