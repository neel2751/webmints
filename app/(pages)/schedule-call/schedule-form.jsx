"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#4f46e5" } },
        hideEventTypeDetails: false,
        layout: "column_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="webmints-fun5ur/30min"
      style={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
      }}
      config={{ layout: "column_view", theme: "light" }}
    />
  );
}
