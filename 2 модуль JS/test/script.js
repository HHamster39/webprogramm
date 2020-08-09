function getText(event){
    let text =event.target.innerHTML;
    console.log(text)
    setText(txt)
}
function setText(txt)
{
    divB.innerHTML=txt;
}

divA.addEventListener("click", getText);

