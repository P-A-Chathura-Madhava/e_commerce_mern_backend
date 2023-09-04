const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "key-id",
  key_secret: "key-secret",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "LKR",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerificaion = async (req, res) => {
  const { razorPayOrderId, razorPayPaymentId } = req.body;
  res.json({
    razorPayOrderId,
    razorPayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerificaion,
};
