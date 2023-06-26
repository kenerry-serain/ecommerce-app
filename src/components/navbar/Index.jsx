import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Component } from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ bgcolor: "black" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Ecommerce
                        </Typography>
                        <Stack direction="row">
                            <Link to="/stock">
                                <Button color="inherit">Stock</Button>
                            </Link>
                            <Link to="/product">
                                <Button color="inherit">Product</Button>
                            </Link>
                            <Link to="/order">
                                <Button color="inherit">Order</Button>
                            </Link>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}
