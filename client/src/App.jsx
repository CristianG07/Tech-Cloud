// import { lazy, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// utils
// import { wait } from './utils/wait'
// pages
import Home from './pages/home/Home'
import SinglePage from './pages/single/SinglePage'
import CategoryPage  from './pages/category/CategoryPage'
import Basket from './pages/basket/Basket'
import Profile from './pages/basket/profile/Profile'
// const SinglePage = lazy(() => wait(1000).then(() => import('./pages/single/SinglePage')))

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product/:productId' element={<SinglePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
