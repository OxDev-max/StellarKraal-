import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Loans from './pages/Loans';
import Collateral from './pages/Collateral';
import Profile from './pages/Profile';

const mobileTabs = [
  { to: '/', label: 'Dashboard', icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
  { to: '/loans', label: 'Loans', icon: 'M4 6h16M4 12h16M4 18h10' },
  { to: '/collateral', label: 'Collateral', icon: 'M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7l8-4z' },
  { to: '/profile', label: 'Profile', icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0' },
];

function MobileBottomNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white md:hidden"
    >
      <ul className="flex items-stretch justify-around">
        {mobileTabs.map((tab) => (
          <li key={tab.to} className="flex-1">
            <NavLink
              to={tab.to}
              end={tab.to === '/'}
              aria-label={tab.label}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 text-xs ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d={tab.icon} />
                  </svg>
                  <span aria-current={isActive ? 'page' : undefined}>{tab.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/collateral" element={<Collateral />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MobileBottomNav />
    </div>
  );
}
