const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
const port = 5000;


const JWT_SECRET = 'your_jwt_secret_key';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully', user: { name: user.name, email: user.email } });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ message: 'Email already exists' });
    }
    console.error('Error creating user:', error);
    res.status(500).send({ message: 'Error creating user', error });
  }
});

// Sign-in endpoint
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({
      message: 'Sign-in successful!',
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send({ message: 'Error signing in', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
