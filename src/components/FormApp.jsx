import { useState } from "react"

export default function FormApp() {
    const [Title, setTitle] = useState('Inserisci Titolo articolo');
    const [Text, setText] = useState('Inserisci Contenuto articolo');

    return (
        <>
            <form onSubmit={()=>{

            }}>
                <label for="articolo"> Titolo nuovo articolo
                    <input id="articolo" type="text" value={Title} onChange={(event) => {
                        const newTitle = event.target.value;
                        setTitle(newTitle)
                    }} />
                </label>

                <label for=" testo"> Contenuto Articolo
                    <input id="testo" type="text" value={Text} onChange={(event) => {
                        const newText = event.target.value;
                        setText(newText)
                    }} />
                </label>


                <ul>
                    <li className=" font-weight: 700 "><h2>{Title} </h2> <br />{Text}</li>
                </ul>
              <button className='btn btn-primary warning p-x-5'>Aggiungi</button>
            </form>



        </>
    )
}