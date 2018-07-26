const seedProducts = require("./seeding/productSeed");
const seedProducer = require("./seeding/producerSeed");
const seedCustomer = require("./seeding/customerSeed");
const storageSeed = require("./seeding/storageSeed");
const boxSeed = require("./seeding/boxSeed");
const linkBoxesToShelfSpots = require("./seeding/linkBoxesToShelfSpots");
const linkProductsToCustomerAndProducer = require("./seeding/linkProductsToCustomerAndProducer");
const linkProductsToBoxAndSpot = require("./seeding/linkProductsToBoxAndSpot");

const seedDb = async () => {
  try {
    //#1 first step ----------------------------
    // await seedProducts();
    // await seedProducer();
    // await seedCustomer();
    // await storageSeed();
    // await boxSeed();

    // TODO set it up so they can all run
    // BUG products are not linked to box only shelf spot
    // unless ran in two steps
    //#2 second step ---------------------------
    // await linkBoxesToShelfSpots();
    // await linkProductsToCustomerAndProducer();
    // await linkProductsToBoxAndSpot();
    console.log("done with seed");
  } catch (err) {
    console.log("Error while seeding the DB.");
  }
};

// Uncomment to seed db
// seedDb();
