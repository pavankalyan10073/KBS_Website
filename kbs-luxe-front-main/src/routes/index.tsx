import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Business Solutions — Premium Tele-calling & Financial Services" },
      { name: "description", content: "Professional Tele-calling, Phone Banking, Credit Card Sales and Loan Support services with high-performance customer engagement." },
      { property: "og:title", content: "Krishna Business Solutions" },
      { property: "og:description", content: "Premium BPO, Tele-calling and Financial Services company in Kouthala, Telangana." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/krishna/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#050507", color: "#EDEDF1", fontFamily: "system-ui, sans-serif" }}>
      Loading Krishna Business Solutions…
    </div>
  );
}
