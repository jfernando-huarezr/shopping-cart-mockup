import { Link } from 'react-router-dom'
import useComponentVisible from '../../hooks/useComponentVisible'
import bannerImg from '../../assets/shopping-store.png'
import { PropTypes } from 'prop-types'

const Header = ({ cartCounter }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const handleToggleNav = (e) => {
    e.preventDefault()
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <header data-testid="header" className="relative sticky top-0 z-10 w-full">
      <nav className="w-full border-gray-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={bannerImg}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Tambo Mockup
            </span>
          </Link>
          <ul className="hidden flex-row gap-10 font-medium lg:flex">
            <li>
              <Link
                to="/"
                className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
              >
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <div className="relative">
              <Link
                to="/cart"
                className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 hover:outline-none hover:ring-2 hover:ring-blue-300 lg:px-5 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:ring-blue-800"
              >
                Shop Cart
              </Link>
              {cartCounter > 0 && (
                <div
                  className="absolute -top-2 right-0 inline-flex h-5 w-5  
                items-center justify-center rounded-full  
                bg-white text-xs font-bold text-gray-700 lg:text-sm"
                >
                  {cartCounter}
                </div>
              )}
            </div>

            <button
              onClick={handleToggleNav}
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isComponentVisible ? 'visible' : 'hidden'
        } absolute w-full items-center justify-between border-gray-200 bg-white px-4 py-2.5 lg:hidden lg:px-6 dark:bg-gray-800`}
        id="mobile-menu-2"
        ref={ref}
      >
        <ul className="flex flex-col font-medium">
          <li onClick={handleToggleNav}>
            <Link
              to="/"
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 lg:text-blue-700 dark:text-white"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li onClick={handleToggleNav}>
            <Link
              to="/marketplace"
              className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
            >
              Marketplace
            </Link>
          </li>

          <li onClick={handleToggleNav}>
            <Link
              to="/about"
              className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  cartCounter: PropTypes.number,
}

export default Header
