import client from "../dbStrategy/database";
import { INewNetwork } from "../types/networkTypes";

export async function insertNewNetwork(network: INewNetwork) {
  return client.networks.create({
    data: network,
  });
}

export async function findNetworkByTitleAndUserId(userId: number, title: string) {
  return client.networks.findFirst({
    where: { userId, title },
  });
}

// export async function findNetworkByIdAndUserId(userId: number, networkId: number) {
//   return client.networks.findFirst({
//     where: { id: networkId, userId },
//   });
// }

export async function findAllNetworks(userId: number) {
  return client.networks.findMany({
    where: { userId },
  });
}

// export async function deleteNetwork(id: number) {
//   return client.networks.delete({
//     where: { id },
//   });
// }
