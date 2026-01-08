import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, icon: Icon, trend, trendValue, colorTheme = "emerald", subText, className = "" }) => {
    const colors = {
        emerald: "from-emerald-500 to-teal-500 text-emerald-600 bg-emerald-50 border-emerald-100",
        blue: "from-blue-500 to-indigo-500 text-blue-600 bg-blue-50 border-blue-100",
        violet: "from-violet-500 to-fuchsia-500 text-violet-600 bg-violet-50 border-violet-100",
        orange: "from-orange-500 to-amber-500 text-orange-600 bg-orange-50 border-orange-100",
        slate: "from-slate-500 to-gray-500 text-slate-600 bg-slate-100 border-slate-200",
        rose: "from-rose-500 to-pink-500 text-rose-600 bg-rose-50 border-rose-100",
        cyan: "from-cyan-500 to-sky-500 text-cyan-600 bg-cyan-50 border-cyan-100",
        indigo: "from-indigo-500 to-blue-500 text-indigo-600 bg-indigo-50 border-indigo-100"
    };

    return (
        <div className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-emerald-500/20 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden animate-fade-in-up ${className}`}>
            {/* Background Gradient Blob */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${colors[colorTheme]?.split(" ")[1] || "bg-slate-200"}`}></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${colors[colorTheme].split(" ").slice(0, 2).join(" ")} text-white shadow-md shadow-slate-200 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white group-hover:animate-swing" />
                </div>
                {trend && (
                    <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full border ${trend === 'up' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
                        {trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownLeft size={14} className="mr-1" />}
                        {trendValue}
                    </div>
                )}
            </div>
            <div className="relative z-10">
                <p className="text-sm font-medium text-slate-500 mb-1 truncate">{title}</p>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{value}</h3>
                {subText && <p className="text-xs text-slate-400 mt-1">{subText}</p>}
            </div>
        </div>
    );
};

export default StatCard;
