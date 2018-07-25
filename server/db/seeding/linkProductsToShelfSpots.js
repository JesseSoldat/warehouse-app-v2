// models
const Customer = require("../../models/customer");
const Producer = require("../../models/producer");
const Product = require("../../models/product");

module.exports = linkProductsToShelfSpots = async () => {
  try {
    const [
      customerCount,
      customers,
      producerCount,
      producers,
      products,
      productCount
    ] = await Promise.all([
      Customer.countDocuments(),
      Customer.find({}),
      Producer.countDocuments(),
      Producer.find({}),
      Product.find({}),
      Product.countDocuments()
    ]);
    console.log("done");
  } catch (err) {}
};
