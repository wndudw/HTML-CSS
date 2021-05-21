const tilte = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    } 
}*/

/*function handleClick(){
    //classList.contains : 값이 존재하는지 체크 (결과값: true/false)
    const hasclass = tilte.classList.contains(CLICKED_CLASS); 
    if(!hasclass){
        tilte.classList.add(CLICKED_CLASS);
    } else{
        tilte.classList.remove(CLICKED_CLASS);
    }
}  => 이것보다 간단하게 코딩할려면 classLsit.toggle 사용*/

function handleClick(){
    //클래스가 존재하면 add, 존재하지 않으면 remove
    tilte.classList.toggle(CLICKED_CLASS);
}

function init(){
    tilte.addEventListener("click", handleClick);
}

init();