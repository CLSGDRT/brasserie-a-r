import React from "react";

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black bg-opacity-50">
      <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl lg:max-w-2xl overflow-y-auto max-h-[90vh]">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
        >
          ✖
        </button>

        {/* Image produit */}
        <img
          src={product.etiquette}
          alt={product.nom}
          className="h-32 sm:h-40 md:h-48 mx-auto mb-4 object-contain"
        />

        {/* Nom + titre */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">
          {product.nom}
        </h2>
        <p className="text-gray-700 italic mb-4 text-center text-sm sm:text-base">
          {product.titre}
        </p>

        {/* Description */}
        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          {product.description}
        </p>

        {/* Fiche technique */}
        <ul className="space-y-1 mb-4 text-sm sm:text-base">
          {product.ficheTechnique.map((item, idx) => {
            const [key, value] = Object.entries(item)[0];
            return (
              <li key={idx}>
                <span className="font-semibold">{key} :</span> {value}
              </li>
            );
          })}
        </ul>

        {/* Prix */}
        <p className="font-bold text-base sm:text-lg text-center">
          Prix : {product.prix} €
        </p>
      </div>
    </div>
  );
};

export default Modal;
