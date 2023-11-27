const num1=document.querySelector("#num1")
const num2=document.querySelector("#num2")
const num3=document.querySelector("#num3")
const num4=document.querySelector("#num4")
const num5=document.querySelector("#num5")
const num6=document.querySelector("#num6")
const numbers=document.querySelector(".numbers")

// const [answer1, answer2, answer3] = [...answers.querySelectorAll(".option")];

const getRandomInt = (start, end) => {
    let min = Math.ceil(start);
    let max = Math.floor(end);
    let a=Math.floor(Math.random() * (max - min + 1)) + min
    if (a<10){
        return "0"+a
    }else{
        return a
    }
}
const generateNumber= () => {
    const randomNum1 = getRandomInt(1,99);
    const randomNum2 = getRandomInt(1,99);
    const randomNum3 = getRandomInt(1,99);
    const randomNum4 = getRandomInt(1,99);
    const randomNum5 = getRandomInt(1,99);
    const randomNum6 = getRandomInt(1,99);

    numbers.innerHTML=
        `
        <h1 id="num1">${randomNum1}</h1>
        <h1 id="num2">${randomNum2}</h1>
        <h1 id="num3">${randomNum3}</h1>
        <h1 id="num4">${randomNum4}</h1>
        <h1 id="num5">${randomNum5}</h1>
        <h1 id="num6">${randomNum6}</h1>
    `
}
function generate(){
    generateNumber()
}
generate()