import React from "react";

const detailItem = ({ users }) => {
  return (
    <div>
      <h2>List of Products</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { image, id, title, description, price } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <img
                        src={image}
                        className="rounded"
                        width="155"
                        alt="pic"
                      />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{title} </h4>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">{description}</span>{" "}
                          <span className="number1">Price:{price}$</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default detailItem;
