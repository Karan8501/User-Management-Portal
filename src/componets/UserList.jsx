import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsers,
  setCurrentPage,
  setSearchQuery,
  setFilter,
  selectUser,
  setDomain,
  deselectUser,
} from "../appStore/userSlice";
import { userData } from "../utils/userData";
import UserCard from "./UserCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import Header from "./Header";
import Team from "./Team";
import "./UserList.css";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const currentPage = useSelector((state) => state.user.currentPage);
  const searchQuery = useSelector((state) => state.user.searchQuery);
  const filters = useSelector((state) => state.user.filters);
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const domains = useSelector((state) => state.user.domains);
  const itemsPerPage = 20; // Assuming 20 users per page
  const dispatch = useDispatch();

  // Calculate the start and end indexes
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Apply filters and search query to the user list

  const filteredUsers = users.filter((user) => {
    const isNameMatch =
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase());
    const isDomainMatch = !filters.domain || user.domain === filters.domain;
    const isGenderMatch = !filters.gender || user.gender === filters.gender;
    const isAvailabilityMatch =
      !filters.availability ||
      (filters.availability === "available" && user.available) ||
      (filters.availability === "unavailable" && !user.available);

    return isNameMatch && isDomainMatch && isGenderMatch && isAvailabilityMatch;
  });

  // Get the current page's users
  const currentPageUsers = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(setUsers(userData)); // Fetch users from the API
    dispatch(setDomain(userData)); // Fetching all the domains form users
  }, [dispatch]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // Function to handle search query change
  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
  };

  // Function to handle filter change
  const handleFilterChange = (filterName, filterValue) => {
    dispatch(setFilter({ filterName, filterValue }));
  };

  // Function to handle user selection
  const handleUserSelect = (user) => {
    dispatch(selectUser(user));
  };

  // Function to handle deselection of perticular user
  const handleUserDeSelect = (id) => {
    dispatch(deselectUser(id));
  };

  return (
    <div className="user-list">
      <div className="main-header">
        <Header selectedUsers={selectedUsers} />
        <Filters
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          domains={domains}
        />
      </div>

      {/* Render the current page's users */}
      <div className="cards" id="user-list">
        {/* Render the pagination buttons */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        <h2>UserList</h2>
        {currentPageUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onSelect={handleUserSelect}
            isSelected={selectedUsers.includes(user)}
            onDeSelect={handleUserDeSelect}
          />
        ))}
      </div>

      {/* Render the team details */}
      {selectedUsers.length > 0 && <Team users={selectedUsers} />}
    </div>
  );
};

export default UserList;
