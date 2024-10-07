import type { HeadFC, PageProps } from 'gatsby';
import { CardButton } from '../components/Card';
import { Layout } from '../components/Layout';
import { RadarChart } from '../components/RadarChart';
import type { ReaderChartProps } from '../components/RadarChart';
import { PopOver } from '../components/PopOver';
import '../styles/global.css';
import { useState } from 'react';
import { PortFolioModalContent } from '../modalContents';

const IndexPage = (props: PageProps) => {
  const [isOpenPopOverId, setIsOpenPopOverId] = useState<string | null>(null);
  const handleOpenPopOver = (id: string) => {
    setIsOpenPopOverId(id);
  };

  const handleClosePopOver = () => {
    setIsOpenPopOverId(null);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img src="MainImg.png" alt="MainImage" className="object-cover" />
        <h1 className="text-[36px] text-primary my-8">-Skill-</h1>
        <div className="flex gap-14">
          {cardList.map((card, index) => (
            <>
              <CardButton
                key={index}
                imgPath={card.imgPath}
                title={card.title}
                handleClick={handleOpenPopOver}
                popOverRelationId={card.popOverId}
              />
              {card.popOverId === isOpenPopOverId && (
                <PopOver handleClosePopOver={handleClosePopOver}>
                  {ModalContent[card.popOverId]()}
                </PopOver>
              )}
            </>
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center mt-[100px]">
            {readerData.map((readerProps, index) => (
              <RadarChart key={index} {...readerProps} />
            ))}
          </div>
          <p className="text-center text-secondary font-bold">
            ３：実務経験あり　２：個人開発に使用　１：勉強中
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ryota Labo</title>;

const ModalContent: {
  [key: string]: () => JSX.Element;
} = {
  portfolio: PortFolioModalContent,
};

const cardList = [
  {
    imgPath: 'MainImg.png',
    title: 'PortFolio',
    popOverId: 'portfolio',
  },
  {
    imgPath: 'MyDailyTodo.png',
    title: 'MyDailyTodo',
    popOverId: 'myDailyTodo',
  },
];

const readerData: ReaderChartProps[] = [
  {
    title: 'フロントエンドスキル',
    data: [
      {
        skill: 'HTML',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'Tailwind CSS',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'TypeScript',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'React',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'Next.js',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'Gatsby',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'Remix',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'Storybook',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'Figma',
        level: 2,
        fullMark: 3,
      },
    ],
  },
  {
    title: 'バックエンドスキル',
    data: [
      {
        skill: 'python',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'C#',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'ASP.NET',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'Godot',
        level: 1,
        fullMark: 3,
      },
    ],
  },
  {
    title: 'その他スキル',
    data: [
      {
        skill: 'Git',
        level: 3,
        fullMark: 3,
      },
      {
        skill: 'Docker',
        level: 2,
        fullMark: 3,
      },
      {
        skill: 'AWS',
        level: 1,
        fullMark: 3,
      },
      {
        skill: 'SQL',
        level: 3,
        fullMark: 3,
      },
    ],
  },
];
