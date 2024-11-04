// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink"; // LOCAL CUSTOM COMPONENTS

import { ourSectors } from "data/navigation";

// Define types for the sector items
interface Sector {
  id: string | number;
  url?: string; // URL can be undefined if it has children
  title: string;
  thum?: string; // Thumbnail image, can be optional
  children?: Sector[]; // Nested sectors (for submenus)
}

export default function NavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Our Sectors"
        className="nav-link dropdown-toggle"
      />

      <ul className="dropdown-menu">
        {ourSectors.map(({ id, url, title, thum, children }: Sector) => {
          if (!url && children) {
            return (
              <li className="dropdown dropdown-submenu dropend" key={id}
              data-bs-dismiss="offcanvas">
                {/* You can add more custom components or logic here for nested children */}
              </li>
            );
          }

          return (
            <ListItemLink
              key={id}
              href={url || "#"}
              title={title}
              thum={thum}
              linkClassName="dropdown-item"
            />
          );
        })}
      </ul>


    </li>
  );
}
