

function getSomething() {

}

const result = document.querySelector(".result");


try {
    getSomething();
    console.log("success");
    result.innerHTML = "Success!";
}
catch(error) {
    console.log("error occurred", error);
    result.innerHTML = "Nah there was an error!";
}
finally {
    console.log("finally");
}


