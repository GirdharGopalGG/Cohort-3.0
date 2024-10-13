//HAHA I GOT THE ANSWER. JWT SAVES 1 db CALL. IT DIRECTLY CHECKS WHETHER THIS JWT IS SIGNED BY ME OR NOT

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { adminModel } = require("../db");

async function auth(req, res, next) {
  try {
    const token = req.headers.token;
    const decodedJwt = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

    console.log(decodedJwt);

    //   const user = await adminModel.findOne({
    //     id: decodedJwt.id,
    //   });

    if (decodedJwt) {
      req.id = decodedJwt.id; //modifying request object
      next();
    } else {
      res.json({
        msg: "token invalid",
      });
    }
  } catch (e) {
    res.json({
      msg: "token invalid",
    });
  }
}

module.exports = auth;
