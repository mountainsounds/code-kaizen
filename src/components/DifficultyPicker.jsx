import React from 'react';



export default function DifficultyPicker() {
  return (
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
  )
}