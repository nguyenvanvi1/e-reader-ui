import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import GoogleIcon from "../../components/GoogleIcon/GoogleIcon";
import FacebookIcon from "../../components/FacebookIcon/FacebookIcon";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { register as registerAPI } from "../../services/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
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
    watch,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password", "");
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleClickLoginWithGoogle = () => {
    loginWithGoogle();
  };

  const onSubmit = async (data) => {
    try {
      const response = await registerAPI(data.email, data.password);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                error={errors.password}
                helperText={errors.password?.message}
                color={errors.password ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <TextField
                fullWidth
                name="confirmPassword"
                placeholder="••••••"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                variant="outlined"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                error={errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
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
