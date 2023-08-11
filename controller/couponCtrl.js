const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongodbid");
const asynHandler = require("express-async-handler");

const createCoupon = asynHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllCoupons = asynHandler(async (req, res) => {
    try {
      const coupons = await Coupon.find();
      res.json(coupons);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {createCoupon, getAllCoupons};