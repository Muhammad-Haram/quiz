var ques = [
    {
        que: "What does CSS stand for in web development?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Creative Style Sheets",
        d: "Counter Strike: Source",
        correct: "a",
    },
    {
        que: "Which programming language is primarily used for front-end web development?",
        a: "Python",
        b: "JavaScript",
        c: "Ruby",
        d: "PHP",
        correct: "b",
    },
    {
        que: "What does HTTP stand for in the context of web development?",
        a: "HyperText Transfer Protocol",
        b: "Hypertext Testing Protocol",
        c: "HyperTransfer Text Protocol",
        d: "Hypertext Transfer Process",
        correct: "a",
    },
    {
        que: "Which of the following is not a popular front-end framework?",
        a: " React",
        b: "Angular",
        c: "Django",
        d: "Vue.js",
        correct: "c",
    },
    {
        que: "Which of the following is a widely used version control system in web development?",
        a: " Git",
        b: "Subversion",
        c: "Mercurial",
        d: "CVS",
        correct: "a",
    },
];


var index = 0;
var total = ques.length;
var right = 0,
    wrong = 0;

var quesBox = document.querySelector('.head');
var radio = document.querySelectorAll('.rdo');
console.log(radio);

var loadQues = () => {
    if (index === total) {
        return end();
    }
    reset();
    const data = ques[index];
    quesBox.innerText = ` ${index + 1 + "." + " "} ${data.que}`;

    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;

}

var submit = () => {
    const data = ques[index];
    const ans = getanswer();
    console.log(ans, data.correct);
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQues();
    return;
}

const getanswer = () => {
    let answer;
    radio.forEach(
        (input) => {

            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () => {
    document.querySelector('.box').innerHTML = `<h1 align = "center"> Thank You For Playing "The Quiz" </h1><br>
    <h2 align = "center">${right} / ${total} Are Correct</h2>`
}

loadQues();