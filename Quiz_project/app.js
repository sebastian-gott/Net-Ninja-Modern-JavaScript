const correctAnswers = ['B', 'A', 'B', 'A'];


const showScore = document.querySelector('.showscore');
const container = document.querySelector('.result')


const form = document.querySelector('.quiz-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];

    // CHECK ANSWERS
    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    
    //console.log(score);
    container.classList.remove('d-none');
    
    scrollTo(0, 0)

    let output = 0;
    const count = setInterval(() =>{
        showScore.innerHTML = `${output}%`;
    if(output === score){
        clearInterval(count);
    } else {
        output++;
    }
    },10 );
    
});





