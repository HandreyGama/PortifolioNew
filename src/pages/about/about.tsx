import './about.css'

function About(){
    return (
        <section id="about" className='flex w-full h-[110vh] items-center justify-center'>
            <div className='flex background_color_about h-full w-1/3 items-center justify-center'>
            </div>
            <div className='flex h-full w-2/3 items-center justify-center'>
                <div className='flex flex-col w-2/3'>
                    <h1 className='font-bold text-2xl'>Sobre Mim</h1>
                    <h1 className='font-bold text-6xl'>Adjetivo</h1>
                    <div className='my-10'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsa exercitationem distinctio molestiae similique voluptatum vero vitae nesciunt temporibus doloribus? Vel voluptatem assumenda blanditiis sequi commodi vitae voluptates ipsa modi.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About