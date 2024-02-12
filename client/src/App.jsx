import { Routes, Route } from 'react-router-dom'
// layout
import { Layout } from './layouts/Layout'
// pages
import { Home } from './pages/home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
