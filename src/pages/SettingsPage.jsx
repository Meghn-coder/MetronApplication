import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../services/api';
import SettingsForm from '../components/SettingsForm';
export default function SettingsPage() {
  const queryClient = useQueryClient();
  const { data: settings, isLoading } = useQuery('settings', api.getSettings);
  const mutation = useMutation(api.saveSettings, {
    onSuccess: () => queryClient.invalidateQueries('settings')
  });
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-800 tracking-tight">Settings</h1>
        <SettingsForm settings={settings} onSave={mutation.mutate} isLoading={mutation.isLoading} />
      </div>
    </div>
  );
}
