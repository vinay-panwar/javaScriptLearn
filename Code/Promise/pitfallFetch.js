import fetch from "node-fetch";
import { title } from "process";

// const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";

function isStatus200(res){
    console.log("Checking HTTP response status..........");
    if (res.status ===200){
        return res;
    }
    else {
        let err =new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function getPostJson(res) {
    console.log('Getting jSON......');
    return res.json()
} 

function getTitle(post){
    console.log('Getting title......');
    return post.title;
}

function echoTitle(title) {
    console.log(title);
}

setTimeout(() => {
    console.log("Not returning the getpostJson");
    fetch(url).then(isStatus200).then(result =>{
        console.log('Got a result.');
        getPostJson(result).then(post => getTitle(post));
    }).then(title => echoTitle(title));

}, 2000);
// Bad news

// good news
setTimeout(() => {
    console.log("returning the getpostJson");
    fetch(url).then(isStatus200).then(res =>{
        console.log("got the result...");
        return getPostJson(res);
    }).then(getTitle).then(echoTitle).catch(err => console.log(err));
}, 2000);
