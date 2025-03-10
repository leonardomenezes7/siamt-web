import presidentPic from "../assets/president.jpeg"

export function Message() {
  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      {/* Texto à esquerda */}
      <div className="text-gray-800 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 italic text-green-500">Mensagem do Presidente</h2>
        <p className="text-sm md:text-base leading-relaxed">
          O Estado de Mato Grosso é um verdadeiro solo fértil para o desenvolvimento. Conhecido mundialmente por seu grande potencial produtivo, aqui empresas e indústrias encontram as condições ideais para nascerem, crescerem e gerarem resultados. Uma delas é a atuação do Sindicato Intermunicipal das Indústrias de Alimentação no Estado de Mato Grosso.
        </p>
        <p className="text-sm md:text-base leading-relaxed mt-2">
          Trabalhando para representar e fortalecer o setor industrial alimentício, o SIAMT busca conhecer as necessidades das empresas para promover diversas ações, que beneficiem seus associados. Por meio dessas ações, o SIAMT leva conhecimento, capacitação e atualização aos produtores, empresários e técnicos, apresentando estratégias de mercado, questões atuais e alternativas para soluções de problemas.
        </p>

        {/* Nome do Presidente */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Wilmar José Franzner</h3>
          <p className="text-gray-600 text-sm">Presidente</p>
        </div>
      </div>

      {/* Imagem do Presidente - Agora maior e alinhada corretamente */}
      <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gray-300 self-center md:self-start">
        <img
          src={presidentPic} // Certifique-se de que o caminho da imagem está correto
          alt="Presidente do SIAMT"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </section>
  )
}