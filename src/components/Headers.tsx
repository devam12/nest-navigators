"use client";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import { alpha, InputAdornment, styled, TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { usePropertyContext } from "@/contexts/PropertyContext";
import { Select, MenuItem as SelectMenuItem } from "@mui/material";
import { useFilterContext } from "@/contexts/FilterContext";

const pages = [
  { name: "Home", url: "/home" },
  { name: "Properties", url: "/properties" },
  { name: "About Us", url: "/about-us" },
  { name: "Contact", url: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const router = useRouter();
  const { addProperty, setModalOpen } = usePropertyContext();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  // State for the selected filter option and search query
  const { filterType, searchValue, setFilterType, setSearchValue } =
    useFilterContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateTo = (url: string) => {
    handleCloseNavMenu();
    router.push(url); // Navigate and close the menu
  };

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

        <Select
          labelId="filter-select-label"
          value={filterType}
          onChange={(e: any) => {
            setFilterType(e.target.value);
            setSearchValue("");
          }}
          size="small"
          sx={{
            color: "white",
            borderRadius: 1,
            marginRight: 1,
            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <SelectMenuItem value="location">Location</SelectMenuItem>
          <SelectMenuItem value="pricelt">Price Lower Than</SelectMenuItem>
          <SelectMenuItem value="priceht">Price Higher Than</SelectMenuItem>
          <SelectMenuItem value="propertyType">Property Type</SelectMenuItem>
        </Select>

        <TextField
          id="outlined-size-small"
          size="small"
          placeholder="Search..."
          value={searchValue}
          onChange={(e: any) => {
            setSearchValue(e?.target?.value);
          }}
          sx={{
            color: "white",
            marginRight: 1,
            "& .MuiInputBase-root": {
              color: "white",
              borderRadius: 1,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />

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
