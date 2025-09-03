import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch("api/react/ExercicePratique/contact.json")
      .then((res) => res.json())
      .then((data) => setContactInfo(data))
      .catch((err) => console.error("Erreur de chargement des infos :", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    alert("Formulaire envoyé ! Vérifiez la console.");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center bg-gray-100 p-6 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Adresse mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 sm:mt-4 w-full bg-[#e8e5ce] hover:brightness-90 text-gray-900 py-1.5 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {contactInfo && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col items-center text-center">
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
    </div>
  );
}
