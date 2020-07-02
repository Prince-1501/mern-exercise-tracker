const express = require('express')
const router = express.Router()

const Exercise = require('./../models/exercise')

router.get('/',(req, res)=>{
  Exercise.find()
  .then(result => res.status(200).json(result))
  .catch(error => res.status(400).json('Error: '+error))
})

router.post('/add', (req, res)=>{
  const username = req.body.username
  const description = req.body.description
  const duration = req.body.duration
  const date = req.body.date

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  })

  newExercise.save()
  .then(result => res.status(200).json(result))
  .catch(err => res.status(400).json('Error: '+err))
})

router.get('/:id', (req, res)=>{
  Exercise.findById(req.params.id)
  .then(exercise => res.status(200).json(exercise))
  .catch(err => res.status(400).json('Error: '+err))
})

router.delete('/:id', (req, res)=>{
  Exercise.findByIdAndDelete(req.params.id)
  .then(()=> res.status(200).json('Exercise Deleted !'))
  .catch(err => res.status(400).json('Error: '+err))
})

router.post('/update/:id', (req, res)=>{
  Exercise.findById(req.params.id)
  .then((exercise)=>{
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date);

    exercise.save()
      .then(result => res.json('Exercise updated!'))
      .catch(err => res.status(400).json('Error: '+err))
  })
  .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router;
