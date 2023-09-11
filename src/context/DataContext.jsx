import {createContext, useState, } from 'react'
import medicaments from '../mocks/medicaments.json'

export const DataContext = createContext()
function DataContextProvider({children}) {

    const medicinas = medicaments.medicamentos
    const hayMedicinas = medicinas?.length > 0

    const [data, setData] = useState(medicinas)
    const [toShow, setToShow] = useState(Array(data.length).fill(false))


  console.log(data)


  return (
    <DataContext.Provider value={
        {
            data,
            setData,
            medicinas,
            hayMedicinas,
            setToShow,
            toShow
        }
    }>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider