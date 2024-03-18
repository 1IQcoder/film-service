import React from 'react'
import axios from 'axios'

const Form = function ({children, ...props}) {
  
    async function addActor(data) {
      try {
        const response = await axios.post('https://filmsdb.onrender.com/api/actors/add', {
          firstname: data.firstname,
          lastname: data.lastname,
          birthday: '08.09.2008',
          biography: data.biography,
          imgPath: data.imgPath
        });

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    function handleSubmit(e) {
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      addActor(data)
    }

    return (
      <form onSubmit={handleSubmit} action={props.url} method={props.method}>
        {children}
      </form>
    )
}

export default Form;