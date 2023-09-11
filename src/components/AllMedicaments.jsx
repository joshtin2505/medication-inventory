import {useContext} from 'react'
import { DataContext } from '../context/DataContext'

function AllMedicaments() {
    const {data, hayMedicinas, setToShow, toShow} = useContext(DataContext)
    
    
    const medicamentType = (type) => {
        const styleClass = "w-4 h-4"
        if (type == 'Oral'){
            return styleClass + ' bg-blue-600'
        }
        else if(type == 'Externo'){
            return styleClass + ' bg-orange-600'
        }
    }

    if (hayMedicinas) {
        return (
            <ul className="w-full flex flex-col gap-1">
            {
                
                data.map((medicina, index) => ( 
                    
                    <li onClick={() => {
                        const newHidden = [...toShow]
                        newHidden[index] = !newHidden[index]
                        setToShow(newHidden)
                    }} className={`bg-slate-300 cursor-pointer w-full px-2 rounded-sm flex justify-around items-center ${toShow[index] ? 'hidden': ''}`} key={index}>
                        <p className="w-4/5">{`${medicina.codigo}/${medicina.name}`}</p>
                        <div className="w-1/5  flex justify-end">
                            <div className={medicamentType(medicina.via)}></div>
                        </div>
                        
                    </li>
                    
                ))
            }
            </ul>
        )
    }
    else{
     return <p>No hay medicnas</p>   
    }
  
}

export default AllMedicaments