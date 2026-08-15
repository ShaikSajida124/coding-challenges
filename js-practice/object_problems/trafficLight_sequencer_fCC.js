//TRAFFIC LIGHT SEQUENCER - fCC
const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  } 
  if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }
  for (let i = 1; i <= cycles; i++) {
    for (const obj of config.phases) {
      if (obj.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${obj.color} for ${obj.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeStamps = [];
  let total = 0;
  for (let i = 1; i <= cycles; i++) {
    for (const obj of config.phases) {
      total += obj.duration;
      timeStamps.push(total);
    }
  }
  return timeStamps;
}
