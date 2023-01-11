// const loc = [
//     {
//         url: "file:///C:/Users/Administrator/Desktop/task_6/New%20folder/Dloc.html"
//     }
// ]
const locc = "file:///C:/Users/Administrator/Desktop/task_6/New%20folder/Dloc.html"


const btnloc = document.getElementById('btnloc');
const btnLocationLink = document.getElementsByClassName('btn-location-link');
// let currentIndex = 0;

function createAelement(locc){
    let element = btnLocationLink;
    element.href = locc;
    console.log(element);
    return element;
}
function setPage(){
//   let element=createAelement(locc);
  btnLocationLink.appendChild(locc);
  btnloc.appendChild(btnLocationLink);
  console.log(btnLocationLink)
}
setPage();

btnloc.addEventListener('click', function(){
    setPage();
});



