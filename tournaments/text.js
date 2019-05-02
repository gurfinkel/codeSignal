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
