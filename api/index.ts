import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    var battlesnakeInfo = {
        apiversion: '1',
        author: 'Jonathan Knoll',
        color: '#3D6FB1',
        head: 'silly',
        tail: 'curled'
    }
    // response.status(200).json(battlesnakeInfo)
    return res.json( battlesnakeInfo );
};