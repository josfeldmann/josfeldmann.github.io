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




export default function LocationsPage() {
  // Extract the dictionary of monsters
  const m =  MonsterDatabase.getInstance().getAllMonsters();
  return (
    <div>
        <h1>Locations</h1>
    </div>
  );
   
}
