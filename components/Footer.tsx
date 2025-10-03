"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-300 pt-6  pb-2 text-sm text-gray-600">
      {/* Top Section */}
      <div className="flex px-4  lg:px-0 flex-col md:flex-row justify-between gap-8">
        <div>
          <h4 className="font-semibold mb-3 md:mb-4 text-lg">Company</h4>
          <ul className="space-y-1">
            <Link href="https://revoke.cash/about">About Us</Link>
            <Link href="https://github.com/RevokeCash/brand-assets">
              Brand Assets
            </Link>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Terms & Privacy</li>
            <li>Bug Bounty</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 md:mb-4 text-lg">Community</h4>
          <ul className="space-y-1">
            <li>API Documentation</li>
            <Link href="https://revoke.cash/learn">Knowledge Base</Link>
            <li>Network Status</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 md:mb-4 text-lg">
            Products & Services
          </h4>
          <ul className="space-y-1">
            <li>Advertise</li>
            <li>Explorer-as-a-Service</li>
            <li>API Plans</li>
            <li>Priority Support</li>
            <li>Blockscan</li>
            <li>Blockscan Chat</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t mt-6 border-gray-300">
        <p className="text-gray-500 text-center md:text-left">
          Signature © 2025 (F1)
        </p>
        <p className="text-gray-500 text-center md:text-right">
          Donations: <span className="text-blue-500">0x71c765...d8976f ❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
