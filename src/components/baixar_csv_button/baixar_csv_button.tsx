import "./baixar_csv_button.css"
import {Button} from '../ui/button'
function BaixarCsvButton(){
    return(
        <div>
            <Button className="bg-none
             border-1
             border-white
              w-40 h-10
              baixar_csv_button
             hover:bg-gray-300
            hover:cursor-pointer
            hover:scale-110
              ">
                Baixar Csv
            </Button>
        </div>
    )
}

export default BaixarCsvButton