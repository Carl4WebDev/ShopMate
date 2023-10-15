import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"
import  Image1  from "../assets/images/1001.png"
import  Image2  from "../assets/images/1002.png"

export const Cart = () => {

  useTitle("Cart")
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": Image1},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": Image2},
  ]

  
  
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (

          <CartCard key={product.id} product={product}/>
          
        ))}
      </section>
    </main>
  )
}
