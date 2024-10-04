import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { News } from "@/components/news";

export function Home() {
  return(
    <div className="h-full">
      <Header/>

      <main className="flex flex-col justify-center items-center p-12">
        <h1 className="my-8">Sindicato Intermunicipal da Indústria da Alimentação do Estado de Mato Grosso</h1>

        <News/>
      </main>

      <Footer/>
    </div>
  )
}