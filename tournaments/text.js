const assert = require('assert');

/* Phase 1:
 *  create a simple pub / sub bus with the following 3 functions:
 *   - subscribe (string, function)
 *   - unsubscribe (string, function)
 *   - publish (string, any)
 */
function createBus() {
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
}

// testing, do not edit
//----------------------------------------------------------------------------------
const bus = createBus();
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
console.log('Phase 1 complete');
//----------------------------------------------------------------------------------


// Phase 2:
// Modify the following code to satisfy the assertions
function MessageReceiver() {
    this.currentMessage = null;
}

MessageReceiver.prototype.receive = function(message){
    this.currentMessage = message;
};
// you may decorate these instances
var firstReceiver = new MessageReceiver();
var secondReceiver = new MessageReceiver();

firstReceiver.receive = firstReceiver.receive.bind(firstReceiver);
secondReceiver.receive = secondReceiver.receive.bind(secondReceiver);


// testing section, do not edit
//----------------------------------------------------------------------------------

const topicPhase2 = 'foo';
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
console.log('Phase 2 complete');

//----------------------------------------------------------------------------------

const assert = require('assert');

/* Phase 1:
 *  create a simple pub / sub bus with the following 3 functions:
 *   - subscribe (string, function)
 *   - unsubscribe (string, function)
 *   - publish (string, any)
 */
function createBus() {
  /* ... */
}

// testing, do not edit
//----------------------------------------------------------------------------------
const bus = createBus();
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

// bus.unsubscribe(topicPhase1, setValueA);
// bus.publish(topicPhase1, 'C');
// assert.equal(lastCallValueA, 'B', '4) Publish should not have updated lastCallValueA');
// assert.equal(lastCallValueB, 'C', '5) Publish should have updated lastCallValueB');
// console.log('Phase 1 complete');
//----------------------------------------------------------------------------------


/* Phase 2:
Modify the following code to satisfy the assertions
function MessageReceiver() {
    this.currentMessage = null;
}
MessageReceiver.prototype.receive = function(message){
    this.currentMessage = message;
};
// you may decorate these instances
var firstReceiver = new MessageReceiver();
var secondReceiver = new MessageReceiver();
*/


// testing section, do not edit
//----------------------------------------------------------------------------------
/*
const topicPhase2 = 'foo';
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
console.log('Phase 2 complete');
*/
//----------------------------------------------------------------------------------