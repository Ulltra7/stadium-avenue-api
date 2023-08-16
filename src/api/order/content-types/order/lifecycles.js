module.exports = {
  async afterCreate(event) {
    console.log("Created an event: ", event);

    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: result.customer_email,
        from: "contact@stadium-avenue.com",
        subject: "Your order at stadium avenue",
        text: `Thanks for your purchase! Here is your unique order identifier: ${result.order_id}. You can use this ID to track your order at any time.`,
      });
    } catch (error) {
      console.log("error", error);
    }
  },
};
