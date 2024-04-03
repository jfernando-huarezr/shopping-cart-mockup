import img from '../../assets/banner.jpeg'

const Home = () => {
  return (
    <>
      <section className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center gap-8 lg:w-[80%]">
          <div className="mx-[1.7rem] my-[9.6rem] sm:w-[50%] lg:w-[40%]">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              laborum hic cupiditate at possimus. Quam omnis accusamus alias
              neque velit.
            </h1>
            <button className="rounded-2 bg-gray-300 px-5 py-2">
              im a great button
            </button>
          </div>
          <div className="justify relative mx-5 my-7 flex items-center justify-center">
            <img
              className="h-auto max-w-full overflow-hidden rounded-full object-cover lg:max-w-[70%]"
              src={img}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
