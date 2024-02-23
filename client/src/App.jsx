import { Routes, Route} from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// pages
import Home from './pages/home/Home'
import SinglePage from './pages/single/SinglePage'
import CategoryPage  from './pages/category/CategoryPage'
import Basket from './pages/basket/Basket'
import Profile from './pages/basket/profile/Profile'

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
