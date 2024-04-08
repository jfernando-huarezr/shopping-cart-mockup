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
            Add to Cart
          </button>
        </div>

        {isComponentVisible && (
          <Modal>
            <div className="w-[90%] bg-neutral-50 p-5 lg:w-1/2" ref={ref}>
              <ProductDetailCard detail={detail}></ProductDetailCard>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default ProductCard
