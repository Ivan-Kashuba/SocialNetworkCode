import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={
                currentPage === page ? styles.selectedPage : styles.pageNumber
              }
              key={page}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Paginator;
