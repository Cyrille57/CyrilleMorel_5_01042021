const url = "http://localhost:3000/api/teddies";

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};

xhr.open("GET", url)

xhr.send();