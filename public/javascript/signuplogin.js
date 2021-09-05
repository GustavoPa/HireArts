var signEl = document.querySelector("#login-form");
var logBtn = document.querySelector("#login-btn")
//var signUpEl = document.querySelector("#signup-form");

//var loginFormHandler = function (event) {
//event.preventDefault();
//var userNameInput = document.querySelector("input[name='name']").value;
//var passWordInput = document.querySelector("input[name='password']").value;

// check if input values are empty strings
//if (!userNameInput || !passWordInput) {
//alert("please fill out required fields to login!");
//  return false;
//}

//  logEl.reset();
//}


//logEl.addEventListener("submit", loginFormHandler);


document.getElementById("sgnBtn").onclick = function () {
    //event.preventDefault();
    var userName = document.querySelector("text[name='name']").value;
    var passWord = document.querySelector("password[name='password']").value;
    var email = document.querySelector("email[name='email']").value;
    var location = document.querySelector("text[name='location']").value;
    var description = document.querySelector("text[name= 'about-description']").value;
    var website = document.querySelector("text[name ='website']").value;
    var pic = document.querySelector("file[name='profile-pic']").value;
    var artType = document.querySelector("select[name='artisit-type']").value;
    var collab = document.querySelector("radio[name'artist-confirm']").value;
    console.log(userName);
    // check if input values are empty strings
    if (!userName || !passWord && !email || !location && !description || !website || !pic || !artType || !collab) {
        alert("please fill out the required fields to signup!");
        return false;
    }

    logEl.reset();
}
