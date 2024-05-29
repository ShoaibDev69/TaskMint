import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0x21750a59CFD663B78b065DA9e6C76BA44c2bc525";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: CONTRACT_ABI,
});