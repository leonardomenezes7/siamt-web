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
  const [newsFile, setNewsFile] = useState<File | null>(null)

  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [conventionFile, setConventionFile] = useState<File | null>(null)

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>, setFileFunction: (file: File | null) => void) {
    const { files } = event.currentTarget
    if (files && files.length > 0) {
      setFileFunction(files[0])
    }
  }

  async function handleSubmitNews(event: React.FormEvent) {
    event.preventDefault()

    if (!newsFile) {
      alert("Por favor, selecione uma imagem para a notícia!")
      return
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("author", author)
    formData.append("description", description)
    formData.append("file", newsFile)

    console.log("📤 Enviando Notícia:", { title, author, description, file: newsFile.name })

    try {
      const response = await api.post("/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (response.status === 201) {
        alert("Notícia enviada com sucesso!")
        setTitle("")
        setAuthor("")
        setDescription("")
        setNewsFile(null)
      } else {
        alert("Erro ao enviar notícia")
      }
    } catch (error) {
      console.error("❌ Erro ao enviar notícia:", error)
      alert("Erro ao enviar notícia")
    }
  }

  async function handleSubmitConvention(event: React.FormEvent) {
    event.preventDefault()
  
    if (!conventionFile) {
      alert("Por favor, selecione um arquivo para a convenção!")
      return
    }
  
    const formData = new FormData()
    formData.append("title", name) // 🔥 Corrigido de "name" para "title"
    formData.append("year", year)
    formData.append("file", conventionFile)
  
    console.log("📤 Enviando Convenção:", {
      title: name, // 🔥 Mostra que "title" está sendo enviado corretamente
      year,
      file: conventionFile.name
    })
  
    try {
      const response = await api.post("/conventions", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
  
      console.log("✅ Resposta do servidor:", response.data)
  
      if (response.status === 201) {
        alert("Convenção enviada com sucesso!")
        setName("")
        setYear("")
        setConventionFile(null)
      } else {
        alert("Erro ao enviar convenção")
      }
    } catch (error: any) {
      console.error("❌ Erro ao enviar convenção:", error.response?.data || error)
      alert("Erro ao enviar convenção. Veja o console para mais detalhes.")
    }
  }

  return (
    <div className="flex flex-col">
      <Header />

      <div className="w-full px-12 py-6 max-md:p-6">
        <Link to="/" className="flex gap-4 text-green-500">
          <ArrowLeft />
          Voltar
        </Link>
      </div>

      {/* Formulário de Notícia */}
      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Nova notícia</h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmitNews}>
          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              <LetterText /> Título
            </label>
            <Input placeholder="Insira o título aqui..." value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              <User /> Autor
            </label>
            <Input placeholder="Insira o nome do autor aqui..." value={author} onChange={e => setAuthor(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              <Captions /> Descrição
            </label>
            <Textarea placeholder="Insira a descrição aqui..." className="resize-none h-[200px]" value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          <label className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
            <Image /> Clique para selecionar imagem
            <input type="file" className="sr-only" onChange={(e) => handleFileSelected(e, setNewsFile)} />
          </label>

          <Button type="submit" className="bg-transparent w-[100px] mx-auto text-green-500">
            Enviar
          </Button>
        </form>
      </div>

      {/* Formulário de Convenção */}
      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Nova Convenção coletiva</h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmitConvention}>
          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              <LetterText /> Nome
            </label>
            <Input placeholder="Insira o nome aqui..." value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              <Calendar /> Ano
            </label>
            <Input placeholder="Insira o ano da convenção aqui..." value={year} onChange={e => setYear(e.target.value)} />
          </div>

          <label className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
            <File /> Clique para selecionar o arquivo
            <input type="file" className="sr-only" onChange={(e) => handleFileSelected(e, setConventionFile)} />
          </label>

          <Button type="submit" className="bg-transparent w-[100px] mx-auto text-green-500">
            Enviar
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  )
}