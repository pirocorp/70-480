var xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(this.responseXML);
}

xhr.open("GET", "content.html");
xhr.responseType = "document";
xhr.send();