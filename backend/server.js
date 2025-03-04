const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const ProductModel = require('./modules/products')
const UserModel = require('./modules/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const OrdersModel = require('./modules/orders')

// Initialize dotenv to access environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

  app.get('/products', async (req, res) => {
    const {search, category} = req.query;
    let query = {};
    if (search) {
      query.name = { $regex: search, $options: 'i' }; 
    }
    if (category && category.length > 0) {
      query.category = { $in: category };
    }
    try {
      const products = await ProductModel.find(query);
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.get('/Product/:id', async (req, res) => {
    try {
      const productId = new mongoose.Types.ObjectId(req.params.id);
  
      const product = await ProductModel.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(product);
    } catch (err) {
      console.error("Error fetching product:", err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
  })
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;   
    try {
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password Match:", isMatch);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }  
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '4h' });
      const id = user._id
      res.json({ success: true, message: "Logged in successfully!", token, id});
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });
  app.post('/orders', async (req, res) => {
    const { userId, products, totalAmount, status, fname, lname, email, address, city, state, zipcode, phone, method } = req.body;
  
    try {
      const order = new OrdersModel({
        userId,         // Store the userId who placed the order
        products,       // Store the product IDs in the order
        totalAmount,    // Store the total amount of the order
        status,         // Store the order status (e.g., 'pending', 'completed')
        fname,
        lname,
        email,
        address,
        city,
        state,
        zipcode,
        phone,
        method
      });
  
      await order.save();

      res.status(201).json(order);
    } catch (err) {
      console.error('Error saving order:', err);
      res.status(500).json({ message: 'Failed to create order' });
    }
  });
  app.get("/orders/:userId", async(req, res) => {
    const {userId} = req.params;
    try{
      const orders = await OrdersModel.find({userId});
      if(!orders.length){
        return res.status(404).json({message: "No orders found for this user"})
      }
      res.json(orders)
    }catch(err){
      console.error("Error fetching orders: ", err);
      res.status(500).json({message: "Failed fetching orders"})
    }
  })
  

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});