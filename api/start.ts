import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    var gameData = req.body

    console.log('START')
    console.log(gameData)
    // response.status(200).send('ok')
    return res.status(200).send('ok');
};