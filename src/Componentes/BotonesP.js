import { useState } from "react";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

function BotonesP() {
    const [radioValue, setRadioValue] = useState('0');
  
    const radios = [
      { name: '1 a 10', value: '1' },
      { name: '11 a 50', value: '2' },
      { name: '51 a 250', value: '3' },
      {name: '+250', value:'4' },
    ];
  
    return (
      <>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-info"}
              name="radio"
              size="sm"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  

export default BotonesP;