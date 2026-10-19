import './home_hero.css'
import avatarImg from './avatar.jpg'
import VerProjetosButton from '../ver_projetos_button/ver_projetos_button'
import BaixarCsvButton from '../baixar_csv_button/baixar_csv_button'

function HomeHero(){
    return(
        <div className='flex w-full h-screen items-center justify-center'>
            <div className='flex flex-col justify-center  w-full h-full'>
                <div className='flex justify-center flex-col mx-45 gap-1'>
                    <h2 className='text-white text-4xl font-bold'>Olá eu sou </h2>
                    <h1 className='text-amber-500 text-6xl font-semibold '>Handrey Gama </h1>
                    <p className='text-gray-700'>Desenvolvedor Back-end | Python | Java | Typescript</p>
                    <div className='border-1 my-2 border-b-gray-500 w-100'></div>
                    <div className='flex items-center justify-between w-40 my-5  gap-10'>
                        <VerProjetosButton></VerProjetosButton>
                        <BaixarCsvButton></BaixarCsvButton>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center  w-full h-full'>
                <img className='rounded-full w-min-1/2 avatar_img' src={avatarImg} alt="" />
            </div>
        </div>
    )
}

export default HomeHero