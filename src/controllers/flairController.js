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
    res.render("flairs/new", {topicId: req.params.topicId, postId: req.params.postId, id: req.params.id});
  },

  create(req,res,next){
    let newFlair ={
      name: req.body.name,
      color: req.body.color,
      postId: req.params.postId,
      id: req.params.id,
      topicId: req.params.topicId

    };

    flairQueries.addFlair(newFlair, (err,flair) =>{

      if(err){
        res.redirect(500, "/flairs/new");
        console.log(err, "error");
      }else{
        res.redirect(303, `${newFlair.postId}`);
      }
    });

  },
  show(req,res,next){
    flairQueries.getFlair(req.params.id, (err,flair) =>{
      if(err || flair === null){
        res.redirect(404, "/")
      }else{
        res.render("flairs/show", {flair, topicId: req.params.topicId, postId: req.params.postId});
      }

    });
  },


  destroy(req,res,next){
    flairQueries.deleteFlair(req.params.id, (err,flair) =>{
      if(err){
        res.redirect(500, `/flairs/${flair.id}`)
      }else{
        res.redirect(303, `/topics/${req.params.topicId}/posts/${req.params.postId}`)


      }
    });
  },
  edit(req,res,next){
    flairQueries.getFlair(req.params.id, (err, flair) =>{


      if(err || flair === null){
        console.log(err)
        res.redirect(404, "/")
      }else{
        res.render("flairs/edit", {flair, topicId: req.params.topicId, postId: req.params.postId})

      }
    });
  }




}
