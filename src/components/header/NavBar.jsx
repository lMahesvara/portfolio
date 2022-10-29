const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-2'>
      <div className='flex items-center'>Logo</div>
      <div className='flex items-center gap-4'>
        {/* TODO: organizar navBar y el responsive luego */}
        <div className='hidden items-center md:flex'></div>
        <button className='hidden'>Dark</button>
        <button className=''>Menu</button>
      </div>
    </nav>
  )
}

export default NavBar
