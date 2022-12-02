
function getDataHelper() {
   
    return fetch("http://localhost:3000/car?" + new URLSearchParams({
        model: 'camry',
      
}))
    .then((response) => response.json())
    .then((data) =>{return data});
    
   
}

function getData(){
    var cardata;
    getDataHelper().then((data)=>{
        cardata = data
        document.getElementById("output").innerHTML = JSON.stringify(cardata)
    })
   
    // var newtext = document.createElement("p");
    // newtext.setAttribute('class' , 'paragraph ')
    // newtext.setAttribute('id' , 'output')
   
}

// how to make the submit button work properly so its linked with the text box
// ask about how to do the image stuff
// how to set up the node.js stuff which is supposed to be set up as a another JS file
// what will the server do