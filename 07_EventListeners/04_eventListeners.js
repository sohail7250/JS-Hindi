
// function changeText(event){
//     console.log(event)
// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Sohail"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// fpara.addEventListener('click', function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Sohail"               // This is not good programming habbits.
//     });

// fpara.removeEventListener('click',changeText); // exactly same to add listeners .eg changeText


// let anchorElement = document.getElementById('google');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click Done By Rock"
    
// });


//        Avoiding to many Listeners

// let paras = document.querySelectorAll('p');

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("You have clicked on para:", + (i+1))
//     })
// }

// let paras = document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName == 'SPAN'){
        alert("You have clicked on para:" + event.target.textContent)
    }
    
      }

//       for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara)
// }



let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);

