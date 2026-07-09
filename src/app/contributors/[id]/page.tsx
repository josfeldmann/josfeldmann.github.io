import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
import MonsterGrid from '@/app/components/ui/MonsterGrid';
export type MonsterDictionary = Record<string, Monster>;


export async function generateStaticParams() {
  
  const mList = MonsterDatabase.getInstance().getContributors();

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


  <h1>{contributor.contributorName}</h1>

  <p>
    {contributor.contributorDescription}
  </p>

  <h2>Contributed To</h2>
  <MonsterGrid monsters={monsters}/>

</div>

  );
}