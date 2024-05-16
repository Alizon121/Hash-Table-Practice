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
    // We need to insert key-value pairs in data array

    let node = new KeyValuePair(key,value)

    let indexKey = this.hashMod(key)
    let indexVal = this.hashMod(value)

    if (this.data[indexKey] === null) {
      this.data[indexKey] = ({key, value})
      this.count++
    } else {
      throw new Error('hash collision or same key/value pair already exists!')
    }


    // this.data[indexVal] = value

    console.log(this.data)



  }

  insertWithHashCollisions(key, value) {
    // Your code here 
  }

  insert(key, value) {
    // If hash collision occurs, throw new Error
    // throw new Error ()
  }

}


let hashTable = new HashTable(2)
console.log(hashTable.insertNoCollisions("key-1", "val-1"))
console.log(hashTable.data)
console.log(hashTable.insertNoCollisions("key-2", "val-2"))

module.exports = HashTable;
