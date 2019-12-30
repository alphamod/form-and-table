function addData1(){
    /* var tGender=document.querySelector('input[name="gender"]:checked').value;
    var tSkills = [];
    document.getElementsByName('skills[]').forEach(function(element){
        if(element.checked){
            tSkills.push(element.value)
        }
    })
    var tName=document.getElementById("cName").value;
    var tAge=document.getElementById("cAge").value;
    var tNation=document.getElementById("cNation").value;
    var tState=document.getElementById("cState").value;
    var tCity=document.getElementById("cCity").value;
    var tMStatus=document.getElementById("cMStatus").value;
    var tAbout=document.getElementById("cAbout").value;

    var tableRow=document.createElement("tr");
    var fName="<td>"+tName+"</td>";
    var fAge="<td>"+tAge+"</td>";
    var fNation="<td>"+tNation+"</td>";
    var fState="<td>"+tState+"</td>";
    var fCity="<td>"+tCity+"</td>";
    var fGender="<td>"+tGender+"</td>";
    var fMStatus="<td>"+tMStatus+"</td>";
    var fSkills="<td>"+tSkills+"</td>";
    var fAbout="<td>"+tAbout+"</td>";   
    tableRow.innerHTML=fName+fAge+fNation+fState+fCity+fGender+fMStatus+fSkills+fAbout;
    document.getElementById("tableBody").appendChild(tableRow); */
} 

var dataArray=[];
count=0
function addData(){
    var nameOfUser=document.getElementById("cName").value;
    var ageOfUser = document.getElementById("cAge").value;
    var nationOfUser=document.getElementById("cNation").value;
    var stateOfUser=document.getElementById("cState").value;
    var cityOfUser = document.getElementById("cCity").value;
    var genderOfUser=document.querySelector('input[name="gender"]:checked').value;
    var statusOfUser=document.querySelector('input[name="ms"]:checked').value;
    var skillOfUser = [];
    document.getElementsByName('skills[]').forEach(function(element){
        if(element.checked){
            skillOfUser.push(element.value)
        }
    })    
    var aboutUser=document.getElementById("cAbout").value;
    dataArray.push({
        name : nameOfUser,
        age : ageOfUser,
        nation : nationOfUser,
        state : stateOfUser,
        city : cityOfUser,
        gender : genderOfUser,
        maritalStatus : statusOfUser,
        skills : skillOfUser,
        about : aboutUser
    })
    document.getElementById('tableBody').innerHTML = "";
    dataArray.forEach((element)=>{
    var tableRow=document.createElement("tr");
    Object.keys(element).forEach((element1)=>{
        var tableData=document.createElement("td");
        tableData.innerText=element[element1];
        tableRow.appendChild(tableData);
    })
    document.getElementById("tableBody").appendChild(tableRow);
    })
    count++;
}
