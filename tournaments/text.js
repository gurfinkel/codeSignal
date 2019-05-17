const assert = require('assert');

/* Phase 1:
 *  create a simple pub / sub bus with the following 3 functions:
 *   - subscribe (string, function)
 *   - unsubscribe (string, function)
 *   - publish (string, any)
 */
/*function createBus() {
  return {
    store: new Map(),
    subscribe: function(text, callback) {
      if (this.store.has(text)) {
        this.store.get(text).push(callback);
      } else {
        this.store.set(text, [callback]);
      }
    },
    publish: function(text, value) {
      if (this.store.has(text)) {
        this.store.get(text).forEach(a => a(value));
      }
    },
    unsubscribe: function(text, callback) {
      if (this.store.has(text)) {
        const arr = this.store.get(text);
        const index = arr.indexOf(callback);
        if (0 <= index) {
          this.store.set(text, [...arr.slice(0, index), ...arr.slice(index + 1)]);
        }
      }
    },
  }
}*/

// testing, do not edit
//----------------------------------------------------------------------------------
/*const bus = createBus();
const topicPhase1 = 'myTopic';

let lastCallValueA = '';
let lastCallValueB = '';

function setValueA(v) {
  lastCallValueA = v;
}

function setValueB(v) {
  lastCallValueB = v;
}

bus.subscribe(topicPhase1, setValueA);
bus.publish(topicPhase1, 'A');
assert.equal(lastCallValueA, 'A', '1) Publish should have updated lastCallValueA');

bus.subscribe(topicPhase1, setValueB);
bus.publish(topicPhase1, 'B');
assert.equal(lastCallValueA, 'B', '2) Publish should have updated lastCallValueA');
assert.equal(lastCallValueB, 'B', '3) Publish should have updated lastCallValueB');

bus.unsubscribe(topicPhase1, setValueA);
bus.publish(topicPhase1, 'C');
assert.equal(lastCallValueA, 'B', '4) Publish should not have updated lastCallValueA');
assert.equal(lastCallValueB, 'C', '5) Publish should have updated lastCallValueB');
console.log('Phase 1 complete');*/
//----------------------------------------------------------------------------------


// Phase 2:
// Modify the following code to satisfy the assertions
/*function MessageReceiver() {
    this.currentMessage = null;
}

MessageReceiver.prototype.receive = function(message){
    this.currentMessage = message;
};
// you may decorate these instances
var firstReceiver = new MessageReceiver();
var secondReceiver = new MessageReceiver();

firstReceiver.receive = firstReceiver.receive.bind(firstReceiver);
secondReceiver.receive = secondReceiver.receive.bind(secondReceiver);*/


// testing section, do not edit
//----------------------------------------------------------------------------------

/*const topicPhase2 = 'foo';
bus.subscribe(topicPhase2, firstReceiver.receive);
bus.subscribe(topicPhase2, secondReceiver.receive);
bus.publish(topicPhase2, 'msg1');
assert.equal(firstReceiver.currentMessage, 'msg1', '6) Should have updated first');
assert.equal(secondReceiver.currentMessage, 'msg1', '7) Should have updated second');
bus.publish(topicPhase2, 'msg2');
assert.equal(firstReceiver.currentMessage, 'msg2', '8) Should have updated first');
assert.equal(secondReceiver.currentMessage, 'msg2', '9) Should have updated second');
bus.unsubscribe(topicPhase2, firstReceiver.receive);
bus.publish(topicPhase2, 'msg3');
assert.equal(firstReceiver.currentMessage, 'msg2', '10) Should have unsubscribed');
assert.equal(secondReceiver.currentMessage, 'msg3', '11) Should have updated second');
console.log('Phase 2 complete');*/

//----------------------------------------------------------------------------------

// // analyse following function and find corresponding name for "secretFunction":
// function secretFunction(arrayA: Array, arrayB: Array, index: Int): Array {
//   return arrayB.length != 0 ? arrayA.slice(0, index).concat(arrayB).concat(arrayA.slice(index + 1)) : arrayA;
// }
// // mergeArray

// var arrayA = ["a", "b", "c", "d"];
// var arrayB = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var index = 2;

// var result = ['a', 'b', "Banana", "Orange", "Lemon", "Apple", "Mango", "d"]


// 1) Create two classes [1] MyDate (day, month, year) and [2] MyPoint (x, y)

