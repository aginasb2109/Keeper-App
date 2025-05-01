# dKeeper

**dKeeper** is a decentralized note-keeping application inspired by Google Keep. Built using the **Internet Computer** framework, it leverages decentralized technologies to store and manage notes securely on the blockchain. With **dKeeper**, users can manage their personal notes without relying on traditional cloud services, giving them full control over their data.

---

## Features

- **Decentralized Storage**: Your notes are stored securely on the blockchain, ensuring privacy and availability.
- **User Authentication**: Users can create accounts and securely authenticate without needing a centralized server.
- **CRUD Operations**: Create, read, update, and delete your notes easily.
- **Fast and Scalable**: Built on the **DFINITY Internet Computer**, providing a fast and scalable decentralized solution.
- **Simple UI**: A minimalist user interface similar to Google Keep, designed for simplicity and ease of use.

---

## Quick Start

To get started with **dKeeper**, follow the steps below to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- [**DFX**](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html): DFINITY’s SDK for building decentralized applications.
- [**Node.js**](https://nodejs.org/en/): Required for managing frontend dependencies.

### Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/aginasb2109/Keeper-App.git
cd Keeper-App
```

### Install Dependencies

Install the necessary dependencies for both backend and frontend:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Running the Project Locally

1. **Start the local replica**:

   The **DFX** replica emulates the decentralized environment locally.

   ```bash
   dfx start --background
   ```

2. **Deploy your canisters**:

   Once the replica is running, deploy the canisters and generate the candid interface.

   ```bash
   dfx deploy
   ```

   Your decentralized application will be available at:

   ```
   http://localhost:8000?canisterId={asset_canister_id}
   ```

3. **Start the frontend development server**:

   If you are making frontend changes, you can start a development server:

   ```bash
   npm start
   ```

   This will start a server at `http://localhost:8080`, and it will proxy API requests to the replica running on port 8000.

### Frontend Configuration

If you're hosting the frontend outside of DFX, make sure to adjust the environment variables:

- Set `NODE_ENV` to `production` if you're using Webpack.
- Replace `process.env.NODE_ENV` with the appropriate environment variable in your build configuration.
- Customize the `createActor` constructor to match your deployment method.

---

## Documentation

To learn more about **dKeeper** and how it works, check out the following documentation resources:

- [Quick Start Guide for Internet Computer](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

---




## Acknowledgements

- Inspired by Google Keep, but with a decentralized approach using the **Internet Computer**.
- Powered by the **DFINITY SDK** and **Motoko** for smart contract development.

