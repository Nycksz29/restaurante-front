"use client"

import Image from 'next/image';

export default function Home() {
  

  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }


  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 grid grid-cols gap-4">


      <Image
      src="/reste.jpg"
      alt="Logotipo"
      width={200}
      height={200}
      className="mx-auto mb-4"
      />

      <h1 className="text-2xl font-bold mv-6">
        Restaurante - Leblanc
        </h1>

      <input type="text"
      placeholder="Digite a descricao..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="number"
      placeholder="Digite o preco..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="text"
      placeholder="Digite a categoria..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="number"
      placeholder="O lanche está disponivel?..."
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <button 
      onClick={cadastrar}
      className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white shadow-sm cursor-pointer hover:bg-blue-800" 
      >
        Cadastrar
        </button>
      

    </div>
    </main>
  );
}