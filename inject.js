document.addEventListener("click", function() {
    var link = document.querySelector("#edit-submit[value='Submit']");
    if(link != null) {
	link.addEventListener("click", plays);
    }
});
function plays() {
    var myAudio = new Audio(chrome.runtime.getURL("sound.mp3"));
    myAudio.play();
}
