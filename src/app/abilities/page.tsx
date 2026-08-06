import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "../components/ui/navbar";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";

export default function AbilitiesPage() {
  return (

     
    <div>
      <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Abilities",
                        href: "/abilities.html",
                      }
                    ]}
                  />
        <h1>Abilities</h1>
    </div>

  );
}