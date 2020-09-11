const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
daty: { type: Date, default: () => new Date() },
exercises: [{
    type: { type: String }, 
    name: { type: String }, 
    duration: { type: String }, 
    weight: { type: Number }, 
    reps: { type: Number }, 
    sets: { type: Number }, 
    distance: { type: Number }
}]
})

const Workout mongoose.model("Workout", WorkoutSchema)

module.exports = Workout