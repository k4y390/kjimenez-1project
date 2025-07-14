function checkKeyPress(e) {
  if (e.keyCode == 32) {
    e.preventDefault();
    goToLocation('http://my.marist.edu');
  }
}
window.onload = function() {
  console.log("Hello")
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  document.body.addEventListener("keydown", checkKeyPress);
  const clickTarget = document.getElementById("portal_button");
  if(clickTarget) {
    clickTarget.style.cursor = "pointer;"
    clickTarget.addEventListener("click", () => {
      goToLocation("http://my.marist.edu");
    })
  }
};

let feedItem = {title: 'Andromeda Galaxy', body: 'This is an article about the Andromeda Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'file:///C:/Users/kj5497/Downloads/School%20Version%20of%20Andromeda%20Galaxy.pdf', imageUrl:"images/campus.png"};
let feedItem2 = {title: 'Triangulum Galaxy', body: 'This is an article about the Triangulum Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'https://necsd-my.sharepoint.com/:w:/g/personal/kj5497_students_necsd_net/EciGFqt2QcZMp5wABbhUyBIBrDe2JACJU_XyaHFCpntp8Q?e=AsTvaL', imageUrl:"images/news_pic.jpg"};
let feedItem3 = {title: 'Comet Galaxy', body: 'This is an article about the Comet Galaxy made by me. It is a segment of my website, the Galaxy Zone.', linkUrl: 'file:///C:/Users/kj5497/Downloads/School%20Version%20of%20Comet%20Galaxy%20(1).pdf', imageUrl:"images/news_pic.jpg"};

window.addEventListener ('load', () => {
 let currentStories = [feedItem, feedItem2, feedItem3];
 function displayItem(feedItem) {
  const newsfeed = document.getElementById("newsfeed");
}
console.log(newsfeed);
for (i=0; i<currentStories.length; i++) {
  newsfeed.innerHTML += currentStories[i].title + "<br />";
  newsfeed.innerHTML += currentStories[i].body + "<br />";
  newsfeed.innerHTML += currentStories[i].linkUrl + "<br />";
  newsfeed.innerHTML += currentStories[i].imageUrl;
} 
});

