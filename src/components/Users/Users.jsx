import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  isfollowingInProgress,
  unfollowThunk,
  followThunk,
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            isfollowingInProgress={isfollowingInProgress}
            followThunk={followThunk}
            unfollowThunk={unfollowThunk}
          />
        );
      })}
    </div>
  );
};

export default Users;