// 2) Create a "main" function and within it construct two variables "d"
//    (MyDate with 31, 12, 2016) and "p" (MyPoint with 5.5, 10)

// 3) Add a method called "printConstructor" to both MyDate and MyPoint
//    that dumps the constructors for both d and p into the console.
//
//    The expected output in console should be the following strings:
//       "new MyDate(31, 12, 2016)"
//       "new MyPoint(5.5, 10)"

// 4) Refactor the above code to use the visitor pattern to print both
//    constructors. See the following links:
//       https://dzone.com/articles/design-patterns-visitor


// create PrintConstructVisitor
/*class PrintConstructVisitor {
  constructor(printMethod) {
    this.printMethod = printMethod;
  }

  visit = (element) => {
    if (element instanceof MyDate) {
      printMethod(`new MyDate(${element.day}, ${element.month}, ${element.year})`);
    } else if (element instanceof MyPoint) {
      printMethod('new MyPoint(' + element.x + ', ' + element.y + ')');
    }
  }
}

class MyDate {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  printConstructor = () => {
    console.log(`new MyDate(${this.day}, ${this.month}, ${this.year})`);
  };

  accept = (visitor) => {
    visitor.visit(this);
  }
}

class MyPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  printConstructor = () => {
    console.log('new MyPoint(' + this.x + ', ' + this.y + ')');
  };

  accept = (visitor) => {
    visitor.visit(this);
  }
}

function main() {
  let d = new MyDate(31, 12, 2016);
  let p = new MyPoint(5.5, 12);

  const visitors = [d, p];
  const printConstructVisitor = new PrintConstructVisitor(console.log);

  visitors.forEach(item => item.accept(printConstructVisitor));
}

main();*/

function howManyAgentsToAdd(noOfCurrentAgents, callsTimes) {
  const n = callsTimes.length;
  const callsStartTimes = new Array(n);
  const callsEndTimes = new Array(n);

  for (let index = 0; n > index; ++index) {
    callsStartTimes[index] = callsTimes[index][0];
    callsEndTimes[index] = callsTimes[index][1];
  }

  callsStartTimes.sort((a, b) => a - b);
  callsEndTimes.sort((a, b) => a - b);

  let result = 0;
  let currentCallsCount = 0;
  let i = 0;
  let j = 0;

  while (callsStartTimes.length > i && callsEndTimes.length > j) {
    if (callsStartTimes[i] < callsEndTimes[j]) {
      ++currentCallsCount;
      ++i;
      if (noOfCurrentAgents < currentCallsCount) {
        result = Math.max(result, currentCallsCount - noOfCurrentAgents);
      }
    } else {
      --currentCallsCount;
      ++j;
    }
  }

  return result;
}

function howManyAgentsToAddTest() {
  const numberOfCustomerServiceExecutives = 1;
  const timeStamps = [
    [1481122000, 1481122020],
    [1481122000, 1481122040],
    [1481122030, 1481122035],
  ];

  assert.equal(howManyAgentsToAdd(numberOfCustomerServiceExecutives, timeStamps), 1, '1) Should be 1');
}

howManyAgentsToAddTest();

class TrieNode {
  constructor() {
    this.arr = new Array(26);
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let p = this.root;
    for (const letter of word) {
      const index = letter.charCodeAt() - 'a'.charCodeAt();
      if (p.arr[index]) {
        p = p.arr[index];
      } else {
        const temp = new TrieNode();
        p.arr[index] = temp;
        p = temp;
      }
    }
    p.isEnd = true;
  };

  search(word) {
    const p = this.searchNode(word);
    if (p === null) {
      return false;
    }

    return p.isEnd;
  };

  searchNode(s) {
    let p = this.root;
    for (const letter of s) {
      const index = letter.charCodeAt() - 'a'.charCodeAt();
      if (p.arr[index]) {
        p = p.arr[index];
      } else {
        return null;
      }
    }

    if (p === this.root) {
      return null;
    }

    return p;
  }
}

