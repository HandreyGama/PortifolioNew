import {ThemeToggler} from '../velora/theme-toggler'

function MudarTemaBotao(){
    let teste = () =>{
        console.log("teste")
    } 
    return(
        <ThemeToggler className='bg-amber-500 border-amber-600' isDark={false} onToggle={teste}>
            
        </ThemeToggler>
    )
}

export default MudarTemaBotao