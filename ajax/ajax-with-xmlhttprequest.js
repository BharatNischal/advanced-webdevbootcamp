//AJAX : async javascript and XML (now JSON)
//XML: Extended Markup Language
//JSON: Javascript Object Notation (key value pairs);
//now is more apropriate to talk about AJAJ !

//XMLHTTP first and old way to make an AJAX request
//the original way to make a request
const endpoint = "https://api.github.com/zen10";

const XHR = new XMLHttpRequest();
XHR.onreadystatechange = () => {
    if (XHR.readyState == 4) {
        if (XHR.status == 200) {
            console.log(XHR.responseText);
        } else {
            console.log(`ERROR: ${XHR.status}`);
        }
    }
}
XHR.open('GET', endpoint);
XHR.send();