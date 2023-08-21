"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const url = "/api/test";
  const test = async () => {
    const res = await axios.get(url);
    setData(res.data?.message);
  };

  useEffect(() => {
    test();
  }, [url]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {data}
    </main>
  );
}
