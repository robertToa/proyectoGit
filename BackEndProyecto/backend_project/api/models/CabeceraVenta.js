/**
 * CabeceraVenta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_cabecera_venta',
  attributes: {
    nombreComprador: {
      type: 'string',
      required: true,
      columnName: 'nombre_comprador',
      regex: /^[a-zA-Z ]+$/,
    },
    direccionComprador: {
      type: 'string',
      columnName: 'direccion_comprador'
    },
    telefonoComprador: {
      type: 'string',
      minLength:6,
      maxLength:10,
      regex: /^[0-9]+$/,
      columnName: 'telefono_comprador'
    },
    emailComprador: {
      type: 'string',
      isEmail: true,
      columnName: 'email_comprador'
    },
    fechaVenta: {
      type: 'string',
      required: true,
      columnName: 'fecha_venta'
    },
    totalVenta: {
      type: 'number',
      required: true,
      min: 0,
      columnName: 'total_venta'
    },
    DetalleVenta: {
      collection: 'DetalleVenta',
      via: 'idCabeceraVenta'
    },
    idUsuario:{
      model: 'Usuario'
    },
  },

};

