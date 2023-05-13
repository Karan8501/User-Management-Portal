import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentPage: 1,
    searchQuery: "",
    filters: {
      domain: "",
      gender: "",
      availability: "",
    },
    selectedUsers: [],
    domains: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state.filters[filterName] = filterValue;
    },
    selectUser: (state, action) => {
      const user = action.payload;
      if (user.available) {
        if (!state.selectedUsers.includes(user)) {
          state.selectedUsers.push(user);
        } else {
          alert("user alreading listed in team");
        }
      } else {
        alert("user is not availble for work");
      }
    },
    deselectUser: (state, action) => {
      const userId = action.payload;
      state.selectedUsers = state.selectedUsers.filter(
        (user) => user.id !== userId
      );
    },
    clearSelectedUsers: (state) => {
      state.selectedUsers = [];
    },
    setDomain: (state, action) => {
      const users = action.payload;
      users.map(({ domain }) => {
        return state.domains.push(domain);
      });
    },
  },
});

export const {
  setUsers,
  setCurrentPage,
  setSearchQuery,
  setFilter,
  selectUser,
  deselectUser,
  clearSelectedUsers,
  setDomain,
} = userSlice.actions;

export default userSlice.reducer;
