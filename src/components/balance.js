const btn = document.getElementById("button")
let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");


const calculate = () => {
  let results1 = parseInt(input1.value);
  let results2 = parseInt(input2.value);
  let a = results1 + results2
  console.log(a);
  return a;
};

btn.addEventListener("click", calculate);