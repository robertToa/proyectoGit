/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var nodemailer = require('nodemailer');

module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Usuario.find({
      nicknameUsuario: parametros.username,
      passwordUsuario: parametros.password,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  },
  buscarUsername: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Usuario.find({
      nicknameUsuario: parametros.username,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  },
  recuperarContrasenia: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Usuario.find({
      nicknameUsuario: parametros.username,
    });
    if(usuarioLogeado.length > 0){
      console.log(usuarioLogeado[0].emailUsuario)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'robrtpm29@gmail.com',
          pass: '1723012553papis'
        }
      });
      var mensaje = "Su contrasenia es: "+usuarioLogeado[0].passwordUsuario;

      var mailOptions = {
        from: 'robrtpm29@gmail.com',
        to: usuarioLogeado[0].emailUsuario,
        subject: 'Recuperación de la contraseña',
        text: mensaje
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
        return res.ok(usuarioLogeado);
      });
    }else{
      return res.badRequest({mensaje:'No existe el usuario'});
    }
  },
};

