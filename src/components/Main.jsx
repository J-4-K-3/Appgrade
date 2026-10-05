import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoHomeOutline, IoBuildOutline, IoAppsOutline, IoPersonOutline, IoEllipsisHorizontalCircleOutline, IoGridOutline, IoSettingsOutline } from "react-icons/io5";
import '../App.css'

/*
 Note to self: Use Material icons
*/

const topNavItems = [
  { name: "Overview", label: "Overview", icon: IoHomeOutline, path: "/overview" },
  { name: "Build", label: "Build", icon: IoBuildOutline, path: "/build" },
  { name: "Projects", label: "Projects", icon: IoGridOutline, path: "/projects" },
  //{ name: "Account", label: "Account", icon: IoAppsOutline, path: "/account" },
  { name: "Marketplace", label: "Marketplace", icon: IoAppsOutline, path: "/market" },
  { name: "More", label: "More", icon: IoEllipsisHorizontalCircleOutline, path: "/more" },
];

const lowerNavItems = [
  { name: "Profile", label: "Profile", icon: IoPersonOutline, path: "/profile" },
  { name: "Settings", label: "Settings", icon: IoSettingsOutline, path: "/settings" },
];

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Overview");

  const handleNavigate = (item) => {
    setActiveTab(item.name);
    navigate(item.path);
  };

  const isActive = (name) => activeTab === name;

  React.useEffect(() => {
    const allNavItems = [...topNavItems, ...lowerNavItems];
    const currentItem = allNavItems.find(
      (item) => item.path === location.pathname,
    );
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location.pathname]);

  const navGroups = [
    { label: "", items: topNavItems },
    { label: "", items: lowerNavItems },
  ];

  return (
    <nav className="main-nav" role="navigation" aria-label="Primary navigation">
      <div className="main-nav-brand">
        <img src="/appgrade_logo.png" className="nav-brand-img" />
      </div>
      {navGroups.map((group) => (
        <div key={group.label} className="nav-group">
          <p className="nav-group-label">{group.label}</p>
          {group.items.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.name);

            return (
              <button
                key={item.name}
                title={item.label}
                className={`nav-item ${active ? "active" : ""}`}
                onClick={() => handleNavigate(item)}
                aria-label={item.label}
              >
                <Icon size={active ? 22 : 20} className="nav-icon" />
              </button>
            );
          })}
        </div>
      ))}
    </nav>
  );
};

export default Main;