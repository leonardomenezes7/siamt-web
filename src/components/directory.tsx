export function Directory() {
  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12 my-12">
      {/* Título Principal */}
      <h2 className="text-2xl font-bold italic text-green-600 text-center">
        DIRETORIA <br />
        TRIÊNIO 2024/2027
      </h2>

      <p className="text-sm text-gray-800 text-center mt-2">
        SINDICATO INTERMUNICIPAL DAS INDÚSTRIAS DA ALIMENTAÇÃO NO ESTADO DE MATO GROSSO
        <br />
        CNPJ 03.750.171/0001-26
      </p>

      {/* Diretoria - Efetivos */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">DIRETORIA - EFETIVOS</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-3">
          <li><strong>Wilmar José Franzner</strong> - Presidente</li>
          <li><strong>Luis Antonio Novaes Desidério</strong> – 1º Vice Presidente</li>
          <li><strong>Maria Aparecida Favero Neto Perez</strong> - Vice Presidente</li>
          <li><strong>Marli Becker Santos</strong> – Diretor Administrativo</li>
          <li><strong>Rubens Porto Rodrigues</strong> – Diretor Financeiro</li>
        </ul>
      </div>

      {/* Diretoria - Suplentes */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">DIRETORIA - SUPLENTES</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li>Edson Eugênio Bruehmueller</li>
          <li>Elizabete Cristina de Brito Garcia</li>
          <li>Rodolfo Alves de Almeida</li>
          <li>Elson Rudimar de Carvalho</li>
          <li>Antonio Wilson Ieski Junior</li>
        </ul>
      </div>

      {/* Conselho Fiscal - Efetivos */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">CONSELHO FISCAL - EFETIVOS</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li>Joair Pinho de Souza</li>
          <li>Ricardo Alves de Almeida</li>
          <li>Daniel Nery Franzner</li>
        </ul>
      </div>

      {/* Conselho Fiscal - Suplentes */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">CONSELHO FISCAL - SUPLENTES</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li>Filipe Nery Franzner</li>
          <li>Jocimar Ricas</li>
          <li>Flavia Alves de Almeida</li>
        </ul>
      </div>

      {/* Representantes junto ao Conselho da FIEMT */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">
          REPRESENTANTES JUNTO AO CONSELHO DE REPRESENTANTES DA FIEMT
        </h3>

        {/* Efetivos */}
        <h4 className="text-green-600 font-medium mt-3">EFETIVOS</h4>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2">
          <li>Wilmar José Franzner</li>
          <li>Luis Antonio Novaes Desidério</li>
        </ul>

        {/* Suplentes */}
        <h4 className="text-green-600 font-medium mt-3">SUPLENTES</h4>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2">
          <li>Rubens Porto Rodrigues</li>
          <li>Edson Eugênio Bruehmueller</li>
        </ul>
      </div>
    </section>
  )
}