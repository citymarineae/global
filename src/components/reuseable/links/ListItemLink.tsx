import { ReactElement } from "react";

// =========================================================
interface ListItemLinkProps {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
  thum?: string; // Optional prop for thumbnail image
}
// =========================================================

export default function ListItemLink({
  href,
  title,
  thum, // Added `thum` to the props
  liClassName = "nav-item",
  linkClassName = "nav-link"
}: ListItemLinkProps) {
  return (
    <li className={liClassName}>
      <a className={linkClassName} href={href}>
        {thum && <img src={thum} alt={title.toString()} />} {/* Render the image if `thum` is provided */}
        {title}
      </a>
    </li>
  );
}
