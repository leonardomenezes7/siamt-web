import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { News } from "@/components/news"
import { Map } from "@/components/map"
import { Services } from "@/components/services"

export function Home() {
  return(
    <div className="">
      <Header/>

      <main className="flex flex-col">
        <div className="bg-home w-full h-[800px] bg-cover bg-center flex items-start justify-center">
          <h1 className="text-7xl text-slate-50 font-bold border-b-4 py-5 uppercase italic mt-60 max-lg:text-3xl">Bem-vindos ao SIAMT</h1>
        </div>

        <News/>

        <Services/>

        <Map/>
      </main>

      <Footer/>
    </div>
  )
}