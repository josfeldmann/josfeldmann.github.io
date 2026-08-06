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
  const mList = MonsterDatabase.getInstance().getTagKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MonsterTypePage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();
  
  

  const tag = db.getTag(params.id);

  //const typemonsters = db.getAllMonstersWithType(type);

  const tagMoves = db.getAllMovesWithTag(tag);

  if (!tag) {
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
                  label: "Tags",
                  href: "/tags.html",
                },
                {
                  label: tag.name,
                  href: `/tags/${tag.key}.html`,
                },
              ]}
            />

    <h1>{tag.name} Tag</h1>
      
    <p>{tag.description}</p>

    <h2>Moves With Tag</h2>

    <Movelist moves={tagMoves} />;
    
</div>
  

  );
}