const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Deu certo ${PORT}`))