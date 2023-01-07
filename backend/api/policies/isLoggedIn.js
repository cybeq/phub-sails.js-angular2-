module.exports = function(req, res, next){
  // if(req.headers.accept.includes('text/html'))
  //   return res.forbidden();

  if(!req.session.user)
  return res.json({error:'not_logged_in'})

  return next();
}
