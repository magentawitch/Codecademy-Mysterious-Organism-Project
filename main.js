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
