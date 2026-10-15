import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Méritum Hotéis",
    short_name: "Méritum",
    description: "Gestora hoteleira de Foz do Iguaçu.",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#052744",
    lang: "pt-BR",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
