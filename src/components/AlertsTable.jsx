import React from 'react';
export default function AlertsTable({ alerts, isLoading, isError, onRemediate }) {
  if (isLoading) return <div className="text-center py-8">Loading alerts...</div>;
  if (isError) return <div className="text-center py-8 text-red-500">Error loading alerts.</div>;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Document</th>
            <th className="px-4 py-3 text-left">Table/Page</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Timestamp</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, idx) => (
            <tr key={alert.id} className={
              `border-t ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-150`
            }>
              <td className="px-4 py-3 font-medium text-blue-900">{alert.type}</td>
              <td className="px-4 py-3">{alert.docId}</td>
              <td className="px-4 py-3">{alert.metadata?.table || alert.metadata?.page || '-'}</td>
              <td className="px-4 py-3">{alert.message}</td>
              <td className="px-4 py-3">{new Date(alert.createdAt).toLocaleString()}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${alert.status === 'active' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{alert.status}</span>
              </td>
              <td className="px-4 py-3 flex items-center gap-2">
                {alert.status === 'active' && (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg shadow transition-colors duration-150" onClick={() => onRemediate(alert)}>
                    Remediate
                  </button>
                )}
                <a href={`https://coda.io/docs/${alert.docId}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-medium hover:text-blue-900 transition-colors duration-150">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
