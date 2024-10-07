import { MenuBar } from '../MenuBar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="w-full h-full">
        <MenuBar />
      </div>
      {children}
    </div>
  );
};
