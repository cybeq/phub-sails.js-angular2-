/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email:{type:'string', required:true, unique:true, isEmail:true},
    password:{type:'string', required:true, protect:true},
    username:{type:'string', required:true},
    city:{type:'string', required:true},
    dob:{type:'string', required:true},
    picture:{type:'string', defaultsTo:'/assets/images/user/photos/default.png'}

  },
  schema:true
};

