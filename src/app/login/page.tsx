"use client";
import { NextPage } from "next";
import { Box } from "@mui/material";
import LoginForm from "@/components/LoginForm";
import styles from "@/style/loginForm.module.css";

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = ({}) => {
  return (
    <Box className={styles.loginPage}>
      <Box className={styles.headerContainer} sx={{ position: "absolute" }}>
        <Box className={styles.topBar}></Box>
      </Box>

      <Box className={styles.mainContent}>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
