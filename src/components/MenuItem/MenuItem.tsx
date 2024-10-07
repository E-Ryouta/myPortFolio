import type { IconType } from 'react-icons';

type MenuItemProps = {
  ReactIcon: IconType;
  label: string;
  href: string;
};

export function MenuItem({ ReactIcon, label, href }: MenuItemProps) {
  return (
    <a
      href={href}
      className="flex items-center justify-center text-primary gap-4 w-40 text-2xl hover:text-white"
    >
      <ReactIcon />
      <span>{label}</span>
    </a>
  );
}
