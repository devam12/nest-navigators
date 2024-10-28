import { FC, useMemo } from "react";
import { Box, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { IconButton, OutlinedInput, Typography } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export interface PasswordFieldProps {
  label?: string;
  name?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  onToggleShowPassword: () => void;
  onMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showIcon?: boolean;
  placeholder?: string;
}

const PasswordField: FC<PasswordFieldProps> = ({
  value,
  label,
  onChange,
  showPassword,
  name,
  onBlur,
  onToggleShowPassword,
  onMouseDownPassword,
  placeholder,
}) => {
  const passwordIcon = useMemo(
    () => (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={onToggleShowPassword}
          onMouseDown={onMouseDownPassword}
          tabIndex={-1}
        >
          {showPassword ? <VisibilityOffOutlinedIcon /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
    [showPassword, onToggleShowPassword, onMouseDownPassword]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}>
      {label && (
        <Typography
          fontWeight={500}
          fontSize={12}
          lineHeight={"18px"}
          color={"#344054"}
        >
          {label}
        </Typography>
      )}
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        endAdornment={passwordIcon}
        sx={{
          borderRadius: "8px",
          width: "100%",
          borderColor: "#D0D5DD",
          "& .MuiOutlinedInput-input::placeholder": {
            fontSize: "14px",
            fontWeight: "400",
            color: "#667085",
            lineHeight: "20px",
          },
        }}
        size="small"
        placeholder={placeholder ? placeholder : "Enter your password"}
      />
    </Box>
  );
};

export default PasswordField;
