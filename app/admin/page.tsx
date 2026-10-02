"use client"

import Image from "next/image"
import { useState } from "react"


export default function AdminPage(){

    const[descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const[preco, setPreco] = useState("")
    const[imagem, setImagem] = useState("")


    async function cadastrarLanche(e: any) {

        e.preventDefault()
        
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })

            })

            alert("Produto cadastrado com sucesso")
        } catch (error) {
            console.log(error)
            alert("Erro")
        }
    }

    return(
        <main className="min-h-screen bg-amber-100">
            <div className="mx-auto mt-20 max-w-xl rounded-lg bg-yellow-400 p-8 shadow items-center justify-center">
                <h1 className="mb-6 text-3xl font-bold text-amber-950 mx-auto">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label className="text-amber-950">Descrição</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: X-Bacon"
                        className="w-full rounded-xl border p-3 text-black bg-white"
                        />
                    </div>

                    <div>
                        <label className="text-amber-950">Categoria</label>
                        <input type="text"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Ex: X-Bacon de salada com carne"
                        className="w-full rounded-xl border p-3 text-black bg-white"
                        />
                    </div>

                    <div>
                        <label className="text-amber-950">Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded-xl border p-3 text-black bg-white"        
                        />
                    </div>

                    <div>
                        <label className="text-amber-950">Imagem</label>
                        <input 
                        type="text"
                        value={imagem}
                        onChange={(e)=> setImagem(e.target.value)}
                        placeholder="Cole o link da imagem aqui..."
                        className="w-full rounded-xl border p-3 text-black bg-white"
                        />
                    </div>
                    <button
                    type="submit"
                    className="w-full rounded-xl bg-amber-100 py-3 font-semibold text-amber-950 hover:bg-amber-200">
                        Cadastrar Lanche
                    </button>
                </form>
            </div>
        </main>
    )
}