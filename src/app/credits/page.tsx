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
import { FlexibleGrid } from "../components/ui/FlexibleGrid";
import { ContributorBadge } from "../components/ui/ContributorBadge";




export default function LocationsPage() {
  // Extract the dictionary of monsters
  const tux = MonsterDatabase.getInstance().getTuxmonContributors();
  const nonTux = MonsterDatabase.getInstance().getNonTuxemonContributors();
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
                        href: "/creditss.html",
                      }
                    ]}
                  />
        <h1>Credits</h1>

        <p>
          These are a list of different artists whose designs I used in the game. Some of them I commissioned directly for this project while others are artists that contributed to open source projects that I used designs from. You can click on them to see which monsters thei sprites were used in.
        </p>
        <p>For more information about the open source assets please check out the <a href="/attributions.html">attributions page</a>.</p>

    <h2>Artists I commissioned</h2>
    <p>
      These are artists I directly purchased sprites/designs from or commissioned via fiverr/twitter.
    </p>

    <FlexibleGrid
      items={nonTux}
      ItemComponent={ContributorBadge}
      getKey={(contributor) => contributor.contributorKey}
      minimumItemWidth={160}
      gap={24}
    />
    

    <h2>Tuxemon/Open Source Credits</h2>
    <p>
      These are artists and designers who contributed to Tuxemon and/or Creative Commons Licensed Fakemon collections. I can legally use their deisngs and sprites as long as I credit them which I do more explicitly in the <a href="/attributions.html">attributions page</a>.
    </p>

      <FlexibleGrid
      items={tux}
      ItemComponent={ContributorBadge}
      getKey={(contributor) => contributor.contributorKey}
      minimumItemWidth={160}
      gap={24}
    />
    

    </div>
    
  );
   
}
