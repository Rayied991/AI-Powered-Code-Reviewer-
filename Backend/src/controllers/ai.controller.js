import aiService from "../services/ai.service.js";
const getReview = async(req, res) => {
    const code = req.body.code;

    if (!code) {
        res.status(400).send("code is required");
    }
    const response=await aiService(code);
    res.send(response);
};

export default getReview;
