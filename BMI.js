var height = prompt('あなたの慎重（m）を入力してください','');
var weight = prompt('あなたの体重（kg）を入力してください','');
var BMI = weight / (height * height);

if(BMI < 18.5){
    alert('あなたはやせ型です');
}else if (BMI<25){
    alert('あなたは標準体型です');
}else if (BMI<30){
    alert('あなたは太り気味です');
}else{
    alert('あなたは肥満体型です');
}
