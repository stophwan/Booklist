import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Alert from '@material-ui/lab/Alert';
import { likeBook } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    media: {
      height: 296,
      width: 200,
    },
  }));
  
function BookDetail({book, likeBook}) {
    const classes = useStyles();
    if (!book){
        return (
            <Alert severity="warning">책이 선택되지 않았습니다!</Alert>
        )
    }


    return (
        <Card className={classes.root}>
        <CardHeader
            title={book.title}
            subheader={book.subtitle}
        />
        {
            book.img && (
                <CardMedia
                className={classes.media}
                image={book.img}
            />
            )
        }

        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={
                () => {likeBook(book)}}>
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        book: state.selected
    }
}

export default connect(
    mapStateToProps, {likeBook}
)(BookDetail)
