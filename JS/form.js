function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "subtotal.rouge68@gmail.com",
    Password : "99EE86B89EF972386005641D3B95420ACB2D",
    To : document.getElementById("email").value,
    From : "Ciao" ,
    Subject : "Hi "+document.getElementById("name").value,
    Body : "Hi welcome in my newsletter"
}).then(
  message => alert(message)
);
}

