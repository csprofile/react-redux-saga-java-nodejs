const middleware = (req: any, res: any, next: any) => {
  if (req.params.id === '1')
    next();
  else
    res.status(403).end();
};

export default middleware;
