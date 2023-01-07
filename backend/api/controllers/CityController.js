
module.exports={
  getCity: async function(req,res){
    res.json(await CityService.checkCityForRegister('Reszel'));
  },
  checkCity: async function(city){
    const citiesArray = [];
    let result = await CityService.checkCityForRegister(city)
    for(let all of result){
      if(all.type!=='administrative' && all.type!=='village') continue;
      citiesArray.push(all.display_name)
    }
    return citiesArray.includes(city);
  }
};
