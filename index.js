const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Recipedia!'))

app.get('/recipes', (req, res) => {
    const recipes = 'not implemented yet'
    res.send(recipes)
})
app.post('/recipe', (req, res) => {
    const recipeInsert = 'not implemented yet'
    res.send(recipeInsert)
})

app.put('/recipe', (req, res) => {
    const recipeUpdated = 'not implemented yet'
    res.send(recipeUpdated)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))