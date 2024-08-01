import { Container, Box } from '@mui/material';
import CustomAppBar from './CustomAppBar';

const Layout = ({ children, ...appBarProps }) => {
  return (
    <div>
      <CustomAppBar {...appBarProps} />
      <Container>
        <Box sx={{ my: 4 }}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
