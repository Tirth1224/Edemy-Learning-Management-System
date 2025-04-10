"use client";
import { useState, useEffect } from "react";

export default function Logger() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    async function initLogger() {
      const body = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          clientSecret: "92770d66-97ad-467d-b2cf-0e2b978f5754",
          applicationId: "79b662e9-98e3-4179-8eaf-d711ea31aaf3",
        }),
      };
      const res = await fetch(
        "https://logger-mocha-six.vercel.app/api/logger/v1",
        body
      );
      const json = await res.json();
      if (res.status === 200) {
        setVisitors(json);
      } else {
        // error
        console.log(json);
      }
    }
    initLogger();
  }, []);
  return (
    <div className="w-fit m-auto font-semibold gap-3 bg-gradient-to-b from-cyan-100/20 text-lg sm:text-xs p-3 sm:p-2 rounded-md shadow-md z-50">
      Visitors: <span className="text-green-500"> {visitors} </span>
    </div>
    //     <div className="w-fit m-auto  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-xs p-3 sm:p-2 rounded-md shadow-lg z-50">
    //     Visitors: {visitors}
    //   </div>
  );
}
