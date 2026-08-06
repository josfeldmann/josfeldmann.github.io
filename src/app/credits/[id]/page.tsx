import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
import MonsterGrid from '@/app/components/ui/MonsterGrid';
import { Breadcrumbs } from '@/app/components/ui/BreadCrumbs';
export type MonsterDictionary = Record<string, Monster>;


export async function generateStaticParams() {
  
  const mList = MonsterDatabase.getInstance().getAllContributors();

  return mList.map(loc  => ({
    id: loc.contributorKey,
  }));
  

}


// ✅ Your page component
export default function LocationPage({ params }: { params: { id: string } }) {
 <NavBar/>

  const db = MonsterDatabase.getInstance();;
  
  

  const contributor= db.getContributor(params.id);

  const monsters = db.getAllMonstersFromContributor(contributor);



  return (


<div>

<Breadcrumbs
  items={[
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Credits",
      href: "/credits.html",
    },
    {
      label: contributor.contributorName,
      href: `/credits/${contributor.contributorKey}.html`,
    },
  ]}
/>

  <div style={{display:'flex'}}>
  <img src={`/data/Contributors/${contributor.contributorKey}.png`} width={"48px"} height={"48px"}/>
  <h1>&nbsp;{contributor.contributorName}</h1>
  </div>

  {contributor.contributorLink != contributor.tuxemonLink && <a href={contributor.contributorLink}>Portfolio Link</a>}
  {contributor.contributorLink != contributor.tuxemonLink && contributor.tuxemonLink.length > 0 && <br/>}
  {contributor.tuxemonLink.length > 0 && <a href={contributor.tuxemonLink}>Tuxemon Contributor Page</a>}

  <p>
    {contributor.contributorDescription}
  </p>

  <h2>Credits - {monsters.length}</h2>
  <MonsterGrid monsters={monsters}/>


</div>

  );
}