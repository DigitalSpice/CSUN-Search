const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
var txt = "";

  // we start with the TrieNode
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
	  word = word.toUpperCase();
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
	  word = word.toUpperCase();
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
		prefix = prefix.toUpperCase();
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
		word = word.toUpperCase();
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

//Adding things to the Trie from the variable majors and classes array in info.js
const trie = new Trie();
for (let i = 0; i < majors.length; i++) {
	trie.insert(majors[i]);
  }
const trie2 = new Trie();
for (let i = 0; i < classes.length; i++) {
	trie2.insert(classes[i]);
   }

//Function for user input, searches by mouse click to the search icon   
inputBox.addEventListener('keyup', (e) => {
	let userInput = e.target.value;
	let filteredArray = [];
	if(userInput){
		filteredArray = trie.find(userInput);

		filteredArray = filteredArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
		});

	searchWrapper.classList.add("active"); //show autocomplete box

	showSuggestions(filteredArray);
	let allList = suggBox.querySelectorAll("li");
	for (let i = 0; i < allList.length; i++) {
		//adding onclick attribute in all li tag
		allList[i].setAttribute("onclick", "select(this)");
	}
	}else{
	searchWrapper.classList.remove("active"); //hide autocomplete box
	}
});

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
	txt = '<h1>' + inputBox.value;
	console.log(txt);
    icon.onclick = ()=>{
		Results();
    }
    searchWrapper.classList.remove("active");
}

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function Results(){
	document.getElementById("results").innerHTML = trie2.find(txt);
	document.getElementById("results").scrollIntoView({ behavior: 'smooth'});
	
}
