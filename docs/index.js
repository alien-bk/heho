// let bradIsAPedo = Math.floor(Math.random()* 20);
// let runnerAge = bradIsAPedo;


// if (runnerAge <= 5) {
//   console.log('Fuckable');
// } else if  (runnerAge <= 12) {
//   console.log('More fuckable');
// } else if (runnerAge <= 17) {
//   console.log('Aged but fuckable');
// } else {
//   console.log('Legal and not interested')
// }

// console.log(`Age ${bradIsAPedo}`)



    let personAge = prompt ('Please enter your age to see how brad would rate you on the fuckable scale') ;  


console.log(personAge)

function braddy(){
    if (personAge <= 5) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you fuckable.`)
    } else if (personAge <=12) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you more fuckable.`)
    } else if (personAge <=17) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you aged but fuckable.`)
    } else if (personAge === false) {document.getElementById("help").innerHTML = (`kys fag`)
        }else {document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you legal and too old so he's not interested.`)}
    } 
 


