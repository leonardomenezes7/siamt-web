import { Convention } from "@/components/convention";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function Conventions() {
  return(
    <div>
      <Header/>

      <div className="mt-12 mb-12">
        <Convention/>
      </div>

      <Footer/>
    </div>
  )
}