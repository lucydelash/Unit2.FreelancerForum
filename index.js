// create an object of the available freelancers
  // Alice - writer - $30
  // Bob - teacher - $50
const freelancers = [
{
  name: `Alice`,
  Position: `writer`,
  price: 30
},
{ 
  name: `Bob`,
  Position: `teacher`,
  price: 50
}
{
  name: `Carol`,
  position: `developer`,
  price: 70
}
];

function addFreelancer() {
  const names = [`Benny`, `Jet`, `Creedance`, `Clearwater`, `Gunz`, `Rosez`];
  const occupation = [`musician`, `baker`, `ditch-digger`, `nanny`, `model`, `hobo`];
  const rates = [51, 28, 46, 12, 100, 500];
  const nm = names[Math.floor(Math.random() * names.length)];
  const occ = occupations[Math.floor(Math.random() * occupations.length)];
  const rts = rates[Math.floor(Math.random() * rates.length)];
  people.push({
    name : nm,
    occupation : occ,
    startingPrice : rts
  });
}
addFreelancer()

const makeAverage = (anArrofObj) =>{
  let sum = 0
  for (let i = 0; i < anArrofObj.length; i++) {
    let curRate = people[i].startingPrice;
    sum += curRate;
  }
  let average = sum / anArrofObj.length;
  return average;
}

const table = document.querySelector(`table`);

const tableRows = [];

for(let i = 0; i < people.length; i++) {
  const newTR = document.createElement(`tr`);
  const tdName = document.createElement(`td`);
  const tdOccupation = document.createElement(`td`);
  const tdStartingPrice = document.createElement(`td`);

  const person = people[i];
  tdName.innertext = person.name;
  tdOccupation.innerText = person.occupation;
  tdStartingPrice.innerText = person.startingPrice;

  newTR.replaceChildren(tdName, tdOccupation, tdStartingPrice);
  tableRows.push(newTR);
}
table.replaceChildren();

addFreelancer();

setInterval(() => addFreelancer(), 3000);