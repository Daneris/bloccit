// const request = require("request");
// const server = require("../../src/server");
// const base = "http://localhost:3000/flairs/";
// const sequelize = require("../../src/db/models/index").sequelize;
// const Flair = require("../../src/db/models").Flair;
// const Post = require("../../src/db/models").Post;
// const Topic = require("../../src/db/models").Topic;
//
// describe("routes : flairs", () =>{
//   beforeEach((done) => {
//   //#1
//       this.topic;
//       this.post;
//       this.flair;
//       sequelize.sync({force: true}).then((res) => {
//
//   //#2
//         Topic.create({
//           title: "Expeditions to Alpha Centauri",
//           description: "A compilation of reports from recent visits to the star system."
//         })
//         .then((topic) => {
//           this.topic = topic;
//   //#3
//           Post.create({
//             title: "My first visit to Proxima Centauri b",
//             body: "I saw some rocks.",
//   //#4
//             topicId: this.topic.id
//           })
//           .then((post) => {
//             this.post = post;
//
//             Flair.create({
//               name: "this is great",
//               color: "red",
//               postId: this.post.id
//             })
//               .then((flair) =>{
//                 this.flair = flair;
//                 done();
//               });
//
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           done();
//         });
//       });
//
//     });
//
//
//
//
//   describe("GET /flairs", () =>{
//     it("should return a status code of 200 and all the flairs", (done) =>{
//       request.get(base, (err,res, body) =>{
//         expect(res.statusCode).toBe(200);
//         expect(err).toBeNull();
//         expect(body).toContain("Flairs");
//         expect(body).toContain("this is great");
//         done();
//
//       });
//     });
//   });
//
//
//   describe("GET /flairs/new", () =>{
//     it("should render a new flair form", (done) =>{
//       request.get(`${base}new`, (err,res,body) =>{
//         expect(err).toBeNull();
//         expect(body).toContain("New Flair");
//         done();
//       });
//     });
//   });
//
//   describe("POST /flairs/create", () =>{
//     const options ={
//       url: `${base}create`,
//       form: {
//         name: "real maple syrup",
//         color: "pink"
//       }
//     };
//     it("should create a new flair and redirect", (done) =>{
//       request.post(options,
//         (err, res, body) =>{
//           Flair.findOne({where: {name: "real maple syrup"}})
//             .then((flair) =>{
//               expect(res.statusCode).toBe(303);
//               expect(flair.name).toBe("real maple syrup");
//               expect(flair.color).toBe("pink");
//               done();
//             })
//               .catch((err) =>{
//                 console.log(err)
//                 done();
//               });
//         }
//       )
//     });
//   });
//
//
//
//   describe("GET /flairs/:id", () =>{
//     it("should render a view with the selected flair", (done) =>{
//       request.get(`${base}${this.flair.id}`, (err,res,body) =>{
//         expect(err).toBeNull();
//         expect(body).toContain("this is great");
//         done();
//       });
//     });
//   });
//
//   describe("POST /flairs/:id/destroy", () =>{
//     it("should delete the flair with the associated Id", (done) =>{
//       Flair.all()
//       .then((flairs) =>{
//         const flairCountBeforeDelete = flairs.length;
//
//         expect(flairCountBeforeDelete).toBe(1);
//
//         request.post(`${base}${this.flair.id}/destroy`, (err,res,body) =>{
//           Flair.all()
//             .then((flairs) =>{
//               expect(err).toBeNull();
//               expect(flairs.length).toBe(flairCountBeforeDelete - 1);
//               done();
//             })
//         });
//       });
//     });
//   });
//
//
//   describe("GET /flairs/:flairId/posts/:id/edit", () =>{
//     it("should render a view with an edit flair form", (done) =>{
//       request.get(`${base}/${this.flair.id}/posts/${this.post.id}/edit`, (err,res,body) =>{
// console.log(this.post.id)
//         expect(err).toBeNull();
//         expect(body).toContain("Edit Flair");
//         expect(body).toContain("editing flairs");
//         done();
//       });
//     });
//   });
//
//
//
// });
