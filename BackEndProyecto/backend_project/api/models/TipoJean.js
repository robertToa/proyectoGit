/**
 * TipoJean.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_tipo_jean',
  attributes: {
    tipoJean: {
      type: 'string',
      required: true,
      columnName: 'tipo_jean'
    },
    idUsuario:{
      model: 'Usuario'
    },
    Jean: {
      collection: 'Jean',
      via: 'idTipoJean'
    }
  },

};

