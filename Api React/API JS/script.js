const requestUrl="https://api.github.com/users/Yashh56"
const xhr=new XMLHttpRequest();

xhr.open("GET",requestUrl);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText)
        // console.log( typeof data);
        console.log(data.followers);
        // console.log(data.following);
        console.log(data.public_repos);
        console.log(data.html_url);
        console.log(data.avatar_url);
        document.getElementById("yash").innerHTML=`${data.following}`
    }
}
// document.getElementById("yash").innerHTML=35423535;
xhr.send();

