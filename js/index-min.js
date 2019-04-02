var link = document.querySelector(".contact-btn"),
	popup = document.querySelector(".modal-content"),
	close = document.querySelector(".modal-content-close"),
	form = popup.querySelector("form"),
	user = popup.querySelector("[name=user-name]"),
	email = popup.querySelector("[name=email]"),
	storage = localStorage.getItem("user-name");
link.addEventListener("click", function (e) {
	e.preventDefault(), popup.classList.add("modal-content-visible"), storage ? (user.value = storage, email.focus()) : user.focus()
}), close.addEventListener("click", function (e) {
	e.preventDefault(), popup.classList.remove("modal-content-visible"), popup.classList.remove("modal-error")
}), form.addEventListener("submit", function (e) {
	user.value && email.value ? localStorage.setItem("user-name", user.value) : (e.preventDefault(), popup.classList.remove("modal-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("modal-error"))
}), window.addEventListener("keydown", function (e) {
	27 === e.keyCode && popup.classList.contains("modal-content-visible") && popup.classList.remove("modal-content-visible")
});
