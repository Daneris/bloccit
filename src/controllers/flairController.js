const flairQueries = require("../db/queries.flairs.js");

module.exports = {

  index(req,res,next){
    flairQueries.getAllFlairs((err, flairs) =>{
      if(err){
        res.redirect(500, "static/index");
      }else{
        res.render("flairs/index", {flairs});
      }
    });
  },
  new(req,res, next){
    res.render("flairs/new", {postId: req.params.postId});
  },

  create(req,res,next){
    let newFlair ={
      name: req.body.name,
      color: req.body.color,
      postId: req.params.postId,

    };

    flairQueries.addFlair(newFlair, (err,flair) =>{
      if(err){
        res.redirect(500, "/flairs/new");
      }else{
        res.redirect(303, `/posts/${newFlair.postId}/flairs/${flair.id}`);
      }
    });


  },
  show(req,res,next){
    flairQueries.getFlair(req.params.id, (err,flair) =>{
      if(err || flair === null){
        res.redirect(404, "/")
      }else{
        res.render("flairs/show", {flair});
      }

    });
  },

  destroy(req,res,next){
    flairQueries.deleteFlair(req.params.id, (err,flair) =>{
      if(err){
        res.redirect(500, `/flairs/${flair.id}`)
      }else{
        res.redirect(303, "/flairs")
      }
    });
  },
  edit(req,res,next){
    flairQueries.getFlair(req.params.id, (err, flair) =>{

      if(err || flair === null){
        res.redirect(404, "/")
      }else{
        res.render("flairs/edit", {flair})
      }
    });
  }






}
