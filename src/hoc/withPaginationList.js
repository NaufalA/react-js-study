import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaginationControl, StyledContainer } from "../components";

const Empty = () => <h1>No Item</h1>;

export default function withPaginationList(ListComponent, options) {
  return (props) => {
    const { getDataAction, dataSelector, loadingSelector, label, addPath } =
      options;

    const onNavigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const isLoading = useSelector(loadingSelector);

    const pageData = useSelector((state) => dataSelector(state));
    const {
      data,
      count,
      totalPages,
      totalCount,
      page: statePage,
      size: stateSize,
    } = pageData;
    const [page, setPage] = useState(
      searchParams.get("page") ? Number(searchParams.get("page")) : statePage
    );
    const [size, setSize] = useState(
      searchParams.get("size") ? Number(searchParams.get("size")) : stateSize
    );

    const changePage = (newPage) => {
      setPage(newPage);
      setShouldFetch(true);
    };

    const changeSize = (newSize) => {
      setSize(newSize);
      setShouldFetch(true);
    };

    const [shouldFetch, setShouldFetch] = useState(true);

    const dispatch = useDispatch();
    useEffect(() => {
      if (shouldFetch) {
        setShouldFetch(false);
        setSearchParams({ page, size });
        dispatch(getDataAction(page, size));
      }
    }, [
      setSearchParams,
      dispatch,
      getDataAction,
      dataSelector,
      page,
      size,
      shouldFetch,
    ]);

    return (
      <StyledContainer className="d-flex flex-column align-items-stretch gap-4">
        <h1>{label} List</h1>
        <Button
          variant="success"
          onClick={() => onNavigate(addPath)}
          disabled={isLoading}
          className="align-self-start"
        >
          Add {label}
        </Button>
        {data.length === 0 ? (
          <Empty />
        ) : (
          <>
            <ListComponent
              data={data}
              onNavigate={onNavigate}
              onDelete={() => setShouldFetch(true)}
            />
            <PaginationControl
              page={page}
              size={size}
              count={count}
              totalPages={totalPages}
              totalCount={totalCount}
              onChangePage={changePage}
              onChangeSize={changeSize}
              disabled={isLoading}
            />
          </>
        )}
      </StyledContainer>
    );
  };
}
