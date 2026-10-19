import './tag.css'
import type { ReactNode } from 'react'


interface TagProps{
    children?: ReactNode;
    className?:string
}

function Tag({children=null,className=""}:TagProps){
    return(
        <div className={`tag flex justify-center items-center p-3 w-[10vw] h-[4vh] border-1 border-gray-500  rounded-2xl ${className || ""}`}>
            {children}
        </div>
    )
}

export default Tag