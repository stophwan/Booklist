import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import TopNav from './components/TopNav'
import BookList from './components/BookList'
import BookDeatail from './components/BookDetail'
import Container from '@material-ui/core/Container';


function App() {

  return (
    <div>
      <TopNav/>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BookList />
          </Grid>
          <Grid item xs={8}>
            <BookDeatail />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default App;
