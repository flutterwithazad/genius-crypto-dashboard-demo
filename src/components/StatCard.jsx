import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, icon: Icon, trend, trendValue, colorTheme = "emerald", subText }) => {
    const colors = {
        emerald: "from-emerald-500 to-teal-500 text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        blue: "from-blue-500 to-indigo-500 text-blue-400 bg-blue-500/10 border-blue-500/20",
        violet: "from-violet-500 to-fuchsia-500 text-violet-400 bg-violet-500/10 border-violet-500/20",
        orange: "from-orange-500 to-amber-500 text-orange-400 bg-orange-500/10 border-orange-500/20",
        slate: "from-slate-500 to-gray-500 text-slate-400 bg-slate-500/10 border-slate-500/20",
        rose: "from-rose-500 to-pink-500 text-rose-400 bg-rose-500/10 border-rose-500/20",
        cyan: "from-cyan-500 to-sky-500 text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        indigo: "from-indigo-500 to-blue-500 text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    };



    return (
        <div className="bg-[#1E293B]/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-xl hover:bg-[#1E293B] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${colors[colorTheme]?.split(" ")[1] || "bg-slate-500"}`}></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${colors[colorTheme].split(" ").slice(0, 2).join(" ")} bg-opacity-10 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full border ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                        {trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownLeft size={14} className="mr-1" />}
                        {trendValue}
                    </div>
                )}
            </div>
            <div className="relative z-10">
                <p className="text-sm font-medium text-slate-400 mb-1 truncate">{title}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
                {subText && <p className="text-xs text-slate-500 mt-1">{subText}</p>}
            </div>
        </div>
    );
};

export default StatCard;
