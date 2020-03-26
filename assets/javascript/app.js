$(document).ready(function() {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var trivia = {
		questions: {
			q1: "A man named Michel Lotito once ate an entire...?",
			q2: "On Jupiter and Saturn, it rains...?",
			q3: "In 16th century France, 400 people died from which plaque?",
			q4: "What U.S state is the closest to Africa?",
			q5: "What was the first thing ever bought and sold on the Internet?",
			q6: "How long does it take to make a Jelly Bean?",
			q7: "The CIA once tried to make what species of animal into spies??",
			q8: "Boston was nearly destroyed by what substance in 1919? ",
			q9: "If you live in Brooklyn, you can rent...?",
			q10: "What was Mickey Mouse called originally? "
		},
		choices: {
			q1: ["Airplane", "Blue Whale", "Pack of Cigarettes", "Pizza"],
			q2: ["Cats and Dogs", "Diamonds", "Asteroids", "Sand"],
			q3: [
				"The Dancing Plague",
				"The Black Death",
				"The Third Plague",
				"The Twirling Plaque"
			],
			q4: ["Colorado", "New York", "Texas", "Maine"],
			q5: ["Rubber Duck", "Armoured Tank", "Bag of Weed", "Human Skull"],
			q6: ["a Few Hours", "a Week", "6 Months", "a Year"],
			q7: ["cats", "spiders", "alligators", "moles"],
			q8: ["water", "molasses", "dirt", "vinegar"],
			q9: ["a Mom", "Chickens", "Casket", "Paparazzi"],
			q10: ["Walt", "Rooney", "Willie", "Mortimer"]
		},
		answers: {
			q1: "Airplane",
			q2: "Diamonds",
			q3: "The Dancing Plague",
			q4: "Maine",
			q5: "Bag of Weed",
			q6: "a Week",
			q7: "cats",
			q8: "molasses",
			q9: "a Mom",
			q10: "Mortimer"
		}
	};
});
