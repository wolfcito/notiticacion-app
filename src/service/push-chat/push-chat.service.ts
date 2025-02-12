import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import * as dotenv from "dotenv";
import {  Wallet } from "ethers";

dotenv.config();

const PK_SIGNER =
  process.env.DEPLOYER_PRIVATE_KEY ??
  'abd1788625aa80c8a0aebba811880966dab3f9fafaa0eece8c449868dce64759'

export const sendPushChatMessage = async ({walletRecipient="0x47b43F926D08c81646833290eD4156E7ccEC7503", content }: { walletRecipient: string, content: string }) => {
  
  const userAlice = await PushAPI.initialize(new Wallet(PK_SIGNER), { env: ENV.PROD });

  const jesusMessage = await userAlice.chat.send(walletRecipient, {
    content: content,
  });

  console.log("jesusMessage:", jesusMessage);

  const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);

  stream.on(CONSTANTS.STREAM.CHAT, message => {
    console.log("mensaje stream:", {message});
  });

  stream.connect();
};
