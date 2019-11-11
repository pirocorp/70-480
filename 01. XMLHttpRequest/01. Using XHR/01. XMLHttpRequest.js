const baseUrl = 'https://swapi.co/api';
const endpoint = 'people/1'

const resultElement = document.getElementById('result');

function reqListener() {
    const response = JSON.parse(this.responseText);
    for (const key in response) {
        const row = `<div><span>${key}</span>:<span>${response[key]}</span></div>`;
        resultElement.innerHTML += row;
    }
}

//Using XML HTTP Request
let request = new XMLHttpRequest();
//Add event handler on load event
//You need to add the event listeners before calling open() on the request. 
//Otherwise the progress events will not fire.
request.addEventListener('load', reqListener);

//The actual events you can monitor to determine the state of an ongoing transfer are:
//The download events are fired on the XMLHttpRequest object itself
//Note: Progress events are not available for the file: protocol.

//The amount of data that has been retrieved has changed.
//request.addEventListener("progress", updateProgress);

//The transfer is complete; all data is now in the response
//request.addEventListener("load", transferComplete);

//The transfer is failed;
//request.addEventListener("error", transferFailed);

//The transfer is canceled;
//request.addEventListener("abort", transferCanceled);

//The upload events are fired on the XMLHttpRequest.upload
//request.upload.addEventListener("progress", updateProgress);
//request.upload.addEventListener("load", transferComplete);
//request.upload.addEventListener("error", transferFailed);
//request.upload.addEventListener("abort", transferCanceled);


//Makes GET request to given URI
//3rd parameter is Async

request.addEventListener("loadend", loadEnd);

function loadEnd(e) {
    console.log("The transfer finished (although we don't know if it succeeded or not).");
} 

request.open("GET", `${baseUrl}/${endpoint}`, true);
request.send();