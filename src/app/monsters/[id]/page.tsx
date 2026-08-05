import { Monster } from '../../components/data/Monster';
import monsters from '../../../../public/data/monsters.json';
import { notFound } from 'next/navigation';
import { MonsterDatabase } from '@/app/components/data/MonsterDatabase';
import Script from 'next/script'
import React from 'react';

import { log } from 'console';
import { SingleLineList } from '@/app/components/ui/SingleLineList';
import { GenericLink } from '@/app/components/ui/GenericLink';
import { MapLocation } from '@/app/components/data/MapLocation';
import NavBar from '@/app/components/ui/navbar';
import { MonsterMove } from '@/app/components/data/MonsterMove';
import Movelist from '@/app/components/ui/MoveList';
import MonsterBadge from '@/app/components/ui/MonsterBadge';
import TypeButton from '@/app/components/ui/TypeButton';
import MonsterStatsGraph from '@/app/components/ui/MonsterStatsGraph';
import { Metadata } from 'next';
import AbilityButton from '@/app/components/ui/AbilityButton';
import { Ability } from '@/app/components/data/Ability';
import MonsterResistanceTable from '@/app/components/ui/ResistanceTable';
import EvolutionGraphView from '@/app/components/ui/EvolutionGraphView';
import { Contributor } from '@/app/components/data/Contributor';
import { ContributorCreditsList } from '@/app/components/ui/ContributorCreditList';
import { Breadcrumbs } from '@/app/components/ui/BreadCrumbs';
import LicenseLink from '@/app/components/ui/LicenseLink';
export type MonsterDictionary = Record<string, Monster>;

export async function generateStaticParams() {
  const mList = MonsterDatabase.getInstance().getMonsterKeys();

  return mList.map(monster  => ({
    id: monster,
  }));
  

}




export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const monster = MonsterDatabase.getInstance().getMonster(params.id);
  const canonicalPath = `/monsters/${monster.monsterKey}.html`
  if (!monster) {
    return {
      title: "Monster Not Found " + params.id,
    };
  }

  const title =  `${monster.monsterName} - ${monster.title} Novamon - | Novarangers`;
  const description = MonsterDatabase.getInstance().getMetaDataDescription(monster);
  const keywords = MonsterDatabase.getInstance().getMetaDataKeywords(monster);
  const siteName = "Novarangers"
  const imagePath = `https://novarangers.com/data/Monster-Images/` + `${monster.monsterKey}.png`

  return {
    title: title,
    description: description,
    keywords : keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonicalPath,
      siteName: siteName,
      type: "website",
      images: [
        {
          url: imagePath,
          alt: description,
        },
      ],
    },
    
  };
}



// ✅ Your page component
export default function MonsterPage({ params }: { params: { id: string } }) {


  const db = MonsterDatabase.getInstance();;
  
  

  const monster = db.getMonster(params.id);


  const t1 = db.getMonsterType(monster.monsterType[0]);
  let t2 = null;
  if (monster.monsterType.length > 1) {
    t2 = db.getMonsterType(monster.monsterType[1]);
  }

 const locations : string[] = db.getAllLocationsWithMonster(params.id);

 const moves : MonsterMove[] = db.getMovesFromKeyList(monster.moves);

 const contributors : {contributor: Contributor, credit: string}[] = db.getContributorsFromMonster(monster.contributors);

 const ability : Ability = db.getAbility(monster.abilities[0])

 const weaknesses : string[] = db.getWeaknesses(monster.resistances);
 const resistances : string[] = db.getResists(monster.resistances);
 const notAffected : string[] = db.getNotAffectedBy(monster.resistances);

 const tuxemonURL = monster.tuxemonLink;
 let tuxName = "";
 if (tuxemonURL != null && tuxemonURL.length > 0) {
  const split = tuxemonURL.split('/');
  tuxName = split[split.length -1];
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
            label: "Monsters",
            href: "/Monsters.html",
          },
          {
            label: monster.monsterName,
            href: `/Monsters/${monster.monsterKey}.html`,
          },
        ]}
      />

      <div className="d-flex flex-wrap  justify-content-left">

      <div className="p-2">
        <MonsterBadge data={monster} scale={3}/> 
      </div>

      <div className="p-2">
        <h1>{monster.monsterName}</h1>
        <p className="lead">{monster.title} Novamon</p>
        <p>
            Types: <SingleLineList items={monster.monsterType} renderItem={(monsterType) => <TypeButton data={db.getMonsterType(monsterType)}/>}></SingleLineList>
        </p>

        
        <h2>Passives</h2>

        

      <p>
        <SingleLineList items={monster.abilities} renderItem={(location) => (<GenericLink value={location} basePath="/abilities/" />)}></SingleLineList>
      </p> 
        
        <h2>Abilities</h2>
      <p>
        <SingleLineList items={monster.abilities} renderItem={(location) => (<GenericLink value={location} basePath="/abilities/" />)}></SingleLineList>
      </p>


      </div>
    

      <div className="p-2">
      <MonsterStatsGraph monster={monster} />
      </div>
      </div>


      <h2>Dex</h2>

      <p>
        {monster.shortDescription}
      </p>

      <p>
        {monster.longDescription}
      </p>
  
      <div className="row g-4">
          {/* Right-side info on desktop, first on mobile */}
          <div className="col-12 col-lg-5 order-1 order-lg-2">
              <div className="d-flex flex-column gap-4">

                  <h3>Evolution Tree</h3>
                  <EvolutionGraphView graph={monster.evolutionGraph} />
                  <h3>Where to Obtain</h3>
                  <SingleLineList items={locations} renderItem={(location) => (<GenericLink value={location} basePath="/locations/" />)}/>
                  <h3>Resistances</h3>
                  <MonsterResistanceTable monster={monster} />
                  
                  
                  

  
              </div>
          </div>

          {/* Move list on desktop left, last on mobile */}
          
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <h3>Moves</h3>
              <Movelist moves={moves} />
          </div>
      </div>

      <h3>Contributors</h3>
                  <ContributorCreditsList contributorCredits={contributors} />
                  {tuxemonURL && tuxemonURL.length > 0 && (
                    <>Associated Tuxemon: <a href={tuxemonURL}>{tuxName}</a></>
                    )}
                    <br/>
                    License: <LicenseLink license={monster.license} />
    </div>

  );
}