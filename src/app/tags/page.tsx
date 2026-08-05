import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "../components/ui/navbar";
import { MonsterDatabase } from "../components/data/MonsterDatabase";
import { SingleLineList } from "../components/ui/SingleLineList";
import TypeButton from "../components/ui/TypeButton";
import { Tag } from "../components/data/Tag";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";


export default function TagsPage() {

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
                        label: "Tags",
                        href: "/Tags.html",
                      }
                    ]}
                  />
        <h1>Types</h1>
        <SingleLineList items={m} renderItem={(monsterType) => ( <TypeButton data={db.getMonsterType(monsterType)} /> )}/>

    </div>



  );
}