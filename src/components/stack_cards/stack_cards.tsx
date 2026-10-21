import './stack_cards.css'
import type {ReactNode} from "react"


interface StackProps{
    children?:ReactNode
    className?:string
}

function StackCards({children=null,className=""}:StackProps){
    return (
        <div className={`flex flex-col items-center p-5 justify-center bg-slate-800 border-1 border-gray-500 rounded-2xl shadow-lg shadow-blue-950 ${className}`}>
            {children}
        </div>
    )
}


export default StackCards

