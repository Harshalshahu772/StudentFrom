import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { states } from "./ObjeactStore";

const StudentFrom = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");



const arrayState=states.map((value:any)=>{
  console.log("value",value)
  return (
    <>
     <option>{value.Title}</option>
    </>
  )
})






  return (
    <>
      <Container>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onInput={(event: any) => setUserName(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input
              type="Email"
              className="form-control"
              value={lastName}
              onInput={(event: any) => setLastName(event.target.value)}
              id="inputPassword4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              LastName
            </label>
            <input
              type="Email"
              className="form-control"
              value={emailName}
              onChange={(event: any) => setEmailName(userName +""+ lastName)}
              id="inputPassword4"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              {arrayState}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              city
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default StudentFrom;
