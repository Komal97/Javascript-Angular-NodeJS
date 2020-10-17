/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. After you display the result, display the next random question.
8. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
*/

(function() {
    function Question(ques, ans, correct) {
        this.ques = ques;
        this.ans = ans;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.ques);
        for (let i = 0; i < this.ans.length; i++) {
            console.log(i + ' ' + this.ans[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, fn) {
        if (ans === this.correct) {
            console.log('correct answer');
        } else {
            console.log('wrong answer. Try again');
        }
        let sc = fn(ans === this.correct);
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(sc) {
        console.log('total score till now: ' + sc);
    }

    var q1 = new Question('Is JS coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What\'s the name of this language?', ['JS', 'Python'], 0);
    var q3 = new Question('What does best describe coding?', ['Hard', 'Boring', 'Fun', 'Tedious'], 2);
    var questions = [q1, q2, q3];


    function score() {
        let sc = 0; // this variable remains intact in scope chain, hence used by all q objects
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    // closures
    keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer');

        if (answer != 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();