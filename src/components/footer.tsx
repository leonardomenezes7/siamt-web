import logo from "../assets/logo-g.png"

export function Footer() {
  return(
    <footer className="bg-slate-100 flex flex-col justify-center items-center p-12 space-y-4 max-md:p-6" id="footer">
      <img src={logo} alt="Logo do SIAMT" className="h-12"/>

      <span className="text-sm max-md:text-center">Av. Historiador Rubens de Mendonça, 4193 - Bosque da Saude, Cuiabá - MT</span>
      <a href="mailto:siamt@siamt.com.br" className="text-green-500">siamt@siamt.com.br</a>
      <span>(65) 3611-1512</span>

      <div className="flex border-t w-full">
        <a href="https://ydevprogramacao.com.br" className="text-sm text-muted-foreground mt-3">Desenvolvido por YDev</a>
      </div>
    </footer>
  )
}