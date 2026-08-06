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
                        label: "Move Categories",
                        href: "/movecategories.html",
                      }
                    ]}
                  />
        <h1>Move Categories</h1>

        <p>
        Every move in the game has a category that determines how it calculates damages or effects. Currently the categories are Physical, Special, and Status.
        </p>

        <table>
          <tr><th>Name</th><th>Icon</th><th>Description</th></tr>
           { db.getAllMoveCategories().map((mc) => (
            <tr key={mc.key}><td>{mc.name}</td><td><MoveCategoryBadge data={mc}/></td><td>{mc.description}</td></tr>
            ))
          }
          </table>
          

        
    </div>



  );
}