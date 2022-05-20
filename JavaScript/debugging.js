// this script debugs the website: e.g. "console.log("Website opened")"

function onLoad(opened) { // functions the website loading
    console.log("Website has been loaded.");
    //
    console.warn("Please check use the quote: {Debug} function if the Website is lagging.")
}

onLoad(); // starts the function

function Debug(debugQuote) { // grabs a quote from the debug list mentioned below
    if (debugQuote == "grabPing") { // grabs the ping from the website
        var start = new Date().getTime();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/", false);
        xhr.send();
        var end = new Date().getTime();
        var time = end - start;
        return time + "ms"; // returns the "ms" from the Http Request
    } else if (debugQuote == "grabPacket") { // grabs a  packet from the websites "storage"
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/", false);
        xhr.send();
        return xhr.responseText; // returns the xhr response
    } else {
        console.error("Invalid command."); // returns an invalid command
    }
}

function quoteLog() { // quotes the user's log name
    random = Math.random(1,10);
    //
    console.log(random); // logs the random log name
}

quoteLog(); // starts the function

function trophyClick() {
    alert("It's a trophy... I wonder where I got that from..");
}