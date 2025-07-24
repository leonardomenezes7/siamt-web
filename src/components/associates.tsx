import { useEffect, useState } from "react"

export function Associates() {
  const [empresas, setEmpresas] = useState<string[]>([])

  useEffect(() => {
    fetch("https://siamt-api.onrender.com/associates")
      .then(res => res.json())
      .then(data => {
        const nomes = data.map((item: { name: string }) => item.name)
        setEmpresas(nomes)
      })
      .catch(err => console.error("Erro ao buscar associados:", err))
  }, [])

  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-2xl font-bold text-green-600 border-b-4 pb-2 mb-6 uppercase italic">
        Empresas Associadas
      </h2>

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