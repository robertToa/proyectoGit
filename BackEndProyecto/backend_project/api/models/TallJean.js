/**
 * TallJean.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_talla_jean',
  attributes: {
    tallaJean: {
      type: 'string',
      required: true,
      columnName: 'talla_jean'
    },
    idUsuario:{
      model: 'Usuario'
    },
    Jean: {
      collection: 'Jean',
      via: 'idTallaJean'
    }
  },

};

