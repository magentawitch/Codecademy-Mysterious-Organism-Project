// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//DNA Factory Function
function pAequorFactory(number, array) {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let index = Math.floor(Math.random() * 15)
      let randomBase = array[index]
      let newBase = returnRandBase();

      while (randomBase === newBase) {
        newBase = returnRandBase();
      }
      if (randomBase !== newBase) {
        array[index] = newBase;
      }
      return array;
    },
    compareDNA(pAequorObject) {
      const currentObject = this.specimenNum;
      const objectToCompare = pAequorObject.specimenNum;
      let commonDNABase = 0;

      for (let i = 0; i < pAequorObject.dna.length; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          commonDNABase += 1;
        }
      }

      const percentage = ((commonDNABase * 100)/pAequorObject.dna.length).toFixed(2);
      console.log(`${currentObject} and ${objectToCompare} share ${percentage}% of DNA.`)
    },
    willLikelySurvive() {
      let containsCOrG = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          containsCOrG += 1;
        }
      }
      const porcentage = (containsCOrG * 100)/this.dna.length;

      if (porcentage >= 60) {
        return true;
      } else {
        return false;
      }
    },
  }
}

//pAequor Instances
let pAequorInstances = [];

for (let i = 30; i > 0; i--) {
  console.log(i)
  let object = pAequorFactory(i, mockUpStrand());
  while (object.willLikelySurvive() === false) {
    object = pAequorFactory(i, mockUpStrand())
  }
  if (object.willLikelySurvive() === true) {
    pAequorInstances.push(object);
  }
}





//Tests
let object1 = pAequorFactory(1, mockUpStrand())
console.log(object1)
object1.mutate();
console.log(object1)

let object2 = pAequorFactory(2, mockUpStrand())
console.log(object2)
object1.mutate();
console.log(object2)

object1.compareDNA(object2);
console.log(object1.willLikelySurvive())