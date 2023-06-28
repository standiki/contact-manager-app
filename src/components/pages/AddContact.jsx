export default function AddContact({ formData, handleSubmit, handleChange }) {
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
                name="name"
                value={formData.name}
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
                name="phone"
                value={formData.phone}
                id="phone"
                className="control control-lg"
                placeholder="Enter Phone"
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                value={formData.address}
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
