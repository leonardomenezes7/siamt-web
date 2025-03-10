import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { useEffect, useState } from "react";

interface News {
  id: string,
  title: string,
  description: string,
  author: string,
  created_at: string
  fileUrl: string,
}

export function News() {
  const [slidesPerView, setSlidesPerView] = useState(2)
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/news")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setNews(data)
      })
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      }
    }

    handleResize()
  }, [])

  return (
    <div className="flex flex-col space-y-6 p-12 max-lg:p-6">
      <h2 className="text-6xl text-green-500 italic font-semibold max-lg:text-3xl">Notícias</h2>

      <div>
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {news.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col space-y-4">
                <img src={item.fileUrl} alt="Foto da notícia" />
                <h2 className="text-lg font-semibold text-green-500">{item.title}</h2>
                <p className="break-words">
                  {item.description}
                </p>

                <div className="flex justify-between text-muted-foreground">
                  <span>{item.author}</span>
                  <span>{item.created_at}</span>
                </div>
              </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}
