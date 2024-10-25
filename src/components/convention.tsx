import { Download } from "lucide-react"
import { useEffect, useState } from "react"

interface Convention {
  id: string,
  name: string,
  year: string,
  file: string,
}

export function Convention() {
  const [conventions, setConventions] = useState<Convention[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/conventions")
      .then(response => response.json())
      .then(data => {
        setConventions(data.conventions)
        console.log(data.conventions)
      })
  }, [])

  return(
    <div className="flex flex-col space-y-4">
      {conventions.map((item) => {
        return(
          <div className="bg-slate-100 w-[800px] flex mx-auto p-12 rounded-lg justify-between max-md:p-6 max-md:w-[350px]">
            <div>
              <h2 className="font-bold text-green-500">{item.name}</h2>
              <span className="italic font-bold">{item.year}</span>
            </div>

            <div>
              <button>
                <Download/>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}