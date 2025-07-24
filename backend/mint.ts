import {
  Client,
  AccountId,
  PrivateKey,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  TokenMintTransaction,
} from "@hashgraph/sdk";
import dotenv from "dotenv";

dotenv.config();

//credentials ko load karenge
const treasuryId = AccountId.fromString(process.env.MY_ACCOUNT_ID!);
const treasuryKey = PrivateKey.fromStringECDSA(process.env.MY_PRIVATE_KEY!);

async function main() {
  const client = Client.forTestnet().setOperator(treasuryId, treasuryKey);
  //create karenge token
  const tokenCreateTx = await new TokenCreateTransaction()
    .setTokenName("Kloros Green Token")
    .setTokenSymbol("KGT") 
    .setDecimals(2) 
    .setInitialSupply(0) 
    .setTokenType(TokenType.FungibleCommon) 
    .setSupplyType(TokenSupplyType.Infinite) 
    .setTreasuryAccountId(treasuryId)
    .setAdminKey(treasuryKey)
    .setSupplyKey(treasuryKey)
    .freezeWith(client);

  const signedCreate = await tokenCreateTx.sign(treasuryKey);
  const tokenCreateSubmit = await signedCreate.execute(client);
  const tokenCreateReceipt = await tokenCreateSubmit.getReceipt(client);
  const tokenId = tokenCreateReceipt.tokenId;

  console.log("Token Created with ID:", tokenId?.toString());

  // mint karenge 
  const mintTx = await new TokenMintTransaction()
    .setTokenId(tokenId!)
    .setAmount(100000) 
    .freezeWith(client)
    .sign(treasuryKey);

  const mintSubmit = await mintTx.execute(client);
  const mintReceipt = await mintSubmit.getReceipt(client);

  console.log("Tokens Minted!");
  console.log("View on HashScan:", `https://hashscan.io/testnet/token/${tokenId}`);
}

main();
