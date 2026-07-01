"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header + theme toggle */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Theme Test</h1>
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input
              type="checkbox"
              onChange={() => setTheme(isDark ? "light" : "dark")}
            />
            <span className="swap-off">🌞</span>
            <span className="swap-on">🌙</span>
          </label>
        </div>

        {/* Base surfaces */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-base-100 border border-base-300 rounded-box p-4 text-center">base-100</div>
          <div className="bg-base-200 rounded-box p-4 text-center">base-200</div>
          <div className="bg-base-300 rounded-box p-4 text-center">base-300</div>
        </div>

        {/* Buttons across theme colors */}
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>

        {/* Outline / ghost variants */}
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-outline btn-primary">Outline</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
          <button className="btn btn-disabled" disabled>Disabled</button>
        </div>

        {/* Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Project Card
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>This card sits on base-200 so you can check contrast against base-100.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">View</button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-outline">outline</div>
        </div>

        {/* Alerts */}
        <div className="space-y-2">
          <div className="alert alert-info">Info alert</div>
          <div className="alert alert-success">Success alert</div>
          <div className="alert alert-warning">Warning alert</div>
          <div className="alert alert-error">Error alert</div>
        </div>

        {/* Form inputs */}
        <div className="flex flex-wrap gap-4 items-end">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
          <input type="checkbox" defaultChecked className="toggle toggle-primary" />
          <input type="range" min={0} max={100} defaultValue={40} className="range range-primary w-40" />
        </div>

        {/* Tabs */}
        <div role="tablist" className="tabs tabs-boxed w-fit">
          <a role="tab" className="tab tab-active">Tab 1</a>
          <a role="tab" className="tab">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>

        {/* Safelisted swatch colors from your old config */}
        <div className="flex flex-wrap gap-2">
          {["red", "fuchsia", "yellow", "green", "cyan", "blue", "pink", "slate"].map((c) => (
            <div key={c} className={`m-1 w-16 h-16 rounded-lg dark:bg-${c}-600 bg-${c}-400`} />
          ))}
        </div>
      </div>
    </div>
  );
}
