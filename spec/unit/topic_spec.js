const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", () =>{
  beforeEach((done) =>{
    this.topic;
    this.post;
    sequelize.sync({force:true}).then((res)=>{


      Topic.create({
        title: "Cleaning",
        description: "Tips for keeping on top of the housework"
        })
          .then((topic)=>{
            this.topic = topic;

            Post.create({
              title: "cleaning the bathroom",
              body: "use bleach",

              topicId: this.topic.id
            })
                .then((post) =>{
                  this.post = post;
                  done();
                });
              })
                .catch((err) =>{
                  console.log(err);
                  done();
                });

              });


            });

describe("#create()", () =>{
  it("should create a topic object when called with a title and description", (done) =>{

    Topic.create({
      title: "cleaning the kitchen",
      description: "tips",

    })
      .then((topic)=>{
        expect(topic.title).toBe("cleaning the kitchen");
        expect(topic.description).toBe("tips");

        done();
      })
        .catch((err)=>{
          console.log(err);
          done();
        });
  });

    it("should not create a topic with a missing description", (done)=>{

      Topic.create({
        title: "cleaning the kitchen"
      })
        .then((topic) =>{

          done();
        })

          .catch((err) =>{
            expect(err.message).toContain("Topic.description cannot be null");

            done();
          })
    });
  });





  describe("#getPosts()", () =>{
    it("should return the associated post", (done) =>{
      this.topic.getPosts()
        .then((associatedPosts) =>{
          expect(associatedPosts[0].title).toBe("cleaning the bathroom");
          expect(associatedPosts[0].body).toBe("use bleach");
          done();
        });
    });
  });






});
