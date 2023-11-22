import './Form.css'

export default function form() {
    return (
      <div className="container">
        <form className="form">
          <h1 className="text-3xl text-center font-semibold p-6">Form</h1>
          <div form-sub>
            <label className="label">Name</label>
            <input type="text" placeholder="Name" className="input" />
          </div>
          <div form-sub>
            <label className="label">Age</label>
            <input type="text" placeholder="Age" className="input" />
          </div>
          <div form-sub>
            <label className="label">Email</label>
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div form-sub>
            <label className="label">Phone No.</label>
            <input type="text" placeholder="Phone No." className="input" />
          </div>
          <div className="submit-btn">
            <button className="btn">Submit</button>
          </div>
        </form>     
        
      </div>
    );
  }