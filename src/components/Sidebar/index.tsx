import clsx from 'clsx';
import { LayoutDashboardIcon, PanelLeftIcon, SettingsIcon, StickyNoteIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  function handleIsOpenSidebar() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }

  const classLink = clsx(
    '[&_a]:text-gray-100',
    '[&_a]:hover:text-gray-400 transition-all',
    '[&_a]:flex [&_a]:flex-nowrap',
    '[&_a]:gap-1',
  );

  const classNav = clsx(
    'w-0 h-full bg-gray-700 p-0 relative transition-all duration-1000',
    isOpen && 'w-65 p-5',
  );

  const classOverflowSidebar = clsx('overflow-hidden flex flex-col gap-5 flex-nowrap');
  return (
    <nav className={classNav}>
      <div className={classOverflowSidebar}>
        <h2 className="text-gray-400 hover:text-gray-200 transition cursor-default">Dashboard users</h2>
        <ul className="sidebar-nav flex flex-col gap-3">
          <li className={classLink}>
            <Link to={'/'}>
              <LayoutDashboardIcon />
              Dashboard
            </Link>
          </li>
          <li className={classLink}>
            <Link to="/posts">
              <StickyNoteIcon />
              Posts
            </Link>
          </li>
          <li className={classLink}>
            <Link to="/config">
              <SettingsIcon /> Config
            </Link>
          </li>
        </ul>
      </div>

      <button
        title={isOpen ? 'Close sidebar' : 'Open sidebar'}
        onClick={handleIsOpenSidebar}
        className={clsx(
          'absolute top-2 -right-13',
          'px-2 py-1 cursor-pointer transition hover:bg-gray-400 hover:text-gray-100 rounded-2xl',
        )}
        type="button"
      >
        <PanelLeftIcon />
      </button>
    </nav>
  );
}
