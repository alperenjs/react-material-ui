import { Person } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react'


const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const MyComponent = styled(Button)`
background-color: ${props =>
    props.isMobil === "true" ? 'hotpink' : 'black'};

 ${mq[0]}{
      background-color: blue;
      }
      
&:hover  {
    background-color: red;
    }
`;

function App() {

  return (
    <div className="App">
      <MyComponent variant="contained" size='large' startIcon={<Person />}> ALPERssEN </MyComponent>
    </div>
  );
}

export default App;
