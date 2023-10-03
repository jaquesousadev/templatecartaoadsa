export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
                Proposta
              </div>
              <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
              Nossa Proposta Única de Valor
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
              O que nos diferencia é o nosso compromisso com a saúde integral e a tranquilidade financeira de nossos clientes. Com os nosso cartão de desconto, 
              você não apenas economiza dinheiro em suas despesas médicas, mas também ganha acesso a uma gama abrangente de benefícios, incluindo assistência funeral e descontos em clínicas e laboratórios.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
             {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg> */} 
              <h3 className="text-xl font-semibold text-white">
              Assistência Funeral
              
              </h3>
              <p className="text-gray-200">
              Reconhecemos que momentos difíceis podem ocorrer, 
              e é por isso que estamos aqui para apoiar você e sua família. 
              Nosso cartão de desconto inclue um valioso benefício de assistência funeral, 
              aliviando o fardo financeiro em um momento de perda. Queremos que você se sinta amparado, 
              sabendo que pode contar conosco não apenas nos momentos de alegria, mas também nos desafios da vida.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
             {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg> */}
              <h3 className="text-xl font-semibold text-white">
              Descontos em Clínicas e Laboratórios
              </h3>
              <p className="text-gray-200">
              A sua saúde é uma prioridade, e nosso cartão de desconto reflete isso. 
              Ao escolher nossos serviços, você ganha acesso a uma ampla rede de parceiros, 
              incluindo clínicas renomadas e laboratórios de alta qualidade. 
              Nossos descontos exclusivos permitem que você cuide de sua saúde física e mental. 
              Afinal, cuidar de si mesmo nunca deve ser um luxo inatingível.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
            {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>  */}  
              <h3 className="text-xl font-semibold text-white">
                Telemedicina 24 horas
              </h3>
              <p className="text-gray-200">
              Imagine ter um médico ao seu alcance a qualquer hora e em qualquer lugar. 
              Com a telemedicina, essa visão se torna realidade. 
              Nosso cartão de desconto oferece acesso a consultas médicas virtuais com profissionais altamente qualificados, 
              eliminando a necessidade de deslocamentos, longas esperas e a burocracia de agendamentos.
              </p>
            </div>
            {/*<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Stunning, beautiful look
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Suggestions are welcome
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Get users, fast.
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
