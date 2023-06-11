import React from "react";

export default function Input({ formData, handleSubmit, handleChange }) {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-header">add contact</div>
        <div className="card-body">
          <form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="contactName"
                value={formData.contactName}
                id="name"
                className="control control-lg"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input
                onChange={handleChange}
                type="text"
                name="contactPhone"
                value={formData.contactPhone}
                id="phone"
                className="control control-lg"
                placeholder="Enter Phone"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Address</label>
              <input
                onChange={handleChange}
                type="text"
                name="contactAddress"
                value={formData.contactAddress}
                id="address"
                className="control control-lg"
                placeholder="Enter Address"
              />
            </div>
            <input
              onClick={handleSubmit}
              type="submit"
              className="btn btn-light btn-blo"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
