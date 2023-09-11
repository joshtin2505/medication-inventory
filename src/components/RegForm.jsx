import { useContext } from "react"
import { DataContext } from "../context/DataContext"
function RegForm() {
    const {setData, data} = useContext(DataContext)

    const handleSubmit = e => {
        e.preventDefault()
        const tg = e.target
        const existe = data.some((medicamento) => medicamento.codigo === tg.codigo.value)
        if (existe) {
          alert("Este Codigo ya esta en la lista!")
          return
        }
        setData([...data,
            {
                codigo: tg.codigo.value,
                name: tg.nombre.value,
                form: tg.forma.value,
                fechaC: tg.FechaC.value,
                via: tg.ViaConsumo.value,
                dosis: tg.Docis.value
                
            }
        ])
    }
    
  return (
    <form onSubmit={handleSubmit} className="flex flex-col py-3 ">
            <label >Codigo</label>
            <input placeholder="1234..." className="bg-slate-300 rounded-sm outline-none pl-1 focus:shadow-md" type="number" name="codigo" required/>
            <label >Nombre</label>
            <input placeholder="Acetaminofen, Paracetamol" className="bg-slate-300 rounded-sm outline-none pl-1 focus:shadow-md" type="text" name="nombre" required/>
            <label >Forma</label>
            <select className="bg-slate-300 rounded-sm outline-none focus:shadow-md" name="forma" required>
              <option value="">Seleccione una opcion...</option>
              <option value="Capsula">Capsula</option>
              <option value="Liquido">Liquido</option>
            </select>

            <label >Fecha de Caducidad</label>
            <input className="bg-slate-300 rounded-sm outline-none pl-1 focus:shadow-md" type="date" name="FechaC" required/>

            <label >Via de consumo</label>
            <select className="bg-slate-300 rounded-sm outline-none focus:shadow-md" name="ViaConsumo" required>
              <option value="">Seleccione una opcion...</option>
              <option value="Oral">Oral</option>
              <option value="Externo">Externo</option>
            </select>
            <label >Docis</label>
            <input placeholder="250mg" className="bg-slate-300 rounded-sm outline-none pl-1 focus:shadow-md" type="text" name="Docis" required/>
                
            <div className="mt-4">
              <button className="bg-blue-500 text-white w-full py-1 rounded-sm hover:bg-blue-400 transition-all active:bg-blue-700" type="submit">Registrar medicamento</button>
            </div>
    </form>
  )
}

export default RegForm