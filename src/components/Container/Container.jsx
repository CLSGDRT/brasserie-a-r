import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useList } from '../../contexts/ListProvider'

const navigation = [
  { name: 'Catalogue', to: '/catalog' },
  { name: 'Panier', to: '/cart' },
  { name: 'Contact', to: '/contact' },
]

export default function Container() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { clearCart } = useList()

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Brasserie de Rodemack</span>
              <img
                alt="Brasserie"
                src="/logo.png"
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto"
              />
            </Link>
          </div>

          {/* Bouton desktop */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm font-semibold text-gray-900 hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
            {/* <button
              onClick={clearCart}
              className="bg-red-500 text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
            >
              Vider le panier
            </button> */}
          </div>

          {/* Bouton menu mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Brasserie de Rodemack</span>
                <img alt="Brasserie" src="/logo.png" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <button
                    onClick={() => {
                      clearCart()
                      setMobileMenuOpen(false)
                    }}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-red-600 hover:bg-red-50"
                  >
                    Vider le panier
                  </button> */}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="pt-24 min-h-[50vh]">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        <p>
          Nous ne vendons rien, si vous êtes amenés à effectuer un paiement sur notre site, vous l'aurez probablement dans le cul.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.7rem]">
          <span>© {new Date().getFullYear()} Brasserie Artisanale de Rodemack</span>
          <span>·</span>
          <a href="/mentions" className="hover:underline">Mentions légales</a>
          <span>·</span>
          <a href="/conditions" className="hover:underline">Conditions d’utilisation</a>
          <span>·</span>
          <a href="/privacy" className="hover:underline">Politique de confidentialité</a>
          <span>·</span>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    </>
  )
}
