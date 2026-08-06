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

        <p>
          Abilities are traits that give Novamon special properties in battle. Novamon have one main ability that can be changed, and 1-2 passive abilities that are permanent.
        </p>
    </div>

  );
}