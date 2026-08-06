"use client";
export const dynamic = "force-static"; // ensures it's exported as static
import Link from "next/link";
import data from "../../../public/data/monsters.json";
import Script from "next/script";
import { useEffect } from "react";  
import MonsterGrid from "../components/ui/MonsterGrid";
import { MonsterDatabase } from "../components/data/MonsterDatabase";
import monsters from '../../../public/data/monsters.json'
import NavBar from "../components/ui/navbar";
import Movelist from "../components/ui/MoveList";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";




export default function MovesPage() {
  const db = MonsterDatabase.getInstance();


  const m = MonsterDatabase.getInstance().getAllMonsters();
  const l = db.getAllMoves();
  return (
    <div>
      <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Moves",
                        href: "/moves.html",
                      }
                    ]}
                  />
        <h1>Moves</h1>
        <p>
          Moves are what Novamon use to battle eachother and do damage or other effects. Each Novamon can learn 4 moves and has a unique moveset based on its typing, design, and abilities.
        </p>

        <h2>All Moves</h2>

        <Movelist moves={l} />;

    </div>
  );
   
}
