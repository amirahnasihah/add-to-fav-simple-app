// import { useState } from "react";

export default function Header({ keyword, handleSetKeyword }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState(false);

  return (
    <div>
      {/* SEARCH BAR */}
      <form>
        <input
          type="text"
          placeholder="search something..."
          value={keyword}
          onChange={handleSetKeyword}
        />
        {/* <button type="submit">Search</button> */}
      </form>

      {/* LOG OUT */}
      <button>Log Out</button>
    </div>
  );
}
