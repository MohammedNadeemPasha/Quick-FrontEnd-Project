import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const Card = ({name, email, id}) => {
	return(
		<div class='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;