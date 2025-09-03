import React from "react";

export default function Conditions() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Conditions d’utilisation</h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">1. Acceptation des conditions</h2>
          <p>
            En accédant à ce site, vous acceptez sans réserve les présentes conditions d’utilisation. 
            Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser le site.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">2. Utilisation du site</h2>
          <p>
            L’utilisateur s’engage à utiliser ce site conformément aux lois et réglementations en vigueur 
            et à ne pas perturber son fonctionnement.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
          <p>
            Tous les contenus du site (textes, images, logos, vidéos) sont la propriété exclusive 
            de la Brasserie Artisanale de Rodemack et ne peuvent être reproduits sans autorisation.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">4. Limitation de responsabilité</h2>
          <p>
            La Brasserie de Rodemack ne saurait être tenue responsable de tout dommage direct ou indirect 
            résultant de l’utilisation du site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier les présentes conditions à tout moment. 
            Les utilisateurs sont invités à consulter régulièrement cette page.
          </p>
        </section>
      </div>
    </div>
  );
}
