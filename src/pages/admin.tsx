import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/services/api"
import { ArrowLeft, Calendar, Captions, File, Image, LetterText, User } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export function Admin() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const [name, setName] = useState("")
  const [year, setYear] = useState("")

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (!files) {
      return
    }

    const selectedFile = files[0]

    setFile(selectedFile)
  }

  async function handleSubmitNews(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData()
    formData.append("title", title)
    formData.append("author", author)
    formData.append("description", description)

    if (file) {
      formData.append("image", file)
    }

    try {
      const response = await api.post("/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Notícia enviada com sucesso!")
      } else {
        alert("Erro ao enviar notícia")
      }
    } catch (error) {
      alert(error)
    }
  }

  async function handleSubmitConvention(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("year", year)

    if (file) {
      formData.append("image", file)
    }

    try {
      const response = await api.post("/conventions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Convenção enviada com sucesso!")
      } else {
        alert("Erro ao enviar Convenção")
      }
    } catch (error) {
      alert(error)
    }
  }

  return(
    <div className="flex flex-col">
      <Header/>

      <div className="w-full px-12 py-6 max-md:p-6">
        <Link to="/" className="flex gap-4 text-green-500">
          <ArrowLeft/>
          Voltar
        </Link>
      </div>

      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Nova notícia</h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmitNews}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="flex gap-2">
            <LetterText />
              Título
            </label>

            <Input 
              id="title"
              placeholder="Insira o título aqui..."
              onChange={e => setTitle(e.target.value)}
              className="text-[16px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="flex gap-2">
              <User />
              Autor
            </label>

            <Input 
              id="author"
              placeholder="Insira o nome do autor aqui..."
              onChange={e => setAuthor(e.target.value)}
              className="text-[16px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="flex gap-2">
              <Captions/>
              Descrição
            </label>

            <Textarea
              id="description"
              placeholder="Insira a descrição aqui..."
              className="resize-none h-[200px] text-[16px]"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
              <Image/>
              Clique para selecionar imagem
            </label>

            <input
              id="file"
              type="file"
              className="sr-only"
              onChange={handleFileSelected}
            />
          </div>

          <Button className="bg-transparent w-[100px] mx-auto border-none shadow-none text-green-500 text-md">
            Enviar
          </Button>
        </form>
      </div>

      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Nova Convenção coletiva</h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmitConvention}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="flex gap-2">
            <LetterText />
              Nome
            </label>

            <Input 
              id="name"
              placeholder="Insira o nome aqui..."
              onChange={e => setName(e.target.value)}
              className="text-[16px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="year" className="flex gap-2">
              <Calendar />
              Ano
            </label>

            <Input 
              id="year"
              placeholder="Insira o ano da convenção aqui..."
              onChange={e => setYear(e.target.value)}
              className="text-[16px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
              <File/>
              Clique para selecionar o arquivo
            </label>

            <input
              id="file"
              type="file"
              className="sr-only"
              onChange={handleFileSelected}
            />
          </div>

          <Button className="bg-transparent w-[100px] mx-auto border-none shadow-none text-green-500 text-md">
            Enviar
          </Button>
        </form>
      </div>

      <Footer/>
    </div>
  )
}