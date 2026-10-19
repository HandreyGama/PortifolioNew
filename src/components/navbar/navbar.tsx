import MudarTemaBotao from '../mudar_tema_botao/mudar_tema_botao'
import './navbar.css'

function Navbar(){
    return (
        <nav className='flex fixed navbar items-center justify-between  w-screen h-20 border-1 border-b-gray-800'>
            <div className='flex h-full justify-center items-center'>
                <h1 className='text-white text-2xl font-bold mx-10'>Meu Portifolio</h1>
            </div>
            <div className='flex  h-full gap-10 mx-10 flex-row items-center justify-center list-none text-white '>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre Mim</a></li>
                <li><a href="#stack">Tecnologias</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contatos</a></li>
                <div>
                    <MudarTemaBotao></MudarTemaBotao>
                </div>
            </div>

        </nav>
    )
}

export default Navbar