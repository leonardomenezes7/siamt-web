export function Directory() {
  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-8 flex flex-col gap-6">
      {/* Título Principal */}
      <h2 className="text-2xl font-bold italic text-green-600 text-center">
        DIRETORIA 2021/2024
      </h2>

      {/* Efetivos */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">EFETIVOS</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-3">
          <li><span className="font-bold">Wilmar José Franzner</span> – Presidente</li>
          <li><span className="font-bold">Edson Eugenio Bruehmueller</span> – 1º Vice-Presidente</li>
          <li><span className="font-bold">Alvaro Hostins Junior</span> – Vice-Presidente</li>
          <li><span className="font-bold">Luis Antonio Novaes Desidério</span> – Diretor Administrativo</li>
          <li><span className="font-bold">Rubens Porto Rodrigues</span> – Diretor Financeiro</li>
        </ul>
      </div>

      {/* Suplentes */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">SUPLENTES</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li><span className="font-bold">Alexandre Nobre da Silva</span></li>
          <li><span className="font-bold">Antonio Wilson Ieski Junior</span></li>
          <li><span className="font-bold">Rodolfo Alves de Almeida</span></li>
          <li><span className="font-bold">Marli Becker Santos</span></li>
          <li><span className="font-bold">Daniel Nery Franzner</span></li>
        </ul>
      </div>

      {/* Conselho Fiscal - Efetivos */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">CONSELHO FISCAL - EFETIVOS</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li><span className="font-bold">Joair Pinho de Souza</span></li>
          <li><span className="font-bold">Elizabete Cristina de Brito Garcia</span></li>
          <li><span className="font-bold">Ulana Maria Bruehmueller Borges</span></li>
        </ul>
      </div>

      {/* Conselho Fiscal - Suplentes */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">CONSELHO FISCAL - SUPLENTES</h3>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2 mt-3">
          <li><span className="font-bold">Elson Rudimar de Carvalho</span></li>
          <li><span className="font-bold">Léo Barato</span></li>
          <li><span className="font-bold">Felipe Neri Franzner</span></li>
        </ul>
      </div>

      {/* Delegados Representantes junto à FIEMT */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 border-b pb-2">DELEGADOS REPRESENTANTES JUNTO À FIEMT</h3>

        {/* Efetivos */}
        <h4 className="text-green-600 font-medium mt-3">EFETIVOS</h4>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2">
          <li><span className="font-bold">Wilmar José Franzner</span></li>
          <li><span className="font-bold">Luis Antonio Novaes Desidério</span></li>
        </ul>

        {/* Suplentes */}
        <h4 className="text-green-600 font-medium mt-3">SUPLENTES</h4>
        <ul className="text-sm md:text-base text-gray-800 grid grid-cols-2 gap-y-2">
          <li><span className="font-bold">Rubens Porto Rodrigues</span></li>
          <li><span className="font-bold">Alvaro Hostins Junior</span></li>
        </ul>
      </div>
    </section>
  )
}