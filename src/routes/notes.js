const router = require('express').Router();

const { getNotes, postNotes, updateNote, deleteNote, getNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(postNotes)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;