import { Routes, Route } from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// pages
import { Home } from './pages/home/Home'
import { SinglePage } from './pages/single/SinglePage'
import { CategoryPage } from './pages/category/CategoryPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<SinglePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
