
// Player code
var xhttp;

function onLoad() {
    // On startup, the player load's it's content - this would normally be dynamically generated
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Sample.xml", false);	// Must be on the same domain
    xhttp.send();
    xmlDoc = xhttp.responseXML;
    onContentLoaded(xmlDoc)
}

var responses = [];

function onContentLoaded(xmlDoc) {
    var s = '';
    s += '<table border="0" padding="0" width="100%" height="100%"><tr>';
    s += '<td width="200" align="center">';
    s += '<div id="Movie1" style="width:200px; height:250px"></div>';
    //s += '<br/><textarea id="question" name="question">This is a test</textarea>';
    //s += '<br/><button type="button" onclick="Speak1()">Speak</button>';
    //	s += '<br/><button type="button" onclick="response1()">Ask</button>';
    //	s += '<br/><button type="button" onclick="Play1()">Play</button>';
    s += '</td>';
    s += '</tr></table>';
    document.getElementById('TopDiv').innerHTML = s;

    msAttach('Movie1', 'BenAS3HTML', ' https://www.x-in-y.com/sko2013/player/Output/BenAS3HTML_Files', 200, 250);
}

function Speak1() {
    Speak("Movie1", $('#question').text());
}
function Speak2() {
    Speak("Movie2", talking2.value);
}

function Play1() {
    Play("Movie1", question.value);
}
function Play2() {
    Play("Movie2", talking2.value);
}

function response1() {
    response("Movie1", question.value);
}

function response2() {
    response("Movie2", talking2.value);
}


function Play(movieID, Text) {
    alert("Playing " + " " + movieID + "   " + Text + " Not implemented yet ");
    //	msPlay(movieID, Text);
}

function Speak(movieID, Text) {

    msSpeak(movieID, Text);
}
function response(movieID, Text) {
    alert("Response " + " " + movieID + "   " + Text + " Not implemented yet ");
    //	msResponse(movieID, Text);
}

function onSceneLoaded(id) {
    // CB content loaded and ready to accept commands - will get N of these where N is # of characters
}
function onPresentingChange(id, p) {
    // Presenting state changed, e.g. as a result of going idle
    //if (p == false) alert("Character idle");
}
function onFocusChange(id, f) {
    // Focus changed, e.g. as a result of navigation
}
function onExternalCommand(id, cmd, args) {
    // External Command encountered in script
    //alert("External Command cmd=" + cmd + ", args=" + args);
}
function onQueueLengthChange(id, n) {
    // msSpeakQueued queue length change
}
function onVariableChange(id, n) {
    // One or more variables changed
}

// var startFirstScene = function(text){
//     Speak("Movie1", "Lasya is python panda");
// };

$(document).ready(function(){
    onLoad();
});

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
    setTimeout(function(text){
        Speak("Movie1", selection);
    }, 500);
});