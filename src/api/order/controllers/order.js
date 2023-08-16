"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

//module.exports = createCoreController('api::order.order');

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // wrap a core action, leaving core logic in place
  async create(ctx) {
    const uuid = uuidv4();

    ctx.request.body.data.order_id = uuid;

    const response = await super.create(ctx);
    // some more logic

    return response;
  },
}));
