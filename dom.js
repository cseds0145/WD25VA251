function result(){
    let displayHeading=document.getElementById('inputData').value;
console.log(inputValue);
 displayHeading=document.getElementById('text');
    displayHeading.innerHtml=inputValue;
    displayHeading.style.color="red"
    document.getElementsByTagName('body')[0].style.backgroundColor="green";
    let paraBkg=document.getElementById('para');
    function colorChange(){
        paraBkg.style.backgroundColor=
        "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

    }
    paraBkg.addEventListener('mouseout',colorChange);
}