import React from 'react'
import RegForm from './RegForm'

function RegMedicament() {
  return (
    <div className="w-56 bg-white p-2 rounded flex flex-col justify-center items-center text-black">
        <h3 className="text-xl font-medium ">Ingesar medicamento</h3>
        <RegForm/>
    </div>
  )
}

export default RegMedicament