// this code has all the admin commands for the console

function adminCommands(command) {
    if (command == "print") {
        const input = prompt();
        console.log(input);
    }
    else if (command == "summon") { // summon a html element
        const input = prompt();
        var element = document.createElement(input);

        const text = prompt();
        element.innerHTML = text;

        document.body.appendChild(element);
    }
    else if (command == "clear") { // clear the console
        console.clear();
    }
    else if (command == "load") { // load a page
        const input = prompt();

        window.location.href = input;
    }
    else if (command == "obfuscate") { // obfuscate a string
        const str = prompt();
        var output = "";
        for (var i = 0; i < str.length; i++) {
            output += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return output;
    }
    else {
        console.log("Invalid command"); // if the command is invalid
    }
}

// print all admin commands

function printAdminCommands() {
    console.log("print");
    console.log("summon");
    console.log("clear");
    console.log("load");
    console.log("obfuscate");
}

printAdminCommands();