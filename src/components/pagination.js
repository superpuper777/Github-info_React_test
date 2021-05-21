import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      padding: '0 40px',
      float: 'right'
    },
    '& .Mui-selected': {
      color: '#ffffff',
      backgroundColor: "#0064EB"
     },
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="pagination">
        <span className="pagination__pages">5-8 of 249 items</span>
        <Pagination count={10} shape="rounded"/>
      </div>
    </div>
  );
}