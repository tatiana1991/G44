const app = require("../server");
const Post = require("../models/PersonalShopper");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach((done) => {
  mongoose.connect("mongodb://localhost:27017/JestDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});


test("GET /api/personalshopper", async () => {
  const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

  await supertest(app).get("/api/personalshopper")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check data
      expect(response.body[0]._id).toBe(post.id);
      expect(response.body[0].title).toBe(post.title);
      expect(response.body[0].content).toBe(post.content);
    });
});

test("POST /api/personalshopper", async () => {
  const data = { title: "Post 1", content: "Lorem ipsum" };

  await supertest(app).post("/api/personalshopper")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body._id).toBeTruthy();
      expect(response.body.title).toBe(data.title);
      expect(response.body.content).toBe(data.content);

      // Check data in the database
      const post = await Post.findOne({ _id: response.body._id });
      expect(post).toBeTruthy();
      expect(post.title).toBe(data.title);
      expect(post.content).toBe(data.content);
    });
});

test("GET /api/personalshopper/:id", async () => {
  const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

  await supertest(app).get("/api/personalshopper/" + post.id)
    .expect(200)
    .then((response) => {
      expect(response.body._id).toBe(post.id);
      expect(response.body.title).toBe(post.title);
      expect(response.body.content).toBe(post.content);
    });
});

test("PATCH /api/personalshopper/:id", async () => {
  const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

  const data = { title: "New title", content: "dolor sit amet" };

  await supertest(app).patch("/api/personalshopper/" + post.id)
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body._id).toBe(post.id);
      expect(response.body.title).toBe(data.title);
      expect(response.body.content).toBe(data.content);

      // Check the data in the database
      const newPost = await Post.findOne({ _id: response.body._id });
      expect(newPost).toBeTruthy();
      expect(newPost.title).toBe(data.title);
      expect(newPost.content).toBe(data.content);
    });
});

test("DELETE /api/personalshopper/:id", async () => {
  const post = await Post.create({
    title: "Post 1",
    content: "Lorem ipsum",
  });

  await supertest(app)
    .delete("/api/personalshopper/" + post.id)
    .expect(204)
    .then(async () => {
      expect(await Post.findOne({ _id: post.id })).toBeFalsy();
    });
});
