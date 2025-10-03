const InfoSection = () => {
  return (
    <div className="pb-10 space-y-6 px-4 lg:px-0">
      <section>
        <h3 className="text-xl font-bold mb-4">
          What Are Phishing Signatures?
        </h3>
        <p className="text-gray-700 text-sm">
          Phishing signatures refer to fraudulent or malicious signatures that
          are attached to transactions, tokens, or contracts within blockchain
          networks. These signatures are deliberately crafted to deceive users
          into compromising their private keys, authorization tokens, or funds.
          Attackers utilize these malicious signatures to manipulate or scam
          users into authorizing transactions that may lead to significant
          financial loss.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">
          How Do Phishing Signatures Occur?
        </h3>
        <p className="text-gray-700 text-sm">
          Phishing signatures typically occur when users unknowingly interact
          with compromised or malicious smart contracts, decentralized
          applications (dApps), or fake token requests. These malicious entities
          are often disguised as legitimate projects or tools but are designed
          to trick users into authorizing unwanted or harmful transactions. By
          accepting these fraudulent signatures, users may unknowingly authorize
          access to their funds or private data, putting their digital assets at
          risk. It's crucial to exercise caution when interacting with unknown
          or unverified applications.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">
          How Can You Detect and Remove Phishing Signatures?
        </h3>
        <p className="text-gray-700 text-sm">
          The Phishing Signature Checker allows you to easily detect any
          phishing signatures associated with your wallet address. To begin,
          simply enter your wallet address. Our tool will then scan and identify
          any transactions associated with malicious contracts or phishing
          attempts. If any phishing signatures are detected, you can clear them
          directly from the interface, effectively removing them from your
          account. It is highly recommended to perform regular checks and clear
          any phishing signatures to ensure your digital assets remain secure.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">
          Why Is It Important to Clear Phishing Signatures?
        </h3>
        <p className="text-gray-700 text-sm">
          Clearing phishing signatures is an essential step in safeguarding your
          wallet and preventing malicious actors from gaining unauthorized
          access to your funds. Even if you have not authorized any suspicious
          transactions, phishing signatures may still pose a risk, as they could
          potentially be used in future interactions or trigger unwanted
          approvals without your knowledge. By removing these malicious
          signatures, you effectively limit the potential for future attacks and
          reduce the risk of theft. Regularly monitoring your wallet and
          clearing any identified phishing signatures will provide a critical
          layer of protection for your digital assets.
        </p>
      </section>
    </div>
  );
};

export default InfoSection;
