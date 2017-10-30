let sect1 = document.querySelector("#section1");
let sect2 = document.querySelector("#section2");

alert("Welcome! and Mabuhay!");
sect1.addEventListener("mouseover", (e) => {
	e.target.style.color = "white";
});

sect1.addEventListener("mouseout", (e) => {
	e.target.style.color = "gray";
});

sect2.addEventListener("mouseover", (e) => {
	e.target.style.color = "white";
});

sect2.addEventListener("mouseout", (e) => {
	e.target.style.color = "gray";
});


