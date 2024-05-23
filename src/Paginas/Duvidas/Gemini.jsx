import { useState } from 'react';
import './css/duvidas.css'

const Gemini = () => {

    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    const gerResponse = async () => {
        if (!value) {
            setError("Preencha o campo")
            return
        }
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    history:chatHistory,
                    message: value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const response = await fetch('http://localhost:8000/gemini', options)
            const data = await response.text()

            console.log(data)

        } catch (error){
            console.error(error)
            setError("Algo está errado! Porfavor tente mais tarde.")
        }
    }

    return (
        <div className="chatBot">

            <h1>ChatGPT API</h1>

            <div className="input-container">
                <input
                    value={" "}
                    placeholder="Digite sua mensagem"
                    onChange={" "}
                    type="text"
                    id="message"
                    name="message"
                />
                {!error && <button className="btn btn-danger">Enviar</button>}
                {error && <button>Limpar</button>}
            </div>
            {error && <p>{error}</p>}

            <div className="search-result">
                <div key={""}>
                    <p className='answer'></p>
                </div>
            </div>
        </div>
    );
}


export default Gemini;