import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
function ViewMedicaments() {
    const {data, hayMedicinas, setToShow, toShow} = useContext(DataContext)

    const [viewClasification, setViewClasification] = useState(false)

  return (
    <div className="m-4 bg-white p-2 rounded flex flex-col justify-center gap-2 items-center text-black">
        <section className={`flex flex-col gap-2 ${viewClasification ? '' : 'hidden'}`}>
            
            <div className="flex gap-2" >
                <table >

                    <tr >
                        <th className='border-2 border-black px-2'>Codigo</th>
                        <th className='border-2 border-black px-2'>Nombre</th>
                        <th className='border-2 border-black px-2'>Forma</th>
                        <th className='border-2 border-black px-2'>Fecha de Cadusidad</th>
                        <th className='border-2 border-black px-2'>Via de consumo</th>
                        <th className='border-2 border-black px-2'>Dosis</th>
                    </tr>
                    { hayMedicinas ?
                            data.map((medicament, index) => {
                                if(medicament.form === 'Capsula'){
                                    return(
                                        <tr className={`${toShow[index] ? '': 'hidden'}`} key={medicament.codigo}>
                                            <td className='border-2 border-black px-2'>{medicament.codigo}</td>
                                            <td className='border-2 border-black px-2'>{medicament.name}</td>
                                            <td className='border-2 border-black px-2'>{medicament.form}</td>
                                            <td className='border-2 border-black px-2'>{medicament.fechaC}</td>
                                            <td className='border-2 border-black px-2'>{medicament.via}</td>
                                            <td className='border-2 border-black px-2'>{medicament.dosis}</td>
                                            <td onClick={()=>{
                                                const newHidden = [...toShow]
                                                newHidden[index] = !newHidden[index]
                                                setToShow(newHidden)
                                            }}><BtnReturn /></td>
                                        </tr>
                                    )
                                }
                            })
                            : 
                            <tr>
                                <td>No hay pastillas</td>
                            </tr>
                    }
                </table>
                {/* ◀ */}

                

            </div>
            <div className="flex gap-2">
                <table>
                    <tr >
                        <th className='border-2 border-black px-2'>Codigo</th>
                        <th className='border-2 border-black px-2'>Nombre</th>
                        <th className='border-2 border-black px-2'>Forma</th>
                        <th className='border-2 border-black px-2'>Fecha de Cadusidad</th>
                        <th className='border-2 border-black px-2'>Via de consumo</th>
                        <th className='border-2 border-black px-2'>Dosis</th>
                    </tr>
                    { hayMedicinas ?
                            data.map((medicament, index) => {
                                if(medicament.form === 'Liquido'){
                                    return(
                                        <tr className={`${toShow[index] ? '': 'hidden'}`} key={index}>
                                            <td className='border-2 border-black px-2'>{medicament.codigo}</td>
                                            <td className='border-2 border-black px-2'>{medicament.name}</td>
                                            <td className='border-2 border-black px-2'>{medicament.form}</td>
                                            <td className='border-2 border-black px-2'>{medicament.fechaC}</td>
                                            <td className='border-2 border-black px-2'>{medicament.via}</td>
                                            <td className='border-2 border-black px-2'>{medicament.dosis}</td>
                                            <td onClick={
                                            ()=>{
                                                const newHidden = [...toShow]
                                                        newHidden[index] = !newHidden[index]
                                                        setToShow(newHidden)
                                            }
                                            }>
                                            <BtnReturn />
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                            : 
                            <tr>
                                <td>No hay pastillas</td>
                            </tr>
                    }
                </table>
                
            </div>
        </section>
        <section className={`${viewClasification ? 'hidden' : ''}`}>
        <div className="flex gap-2" >

                <table >

                    <tr >
                        <th className='border-2 border-black px-2'>Codigo</th>
                        <th className='border-2 border-black px-2'>Nombre</th>
                        <th className='border-2 border-black px-2'>Forma</th>
                        <th className='border-2 border-black px-2'>Fecha de Cadusidad</th>
                        <th className='border-2 border-black px-2'>Via de consumo</th>
                        <th className='border-2 border-black px-2'>Dosis</th>
                    </tr>
                    { hayMedicinas ?
                            data.map((medicament, index) => {
                                
                                    return(
                                        <tr className={`${toShow[index] ? '': 'hidden'}`} key={index}>
                                            <td className='border-2 border-black px-2'>{medicament.codigo}</td>
                                            <td className='border-2 border-black px-2'>{medicament.name}</td>
                                            <td className='border-2 border-black px-2'>{medicament.form}</td>
                                            <td className='border-2 border-black px-2'>{medicament.fechaC}</td>
                                            <td className='border-2 border-black px-2'>{medicament.via}</td>
                                            <td className='border-2 border-black px-2'>{medicament.dosis}</td>
                                            <td onClick={()=>{
                                                const newHidden = [...toShow]
                                                newHidden[index] = !newHidden[index]
                                                setToShow(newHidden)
                                            }}><BtnReturn /></td>
                                        </tr>
                                    )
                                }
                            )
                            : 
                            <tr>
                                <td>No hay pastillas</td>
                            </tr>
                    }
                </table>


            </div>
        </section>
        <button className="bg-blue-500 text-white w-full py-1 rounded-sm hover:bg-blue-400 transition-all active:bg-blue-700" onClick={
            ()=>{
                const show = viewClasification
                setViewClasification(!show)
            }
        }>Pastillas o capsulas</button>
    </div>
  )
}

function BtnReturn(){
    return <div className="border-2 border-black h-8 w-8 text-center rounded hover:shadow-md hover:shadow-black/50 transition-all cursor-pointer">⟪</div>
}

export default ViewMedicaments