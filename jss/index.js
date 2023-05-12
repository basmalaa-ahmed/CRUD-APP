var fName=document.getElementById("fName");
var lName= document.getElementById("lName");
var rolln =document.getElementById("rolln");
var btnAdd=document.getElementById("btnAdd");
var btnUpdate=document.getElementById("btnUpdate");
var searchData=document.getElementById("searchData");
var alertfName=document.getElementById("alertfName");
var alertlName=document.getElementById("alertlName");
var alertNum=document.getElementById("alertNum");


var temp;


arrOfData=[];
if(getLocal()!= null){
    arrOfData=getLocal();
    display();
}
btnAdd.onclick=function(){
addData();
}
btnUpdate.onclick=function(){
    updateDta();
}
searchData.oninput=function(){
    search(this.value);
}

function addData(){
    if(fNameValidat()==true & lNameValidat()==true &rollValidate()==true){
        data={
            firstName:fName.value,
            lastName:lName.value,
            rollnum:rolln.value,
        }
        arrOfData.push(data);
        setLocal();
        display();
        clear();
    }
   
    
    
    
}
function display(){
    var container=``;
    var term = searchData.value.toLowerCase();
    for(var i=0;i<arrOfData.length;i++){
        if (arrOfData[i].firstName.toLowerCase().includes(term)||arrOfData[i].lastName.toLowerCase().includes(term)||arrOfData[i].rollnum.toLowerCase().includes(term)){
            {
            container+=`
            <tr>
            <td>${arrOfData[i].firstName}</td>
            <td>${arrOfData[i].lastName}</td>
            <td>${arrOfData[i].rollnum}</td>
            <td>
                <div>
                    <button class="btn btn-warning" onclick="updateForm(${i})">Edit</button>
                    <button class="btn btn-danger" onclick="deleterForm(${i})">Delete</button>
                    
                </div>
            </td>
        </tr>
            `
        
           
            }
      
    }
}
document.getElementById("tBody").innerHTML=container;


}
function clear(){
    fName.value="";
    lName.value="";
    rolln.value="";
}
function setLocal(){
    localStorage.setItem("data",JSON.stringify(arrOfData));
}
function getLocal(){
    return JSON.parse(localStorage.getItem("data"))
}
function deleterForm(index){
    arrOfData.splice(index,1);
    setLocal();
    display();

}
function updateForm(index){
    fName.value=arrOfData.at(index).firstName;
    lName.value=arrOfData.at(index).lastName;
    rolln.value=arrOfData.at(index).rollnum;
    btnAdd.classList.add("d-none");
    btnUpdate.classList.remove("d-none");
    temp=index;
    scroll({
        top:0,
        behavior:"smooth",
    })
   

}
function updateDta(){
    data={
        firstName:fName.value,
        lastName:lName.value,
        rollnum:rolln.value,
    }
    arrOfData.splice(temp,1,data);
    setLocal();
    display();
    clear();
    btnAdd.classList.remove("d-none");
    btnUpdate.classList.add("d-none")
}
function fNameValidat(){
    if(fName.value==""){
        alertfName.classList.remove("d-none");
        return false;
    }
    else{
        alertfName.classList.add("d-none");
        return true;
    }
}
function lNameValidat(){
    if(lName.value==""){
        alertlName.classList.remove("d-none");
        return false;
    }
    else{
        alertlName.classList.add("d-none");
        return true;
    }
}
function rollValidate(){
    if(rolln.value==""){
        alertNum.classList.remove("d-none");
        return false;
    }
    else{
        alertNum.classList.add("d-none");
        return true;
    }
}

function search(){
   display();

}
