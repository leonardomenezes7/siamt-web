import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import President1 from "../assets/presidente.jpeg"
import President5 from "../assets/presidente-5.jpeg"
import President3 from "../assets/presidente-3.jpeg"
import President7 from "../assets/presidente-7.png"
import President2 from "../assets/presidente-2.jpeg"
import President8 from "../assets/presidente-8.png"
import President6 from "../assets/presidente-6.png"
import User from "../assets/user.jpg"



export function About() {
  return (
    <div>
      <Header />

      <main className="flex flex-col">
        <div className="w-full px-12 py-6">
          <Link to="/" className="flex gap-4 text-green-500">
            <ArrowLeft />
            Voltar
          </Link>
        </div>

        <div className="w-full bg-about bg-cover bg-left h-[344px] flex items-center p-12 max-md:h-[200px] max-md:p-6">
          <h1 className="text-6xl font-semibold italic text-white max-md:text-4xl">Sobre</h1>
        </div>

        <div className="p-12 flex flex-col items-center max-lg:p-6">
          <h2 className="text-3xl text-green-500 italic mb-8">Galeria de Ex-Presidentes</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Wilmar José Franzner", period: "2009 - 2015 / 2015 - 2024", image: President1 },
              { name: "Marco Antonio Lorga", period: "2000 - 2003 / 2003 - 2006 / 2006 - 2009", image: President6 },
              { name: "Alexandre H. C. de Souza Furlan", period: "1994 - 1997 / 1997 - 2000", image: President5 },
              { name: "Luís Carlos Rodrigues", period: "1989 - 1994", image: President3 },
              { name: "Alfredo Yuraria Takesawa", period: "Ano não disponível", image: President7 },
              { name: "Célio Gertz Xaver", period: "1984 - 1989", image: President2 },
              { name: "Moulard Herculano Da Costa", period: "1979 - 1982", image: User },
              { name: "Archimedes Pereira Lima", period: "1975 - 1979", image: President8 },
            ].map((president, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img 
                  src={president.image} 
                  alt={president.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-green-500"
                />
                <h3 className="text-lg font-semibold text-green-600 mt-4">{president.name}</h3>
                <p className="text-gray-600">{president.period}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
