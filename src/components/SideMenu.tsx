import { SideMenuType } from "@/types/appTypes";

const SideMenu = ({ onClickItem, activeSection }: SideMenuType) => {
  const item = (id: string, label: string) => {
    const isActive = activeSection === id;
    return (
      <li className={isActive ? "active" : undefined}>
        <a
          href={`#${id}`}
          onClick={onClickItem}
          aria-current={isActive ? "page" : undefined}
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <nav id="mobile-navigation" className="menu" aria-label="Section navigation">
      <ul>
        {item("hello", "Home")}
        {item("experience", "Experience")}
        {item("project", "Projects")}
        {item("blog", "Blog")}
        {item("contact", "Contact")}
      </ul>
    </nav>
  );
};

export default SideMenu;
