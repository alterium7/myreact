import React from "react";
import { characterData } from '../characterdata';

const mystyle = {
  color: "white",
  position: "relative"
}

const CharacterDetails = () => {
  return (
    
      <div className="stock-container" style={mystyle}>
        {characterData.map((data, key) => {
          return (
            <div key={key}>
              {key +
                ". " + 
                data.charactername +
                " , " +
                data.description +
                " ," +
                data.job}
            </div>
          );
        })}
      </div>
 
  );
};

export default CharacterDetails



