import React from "react";
import { useState } from "react";

function Form({movieSearch}) {
  const [form, setForm] = useState({ // state to hold the data of the form
    searchTerm: "" // initial value of the search term
  })

  const handleChange = (e) => { // e accepts an event ON handles
    console.log(e.target.value)
    setForm({
      ...form,
      searchTerm: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default behavior of refreshing the page
    
    movieSearch(form.searchTerm);  //. notation to reach the object searchTerm in the function
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={form.searchTerm} onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form;