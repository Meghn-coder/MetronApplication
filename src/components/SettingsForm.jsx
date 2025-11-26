import React, { useState } from 'react';
export default function SettingsForm({ settings, onSave, isLoading }) {
  const [pollInterval, setPollInterval] = useState(settings?.pollInterval || 10);
  const [token, setToken] = useState(settings?.token || '');
  return (
    <form className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6" onSubmit={e => {e.preventDefault(); onSave({ pollInterval, token });}}>
      <div>
        <label className="block mb-2 font-semibold text-blue-800">API Token</label>
        <input type="text" className="w-full border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-lg transition-all duration-150" value={token} onChange={e => setToken(e.target.value)} disabled={isLoading} />
      </div>
      <div>
        <label className="block mb-2 font-semibold text-blue-800">Monitor Interval (minutes)</label>
        <input type="number" className="w-full border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-lg transition-all duration-150" value={pollInterval} onChange={e => setPollInterval(Number(e.target.value))} disabled={isLoading} />
      </div>
      <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow font-bold transition-colors duration-150" disabled={isLoading}>Save Settings</button>
    </form>
  );
}
