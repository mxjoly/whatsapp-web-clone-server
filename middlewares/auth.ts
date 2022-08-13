import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // @ts-ignore
    const userId = decodedToken.userId;
    req.auth = { userId };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};