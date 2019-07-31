/**
 * Jean.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_jean',
  attributes: {
    nombreJean: {
      type: 'string',
      required: true,
      columnName: 'nombre_jean'
    },
    stockJean: {
      type: 'number',
      min: 0,
      required: true,
      columnName: 'stock_jean'
    },
    idTipoJean:{
      model: 'TipoJean'
    },
    idTallaJean:{
      model: 'TallJean'
    },
    idUsuario:{
      model: 'Usuario'
    },
    DetalleVenta: {
      collection: 'DetalleVenta',
      via: 'idJean'
    },
    DetalleCompra: {
      collection: 'DetalleCompra',
      via: 'idJean'
    }
  },

};

