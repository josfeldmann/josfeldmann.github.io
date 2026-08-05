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
  const mList = MonsterDatabase.getInstance().getTypeKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterTypePage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();
  
  

  const type = db.getMonsterType(params.id);

  const typemonsters = db.getAllMonstersWithType(type);

  const typeMoves = db.getAllMovesWithType(type);

  if (!type) {
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
              label: "Types",
              href: "/Types.html",
            },
            {
              label: type.name,
              href: `/Types/${type.key}.html`,
            },
          ]}
        />
      <h1>{type.key}</h1>
      
      <h2>Monsters With Type - {typemonsters.length}</h2>


    <MonsterGrid monsters={typemonsters} imageSize={96}  />

    <h2>Moves With Type</h2>

    <Movelist moves={typeMoves} />;
    
</div>
  

  );
}