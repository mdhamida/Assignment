import React, { useState, useEffect } from "react";
// import "../CSS/pokemon.css";


const Assignment = () => {
  const [data, setData] = useState([]);
  


  const url = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";

  const fetchData = async () => {
    const response = await fetch(url);
    const Data = await response.json();
    setData(Data.results);
    console.log(Data);
    
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div  className="container fluid d-grid ">
        <div className="row g-1">
          {data.map((value, i) => {
            return (
              <div className="col">
                <div key={i} className="card m-auto" id="card" style={{ width: "20rem" ,height:"9rem"}}>
              
                  <div style={{background:"white" }} class="card-body">
                    <h5 class="card-title text-center">{value.gender}{value.nat}</h5>
                    <div className="mt-3 info">
                    
                      <div className="detailbtn">

                      <h5 class="card-title text-center">Miss Mónica León </h5>

                      <p style={{color:"red"}} class="card-text">
                        {value.email}{" "}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assignment;
