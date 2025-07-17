const feedItems = require('../model/feedItem')
let item1 = {title: 'Andromeda Galaxy', body: 'This is an article about the Andromeda Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'file:///C:/Users/kj5497/Downloads/School%20Version%20of%20Andromeda%20Galaxy.pdf', imageUrl:"images/campus.png"};
let item2 = {title: 'Triangulum Galaxy', body: 'This is an article about the Triangulum Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'https://necsd-my.sharepoint.com/:w:/g/personal/kj5497_students_necsd_net/EciGFqt2QcZMp5wABbhUyBIBrDe2JACJU_XyaHFCpntp8Q?e=AsTvaL', imageUrl:"images/news_pic.jpg"};
let item3 = {title: 'Comet Galaxy', body: 'This is an article about the Comet Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'file:///C:/Users/kj5497/Downloads/School%20Version%20of%20Comet%20Galaxy%20(1).pdf', imageUrl:"images/news_pic.jpg"};

let allFeedItems = [item1, item2, item3];

console.log(exports);

exports.getAllUsers = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(allFeedItems));
}

exports.getUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.params.id);
    res.send(JSON.stringify(allFeedItems[req.param.id]));
}

exports.saveUser = function(req, res) {
    let user = req.body;
    console.log(user);
    allFeedItems.push(user);
    res.send(JSON.stringify(allFeedItems));
}

exports.deleteUser = function(req, res) {
    let id = req.params.id;
    console.log("The id is: " + id);
    allFeedItems = allFeedItems.splice(id, 1);
    console.log("3: " + allFeedItems);
    res.send(allFeedItems);
}

exports.updateUser = function (req, res) {
    let id = req.params.id;
    let user = req.body

    let userToEdit = allFeedItems[id];
    console.log(userToEdit);

    if (user.title) {
        userToEdit.title = user.title;
    }

    if (user.body) {
        userToEdit.body = user.body;
    }

    if (user.imageUrl) {
        userToEdit.imageUrl = user.imageUrl;
    }

    if (user.linkUrl) {
        userToEdit.linkUrl = user.linkUrl;
    }

    res.send(allFeedItems);
}