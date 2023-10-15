
import "./CartCard.css";



export const CartCard = ({product}) => {
  const {id,name,price, image} = product;

  const handleRemove = () => {
    console.log(`${id}, ${name}, ${price}`)
  }
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>remove</button>
      
    </div>
  )
}
