import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { News } from "@/components/news";

export function Home() {
  return(
    <div className="">
      <Header/>

      <main className="flex flex-col justify-center items-center">
        <div className="bg-home w-full h-[800px] bg-cover bg-center flex items-start justify-center">
          <h1 className="text-7xl text-slate-50 font-bold border-b-4 py-5 uppercase italic mt-60">Bem-vindos ao SIAMT</h1>
        </div>

        <News/>
      </main>

      <Footer/>
    </div>
  )
}