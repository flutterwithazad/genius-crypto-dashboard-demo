import React from 'react';
import { LayoutDashboard, Users, ArrowDownLeft, ShieldCheck, Globe, Award, ArrowUpRight, CreditCard, TrendingUp, LogOut, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, active: true },
        { name: 'My Profile', icon: Users },
        { name: 'Deposit Funds', icon: ArrowDownLeft },
        { name: 'Activate Account', icon: ShieldCheck },
        { name: 'My Network', icon: Globe },
        { name: 'Bonuses', icon: Award },
        { name: 'Withdrawals', icon: ArrowUpRight },
        { name: 'Transactions', icon: CreditCard },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Content */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-600 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 flex flex-col border-r border-slate-200 shadow-sm`}>
                {/* Logo Area */}
                <div className="flex h-24 items-center px-6 border-b border-slate-100 justify-center">
                    <img src={logo} alt="Genius Crypto" className="h-[4.5rem] w-auto object-contain" />
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                    <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`flex w-full items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${item.active
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-500'
                                }`}
                        >
                            <item.icon size={20} className={`transition-colors duration-300 ${item.active ? 'text-emerald-600' : 'text-slate-400 group-hover:text-emerald-500'}`} />
                            <span className="font-medium">{item.name}</span>
                            {item.active && <ChevronRight size={16} className="ml-auto opacity-70" />}
                        </button>
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                    <button className="flex w-full items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;





