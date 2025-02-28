import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { News } from "@/components/news"
import { Map } from "@/components/map"
import { Services } from "@/components/services"
import { Message } from "@/components/message"
import { Directory } from "@/components/directory"
import { Status } from "@/components/status"
import { Associates } from "@/components/associates"
import { Join } from "@/components/join"
import { Curriculum } from "@/components/curriculum"
import { Slider } from "@/components/slider"

export function Home() {
  return(
    <div className="">
      <Header/>

      <main className="flex flex-col">
        <Slider/>

        <News/>

        <Services/>

        <Status/>

        <Message/>

        <Associates/>

        <Join/>


        <Curriculum/>
      </main>

      <Directory/>
      
      <Map/>

      <Footer/>
    </div>
  )
}