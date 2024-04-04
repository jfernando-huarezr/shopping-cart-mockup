import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const Marketplace = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('An error ocurred ', error)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="pt-5 text-center">I&apos;m the marketplace</h1>
        {!products ? (
          <div>Loading...</div>
        ) : (
          products.map((element) => <ProductCard />)
        )}
      </div>
    </section>
  )
}

export default Marketplace
