import React from 'react'

export default function Input() {
  return (
    <div className='container'>
      <div className='card mb-3'>
        <div className='card-header'>add contact</div>
          <div className='card-body'>
            <form>
              <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input 
                  type='text'
                  name='name'
                  id='name'
                  className='control control-lg'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-control'>
                <label htmlFor="phone">Phone</label>
                <input 
                  type='text' 
                  name='phone' 
                  id='phone' 
                  className='control control-lg'
                  placeholder='Enter Phone' 
                />
              </div>
              <div className='form-control'>
                <label htmlFor="phone">Address</label>
                <input 
                  type='text' 
                  name='address' 
                  id='address' 
                  className='control control-lg'
                  placeholder='Enter Address' 
                />
              </div>
              <input 
                type='submit'
                className='btn btn-light btn-block'
                value='Add Contact' 
              />
            </form>
          </div>
      </div>
    </div>
  )
}
