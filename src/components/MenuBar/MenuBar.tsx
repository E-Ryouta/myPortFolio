import React from 'react';
import { MenuItem } from '../MenuItem';
import { BsFillPersonFill, BsGraphUpArrow, BsMemory } from 'react-icons/bs';
import { BiSolidHome } from 'react-icons/bi';

export function MenuBar() {
  return (
    <div className="flex h-32 justify-between items-center bg-base px-4">
      <img src="./Logo.png" alt="Ryota Labo" className="h-full" />
      <nav className="">
        <ul className="flex justify-center">
          <MenuItem ReactIcon={BsFillPersonFill} label="Abount" href="/" />
          <MenuItem ReactIcon={BsMemory} label="Skill" href="/" />
          <MenuItem ReactIcon={BsGraphUpArrow} label="History" href="/" />
        </ul>
      </nav>
    </div>
  );
}
