import statusPDF from "../assets/estatuto_SIAMT.pdf"

export function Status() {
  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12">
      {/* Título no mesmo estilo da página Home */}
      <h2 className="text-2xl font-bold text-green-600 border-b-4 pb-2 mb-6 uppercase italic">
        Estatuto
      </h2>

      {/* Descrição e Botão Centralizados à Esquerda */}
      <div className="flex flex-col items-start">
        <p className="text-sm md:text-base text-gray-800 max-w-lg">
          Baixe o estatuto com as instruções detalhadas em PDF.
        </p>
        <a
          href={statusPDF}
          download={statusPDF}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all"
        >
          Baixar Estatuto
        </a>
      </div>
    </section>
  )
}