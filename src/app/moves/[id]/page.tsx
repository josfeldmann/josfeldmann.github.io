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
  
  const mList = MonsterDatabase.getInstance().getMoveKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}


// ✅ Your page component
export default function AbilityPage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();;
  
  

  const move = db.getMove(params.id);

  if (!move) {
    notFound();
  }

  const m = db.getAllMonstersWithMove(move);

  return (


<div>
<Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Moves",
            href: "/moves.html",
          },
          {
            label: move.name,
            href: `/moves/${move.key}.html`,
          },
        ]}
      />

    <h1>{move.name}</h1>

    <Movelist moves={[move]} />;

    <h2>Monsters that learn this move</h2>
    <MonsterGrid monsters={m} />



</div>

  );
}