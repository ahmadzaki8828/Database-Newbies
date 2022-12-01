function test() {

    var input = document.getElementById("input")  // does input go from client -> server.js -> draft.js -> client 
    var found = false
    var i = 0

    var database = ["P1","Bugatti Chiron","Ford GT"]
    var databaseText = [""]

    while (found = false && i <= database.length) {

        if (database[i] === input) {

            var found = true  // to end the loop early when we found our match 
            document.getElementById("output").innerHTML = databaseText[i]
        }

        var i = i + 1
    }

    
}

// how to make the submit button work properly so its linked with the text box
// ask about how to do the image stuff
// how to set up the node.js stuff which is supposed to be set up as a another JS file
// what will the server do