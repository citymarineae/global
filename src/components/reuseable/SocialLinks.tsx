// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 4, icon: "uil uil-linkedin", url: "https://www.linkedin.com/company/city-insurance-brokers/" },
  { id: 5, icon: "uil uil-youtube", url: "https://www.youtube.com/channel/UCnXWVnX-lKHY0Cq_DwOnSNw" }
];

export default function SocialLinks({ className = "nav social social-white mt-4" }: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
}
