import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <Card sx={{ minWidth: 275, margin: '20px' }}>
      <CardContent>
        <Typography 
          sx={{ fontSize: 14, textAlign: 'center' }} 
          color="text.secondary" 
          gutterBottom
        >
          {post.category}
        </Typography>
        <Link to={`/post/${post.id}`}>
          <Typography 
            variant="h4" 
            component="div"
            sx={{ textAlign: 'center' }}
          >
            {post.name}
          </Typography>
        </Link>
        <Typography 
          sx={{ mb: 1.5, textAlign: 'center' }} 
          color="text.secondary"
        >
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
