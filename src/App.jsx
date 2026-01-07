import React, { useState } from 'react';
import {
  Wallet,
  Users,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Award,
  CreditCard,
  MoreVertical,
  Briefcase,
  PiggyBank,
  Landmark,
  Percent,
  Layers,
  BarChart3,
  DollarSign
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ReferralCard from './components/ReferralCard';
import RankStatus from './components/RankStatus';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0F172A] font-sans text-slate-200 selection:bg-emerald-500/30 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8 pb-10">

            {/* Top Section: Referral */}
            <ReferralCard />

            {/* SECTION 1: Wallet & Funds (Primary) */}
            <div>
              <h3 className="font-bold text-slate-100 text-lg mb-4 flex items-center gap-2">
                <Wallet className="text-emerald-400" size={20} /> <span className="tracking-tight">Wallet & Funds</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  title="Main Balance"
                  value="$2,450.50"
                  icon={Wallet}
                  trend="up"
                  trendValue="+12%"
                  colorTheme="emerald"
                  subText="Withdrawable funds"
                />
                <StatCard
                  title="Fund Wallet"
                  value="$500.00"
                  icon={CreditCard}
                  colorTheme="blue"
                  subText="Activation funds"
                />
                <StatCard
                  title="Interest Wallet"
                  value="$56.50"
                  icon={PiggyBank}
                  colorTheme="indigo"
                  subText="Accrued interest"
                />
              </div>
            </div>

            {/* SECTION 2: Business Overview */}
            <div>
              <h3 className="font-bold text-slate-100 text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-400" size={20} /> <span className="tracking-tight">Business Overview</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="My Investment"
                  value="$1,000.00"
                  icon={Landmark}
                  colorTheme="violet"
                />
                <StatCard
                  title="Total Business"
                  value="$15,000.00"
                  icon={Briefcase}
                  colorTheme="cyan"
                  trend="up"
                  trendValue="+5%"
                />
                <StatCard
                  title="Total Deposit"
                  value="$5,000.00"
                  icon={ArrowDownLeft}
                  colorTheme="slate"
                />
                <StatCard
                  title="Total Withdrawal"
                  value="$3,500.00"
                  icon={ArrowUpRight}
                  colorTheme="slate"
                />
              </div>
            </div>

            {/* SECTION 3: Detailed Income Breakdown + Ranks */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Detailed Income Streams Grid */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-slate-100 text-lg flex items-center gap-2">
                    <DollarSign className="text-orange-400" size={20} /> <span className="tracking-tight">Income Streams</span>
                  </h3>
                  <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors"><MoreVertical size={20} /></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StatCard title="Trade Income" value="$1,200.00" icon={TrendingUp} colorTheme="orange" />
                  <StatCard title="Level Income" value="$450.00" icon={Layers} colorTheme="slate" />
                  <StatCard title="Direct Income" value="$300.00" icon={Users} colorTheme="slate" />
                  <StatCard title="Reward Income" value="$150.00" icon={Award} colorTheme="rose" />
                  <StatCard title="Royalty Income" value="$80.00" icon={Briefcase} colorTheme="slate" />
                  <StatCard title="Gap Margin" value="$0.00" icon={Percent} colorTheme="slate" />
                  <StatCard title="Pool Income" value="$0.00" icon={Users} colorTheme="slate" />
                </div>
              </div>

              {/* Rank Status Sidebar */}
              <div className="lg:col-span-1">
                <RankStatus />
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-slate-500 text-xs py-8 border-t border-slate-800/50 mt-8">
              &copy; 2024 GeniusCrypto Network. All rights reserved.
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
