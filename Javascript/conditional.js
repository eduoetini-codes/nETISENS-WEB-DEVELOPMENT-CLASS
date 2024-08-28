// if Statement 
// if (condition) {
    // code to execute if condition is true
// }
// let firstSon ='15'
// if  (firstSon === 15){
//     console.log('He is my Son')
// }else{
//     console.log('He is not my Son')
// }

// let score = prompt("Put in your Score: ");
let score = 0;
console.log({score});

score = score.trim()
console.log({score});
console.log(score.length)

if (score.length > 0 && !isNaN(score))
    
    score = Number(score);
    console.log({score});

    if (score >69) {
        console.log(`Cogratulations,you scored ${score} you scored an A`)
    }else if (score >59) {
      console.log('Cogratulations, you scored an B')
    }else if (score >49) {
       console.log('Cogratulations, you scored an C')
    }else if (score >29) {
        console.log('Cogratulations, you scored an D')
    }else if (score>-1) {'YOu failed woofuly'
        
    }else console.log( "Invalid Score" );


// if (score >= 0 && score <= 100) {
    
//     if (score >= 70) {
//         console.log( 'You have an A');
//     }else if ( score >= 60){
//         console.log( 'You have an B');
//     }else if (score >=50) {
//         console.log( 'You have a C');
//     }else if (score >=45) {
//         console.log( 'You have a D');
//     }else {
//         console.log( 'You have a F');
//     }
// } else {alert( "Invalid Number");
    
// }

// let num = 2 + 8;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('Four');
//         default:
//             console.log('Invalid Number');
// }

// let word1 = 'Happy';
// let word2 = 'Birthday';
// let word3 = 'Bassey';

// // String concatenation method
// console.log(word1 + ' ' + word2 + ' ' + word3);

// let word4 = 'Good';
// let word5 = 'Day';
// let word6 = 'Bro';

// // string interpolation
// console.log (`${word4}${word5} ${word6} Emma`)