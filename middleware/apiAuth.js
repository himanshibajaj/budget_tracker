import dotenv from "dotenv";
dotenv.config();

const apiAuth = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }
};

export default apiAuth;
 
