import MedicamentList from "./components/MedicamentList"
import RegMedicament from "./components/RegMedicament"
import ViewMedicaments from "./components/ViewMedicaments"


function App() {

  return (
    <>
      <div className="h-screen bg-slate-800 text-white">
        <header className="w-full font-medium px-2 pt-2 flex justify-center items-center">
          <div className="w-2/5">
            <h1 className="text-2xl">Inventario de medicamenos</h1>
          </div>
          <nav className="flex">
            <button className="bg-blue-500 text-white w-full p-1 rounded-sm hover:bg-blue-400 transition-all active:bg-blue-700 hidden">Registrar medicamentos</button>
          </nav>
        </header>
        <main className="w-full pt-8">
          <section className="flex justify-center items-center flex-col gap-2">
            <div className="flex gap-2">
            <RegMedicament/>
            <MedicamentList/>
            </div>
            <ViewMedicaments/>
          </section>
        </main>

      </div>
    </>
  )
}

export default App
