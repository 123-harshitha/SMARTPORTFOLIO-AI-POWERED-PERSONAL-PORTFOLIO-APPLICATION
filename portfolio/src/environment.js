let IS_PROD = true;


const server = IS_PROD ?
    "https://smartportfolio-ai-powered-personal.onrender.com":
    "http://localhost:5000" 



export default server;