import * as React from 'react';

const Dropdown = () => {

 const [value, setValue] = React.useState();

 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div>

     <label>

       currency

       <select value={value} onChange={handleChange}>

         <option value="dollar">$ Dollar</option>

         <option value="pound">£ pound </option>

         <option value="euro"> € Euro</option>

         <option value="ruppee">₹ Rupee</option>

       </select>

     </label>

     <p> {value}</p>

   </div>

 );

};

export default Dropdown;
