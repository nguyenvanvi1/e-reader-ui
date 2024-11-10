import instance from "./api";

const register = (email, password) =>
  instance.post("/auth/register", { email, password });

const login = (email, password) =>
  instance.post("/auth/login", { email, password });

export { register, login };
