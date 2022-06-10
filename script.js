console.log('hello')

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	console.log(chk);
	document.body.classList.toggle('dark');
});
//  *****Code for Auto Cursor Typing*****

 var type = new Typed(`#typed`,{
        stringsElement:`#typed-strings`,
		typeSpeed: 200,
		startDelay: 1200,
		backSpeed: 20,
		backDelay: 500,
		loop: true,
		loopCount: true,
		showCursor: false,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {},

 });

//   *****Code for Responsive navbar*****
 
 var hamberger = document.querySelector(`.hamberger`);
 var times = document.querySelector(`.times`);
 var mobileNav = document.querySelector(`.mobile-nav`);

 hamberger.addEventListener(`click`, function(){
   mobileNav.classList.add(`open`);
 });
 times.addEventListener(`click`, function(){
	mobileNav.classList.remove(`open`);
 });

//  *****Code for Auto Close navbar When click on Links*****

document.querySelectorAll(".mobile-nav").forEach(n=>n.
	  addEventListener("click",()=>{
		hamberger.classList.remove(`open`);
		mobileNav.classList.remove(`open`);
	  }))


//    const btn = document.querySelector('button')
//    const inputs = document.querySelector('form')
//     btn.addEventListener('click',()=>{
// 		const name = (inputs.elements["name"].value).trim()
// 		const email = (inputs.elements["email"].value).trim()
// 		const msg = (inputs.elements["email-message"].value.trim())
// 		if (!name.length > 0 || !email.length > 0 || !msg.length > 0) {
// 			alert("All fields are mandatory")
// 			return
// 		}
// 	   Email.send({
// 		Host : "smtp.mailtrap.io",
// 		Username : "51e3c004bb2eb2",
// 		Password : "f81d5c76ad9ddb",
// 		To : 'sandeep2017iit@gmail.com',
// 		From : email,
// 		Subject : "New contact form Enquiry",
// 		Body :  msg + "<br>" + name	
// 	}).then(message => alert("The email successfully sent"));
// })

// function sendEmail(){
// }
function sendmail(){
    
	var name = $('#Name').val();
	var email = $('#Sender').val();
	// var subject = $('#Subject').val();
var message = $('#Message').val();

	// var body = $('#body').val();

	var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message;
	//console.log(name, phone, email, message);

	Email.send({
		Host : "smtp.gmail.com",
		Username : "sk7178954@gmail.com",
		Password : "kjeamnwrtkrbtmgt",
        // SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
		To: 'sandeep2017iit@gmail.com',
		From: "sk7178954@gmail.com",
		Subject: "New message on contact from "+name,
		Body: Body
	}).then(
		message =>{
			//console.log (message);
			if(message=='OK'){
			alert('Your mail has been send. Thank you for connecting.');
			}
			else{
				console.error (message);
				alert('There is error at sending message. ')
				
			}

		}
	);



}	  