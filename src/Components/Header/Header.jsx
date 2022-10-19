import React from 'react'
import { debounce } from "lodash";
import { Container, MenuItem } from '@material-ui/core'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./Header.css"
import categories from '../../data/Langauges'
import { useState } from 'react';



const Header = ({ language, setlanguage, word, setword ,lightTheme}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightTheme? '#282c34':'#fff'
      },
      mode: lightTheme?'light':'dark',
    },
  });

  const handleWord = debounce((text) => {
    setword(text)
  }, 25)

  const handleChange = (e) => {
    setlanguage(e)
    setword("")
  }

  return (
    <div className='Header'>
      <span className='Title'> {word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search For Words"
            variant="standard"
            className='search'
            value={word}
            onChange={(e) => { handleWord(e.target.value) }}

          />
          <TextField
            select
            variant="standard"
            className='select'
            value={language}
            label="Langauge"
            onChange={(e) => { handleChange(e.target.value) }}
          // helperText="Please select your Language"
          >
            {
              categories.map((language) => (
                <MenuItem value={language.label} key={language.label}>{language.value}</MenuItem>
              ))
            }
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header