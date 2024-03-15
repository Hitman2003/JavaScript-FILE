const questions = [
  {
    'que': "which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "React",
    'correct': "a"  
  },
  {
    'que': "What year was javascript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of these",
    'correct': "b"
  },
  {
    'que': "what does CSS stands for?",
    'a': "Hypertext Markup language",
    'b': "Cascading Style Sheet",
    'c': "jason object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
  }
]

//Questions and options dalna

let index = 0; //for first question index is zero,similarly for second it will be 1
let total = questions.length;
let right = 0,
    wrong = 0; //initial wrong and right both will be 0
const quesBox = document.getElementById('quesBox') //This is for questions
const optionInputs = document.querySelectorAll('.options') //This is for options of every question

const loadQuestion = () => {
    
    if(index === total){
        return endQuiz()
    }
    reset()

    const data = questions[index] //for first question index is zero,similarly for second index 1
    quesBox.innerText = `${index+1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

    // console.log(data);

}

const submitQuiz = () => {
      const data = questions[index];
      const ans = getAnswer()
      if(ans === data.correct){
        right++;
      }else{
        wrong++;
      }
      index++;
      loadQuestion();
      return; 
    
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
    
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center" >
    <h3> Thanks you for playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}

//initial call
loadQuestion(index);