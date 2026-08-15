const cargoContainer = {
  containerId : 1,
  destination : "delhi",
  weight: 865,
  unit : "lb",
  hazmat: false
}
//normalizeUnits
function normalizeUnits(manifest) {
  const newObject = {...manifest};
  if (newObject.unit === "lb") {
    const newWeight = newObject.weight * 0.45;
    newObject.weight = newWeight;
    newObject.unit = "kg";
  }
  return newObject;
}

//validateManifest
function validateManifest(manifest) {
  const errors = {};
  //1 containerId validation 
  if (manifest.hasOwnProperty("containerId")) {
    if ((manifest.containerId <= 0) || (!Number.isInteger(manifest.containerId))) {
      errors.containerId = "Invalid";
    }
  } else {
    errors.containerId = "Missing";
  }
  //==========================
  //2 destination validation 
  if (manifest.hasOwnProperty("destination")) {
    if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
      errors.destination = "Invalid";
    }
  } else {
    errors.destination = "Missing";
  }
  //==========================
  //3 weight validation 
  if (manifest.hasOwnProperty("weight")) {
    if (!Number.isInteger(manifest.weight) || manifest.weight <= 0) {
      errors.weight = "Invalid";
    }
  } else {
    errors.weight = "Missing";
  }
  //===========================
  //4 unit validation 
  if (manifest.hasOwnProperty("unit")) {
    if (typeof manifest.unit !== "string" || (manifest.unit !== "lb" && manifest.unit !== "kg")) {
      errors.unit = "Invalid";
    }
  } else {
    errors.unit = "Missing";
  }
  //===========================
  //5 'hazmat' validation 
  if (manifest.hasOwnProperty("hazmat")) {
    if (typeof manifest.hazmat !== "boolean") {
      errors.hazmat = "Invalid";
    }
  } else {
    errors.hazmat = "Missing";
  }

  //OUTPUT 
  return errors;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);
  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}
