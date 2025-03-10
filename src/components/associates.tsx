export function Associates() {
  const empresas = [
    "AGRICOLA FERRARRI LTDA",
    "AGUA MINERAL BRUNADO MINERAÇÃO",
    "AGUAS LEBRINHA LTDA",
    "AMAGGI EXPORTAÇÃO E IMPORTAÇÃO LTDA",
    "BUNGE ALIMENTOS SA",
    "COMPANHIA MARANHENSE DE REFRIGERANTES",
    "ESTANCIA HIDROMINERAL GUARANI LTDA EPP",
    "MIKA DA AMAZÔNIA ALIMENTOS LTDA",
    "REFRIGERANTES MARAJÁ LTDA",
    "SADIA S/A",
    "UNIÃO AVICOLA AGROINDUSTRIAL",
    "VITÓRIA REGIA AGUA MINERAL LTDA"
  ]

  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12">
      {/* Título estilizado seguindo o padrão da Home */}
      <h2 className="text-2xl font-bold text-green-600 border-b-4 pb-2 mb-6 uppercase italic">
        Empresas Associadas
      </h2>

      {/* Lista de Empresas */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
        {empresas.map((empresa, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 text-sm md:text-base font-medium">
            {empresa}
          </li>
        ))}
      </ul>
    </section>
  )
}