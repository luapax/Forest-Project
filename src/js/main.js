const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const body = document.querySelector("body");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile-active");
	body.classList.toggle("nav-mobile-active");
	// body.style.visibility = "hidden";
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);

window.addEventListener("scroll", () => {
	const header = document.querySelector(".header");
	if (window.scrollY > 0) {
		header.classList.toggle("sticky-header", window.scrollY > 0);
	}
});
