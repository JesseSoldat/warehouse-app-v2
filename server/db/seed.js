const seedProducts = require("./seeding/productSeed");
const seedProducer = require("./seeding/producerSeed");
const seedCustomer = require("./seeding/customerSeed");
const storageSeed = require("./seeding/storageSeed");
const boxSeed = require("./seeding/boxSeed");
const linkBoxesToShelfSpots = require("./seeding/linkBoxesToShelfSpots");
const linkProductsToCustomerAndProducer = require("./seeding/linkProductsToCustomerAndProducer");

const seedDb = async () => {
  try {
    // await seedProducts();
    // await seedProducer();
    // await seedCustomer();
    // await storageSeed();
    // await boxSeed();
    // await linkBoxesToShelfSpots();
    // await linkProductsToCustomerAndProducer();
  } catch (err) {
    console.log("Error while seeding the DB.");
  }
};

// Uncomment to seed db
seedDb();
