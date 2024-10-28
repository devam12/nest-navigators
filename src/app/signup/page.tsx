"use client";
import { NextPage } from "next";
import { Box } from "@mui/material";
import LoginForm from "@/components/LoginForm";
import styles from "@/style/loginForm.module.css";
import SignUpForm from "@/components/SignupForm";

interface LoginPageProps {}

const SignPage: NextPage<LoginPageProps> = ({}) => {
  return (
    <Box className={styles.loginPage}>
      <Box className={styles.headerContainer} sx={{ position: "absolute" }}>
        <Box className={styles.topBar}></Box>
      </Box>

      <Box className={styles.mainContent}>
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignPage;
