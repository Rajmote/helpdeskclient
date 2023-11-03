import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const Login= () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Welcome to <span id="company"> </span> Customer Help Desk Service
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div>
          <table>
            <tr>
              <td>
                <Typography variant="h6">Role</Typography>
              </td>
              <td>
                <Select id="roles">
                  <MenuItem value={0}>------------ Select ------------</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Business Executive</MenuItem>
                  <MenuItem value={3}>Technician</MenuItem>
                  <MenuItem value={4}>Customer</MenuItem>
                </Select>
              </td>
            </tr>

            <tr>
              <td>
                <Typography variant="h6">Username</Typography>
              </td>
              <td>
                <TextField id="txtusername" label="Enter Username" variant="outlined" />
              </td>
            </tr>

            <tr>
              <td>
                <Typography variant="h6">Password</Typography>
              </td>
              <td>
                <TextField id="txtpassword" type="password" label="Enter Password" variant="outlined" />
              </td>
            </tr>

            <tr>
              <td> </td>
              <td>
                <Button id="btnlogin" variant="contained" color="primary">
                  Login
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </Container>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Login;
