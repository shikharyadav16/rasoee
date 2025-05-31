const History = require("../models/history");
const razorpay = require('../config/razorpay');

async function handlePostOrderReq(req, res) {
  const { items, values } = req.body;
  let totalPrice = 0;
  items.forEach((element, index) => {
    totalPrice += element.itemPrice * parseInt(values[index]);
  });
  totalPrice += (totalPrice*5)/100 + 50

  if (totalPrice === 0 || totalPrice === null) return res.status(401).json({ message: "Invalid cart details" });

  const amountInPaise = totalPrice * 100;

  const options = {
    amount: amountInPaise,
    currency: "INR",
    receipt: "receipt_" + Date.now()
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id, amount: amountInPaise });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }

}

module.exports = { handlePostOrderReq }