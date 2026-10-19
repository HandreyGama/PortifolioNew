import './home.css'
import Navbar from '../../components/navbar/navbar'
import HomeHero from '../../components/home_hero/home_hero'


function Home(){
    return (
        <section className="flex flex-col home w-screen h-screen ">
            <Navbar></Navbar>
            <HomeHero></HomeHero>
        </section>
    )
}

export default Home