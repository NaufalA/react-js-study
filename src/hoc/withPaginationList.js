import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PaginationControl, StyledContainer } from "../components";
import { slugify } from "../shared/utils/stringHelper";

const Empty = () => <h1>No Item</h1>;

export default function withPaginationList(ListComponent, options) {
  return (props) => {
    const { onGetData, label } = options;

    const { onNavigate } = props;

    const [isLoading, setLoading] = useState(false);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
      setLoading(true);
      onGetData(page, size).then((pagedData) => {
        setData(pagedData.data);
        setCount(pagedData.count);
        setTotalPages(pagedData.totalPage);
        setTotalCount(pagedData.totalCount);
        setLoading(false);
      });
    }, [onGetData, page, size]);

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
