import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom'; // For routing


const drawerWidth = 240;

function HeaderComponent() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    // Dynamic nav items with routes
    const navItems = [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' },
        // Add more routes as needed
    ];

    useEffect(() => {
        // Check if the token exists in localStorage on component mount
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // If token exists, set isAuthenticated to true
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        localStorage.removeItem('timeout    ')
        setIsAuthenticated(false); // Update state
        setAnchorEl(null); // Close the menu
        navigate('/')
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)', // Gradient applied here
                }}
            >
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <img
                            src="../logo.png" // Replace with the actual path to your logo
                            alt="Logo"
                            style={{ height: 40, marginRight: 8 }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            getDataFilledDotCom
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                sx={{ color: '#fff' }}
                                component={Link}
                                to={item.route} // Use route dynamically
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Profile Menu */}
                    {isAuthenticated && (
                        <IconButton
                            color="inherit"
                            onClick={handleProfileMenuOpen}
                            sx={{ ml: 2 }}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Profile Dropdown Menu */}
            {isAuthenticated && (
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileMenuClose}
                    sx={{
                        mt: '45px',
                    }}
                >
                    <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            )}

            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default HeaderComponent;
