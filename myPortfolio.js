let quotes = [
	"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.<br>—Norman Vincent Peale-", 
	"If you can dream it, you can do it.<br>—Walt Disney-", "The future belongs to those who believe in the beauty of their dreams.<br>—Eleanor Roosevelt-", 
	'"There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits."<br>—Michael Phelps-',
	"Keep your eyes on the stars, and your feet on the ground.<br>—Theodore Roosevelt-", 
	"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.<br>-Martin Luther King Jr.-",
	"Champions aren’t made in gyms. Champions are made from something they have deep inside them—a desire, a dream, a vision. They have to have last-minute stamina, they have to be a little faster, they have to have the skill and the will. But the will must be stronger than the skill.<br>-Muhhmad Ali-",
	"Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.<br>―Michael Jordan-",
	"You don’t become what you want, you become what you believe.<br>―Oprah Winfrey-",
	"There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all equals as human beings. You could be anyone if you put in the time. You will reach the top, and that’s that. I am not talented, I am obsessed.<br>-Connor Mcgreggor-",
	"The reason most people never reach their goals is that they don’t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.<br>-Denis Watiley-",
	"A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done.<br>-Vince Lombardi-",
	"It does not matter how slowly you go as long as you do not stop.<br>-Confucius-",
	"Always do your best. What you plant now, you will harvest later.<br>-Og Madino-", "Problems are not stop signs, they are guidelines.<br>-Robert H. Schuller-",
	"You are never too old to set another goal or to dream a new dream.<br>-Les Brown-", "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.<br>-Wayne Dyer-",
	"You can never quit. Winners never quit, and quitters never win.<br>-Ted Turner-", "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.<br>-Albert Einstein-",
	"It doesn't matter how many times you failed. What matters, you learned from it and you keep on going.<br>-Lawrence Babay-"
]

let sect1 = document.querySelector("#section1");
let sect2 = document.querySelector("#section2");

display();

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

function display() {
	let rdmNumbrs = Math.floor(Math.random() * (quotes.length));
	document.querySelector("#quoting").innerHTML = quotes[rdmNumbrs];
}


