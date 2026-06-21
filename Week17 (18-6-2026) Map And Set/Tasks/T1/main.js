let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

let iterartor = setOfNumbers.keys();
iterartor.next();
iterartor.next();
console.log(iterartor.next().value);
