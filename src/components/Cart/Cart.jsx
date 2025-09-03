import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, product) => sum + product.prix, 0).toFixed(2);

  return (
    <div>
      <h2 className="text-xl mb-4">Panier</h2>

      {cart.length === 0 ? (
        <p>Ton panier est vide 😢</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-2">
            {cart.map((product, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 border p-3 rounded-lg shadow-sm"
              >
                <img
                  src={product.etiquette}
                  alt={product.nom}
                  className="h-16 w-16 object-contain"
                />
                <div className="flex-1">
                  <p className="font-semibold">{product.nom}</p>
                  <p className="text-sm italic text-gray-600">{product.titre}</p>
                  <p className="font-bold">{product.prix} €</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(idx))}
                  className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded transition text-sm"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-200 hover:bg-red-300 text-red-800 py-1 px-3 rounded text-sm transition"
            >
              Vider le panier
            </button>
            <p className="font-bold text-lg">Total : {total} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
