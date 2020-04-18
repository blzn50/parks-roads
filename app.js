class Infrastructure {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
  age() {
    return new Date().getFullYear() - this.buildYear;
  }
}

class Park extends Infrastructure {
  constructor(name, buildYear, noOfTrees, area) {
    super(name, buildYear);
    this.noOfTrees = noOfTrees;
    this.area = area;
  }

  treeDensity() {
    const density = this.noOfTrees / this.area;
    console.log(`${this.name} has tree density of ${density.toFixed(2)} trees per square km.`);
  }
}

/* 
tree density = trees / area
avg age of park = ages sum/ parks
name of park with more than 1000 trees
total and avg length of streets
size: tiny, small, normal, big,huge
*/

const park1 = new Park('Mirim National Park', 1955, 600, 100);
const park2 = new Park('Khaijir Community Park', 1988, 497, 90);
const park3 = new Park('Hutti Park', 1996, 1800, 180);

const parkMap = new Map();

parkMap.set('park1', park1);
parkMap.set('park2', park2);
parkMap.set('park3', park3);

let sumParkAge = 0;
let parkWith1000Trees = '';

parkMap.forEach((cur) => {
  sumParkAge += cur.age();
});

const avgParkAge = sumParkAge / parkMap.size;
console.log('---- PARKS DATA ----');
console.log(`Our ${parkMap.size} parks have an average age of ${avgParkAge.toFixed(2)} years.`);

for (const [key, value] of parkMap) {
  value.treeDensity();
  if (value.tree > 1000) {
    parkWith1000Trees = value.name;
  }
}

console.log(`${parkWith1000Trees} has more than 1000 trees.`);

console.log('---- ROADS DATA ----');

class Street extends Infrastructure {
  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  description() {
    console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} road.`);
  }
}

const street1 = new Street('Pandey Road', 2001, 4);
const street2 = new Street('Pragati Marg', 2019, 2, 'small');
const street3 = new Street('Kathar Road', 2008, 5, 'big');
const street4 = new Street('NayaTol Galli', 2001, 2, 'tiny');

const streetMap = new Map();
streetMap.set('street1', street1);
streetMap.set('street2', street2);
streetMap.set('street3', street3);
streetMap.set('street4', street4);

let sumRoad = 0;

streetMap.forEach((cur) => {
  sumRoad += cur.length;
});

const avgRoad = sumRoad / streetMap.size;

console.log(
  `Our ${
    streetMap.size
  } roads have a total length of ${sumRoad} km, with an average length of ${avgRoad.toFixed(2)} km.`
);

for (const [key, value] of streetMap) {
  value.description();
}
