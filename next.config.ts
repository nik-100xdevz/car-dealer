import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "www.eichertrucksandbuses.com",
      },
      {
        protocol: "https",
        hostname: "cms.eichertrucksandbuses.com",
      },
    ],
        qualities: [75, 95,100], // allow both 75 and 100 quality levels

  }
};

export default nextConfig;
