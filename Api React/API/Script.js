console.log("Welcome");



let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click",buttonClickHandler)


function buttonClickHandler(){

    console.log("Button Clicked");
    // Instantiate an XHR Object
    const requestUrl="https://api.waifu.pics/sfw/happy"
    const xhr = new XMLHttpRequest();

    // Open The Object
    // xhr.open("GET","https://randomuser.me/api/?results=10",true);
    // xhr.open("GET","Random.txt",True)
    xhr.open("GET",requestUrl);

    // What to do on progress (Optional)

    // xhr.onprogress = function(){
    //     console.log("On Progress");
    // }


    xhr.onreadystatechange=function(){
        console.log(xhr.readyState)
        if(xhr.readyState===4){
            const data=JSON.parse(this.responseText)
            console.log(data.url)
            document.getElementById("Pic").innerHTML=`<img src="${data.url} "height="150px" width="150px""/>`
    
        }
    }
















    // What to do when response is ready

    // xhr.onload = function(){
    //     if(this.status===200){
    //         console.log(this.responseText);
    //     }
    //     else{
    //         console.log("Something Went Wrong");
    //     }
    // }

    // xhr.onload = function(){
    //      const data=JSON.parse(this.responseText);
    //     console.log(data.url);
    //     document.getElementById("Pic").innerHTML=`<"img src="${data.url}"/>`
    // }

    // Send the request

    xhr.send();

    console.log("We are done");
}


    