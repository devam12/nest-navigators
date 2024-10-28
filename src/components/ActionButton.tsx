import { COLORS } from "@/utils/styles";
import { LoadingButton } from "@mui/lab";
import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

interface ActionButtonProps {
  variant: "contained" | "outlined";
  text: string | React.ReactElement;
  onClick?: any;
  loading?: boolean;
  onKeyDown?: any;
  sx?: React.CSSProperties;
  className?: string;
  radius?: string;
  size?: string;
  bgColor?: string;
  borderColor?: string;
  color?: string;
  startIcon?: any;
  endIcon?: any;
  disabled?: boolean;
  enterKeyEnabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  text,
  onClick = () => {},
  className,
  sx,
  radius,
  loading = false,
  size = "small",
  bgColor,
  borderColor,
  color,
  startIcon,
  endIcon,
  disabled,
  enterKeyEnabled = false,
}) => {
  const main = COLORS.PRIMARY;
  const isContained = variant === "contained";
  const _bgColor = bgColor || (isContained ? main : "transparent");
  const _color = color || (isContained ? COLORS.WHITE : main);
  const _borderColor =
    (borderColor && borderColor) || (bgColor && _bgColor) || main;

  // Handle Enter key press
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  // Attach event listener on component mount and cleanup
  useEffect(() => {
    if (enterKeyEnabled) {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, []);

  return (
    <Button
      variant={variant}
      sx={{
        "& .MuiOutlinedInput-root": { borderRadius: radius || "10px" },
        color: _color,
        backgroundColor: _bgColor,
        borderColor: _borderColor,
        "&:hover": {
          backgroundColor: _bgColor,
          borderColor: _borderColor,
        },
        "& .MuiButton-startIcon": {
          marginRight: "4px",
          marginLeft: "-4px",
        },
        borderWidth: "1px",
        borderRadius: radius || "10px",
        fontSize: size,
        ...sx,
      }}
      disabled={disabled}
      className={className}
      startIcon={startIcon || null}
      endIcon={endIcon || null}
      onClick={onClick}
    >
      {loading ? <CircularProgress color="inherit" size={"22px"} /> : text}
    </Button>
  );
};

export const ActionLoadingButton: React.FC<ActionButtonProps> = ({
  variant,
  text,
  onClick = () => {},
  loading,
  onKeyDown = () => {},
  disabled,
  sx,
}) => (
  <LoadingButton
    variant={variant}
    sx={{
      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
      color: variant === "contained" ? COLORS.WHITE : COLORS.PRIMARY,
      backgroundColor: variant === "contained" ? COLORS.PRIMARY : "transparent",
      borderColor: COLORS.PRIMARY,
      "&:hover": {
        backgroundColor:
          variant === "contained" ? COLORS.PRIMARY : "transparent",
        borderColor: COLORS.PRIMARY,
      },
      ...sx,
    }}
    disabled={disabled}
    onClick={onClick}
    onKeyDown={onKeyDown}
    loading={loading}
  >
    {text}
  </LoadingButton>
);
