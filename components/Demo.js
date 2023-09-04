export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Cartão
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Adquira Agora o Cartão de descontos
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Para membros da Igreja ADSA Brasil.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">

        <img
          src="images/cartao1.jpg"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
       
      </div>
      
    </section>
  );
}
