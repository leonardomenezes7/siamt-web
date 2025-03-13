import { Download } from "lucide-react"
import { useEffect, useState } from "react"

interface Convention {
  id: string
  title: string
  year: string
  file: string
  fileUrl: string
}

export function Convention() {
  const [conventions, setConventions] = useState<Convention[]>([])

  useEffect(() => {
    fetch("https://siamt-api.onrender.com/conventions")
      .then(response => response.json())
      .then(data => {
        console.log("📥 Dados recebidos no frontend:", data)
        setConventions(data)
      })
  }, [])

  // Agrupar convenções pelo nome do meio (extraído do título)
  const groupedConventions = conventions.reduce((acc, convention) => {
    const parts = convention.title.split(" ")
    if (parts.length >= 3) {
      const key = parts[1]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(convention)
    }
    return acc
  }, {} as Record<string, Convention[]>)

  return (
    <div className="flex flex-col gap-12 px-6 md:px-12">
      <h2 className="text-4xl text-green-600 text-center mb-6 italic">Convenções Coletivas</h2>

      {Object.keys(groupedConventions).map((groupName) => (
        <div key={groupName} className="bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Título do Grupo */}
          <h3 className="text-2xl font-semibold text-green-500 border-b-4 border-green-400 pb-3 mb-6 uppercase">
            {groupName}
          </h3>

          {/* Lista de Convenções do Grupo em formato horizontal */}
          <div className="flex gap-6 overflow-x-auto pb-4">
            {groupedConventions[groupName].map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 w-[320px] min-w-[320px] flex flex-col p-5 rounded-lg shadow-md justify-between border border-gray-300"
              >
                <div>
                  <h4 className="font-bold text-green-600 text-lg">{item.title}</h4>
                  <span className="italic font-medium text-gray-700">{item.year}</span>
                </div>

                <a
                  download={item.file}
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-green-500 hover:text-green-700 mt-4 font-semibold"
                >
                  <Download size={22} />
                  <span>Baixar</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}