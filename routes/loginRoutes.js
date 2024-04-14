const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginControllers')

router.get('/', loginController.showlogin)
router.get('/cadastro', loginController.showcadastro)
router.get('/edit', loginController.showedit)
router.post('/salvarcadastro', loginController.savecadastro)
router.post('/login', loginController.login)
router.get('/edit:email', loginController.editlogin)
router.get('/home', loginController.returnhome )


module.exports = router