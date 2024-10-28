import { Typography } from "@mui/material";

export const border = (size = 1, color = "red", radius = 0) => {
  return { border: `${size}px solid ${color}`, borderRadius: radius };
};

export const flexDisplay = ({ direction = "column", withFlex = 1 } = {}) => {
  return {
    display: "flex",
    flexDirection: direction,
    flex: withFlex,
  };
};

export const textCapitalize = ({ label }: any) => {
  return <Typography sx={{ textTransform: "capitalize" }}>{label}</Typography>;
};

export const COLORS = {
  PRIMARY: "#7F56D9",
  PRIMARY_LIGHT: "#6941C6",
  PRIMARY_DARK_1: "#03031B",
  PRIMARY_DARK_2: "#1C0550",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  LIGHT_GRAY: "#E4E7EC",
  HEADER_TITLE: "#101828",
  FILTER_PANEL: "#F9FAFB",
  ERROR: "#B3311F",
  SUCCESS : 'green',
  GRAY : '#475467',
};

export const hexToRgba = (hex: string, alpha = 1) => {
  let hexValue = hex.replace("#", "");
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rgbaToHex = (r: number, g: number, b: number, a = 1) => {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  a = Math.max(0, Math.min(1, a));
  const redHex = r.toString(16).padStart(2, "0");
  const greenHex = g.toString(16).padStart(2, "0");
  const blueHex = b.toString(16).padStart(2, "0");
  const alphaHex = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
};
