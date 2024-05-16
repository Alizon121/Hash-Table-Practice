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
    let arr = [];
    let result = [];
    for (let i = 0; i < key.length; i++) {
        let hashStr = sha256(key[i])
        // return the first eight characters of the sha256 hash
      arr.push(hashStr.substring(0,8))
      }

    for (let i = 0; i < arr.length; i++) {
      result.push(parseInt(arr[i], 16))
    }

    let string = result.join()
    console.log(Number(string))
    // let string = result.join
    // let num = Number(string)
    // return num

    }



  hashMod(key) {
    // Your code here 
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
