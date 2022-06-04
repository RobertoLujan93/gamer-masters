import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
	const { cart } = useCartContext();
  const { removeItem } = useCartContext()
  const { clearCart} = useCartContext()

  return <div className="container mx-auto">
		<h1 className="text-white text-center text-5xl p-4 mb-6">Carrito de compras</h1>
    {cart.map((item) => (
        <div key={item.id} className="mx-auto w-full md:w-7/12 lg:w-5/12 flex flex-col md:flex-row p-4 items-center gap-4">
          <img src={item.pictureUrl} className="w-52" alt={item.title} />
          <div className="text-center lg:text-left">
            <h2 className="text-white text-xl">{item.title}</h2>
            <p className="text-white text-xl"><span>Cantidad: </span>{item.quantity}</p>
            <p className="text-white text-xl"><span>Subtotal: $</span>{item.price*item.quantity}</p>
            <div className="flex justify-center lg:justify-start">
						<button className="btn mt-8 text-black bg-red-600 hover:text-black hover:bg-white" onClick={()=>removeItem(item)}>Eliminar</button>
            </div>
          </div>
        </div>
      ))} 
    {
      cart.length === 0? (
        <div className="h-[calc(100vh-300px)] grid place-content-center">
          <p className="text-white text-xl">Tu carrito está vacío</p>
          <Link to="/" className="btn mt-12 text-black bg-red-600 hover:text-black hover:bg-white">Ver productos</Link>
        </div>
      ) : (
      <>
      <p className="text-white text-center text-xl mt-10"> Total: ${ cart.reduce((acc, item) => acc + (item.price*item.quantity), 0)} </p>
      <div className="flex justify-center">
        <button className="btn mt-10 text-black bg-red-600 hover:text-black hover:bg-white" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to= "/checkout" className="btn mt-10 text-black bg-red-600 hover:text-black hover:bg-white">CHECKOUT</Link>
      </div>
      </>
      )
    } 
	</div>;
};

export default Cart;


