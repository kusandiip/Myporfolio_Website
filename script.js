console.log('hello')

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	console.log(chk);
	document.body.classList.toggle('dark');
});


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
 
 var hamberger = document.querySelector(`.hamberger`);
 var times = document.querySelector(`.times`);
 var mobileNav = document.querySelector(`.mobile-nav`);

 hamberger.addEventListener(`click`, function(){
   mobileNav.classList.add(`open`);
 });
 times.addEventListener(`click`, function(){
	mobileNav.classList.remove(`open`);
 });