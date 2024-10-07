export function PortFolioModalContent() {
  return (
    <>
      <p className="text-xl font-bold text-center mt-2">ポートフォリオサイト</p>
      <div className="flex justify-around">
        <div className="flex flex-col justify-around w-1/2 m-4">
          <section>
            <h3 className="font-bold">概要</h3>
            <p className="text-sm">
              このサイトは、今後の拡張性を考慮し、コンポーネントライブラリであるReactを使って作成しました。
              <br />
              デザインはFigmaで作成し、将来的なページの編集を効率化するためにStorybookを活用しています。
              <br />
              フレームワークにはGatsbyを採用し、静的サイトとしてパフォーマンスの向上を図りました。
              <br />
              デザインに関する知識がまだ十分ではないため、今後、勉強を通じてデザインの修正や追加を行う予定です。
            </p>
            <br />
            <p className="font-bold">フレームワーク</p>
            <p className="text-sm mb-2">Gatsby</p>
            <h3 className="font-bold">開発言語・ライブラリ</h3>
            <p className="text-sm mb-2">React, TypeScript, HTML, Tailwind Css, recharts</p>
            <h3 className="font-bold">デザインシステム</h3>
            <p className="text-sm mb-2">Figma, StoryBook</p>
            <br />
          </section>
        </div>
        <div className="w-1/2 m-auto">
          <img src="MainImg.png" alt="MainImg" />
        </div>
      </div>
    </>
  );
}
