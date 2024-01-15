type SideMenuProps = {
  onClickItem: () => void;
};

const SideMenu = ({ onClickItem }: SideMenuProps) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#hello" onClick={onClickItem}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClickItem}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={onClickItem}>
            Experience
          </a>
        </li>
        <li>
          <a href="#blog" onClick={onClickItem}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClickItem}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
