const Flair = require("./models").Flair;
const Post = require("./models").Post;
const Topic = require("./models").Topic;

module.exports = {

  getAllFlairs(callback){
    return Flair.all()

    .then((flairs) =>{
      callback(null,flairs);
    })
    .catch((err) =>{
      callback(err);
    })
  },

  addFlair(newFlair,callback){

      return Flair.create(newFlair)
        .then((flair) =>{
          callback(null, flair)
        })
        .catch((err) =>{
          callback(err);
        })

  },

  getFlair(id,callback){
    return Flair.findById(id, {
      include: [{
        model: Post,
        as: "posts"
      }]
    })
      .then((flair) =>{
        callback(null, flair);
      })
      .catch((err) =>{
        callback(err);
      });

  },

  deleteFlair(id, callback){
    return Flair.destroy({
      where: {id}
    })
      .then((flair) =>{
        callback(null, flair);
      })
      .catch((err) =>{
        callback(err);
      })
  }


}
