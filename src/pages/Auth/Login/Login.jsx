import React from "react";
import { Alert, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GenericForm, StyledContainer } from "../../../components";
import useLogin from "./useLogin";

export default function Login(props) {
  const authLoading = useSelector((state) => state.auth.loading);
  const authError = useSelector((state) => state.auth.error);

  const { inputs, formError, handleSubmit } = useLogin();

  return (
    <StyledContainer>
      <div className="d-flex justify-content-center">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            {authError && <Alert variant="danger">{authError.message}</Alert>}
            <GenericForm
              inputs={inputs}
              error={formError}
              onSubmit={handleSubmit}
              submitText="LOGIN"
              loading={authLoading}
            />
          </Card.Body>
        </Card>
      </div>
    </StyledContainer>
  );
}
