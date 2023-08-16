module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // console.log("Created an event: ", result);
    //console.log(strapi.plugins["email"].services.email);

    try {
      const res = await strapi.plugins["email"].services.email.send({
        to: result.customer_email,
        from: "contact@stadium-avenue.com",
        subject: "Your order at stadium avenue",
        text: `Thanks for your purchase! Here is your unique order identifier: ${result.order_id}. You can use this ID to track your order at any time.`,
      });

      console.log("Sent email: ", res);
    } catch (error) {
      console.log("error", error);
    }
  },
};
