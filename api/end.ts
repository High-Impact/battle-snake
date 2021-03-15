import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
        var gameData = req.body

        console.log('END')
        res.status(200).send('ok')
};