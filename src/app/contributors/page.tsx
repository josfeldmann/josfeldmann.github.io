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
import { Breadcrumbs } from "../components/ui/BreadCrumbs";




export default function LocationsPage() {
  // Extract the dictionary of monsters
  const m =  MonsterDatabase.getInstance().getAllContributors();
  return (
    <div>
      <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Contributors",
                        href: "/Contributors.html",
                      }
                    ]}
                  />
        <h1>Contributors</h1>
    </div>
    
  );
   
}
