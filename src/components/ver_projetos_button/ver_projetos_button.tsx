import './ver_projetos_button.css'
import {Button} from '../ui/button'

function VerProjetosButton(){
    return (
        <div>
            <Button variant="default" className="
            bg-amber-500
             w-40 h-10 
             border-1
             border-amber-700
             ver_projetos_button
             hover:bg-amber-300
            hover:cursor-pointer
            hover:scale-110
             ">
                Ver projetos no github
            </Button>
        </div>
    )
}

export default VerProjetosButton