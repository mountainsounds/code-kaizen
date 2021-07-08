import React, { useState } from 'react';


export default function DifficultyPicker({currentDifficulty, setCurrentDifficulty}) {

	let handleDifficultyChange = (event) => {

		let newDifficulty = event.target.value;
		setCurrentDifficulty(newDifficulty);

	}


  return (
		<section className='difficultySection'>

			<h3> Select A Difficutly </h3>

    	<fieldset onChange={handleDifficultyChange} className='difficultyPicker'>

      	<label>
			  	<input value='novice' type="radio" name='radio'/>
			  	<span> Novice </span>
		  	</label>

      	<label>
			  	<input value = 'intermediate' type="radio" name="radio" />
			  	<span> Intermediate </span>
		  	</label>

      	<label>
			  	<input value = 'advanced' type="radio" name="radio" />
			  	<span> Advanced </span>
		  	</label>

    	</fieldset>
		</section>
  )
}