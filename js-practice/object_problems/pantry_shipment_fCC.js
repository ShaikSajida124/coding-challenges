const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const sku_set = new Set();
  const result = [];
  for (let i = 0; i < rawData.length; i++) {
    const current_item = rawData[i].split("|");
    const current_object = {};
    if (sku_set.has(current_item[0])) {
      continue;
    }
    sku_set.add(current_item[0]);
    current_object["sku"] = current_item[0];
    current_object["name"] = current_item[1];
    current_object["qty"] = Number(current_item[2]);
    current_object["expires"] = current_item[3];
    current_object["zone"] = current_item[4] || "general";
    result.push(current_object);
  }
  return result;
}

function planRestock(pantry, shipment) {
  const skus_set = new Set();
  for (const obj of pantry) {
    skus_set.add(obj.sku);
  }
  const result = [];
  for (let i = 0; i < shipment.length; i++) {
    const current_object = {};
    const quantity = shipment[i].qty;
    const sku = shipment[i].sku;
    if (quantity <= 0) {
      current_object["type"] = "discard";
    } else if (skus_set.has(sku)) {
      current_object["type"] = "restock";
    } else {
      current_object["type"] = "donate";
    }
    current_object["item"] = shipment[i];
    result.push(current_object);
  }
  return result;
}

function groupByZone(actions) {
  const result = {};
  for (let i = 0; i < actions.length; i++) {
    const current_zone = actions[i]["item"]["zone"];
    if (!result.hasOwnProperty(current_zone)) {
      result[current_zone] = [];
    }
    result[current_zone].push(actions[i]);
  }
  return result;
}

function clonePantry(pantry) {
  const deepCopy = structuredClone(pantry);
  return deepCopy;
}
//Driver Code
function runSuite() {
  const testPantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
  ];

  const testRawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge"
  ];

  // 1. Test parseShipment
  const shipment = parseShipment(testRawData);
  console.assert(shipment.length === 5, "parseShipment failed: Duplicate SKU not skipped");
  console.assert(shipment[0].sku === "A10" && shipment[0].qty === 5, "parseShipment failed: Incorrect properties mapped");
  console.assert(shipment[0].zone === "general", "parseShipment failed: Fallback zone failed");
  console.assert(shipment[2].zone === "fridge", "parseShipment failed: Explicit zone failed");

  // 2. Test clonePantry
  const clone = clonePantry(shipment);
  console.assert(clone !== shipment, "clonePantry failed: Array reference is the same");
  console.assert(clone[0] !== shipment[0], "clonePantry failed: Object reference is shared (Shallow copy)");
  clone[0].qty = 99;
  console.assert(shipment[0].qty === 5, "clonePantry failed: Mutating clone affected original");

  // 3. Test planRestock
  const actions = planRestock(testPantry, shipment);
  console.assert(actions.length === 5, "planRestock failed: Action count mismatch");
  console.assert(actions[0].type === "restock", "planRestock failed: Expected restock for existing positive quantity SKU");
  console.assert(actions[1].type === "donate", "planRestock failed: Expected donate for new positive quantity SKU");
  console.assert(actions[3].type === "discard", "planRestock failed: Expected discard for zero quantity");
  console.assert(actions[4].type === "discard", "planRestock failed: Expected discard for negative quantity");

  // 4. Test groupByZone
  const grouped = groupByZone(actions);
  console.assert(grouped.general !== undefined && grouped.fridge !== undefined, "groupByZone failed: Missing group keys");
  console.assert(grouped.general.length === 3, "groupByZone failed: Wrong item count in general zone");
  console.assert(grouped.fridge.length === 2, "groupByZone failed: Wrong item count in fridge zone");

  console.log("Test execution finished.");
}

runSuite();
