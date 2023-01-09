import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { useTheme } from "../contexts/Theme";

export default function FormInput(props) {
  const {
    title,
    type,
    name,
    as,
    placeholder,
    value,
    defaultValue,
    onChange,
    options,
    required,
    disabled,
    error,
  } = props;

  const { theme } = useTheme();

  if (type === "textarea") {
    return (
      <FormGroup>
        {title && <FormLabel>{title}</FormLabel>}
        <FormControl
          as={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={onChange ? value : undefined}
          onChange={onChange}
          required={required}
          disabled={disabled}
          style={{ backgroundColor: theme.accent, color: theme.foreground }}
        />
      </FormGroup>
    );
  }

  if (type === "select") {
    return (
      <FormGroup>
        {title && <FormLabel>{title}</FormLabel>}
        <FormSelect
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={onChange ? value : undefined}
          onChange={onChange}
          required={required}
          disabled={disabled}
          style={{
            backgroundColor: theme.accent,
            color: theme.foreground,
            dropdownIndicator: (base) => ({
              ...base,
              color: theme.highlight,
              backgroundColor: theme.highlight,
            }),
          }}
        >
          {options?.map((o) => (
            <option key={`${name}-select-${o.id}`} value={o.id}>
              {o.name}
            </option>
          ))}
        </FormSelect>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      {title && <FormLabel>{title}</FormLabel>}
      <FormControl
        type={type}
        as={as}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={onChange ? value : undefined}
        onChange={onChange}
        required={required}
        disabled={disabled}
        isInvalid={error}
        style={{ backgroundColor: theme.accent, color: theme.foreground }}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </FormGroup>
  );
}
