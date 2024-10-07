type CardButtonProps = {
  imgPath: string;
  title: string;
  popOverRelationId: string;
  handleClick: (id: string) => void;
};

export function CardButton({ imgPath, title, popOverRelationId, handleClick }: CardButtonProps) {
  return (
    <button
      className="cursor-pointer transition duration-150 ease-out hover:scale-110"
      data-popovertarget="test"
      onClick={() => handleClick(popOverRelationId)}
    >
      <div className="bg-primary w-96">
        <img src={imgPath} alt="Card Image" className="w-full h-full border-8 border-primary" />
        <h1 className="text-2xl text-base font-abhaya">{title}</h1>
      </div>
    </button>
  );
}
