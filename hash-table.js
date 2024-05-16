const sha256 = require('js-sha256');


// This class is used to make a linked list.
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
    let indexKey = this.hashMod(key)

    if (this.data[indexKey] === null) {
      this.data[indexKey] = ({key, value})
      this.count++
    } else {
      throw new Error('hash collision or same key/value pair already exists!')
    }

  }

  insertWithHashCollisions(key, value) {

    let node = new KeyValuePair(key, value)
    let hash = this.hashMod(key)

    if (this.data[hash] === null) {
      // if the slot in the array is empty, then add a node.
      this.data[hash] = node
    } 
    // We need to find a way to represent a collision
    
    else {
    // we need to make a linked list
    // The head is the node at the hashed index.
    // Add a new node to the head'

    // Make the next node the current head
    node.next = this.data[hash]

    // make the head node the incoming node
    this.data[hash] = node

  }
  this.count++;
  }



  // insert(key, value) {
  //   // let node = new KeyValuePair(key, value)
  //   // Update values for same KEY inserts
  //   // We need to iterate over a linked list and see if there are matches

  //   // if (hashTable.insertWithHashCollisions(key,value)) {
  //   //   this.data[hash] = node
  //   // }

  // }
}






  




let hashTable = new HashTable(2)
console.log(hashTable.insert("key-1", "val-1"))
console.log(hashTable.insert("key-2", "val-2"));
console.log(hashTable.insert("key-3", "val-3"));
console.log(hashTable.insert("key-1", "val-100000"));
console.log(hashTable)
// console.log(hashTable.insertWithHashCollisions("key4", "val4"))
module.exports = HashTable;
