/**
 * CabeceraCompraController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  attributes: {
    nombreDistribuidor: {
      type: 'string',
      required: true,
      columnName: 'nombre_distribuidor',
      regex: /^[a-zA-Z]$/i
    },
    direccionDistribuidor: {
      type: 'string',
      columnName: 'direccion_distribuidor'
    },
    telefonoDistribuidor: {
      type: 'string',
      minLength:6,
      maxLength:10,
      regex: /^[0-9]$/i,
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
      isDate: true,
      required: true,
      columnName: 'fecha_compra'
    },
    totalCompra: {
      type: 'number',
      required: true,
      min: 0,
      columnName: 'total_compra'
    },
  },

};

