import { Button, Form } from "react-bootstrap";
import { FormInput } from ".";

export default function GenericForm(props) {
  const { inputs, onChange, onSubmit, onCancel, loading } = props;

  return (
    <Form onSubmit={onSubmit} className="d-flex flex-column gap-4">
      {inputs.map((i) => (
        <FormInput
          key={`input-${i.name}`}
          title={i.title}
          type={i.type}
          name={i.name}
          placeholder={i.placeholder}
          options={i.options}
          required={i.required}
          defaultValue={i.defaultValue}
          onChange={onChange}
          disabled={loading || i.disabled}
        />
      ))}
      <div className="d-flex gap-2">
        <Button variant="danger" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button variant="success" type="submit" disabled={loading}>
          Save
        </Button>
      </div>
    </Form>
  );
}
