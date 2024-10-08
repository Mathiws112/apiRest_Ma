const express = require('express');
const auth = require('../controller/authController');

const router = express.Router();

router.post('/register', auth.register)
router.post('/login', auth.login)
router.post('/get_permissions', auth.get_permissions)
router.post('/enviar-codigo', auth.enviarCodigo)
router.post('/verificarCodigo', auth.restablecerContraseña);
router.get('/verificarEmail/:email', auth.checkEmail);




module.exports = router;