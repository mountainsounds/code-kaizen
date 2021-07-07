import React, { useState } from 'react';


export default function DifficultyPicker() {
  return (
		<section className='difficultySection'>

			<h3> Select A Difficutly </h3>

    	<fieldset className='difficultyPicker'>

      	<label>
			  	<input type="radio" name='radio' />
			  	<span> Introductory </span>
		  	</label>

      	<label>
			  	<input type="radio" name="radio" />
			  	<span> Novice </span>
		  	</label>

      	<label>
			  	<input type="radio" name="radio" />
			  	<span> Intermediate </span>
		  	</label>

      	<label>
			  	<input type="radio" name="radio" />
			  	<span> Advanced </span>
		  	</label>

    	</fieldset>
		</section>
  )
}