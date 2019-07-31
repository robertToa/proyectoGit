/**
 * CabeceraCompra.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_cabecera_compra',
  attributes: {
    nombreDistribuidor: {
      type: 'string',
      required: true,
      columnName: 'nombre_distribuidor',
      regex: /^[a-zA-Z ]+$/,
    },
    direccionDistribuidor: {
      type: 'string',
      columnName: 'direccion_distribuidor'
    },
    telefonoDistribuidor: {
      type: 'string',
      minLength:6,
      maxLength:10,
      regex: /^[0-9]+$/,
      columnName: 'telefono_distribuidor'
    },
    emailDistribuidor: {
      type: 'string',
      isEmail: true,
      required: true,
      columnName: 'email_distribuidor'
    },
    fechaCompra: {
      type: 'string',
      required: true,
      columnName: 'fecha_distribuidor'
    },
    totalCompra: {
      type: 'number',
      required: true,
      min: 0,
      columnName: 'total_distribuidor'
    },
    DetalleCompra: {
      collection: 'DetalleCompra',
      via: 'idCabeceraCompra'
    },
    idUsuario:{
      model: 'Usuario'
    },
  },

};

