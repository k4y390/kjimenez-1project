function feedItems (title, body, linkUrl, imageUrl) {
    this.title = 'Andromeda Galaxy';
    this.body = 'This is an article about the Andromeda Galaxy made by me. It is a segment of my website, the Galaxy Zone.'
    this.linkUrl = 'file:///C:/Users/kj5497/Downloads/School%20Version%20of%20Andromeda%20Galaxy.pdf'
    this.imageUrl = 'images/campus.png'
}

exports.newfeedItems = (title, body, linkUrl, imageUrl) => {
    return new feedItems (title, body, linkUrl, imageUrl);
}