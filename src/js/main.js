// NAVIGATION & YEAR HANDLING

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
const message = document.querySelector("#msg");
const msgStatus = document.querySelector(".msg-status");
const submitBtn = document.querySelector(".submitBtn");

const formValidation = (e) => {
	msgStatus.classList.remove("error");
	msgStatus.classList.remove("sucess");
	if (
		inputName.value.trim().length < 1 ||
		inputSurname.value.trim().length < 1 ||
		message.value.trim().length < 1 ||
		!inputEmail.value.includes("@")
	) {
		e.preventDefault();
		msgStatus.classList.add("error");
		msgStatus.textContent = "Uzupełnij wszystkie pola";

		setTimeout(() => {
			msgStatus.classList.remove("error");
		}, 3000);
	} else {
		return;
	}
};
submitBtn.addEventListener("click", formValidation);

// PHP FORM HANDLING
if (document.location.search === "?mail_status=sent") {
	msgStatus.classList.add("success");
	msgStatus.textContent = "Wiadomość wysłana!";

	setTimeout(() => {
		msgStatus.classList.remove("success");
	}, 3000);
}

if (document.location.search === "?mail_status=error") {
	msgStatus.classList.add("error");
	msgStatus.textContent = "Wystąpił błąd.";
	setTimeout(() => {
		msgStatus.classList.remove("error");
	}, 3000);
}

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
