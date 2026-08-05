import Link from "next/link";



export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <a
        href={"/index.html"}
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Novarangers
      </a>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href={"/monsters.html"}>Novamon</Link>

        <Link href={"/moves.html"}>Moves</Link>

        <Link href={"/locations.html"}>Locations</Link>

        <Link href={"/attributions.html"}>Attributions</Link>
      </div>
    </nav>
  );
}