//Make a timer that has a start and stop button
//first step: make a pipeline to the div
var elementsArea = document.querySelector("#lab-space");
var questionsArea = document.querySelector("#questions-space");
var answersArea = document.querySelector("#answers-space");

var questions = [
    "Question 1",
    "Question 2",
    "Question 3"
]

beginButton.addEventListener("click", function() {
    var beginButton = document.getElementById("beginButton");
    beginButton.style.display = "none";
});

//document.addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
//});

//how to i make these appear on separate pages?
var askQuestion1 = document.createElement("p");
askQuestion1.innerHTML = "String values must be enclosed within ____ when being assigned to variables";
document.body.appendChild(askQuestion1);

var askQuestion2 = document.createElement("p");
askQuestion2.innerHTML = "Arrays in Javascript can be used to store";
document.body.appendChild(askQuestion2);

var askQuestion3 = document.createElement("p");
askQuestion3.innerHTML = "The condition in an if/else statement is enclosed within_____";
document.body.appendChild(askQuestion3);

//question text, list of the 

var questions = [
	{
		text: "What color is an apple",
		options: ["red", "blue", "green"],
        answer: 0
    
	}]


function addQuestion(question) {
        // Insert paragraph element with innertext of question
        var questionParagraph = document.createElement("p");
        questionParagraph.innerHTML = question.text;
        document.body.appendChild(questionParagraph);
        // Loop over choices, for each choice add button
        for(var i = 0; i<question.options.length; i++) {
            var buttonCreater = document.createElement("button");
        }
        // If the choice is the answer, givbe it a special class}
    }

addQuestion(questions[0]) 

var answers = [
    {
        //could i just use questions[0]
        question: 'Question1',
        answer: [
            {
                text: 'A. Commas',
                isCorrect: false
            },
            {
                text: 'B. Curly Braces',
                isCorrect: false
            },
            {
                text: 'C. Quotes',
                isCorrect: true
            },
            {
                text: 'D. Parenthesis',
                isCorrect: false
            }
        ]
    },    {
        question: 'Question2',
        answer: [
            {
                text: 'A: Numbers and strings',
                isCorrect: false
            },
            {
                text: 'B: Other arrays',
                isCorrect: false
            },
            {
                text: 'C: Boolians',
                isCorrect: false
            },
            {
                text: 'D: All of the above',
                isCorrect: true
            }
        ]
    },    {
        question: 'Question3',
        answer: [
            {
                text: 'A: Quotes',
                isCorrect: false
            },
            {
                text: 'B: Curly braces',
                isCorrect: false
            },
            {
                text: 'C: Parenthesis',
                isCorrect: true
            },
            {
                text: 'D: Square brackets',
                isCorrect: false
            }
        ]
    }
]

var IntervalState;

                var timerText = document.createElement("p");
                var seconds = 300;
                timerText.textContent = seconds;
                elementsArea.appendChild(timerText);


                var startButton = document.createElement("button");
                startButton.textContent = "Start";
                elementsArea.appendChild(startButton);

                var stopButton = document.createElement("button");
                stopButton.textContent = "Stop";
                elementsArea.appendChild(stopButton);

                var endButton = document.createElement("button");
                endButton.textContent = "End";
                elementsArea.appendChild(endButton);

                //i want a startTimer function that does something when called
                function startGame() {
                    //console.log("It works")
                    intervalState = setInterval(function () {
                        seconds--;
                        timerText.textContent = seconds;
                        if (seconds <= 0) {
                            clearInterval(intervalState);
                            console.log("Times Up")
                        }
                    }, 1000)

for(var i = 0; i<questions.length; i++) {
                var questionElement = questions[counter];

                var questionArea = document.createElement("div");

                var currentQ = document.createElement("p");
                currentQ.textContent = questionElement.question

    for(i = 0; i<questionElement.answers.length; i++);
        var answer = document.createElement("p");
        answer.addEventListener("click", function () {
            if (!questionElement.answers[i].isCorrect)
                {
                seconds -= 7
                alert("Incorrect");
                }
            else{
                alert("Correct");
        }
        counter++;
    });

}
}

//add a loop here

function stopTimer() {
    //console.log("It works")
    clearInterval(intervalState);
}

function endTimer() {
    var endElement = document.createElement("p")
    clearInterval(intervalState);
    endElement.textContent = "Timer ended. Remaining seconds: " + seconds;
    elementsArea.appendChild(endElement);
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopTimer);
endButton.addEventListener("click", endTimer);