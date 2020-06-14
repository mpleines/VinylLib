const express = require('express')
const router = express.Router()
const Record = require('../models/Record')

// get back all posts
router.get('/', async (req, res) => {
  try {
    const records = await Record.find()
    res.json(records)
  } catch (err) {
    res.json({ message: err })
  }
})

// get back specific record
router.get('/:recordId', async (req, res) => {
  try {
    const record = await Record.findById(req.params.recordId)
    res.json(record)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/', async (req, res) => {
  const { created, artist, album, yearOfRelease, genre, storageLocation } = req.body
  const record = await new Record({
    created: created,
    artist: artist,
    album: album,
    yearOfRelease: yearOfRelease,
    genre: genre,
    storageLocation: storageLocation
  })
  try {
    const data = await record.save()
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
})

// // delete a post
// router.delete('/:postId', async (req, res) => {
//   try {
//     const removedPost = await Post.remove({
//       _id: req.params.postId
//     })
//     res.json(removedPost)
//   } catch (err) {
//     res.json(err)
//   }
// })

// // update a post
// router.patch('/:postId', async (req, res) => {
//   try {
//     const updatedPost = await Post.updateOne(
//       { _id: req.params.postId },
//       {
//         $set: {
//           title: req.body.title,
//           preview: req.body.preview,
//           readingTime: req.body.readingTime,
//           content: req.body.content
//         }
//       }
//     )
//     res.json(updatedPost)
//   } catch (err) {
//     res.json(err)
//   }
// })

module.exports = router
