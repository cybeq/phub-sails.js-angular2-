module.exports={
  addUserToSocketRoom : async function (req, res){
    if(req.isSocket){
      sails.sockets.join(req, req.session.user)
      sails.log(req.session.user);
      return res.ok();
    }
    sails.sockets.blast('ttNa8FWj6k5A11ZX'
    ,'merge')
    return res.json({'failure':'not_socket'});
  }
}
