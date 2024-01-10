import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function CharacterDetail() {

  let [character, setCharacterData] = useState({})

  const { id } = useParams()
  const charid = { id }

  useEffect(() => {
    axios.get('http://127.0.0.1:1332/api/get')
    .then(function (res) {
      // handle success
      setCharacterData(res.data[0])
    })
    .catch((e) => { console.log(e) })
  })

    


  return (
  <main id="main_area">
    <div className="wrapper">
          <div className="CharacterDetail">
            <h1 className='charTitle'>Character Name 1 { character.char_firstname } { character.char_lastname } NA KALIBANGON</h1>
            <p className='charTitle'>Character detail with an of { id }  here...</p>
          </div>
      </div>
  </main>
  )
}

export default CharacterDetail