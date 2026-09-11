import Link from "next/link";



export default function Navbar(){



    return(

        <header className="w-full bg-white border-b shadow-sm px-8"> 
            <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700">
                Restaurante
                </Link>


                <div className="flex items-center gap-8">

                    <Link href="/" className="text-gray-700
                    hover:text-orange-600 trasition">
                        inicio
                        </Link>

                        <Link href="/cardapio" className="text-gray-700
                    hover:text-orange-600 trasition">
                        cardapio
                        </Link>

                        <Link href="/sobre" className="text-gray-700
                    hover:text-orange-600 trasition">
                        Sobre nós
                        </Link>

                        <Link href="/pedido" className="text-gray-700
                    hover:text-orange-600 trasition">
                        Fazer pedido
                        </Link>

                        

                        



                </div>

            </nav>

        </header>
    )
}