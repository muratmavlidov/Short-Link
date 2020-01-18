const { Router } = require('express');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      res.status(400).json({ message: 'Такой пользователь уже существует' });
    }
    
  } catch(e) {
    res.status(500).json({ message: 'Упс..что-то пошло не так' });
  }
});

// /api/login
router.post('/login', async (req, res) => {
  
});

module.exports = router;