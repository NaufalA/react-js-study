import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PaginationControl, StyledContainer } from "../components";
import { slugify } from "../shared/utils/stringHelper";

const Empty = () => <h1>No Item</h1>;

export default function withPaginationList(ListComponent, options) {
  return (props) => {
    const { getDataAction, dataSelector, loadingSelector, label } = options;

    const { onNavigate } = props;

    const isLoading = useSelector(loadingSelector);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);
    const pageData = useSelector((state) => dataSelector(state));
    const { data, count, totalPages, totalCount } = pageData;

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getDataAction(page, size));
    }, [dispatch, getDataAction, dataSelector, page, size]);

    return (
      <StyledContainer className="d-flex flex-column align-items-stretch gap-4">
        <h1>{label} List</h1>
        <Button
          variant="success"
          onClick={() => onNavigate(`/add-${slugify(label)}`)}
          disabled={isLoading}
          className="align-self-start"
        >
          Add {label}
        </Button>
        {data.length === 0 ? (
          <Empty />
        ) : (
          <>
            <ListComponent data={data} />
            <PaginationControl
              page={page}
              size={size}
              count={count}
              totalPages={totalPages}
              totalCount={totalCount}
              onChangePage={setPage}
              onChangeSize={setSize}
              disabled={isLoading}
            />
          </>
        )}
      </StyledContainer>
    );
  };
}
