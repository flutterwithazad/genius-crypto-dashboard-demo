import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="sticky top-0 z-30 bg-[#0B1120]/80 backdrop-blur-xl border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="lg:hidden p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
                    <Menu size={24} />
                </button>
                <div>
                    <h2 className="text-xl font-bold text-slate-100 hidden sm:block">Dashboard Overview</h2>
                    <p className="text-sm text-slate-500 hidden sm:block">Welcome back, Mittal13</p>
                </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                {/* Search Bar - Hidden on mobile */}
                <div className="hidden md:flex items-center bg-slate-900/50 px-4 py-2.5 rounded-full border border-slate-700/50 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/50 transition-all w-64 group">
                    <Search size={18} className="text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="bg-transparent border-none outline-none ml-2 text-sm w-full placeholder:text-slate-600 text-slate-200"
                    />
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-2">
                    <button className="relative p-2.5 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-200">
                        <Bell size={20} />
                        <span className="absolute top-2.5 right-3 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-[#0B1120] animate-pulse"></span>
                    </button>
                </div>

                {/* User Profile Pill */}
                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-200">Mittal13</p>
                        <p className="text-[10px] font-bold text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">ID: GC766138</p>
                    </div>
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-[2px] shadow-lg shadow-emerald-500/10 cursor-pointer hover:shadow-emerald-500/20 transition-all">
                        <img src="https://i.pravatar.cc/150?img=11" alt="User" className="h-full w-full rounded-full object-cover border-2 border-[#0B1120]" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
