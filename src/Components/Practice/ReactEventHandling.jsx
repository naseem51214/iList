import React, { useState } from 'react'

export default function ReactEventHandling() {

    const [form, setForm] = useState(
        {
            email: "",
            phone: ""
        }
    );

    const handler = (e)=>
        {
            setForm({... form,[e.target.name]:e.target.value})
        }

  return (
    <div>
            <input type="text" name="email" value={form.email?form.email:""} onChange={handler}/>
            <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handler}/>
    </div>
  )
}
