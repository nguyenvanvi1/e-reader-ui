import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { createTheme, styled } from "@mui/material/styles";
import GoogleIcon from "../../components/GoogleIcon/GoogleIcon";
import FacebookIcon from "../../components/FacebookIcon/FacebookIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import { registerUser} from '../../services/auth';
const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const RegisterContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleClickLoginWithGoogle = () => {
    loginWithGoogle();
  };

  const onSubmit = async (data) => {
    try {
        const response = await registerUser(data); // Gọi API đăng nhập
        console.log('User logged in:', response);
    } catch (error) {
      setError(error.message); // Set error message nếu có lỗi
    }
  };

  return (
    <>
      <RegisterContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <GoogleIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                fullWidth
                id="name"
                placeholder="Jon Snow"
                {...register("name", { required: "Name is required" })}
                error={errors.name}
                helperText={errors.name?.message}
                color={errors.name ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                {...register("email", { required: "Email is required" })}
                error={errors.email}
                helperText={errors.email?.message}
                color={errors.email ? "error" : "primary.dark"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                {...register("password", { required: "Password is required" })}
                error={errors.password}
                helperText={errors.password?.message}
                color={errors.password ? "error" : "primary"}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button type="submit" fullWidth variant="contained">
              Register
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleClickLoginWithGoogle}
              startIcon={<GoogleIcon />}
            >
              Regsiter with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Regsiter with Facebook")}
              startIcon={<FacebookIcon />}
            >
              Regsiter with Facebook
            </Button>
          </Box>
        </Card>
      </RegisterContainer>
    </>
  );
}
