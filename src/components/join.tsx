export function Join() {
  return (
    <section className="bg-gray-100 rounded-xl shadow-lg px-4 md:px-8 lg:px-16 py-12">
      {/* Título seguindo o padrão da Home */}
      <h2 className="text-2xl font-bold text-green-600 border-b-4 pb-2 mb-6 uppercase italic">
        Associe-se
      </h2>

      {/* Texto explicativo */}
      <p className="text-sm md:text-base text-gray-800 max-w-lg">
        Faça parte do SIAMT e tenha acesso a benefícios exclusivos para sua empresa. Para mais informações sobre como se associar, entre em contato conosco.
      </p>

      {/* Botão para enviar e-mail */}
      <a
        href="mailto:siamt@siamt.com.br"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-all"
      >
        Enviar E-mail
      </a>
    </section>
  )
}