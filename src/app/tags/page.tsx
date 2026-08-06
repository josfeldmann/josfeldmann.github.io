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
                        href: "/tags.html",
                      }
                    ]}
                  />
        <h1>Tags</h1>
        <p>
          Tags are applied to moves in order to group them and apply special effects. Pages for them are in development currently.
        </p>

    </div>



  );
}