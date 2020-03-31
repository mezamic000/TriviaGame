$(document).ready(function() {
	var seconds = 20;
	var timer;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var currentQuestion;
	var triviaQuestions = [
		{
			question: "What inanimate object did a man named Michel Lotito once eat?",
			choicesList: ["Airplane", "Candle", "Pack of Cigarettes", "Painting"],
			answer: 0
		},

		{
			question: "On Jupiter and Saturn, it rains...?",
			choicesList: ["Cats and Dogs", "Diamonds", "Asteroids", "Sand"],
			answer: 1
		},

		{
			question: "In 16th century France, 400 people died from 		which plaque?",
			choicesList: [
				"The Dancing Plague",
				"The Black Death",
				"The Third Plague",
				"The Twirling Plaque"
			],
			answer: 0
		},

		{
			question: "What U.S state is the closest to Africa?",
			choicesList: ["Colorado", "New York", "Texas", "Maine"],
			answer: 3
		},

		{
			question:
				"What was the first thing ever bought and sold on 		the Internet?",
			choicesList: [
				"Rubber Duck",
				"Armoured Tank",
				"Bag of Weed",
				"Human Skull"
			],
			answer: 2
		},

		{
			question: "How long does it take to make a Jelly Bean?",
			choicesList: ["a Few Hours", "a Week", "6 Months", "a Year"],
			answer: 1
		},

		{
			question: "The CIA once tried to make what species of animal 	into spies?",
			choicesList: ["Cats", "Spiders", "Alligators", "Moles"],
			answer: 0
		},

		{
			question: "Boston was nearly destroyed by what substance in 	1919? ",
			choicesList: ["Water", "Molasses", "Dirt", "Vinegar"],
			answer: 1
		},

		{
			question: "What unusual service can you pay for if you live 	in Brooklyn?",
			choicesList: ["Temporary Mom", "Cuddeler", "Ambassador", "Paparazzi"],
			answer: 1
		},

		{
			question: "What was Mickey Mouse called originally? ",
			choicesList: ["Walt", "Rooney", "Willie", "Mortimer"],
			answer: 3
		}
	];

	function setup() {
		//setting up the main screen
		$("#game").hide(); //hiding the game elements
		$("#stats").hide(); //hiding scoring (correct,incorrect, etc)
	}
	setup();

	$("#startBtn").on("click", function() {
		//when start button is clicked...
		$("#startScreen").hide(); //the start button and instructions hide
		startGame(); //calling the StartGame function
	});

	function startGame() {
		$("#game").show();
		$("#stats").hide();
		currentQuestion = 0; //Question's start with the first one
		displayQuestion(); // calls the function that displays the question
		// loadChoices();

		$("#timer").html(seconds); //Shows the timer
		correct = 0; //stats reset to zero
		incorrect = 0; //stats reset to zero
		unanswered = 0; //stats reset to zero
	}

	function displayQuestion() {
		seconds = 20; //starting timer at 30 seconds
		timer = setInterval(countDown, 1000); // waiting a second before starting countDown function
		$("#currentQuestion").html(triviaQuestions[currentQuestion].question); //displaying the question on the HTML page

		for (
			var i = 0;
			i < triviaQuestions[currentQuestion].choicesList.length;
			i++
		) {
			var choices = $("<div>");
			choices.addClass("choice");
			choices.html(triviaQuestions[currentQuestion].choicesList[i]);
			// choices.text();
			choices.attr("data-answer", i);
			$("#answerChoices").append(choices);
		}

		remaingQuestionAmount();
	}

	// function loadChoices() {

	// }

	$(document).on("click", ".choice", function() {
		clearInterval(timer);
		var selectedAnswer = $(this).attr("data-answer");
		console.log(this);
		var correctAnswer = triviaQuestions[currentQuestion].answer;
		console.log(correctAnswer);

		if (correctAnswer === selectedAnswer) {
			correct++;
			console.log("Win!");
			setTimeout(nextQuestion, 3 * 1000);
		} else {
			incorrect++;
			console.log("nope");
			setTimeout(nextQuestion, 3 * 1000);
		}
	});

	function countDown() {
		seconds--; // time decreasing by 1
		$("#timer").html(seconds);

		if (seconds === 0) {
			clearInterval(timer); //stops timer
			unanswered++; //time ran out so person failed to answer the question - adds 1 to unaswered score.
			nextQuestion();
		}
	}

	function nextQuestion() {
		//checking if there are anymore questions to display.
		var isQuestionOver = triviaQuestions.length - 1 === currentQuestion;

		if (isQuestionOver) {
			console.log("Game is Over!");
			displayResults();
		} else {
			currentQuestion++;
			$("#answerChoices").empty();
			displayQuestion();
		}
	}

	function displayResults() {
		$("#game").hide(); //hiding the game elements
		$("#stats").show();
		$("#correct").html("Correct: " + correct); //showing correct score
		$("#incorrect").html("Incorrect: " + incorrect); //incorrect score
		$("#unanswered").html("Unanswered: " + unanswered); //unanswered
	}

	$("#restartBtn").on("click", function() {
		//when restart button is clicked...
		$("#startScreen").hide(); //the start button and instructions hide
		startGame(); //calling the StartGame function
	});

	function remaingQuestionAmount() {
		var remaingQuestion = triviaQuestions.length - currentQuestion;
		var totalQuestions = triviaQuestions.length;

		$("#remainingQuestions").text(
			"Remaining Questions: " + remaingQuestion + "/" + totalQuestions
		);
	}
});
