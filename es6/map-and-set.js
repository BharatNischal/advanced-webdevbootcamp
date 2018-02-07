

//Similar to Object but keys can be any data types, not only string
var firstMap = new Map();

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.set([1,2,3], 'an array');
firstMap.set({a:1, b:2, c:3}, 'an obj');

console.log(firstMap);
console.log(firstMap.size);
console.log(firstMap.get(false));

console.log(firstMap.values());
console.log(firstMap.keys());

// WEAK MAP are like Map but all the keys MUST be objects

//When you don't need duplicates....use Set
const s = new Set([1,2,3,4,5,4,3,2,1]);
console.log(s);
console.log(s.size);
console.log(s.add(7));
console.log(s.has(3));
console.log(s.delete(4));
console.log(s);
//it is possible to loop a Set with the for of loop
for (const item of s) {
    console.log(item);
}

