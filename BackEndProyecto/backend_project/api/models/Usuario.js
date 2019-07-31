/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_usuario',
  attributes: {
    nombreUsuario: {
      type: 'string',
      required: true,
      regex: /^[a-zA-Z ]+$/,
      columnName: 'nombre_usuario'
    },
    apellidoUsuario: {
      type: 'string',
      regex: /^[a-zA-Z ]+$/,
      columnName: 'apellido_usuario'
    },
    nicknameUsuario: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'nickname_usuario'
    },
    passwordUsuario: {
      type: 'string',
      required: true,
      columnName: 'password_usuario'
    },
    emailUsuario: {
      type: 'string',
      isEmail: true,
      required: true,
      columnName: 'email_usuario'
    },
    edadUsuario: {
      type: 'number',
      min: 0,
      max: 120,
      columnName: 'edad_usuario'
    },
    tipoJean: {
      collection: 'TipoJean',
      via: 'idUsuario'
    },
    tallaJean: {
      collection: 'TallJean',
      via: 'idUsuario'
    },
    Jean: {
      collection: 'Jean',
      via: 'idUsuario'
  },
    CabeceraCompra: {
      collection: 'CabeceraCompra',
      via: 'idUsuario'
    },
    CabeceraVenta: {
      collection: 'CabeceraVenta',
      via: 'idUsuario'
    }
  },

};

