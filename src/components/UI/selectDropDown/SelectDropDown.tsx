import React from 'react';
import Multiselect from "multiselect-react-dropdown";
import classes from "./SelectDropDown.module.scss";
import data from '../../../mock/tables';


const SelectDropDown = () => {

    return (
        <div className="App">
        <Multiselect
          isObject={false}
          onRemove={(event) => {
            console.log(event);
          }}
          onSelect={(event) => {
            console.log(event);
          }}
          options={data.products.map(p=>p.product)}
          showCheckbox
        />
      </div>
    );
};

export default SelectDropDown;