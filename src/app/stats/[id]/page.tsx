import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import NavBar from '@/app/components/ui/navbar';
import MonsterGrid from '@/app/components/ui/MonsterGrid';
import Movelist from '@/app/components/ui/MoveList';
import { Breadcrumbs } from '@/app/components/ui/BreadCrumbs';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = MonsterDatabase.getInstance().getStatKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function StatPage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();
  
  const stat = db.getStat(params.id);

  if (!stat) {
    notFound();
  }

  return (


<div>

  <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Stats",
              href: "/stats.html",
            },
            {
              label: stat.name,
              href: `/stats/${stat.key}.html`,
            },
          ]}
        />
      <h1>{stat.name}</h1>
      
      <p>
        {stat.description}
      </p>

    
</div>
  

  );
}