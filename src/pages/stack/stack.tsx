import Tag from '@//components/tags/tag'
import StackCards from '../../components/stack_cards/stack_cards'
import './stack.css'




function Stack(){
    return(
        <section id="stack" className='stack flex w-full h-[100vh] border-2 border-t-indigo-600'>
            <div>
                <h1 className='text-white font-bold text-2xl'>tecnologias</h1>
            </div>
            <div className='flex gap-5 flex-wrap'>
                <StackCards className='w-[30vw] h-60'>
                    <h1 className='text-white text-2xl font-bold'>Python</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo enim ratione, at fugit .</p>
                    <div className='w-80 border-1 my-5 border-b-slate-200'></div>
                    <div className='flex flex-row gap-3'>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>Flask </Tag>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>Django </Tag>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>FastAPI </Tag>
                    </div>
                </StackCards>
                <StackCards className='w-[30vw] h-60'>
                    <h1 className='text-white text-2xl font-bold'>TypeScript</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo enim ratione, at fugit .</p>
                    <div className='w-80 border-1 my-5 border-b-slate-200'></div>
                    <div className='flex flex-row gap-3'>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>React</Tag>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>ShadcnUI </Tag>
                    </div>
                    
                </StackCards>
               <StackCards className='w-[30vw] h-60'>
                    <h1 className='text-white text-2xl font-bold'>TypeScript</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo enim ratione, at fugit .</p>
                    <div className='w-80 border-1 my-5 border-b-slate-200'></div>
                    <div className='flex flex-row gap-3'>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>React</Tag>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>ShadcnUI </Tag>
                    </div>
                </StackCards>
                             <StackCards className='w-[30vw] h-60'>
                    <h1 className='text-white text-2xl font-bold'>TypeScript</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo enim ratione, at fugit .</p>
                    <div className='w-80 border-1 my-5 border-b-slate-200'></div>
                    <div className='flex flex-row gap-3'>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>React</Tag>
                        <Tag className='w-[5vw] bg-slate-600 text-white font-semibold decoration-dotted'>ShadcnUI </Tag>
                    </div>
                </StackCards>
                              
            </div>
        </section>
    )
}

export default Stack