import { useState } from "react";
import { useEffect } from "react";

function Questoes() {

    const [perguntas, setPerguntas] = useState([])
    useEffect(() => {
        fetch("https://66509847ec9b4a4a6032a786.mockapi.io/api/v1/quiz-tomografia")
        .then(response => response.json)
        .then(questoesGeral => {
            setPerguntas(questoesGeral) 
            console.log(questoesGeral) 
        }

        )
    }, [])
    return {response}
}

export default Questoes;