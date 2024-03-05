const projectDetails = [
  { projectName: "Project X", department: "Engineering", tasksCompleted: 150, tasksInProgress: 30, duration: 10 },
  { projectName: "Project Y", department: "Product Management", tasksCompleted: 180, tasksInProgress: 20, duration: 8 },
  { projectName: "Project Z", department: "Engineering", tasksCompleted: 120, tasksInProgress: 25, duration: 12 },
  { projectName: "Project W", department: "Sales", tasksCompleted: 90, tasksInProgress: 15, duration: 15 },
  { projectName: "Project V", department: "Product Management", tasksCompleted: 200, tasksInProgress: 10, duration: 9 },
];
function printTaskInProgress(){
    let total=0
    for(let i=0;i<projectDetails.length;i++){
if(projectDetails[i].department==="Engineering"){
    total+=projectDetails[i].tasksInProgress
}
    }return total;
}
console.log("total task in progress:",printTaskInProgress())
function totalTaskCompleted(){
    total=0
    for(let i=0;i<projectDetails.length;i++){
        if(projectDetails[i].department==="Engineering"||projectDetails[i].department==="Product Management"){
            total+=projectDetails[i].tasksCompleted
        }
    }return total
}
console.log(totalTaskCompleted())
function averageDuration(){
    let total=0
    let count=0
for(let i=0;i<projectDetails.length;i++){
    if(projectDetails[i].department==="Product Management"){
        total+=projectDetails[i].duration
        count+=1
    }
}
return total/count
}
console.log(averageDuration())