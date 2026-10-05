import React, { createContext, useContext, useState } from 'react';

const AppgradeStoreContext = createContext(null);

const uid = () => Math.random().toString(16).slice(2) + '-' + Date.now().toString(16);

const initialUser = {
  id: 'u_1',
  name: 'Appgrade user',
  email: 'user@example.com',
  plan: 'Creator',
};

const initialProjects = [
  {
    id: 'p_1',
    name: 'Appgrade AI Portfolio',
    type: 'Web App',
    status: 'Running',
    updatedAt: Date.now() - 1000 * 60 * 30,
    lastRun: 'Generated UI + code preview',
  },
  {
    id: 'p_2',
    name: 'Telvin demo website',
    type: 'Website',
    status: 'Draft',
    updatedAt: Date.now() - 1000 * 60 * 60 * 6,
    lastRun: 'Sketches UX + copy',
  },
  {
    id: 'p_3',
    name: 'Marketing landing page',
    type: 'Landing',
    status: 'Needs review',
    updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    lastRun: 'Produced assets + error notes',
  },
];

const initialActivity = [
  { id: 'a_1', title: 'Started a new build', detail: 'Marketing landing page', at: Date.now() - 1000 * 60 * 90 },
  { id: 'a_2', title: 'Opened support chat', detail: 'Agentic workflow question', at: Date.now() - 1000 * 60 * 60 * 8 },
  { id: 'a_3', title: 'Viewed Overview', detail: 'Checked plan limits', at: Date.now() - 1000 * 60 * 60 * 30 },
];

export function AppgradeStoreProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [projects, setProjects] = useState(initialProjects);
  const [activity, setActivity] = useState(initialActivity);

  const [credits, setCredits] = useState({ remaining: 40, usedToday: 3 });
  const [storage, setStorage] = useState({ usedGB: 0.7, totalGB: 2 });

  const addActivity = (title, detail) => {
    setActivity((prev) => [{ id: uid(), title, detail, at: Date.now() }, ...prev]);
  };

  const createBuild = ({ name, prompt, platform, monetization }) => {
    const id = uid();
    const type = platform === 'Web' ? 'Web App' : platform === 'Mobile' ? 'Mobile App' : 'API + Infra';
    const newProj = {
      id,
      name: name || 'Untitled Build',
      type,
      status: 'Generating',
      updatedAt: Date.now(),
      lastRun: `Prompt captured: ${prompt ? prompt.slice(0, 70) : '—'}${prompt && prompt.length > 70 ? '…' : ''}`,
      monetization: monetization || 'None',
    };

    setProjects((prev) => [newProj, ...prev]);
    addActivity('Created a build', newProj.name);

    return id;
  };

  const updateProjectStatus = (id, status, lastRun) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status, lastRun: lastRun || p.lastRun, updatedAt: Date.now() } : p))
    );
  };

  const deleteProject = (id) => {
    const p = projects.find((x) => x.id === id);
    setProjects((prev) => prev.filter((x) => x.id !== id));
    addActivity('Deleted a project', p?.name || 'Project');
  };

  const renameProject = (id, name) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, name, updatedAt: Date.now() } : p)));
    addActivity('Renamed project', name);
  };

  const duplicateProject = (id) => {
    const p = projects.find((x) => x.id === id);
    if (!p) return;
    const newId = uid();
    const copy = {
      ...p,
      id: newId,
      name: `${p.name} (copy)`,
      status: 'Draft',
      updatedAt: Date.now(),
      lastRun: 'Duplicated for iteration',
    };
    setProjects((prev) => [copy, ...prev]);
    addActivity('Duplicated a project', copy.name);
    return newId;
  };

  const upgradePlan = (plan) => {
    setUser((u) => ({ ...u, plan }));
    addActivity('Upgraded plan', plan);
  };

  // Keep store object stable-ish; runtime correctness > micro-optimization.
  const store = {
    user,
    setUser,
    projects,
    activity,
    credits,
    storage,
    createBuild,
    updateProjectStatus,
    deleteProject,
    renameProject,
    duplicateProject,
    upgradePlan,
    addActivity,
    setCredits,
    setStorage,
  };


  return <AppgradeStoreContext.Provider value={store}>{children}</AppgradeStoreContext.Provider>;
}

export function useAppgradeStore() {
  const ctx = useContext(AppgradeStoreContext);
  if (!ctx) throw new Error('useAppgradeStore must be used within AppgradeStoreProvider');
  return ctx;
}

