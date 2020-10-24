//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
let Manager = [managerName, managerAge, currentTeam, trophiesWon];
return Manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  const formation1 = {
    defender:"",
    midfield:"",
    forward:""
  };
  
  return formation1;

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
var player = [];
players.forEach(e =>{
  if(e.debut==year){
    player.push(e)
  }
})
return player;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
var player = [];
players.forEach(e => {
  if(e.position==position){
    player.push(e)
  }
});
return player;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
var player = [];
for(var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==awardName){
player.push(players[i]);
    }
  }
}
return player;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
var player = [];
var count = 0;
for(var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==awardName){

      count++;
    }
    if(count==noOfTimes){
      player.push(players[i]);
    }
  }
  count = 0;
}
return player;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  var player = [];
  let count = 0;
  
  for(var i=0;i<players.length;i++)
  {
    if(players[i].country==country)
    {
      for(var j=0;j<player[i].awards.length;j++)
      {
        if(players[i].awards[j].name==awardName)
        {
          player.push(players[i]);
        }
        
      }
    }
    
  }
   return player;
  }

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
var player = [];
for(var i=0;i<players.length;i++){
  if(players[i].team==team && players[i].age<age)
  {
    if(players[i].awards.length>=noOfAwards || players[i].awards.length<=noOfAwards)
    {
        player.push(players[i]);
    }
  }  
}
return player;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
players.sort((a,b) => (a.age>b.age)?-1:1);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
players.sort((a,b) => (a.team>b.team)?-1:1);
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
