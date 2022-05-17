const router = require('express').Router();

const {getUsers, postUsers, deleteUsers} = require('../controllers/users.controller')
router.route('/')
    .get(getUsers)
    .post(postUsers)

    router.route('/:id')
    .delete(deleteUsers)

module.exports = router;