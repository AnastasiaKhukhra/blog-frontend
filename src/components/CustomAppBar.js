import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const CustomAppBar = ({ title, showCreateButton, showEditButton, showDeleteButton, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#283593',
        padding: 2,
      }}
    >
      <Toolbar>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          {title}
        </Typography>
        {showCreateButton && (
          <Button component={Link} to="/create" color="inherit">
            Create New Post
          </Button>
        )}
        {showEditButton && onEdit && (
          <Button onClick={onEdit} color="inherit" sx={{ marginRight: 2 }}>
            Edit
          </Button>
        )}
        {showDeleteButton && onDelete && (
          <Button onClick={onDelete} color="inherit">
            Delete
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
