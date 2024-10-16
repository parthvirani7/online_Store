const { orderSchema } = require("../models");

const addOrder = (body) => {
  return orderSchema.create(body);
};

const getOrder = () => {
  return orderSchema
    .find()
    .then(orders => {
      // Loop through orders and format the date to DD/MM/YYYY
      return orders.map(order => {
        const day = order.date.getDate().toString().padStart(2, '0');
        const month = (order.date.getMonth() + 1).toString().padStart(2, '0');
        const year = order.date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        
        // Add formatted date to the order object, or replace existing date
        return {
          ...order.toObject(),
          date: formattedDate
        };
      });
    })
    .catch(err => {
      console.error(err);
    });
};

const deleteOrder = (id) => {
  return orderSchema.findByIdAndDelete(id);
};

const updateOrder = (id, body) => {
  return orderSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
