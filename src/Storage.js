import React, { useState,useRef } from 'react';

const Storage = () => {
const inputRef=useRef();
const passRef=useRef();
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
     var data= JSON.parse(localStorage.getItem('user'));  
     if(data.username==name && data.password==pwd){
         console.log('User valid');
     }
     else console.log('Invalid User');
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
         ref={inputRef}
            placeholder="Name"
            value={name}
            onChange={() => setName(inputRef.current.value)}
         />
         <h1>Password of the user:</h1>
         <input
           ref={passRef}
            placeholder="Password"
            value={pwd}
            onChange={() => setPwd(passRef.current.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default Storage;