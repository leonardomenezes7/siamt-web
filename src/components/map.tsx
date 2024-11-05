export function Map() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-40 max-md:mt-20">
      <h2 className="text-3xl italic">Localização</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30747.503551870093!2d-56.10367432089844!3d-15.568232999999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0fda12a7ddb%3A0xc08ed0c2b8cd3dd5!2sSistema%20Fiemt!5e0!3m2!1spt-BR!2sbr!4v1730746384834!5m2!1spt-BR!2sbr" width="600" height="450" className="w-full"  loading="eager"></iframe>
    </div>
  )
}