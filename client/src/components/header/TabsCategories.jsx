import { tabsNav } from '@/utils/data'

export const TabsCategories = () => {
  const handleClick = (e) => {
    console.log(e.target.textContent.toLowerCase())
  }

  return (
    <nav className='show_lg lg:flex justify-center bg-accent_primary text-white h-14'>
      {tabsNav.map((tab, i) => (
        <div key={i} className='flex h-full text-xl'>
          <button
            onClick={(e) => handleClick(e)}
            className='px-6 hover:bg-dark duration-500'
          >
            {tab.name}
          </button>
        </div>
      ))}
    </nav>
  )
}
