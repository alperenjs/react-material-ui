import { Person } from '@mui/icons-material';
import { Button } from '@mui/material';
import './App.css';
import styled from '@emotion/styled';

const MyComponent = styled(Button)`
background-color: orange;
&:hover  {
    background-color: red;
  }
`;

function App() {

  return (
    <div className="App">

      <MyComponent variant="contained" size='large' startIcon={<Person />}> ALPERsEN </MyComponent>
    </div>
  );
}

export default App;
