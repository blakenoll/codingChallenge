//space complexity n-2 because you need a begining 1 and an ending 1
// time coplexity is O(n) because you are bubbeling through enitre binary representation

function zeros_count(num) {
  let zeros = 0;
  let tempZeros = 0;
  let leading1 = false;
  try {
    // check if num is a Int
    if (num != Math.floor(num)) {
      throw "Needs to be a number";
    }
    // check if num is negative
    if (num < 0) {
      throw "Needs to be a postive number";
    }
    let binary = parseInt(num, 10).toString(2);
    console.log(binary);
    for (let i = 0; i < binary.length; i++) {
      // if leading 1 set flag to true
      if (binary.charAt(i) === "1") {
        leading1 = true;
      }
      // if a zero is encountered with a leading one add to temp count
      if (leading1 === true && binary.charAt(i) === "0") {
        tempZeros++;
      }
      // if a closing 1 is encountered compare temp count to count and if temp count is larger set count as temp count
      if (leading1 === true && binary.charAt(i) === "1") {
        if (tempZeros > zeros) {
          zeros = tempZeros;
          tempZeros = 0;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  console.log(zeros);
}

zeros_count(9);
zeros_count(529);
zeros_count(20);
zeros_count(8);
zeros_count(1041);
