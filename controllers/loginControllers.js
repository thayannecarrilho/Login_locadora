const login= require('../models/login')
const md5 = require('md5');
const session = require('express-session')


module.exports = class loginController{
    static showlogin(req, res){
        login.findAll()
        .then((login) => {
          res.render("login", {login: login});
        })
    }
      
    static showcadastro(req, res){
        res.render('cadastro')
    }

    static showedit(req, res){
        res.render('edit')
    }

    static savecadastro(req,res){
        let nome = req.body.nome
        let email = req.body.email
        let senha = md5(req.body.senha)
        let confisenha = md5(req.body.confisenha)     
    login.create({
        nome: nome,
        email: email,
        senha: senha
    }).then(() => {
        if(senha != confisenha || nome == "" || email == "" || senha == "" || confisenha == ""){user.destroy({
            where: {
                nome: nome,
                email: email,
                senha: senha
            }}).then(() => {
                res.redirect("/login")})
        } else {
            res.redirect("/")}
            })
    }     
    
    static login(req, res){
    let email = req.body.email;
    let senha = md5(req.body.senha);
  
    login.findOne({
      where: {email: email, senha: senha}
    }).then((login) => {
      if(login != undefined){
        console.log("Login efetuado")
        res.render("home")
      } else if (email == '' || senha == '' || login == undefined) {
        console.log("Sem cadastro")
        res.redirect("/")
      }
    })      
  }

  static editlogin(req, res){
    const email = req.params.email
        login.findOne({ where: {email: email}, raw:true})
        .then((data) => {
          res.render('edit', {login: data})
        })
        .catch((err) => console.log())
    }

    static returnhome(res,req){
        const email = req.params.email
        login.findOne({ where: {email: email}, raw:true})
        .then((data) => {
          res.render('home', {login: data})
        })
        .catch((err) => console.log())
    }


    }
  

        
  


