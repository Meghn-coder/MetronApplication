import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../services/api';
import AlertsTable from '../components/AlertsTable';
import RemediationActions from '../components/RemediationActions';
export default function AlertsPage({ historical }) {
  const queryClient = useQueryClient();
  const [selectedAlert, setSelectedAlert] = useState(null);
  const { data: alerts = [], isLoading, isError } = useQuery(['alerts', historical], () => api.getAlerts(historical));
  const mutation = useMutation(({ action, alert }) => api.remediate(action, alert), {
    onSuccess: () => {
      queryClient.invalidateQueries('alerts');
      setSelectedAlert(null);
    }
  });
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <AlertsTable alerts={alerts} isLoading={isLoading} isError={isError} onRemediate={setSelectedAlert} />
      <RemediationActions alert={selectedAlert} onAction={(action, alert) => mutation.mutate({ action, alert })} isLoading={mutation.isLoading} />
    </div>
  );
}
