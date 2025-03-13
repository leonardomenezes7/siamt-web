import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/services/api"
import { ArrowLeft, Calendar, Captions, File, Image, LetterText, Trash, User } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface News {
  id: string
  title: string
  author: string
  description: string
  file: string
}

interface Convention {
  id: string
  title: string
  year: string
  file: string
}
 
function handleFileSelected(
  event: ChangeEvent<HTMLInputElement>,
  setFileFunction: (file: File | null) => void,
  setFileNameFunction: (name: string) => void
) {
  const { files } = event.currentTarget;
  if (files && files.length > 0) {
    setFileFunction(files[0]); // Atualiza o estado corretamente com o arquivo selecionado
    setFileNameFunction(files[0].name); // Atualiza o nome do arquivo no estado
  }
}

export function Admin() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [newsFile, setNewsFile] = useState<File | null>(null)
  const [newsFileName, setNewsFileName] = useState("Nenhum arquivo selecionado");

  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [conventionFile, setConventionFile] = useState<File | null>(null)
  const [conventionFileName, setConventionFileName] = useState("Nenhum arquivo selecionado");

  const [isSubmittingNews, setIsSubmittingNews] = useState(false) // Estado para indicar carregamento ao enviar notícias
  const [isSubmittingConvention, setIsSubmittingConvention] = useState(false) // Estado para indicar carregamento ao enviar convenções

  // Estados para armazenar as notícias e convenções
  const [newsList, setNewsList] = useState<News[]>([])
  const [conventionsList, setConventionsList] = useState<Convention[]>([])

  // Função para buscar notícias da API
  async function fetchNews() {
    try {
      const response = await api.get("/news")
      setNewsList(response.data)
    } catch (error) {
      console.error("Erro ao buscar notícias:", error)
    }
  }

  // Função para buscar convenções da API
  async function fetchConventions() {
    try {
      const response = await api.get("/conventions")
      setConventionsList(response.data)
    } catch (error) {
      console.error("Erro ao buscar convenções:", error)
    }
  }

  // Função para deletar uma notícia
  async function handleDeleteNews(id: string) {
    try {
      await api.delete(`/news/${id}`)
      setNewsList(newsList.filter(news => news.id !== id))
      alert("Notícia removida com sucesso!")
    } catch (error) {
      console.error("Erro ao deletar notícia:", error)
      alert("Erro ao deletar notícia")
    }
  }

  // Função para deletar uma convenção
  async function handleDeleteConvention(id: string) {
    try {
      await api.delete(`/conventions/${id}`)
      setConventionsList(conventionsList.filter(convention => convention.id !== id))
      alert("Convenção removida com sucesso!")
    } catch (error) {
      console.error("Erro ao deletar convenção:", error)
      alert("Erro ao deletar convenção")
    }
  }

  // Carregar as notícias e convenções ao entrar na página
  useEffect(() => {
    fetchNews()
    fetchConventions()
  }, [])

  async function handleSubmitNews(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmittingNews(true) // Inicia o estado de carregamento

    if (!newsFile) {
      alert("Por favor, selecione uma imagem para a notícia!")
      setIsSubmittingNews(false) // Finaliza o estado de carregamento
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
        setNewsFileName("Nenhum arquivo selecionado"); // Reseta o nome do arquivo
      } else {
        alert("Erro ao enviar notícia")
      }
    } catch (error) {
      console.error("❌ Erro ao enviar notícia:", error)
      alert("Erro ao enviar notícia")
    } finally {
      setIsSubmittingNews(false) // Finaliza o estado de carregamento
    }
  }

  async function handleSubmitConvention(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmittingConvention(true) // Inicia o estado de carregamento
  
    if (!conventionFile) {
      alert("Por favor, selecione um arquivo para a convenção!")
      setIsSubmittingConvention(false) // Finaliza o estado de carregamento
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
        setConventionFileName("Nenhum arquivo selecionado"); // Reseta o nome do arquivo
      } else {
        alert("Erro ao enviar convenção")
      }
    } catch (error: any) {
      console.error("❌ Erro ao enviar convenção:", error.response?.data || error)
      alert("Erro ao enviar convenção. Veja o console para mais detalhes.")
    } finally {
      setIsSubmittingConvention(false) // Finaliza o estado de carregamento
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

          <label className="flex flex-col">
            <span className="text-gray-600">Imagem da Notícia</span>
            <label className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
              <Image /> {newsFileName}
              <input type="file" className="sr-only" onChange={(e) => handleFileSelected(e, setNewsFile, setNewsFileName)} />
            </label>
          </label>

          <Button type="submit" className="bg-transparent w-[100px] mx-auto text-green-500" disabled={isSubmittingNews}>
            {isSubmittingNews ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </div>

      {/* Lista de Notícias */}
      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Gerenciar Notícias</h2>

        {newsList.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhuma notícia cadastrada.</p>
        ) : (
          <ul className="space-y-4">
            {newsList.map(news => (
              <li key={news.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <span>{news.title}</span>
                <button onClick={() => handleDeleteNews(news.id)} className="text-red-500 hover:text-red-700">
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
        )}
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

          <label className="flex flex-col">
            <span className="text-gray-600">Arquivo da Convenção</span>
            <label className="flex gap-2 bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-transform">
              <File /> {conventionFileName}
              <input type="file" className="sr-only" onChange={(e) => handleFileSelected(e, setConventionFile, setConventionFileName)} />
            </label>
          </label>

          <Button type="submit" className="bg-transparent w-[100px] mx-auto text-green-500" disabled={isSubmittingConvention}>
            {isSubmittingConvention ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </div>

      {/* Lista de Convenções */}
      <div className="mx-auto bg-slate-100 w-[800px] rounded-lg p-12 mb-12 max-md:p-6 max-md:w-auto">
        <h2 className="text-green-500 text-4xl italic mb-8 max-md:text-xl">Gerenciar Convenções</h2>

        {conventionsList.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhuma convenção cadastrada.</p>
        ) : (
          <ul className="space-y-4">
            {conventionsList.map(convention => (
              <li key={convention.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <span>{convention.title}</span>
                <button onClick={() => handleDeleteConvention(convention.id)} className="text-red-500 hover:text-red-700">
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </div>
  )
}