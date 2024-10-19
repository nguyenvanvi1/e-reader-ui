import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import GoogleIcon from "../../components/GoogleIcon/GoogleIcon";
import ForgotPassword from "./components/ForgotPassword";
import FacebookIcon from "../../components/FacebookIcon/FacebookIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const LoginContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleClickLoginWithGoogle = () => {
    loginWithGoogle();
  };

  const handleClickOpenForgotPassword = () => {
    setIsOpenForgotPassword(true);
  };

  const handleCloseOpenForgotPassword = () => {
    setIsOpenForgotPassword(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <LoginContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <GoogleIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                id="email"
                type="email"
                name="email"
                helperText={errors.email?.message}
                placeholder="your@email.com"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                })}
                error={errors.email}
                color={errors.email ? "error" : "primary"}
                autoFocus
                fullWidth
                variant="outlined"
                sx={{ ariaLabel: "email" }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Link
                  component="button"
                  type="button"
                  onClick={handleClickOpenForgotPassword}
                  variant="body2"
                  sx={{ alignSelf: "baseline" }}
                >
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                placeholder="••••••"
                type="password"
                helperText={errors.password?.message}
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
                error={errors.password}
                autoComplete="current-password"
                autoFocus
                fullWidth
                variant="outlined"
                color={errors.password ? "error" : "primary"}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ForgotPassword
              open={isOpenForgotPassword}
              handleClose={handleCloseOpenForgotPassword}
            />
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <span>
                <Link to={"/register"}>Register</Link>
              </span>
            </Typography>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleClickLoginWithGoogle}
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Login with Facebook")}
              startIcon={<FacebookIcon />}
            >
              Login with Facebook
            </Button>
          </Box>
        </Card>
      </LoginContainer>
    </>
  );
}
