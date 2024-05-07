import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0xbb67A243e3Cd0a91fbA98cd896FAa32778405920";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: CONTRACT_ABI,
});
