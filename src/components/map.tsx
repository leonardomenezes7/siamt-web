export function Map() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-40 max-md:mt-20">
      <h2 className="text-3xl italic">Localização</h2>
      <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.715122784536!2d-56.05945332447408!3d-15.553395117067785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0e334555cfd%3A0x3edf4611fb0bfacc!2sSindicato%20das%20Ind%C3%BAstrias%20da%20Alimenta%C3%A7%C3%A3o%20de%20Cuiab%C3%A1%20e%20V%C3%A1rzea%20Grande!5e0!3m2!1spt-BR!2sbr!4v1728111149691!5m2!1spt-BR!2sbr" loading="eager"></iframe>
    </div>
  )
}