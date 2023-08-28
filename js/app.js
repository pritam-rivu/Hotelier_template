const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".navbar-toggler-icon");


menuBtn.addEventListener("click", function(){
	navBar.classList.toggle("menu-active")
})

const menuHasSub = document.querySelectorAll('.navbar .has-sub-menu')

menuHasSub.forEach(e=>{
	e.addEventListener('click', function(){
		e.parentElement.classList.toggle("active-inner")
	})
})

