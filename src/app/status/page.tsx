import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "../components/ui/navbar";
import { MonsterDatabase } from "../components/data/MonsterDatabase";
import { SingleLineList } from "../components/ui/SingleLineList";
import TypeButton from "../components/ui/TypeButton";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";

export default function MoveCategoriesPage() {

  const db = MonsterDatabase.getInstance();

  const m = db.getAllTypeKeys();


  return (

    <div>

      <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Status",
                        href: "/status.html",
                      }
                    ]}
                  />
        <h1>Statuses</h1>

        <p>
          Statuses are debuffs that can be inflicted with moves and abilities. Pages for them are still being built.
        </p>

        
    </div>



  );
}