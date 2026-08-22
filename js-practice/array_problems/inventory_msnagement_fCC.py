const inventory =[];
function findProductIndex(product_name) {
  for (let i = 0; i < inventory.length; i++) {
    if (product_name.toLowerCase() === inventory[i].name) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const has_product = findProductIndex(name);
  if (has_product >= 0) {
    inventory[has_product].quantity += quantity;
    console.log(`${name} quantity updated`)
    return;
  }
  inventory.push(
    {name:name,
    quantity:quantity}
  );
  console.log(`${name} added to inventory`);
}

function removeProduct(name, quantity) {
  const has_product = findProductIndex(name);
  if (has_product >= 0) {
    const product = inventory[has_product];
    if (quantity <= product.quantity) {
      product.quantity -= quantity;
      if (product.quantity == 0) {
        inventory.splice(has_product, 1);
      } else {
        console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
      }
    } else {
      console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
    }
  } else {
    console.log(`${name.toLowerCase()} not found`);
  }
}
