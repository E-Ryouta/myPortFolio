type PopOverWrapperProps = {
  handleClosePopOver: () => void;
};

export function PopOverWrapper({ handleClosePopOver }: PopOverWrapperProps) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-white opacity-50 "
      onClick={handleClosePopOver}
    />
  );
}
