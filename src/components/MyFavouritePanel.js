export default function FavPanel({ handleSetKeyword, myFav, clearMyFav }) {
  // Get favorites from local storage on component mount

  return (
    <div>
      <h2>
        My Favourite!{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>{" "}
        <button onClick={clearMyFav}>CLEAR</button>
      </h2>
      <div>
        <ul>
          <li>D</li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
