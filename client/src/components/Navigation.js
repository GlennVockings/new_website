export const Navigation = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary border-t-1/2 border-tertiary">
      <div className="container mx-auto">
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fixtures">Fixtures</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/table">Table</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
