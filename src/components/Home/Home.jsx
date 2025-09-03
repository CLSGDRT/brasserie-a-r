import React, { useEffect, useState } from "react";

export default function Home() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch("api/react/ExercicePratique/contact.json")
      .then((res) => res.json())
      .then((data) => setContactInfo(data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <main className="pt-24 p-6 text-center">
      <h1 className="text-2xl font-bold">
        Bienvenue sur le site de la Brasserie Artisanale de Rodemack 🍻
      </h1>
      <p className="mt-2 text-gray-600">
        Parcourez notre catalogue et découvrez nos breuvages !
      </p>

      {contactInfo && (
        <div className="mt-6 flex justify-center">
          <img
            src={contactInfo.image}
            alt={contactInfo.nom}
            className="w-full max-w-2xl rounded-lg shadow-lg object-cover"
          />
        </div>
      )}
    </main>
  );
}
