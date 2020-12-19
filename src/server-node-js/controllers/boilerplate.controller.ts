import { get } from "../services/boilerplate.service";

export const getBoilerplate = async (req:any, res:any) => {
  const reponse = await get();
  res.json(reponse);
};