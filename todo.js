let todoarray=JSON.parse(localStorage.getItem("mytododata"))||[];
showtodo();

function addtask(){
    let userinput=document.getElementById("userinput").value.trim();
    if(userinput==""){
        alert("Please enter a task");
        return;

    }
    else{
        let todoitem={
            title:userinput,
            isdone:false
        };
        todoarray.push(todoitem);
        localStorage.setItem("mytododata",JSON.stringify(todoarray));
        document.getElementById("userinput").value="";
      
    }
    showtodo();
}
    function showtodo(){
       let listbox=document.getElementById("tasklist");
         listbox.innerHTML="";
       

         todoarray.forEach(function(item,index){
            let listitem=document.createElement("li");
           

            let checkbox=document.createElement("input");
            checkbox.type="checkbox";

            checkbox.checked=item.isdone;
            let text=document.createElement("span");
            text.textContent=item.title;

            if(item.isdone){
                text.style.textDecoration="line-through";
                text.style.color="gray";
            }
            checkbox.onclick=function(){
                item.isdone=checkbox.checked;
                localStorage.setItem("mytododata",JSON.stringify(todoarray));
                showtodo();
            }

            let removebtn=document.createElement("button");
            removebtn.innerHTML="❌";
            removebtn.onclick=function(){
                todoarray.splice(index,1);
                localStorage.setItem("mytododata",JSON.stringify(todoarray));
                showtodo();
            };
            listitem.appendChild(checkbox);
            listitem.appendChild(text);
            listitem.appendChild(removebtn);
            listbox.appendChild(listitem);
         });
         
    }


     
