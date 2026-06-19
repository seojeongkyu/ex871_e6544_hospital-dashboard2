import { useEffect, useState } from 'react';
import { fetchPatients } from '../services/api';
import { Patient } from '../types';

const usePatients = (filters: {
  age: number;
  admissionDays: number;
  insuranceType: string;
  diagnosisCodes: string[];
}) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      setLoading(true);
      try {
        const data = await fetchPatients(filters);
        setPatients(data);
      } catch (err) {
        setError('Failed to fetch patients');
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, [filters]);

  return { patients, loading, error };
};

export default usePatients;