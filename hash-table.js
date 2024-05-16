const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity)
    if (this.capacity) {
      this.data.fill(null)
    }
  }

  hash(key) {
    // return the first eight characters of the sha256 hash
        let hashStr = sha256(key).substring(0,8)
        let int = parseInt(hashStr, 16)
        return int
      }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here 
  }

  insertWithHashCollisions(key, value) {
    // Your code here 
  }

  insert(key, value) {
    // Your code here 
  }

}


let hashTable = new HashTable(4)
console.log(hashTable.hash("ABC"))

module.exports = HashTable;
