import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Politique de confidentialité</h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">1. Collecte des données</h2>
          <p>
            Les informations recueillies via le formulaire de contact ou tout autre formulaire du site 
            sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées pour améliorer nos services et pour communiquer avec vous 
            concernant vos demandes ou vos commandes.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">3. Conservation des données</h2>
          <p>
            Vos informations personnelles sont conservées uniquement le temps nécessaire au traitement de vos demandes 
            et dans le respect des lois en vigueur sur la protection des données.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">4. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données 
            contre tout accès non autorisé ou divulgation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Vos droits</h2>
          <p>
            Vous disposez d’un droit d’accès, de modification et de suppression des informations que vous nous avez fournies. 
            Pour exercer ces droits, contactez-nous via le formulaire de contact ou par email.
          </p>
        </section>
      </div>
    </div>
  );
}
