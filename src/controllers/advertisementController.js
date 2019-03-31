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
        res.redirect(303, `/advertisements/${advertisement.title}`);
      }
    });
  },


  show(req,res,next){
    advertisementQueries.getAllAdvertisement(req.body.title, (err,advertisement) =>{

      if(err || advertisement == null){
        console.log(err, "logging err")
        res.redirect(404, "/");

      }else{
        res.render("advertisements/show", {advertisement});
      }
    })
  },

  destroy(req,res,next){
    advertisementQueries.deleteAdvertisement(req.body.title, (err,advertisement)=>{
      if(err){
        res.redirect(500, `/advertisements/${advertisement.title}`)
      }else{
        res.redirect(303, "/advertisements")
      }
    });
  }




}
