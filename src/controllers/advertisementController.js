const advertisementQueries = require("../db/queries.advertisements.js");


module.exports = {
  index(req,res,next){
    advertisementQueries.getAllAdvertisements((err,advertisements) =>{
      if(err){
        res.redirect(500, "static/index");
      }else{
        res.render("advertisements/index", {advertisements});
      }
    })
  },


  new(req,res,next){
    res.render("advertisements/new");
  },

  create(req,res,next){
    let newAdvertisement ={
      title: req.body.title,
      description: req.body.description
    };
    console.log(newAdvertisement,"newAdvertisement");
    advertisementQueries.addAdvertisement(newAdvertisement, (err,advertisement)=>{
      if(err){
        res.redirect(500, "/advertisements/new");
      }else{
        res.redirect(303, `/advertisements/${advertisements.title}`);
      }
    });
  }




}