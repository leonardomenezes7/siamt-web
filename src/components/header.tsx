import { Link } from "react-router-dom"
import logo from "../assets/logo-g.png"
import mobileLogo from "../assets/logo-s.png"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Menu Mobile */}
      <div className={`bg-slate-50 fixed top-0 left-0 w-full h-full flex flex-col p-6 z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-between">
          <img src={mobileLogo} alt="Logo SIAMT" className="h-8 lg:hidden" />
          <X onClick={() => setOpen(false)} onTouchStart={() => setOpen(false)} />
        </div>

        <nav className="flex flex-col space-y-8 font-semibold text-green-600 mt-8">
          <Link to="/" className="hover:text-green-700 border-b py-4" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" className="hover:text-green-700 border-b py-4" onClick={() => setOpen(false)}>
            Sobre
          </Link>

          <Link to="/conventions" className="hover:text-green-700 border-b py-4" onClick={() => setOpen(false)}>
            Convenções Coletivas
          </Link>
        </nav>
      </div>

      {/* Header */}
      <header className="bg-slate-50 w-full flex items-center px-12 py-4 justify-between max-md:px-6">
        <img src={logo} alt="Logo SIAMT" className="max-lg:hidden" />
        <img src={mobileLogo} alt="Logo SIAMT" className="h-8 lg:hidden" />

        <nav className="flex gap-12 font-semibold text-green-600 max-lg:hidden">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-700">
            Sobre
          </Link>

          <Link to="/conventions" className="hover:text-green-700">
            Convenções Coletivas
          </Link>
        </nav>

        {/* Botão de Menu Mobile */}
        <div
          className="lg:hidden"
          onClick={() => setOpen(true)}
          onTouchStart={() => setOpen(true)}
        >
          <AlignJustify />
        </div>
      </header>
    </>
  )
}