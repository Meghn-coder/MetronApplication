import React from 'react';
export default function RemediationActions({ alert, onAction, isLoading }) {
  if (!alert) return null;
  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4">Remediation Actions</h2>
      <div className="mb-2">Issue: <span className="font-semibold">{alert.type}</span></div>
      <div className="mb-2">Document: <span className="font-semibold">{alert.docId}</span></div>
      <div className="mb-2">Description: <span className="font-semibold">{alert.message}</span></div>
      <div className="flex gap-2 mt-4">
        {alert.type === 'public_share' && (
          <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => onAction('unpublish', alert)} disabled={isLoading}>Unpublish</button>
        )}
        {alert.type === 'public_share' && (
          <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => onAction('remove-share', alert)} disabled={isLoading}>Remove Share</button>
        )}
        {alert.type === 'sensitive_data' && (
          <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => onAction('delete-row', alert)} disabled={isLoading}>Delete Row</button>
        )}
        <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={() => onAction('delete-doc', alert)} disabled={isLoading}>Delete Document</button>
      </div>
    </div>
  );
}
