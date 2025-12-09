const express = require('express');
const app = express();
const ejs = require('ejs');
const open = require('open');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.set('views', __dirname + '/frontend');
// console.log(__dirname + '/frontend');

app.get('/', (req, res) => {
        const isMobile = req.headers['user-agent'].includes("Mobile");

    if(!isMobile){
        res.redirect("/nomobile");
        return;}
    res.render('home');
});
app.get('/login', (req, res) => {
        const isMobile = req.headers['user-agent'].includes("Mobile");

    if(!isMobile){
        res.redirect("/nomobile");
        return;}
    res.render('login');
});
app.get('/deashbord', (req, res) => {
        const isMobile = req.headers['user-agent'].includes("Mobile");

    if(!isMobile){
        res.redirect("/nomobile");
        return;}
    res.render('deashbord');
});
app.get('/game', (req, res) => {
        const isMobile = req.headers['user-agent'].includes("Mobile");

    if(!isMobile){
        res.redirect("/nomobile");
        return;}
    res.render('game');
});


app.get("/nomobile",(req,res)=>{
    res.render("nomobile");
})


app.listen(PORT,()=>{
    console.log("server esta rodando porta "+PORT);

    // open(`http://localhost:${PORT}`).then(() => {
    //     console.log('Navegador aberto com sucesso!');
    // }).catch((err) => {
    //     console.error('Erro ao abrir o navegador:', err);
    // });
});