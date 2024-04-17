import { useState, useEffect } from 'react'

const ProductCardShopCart = (props) => {
  const element = props.element
  const updateCartItem = props.updateCartItem

  const maxItems = 25
  const minItems = 1

  const [quantity, setQuantity] = useState(element.quantity)
  const [isIncorrect, setIsIncorrect] = useState(false)

  const handleIncrement = (e) => {
    e.preventDefault()
    if (quantity == maxItems) {
      setIsIncorrect(true)
      return
    }

    setIsIncorrect(false)
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    setIsIncorrect(false)
    setQuantity((prev) => prev - 1)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setQuantity(0)
  }

  useEffect(() => {
    console.log(quantity)
    updateCartItem(element.id, quantity)
  }, [quantity, element.id, quantity])

  return (
    <div className="mx-5 mb-8 grid grid-cols-12 gap-4 rounded-3xl border-2 border-gray-200 bg-white p-4 lg:mx-auto lg:max-w-screen-lg lg:px-6 lg:py-4 ">
      <div className="col-span-12 lg:col-span-2">
        <img
          src={element.image}
          alt="speaker image"
          className="p-8lg:w-[180px] mx-auto h-60 rounded-t-lg object-scale-down"
        />
      </div>
      <div className="detail col-span-12 w-full lg:col-span-10 lg:pl-3">
        <div className="mb-4 flex w-full items-center justify-between">
          <h5 className="font-manrope text-2xl font-bold leading-9 text-gray-900">
            {element.title}
          </h5>
          <button
            className="group flex items-center justify-center rounded-full focus-within:outline-red-500"
            onClick={handleDelete}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                cx="17"
                cy="17"
                r="17"
                fill=""
              />
              <path
                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                stroke="#EF4444"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <p className="mb-6 text-base font-normal leading-7 text-gray-500">
          {element.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="group flex items-center justify-center rounded-[50px] border border-gray-200 bg-white p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"
              onClick={handleDecrement}
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 9.5H13.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              className="aspect-square w-10 rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-center text-sm font-semibold text-gray-900  outline-none"
              placeholder="2"
              value={quantity}
            />
            <button
              className={`group flex items-center justify-center rounded-[50px] border border-gray-200 ${isIncorrect ? 'bg-red-600' : 'bg-white'} p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:${isIncorrect ? 'bg-red-200' : 'bg-gray-50'} hover:shadow-gray-200`}
              onClick={handleIncrement}
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9.5H14.25M9 14.75V4.25"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <h6 className="font-manrope text-right text-2xl font-bold leading-9 text-indigo-600">
            ${element.price * quantity}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ProductCardShopCart
