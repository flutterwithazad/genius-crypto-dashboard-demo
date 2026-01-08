import React, { useState } from 'react';
import { Award, Globe, Copy, Wallet, Share2 } from 'lucide-react';

const ReferralCard = () => {
    const [copied, setCopied] = useState(false);
    const link = "https://geniuscrypto.live/reg?id=GC766138";

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-5 sm:p-8 text-white shadow-2xl relative overflow-hidden isolate border border-indigo-500/20 animate-fade-in-up">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 w-full">
                <div className="flex-1 text-center lg:text-left w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-emerald-500/10">
                        <Award size={14} />
                        Referral Program
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Grow Your Network</h3>
                    <p className="text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
                        Share your unique referral link with friends. Earn up to <span className="text-emerald-300 font-bold">15% commission</span> on every deposit made by your referrals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto lg:mx-0">
                        <div className="flex items-center gap-2 sm:gap-3 bg-[#020617]/50 p-1.5 pl-3 sm:pl-5 rounded-xl border border-white/10 w-full backdrop-blur-md shadow-inner">
                            <Globe size={16} className="text-slate-400 min-w-[16px]" />
                            <code className="text-xs sm:text-sm text-emerald-200/90 truncate flex-1 font-mono tracking-wide">{link}</code>
                            <button
                                onClick={handleCopy}
                                className="bg-emerald-500 hover:bg-emerald-400 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center gap-2 whitespace-nowrap"
                            >
                                {copied ? 'Copied!' : <><Copy size={14} className="sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Copy Link</span><span className="sm:hidden">Copy</span></>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 sm:gap-4 w-full sm:w-auto justify-center">
                    <button className="group flex-1 sm:flex-none flex flex-col items-center justify-center h-24 sm:h-28 w-auto sm:w-32 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-emerald-500/10">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-2 sm:mb-3 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                            <Wallet className="text-white w-5 h-5 sm:w-6 sm:h-6 animate-pulse-slow" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-200">Add Fund</span>
                    </button>
                    <button className="group flex-1 sm:flex-none flex flex-col items-center justify-center h-24 sm:h-28 w-auto sm:w-32 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-blue-500/10">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-2 sm:mb-3 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                            <Share2 className="text-white w-5 h-5 sm:w-6 sm:h-6 animate-pulse-slow" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-200">Marketing</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReferralCard;
