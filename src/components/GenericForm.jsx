import { Button, Form } from "react-bootstrap";
import { FormInput } from ".";

export default function GenericForm(props) {
  const { inputs, onChange, onSubmit, submitText, onCancel, loading, error } = props;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className="d-flex flex-column gap-4"
    >
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
          value={i.value}
          onChange={onChange || i.onChange}
          disabled={loading || i.disabled}
          error={error ? error[i.name] : undefined}
        />
      ))}
      <div className="d-flex justify-content-center gap-2">
        {onCancel && (
          <Button variant="danger" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
        <Button variant="success" type="submit" disabled={loading}>
          {submitText || "Save"}
        </Button>
      </div>
    </Form>
  );
}
