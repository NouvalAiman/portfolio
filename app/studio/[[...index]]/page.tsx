"use client";

import dynamic from "next/dynamic";
import { sanityConfig } from "@/sanity/env";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function Studio() {
  return (
    <div style={{ height: "calc(100vh - 64px)" }}>
      <NextStudio config={sanityConfig} />
    </div>
  );
}