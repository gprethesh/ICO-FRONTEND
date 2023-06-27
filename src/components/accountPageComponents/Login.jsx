import { useContext } from "react";
import { WalletContext } from "../../routing/Routing";

export default function Login() {
  const { connectWallet, disconnectWallet, connected, account } =
    useContext(WalletContext);

  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
          {connected ? (
            <button
              onClick={disconnectWallet} // Call disconnectWallet when the button is clicked
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-xs font-semibold tracking-widest uppercase rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-xs font-semibold tracking-widest uppercase rounded"
            >
              Connect with Metamask
            </button>
          )}
        </section>
      </div>
    </>
  );
}
