"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/navigation";
import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import { usePropertyContext } from "@/contexts/PropertyContext";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem as SelectMenuItem,
} from "@mui/material";

const pages = [
  { name: "Home", url: "/home" },
  { name: "Properties", url: "/properties" },
  { name: "About Us", url: "/about-us" },
  { name: "Contact", url: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const router = useRouter();
  const { addProperty, isModalOpen, setModalOpen } = usePropertyContext();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // State for the selected filter option and search query
  const [filter, setFilter] = React.useState("location");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateTo = (url: string) => {
    handleCloseNavMenu();
    router.push(url); // Navigate and close the menu
  };

  const handleSearch = () => {
    // Implement your search logic here based on filter and searchQuery
    console.log(`Searching for ${searchQuery} with filter: ${filter}`);
    // Example: navigateTo(`/properties?${filter}=${searchQuery}`);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const CustomSelect = styled(Select)(({ theme }) => ({
    color: "white",
    backgroundColor: theme.palette.grey[900], // Dark background color
    borderColor: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiSelect-select": {
      padding: theme.spacing(1), // Smaller padding as requested
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.light, // Lighter color on hover
    },
    "& .MuiSvgIcon-root": {
      color: "white", // White color for the dropdown icon
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <AppBar position="static" className="border-b">
      <Toolbar
        disableGutters
        className="dark:bg-gray-900"
        sx={{ backgroundColor: "black" }}
      >
        <Image
          src={"/logo.png"}
          alt="logo"
          height={100}
          width={100}
          onClick={() => navigateTo("/home")}
        />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map(({ url, name }) => (
              <MenuItem key={name} onClick={() => navigateTo(url)}>
                <Typography sx={{ textAlign: "center" }}>{name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(({ url, name }) => (
            <Button
              key={name}
              onClick={() => navigateTo(url)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {name}
            </Button>
          ))}
        </Box>

        <CustomSelect
          labelId="filter-select-label"
          value={filter}
          onChange={(e: any) => setFilter(e.target.value)}
          sx={{ color: "white", borderColor: "red", padding: 0 }}
        >
          <SelectMenuItem value="location">Location</SelectMenuItem>
          <SelectMenuItem value="price">Price</SelectMenuItem>
          <SelectMenuItem value="propertyType">Property Type</SelectMenuItem>
        </CustomSelect>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(); // Trigger search on Enter key
            }}
          />
        </Search>

        <a
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-primary-200 dark:focus:ring-primary-900"
        >
          List Your Property
        </a>

        {/* User menu functionality commented out */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
