import React, { useState, useEffect } from "react";

export default function Mention() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch("api/react/ExercicePratique/contact.json")
      .then((res) => res.json())
      .then((data) => setContactInfo(data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Mentions légales</h1>

        <section className="mb-4 flex justify-center">
            {contactInfo && (
                <div className="flex flex-col items-center text-center max-w-md">
                <img
                    src={contactInfo.image}
                    alt={contactInfo.nom}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{contactInfo.nom}</h2>
                <p>
                    {contactInfo.adresse.numero} {contactInfo.adresse.rue} <br />
                    {contactInfo.adresse.codePostal} {contactInfo.adresse.ville} <br />
                    {contactInfo.adresse.pays}
                </p>
                <p className="mt-2 font-medium">Email : {contactInfo.mail}</p>
                </div>
            )}
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété exclusive de la Brasserie Artisanale de Rodemack et ne peuvent être utilisés sans autorisation.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Limitation de responsabilité</h2>
          <p>
            La Brasserie de Rodemack ne saurait être tenue responsable des dommages directs ou indirects résultant de l’accès ou de l’utilisation de ce site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Protection des données</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers.
          </p>
        </section>
      </div>
    </div>
  );
}
