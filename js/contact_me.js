let $name = document.getElementById("name");
let $email = document.getElementById("email");
let $message = document.getElementById("message");

function checkEmail() { 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test($email.value)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             $email.focus; 
             return false; 
    }
    else{ 
             return true;
    } 
}

function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "trung80.uet@gmail.com",
    Password : "4D7DC4909916B95BCA7576CAFAB4E47CD715",
    To : $email.value,
    From : "trung80.uet@gmail.com",
    Subject : "This is the subject",
    Body : `<div style = "font-size:20px "> Chào mừng ${$name.value}!! 
    Cảm ơn sự đóng góp của bạn, chúng tôi sẽ tiếp nhận và có những cải thiện tốt hơn trong tương lai.
   </div>`
});
}

const db = firebase.firestore();
function mess(){
    event.preventDefault();
    if(checkEmail()==true){
        db.collection("doc").add({ten: $name.value, email: $email.value, message : $message.value});
        sendEmail();
    }
    setTimeout(function(){ location.reload(); }, 1200);
}


