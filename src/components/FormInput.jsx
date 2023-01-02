import React from "react";
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export default function FormInput(props) {
  const {
    title,
    type,
    name,
    as,
    placeholder,
    defaultValue,
    options,
    required,
    disabled,
  } = props;

  if (type === "textarea") {
    return (
      <FormGroup className="mt-3">
        <FormLabel>{title}</FormLabel>
        <FormControl
          as={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
        />
      </FormGroup>
    );
  }

  if (type === "select") {
    return (
      <FormGroup className="mt-3">
        <FormLabel>{title}</FormLabel>
        <FormSelect
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
        >
          {options?.map((o) => (
            <option key={`${name}-select-${o.id}`} value={o.id} selected={o.id === defaultValue}>
              {o.name}
            </option>
          ))}
        </FormSelect>
      </FormGroup>
    );
  }

  return (
    <FormGroup className="mt-3">
      <FormLabel>{title}</FormLabel>
      <FormControl
        type={type}
        as={as}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
      />
    </FormGroup>
  );
}
