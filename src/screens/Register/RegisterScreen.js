import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";

import { useStyles } from "./Register.style";

import Button from "components/Button";
import Input from "components/Input";

const RegisterScreen = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img
          alt="Logo do YourFreeTime"
          src="/assets/logo.png"
          className={classes.img}
        />
        <form
          onSubmit={async e => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <Grid spacing={3} container>
            <Grid item xs={12}>
              <Input
                id="name"
                label="Name"
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
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
            <Grid item xs={12}>
              <Input
                id="confirm_password"
                label="Confirmar Senha"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Button component={Link} to="/login" variant="contained">
                Entrar
              </Button>
              <div style={{ flex: 1 }} />
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
};

export default RegisterScreen;
