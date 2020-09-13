const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {})
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
  let _id = mongoose.Types.ObjectId(params.id);

  db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
