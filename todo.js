var checkStatus,deleteStatus,input,ullist;
window.onload=function(){
    let today=new Date();
 var dateElement=document.getElementById("datetoday");
const options={weekday:'long',month:'short',day:'numeric'};
dateElement.innerHTML=today.toLocaleDateString("en-US",options);


checkStatus=document.getElementsByClassName("check");
deleteStatus=document.getElementsByClassName("delete");
input=document.getElementById("inputtext");
ullist=document.getElementById("ullist");
}

let list=[];
let id =0;

function addtodo(inputtext)
{
    const position="beforeend";
    const text=`<li>
    <p class="check"></p>
    <p class="text" >${inputtext}</p>
    <p class="delete"></p>
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
                name:input,
                id:id,
                done:false,
                trash:false
            }
        );
        input.value="";
        id++;
    }
})

