
function getSomething() {

}

const result = document.querySelector(".result");

try {
    getSomething();
    console.log("Success")
    result.innerHTML = "Success!";
} 
catch(error) {
    console.log("Error occurred", error);
    result.innerHTML = "Error occurred";
}
finally {

    console.log("finally");
    
}




