/**
 * DetalleCompra.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_detalle_compra',
  attributes: {
    precioUnitarioCompra: {
      type: 'number',
      min: 0,
      required: true,
      columnName: 'precio_unitario_compra'
    },
    cantidadCompra: {
      type: 'number',
      min: 0,
      required: true,
      columnName: 'cantidad_compra'
    },
    idJean:{
      model: 'Jean'
    },
    idCabeceraCompra:{
      model: 'CabeceraCompra'
    },
  },

};

