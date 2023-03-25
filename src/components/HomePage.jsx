import NavBar from "./NavBar";
import PostView from "./PostView";
import "./Homepage.css"

const HomePage = () => {
  return (
    <div id="main">
      <div className="container">
        <NavBar />
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostView />
    </div>
  );
};

export default HomePage;
