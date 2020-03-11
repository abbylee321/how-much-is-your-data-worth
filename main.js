const spotifybutton = document.getElementById("spotify-button");
const netflixbutton = document.getElementById("netflix-button");
const ssnbutton = document.getElementById("ssn-button");
const creditcardbutton = document.getElementById("creditcard-button");
const passportbutton = document.getElementById("passport-button");
const ehrbutton = document.getElementById("ehr-button");
const diplomabutton = document.getElementById("diploma-button");
const licensebutton = document.getElementById("license-button");

const finaldatabutton = document.getElementById("final-button");
let totalvalue  = 0;
let text = document.getElementById("final-result");

spotifybutton.onclick = function spotifyValue() {
    // console.log("i'm clicked")
    console.log(spotifybutton.value);
    //casts strings or any variables as numbers 
    totalvalue = totalvalue + Number(spotifybutton.value);
    spotifybutton.disabled = true; 
}

netflixbutton.onclick = function netflixValue() {
    console.log(netflixbutton.value);
    totalvalue = totalvalue + Number(netflixbutton.value);
    netflixbutton.disabled = true; 
}

ssnbutton.onclick = function ssnValue() {
    console.log(ssnbutton.value);
    totalvalue = totalvalue + Number(ssnbutton.value);
    ssnbutton.disabled = true;
}

creditcardbutton.onclick = function creditcardValue() {
    console.log(creditcardbutton.value);
    totalvalue = totalvalue + Number(creditcardbutton.value);
    creditcardbutton.disabled = true;

}

passportbutton.onclick = function passportValue() {
    console.log(passportbutton.value);
    totalvalue = totalvalue + Number(passportbutton.value);
    passportbutton.disabled = true;
}

ehrbutton.onclick = function ehrValue() {
    console.log(ehrbutton.value);
    totalvalue = totalvalue + Number(ehrbutton.value);
    ehrbutton.disabled = true;
}

diplomabutton.onclick = function diplomaValue() {
    console.log(diplomabutton.value);
    totalvalue = totalvalue + Number(diplomabutton.value);
    diplomabutton.disabled = true;
}

licensebutton.onclick = function licenseValue() {
    console.log(licensebutton.value);
    totalvalue = totalvalue + Number(licensebutton.value);
    licensebutton.disabled = true;
}

finaldatabutton.onclick = function spotifyValue() {
    console.log("i'm clicked")
    console.log(totalvalue);
    document.getElementById("final-result").innerHTML = `$ ${totalvalue}`; 

}





