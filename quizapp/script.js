  const quiz_ques=[{
     question:"Q1-Inside which HTML element do we put the JavaScript?",
     a: "div",
     b:"img",
     c:"src",
     d:"script",
     ans:"ans4"},
     {
     question:"Q2-Where is the correct place to insert a JavaScript?",
     a: "The body section",
     b:"The head section",
     c:"Inside DIV tag",
     d:"Both Head and Body Section",
     ans:"ans1"},
      {
        question:"Q3-How do you write Hello World in an alert box?",
        a: "alert(Hello word)",
        b:"msg(hello world)",
        c:"console.log(hello world)",
        d:"innerhtml(hello world)",
        ans:"ans1"},
        {
        question:"How do you create a function in JavaScript?",
        a: "function funcname()",
        b:"function=funcname()",
        c:"funcname()",
        d:"Both a and b",
        ans:"ans1"},
        {
            question:"Q5-How to write an IF statement in JavaScript?",
            a: "if(i==5)",
            b:"if(i====5)",
            c:"if=>(i==5)",
            d:"if i=7",
            ans:"ans1"},
            {
              question:"Q6-How does a WHILE loop start?",
                a: "while(i<=5)",
                b:"while=(i<=5)",
                c:"while i<=5",
                d:"while=>(i<=5)",
                ans:"ans1"},
                {
                    question:"Q7-How does a FOR loop start?",
                    a: "for=>(let i=0;i<5;i++)",
                    b:"for(let i=0)",
                    c:"for(let i=0;i<5;i++)",
                    d:"for=(let i=0;i<5;i++)",
                    ans:"ans3"},
                    {
                        question:"Q8-How do you round the number 7.25, to the nearest integer?",
                        a: "round(7.25)",
                        b:"Math.floor(7.25)",
                        c:"Math.round(7.25)",
                        d:"Math.round=7.25",
                        ans:"ans3"},
                        {
                            question:"How do you find the number with the highest value of x and y?",
                            a: "max=(x,y)",
                            b:"Math.max(x,y)",
                            c:"Math.Max(x,y)",
                            d:"top(x,y)",
                            ans:"ans2"},
                            {
                                question:"JavaScript is the same as Java?",
                                a: "True",
                                b:"False",
                                c:"Partial",
                                d:"Might be",
                                ans:"ans2"}
        

  ];
  const question=document.querySelector('.question');
  //h2 tag for quest
  const opt1=document.querySelector('#op1');
  const opt2=document.querySelector('#op2');
  const opt3=document.querySelector('#op3');
  const opt4=document.querySelector('#op4');
  //all opt from idop;
  const submitbtn=document.querySelector('#submit');//for submit
//   console.log(quiz_ques[0]);
 const answers=document.querySelectorAll('.answer');//as all the list or opt
 // have same class we get a array of class -----option in input

const showresult=document.querySelector('#result');

let qcount=0;
let score=0;
const deselectanswer=()=>{
    answers.forEach((ans)=>(ans.checked=false));
};


const loadquestion=()=>{
    deselectanswer();
    const qlist=quiz_ques[qcount];
   question.innerHTML=qlist.question;
   opt1.innerHTML =qlist.a;
   opt2.innerHTML =qlist.b;
   opt3.innerHTML =qlist.c;
   opt4.innerHTML =qlist.d;
}
loadquestion();   //for 1st question


const getcheckedans=()=>{
    let answer;
 answers.forEach((ele)=>{
    if(ele.checked)
    {
        answer=ele.id;//return the id of the cheked opt
        //current slect anser
    }
    })
   
 return answer;
}



// for sumbit function
submitbtn.addEventListener('click',()=>{
   const checkanswer=getcheckedans();//current selected answer
   //console.log(checkanswer);
   if(checkanswer){
   if(checkanswer===quiz_ques[qcount].ans)
  {
      score++;//check answer with the id we mapped accordingly
  };
  qcount++;
  if(qcount<quiz_ques.length)
  { 
      loadquestion();
  }
  else{
    showresult.innerHTML=`
    <h2>Your Score is ${score} out of ${quiz_ques.length} &#127881 </h2>
    <button class="btn" onclick="location.reload()">Play again</button>`;
        
      showresult.classList.remove('resultarea');
  } 
} 
})





