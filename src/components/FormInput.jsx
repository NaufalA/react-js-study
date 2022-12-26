import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export default function FormInput(props) {
  const { title, type, name, as, placeholder } = props;

  if (type === "textarea") {
    return (
      <FormGroup className="mt-3">
        <FormLabel>{title}</FormLabel>
        <FormControl as={type} name={name} placeholder={placeholder} />
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <FormLabel>{title}</FormLabel>
      <FormControl type={type} as={as} name={name} placeholder={placeholder} />
    </FormGroup>
  );
}
