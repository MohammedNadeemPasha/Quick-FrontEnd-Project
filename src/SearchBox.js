import React from 'react'

const SearchBox = ({searchChange}) =>{
	return(
		<div class='pa2'>
			<input class='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
