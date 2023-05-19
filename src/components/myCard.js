import React from "react";

// import crdImg from "./images/dummyImg.jpg";
// import User from "./images/model.jpg";
import cardList from "../api/data";

function myCard() {
  console.log("cardList", cardList);
  return (
    <>
      {cardList.map((item) => {
        console.log("hello", item);
        return (
          <div className="mycard" key={item.id}>
            {/* Image box  */}
            <div className="img-box">
              <img src={item.img} alt="" />
              {/* image overlay div  */}
              <div className="img-over-box">
                <h6>{item.title}</h6>
                <div className="btn-div">
                  <button type="button" className="btn">
                    <i class="fa-solid fa-folder-plus"></i>
                  </button>
                  <button type="button" className="btn">
                    <i class="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mycard-body">
              {/* avtar  */}
              <div className="avtar">
                <img src={item.avtar} alt="" />
                <h6>{item.prifileName}</h6>
              </div>

              <div className="mini-box">
                <span>
                  <a href="/">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                  <label>55</label>
                </span>
                <span>
                  <a href="/">
                    <i class="fa-solid fa-eye"></i>
                  </a>
                  <label>74</label>
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
      

      
    </>
  );
}

export default myCard;
