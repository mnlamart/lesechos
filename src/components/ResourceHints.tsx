"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function ResourceHints() {
  useEffect(() => {
    // Preconnect to Google Fonts
    ReactDOM.preconnect("https://fonts.googleapis.com", {
      crossOrigin: "anonymous",
    });
    ReactDOM.preconnect("https://fonts.gstatic.com", {
      crossOrigin: "anonymous",
    });

    // DNS prefetch for external image domains
    ReactDOM.prefetchDNS("https://picsum.photos");
  }, []);

  return null;
}

