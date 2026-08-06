import Link from "next/link";
import styles from "./NavBar.module.css";

type NavDropdownProps = {
  label: string;
  links: {
    href: string;
    name: string;
  }[];
};

function NavDropdown({ label, links }: NavDropdownProps) {
  return (
    <div className={styles.dropdown}>
      <button type="button" className={styles.dropdownButton}>
        {label} ▼
      </button>

      <div className={styles.dropdownMenu}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/index.html" className={styles.logo}>
        Novarangers
      </Link>

      

      <div className={styles.links}>
        <Link href="/monsters.html">Novamon</Link>

        <NavDropdown
          label="Game Data"
          links={[
            { href: "/moves.html", name: "Moves" },
            { href: "/abilities.html", name: "Abilities" },
            { href: "/types.html", name: "Types" },
            { href: "/tags.html", name: "Tags" },
            { href: "/movecategories.html", name: "Move Categories" },
          ]}
        />

        <NavDropdown
          label="About"
          links={[
            
            { href: "/credits.html", name: "Credits" },
            { href: "/attributions.html", name: "Open Source Attributions" },
            // { href: "/locations.html", name: "Locations" },
            // { href: "/items.html", name: "Items" },
          ]}
        />

      </div>
    </nav>
  );
}