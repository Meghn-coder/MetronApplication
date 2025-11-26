import React from 'react';
import AlertsPage from './AlertsPage';
export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-800 tracking-tight">Active Alerts</h1>
        <AlertsPage historical={false} />
      </div>
    </div>
  );
}
