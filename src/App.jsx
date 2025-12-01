// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* HEADER */}
      <header>
        <div className='container py-2'>Lista Articoli</div>
      </header>
      {/* 
      {/* //MAIN */}


      {/* FORM INPUT */}
      <main className='container'>
        <div className='py-5 d-flex gap-3 mb-3"'>
          <form action="" onInput={Text} className='border'>aggiungi qui</form>
          <label for="exampleInputEmail1" class="form-label">Lista</label>


          {/* BUTTON */}
          <button className='btn btn-primary warning p-x-5'>Aggiungi</button>
        </div>

        {/* LIST */}
        <ul>
          <li>lista vuota</li>
           <li>lista vuota</li>
            <li>lista vuota</li>
             <li>lista vuota</li>
        </ul>

      </main>



    </>
  )
}

export default App
