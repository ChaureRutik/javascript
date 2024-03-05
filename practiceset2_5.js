const techProjectsData = [
    { projectName: "Project X", teamSize: 8, budget: 150000, client: "ABC Corp", duration: 3 },
    { projectName: "Project Y", teamSize: 12, budget: 200000, client: "XYZ Inc", duration: 4 },
    { projectName: "Project Z", teamSize: 6, budget: 120000, client: "LMN Ltd", duration: 2 },
    { projectName: "Project W", teamSize: 10, budget: 180000, client: "PQR Co", duration: 5 },
    { projectName: "Project V", teamSize: 15, budget: 250000, client: "EFG Enterprises", duration: 6 }
  ];
  function heighestBudget(){
    let hieghest=techProjectsData[0]
    for(let i=0;i<techProjectsData.length;i++){
        if(techProjectsData[i].budget>hieghest.budget){
            hieghest=techProjectsData[i]
        }
    }return hieghest
  }

  let projectData=heighestBudget()
  function data(){
    let data="project name:"+projectData.projectName+"\nteamsize:"+projectData.teamSize+
    "\nBudget:"+projectData.budget+"\nclient:"+projectData.client+"\nduration:"+projectData.duration
    return data
  }
  console.log(data())
  function averageDuration(){
    let total=0
    for(let i=0;i<techProjectsData.length;i++){
      total+=techProjectsData[i].duration
    }return total/techProjectsData.length
  }
  console.log("the average project duration is:",averageDuration())

  function sizeGraterThan10(){
    for(let i=0;i<techProjectsData.length;i++){
      if(techProjectsData[i].teamSize>10){
        console.log(techProjectsData[i])
      }
    }

  }
  sizeGraterThan10()