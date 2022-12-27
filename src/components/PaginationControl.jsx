import { Button, ButtonGroup, FormControl } from "react-bootstrap";

export default function PaginationControl(props) {
    const { page, size, count, totalPages, totalCount, onChangePage, onChangeSize, disabled } = props;

  return (
    <div className="d-flex gap-2 justify-content-end align-items-center">
      <span>{`showing ${count} out of ${totalCount} data`}</span>
      <FormControl
        type="number"
        value={size}
        onChange={(e) => onChangeSize(e.target.value)}
        min={1}
        disabled={disabled}
        style={{ width: "20%" }}
      />
      <ButtonGroup>
        <Button
          onClick={() => onChangePage(page - 1)}
          disabled={disabled || page === 0}
          variant="outline-primary"
        >
          PREV
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={`page-${i}`}
            onClick={() => onChangePage(i)}
            disabled={disabled}
            variant={`${i === page ? "primary" : "outline-primary"}`}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => onChangePage(page + 1)}
          disabled={disabled || page === totalPages - 1}
          variant="outline-primary"
        >
          NEXT
        </Button>
      </ButtonGroup>
    </div>
  );
}
