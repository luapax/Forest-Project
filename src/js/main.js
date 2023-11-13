// NAVIGATION MANAGER & YEAR

const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const navMobileBtn = document.querySelectorAll(".nav__link");
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
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
navMobileBtn.forEach((btn) =>
	btn.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile-active");
	})
);

// FORM VALIDATION
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");
const message = document.querySelector("#message");
const errorMessage = document.querySelector(".error-msg");
const submitBtn = document.querySelector(".submitBtn");

const formValidation = (e) => {
	e.preventDefault();
	errorMessage.classList.remove("active");
	errorMessage.classList.remove("sucess");
	if (
		inputName.value.trim().length < 1 ||
		inputSurname.value.trim().length < 1 ||
		message.value.trim().length < 1 ||
		!inputEmail.value.includes("@")
	) {
		errorMessage.classList.add("active");
		errorMessage.textContent = "Uzupełnij wszystkie pola";

		console.log("no git");
	} else if (document.location.search === "?mail_status=error") {
		errorMessage.classList.add("active");
		errorMessage.textContent = "Pojawił się problem z wysłaniem wiadomości";
		console.log("no git no git");
	} else if (document.location.search === "?mail_status=sent") {
		errorMessage.classList.remove("active");
		errorMessage.classList.add("success");
		errorMessage.textContent = "Twoja wiadomość została wysłana";
		console.log("git");
		setTimeout(() => {
			errorMessage.classList.remove("success");
		}, 4000);
	} else {
		errorMessage.classList.remove("active");
		errorMessage.classList.add("success");
		errorMessage.textContent = "Wiadomość została wysłana";
		console.log("git");
		setTimeout(() => {
			errorMessage.classList.remove("success");
		}, 4000);
	}
};

submitBtn.addEventListener("click", formValidation);

// ANIMATION
const sectionCards = document.querySelector(".offers__cards");
const sectionSlideDown = document.querySelectorAll(".offers__card-down");
const sectionSlideUp = document.querySelector(".offers__card-up");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			sectionSlideUp.classList.add("slide-in-up");
			sectionSlideDown.forEach((item) => {
				item.classList.add("slide-in-down");
			});
			observer.unobserve(entry.target);
		}
	});
});

observer.observe(sectionCards);
