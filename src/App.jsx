// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormApp from './components/FormApp'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* HEADER */}
      <header>
        <div className='container py-2'><h1>Lista Articoli</h1></div>
      </header>
      {/* 
      {/* //MAIN */}


      {/* FORM INPUT */}
      <main className='container'>

        <div className='py-5 gap-3 mb-3"'>
          <FormApp />
        
        </div>

        {/* LIST */}
   
      </main>



    </>
  )
}

export default App
