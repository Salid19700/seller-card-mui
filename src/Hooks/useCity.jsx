import { useState } from "react";
import React from "react";

export const useCity = (event) => {
    const [state, setState] = useState('Tehran');

    const handleChange = (event) => {
        setState(event.target.value);
        console.log(state);
      };

      return[state, handleChange];
};
