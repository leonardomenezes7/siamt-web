export function Footer() {
  return(
    <footer className="bg-slate-50 flex flex-col justify-center items-center p-12 space-y-4 max-md:p-6">
      <img src="" alt="Logo do SIAMT" />

      <span className="text-sm max-md:text-center">Av. Historiador Rubens de Mendonça, 4193 - Bosque da Saude, Cuiabá - MT</span>
      <a href="mailto:leonardomenezes3241@gmail.com" className="text-green-500">siamt@siamt.com.br</a>
      <span>(65) 3644-1026</span>

      <div className="flex border-t w-full">
        <a href="#" className="text-sm text-muted-foreground mt-3">Desenvolvido por YDev</a>
      </div>
    </footer>
  )
}