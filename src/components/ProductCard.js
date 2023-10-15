import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;

  const handleAdd = () => {
    console.log(`${id}, ${name}, ${price}`)
  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={handleAdd}>Add To Cart</button>
      </div>
    </div>
  )
}
