const ProductCard = (props) => {
  const setCartCounter = props.setCartCounter

  const handleClick = (e) => {
    e.preventDefault()
    setCartCounter((prev) => prev + 1)
  }
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <img
        className="rounded-t-lg p-8"
        src="https://w7.pngwing.com/pngs/984/196/png-transparent-apple-watch-series-3-apple-keyboard-mockup-apple-user-interface-design-watch-accessory-apple-watch.png"
        alt="product image"
      />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>

          <div className="flex items-center gap-x-1.5">
            <button
              type="button"
              className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
              data-hs-input-number-decrement=""
            >
              <svg
                className="size-3.5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
            <input
              className="w-6 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white"
              type="text"
              value="0"
            ></input>
            <button
              type="button"
              className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
            >
              <svg
                className="size-3.5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>

          <button
            onClick={handleClick}
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
