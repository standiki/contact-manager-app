import React from 'react'

export default function Input() {
  const [contact, setContact] = React.useState({
    contactName: '',
    contactPhone: '',
    contactAddress: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div className='container'>
      <div className='card mb-3'>
        <div className='card-header'>add contact</div>
          <div className='card-body'>
            <form>
              <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input 
                  onChange={handleChange}
                  type='text'
                  name='contactName'
                  value={contact.contactName}
                  id='name'
                  className='control control-lg'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-control'>
                <label htmlFor="phone">Phone</label>
                <input 
                  onChange={handleChange}
                  type='text' 
                  name='contactPhone' 
                  value={contact.contactPhone}
                  id='phone' 
                  className='control control-lg'
                  placeholder='Enter Phone' 
                />
              </div>
              <div className='form-control'>
                <label htmlFor="phone">Address</label>
                <input 
                  onChange={handleChange}
                  type='text' 
                  name='contactAddress' 
                  value={contact.contactAddress}
                  id='address' 
                  className='control control-lg'
                  placeholder='Enter Address' 
                />
              </div>
              <input 
                onChange={handleChange}
                type='submit'
                className='btn btn-light btn-blo'
                value='Add Contact' 
              />
            </form>
          </div>
      </div>
    </div>
  )
}
