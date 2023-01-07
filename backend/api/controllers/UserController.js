
const CityController = require("./CityController");
module.exports = {
  createUser: async function(req, res){
    if(!await CityController.checkCity(req.body.city))
      return res.json({error:'city'}) ;
    try{
      const user = await User.create(req.body).fetch();
      sails.log(user)
      return res.json(user) ;
    }catch(e){
      if(e.raw.errorType === 'uniqueViolated') return res.json({failure:'creating user', failureReason:'Użytkownik o takim emailu już istnieje'})

      return res.json({failure:'creating user'});
    }
  },
  loginUser:async function(req, res){
    try {
      const user = await User.findOne({email: req.body.email, password: req.body.password});
      req.session.user = user.id;
      return res.json(user);
    }catch(e){
      sails.log(e)
      return res.json({failure:'invalid data'});
    }
  },
  getUser:async function(req,res){
    return res.json(req.session.user);
  },
  downUser: async function(req, res){
    req.session.destroy();
    return res.json({success:'logout'});
  },
  userData: async function(req, res){
    const user = await User.findOne({id:req.session.user}).omit(['password'])
    return res.json(user);
  },
  getUserById: async function(req, res){
    try{
      const user = await User.findOne({id:req.param('id')}).omit(['password'])
      if(!user)  return res.json({error:'no_user'});
      return res.json(user);
    }
    catch(e){
      return res.json({error:'no_user'})
    }
  }

};

