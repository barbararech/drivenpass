import * as userService from "./userService";
import * as cardsRepository from "../repositories/cardsRepository";
import { INewCard } from "../types/cardTypes";
import { encrypt, decrypt } from "../utils/criptrUtils";

export async function newCard(userId: number, card: INewCard) {
  const encryptedPassword = encrypt(card.password);
  card["password"] = encryptedPassword;

  const encryptedSecurityCode = encrypt(card.securityCode);
  card["securityCode"] = encryptedSecurityCode;

  await userService.findUserById(userId);

  await findCardByTitle(userId, card);

  await cardsRepository.insertNewCard({
    ...card,
    userId,
  });

  return;
}

export async function viewAllCards(userId: number) {
  const cards = await cardsRepository.findAllCards(userId);

  cards.map((card) => {
    const decryptedPassword = decrypt(card.password);
    const decryptedSecurityCode = decrypt(card.securityCode);

    card["password"] = decryptedPassword;
    card["securityCode"] = decryptedSecurityCode;
  });

  return cards;
}

export async function viewCardById(userId: number, cardId: number) {
  const card = await cardExist(userId, cardId);

  const decryptedPassword = decrypt(card.password);
    const decryptedSecurityCode = decrypt(card.securityCode);

    card["password"] = decryptedPassword;
    card["securityCode"] = decryptedSecurityCode;

  return card;
}

// export async function deleteCard(userId: number, cardId: number) {
//   await cardExist(userId, cardId);
//   await cardsRepository.deleteCard(cardId);

//   return;
// }

export async function findCardByTitle(userId: number, card: INewCard) {
  const { title } = card;
  const cardExist = await cardsRepository.findCardByTitleAndUserId(
    userId,
    title
  );

  if (cardExist) {
    throw {
      status: 409,
      message: "A card with this title already exists!",
    };
  }

  return;
}

export async function cardExist(userId: number, cardId: number) {
  const card = await cardsRepository.findCardByIdAndUserId(
    userId,
    cardId
  );

  if (!card) {
    throw {
      status: 404,
      message: "This card doesn't exist or doesn't belong to you!",
    };
  }

  return card;
}
