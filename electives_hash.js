
class HashTable {
    constructor(max = 1000) {
        // maximum number of buckets in the hash table
        this.max = max;
        // current number of buckets filled in the hash table
        this.size = 0
        // initialize the buckets
        this.buckets = new Array(max);
    }

    hashFunction = (key) => {
        let hash = 0;
        // take any key that can be converted to a string (ie: string, number, object)
        let string = key.toString();
        // no empty keys
        if (string.length === 0) throw "invalid key";
        for (let i = 0; i < string.length; i++) {
            // left bitwise shift
            hash = (hash << 5) - hash;
            // add value of character code
            hash += string.charCodeAt(i);
            // ensures 32 bit unsigned integer
            hash = hash & hash;
        }
        // don't want negative numbers, modulus to make sure we are within the bounds of our max size
        return Math.abs(hash % this.max);
    };

    // given a key, return the index after hashing
    getIndex = (key) => {
        return this.hashFunction(key);
    };

    // given a key, return the bucket
    getBucket = (key) => {
        return this.buckets[this.getIndex(key)];
    };

    // assign a key value pair, will also overwrite if key is already in table
    set = (key, value) => {
        const index = this.getIndex(key);
        
        // if the bucket doesn't have anything in it, assign it to an empty array
        if (!this.getBucket(key)) this.buckets[index] = [];

        // now that we know there is something there, get the bucket
        let bucket = this.getBucket(key);

        // to determine if the key was already in the table
        let overwritten = false;

        for (let i = 0; i < bucket.length; i++) {
            // nodes in hash table are stored as tuples, an array containing 2 items
            // [k, v]
            let node = bucket[i];
            // overwrite the value of the key if it exists
            if (node[0] === key) {
                node[1] = value;
                overwritten = true;
            }
        }
        
        // if it wasn't in the table, add it
        if (!overwritten) {
            bucket.push([key, value]);
            this.size++;
        }

        // if it now exceeds max size, we need to resize our hash table to twice the size
        // this keeps the load factor in a good range for time and space complexity trade off
        if (this.size / this.max >= 0.75) {
            this.resize(this.max * 2);
        }

        return value;
    };

    // lookup
    get = (key) => {
        const bucket = this.getBucket(key);
        // if there is no bucket return undefined
        if (!bucket) return;

        // search through the bucket and return the value of the corresponding key
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) return bucket[i][1];
        }
    };


    remove = (key) => {
        // return undefined if bucket doesn't exist
        if (!this.getBucket(key)) return;

        let bucket = this.getBucket(key);
        //search through the bucket
        for (let i = 0; i < bucket.length; i++) {
            let node = bucket[i];
            // until we find the node with the correct key
            if (node[0] === key) {
                // remove the node
                bucket.splice(i, 1);
                // if that was the only element, reassign it to undefined 
                if (bucket.length < 1) bucket = undefined;
                this.size--;

                // resize if the load factor is too low
                if (this.size / this.max <= .25) this.resize(Math.ceil(this.max / 2));

                // return removed element value
                return node[1];
            }

        }
    }

    // this is necessary to keep our hashing algorithm efficient
    resize = (newMax) => {
        // store current buckets
        const tempBuckets = this.buckets;
        this.max = newMax;
        // reset size to 0
        this.size = 0;
        // empty buckets
        this.buckets = new Array(newMax);

        // work through old buckets
        tempBuckets.forEach((bucket) => {
            // add values back into table
            if (!!bucket) {
                bucket.forEach(node => {
                    // need to rehash the keys because hashing algo is based on size
                    this.set(node[0], node[1]);
                })
            }
        });
    };
}

var count = 0;
var total = 0;
const ht = new HashTable();
//Hashtable
console.log('Hashtable Performance Start...');
while (count < 10){
var h0 = performance.now();
 for (let i = 0; i < majors.length; i++) {
	if(majors[i] === 'Computer Science'){
		ht.set(majors[i], classes[0]);
	}
	if(majors[i] == 'Psychology'){
		ht.set(majors[i], classes[1]);
	}
	if(majors[i] == 'Electrical Engineer'){
		ht.set(majors[i], classes[2]);
	}
	if(majors[i] == 'Mathematics'){
		ht.set(majors[i], classes[3]);
	}
	if(majors[i] == 'Computer Engineering'){
		ht.set(majors[i], classes[4]);
	}
	if(majors[i] == 'Civil Engineering'){
		ht.set(majors[i], classes[5]);
	}
	if(majors[i] == 'Biochemistry'){
		ht.set(majors[i], classes[6]);
	}
	else{
	 	ht.set(majors[i], 'Sorry No Info');
    }
}
var h1 = performance.now();
total = total + (h1-h0);
count++
}

var avg = total/10;
console.log("Hashtable set function took avg of " + avg + " ms");

count = 0;
total =0;
avg = 0;
while (count < 10){
var h2 = performance.now();
for (let i = 0; i < majors.length; i++){
	ht.get(majors[i]);
}
var h3 = performance.now();
total = total + (h3-h2);
count++;
}
avg = total / 10;
console.log("Hashtable get function took avg of " + avg + " ms");

count = 0;
total =0;
avg = 0;
while (count < 10){
var h4 = performance.now();
for (let i = 0; i < majors.length; i++){
	ht.remove(majors[i]);
}
var h5 = performance.now()
total = total + (h5-h4);
count++;
}

