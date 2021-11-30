import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

function Main(props) {
  const { post} = props;

  return (
  
      <Card  className="CartasPr">
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 100 , display: { xs: 'none', sm: 'initial' } }}
          height={100}
          image={post.imagen}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.descripcion}
          </Typography>
          <Button >Ver mas</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
Main.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;