import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";

import { useStyles } from "./Login.style";

import Button from "components/Button";
import Input from "components/Input";

const LoginScreen = ({ history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img alt="Logo do T2L" src="/assets/logo.png" className={classes.img} />
        <form
          onSubmit={e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <Grid spacing={3} container>
            <Grid item xs={12}>
              <Input
                id="email"
                label="E-mail"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                label="Senha"
                type="password"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Button component={Link} to="/register" variant="contained">
                Registre-se
              </Button>
              <div style={{ flex: 1 }} />
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
};

export default LoginScreen;
