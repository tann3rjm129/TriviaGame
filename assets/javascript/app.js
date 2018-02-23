

var questions = [{

number : "1",
question: "1. Kelly Kapoor refers to herself as the '_________ _______' during a business seminar.",
options: ["Business Slut", "Best Speaker", "Business Bitch", "Business Queen"],
answer: 2

}, {
number : "2",
question: "2. Dwight’s unofficial position for most of the series was: __________",
options: ["Assistant to the Regional Manager", "Regional Manager", "Beet Liaison", "Co-Manager"],
answer: 0

}, {

number : "3",
question: "3. The title of Michael’s spy thriller movie was:",
options: ["Clean up on Aisle Five: Reloaded", "39 Minutes till Midnight", "How Dunder met Mifflin", "Threat Level Midnight"],
answer: 3

}, {

number : "4",
question: "4. When Michael has his coworkers over to his condo for dinner, what does Jan throw at Michael’s brand new plasma TV?",
options: ["TV controller", "a Dundee", "wine glass", "shoe"],
answer: 1

}, {

number : "5",
question: "5. What is the name of Angela’s cat that Dwight killed by putting in the freezer?",
options: ["Sprinkles", "Ms. Princess", "Cupcake", "Ms. Lady"],
answer: 0

}, {

number : "6",
question: "6. When Michael and Dwight pull a stunt trying to inform their coworkers of the effects of depression on top of the office roof, what is one thing Michael yells down to Dwight in their rehearsed script?",
options: ["I’M BREAKING UP WITH JAN!!!!", "I HAVE SO MANY BAD THOUGHTS!!!!", "DWIGHT, YOU IGNORANT SLUT!!!!", "JIM, DO YOU WANT TO HANGOUT AFTER THIS?!?!"],
answer: 2

}, {

number : "7",
question: "7. When Michael berates Toby yet again, Michael claims that if he was trapped in a room with a gun and only two bullets with _______, _______ and Toby, he would shoot Toby twice",
options: ["Jeffery Dahmer and Ted Bundy", "John Wayne Gacy and Charles Manson", "Hitler and Osama Bin Landen", "Hitler and double Hitler"],
answer: 2

}, {

number : "8",
question: "8. Which vegetable does Michael force Kevin to eat when the group had a conference room meeting about failing to stick to their New Year’s Resolutions?",
options: ["Spinach", "Broccoli", "Cauliflower", "Zucchini"],
answer: 1

}, {

number : "9",
question: "9. Which costume was not featured on any Halloween episode of the Office?",
options: ["Pregnant Nurse", "Obi Wan Kenobi", "Dinosaur", "Cheerleader"],
answer: 1

}, {

number : "10",
question: "10. What dong does the wedding party come down the aisle to during the 'flashmob-style' dance at Jim and Pam’s wedding?",
options: ["Chris Brown—Forever", "Beyoncé—Crazy in Love", "The B-52’s—Love Shack", "Whitney Houston—I Wanna Dance With Somebody"],
answer: 0

}, {

number : "11",
question: "11. After there is a break-in at the office building, the gang holds an auction in order to raise money to replace what was stolen. Michael promised this 'big-ticket' item would be in the auction, but couldn’t actually secure it. What was the 'big-ticket' item?",
options: ["Bruce Springsteen Tickets", "his Mom’s boat", "An original signed Babe Ruth Baseball card", "a hug from Phyllis"],
answer: 0
}, {

number : "12",
question: "12. When Jim and Pam attend Roy’s wedding Roy mentions his success was due to his _____ business.",
options: ["Gravel", "Construction", "Restaurant", "Architecture"],
answer: 0

}, {

number : "13",
question: "13. When Michael proposes to Holly, to which state do they move together?",
options: ["Maine", "Connecticut", "Indiana", "Colorado"],
answer: 3

}, {

number : "14",
question: "14. When Andy is jobless, he claims to be in the process of writing a rock opera with subtle references to his boss and coworkers. To which does he name a similar character representing his old boss Robert California?",
options: ["Bret Colorado", "Trent Montana", "Thomas Oregon", "Doug Washington"],
answer: 2

}, {

number : "15",
question: "15. What is Saber’s (company that bought Dunder Mifflin) diversity business education program that Kelly eventually gets into?",
options: ["Print in All Colors Initiative", "Saber Diversity Program", "Saber Skins Selection", "All Colors Paper Division"],
answer: 0

}];

var wrong = 0;
var score = 0;
var time;
var t = 15;

// starting the game once the start button is clicked

$(document).on("click", "#startButton", function questionLoad(questions) {
// Question Loader

for (i=0; i<questions.length; i++) {

	$("#quizBox").empty();
// empties quiz box
	time = setInterval(questionLoad, 1000);
	timer();
// timer set
	var currentQuestion = questions[i].question;
// Displays Questions
	$("#quizBox").append("<div class='question_format'>" + currentQuestion + "</div>");

		for (j=0; j<questions.options.length; j++) {
		var currentOptions = questions[i].options[j];
		$("#quizBox").append("<input type='radio' class='options_format' value=[j]>" + currentOptions + "</input>");
		};

	answerChecker(questions[i]);

};

$("#quizBox").empty();
$("#quizBox").html("<br><br><h2><b>Final Score : </b>" + ((score/15)*100) + "</h2> <br><br> <h2><b>Wrong Answers : </b>" + wrong + "</h2> <br><br>");


});

// Displays Question function

// function displayQuesiton() {
// 	$("#quizBox").append("<div class='question_format'>" + questions.question + "</div>");
// };

// // Displays the Options function

// function displayOptions() {

// 	for (j=0; j<questions.options.length; j++) {
// 	$("#quizBox").append(`<input type='radio' class='options_format' value=${j}> ${options[j]} </input>`);
// 	};
// };


// Answer Checker
function answerChecker () {
	// not sure if this is how I grab the value of each imput, grabs the "j" value I gave to each of the 
	var questionAnswer = $(this).attr("value").val();
	if ( questionAnswer == questions.answer){
		score++;
		alert("You got the answer right!");
	}
	if (t == 0){
		alert("Better luck next time!");
		wrong++;
	}
	else {
		alert("You got the answer wrong!");
		wrong++;
	};


};

// keeps track of time 

function timer() {
  	if (t !== 0) {
		t -= 1;
	};
	if (t == 0) {
	clearInterval(timer);
	// stops quiz

	// move to next question
	};
	$("#quizBox").append("Seconds Remaining : " + t)

};



