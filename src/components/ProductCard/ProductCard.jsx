import { useState } from 'react'
import Modal from '../Modal/Modal'
import useComponentVisible from '../../hooks/useComponentVisible'
import ProductDetailCard from '../ProductDetailCard.jsx/ProductDetailCard'

const ProductCard = (props) => {
  const detail = props.detail
  const setCartCounter = props.setCartCounter
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const handleAddCart = (e) => {
    e.preventDefault()
    setCartCounter((prev) => prev + 1)
  }

  const handleModalProduct = (e) => {
    e.preventDefault()
    setIsComponentVisible((prev) => !prev)
  }
  return (
    <div>
      <div className="flex h-96 w-72 flex-col justify-between rounded-lg border border-gray-200 bg-white px-5 pb-5 shadow lg:h-[450px] lg:w-72">
        <div className="flex items-center justify-center">
          <img
            className="h-60 rounded-t-lg object-scale-down p-8 lg:h-72"
            src={detail.image}
            alt="product image"
          />
        </div>

        <a href="#">
          <h5 className="line-clamp-2 text-ellipsis text-xl font-semibold tracking-tight text-gray-900">
            {detail.title}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ${detail.price}
          </span>

          <button
            onClick={handleModalProduct}
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </button>
        </div>

        {isComponentVisible && (
          <Modal>
            <div
              className="relative mb-6 flex w-[90%] flex-wrap rounded-lg bg-white p-6 shadow-md sm:flex-nowrap sm:gap-10 lg:w-1/2"
              ref={ref}
            >
              <div className="flex h-60 basis-full justify-center sm:basis-1/2">
                <img
                  src={detail.image}
                  alt="product-image"
                  className="max-h-full max-w-full rounded-lg"
                />
              </div>

              <div className="sm:basis-1/2">
                <div className="sm:flex sm:w-full sm:justify-between sm:gap-4">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {detail.title}
                    </h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
                    <div className="flex items-center space-x-4">
                      <p className="text-3xl font-bold text-gray-900">
                        ${detail.price}
                      </p>
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="quantity-input"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Choose quantity:
                </label>
                <div className="relative flex max-w-[8rem] items-center">
                  <button
                    type="button"
                    className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  >
                    <svg
                      className="h-3 w-3 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    aria-describedby="helper-text-explanation"
                    className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="1"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                  >
                    <svg
                      className="h-3 w-3 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                onClick={handleModalProduct}
                className="absolute bottom-5 right-5 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to Cart
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default ProductCard
