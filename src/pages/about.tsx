import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <Header />

      <main className="flex flex-col">
        <div className="w-full px-12 py-6">
          <Link to="/" className="flex gap-4 text-green-500">
            <ArrowLeft/>
            Voltar
          </Link>
        </div>

        <div className="w-full bg-about bg-cover bg-left h-[344px] flex items-center p-12 max-md:h-[200px] max-md:p-6">
          <h1 className="text-6xl font-semibold italic text-white max-md:text-4xl ">
            Sobre
          </h1>
        </div>

        <div className="p-12 flex justify-evenly max-lg:flex-col max-lg:p-6 max-lg:space-y-6 max-lg:items-center">
          <div>
            <h2 className="text-3xl text-green-500 italic">Quem somos</h2>

            <p className="mt-4 max-w-[400px]">
              O Sindicato Intermunicipal da Indústria da Alimentação do Estado de Mato Grosso (SIAMT) representa as empresas do setor alimentício, promovendo seu desenvolvimento, defendendo interesses, e incentivando inovação e capacitação contínua.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-green-500 italic">Missão</h2>

            <p className="mt-4 max-w-[400px]">
              Defender as Indústrias de Alimentação de Mato Grosso, aperfeiçoar
              a cadeia produtiva, respeitando as pessoas, o meio ambiente,
              gerando emprego, renda e desenvolvimento para o Estado.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-green-500 italic">Visão do SIAMT</h2>

            <p className="mt-4 max-w-[400px]">
              Ser o principal órgão representativo do segmento de Alimentação de Mato Grosso, com influência total e decisiva para os associados, governo e sociedade em geral.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
