import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/store/cartSlice";
import Modal from "../Modal/Modal";
import Filter from "../Filter/Filter";

const Catalog = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/api/react/ExercicePratique/beers.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Notre Catalogue</h2>

      <Filter products={products} onFilter={setFilteredProducts} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-base sm:text-lg font-bold">{product.nom}</h3>
            <img
              src={product.etiquette}
              alt={product.nom}
              className="h-32 sm:h-40 mx-auto mb-3 sm:mb-4 object-contain cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            />
            <p className="italic text-xs sm:text-sm mt-1 sm:mt-2">{product.prix} € (prix à l'unité)</p>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-2 sm:mt-4 w-full bg-[#e8e5ce] hover:brightness-90 text-gray-900 py-1.5 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm transition"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Catalog;
