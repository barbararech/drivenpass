import * as userService from "./userService";
import * as networksRepository from "../repositories/networksRepository";
import { INewNetwork } from "../types/networkTypes";
import { encrypt, decrypt } from "../utils/criptrUtils";

export async function newNetwork(userId: number, network: INewNetwork) {
  const encryptedPassword = encrypt(network.password);
  network["password"] = encryptedPassword;

  await userService.findUserById(userId);

  await findNetworkByTitle(userId, network);

  await networksRepository.insertNewNetwork({
    ...network,
    userId,
  });

  return;
}

export async function viewAllNetworks(userId: number) {
  const networks = await networksRepository.findAllNetworks(userId);

  networks.map((network) => {
    const decryptedPassword = decrypt(network.password);

    network["password"] = decryptedPassword;
  });

  return networks;
}

// export async function viewNetworkById(userId: number, networkId: number) {
//   const network = await networkExist(userId, networkId);

//   const decryptedPassword = decrypt(network.password);

//   network["password"] = decryptedPassword;

//   return network;
// }

// export async function deleteNetwork(userId: number, networkId: number) {
//   await networkExist(userId, networkId);
//   await networksRepository.deleteNetwork(networkId);

//   return;
// }

export async function findNetworkByTitle(userId: number, network: INewNetwork) {
  const { title } = network;
  const networkExist = await networksRepository.findNetworkByTitleAndUserId(
    userId,
    title
  );

  if (networkExist) {
    throw {
      status: 409,
      message: "A network with this title already exists!",
    };
  }

  return;
}

// export async function networkExist(userId: number, networkId: number) {
//   const network = await networksRepository.findNetworkByIdAndUserId(
//     userId,
//     networkId
//   );

//   if (!network) {
//     throw {
//       status: 404,
//       message: "This network doesn't exist or doesn't belong to you!",
//     };
//   }

//   return network;
// }
