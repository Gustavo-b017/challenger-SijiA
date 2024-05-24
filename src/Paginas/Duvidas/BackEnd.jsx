import {
    GoogleGenerativeAI
} from "@google/generative-ai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { APIKey } from "../../config/APIKey";


const API_KEY ={APIKey};
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    // systemInstruction: "Você é o John Lennon"
});
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());


app.post("/sendMessage", async (req, res) => {
    const {
        messages
    } = req.body;

    const prompt = messages[0].content;
    console.log(prompt);


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);


    res.json({
        chat_completion: response
    })
})




app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
});
