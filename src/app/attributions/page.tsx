import { MonsterDatabase } from "../components/data/MonsterDatabase"
import LicenseLink from "../components/ui/LicenseLink";
import { SmallMonsterBadge } from "../components/ui/SmallMonsterBadge";

export default function AttributionsPage(){

   const db = MonsterDatabase.getInstance();
   const monsters = db.getAllTuxemon();

   

   return (
   <div>
   <h1>Attributions</h1> 
   <p>
   Novarangers uses a number of <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Creative Commons Attribution-ShareAlike</a> licensed assets (CC-BY-SA).
   They are mostly sourced from <a href="https://github.com/Tuxemon/tuxemon">Tuxemon</a> an open source monster catching game.
   These assets are free to use, however they require attribution.
   If you want to use these assets for your own work you must also attribute the original creators in a similar way to below or how <a href="https://github.com/Tuxemon/Tuxemon/blob/development/ATTRIBUTIONS.md">Tuxemon does it</a>.
   </p>

   <h2>Tuxemon Attributions</h2>

   <ul>
      {monsters.map((product) => (
          <li key={product.monsterKey} className="p-4 border rounded shadow-sm">
            <a href={product.tuxemonLink}>{db.getTuxemonName(product)}</a> - by &nbsp;{db.getContributorsForMonster(product).map((c) => (<><a href={c.contributorLink} key={c.contributorKey}>{c.contributorName}</a>,</>))} - <LicenseLink license={product.license} /> - Used in - <SmallMonsterBadge monster={product} />
          </li>
        ))}
   </ul>

   </div>


   )
}