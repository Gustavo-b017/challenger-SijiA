const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

// For text-only input, use the gemini-pro model
// const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// ...