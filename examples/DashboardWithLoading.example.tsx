'use client';

import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import { DashboardLayout } from '@/components/Dashboard/DashboardLayout';
import { useDashboardLoading } from '@/hooks/useDashboard';

async function fetchHeaderData() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

async function fetchSidebarData() {
  return new Promise((resolve) => setTimeout(resolve, 1200));
}

async function fetchWelcomeData() {
  return new Promise((resolve) => setTimeout(resolve, 800));
}

async function fetchEarningsData() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function fetchSuccessRateData() {
  return new Promise((resolve) => setTimeout(resolve, 1800));
}

async function fetchPaymentIssuesData() {
  return new Promise((resolve) => setTimeout(resolve, 2200));
}

async function fetchMessagesData() {
  return new Promise((resolve) => setTimeout(resolve, 1600));
}

export function DashboardWithSimpleLoading() {
  const { setAllLoading } = useDashboardLoading();

  useEffect(() => {
    // Show all skeletons
    setAllLoading(true);

    // Fetch all data in parallel
    Promise.all([
      fetchHeaderData(),
      fetchSidebarData(),
      fetchWelcomeData(),
      fetchEarningsData(),
      fetchSuccessRateData(),
      fetchPaymentIssuesData(),
      fetchMessagesData(),
    ])
      .then(() => {
        // Hide all skeletons when all data is loaded
        setAllLoading(false);
        notifications.show({
          title: 'Dashboard Loaded',
          message: 'All data has been loaded successfully',
          color: 'green',
        });
      })
      .catch((error) => {
        setAllLoading(false);
        notifications.show({
          title: 'Error Loading Dashboard',
          message: 'Failed to load dashboard data',
          color: 'red',
        });
      });
  }, [setAllLoading]);

  return <DashboardLayout />;
}

export function DashboardWithStaggeredLoading() {
  const { setLoading, setAllLoading } = useDashboardLoading();

  useEffect(() => {
    setAllLoading(true);

    fetchHeaderData()
      .then(() => {
        setLoading('header', false);
      })
      .catch(() => setLoading('header', false));

    fetchSidebarData()
      .then(() => {
        setLoading('sidebar', false);
      })
      .catch(() => setLoading('sidebar', false));

    fetchWelcomeData()
      .then(() => {
        setLoading('welcome', false);
      })
      .catch(() => setLoading('welcome', false));

    fetchEarningsData()
      .then(() => {
        setLoading('earnings', false);
      })
      .catch(() => setLoading('earnings', false));

    fetchSuccessRateData()
      .then(() => {
        setLoading('successRate', false);
      })
      .catch(() => setLoading('successRate', false));

    // Load payment issues
    fetchPaymentIssuesData()
      .then(() => {
        setLoading('paymentIssues', false);
      })
      .catch(() => setLoading('paymentIssues', false));

    // Load messages last
    fetchMessagesData()
      .then(() => {
        setLoading('messages', false);
      })
      .catch(() => setLoading('messages', false));
  }, [setLoading, setAllLoading]);

  return <DashboardLayout />;
}

export function DashboardWithProgressiveLoading() {
  const { setLoading, setAllLoading } = useDashboardLoading();

  useEffect(() => {
    // Show all skeletons initially
    setAllLoading(true);

    // Phase 1: Load critical UI components first
    Promise.all([fetchHeaderData(), fetchSidebarData()])
      .then(() => {
        setLoading('header', false);
        setLoading('sidebar', false);
      })
      .catch(() => {
        setLoading('header', false);
        setLoading('sidebar', false);
      });

    Promise.all([fetchWelcomeData(), fetchEarningsData(), fetchSuccessRateData()])
      .then(() => {
        setLoading('welcome', false);
        setLoading('earnings', false);
        setLoading('successRate', false);
      })
      .catch(() => {
        setLoading('welcome', false);
        setLoading('earnings', false);
        setLoading('successRate', false);
      });

    Promise.all([fetchPaymentIssuesData(), fetchMessagesData()])
      .then(() => {
        setLoading('paymentIssues', false);
        setLoading('messages', false);
      })
      .catch(() => {
        setLoading('paymentIssues', false);
        setLoading('messages', false);
      });
  }, [setLoading, setAllLoading]);

  return <DashboardLayout />;
}

export function DashboardWithErrorHandling() {
  const { setLoading, setAllLoading } = useDashboardLoading();

  const retryFetch = async (fn: () => Promise<void>, retries = 3): Promise<void> => {
    try {
      await fn();
    } catch (error) {
      if (retries > 0) {
        console.log(`Retrying... (${retries} attempts left)`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return retryFetch(fn, retries - 1);
      }
      throw error;
    }
  };

  useEffect(() => {
    setAllLoading(true);

    const loadData = async () => {
      try {
        // await Promise.all([
        //   retryFetch(fetchHeaderData),
        //   retryFetch(fetchSidebarData),
        //   retryFetch(fetchWelcomeData),
        //   retryFetch(fetchEarningsData),
        //   retryFetch(fetchSuccessRateData),
        //   retryFetch(fetchPaymentIssuesData),
        //   retryFetch(fetchMessagesData),
        // ]);

        setAllLoading(false);
        notifications.show({
          title: 'Success',
          message: 'Dashboard loaded successfully',
          color: 'green',
        });
      } catch (error) {
        setAllLoading(false);
        notifications.show({
          title: 'Error',
          message: 'Failed to load dashboard after multiple retries',
          color: 'red',
        });
      }
    };

    loadData();
  }, [setAllLoading]);

  return <DashboardLayout />;
}

export function DashboardWithTimeout() {
  const { setAllLoading } = useDashboardLoading();

  useEffect(() => {
    setAllLoading(true);

    const timeoutId = setTimeout(() => {
      console.warn('Dashboard loading timeout reached');
      setAllLoading(false);
      notifications.show({
        title: 'Loading Timeout',
        message: 'Some components took too long to load',
        color: 'yellow',
      });
    }, 10000);

    // Fetch data normally
    Promise.all([
      fetchHeaderData(),
      fetchSidebarData(),
      fetchWelcomeData(),
      fetchEarningsData(),
      fetchSuccessRateData(),
      fetchPaymentIssuesData(),
      fetchMessagesData(),
    ])
      .then(() => {
        clearTimeout(timeoutId);
        setAllLoading(false);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        setAllLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, [setAllLoading]);

  return <DashboardLayout />;
}
