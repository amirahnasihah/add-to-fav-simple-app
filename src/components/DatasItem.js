import React from "react";
// import { AiFillLike } from "react-icons/ai";

export default function DatasItem({ news, updateMyFav }) {
  const { id, name, description } = news;

  return (
    <div>
      <h3>
        <strong>
          {id}. {name}{" "}
          {/* <AiFillLike
						style={{ color: "yellow", cursor: "pointer" }}
						onClick={() => {
							console.log("updateMyFav");
						}}
					/> */}
          <button style={{ cursor: "pointer" }} onClick={updateMyFav}>
            Like
          </button>
        </strong>
      </h3>
      <p>{description}</p>
    </div>
  );
}
