import { PropTypes } from 'prop-types'

const Subtotal = ({ subtotal }) => {
  return (
    <div className="sticky bg-white p-3 lg:top-[80px] ">
      <div className="flex items-center justify-between border-gray-200 pb-3 md:flex-row md:items-center lg:mx-auto lg:max-w-lg lg:px-6">
        <h5 className="font-manrope w-full text-2xl font-semibold leading-9 text-gray-900">
          Subtotal
        </h5>

        <div className="flex items-center justify-between gap-5 ">
          <h6 className="font-manrope lead-10 text-3xl font-bold text-blue-600">
            ${subtotal.toFixed(2)}
          </h6>
        </div>
      </div>
      <div className="lg:mx-auto lg:max-w-lg">
        <p className="mb-4 text-center text-sm font-normal leading-7 text-gray-500 lg:text-base">
          Shipping taxes, and discounts calculated at checkout
        </p>
        <button className="w-full rounded-full bg-blue-700 px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-blue-700 ">
          Checkout
        </button>
      </div>
    </div>
  )
}

Subtotal.propTypes = {
  subtotal: PropTypes.number,
}

export default Subtotal
