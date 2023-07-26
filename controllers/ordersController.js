var OrderModel=require('../models/order')


const ordersController = {
  async saveOrder(order) {
    return  (await OrderModel.create(order)).populate('user')
  },
  async getAllOrders(){
    return await OrderModel.find({}).populate('user');
  },
  
  async getOrderById(id) {
    return await OrderModel.findById(id)
  },
  
  async  EditOrderById(id){
    return await OrderModel.findByIdAndUpdate(id)
  },
  
  async deleteOrder(id){
    return await OrderModel.deleteOne({_id:id})
  },
  
  async deleteUserOrder(id){
    return await OrderModel.deleteOne({userId:id})
  },

  async getUserOrders (id){

    return await OrderModel.find({user:id})
  }
}

module.exports = ordersController