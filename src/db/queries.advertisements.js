const Advertisement = require("./models").Advertisement;

module.exports = {
  getAllAdvertisements(callback){
    return Advertisement.all()

    .then((advertisements) =>{
      callback(null, advertisements);
    })
    .catch((err) =>{
      callback(err);
    })
  },

  addAdvertisement(newAdvertisement,callback){
    return Advertisement.create({
      title: newAdvertisement.title,
      description: newAdvertisement.description
    })
    .then((advertisement) => {
      callback(null,advertisement);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getAllAdvertisement(title,callback){
    return Advertisement.findOne({
      where: {title: this.advertisement.title}
    })
    .then((advertisement) =>{

      callback(null,advertisement);
    })
    .catch((err) =>{
      callback(err);
    })
  },

  deleteAdvertisement(title,callback){
    return Advertisement.destroy({
      where: {title}
    })
    .then((advertisement) =>{
      callback(null, advertisement)

    })
    .catch((err) =>{
      callback(err);
    })
  }


}
