import client from "../dbStrategy/database";
import { INewCard } from "../types/cardTypes";

export async function insertNewCard(card: INewCard) {
  return client.cards.create({
    data: card,
  });
}

export async function findCardByTitleAndUserId(
  userId: number,
  title: string
) {
  return client.cards.findFirst({
    where: { userId, title },
  });
}

// export async function findCardByIdAndUserId(
//   userId: number,
//   cardId: number
// ) {
//   return client.cards.findFirst({
//     where: { id: cardId, userId },
//   });
// }

// export async function findAllCards(userId: number) {
//   return client.cards.findMany({
//     where: { userId },
//   });
// }

// export async function deleteCard(id: number) {
//   return client.cards.delete({
//     where: { id },
//   });
// }
