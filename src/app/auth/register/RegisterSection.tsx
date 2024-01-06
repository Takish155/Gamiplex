"use client";

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { buttonBox, buttonStyle, loginForm, textField } from "../_authStyle";
import useRegister from "@/hooks/user/account/useRegister";
import { Alert, CircularProgress } from "@mui/material";

const RegisterSection = () => {
  const { register, errors, handleSubmit, onSubmit, message, loading } =
    useRegister();
  return (
    <Box
      component="form"
      sx={loginForm}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      {message && (
        <Alert
          severity={
            message === "Account created successfully... signing in...."
              ? "success"
              : "error"
          }
        >
          {message}
        </Alert>
      )}
      <TextField
        label="Name"
        type="text"
        variant="filled"
        sx={textField}
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ""}
        {...register("name")}
      />
      <TextField
        label="Email"
        type="email"
        variant="filled"
        sx={textField}
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
        {...register("email")}
      />
      <TextField
        label="Password"
        type="password"
        variant="filled"
        sx={textField}
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ""}
        {...register("password")}
      />
      <TextField
        label="Password again"
        type="password"
        variant="filled"
        sx={textField}
        error={errors.passwordAgain ? true : false}
        helperText={errors.passwordAgain ? errors.passwordAgain.message : ""}
        {...register("passwordAgain")}
      />
      <Box sx={buttonBox}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" variant="contained" sx={buttonStyle}>
            Create account
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default RegisterSection;