function sortHotelList(keywords, hotelIds, reviews) {
  let result = [];

  if (!keywords || !reviews.length) {
    return result;
  }

  const arrKeys = keywords.split(' ');

  if (!arrKeys.length) {
    return result;
  }

  const trie = new Trie();

  for (const arrKey of arrKeys) {
    trie.insert(arrKey);
  }

  const dict = new Map();

  for (let i = 0; reviews.length > i; ++i) {
    const arrReviews = reviews[i].toLowerCase().split(' ');
    const count = arrReviews.reduce((total, item) => total + trie.search(item), 0);

    if (!dict.has(hotelIds[i])) {
      dict.set(hotelIds[i], count);
    } else {
      dict.set(hotelIds[i], dict.get(hotelIds[i]) + count);
    }
  }

  if (0 < dict.size) {
    result = [...dict.entries()].sort((a, b) => b[1] - a[1]).map(item => item[0]);
  }

  return result;
}

function sortHotelListTest() {
  const keywords = 'breakfast beach citycenter location metro view staff price';
  const hotelIds = [1, 2, 1, 1, 2];
  const reviews = [
    'This hotel has a nice view of the citycenter. The location is perfect.',
    'The breakfast is ok. Regarding location, it is quite far from citycenter but price is cheap so it is worth.',
    'Location is excellent, 5 minutes from citycenter. There is also a metro station very close to the hotel.',
    "They said I couldn't take my dog and there were other guests with dogs! That is not fair.",
    'Very friendly staff and good cost-benefit ration. Its location is a bit far from citycenter.'
  ];

  assert.deepEqual(sortHotelList(keywords, hotelIds, reviews), [2, 1], '1) Should be [2, 1]');
}

sortHotelListTest();

getResult = function(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  const n = arr.length;
  const result = [arr[0]];
  const token = -128;

  for (let i = 1; n > i; ++i) {
    let temp = arr[i] - arr[i - 1];
    if (-127 > temp || 127 < temp) {
      result.push(token);
    }

    result.push(temp);
  }

  return result;
};

triangle = function(a, b, c) {
  if (0 >= a || 0 >= b || 0 >= c ) {
    return 0;
  }
  if (a === b && b === c) {
    return 1;
  } else if ((a + b) > c && (a + c) > b && (b + c) > a) {
    return 2;
  } else {
    return 0;
  }
};


const getDistance = function(numRows, numCols, area) {
  const getNeighbors = function(i, j) {
    const r = [];
    for (const [dRow, dCol] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      if ((i + dRow) in area && (j + dCol) in area[0] && area[(i + dRow)][(j + dCol)]) {
        r.push([(i + dRow), (j + dCol)]);
        if (1 === area[(i + dRow)][(j + dCol)])
          area[(i + dRow)][(j + dCol)] = 0;
      }
    }
    return r;
  };

  area[0][0] = 0;
  const distances = [];

  const dfs = function(i = 0, j = 0, distance = 0) {
    const neighbors = getNeighbors(i, j);
    if (!neighbors.length) return;
    ++distance;

    for (const [x,y] of neighbors) {
      if (9 === area[x][y]) {
        distances.push(distance);
        return;
      } else {
        dfs(x, y, distance);
      }
    }
  };

  dfs();

  return !distances.length ? -1 : Math.min(...distances);
};

/*function getHexFromDec(inputDec) {
    const result = [];
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let decValue = parseInt(inputDec);

    while (0 < decValue) {
        const mod = decValue % 16;
        result.unshift(hexDigits[mod]);
        decValue -= mod;
        decValue /= 16;
    }

    return result.join('');
}

const test = require('assert');

test.equal(getHexFromDec('16'), '10', '1) 16 == 10')
test.equal(getHexFromDec('255'), 'FF', '1) 255 == FF');*/

function getHotelsWithMinimumAverageReviewScore(min_score) {
  const hotels = getHotels();
  const reviews = getAllHotelReviews();
  const result = [];
  const store = new Map();
  const hotelsMap = new Map();

  for (const {score, hotel_id} of reviews) {
    if (store.has(hotel_id)) {
      store.set(hotel_id, store.get(hotel_id).push(score));
    } else {
      store.set(hotel_id, [score]);
    }
  }

  for (const {hotel_id, name} of hotels) {
    hotelsMap.set(hotel_id, name);
  }

  for (const item of store) {
    const avr_score = item.value.reduce((total, a) => total+=a, 0)/item.value.length;
    if (min_score < avr_score) {
      const name = hotelsMap.get(item.key);
      result.push({hotel_id: item.key, name: name, avg_score: avg_score});
    }
  }

  return result;
}
