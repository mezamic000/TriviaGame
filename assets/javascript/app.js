$(document).ready(function() {
	var seconds = 30;
	var timer;
	var choices;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var currentQuestion = 0;
	var triviaQuestions = [
		{
			question: "What inanimate object did a man named Michel Lotito once eat?",
			choices: ["Airplane", "Candle", "Pack of Cigarettes", "Painting"],
			answer: 0
		},

		{
			question: "On Jupiter and Saturn, it rains...?",
			choices: ["Cats and Dogs", "Diamonds", "Asteroids", "Sand"],
			answer: 1
		},

		{
			question: "In 16th century France, 400 people died from 		which plaque?",
			choices: [
				"The Dancing Plague",
				"The Black Death",
				"The Third Plague",
				"The Twirling Plaque"
			],
			answer: 0
		},

		{
			question: "What U.S state is the closest to Africa?",
			choices: ["Colorado", "New York", "Texas", "Maine"],
			answer: 3
		},

		{
			question:
				"What was the first thing ever bought and sold on 		the Internet?",
			choices: ["Rubber Duck", "Armoured Tank", "Bag of Weed", "Human Skull"],
			answer: 2
		},

		{
			question: "How long does it take to make a Jelly Bean?",
			choices: ["a Few Hours", "a Week", "6 Months", "a Year"],
			answer: 1
		},

		{
			question: "The CIA once tried to make what species of animal 	into spies?",
			choices: ["cats", "spiders", "alligators", "moles"],
			answer: 0
		},

		{
			question: "Boston was nearly destroyed by what substance in 	1919? ",
			choices: ["water", "molasses", "dirt", "vinegar"],
			answer: 1
		},

		{
			question: "What unusual service can you pay for if you live 	in Brooklyn?",
			choices: ["Temporary Mom", "Cuddeler", "Ambassador", "Paparazzi"],
			answer: 0
		},

		{
			question: "What was Mickey Mouse called originally? ",
			choices: ["Walt", "Rooney", "Willie", "Mortimer"],
			answer: 3
		}
	];

	function setup() {
		$("#game").hide();
		$("#stats").hide();
	}
	setup();

	$("#startBtn").on("click", function() {
		$("#startScreen").hide();
		startGame();
	});

	function startGame() {
		$("#game").show();
		$("#timer").html(seconds);
		currentQuestion = 0;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		displayQuestion();
		loadChoices();
	}

	function displayQuestion() {
		seconds = 30; //starting timer at 30 seconds
		timer = setInterval(countDown, 1000); // waiting a second before funning countDown function

		$("#currentQuestion").html(triviaQuestions[currentQuestion].question);
	}

	function loadChoices(choices) {
		for (let i = 0; i < triviaQuestions[currentQuestion].choices.length; i++) {
			choices = $("<div>");
			choices.text(triviaQuestions[currentQuestion].choices[i]);
			choices.attr("data-answer", i);
			choices.addClass("choice");
			$("#answerChoices").append(choices);
		}
	}

	function countDown() {
		seconds--;
		$("#timer").html(seconds);

		if (seconds === 0) {
			clearInterval(timer); //stops timer
			unanswered++; //time ran out so person failed to answer the question - adds 1 to unaswered score.
			nextQuestion();
		}
	}

	function nextQuestion() {
		currentQuestion++;
		displayQuestion();
	}
});
