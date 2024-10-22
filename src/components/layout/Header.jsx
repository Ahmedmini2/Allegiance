import Logo from '../../assets/images/opr.png'
function Header() {
  return (
    <header className="bg-white">
  <div className="flex h-16 border-b-white shadow-black items-center  px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="#">
      <span className="sr-only">Home</span>
      <img src={Logo} className="logo" alt="Vite logo" />
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Properties </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> New Projects </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Developers </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Areas </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Map </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Virtual Tours </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Videos </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> FAQ </a>
          </li>

          <li>
            <a className="text-gray-800 text-md transition hover:text-white hover:bg-cyan-500 p-2 rounded-lg" href="#"> Blog </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-end end-0 gap-4">
        <div className="sm:flex sm:gap-4">
        <button type="button" className="px-5 .py-1.5 text-sm font-medium text-white inline-flex items-center bg-cyan-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>


        Call Us
        </button>
        <a
            className="   text-sm font-medium text-black  rounded-full  transition ease-in-out hover:translate-x-2  hover:bg-cyan-500  hover:text-white sm:block"
            href="#"
          >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 transition bg-cyan-500 rounded-full   p-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            
          
            Find
          
          </svg>
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header