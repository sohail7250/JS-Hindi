// //  Code 1

// const T1 = performance.now();
//  for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para: "+i;
//     document.body.appendChild(para);
//  }

//  const T2 = performance.now();
//  console.log("Total time by code 1:", +(T2-T1));


// // Code 2

// const T3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para:" +i;
//     mydiv.appendChild(para)
// }

// document.body.appendChild(mydiv);
// const T4 = performance.now();
// console.log("Total time by code 1:", +(T4-T3));


//          Best programming Habit

let fragment = document.createDocumentFragment();

for(let i=1; i<=100;i++){
  let para = document.createElement('p');
  para.textContent = "This is para:" +i;

  //  No reflow and no Repaint for the below line

  fragment.appendChild(para);
}
// The below line takes 1 reflow and 1 repaint 
document.body.appendChild(fragment);