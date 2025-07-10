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
let feedItem = {title: 'Marist Story 1', body: 'TBD', linkUrl: 'TBD', imageUrl:};

window.addEventListener ('load', () => {
  let storyOne = document.getElementById("storyOne");
  storyOne.innerHTML = feedItem.imageUrl + "<br />";
  storyOne.innerHTML += feedItem.title + "<br />";
  storyOne.innerHTML += feedItem.body + "<br />";
  storyOne.innerHTML += feedItem.linkUrl + "<br />";
});