const model = require('../models/friends.model.js')

function getFriends (req,res) {
    res.json(model)
}

function addFriend (req,res) {

    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }

    const newFriend = {
        id: model.length,
        name:req.body.name
    }

    model.push(newFriend);
    console.log(model);
    return res.status(200).json(model)

}

function getFriend (req,res){
    const friendID = Number(req.params.friendId)
    const friend = model[friendID]

    if (friend) {
        res.status(200).json(friend)
    }else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

module.exports ={
    getFriend, addFriend, getFriends
}