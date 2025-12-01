import { useState } from "react"

export default function FormApp() {

    // Array che conterrà tutti i titoli e contenuti inseriti
    const [Title, setTitle] = useState([]);
    const [Text, setText] = useState([]);

    // Stato che gestisce il valore digitato nell'input del titolo
    // Questo è solamente il testo momentaneo del campo input
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');


    // Funzione che si attiva quando l'utente preme "Aggiungi" nel form
    function submitHandler(event) {

        // Impedisce il refresh della pagina (comportamento di default del form)
        event.preventDefault();

        // Creo un nuovo array copiando il vecchio e aggiungendo il nuovo titolo
        const newTitles = [...Title, newTitle];
        setTitle(newTitles); // aggiorno lo state con i titoli aggiornati

        // Stessa cosa per il contenuto dell'articolo
        const newTexts = [...Text, newText];
        setText(newTexts); // aggiorno l'array dei testi

        // Svuoto gli input una volta inviato il form
        setNewTitle('');
        setNewText('');

        //funzione per rimuovere dalla lista

    }


    function remove(indeToRemove) {
        const newTitleWithout = [];
        for (let i = 0; i < Title.length; i++) {
            if (i !== indeToRemove) {
                newTitleWithout.push(Title[i]);
            }
        }
          setTitle(newTitleWithout);
    }
  

    // La parte  mostrata a schermo
    return (
        <>
            {/* FORM DI input*/}
            <form onSubmit={submitHandler}>

                {/* Label + input per il TITOLO */}
                <label htmlFor="articolo">Titolo nuovo articolo</label>

                <input
                    id="articolo"
                    type="text"
                    value={newTitle}             // il valore dell’input è quello nuovo inserito
                    onChange={(event) => {       // quando scrivo, aggiorno newTitle (Array)
                        setNewTitle(event.target.value)
                    }}
                />


                {/* Label + input per il CONTENUTO */}
                <label htmlFor="testo">Contenuto Articolo</label>

                <input
                    id="testo"
                    type="text"
                    value={newText}             // collegato allo state newText
                    onChange={(event) => {      // aggiorna newText (Array)
                        setNewText(event.target.value)
                    }}
                />

                {/* Bottone di submit */}
                <button type="submit" className='btn btn-primary'>Aggiungi</button>
            </form>


            {/* LISTA DEGLI ARTICOLI INSERITI */}
            <ul>
                {Title.map((CurTitle, index) => {
                    return (
                        <li key={index} className="font-weight:700">
                            {/* Titolo dell’articolo */}
                            <h2>{CurTitle}</h2>

                            {/* Testo dell’articolo, tramite lo stesso index del titolo */}
                            <p>{Text[index]}</p>
                            <button onClick={() => remove(index)}>Rimuovi</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}