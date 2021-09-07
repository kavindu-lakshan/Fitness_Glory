import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts } from "../actions/workouts";
import useStyles from "./styles";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.workouts);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getWorkouts(page));
  }, [page]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <Pagination
          classes={{ ul: classes.ul }}
          count={numberOfPages}
          page={Number(page) || 1}
          variant="outlined"
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              component={Link}
              to={`/workouts?page=${item.page}`}
            />
          )}
          style={{ height: "100px" }}
        />
      </ul>
    </nav>
  );
};

export default Paginate;
