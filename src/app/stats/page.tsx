import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "../components/ui/navbar";
import { MonsterDatabase } from "../components/data/MonsterDatabase";
import { SingleLineList } from "../components/ui/SingleLineList";
import TypeButton from "../components/ui/TypeButton";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";
import { MonsterMoveCategory } from "../components/data/MonsterMoveCategory";
import { MoveCategoryBadge } from "../components/ui/MoveCategoryBadge";

export default function StatsPage() {

  const db = MonsterDatabase.getInstance();


  return (

    <div>

      <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Stats",
                        href: "/stats.html",
                      }
                    ]}
                  />
        <h1>Stats</h1>

        <p>
        Every Novamon has 6 stats it uses in battle. HP, Attack, Defense, Special Attack, Special Defense, and Speed. Pages for these stats are still being built.
        </p>

          

        
    </div>



  );
}