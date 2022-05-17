const userCtrl = {};
const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.json(users)
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

userCtrl.postUsers = async (req, res) => {
    try {
        const { username } = req.body
        const newUser = new User({ username })
        await newUser.save()
        return res.json('Users crated')
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

userCtrl.deleteUsers = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.json({ message: 'User deleted' })
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

module.exports = userCtrl