"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");

/* module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // wrap a core action, leaving core logic in place
  async create(ctx) {
    // some logic here
    console.log("ctx.request.body", ctx.request.body);
    const response = await super.create(ctx);
    // some more logic

    return response;
  },
})); */
