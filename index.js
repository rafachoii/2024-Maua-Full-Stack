const express = require ('express')
const app = express()
app.use(express.json())

let filmes = [
    {
        titulo: "Astro Boy",
        sinopse: "Metro City é uma cidade flutuante, onde um brilhante cientista chamado Tenma cria um menino robô, que possui uma superforça, tem visão de raio-X e capacidade de voar. Astro Boy decide explorar o mundo, procurando ser aceito pelos seres humanos. Um dia, quando ele pensa que seus amigos e a família em Metro City estão em perigo, ele volta para a cidade e usa seus poderes para salvá-los."
    },
    {
        titulo: "O Céu É de Verdade",
        sinopse: "Todd Burpo é pastor e bombeiro voluntário em uma pequena cidade do Nebraska. Ele e sua esposa enfrentam uma situação complicada quando seu filho, Colton, precisa ser operado às pressas. Felizes com a recuperação milagrosa da criança, eles não estão preparados para o que vem a seguir. Colton conta que foi ao céu e voltou e diz coisas que não teria como saber. Convicto de que o filho visitou o paraíso, Todd passa a questionar sua própria fé daquilo que pregava até então."
    }
]

//GET http://localhost:3000/hey
app.get ('/hey', (req, res) => {
    res.send('hey')
})

app.get ('/filmes', (req, res) => {
    res.json(filmes)
})

app.post ('/filmes', (req, res) => {
    //obter os dados que o cliente enviou
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //montar o json filme
    const filme = {titulo: titulo, sinopse: sinopse}
    //inserir o filme na lista de filmes
    filmes.push(filme)
    res.json(filmes)
})
app.listen(3000, () => console.log("up and running"))