import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

export default function DataSetCard({
  id,
  title,
  description,
  handleDelete,
  handleEdit,
  handleView
}) {
  const clickViewHandler = (event) => {
    event.preventDefault();
    handleView(id);
  };
  const clickEditHandler = (event) => {
    event.preventDefault();
    handleEdit(id);
  };
  const clickDeleteHandler = (event) => {
    event.preventDefault();
    handleDelete(id);
  };
  return (
    <Card sx={{ height: 150 }}>
      <CardContent sx={{ height: '70%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Tooltip title="view" arrow>
          <IconButton onClick={clickViewHandler} color="success">
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="edit" arrow>
          <IconButton onClick={clickEditHandler} color="primary">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <IconButton onClick={clickDeleteHandler} color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

DataSetCard.propTypes = {
  handleView: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
