import { PopOverWrapper } from './PopOverWrapper';

type PopOverProps = {
  children: React.ReactNode;
  handleClosePopOver: () => void;
};

export function PopOver({ children, handleClosePopOver }: PopOverProps) {
  return (
    <>
      <PopOverWrapper handleClosePopOver={handleClosePopOver} />
      <div className="absolute right-0 left-0 m-auto z-50 bg-base w-[800px] h-[480px] border-4 border-solid border-primary rounded-3xl">
        {children}
      </div>
    </>
  );
}
