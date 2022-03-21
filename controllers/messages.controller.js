const path = require('path')

function getMessages(req,res) {
    
    res.render('messages', {
        title:'Messages',
        friend: 'Alan'
    })

    //res.sendFile(path.join(__dirname, '..', 'public','images' ,'skimountain.jpg'))
    // res.send('<h1>Hello!</h1>')
}

function postMessage(req, res){
    console.log('Updating messages');
}

module.exports = {
    getMessages,
    postMessage
}