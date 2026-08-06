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
  const mList = MonsterDatabase.getInstance().getMonsterMoveCategoryKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}

// ✅ Your page component
export default function MoveCategoryPage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();
  
  const category = db.getMoveCategory(params.id);

  const catMoves = db.getAllMovesWithCategory(category.key)
  if (!category) {
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
              label: "Move Categories",
              href: "/movecategories.html",
            },
            {
              label: category.name,
              href: `/types/${category.key}.html`,
            },
          ]}
        />
      <h1>{category.name}</h1>
      
      <p>
        {category.description}
      </p>

    <h2>{category.name} Moves</h2>

    <Movelist moves={catMoves} />;
    
</div>
  

  );
}