# TetherSwap ICO Project

TetherSwap is a cutting-edge ICO (Initial Coin Offering) platform that leverages blockchain technology to provide a seamless and secure way to participate in token offerings. This project is built using modern web technologies and integrates with various blockchain services.

check out (https://github.com/gprethesh/ICO-solidity) for smart contract.

## Features
- **Smart Contract Integration**: Utilizes Ethereum smart contracts for secure token transactions.
- **Responsive Design**: A user-friendly interface that works across various devices.
- **Real-time Updates**: Stay up-to-date with the latest ICO offerings and market trends.

## Prerequisites
- Node.js
- Git

## Setup

### Environment Variables
Copy the `.env` file to your project root and update the following variables:

```env
VITE_APP_CONTRACT_ADDRESS=Your_Contract_Address
VITE_APP_DOMAIN_URL=Your_Domain_URL
VITE_APP_BSCSCANURL=Your_BscScan_URL
VITE_APP_API_URL=Your_API_URL
VITE_APP_YOURAPIKEYTOKEN=Your_API_Key_Token
```

These variables are essential for connecting to the blockchain and other services.

### Makefile
The `Makefile` is used to automate the update process. You can run the following command to update the project:

```bash
make update
```

This command will pull the latest code, remove old files, and copy the new build to the specified directory.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gprethesh/ICO-FRONTEND
   ```

2. Navigate to the project directory:
   ```bash
   cd ICO-FRONTEND
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
