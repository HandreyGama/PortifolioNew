import './tag.css'
import type { ReactNode } from 'react'


interface TagProps{
    children?: ReactNode;
    className?:string
}

function Tag({children=null,className=""}:TagProps){
    return(
        <div className={`tag flex justify-center items-center  h-[4vh]   rounded-2xl ${className || ""}`}>
            {children}
        </div>
    )
}

export default Tag