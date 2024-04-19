import img from '../../assets/banner.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
              The best store in the world!
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
              You will find anything you need here, take a look!
            </p>

            <Link
              to="marketplace"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Start shopping
            </Link>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img src={img} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
