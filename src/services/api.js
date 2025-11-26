// API service for frontend
const BASE_URL = 'http://localhost:3001';
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json' } });
  if (!res.ok) throw new Error('API error');
  return res.json();
}
const api = {
  async getAlerts(historical = false) {
    const alerts = await fetchJSON(`${BASE_URL}/alerts`);
    return historical ? alerts.filter(a => a.status === 'resolved') : alerts.filter(a => a.status === 'active');
  },
  async remediate(action, alert) {
    if (action === 'unpublish') {
      await fetchJSON(`${BASE_URL}/remediate/unpublish`, { method: 'POST', body: JSON.stringify({ docId: alert.docId }) });
    } else if (action === 'remove-share') {
      await fetchJSON(`${BASE_URL}/remediate/remove-share`, { method: 'POST', body: JSON.stringify({ docId: alert.docId }) });
    } else if (action === 'delete-row') {
      await fetchJSON(`${BASE_URL}/remediate/delete-row`, { method: 'DELETE', body: JSON.stringify({ docId: alert.docId, tableId: alert.metadata?.tableId, rowId: alert.metadata?.rowId }) });
    } else if (action === 'delete-doc') {
      await fetchJSON(`${BASE_URL}/remediate/delete-doc`, { method: 'DELETE', body: JSON.stringify({ docId: alert.docId }) });
    }
  },
  async getSettings() {
    return fetchJSON(`${BASE_URL}/settings`);
  },
  async saveSettings(data) {
    return fetchJSON(`${BASE_URL}/settings`, { method: 'PATCH', body: JSON.stringify(data) });
  }
};
export default api;
