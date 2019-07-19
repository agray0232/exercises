var lodash = require('lodash');

var nums = [1, 2, 3, 4];

console.log("Nums original: " + nums);
nums = lodash.shuffle(nums);
console.log("Nums shuffled: " + nums);

console.log("Nums sum: " + lodash.sum(nums));
console.log("Nums max: " + lodash.max(nums));
console.log("Nums mean: " + lodash.mean(nums));

function timer() {
    console.log(lodash.now());
}

var TimerAfter = lodash.after(10, timer);

var runTimerAfter = lodash.throttle(TimerAfter, 1000);

while (true) {
    runTimerAfter();
}

