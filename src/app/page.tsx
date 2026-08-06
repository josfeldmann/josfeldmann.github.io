import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/ui/navbar";

export default function Home() {
  return (
    <div>
      <h2>Novarangers: Seed</h2>
      <p>
        Novarangers: Seed is an upcoming monster catching RPG. 
        It is a turn based RPG where you collect monsters and free an island from the controls of Team Seed, a terrorist oganization.
        The game has 200+ monsters called Novamon and should take ~5 hours to beat. 
        While the game is shorter I am making a bunch of challenge and randomization modes to make the game more replayable.
        My goal with this game is to make a solid and complete framework that I will open source and then use to make larger games.
      </p>

      <h2>Design</h2>
      <p>
        Here are some of the design decisions I have made concerning game balance:
      </p>
      <ul>
        <li>Almost all Novamon have two types, with gimmicky exceptions</li>
        <li>Final stage Novamon have the same Base Stat Totals, except for gimmicky exceptions</li>
        <li>All Novamon have passive abiilities tied to their design in addition to normal customizable abilities</li>
        <li>RNG has been removed as a combat mechanic. Accuracy does not exist, stat changes are percent based, and statuses are charge based</li>
      </ul>

      <h2>All Designs and Sprites are Free to Use</h2>
      <p>
        One of the important parts of Novarangers, and a major motivation for me to create the game, is that all Monster Designs and sprites are licensed under some form of a Creative Commons License.
        This means anyone can use the designs and sprites here for any type of game with no commercial restrictions or permissions needed.
        You can make mods, fan games, and spin off games, commercial or non commercial, without having to worry about DMCAs as long as you credit the authors apporpriately.
        The framework, code, and other assets for the game itself will also be open sourced eventually after release.
      </p>
    </div>
  )
}
