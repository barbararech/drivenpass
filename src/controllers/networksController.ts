import { Request, Response } from "express";
import * as networksService from "../services/networksServices";
import {INewNetwork} from "../types/networkTypes";

export async function newNetwork(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const network: INewNetwork = req.body;

  await networksService.newNetwork(userId, network);

  return res.status(200).send("network created successfully!");
}

// export async function viewAllNetworks(req: Request, res: Response) {
//   const userId: number = res.locals.id;

//   const networks = await networksService.viewAllNetworks(userId);

//   return res.status(200).send(networks);
// }

// export async function viewNetworkById(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const networkId: number = Number(req.params.id);

//   const network = await networksService.viewNetworkById(
//     userId,
//     networkId
//   );

//   return res.status(200).send(network);
// }

// export async function deleteNetwork(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const networkId: number = Number(req.params.id);

//   await networksService.deleteNetwork(
//     userId,
//     networkId
//   );

//   return res.status(200).send("network successfully deleted!");
// }