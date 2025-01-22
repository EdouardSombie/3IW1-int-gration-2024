// attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", (event) => {
	document.querySelectorAll(".navbar__button").forEach(function (elem) {
		elem.addEventListener("click", (evt) => {
			// sélectionner le parent de l'élément
			// dans ce parent, on sélectionne la balise <ul>
			const ul = elem.parentElement.querySelector("ul");
			// si elle n'a pas la classe .active : lui donner la classe et changer sa height pou scrollHeight
			if (!ul.classList.contains("active")) {
				ul.classList.add("active");
				ul.style.height = ul.scrollHeight + "px";
			}
			// sinon : lui enlever la classe et lui donner une height de 0
			else {
				ul.classList.remove("active");
				ul.style.height = 0;
			}
		});
	});
});
