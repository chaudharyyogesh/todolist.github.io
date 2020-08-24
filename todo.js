var reset,checkStatus,deleteStatus,input,ullist,checker;
let list,id;

const check="check";
const uncheck="uncheck";
let data=localStorage.getItem("todo");

window.onload=function(){
    let today=new Date();
 var dateElement=document.getElementById("datetoday");
const options={weekday:'long',month:'short',day:'numeric'};
dateElement.innerHTML=today.toLocaleDateString("en-US",options);

reset=document.getElementById("reset");
checkStatus=document.getElementsByClassName("check");
deleteStatus=document.getElementsByClassName("delete");
input=document.getElementById("inputtext");
ullist=document.getElementById("ullist");
if(data)
{
    list=JSON.parse(data);
    loadtodo(list);
    id=list.length;
}
else{
 list=[];
 id =0;
}
}

function loadtodo(array){
    array.forEach(function(item)  {
        addtodo(item.name,item.id,item.done,item.trash);
        
    });
}
function resetall()
{
    localStorage.clear();
    location.reload();
}




function addtodo(inputtext,id,done,trash)
{
    if(trash){return;}
    const Checker=done?check:uncheck;
    const complete=done?"complete":"";
    const position="beforeend";
    const text=`<li>
    <p class=${Checker} id="${id}" onclick="completetodo(this)" ></p>
    <p class="text ${complete}" >${inputtext}</p>
    <p class="delete" onclick="remove(this)" id="${id}"></p>
</li>`;
ullist.insertAdjacentHTML(position,text);

}


document.addEventListener("keyup",function(event)
{
    const inputtext=input.value;
    if(event.keyCode==13){
        addtodo(inputtext,id,false,false);
        list.push(
            {
                name:inputtext,
                id:id,
                done:false,
                trash:false
            }
        );
        input.value="";
        id++;
        localStorage.setItem("todo",JSON.stringify(list));
    }
})

function completetodo(ele){
    ele.classList.toggle("check");
    ele.classList.toggle("uncheck");
    ele.parentNode.querySelector(".text").classList.toggle("complete");
    list[ele.id].done=list[ele.id].done?false:true;
    
    localStorage.setItem("todo",JSON.stringify(list));


}
function remove(ele){
// ele.parentNode.style.display="none";
ele.parentNode.parentNode.removeChild(ele.parentNode);
list[ele.id].trash=true;

localStorage.setItem("todo",JSON.stringify(list));
}