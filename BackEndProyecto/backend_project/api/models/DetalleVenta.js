/**
 * DetalleVenta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_detalle_venta',
  attributes: {
    precioUnitarioVenta: {
      type: 'number',
      min: 0,
      required: true,
      columnName: 'precio_unitario_venta'
    },
    cantidadVenta: {
      type: 'number',
      min: 0,
      required: true,
      columnName: 'cantidad_venta'
    },
    idJean:{
      model: 'Jean'
    },
    idCabeceraVenta:{
      model: 'CabeceraVenta'
    },
  },

};

