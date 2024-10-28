import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import styles from "@/style/loginForm.module.css";
import { COLORS, flexDisplay } from "@/utils/styles";
import { ActionButton } from "@/components/ActionButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const SignUpForm: FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState<any>({
    show: false,
    message: "",
  });

  const navigateTo = (url: string) => {
    router.push(url); // Navigate and close the menu
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const forgotPasswordHandler = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    setShowMessage({
      show: true,
      type: "success",
      message: "Password Reset Email Sent",
    });
  };
  const onToggleShowPassword = () => setShowPassword((prev) => !prev);

  const passwordIcon = useMemo(
    () => (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={onToggleShowPassword}
          tabIndex={-1}
        >
          {showPassword ? <VisibilityOffOutlinedIcon /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
    [showPassword, onToggleShowPassword]
  );

  return (
    <Box className={styles.formWrapper}>
      <Box className={styles.textContainer}>
        <Typography
          sx={{ textAlign: "center" }}
          fontSize={28}
          fontWeight={600}
          lineHeight="36px"
          color="#101828"
        >
          Register to your account
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          fontSize={14}
          fontWeight={400}
          lineHeight="22px"
          color="#475467"
        >
          Welcome! Please enter your details.
        </Typography>
      </Box>

      <Box className={styles.wrapper}>
        <Box className={styles.fieldsContainer}>
          <Box className={styles.fieldsWithError}>
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}
            >
              <Typography
                fontWeight={500}
                fontSize={12}
                lineHeight={"18px"}
                color={"#344054"}
              >
                {"Username"}
              </Typography>
              <TextField
                variant="outlined"
                value={username}
                type={"text"}
                onChange={(e) => setUsername(e.target.value)}
                size="small"
                inputProps={{
                  autoComplete: "new-password",
                  form: {
                    autoComplete: "off",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    borderColor: "#D0D5DD",
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#667085",
                    lineHeight: "20px",
                  },
                  width: "100%",
                  color: COLORS.WHITE,
                }}
                placeholder={`Enter your username`}
              />
            </Box>
          </Box>
          <Box className={styles.fieldsWithError}>
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}
            >
              <Typography
                fontWeight={500}
                fontSize={12}
                lineHeight={"18px"}
                color={"#344054"}
              >
                Password
              </Typography>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                placeholder={"Enter your password"}
              />
            </Box>
          </Box>

          <Box className={styles.fieldsWithError}>
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}
            >
              <Typography
                fontWeight={500}
                fontSize={12}
                lineHeight={"18px"}
                color={"#344054"}
              >
                Confirem Password
              </Typography>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
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
                placeholder={"Enter your password"}
              />
            </Box>
          </Box>
          <Typography
            fontWeight={600}
            fontSize={12}
            lineHeight="18px"
            color={COLORS.PRIMARY_LIGHT}
            onClick={() => navigateTo("/login")}
            sx={{ cursor: "pointer" }}
          >
            Login
          </Typography>
        </Box>
        <ActionButton
          onClick={() => {}}
          variant="contained"
          loading={loading}
          radius="8px"
          enterKeyEnabled={true}
          text={
            <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={14}
              fontWeight={600}
              lineHeight={"22px"}
              color={COLORS.WHITE}
            >
              Register
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default SignUpForm;
