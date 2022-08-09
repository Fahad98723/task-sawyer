import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    open: true,
    mobileOpen: false,
    navbardata: 'TACOM',
    tabledata: {},
  },
  reducers: {
    navbarToggleFolded: (state, action) => {
      state.foldedOpen = !state.foldedOpen;
    },
    navbarOpenFolded: (state, action) => {
      state.foldedOpen = true;
    },
    navbarCloseFolded: (state, action) => {
      state.foldedOpen = false;
    },
    navbarToggleMobile: (state, action) => {
      state.mobileOpen = !state.mobileOpen;
    },
    navbarOpenMobile: (state, action) => {
      state.mobileOpen = true;
    },
    navbarCloseMobile: (state, action) => {
      state.mobileOpen = false;
    },
    navbarClose: (state, action) => {
      state.open = false;
    },
    navbarOpen: (state, action) => {
      state.open = true;
    },
    navbarToggle: (state, action) => {
      state.open = !state.open;
    },
    addNavigationData: (state, action) => {
      state.navbardata = action.payload;
    },
    setTableData: (state, action) => {
      state.tabledata = action.payload;
    },
  },
});

export const {
  navbarToggleFolded,
  navbarOpenFolded,
  navbarCloseFolded,
  navbarOpen,
  navbarClose,
  navbarToggle,
  navbarOpenMobile,
  navbarCloseMobile,
  navbarToggleMobile,
  addNavigationData,
  navbardata,
  setTableData,
} = navbarSlice.actions;

export const selectFuseNavbar = ({ fuse }) => fuse.navbar;

export default navbarSlice.reducer;
