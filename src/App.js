import axios from 'axios';
import { useEffect, useState } from 'react';
//imports of compponents
import './App.css';
import Defination from './Components/Defination/Defination';
import Header from './Components/Header/Header';
import MaterialUISwitch from "./materialuiSwitch/MaterialUISwitch"

//material ui imports
import { styled, Switch } from '@mui/material/';
import { Container } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';




function App() {
  const [word, setword] = useState("")
  const [meaning, setmeaning] = useState([])
  const [language, setlanguage] = useState("en")
  const [lightTheme, setlightTheme] = useState(true)

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
      setmeaning(data.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dictionaryApi();
  }, [word, language])
  console.log(lightTheme);

  return (
    <div className="App" style={{
      height: "100vh",
      backgroundColor: lightTheme ? "#fff" : "#282c34",
      color: lightTheme ? "black" : "white",
      transition: "all 0.5s linear",
    }}>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh" ,justifyContent:"space-evenly" }}>
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightTheme ? "Light":"Dark" } Mode</span>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            onChange={()=>setlightTheme(!lightTheme)}
          // label="MUI switch"
          />
        </div>
        <Header language={language} setlanguage={setlanguage} word={word} setword={setword} lightTheme={lightTheme} />
        {meaning &&
          (
            <Defination word={word} meaning={meaning} language={language} lightTheme={lightTheme} />
          )
        }
      </Container>
    </div>
  );
}

export default App;
