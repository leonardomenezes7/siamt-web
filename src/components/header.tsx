import { Link } from "react-router-dom"

export function Header() {
  return(
    <header className="bg-slate-50 w-full flex items-center p-12 justify-between max-md:hidden">
      <img src="" alt="Logo SIAMT" />
      
      <nav className="flex gap-12 font-semibold text-green-600">
        <Link to="/" className="hover:text-green-700">
          Home
        </Link>

        <Link to="/about" className="hover:text-green-700">
          Sobre
        </Link>

        <Link to="/about" className="hover:text-green-700">
          Notícias
        </Link>

        <Link to="/about" className="hover:text-green-700">
          Convenções Coletivas
        </Link>

        <Link to="/about" className="hover:text-green-700">
          Contato
        </Link>
      </nav>
    </header>
  )
}