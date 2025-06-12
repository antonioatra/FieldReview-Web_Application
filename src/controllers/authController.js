const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/user');
require('dotenv').config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await Users.pool.query(query, [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.senha);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.cargo },
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
    );

    // Set HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({
      user: {
        id: user.id,
        name: user.nome,
        email: user.email,
        role: user.cargo,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role = 'user' } = req.body;

    // Validate role
    const validRoles = ['user', 'consultor', 'knowledge-transfer'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await Users.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: result.rows[0],
    });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
};
