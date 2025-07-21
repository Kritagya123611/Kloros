import { HashConnect } from 'hashconnect';

const hashConnect = new HashConnect();

export const initHashConnect = async () => {
    const metadata = {
        name: "ProofOfImpact",
        description: "A project for managing claims and DAO voting.",
        icon: "https://example.com/icon.png", // Replace with your project's icon URL
    };

    const connection = await hashConnect.init(metadata);
    return connection;
};

export const connectWallet = async () => {
    const { accounts } = await hashConnect.connect();
    return accounts;
};

export const disconnectWallet = () => {
    hashConnect.disconnect();
};

export const getAccountDetails = (accountId) => {
    return hashConnect.getAccount(accountId);
};