import { Request, Response } from "express";
import * as cardsService from "../services/cardsServices";
import {INewCard} from "../types/cardTypes";

export async function newCard(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const card: INewCard = req.body;

  await cardsService.newCard(userId, card);

  return res.status(200).send("Card created successfully!");
}

// export async function viewAllCards(req: Request, res: Response) {
//   const userId: number = res.locals.id;

//   const cards = await cardsService.viewAllCards(userId);

//   return res.status(200).send(cards);
// }

// export async function viewCardById(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const cardId: number = Number(req.params.id);

//   const card = await cardsService.viewCardById(
//     userId,
//     cardId
//   );

//   return res.status(200).send(card);
// }

// export async function deleteCard(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const cardId: number = Number(req.params.id);

//   await cardsService.deleteCard(
//     userId,
//     cardId
//   );

//   return res.status(200).send("Card successfully deleted!");
// }