avg = total / 10;
console.log("Hashtable remove function took avg of " + avg + " ms");



//Trie
const TrieNode = function (key) {
	// the "key" value will be the character in sequence
	this.key = key;
	
	// we keep a reference to parent
	this.parent = null;
	
	// we have hash of children
	this.children = {};
	
	// check to see if the node is at the end
	this.end = false;
	
	this.getWord = function() {
	  let output = [];
	  let node = this;
  
	  while (node !== null) {
		output.unshift(node.key);
		node = node.parent;
	  }
  
	  return output.join('');
	};
  }
  
  const Trie = function() {
	this.root = new TrieNode(null);
	
	// inserts a word into the trie.
	 this.insert = function(word) {
	  let node = this.root; // we start at the root
	  word = word.toLowerCase();
	  // for every character in the word
	  for(let i = 0; i < word.length; i++) {
		// check to see if character node exists in children.
		if (!node.children[word[i]]) {
		  // if it doesn't exist, we then create it.
		  node.children[word[i]] = new TrieNode(word[i]);
  
		  // we also assign the parent to the child node.
		  node.children[word[i]].parent = node;
		}
  
		// proceed to the next depth in the trie.
		node = node.children[word[i]];
  
		// finally, we check to see if it's the last word.
		if (i == word.length-1) {
		  // if it is, we set the end flag to true.
		  node.end = true;
		}
	  }
	};
	
	// check if it contains a whole word.
	this.contains = function(word) {
	  let node = this.root;
	  word = word.toLowerCase();
	  // for every character in the word
	  for(let i = 0; i < word.length; i++) {
		// check to see if character node exists in children.
		if (node.children[word[i]]) {
		  // if it exists, proceed to the next depth of the trie.
		  node = node.children[word[i]];
		} else {
		  // doesn't exist, return false since it's not a valid word.
		  return false;
		}
	  }
  
	  // we finished going through all the words, but is it a whole word?
	  return node.end;
	};
	
	// returns every word with given prefix
	this.find = function(prefix) {
	  let node = this.root;
	  let output = [];
	  // for every character in the prefix
	  for(let i = 0; i < prefix.length; i++) {
		prefix = prefix.toLowerCase();
		// make sure prefix actually has words
		if (node.children[prefix[i]]) {
		  node = node.children[prefix[i]];
		} else {
		  // there's none. just return it.
		  return output;
		}
	  }
  
	  // recursively find all words in the node
	  findAllWords(node, output);
  
	  return output;
	};
	
	// recursive function to find all words in the given node.
	const findAllWords = (node, arr) => {
	  // base case, if node is at a word, push to output
	  if (node.end) {
		arr.unshift(node.getWord());
	  }
  
	  // iterate through each children, call recursive findAllWords
	  for (let child in node.children) {
		findAllWords(node.children[child], arr);
	  }
	}
  
	// removes a word from the trie.
	this.remove = function (word) {
		let root = this.root;
		word = word.toLowerCase();
		if(!word) return;
  
		// recursively finds and removes a word
		const removeWord = (node, word) => {
  
			// check if current node contains the word
			if (node.end && node.getWord() === word) {
  
				// check and see if node has children
				let hasChildren = Object.keys(node.children).length > 0;
  
				// if has children we only want to un-flag the end node that marks the end of a word.
				// this way we do not remove words that contain/include supplied word
				if (hasChildren) {
					node.end = false;
				} else {
					// remove word by getting parent and setting children to empty dictionary
					node.parent.children = {};
				}
  
				return true;
			}
  
			// recursively remove word from all children
			for (let key in node.children) {
				removeWord(node.children[key], word)
			}
  
			return false
		};
  
		// call remove word on root node
		removeWord(root, word);
	};
  }

count = 0;
total = 0;
avg = 0;
const trie = new Trie();
const trie2 = new Trie();
console.log('Trie Performance Start...');

while(count < 10){
	var t0 = performance.now();
	for (let i = 0; i < majors.length; i++) {
		trie.insert(majors[i]);
	}
	for (let i = 0; i < classes.length; i++) {
		trie2.insert(classes[i]);
	}
	var t1 = performance.now();
	total = total + (t1 -t0);
	count++;
}
avg = total / 10;
console.log("Trie insert function took avg of " + avg + " ms");

count = 0;
total= 0;
avg = 0; 
while(count < 10){
	var t2 = performance.now();
	for (let i = 0; i < majors.length; i++) {
		trie.find(majors[i]);
	}
	for (let i = 0; i < classes.length; i++) {
		trie2.find(classes[i]);
	}
	var t3 = performance.now();
	total = total + (t3-t2);
	count++;
}
avg = total / 10;
console.log("Trie find function took avg of " + avg + " ms");

count = 0;
total= 0;
avg = 0; 
while(count < 10){
	var t4 = performance.now();
	for (let i = 0; i < majors.length; i++) {
		trie.remove(majors[i]);
	}
	for (let i = 0; i < classes.length; i++) {
		trie2.remove(classes[i]);
	}
	var t5 = performance.now();
	total = total + (t5-t4);
	count++;
}
avg = total / 10;
console.log("Trie remove function took avg of " + avg + " ms");
