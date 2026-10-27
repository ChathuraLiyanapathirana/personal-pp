const toColorToHex: Record<string, string> = {
  "to-lime-600": "#65a30d",
  "to-red-500": "#ef4444",
  "to-blue-600": "#2563eb",
  "to-sky-600": "#0284c7",
  "to-purple-600": "#9333ea",
  "to-green-600": "#16a34a",
  "to-red-600": "#dc2626",
  "to-yellow-600": "#ca8a04",
  "to-gray-300": "#d1d5db",
  "to-fleetnurse": "#6B86C3",
  "to-pocketa": "#3E6600",
};

export const getProjectAccent = (toColor: string) =>
  toColorToHex[toColor] ?? "#22dd55";
