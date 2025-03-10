import { Download } from "lucide-react"
import { useEffect, useState } from "react"

interface Convention {
  id: string,
  title: string,
  year: string,
  file: string,
  fileUrl: string
}

export function Convention() {
  const [conventions, setConventions] = useState<Convention[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/conventions")
      .then(response => response.json())
      .then(data => {
        console.log("📥 Dados recebidos no frontend:", data) // 👀 Log para verificar se os dados chegam
        setConventions(data)
      })
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {conventions.map((item) => (
        <div key={item.id} className="bg-slate-100 w-[500px] flex mx-auto p-12 rounded-lg justify-between max-md:p-6 max-md:w-[350px]">
          <div>
            <h2 className="font-bold text-green-500">{item.title}</h2>
            <span className="italic font-bold">{item.year}</span>
          </div>

          <div>
            <a
              download={item.file}
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              <Download />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}