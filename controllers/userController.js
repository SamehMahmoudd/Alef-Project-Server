var userModel = require('../models/user')

const userController = {
    async getAllUsers(req,res){
        try{
            const allUsers = await userModel.find()
            res.json(allUsers);
        }catch(err){
           console.log(err);
        }
    },

    async addUser(req,res) {
        try{
            const newUser = new userModel(req.body);
            const user = await newUser.save();
            res.json(user);
        }catch(err){
            console.log(err);
        }
    },

    async deleteUser(req,res) {
        try{
            const user = await userModel.findByIdAndDelete(req.params.id);
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        }catch(err){
            console.log(err);
        }
    },

    async editUser(req,res) {
        try{
            const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
                }  
            res.json(user);
        }catch(err){
            console.log(err);
        }
    }

}


module.exports = userController;