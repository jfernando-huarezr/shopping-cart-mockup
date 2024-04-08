const ProductDetailCard = (props) => {
  const detail = props.detail
  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={detail.image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{detail.title}</h2>
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {' '}
              -{' '}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              value="1"
              min="1"
            />
            <span className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {' '}
              +{' '}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">${detail.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard
