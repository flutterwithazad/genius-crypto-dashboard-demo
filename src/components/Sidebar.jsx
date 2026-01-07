import React from 'react';
import { LayoutDashboard, Users, ArrowDownLeft, ShieldCheck, Globe, Award, ArrowUpRight, CreditCard, TrendingUp, LogOut, ChevronRight } from 'lucide-react';

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
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Content */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0B1120] text-slate-300 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 flex flex-col border-r border-slate-800`}>
                {/* Logo Area */}
                <div className="flex h-24 items-center px-8 border-b border-slate-800">
                    <div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-emerald-500/20">
                        <TrendingUp className="text-white h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-white">GENIUS<span className="text-emerald-400">CRYPTO</span></h1>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Network Dashboard</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                    <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Main Menu</p>
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`flex w-full items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${item.active
                                ? 'bg-gradient-to-r from-emerald-600/20 to-teal-600/10 text-emerald-400 border border-emerald-500/10'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300'
                                }`}
                        >
                            <item.icon size={20} className={`transition-colors duration-300 ${item.active ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />
                            <span className="font-medium">{item.name}</span>
                            {item.active && <ChevronRight size={16} className="ml-auto opacity-70" />}
                        </button>
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-slate-800 bg-[#0F172A]/50">
                    <button className="flex w-full items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 rounded-xl transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
