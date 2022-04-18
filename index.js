//Write the code to access element which is having id as "text"
let text = document.getElementById("text");
text.innerText = "changed in dom manipulation";

//Write the code to access element which is having tag as "h1"
let heading = document.getElementsByTagName("h1");
heading[0].innerText = "DOM ";

// Write the code to access element which is having class as "box"
let box = document.getElementsByClassName("box");
box[0].innerText = "BOX"


// "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
let hello = document.getElementById("hello");
hello.innerText = "Hello World!"

//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeOnClick(){
    // for container
    let content = document.getElementsByClassName("flex-container");
    content[0].style.flexDirection = "column";
    console.log(content);
    //for button
    const button = document.getElementById("btn");
    button.style.border = "2px solid red";
    button.innerText = "Changed";
}

// What’s the difference between window vs document?


// "<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

hello.style.color = "red";
hello.id = "heading";

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function changePage(){
    let welcome = document.getElementById("welcome");
    welcome.innerText = "Welcome to Elevation Academy"
}

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function clock(){
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hh.innerText = hrs;
    mm.innerText = mins;
    ss.innerText = secs;
}
clock();
let allSeconds = 1000;
setInterval(clock,allSeconds);