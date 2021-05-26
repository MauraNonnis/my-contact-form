
var firebaseConfig = {
    apiKey: "AIzaSyC5xgUqX0w-ukhA12cH0GtF0dRlHFRFXyk",
    authDomain: "contact-form-7eed4.firebaseapp.com",
    databaseURL: "https://contact-form-7eed4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-form-7eed4",
    storageBucket: "contact-form-7eed4.appspot.com",
    messagingSenderId: "671245751671",
    appId: "1:671245751671:web:2b9f08ec1dc1ec2cfffd72"
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref("messages")

let form = document.getElementById("contact-form")

form.addEventListener("submit", submitForm)

function submitForm(e){
    e.preventDefault()
    let nameF = getInputVal("nameF");
    let company = getInputVal("company");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");

    document.getElementById("alert").style.display = "block"

    setTimeout(() => {
        document.getElementById("alert").style.display = "none"
    }, 2000);
    
    saveMessage(nameF, company, email, phone, message)

    document.getElementById("contact-form").reset()
}

function getInputVal(id) {
    return document.getElementById(id).value
}

function saveMessage(nameF, company, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: nameF,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}
