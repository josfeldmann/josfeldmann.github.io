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
  
  const mList = MonsterDatabase.getInstance().getLocationKeys();

  return mList.map(loc  => ({
    id: loc,
  }));
  

}


// ✅ Your page component
export default function LocationPage({ params }: { params: { id: string } }) {
 <NavBar/>

  const db = MonsterDatabase.getInstance();;
  
  

  const location = db.getLocation(params.id);

  if (!location) {
    notFound();
  }

  const m = db.getMonstersFromKeyList(location.monsters)

  return (


<div>
  <Breadcrumbs
                items={[
                  {
                    label: "Home",
                    href: "/",
                  },
                  {
                    label: "Locations",
                    href: "/locations.html",
                  },
                  {
                    label: location.name,
                    href: `/locations/${location.key}.html`,
                  },
                ]}
              />
    <h1>{location.name}</h1>

    <h2>Monsters found here</h2>
    <MonsterGrid monsters={m}/>
    

</div>

  );
}