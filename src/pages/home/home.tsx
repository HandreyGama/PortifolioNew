import './home.css'
import Navbar from '../../components/navbar/navbar'
import HomeHero from '../../components/home_hero/home_hero'
import HomeGithubInfo from '@//components/home_github_info/home_github_info'


function Home(){
    return (
        <section id="home" className="flex flex-col home w-screen h-[120vh] ">
            <Navbar></Navbar>
            <HomeHero></HomeHero>
            <HomeGithubInfo></HomeGithubInfo>
        </section>
    )
}

export default Home