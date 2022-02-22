  const quiz_ques=[{
     question:"Q1-What is the scientific name of a butterfly?",
     a: "lorem",
     b:"Cleopetra",
     c:"jjwfhw",
     d:"Rhopalocera",
     ans:"ans3"},
     {
     question:"Q2-What is the my name ?",
     a: "Apis",
     b:"Coleoptera",
     c:"Formicidae",
     d:"Rhopalocera",
     ans:"ans2"},
      {question:"Q3-What is the scientific name of a human?",
        a: "Apis",
        b:"Coleoptera",
        c:"Florem",
        d:"Rhiwuhfuicera",
        ans:"ans1"},
        {
        question:"Q4-What is the scientific name of a Science?",
        a: "Apis",
        b:"Coptera",
        c:"Formicwfidae",
        d:"Rhopalrocera",
        ans:"ans4"},
        {
            question:"Q5-What is the scientific name of a butterfly?",
            a: "lorem",
            b:"Cleopetra",
            c:"jjwfhw",
            d:"Rhopalocera",
            ans:"ans2"},
            {
                question:"Q6-What is the scientific name of a butterfly?",
                a: "lorem",
                b:"Cleopetra",
                c:"jjwfhw",
                d:"Rhopalocera",
                ans:"ans4"},
                {
                    question:"Q7-What is the scientific name of a butterfly?",
                    a: "lorem",
                    b:"Cleopetra",
                    c:"jjwfhw",
                    d:"Rhopalocera",
                    ans:"ans1"},
                    {
                        question:"Q8-What is the scientific name of a butter?",
                        a: "lorem",
                        b:"Cleopetra",
                        c:"jjwfhw",
                        d:"Rhopalocera",
                        ans:"ans3"},
                        {
                            question:"Q9-What is the scientific name of a fly?",
                            a: "lorem",
                            b:"Cleopetra",
                            c:"jjwfhw",
                            d:"Rhopalocera",
                            ans:"ans2"},
                            {
                                question:"Q10-What is what ?",
                                a: "lorem",
                                b:"Cleopetra",
                                c:"jjwfhw",
                                d:"Rhopalocera",
                                ans:"ans4"}
        

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

const loadquestion=()=>{
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
   const checkanswer=getcheckedans();//current seklted anser
   //console.log(checkanswer);
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
})





