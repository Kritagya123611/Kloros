# Kloros

## Overview
ProofOfImpact is a decentralized application designed to facilitate claims, audits, and voting processes through a multi-faceted architecture that includes a backend built with Express.js, a frontend developed in React, smart contracts written in Solidity, and an optional AI agent for enhanced functionality.

## Project Structure
The project is organized into several key directories:

- **backend/**: Contains the Express.js backend server.
  - **src/**: Source code for the backend.
    - **routes/**: API route handlers for claims, audits, and DAO operations.
    - **services/**: Business logic for interacting with Hedera services, AI integration, and IPFS uploads.
    - **db/**: Optional database logic for managing off-chain vote records.
    - **index.ts**: Entry point for the backend application.
  - **.env**: Environment variables for the backend.
  - **package.json**: Backend dependencies and scripts.

- **frontend/**: Contains the React frontend application.
  - **public/**: Static assets for the frontend.
  - **src/**: Source code for the frontend.
    - **components/**: React components for claims submission, score display, DAO voting, and wallet connection.
    - **pages/**: Main pages of the application.
    - **utils/**: Utility functions for HashConnect integration.
    - **App.tsx**: Main application component.
  - **.env**: Environment variables for the frontend.
  - **package.json**: Frontend dependencies and scripts.

- **smart-contracts/**: Contains the Solidity smart contracts.
  - **contracts/**: Smart contract definitions.
  - **scripts/**: Deployment scripts for the smart contracts.
  - **test/**: Test files for the smart contracts.
  - **hardhat.config.js**: Hardhat configuration file.
  - **package.json**: Smart contracts dependencies and scripts.

- **ai-agent/**: Optional Python AI service.
  - **main.py**: Main logic for AI service.
  - **model/**: AI model files.
  - **utils/**: Utility functions for the AI service.
  - **requirements.txt**: Dependencies for the Python AI service.

## Getting Started

### Prerequisites
- Node.js and npm for the backend and frontend.
- Hardhat for smart contract development.
- Python and pip for the AI agent (if used).

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ProofOfImpact
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Install smart contracts dependencies:
   ```
   cd smart-contracts
   npm install
   ```

5. Install AI agent dependencies (if used):
   ```
   cd ai-agent
   pip install -r requirements.txt
   ```

### Running the Application
- Start the backend server:
  ```
  cd backend
  npm start
  ```

- Start the frontend application:
  ```
  cd frontend
  npm start
  ```

- Deploy the smart contracts:
  ```
  cd smart-contracts
  npx hardhat run scripts/deploy.js --network <network-name>
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
