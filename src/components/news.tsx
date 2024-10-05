import { Swiper, SwiperSlide } from "swiper/react"
import homeImage from "../assets/home.png"
import 'swiper/css';
import { useEffect, useState } from "react";


export function News() {
  const [slidesPerView, setSlidesPerView] = useState(2)

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

      <div className="">
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              <img src={homeImage} alt="Foto da notícia" />
              <h2 className="text-lg font-semibold text-green-500">Novo projeto de infraestrutura é anunciado para revitalizar áreas urbanas.</h2>
              <p className="break-words">
                Um novo projeto de infraestrutura foi anunciado nesta semana com o objetivo de revitalizar áreas urbanas em grandes cidades. O plano inclui melhorias em sistemas de transporte público, ampliação de áreas verdes e modernização de espaços comunitários. Autoridades destacam que o projeto visa melhorar a qualidade de vida dos moradores e promover o desenvolvimento sustentável. As obras devem começar no início do próximo ano e estão previstas para serem concluídas em 2026.
              </p>

              <div className="flex justify-between text-muted-foreground">
                <span>Autor: Leonardo Menezes</span>
                <span>11/03/2005</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              <img src={homeImage} alt="Foto da notícia" />
              <h2 className="text-lg font-semibold text-green-500">Novo projeto de infraestrutura é anunciado para revitalizar áreas urbanas.</h2>
              <p className="break-words">
                Um novo projeto de infraestrutura foi anunciado nesta semana com o objetivo de revitalizar áreas urbanas em grandes cidades. O plano inclui melhorias em sistemas de transporte público, ampliação de áreas verdes e modernização de espaços comunitários. Autoridades destacam que o projeto visa melhorar a qualidade de vida dos moradores e promover o desenvolvimento sustentável. As obras devem começar no início do próximo ano e estão previstas para serem concluídas em 2026.
              </p>

              <div className="flex justify-between text-muted-foreground">
                <span>Autor: Leonardo Menezes</span>
                <span>11/03/2005</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              <img src={homeImage} alt="Foto da notícia" />
              <h2 className="text-lg font-semibold text-green-500">Novo projeto de infraestrutura é anunciado para revitalizar áreas urbanas.</h2>
              <p className="break-words">
                Um novo projeto de infraestrutura foi anunciado nesta semana com o objetivo de revitalizar áreas urbanas em grandes cidades. O plano inclui melhorias em sistemas de transporte público, ampliação de áreas verdes e modernização de espaços comunitários. Autoridades destacam que o projeto visa melhorar a qualidade de vida dos moradores e promover o desenvolvimento sustentável. As obras devem começar no início do próximo ano e estão previstas para serem concluídas em 2026.
              </p>

              <div className="flex justify-between text-muted-foreground">
                <span>Autor: Leonardo Menezes</span>
                <span>11/03/2005</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-4">
              <img src={homeImage} alt="Foto da notícia" />
              <h2 className="text-lg font-semibold text-green-500">Novo projeto de infraestrutura é anunciado para revitalizar áreas urbanas.</h2>
              <p className="break-words">
                Um novo projeto de infraestrutura foi anunciado nesta semana com o objetivo de revitalizar áreas urbanas em grandes cidades. O plano inclui melhorias em sistemas de transporte público, ampliação de áreas verdes e modernização de espaços comunitários. Autoridades destacam que o projeto visa melhorar a qualidade de vida dos moradores e promover o desenvolvimento sustentável. As obras devem começar no início do próximo ano e estão previstas para serem concluídas em 2026.
              </p>

              <div className="flex justify-between text-muted-foreground">
                <span>Autor: Leonardo Menezes</span>
                <span>11/03/2005</span>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}
