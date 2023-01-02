import { Button, ButtonGroup, FormSelect } from "react-bootstrap";
import pageSizes from "../shared/constants/pageSizes";

export default function PaginationControl(props) {
  const {
    page,
    size,
    count,
    totalPages,
    totalCount,
    onChangePage,
    onChangeSize,
    disabled,
  } = props;

  return (
    <div className="d-flex gap-2 justify-content-end align-items-center">
      <span>{`showing ${count} out of ${totalCount} data`}</span>
      <FormSelect
        value={size}
        onChange={(e) => onChangeSize(Number(e.target.value))}
        disabled={disabled}
        style={{ width: "20%" }}
      >
        {pageSizes?.map((ps) => (
          <option key={`page-size-${ps}`} value={ps}>
            {ps}
          </option>
        ))}
      </FormSelect>
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
