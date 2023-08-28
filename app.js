window.onload = () => {
const button = document.querySelector('#btn');
button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    if(!height ||isNaN(height)|| height<0){
     result.innerText = "Please provide a valid height";
     return;
    }
    else if(!weight||isNaN(weight)||weight<0){
        result.innerText = "Please provide a valid weight"
        return;
    }
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    if(BMI<18.5){
        result.innerText = `Under weight: ${BMI}`;
    }
    else if (BMI >= 18.5 && BMI < 24.9){
        result.innerText = `Normal: ${BMI}`;
    }
    else if (BMI >= 25 && BMI < 29.9){
        result.innerText = `Overweight: ${BMI}`;
    }
    else if (BMI >= 30 && BMI < 34.9){
        result.innerText = `Obesity class 1: ${BMI}`;
    }
    else if (BMI >= 35 && BMI < 39.9){
        result.innerText = `Obesity class2: ${BMI}`;
    }
else {
    result.innerText = `Extreme obesity: ${BMI}`;
}

}

