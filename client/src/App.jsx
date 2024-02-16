import { lazy, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// utils
// import { wait } from './utils/wait'
// pages
import { CategoryPage } from './pages/category/CategoryPage'
import Home from './pages/home/Home'
import SinglePage from './pages/single/SinglePage'
// const SinglePage = lazy(() => wait(1000).then(() => import('./pages/single/SinglePage')))

function App() {

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
