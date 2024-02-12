export const TabsCategories = () => {
  return (
    <nav className='show_lg lg:flex justify-center bg-accent_primary text-white h-12'>
      <div className="flex h-full text-lg">
        <button className="px-6 bg-black">All products</button>
        <button className="px-6">Bestsellers</button>
        <button className="px-6">Mobile phones</button>
        <button className="px-6">Tablets</button>
        <button className="px-6">Laptops</button>
        <button className="px-6">Desktops</button>
        <button className="px-6">Accessories</button>
      </div>
    </nav>
  )
}
