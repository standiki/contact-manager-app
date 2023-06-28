import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditContact({
  handleChange,
  formData,
  findContact,
  updContact,
}) {
  const { id } = useParams();

  useEffect(() => {
    findContact(id);
  }, [id]);

  const { name, phone, address } = formData;
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-header">edit contact</div>
        <div className="card-body">
          <form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
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
                value={phone}
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
                value={address}
                id="address"
                className="control control-lg"
                placeholder="Enter Address"
              />
            </div>
            <input
              onClick={(event) => updContact(id, event)}
              type="submit"
              className="btn btn-light btn-blo"
              value="Update Changes"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
