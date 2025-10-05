let lenght;
let width;

function calculateArea(){
    lenght= parseFloat(document.getElementById('length').value)
    width=parseFloat(document.getElementById('width').value)

    let area = lenght * width

    document.getElementById('result').innerHTML=`The area the recrangle is: ${area}`
}
