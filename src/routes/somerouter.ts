import { Router, Request, Response } from 'express';

const someRouter = Router();

function getHandler(req: Request, res: Response) {
  //todo: move to a controller!
  //add logic to service
  // use repository to handle data if needed
  res.send('called the get route').end();
}

someRouter.get(`/getPath`, getHandler);

export default someRouter;
