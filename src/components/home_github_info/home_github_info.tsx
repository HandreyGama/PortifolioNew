import './home_github_info.css'

function HomeGithubInfo(){
    return (
        <div className='home_github_info w-screen h-50 border-1 border-t-gray-600 border-b-gray-600'>
            <div className='flex flex-row h-full'>
                <div className='flex flex-col gap-5 w-2/4 h-full items-center justify-center border-1 p-5 border-r-gray-600'>
                    <h1 className='home_github_info_title_text text-2xl font-light'>Anos como desenvolvedor</h1>
                    <h1 className='text-white text-4xl font-bold'>2+</h1>
                </div>
                <div className='flex flex-col gap-5  w-1/4 h-full items-center justify-center border-1 p-5 border-r-gray-600'>
                    <h1 className='home_github_info_title_text text-2xl font-light'>Commits feitos</h1>
                    <h1 className='text-white text-4xl font-bold'>421+</h1>
                </div>
                <div className='flex flex-col gap-5  w-1/4 h-full items-center justify-center border-1 p-5 border-r-gray-600'>
                    <h1 className='home_github_info_title_text text-2xl font-light'>Frameworks </h1>
                    <h1 className='text-white text-4xl font-bold'>5+</h1>
                </div>
                <div className='flex flex-col gap-5  w-2/4 h-full items-center justify-center  p-5 '>
                    <h1 className='home_github_info_title_text text-2xl font-light'>Projetos desenvolvidos</h1>
                    <h1 className='text-white text-4xl font-bold'>22+</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeGithubInfo