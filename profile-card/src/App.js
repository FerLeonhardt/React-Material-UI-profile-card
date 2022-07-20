import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid container >
          <ProfileCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
