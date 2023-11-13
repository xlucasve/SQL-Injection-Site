import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  atomOneDark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import login from "../../api/login-api";
import "./login.css";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [response, setResponse] = useState([{}]);

  const sqlQuery = `SELECT * FROM USERS WHERE email = '${email}' AND password = '${pass}'`;

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    const resultado = await login(email);
    console.log(resultado);
    setResponse(resultado);
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={loginSubmitHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPass(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                <Link to="/info">Realiza ataques SQL aquí</Link>
              </Button>
            </Box>
          </Box>
        </Container>
        <div className="sql-data">
          <SyntaxHighlighter language="sql" style={atomOneDark}>
            {sqlQuery}
          </SyntaxHighlighter>
        </div>
        <div className="json-data">
          <SyntaxHighlighter language="json" style={atomOneDark}>
            {JSON.stringify(response, null, 2)}
          </SyntaxHighlighter>
        </div>
      </ThemeProvider>
    </div>
  );
}
