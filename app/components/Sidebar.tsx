'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  UserIcon,
  HeartIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Logo from './Logo';

interface NavItem {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Organizations', href: '/admin/organizations', icon: BuildingOfficeIcon },
  { name: 'Businesses', href: '/admin/businesses', icon: UserGroupIcon },
  { name: 'Supporters', href: '/admin/supporters', icon: UserIcon },
  { name: 'Become a Supporter', href: '/admin/become-supporter', icon: HeartIcon },
];

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <div className={`flex h-full flex-col bg-slate-800 text-white ${isOpen ? 'w-72' : 'w-0'} transition-all duration-300 overflow-hidden`}>
      <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-slate-700">
        <Logo />
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close sidebar"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="px-6 py-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Main</p>
      </div>
      <nav className="flex flex-1 flex-col px-4 pb-6">
        <ul className="flex flex-1 flex-col gap-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} aria-hidden="true" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-auto pt-6">
          <div className="px-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Account</p>
            <div className="rounded-lg bg-slate-700/50 p-3">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">AD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-slate-400">admin@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 