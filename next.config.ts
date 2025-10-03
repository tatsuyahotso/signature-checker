import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signature-approval-checker/allchain",
        permanent: true, // Set to false if this is temporary
      },
    ];
  },
};

export default nextConfig;
