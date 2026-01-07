import React from 'react';
import { ShieldCheck, Briefcase } from 'lucide-react';

const RankStatus = () => {
    const ranks = [
        { id: 1, title: "Starter", target: "$8,000", current: "$1,200", income: "$20", status: "unlocked", progress: 100 },
        { id: 2, title: "Co-Ordinator", target: "$20,000", current: "$4,500", income: "$50", status: "active", progress: 22 },
        { id: 3, title: "Executive", target: "$30,000", current: "$0", income: "$100", status: "locked", progress: 0 },
        { id: 4, title: "Sr. Executive", target: "$60,000", current: "$0", income: "$225", status: "locked", progress: 0 },
        { id: 5, title: "Manager", target: "$150,000", current: "$0", income: "$580", status: "locked", progress: 0 },
        { id: 6, title: "Sr. Manager", target: "$300,000", current: "$0", income: "$1,250", status: "locked", progress: 0 },
    ];

    return (
        <div className="bg-[#1E293B]/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden h-full shadow-lg">
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/40">
                <div>
                    <h3 className="font-bold text-slate-100 text-lg">Rank Achievements</h3>
                    <p className="text-sm text-slate-400">Track your progress to the next level</p>
                </div>
                <button className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 hover:underline transition-colors">View All</button>
            </div>

            <div className="divide-y divide-slate-800/50">
                {ranks.map((rank) => (
                    <div key={rank.id} className="p-5 flex flex-col sm:flex-row items-center gap-4 hover:bg-slate-800/30 transition-colors">
                        {/* Icon Status */}
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center border shrink-0 ${rank.status === 'unlocked' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                            rank.status === 'active' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' :
                                'bg-slate-800 border-slate-700 text-slate-500'
                            }`}>
                            {rank.status === 'unlocked' ? <ShieldCheck size={20} /> : <Briefcase size={20} />}
                        </div>

                        {/* Info */}
                        <div className="flex-1 w-full text-center sm:text-left">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className={`font-bold ${rank.status === 'locked' ? 'text-slate-500' : 'text-slate-200'}`}>{rank.title}</h4>
                                <span className="text-xs font-medium text-slate-500">Bonus: <span className="text-emerald-400 font-bold">{rank.income}</span></span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ${rank.status === 'unlocked' ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-blue-500 to-indigo-400'}`}
                                    style={{ width: `${rank.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-1 text-xs text-slate-500 font-medium">
                                <span>{rank.current} / {rank.target} vol</span>
                                <span>{rank.progress}%</span>
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="shrink-0">
                            {rank.status === 'unlocked' && <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-sm shadow-emerald-900/20">Completed</span>}
                            {rank.status === 'active' && <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold animate-pulse">In Progress</span>}
                            {rank.status === 'locked' && <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-500 text-xs font-bold">Locked</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RankStatus;
