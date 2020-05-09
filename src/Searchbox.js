import React from 'react';

const Searchbox=({searchfield , searchchange} )=>{
return (
	<div>
	<input className='pa3 b3 b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={searchchange}/>
    </div>
    );

}
export default Searchbox;