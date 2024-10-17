"use client";
import React from "react";

import Loading from "@/app/components/common/Loading";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center w-full">
      <div className="w-96">
        {/* <Input
          id="password"
          label="Password"
          placeholder="Enter your name"
          type="password"
          name="password"
          onChange={(e) => console.log(e.target.value)}
        /> */}

        <Loading />
      </div>
    </main>
  );
}
