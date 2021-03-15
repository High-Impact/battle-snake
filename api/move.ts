import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    var gameData = req.body

    var possibleMoves = ['up', 'down', 'left', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

    console.dir(gameData)
    console.log('MOVE: ' + move)
    // response.status(200).send({
    //     move: move
    // })
    return res.status(200).send({
        move: move
    });
};