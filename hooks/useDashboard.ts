import { useMemo, useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';

export interface Message {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  preview: string;
  timestamp: string;
}

export interface ErrorType {
  icon: string;
  label: string;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  key: string;
}

export interface PaymentIssueData {
  name: string;
  value: number;
}

export interface SuccessRateData {
  name: string;
  value: number;
}

export const CHART_DATA_PERIODS = {
  '7': [
    { name: 'Mon', value: 25000 },
    { name: 'Tue', value: 35000 },
    { name: 'Wed', value: 28000 },
    { name: 'Thu', value: 42000 },
    { name: 'Fri', value: 38000 },
    { name: 'Sat', value: 45000 },
    { name: 'Sun', value: 32000 },
  ],
  '30': [
    { name: 'Mar 1 - 7', value: 40000 },
    { name: 'Mar 8 - 14', value: 120000 },
    { name: 'Mar 15 - 21', value: 130000 },
    { name: 'Mar 22 - 28', value: 140000 },
    { name: 'Final wk', value: 190000 },
  ],
  '90': [
    { name: 'Jan', value: 150000 },
    { name: 'Feb', value: 210000 },
    { name: 'Mar', value: 620000 },
  ],
} as const;

export const DEFAULT_MESSAGES: Message[] = [
  {
    id: '1',
    name: 'Peter Japhet',
    initials: 'P',
    avatarColor: 'teal',
    preview: 'I need some maintenac...',
    timestamp: 'Jan 2, 1:23pm',
  },
  {
    id: '2',
    name: 'Leo Arome',
    initials: 'L',
    avatarColor: 'grape',
    preview: 'I get your email ad ...',
    timestamp: 'Wed, 09:00pm',
  },
  {
    id: '3',
    name: 'James Robinson',
    initials: 'J',
    avatarColor: 'teal',
    preview: 'I need some maintenac...',
    timestamp: 'Jan 2, 1:23pm',
  },
  {
    id: '4',
    name: 'Lupita Jonah',
    initials: 'L',
    avatarColor: 'orange',
    preview: 'Thank you so much ...',
    timestamp: 'Feb 01, 09:0pm',
  },
  {
    id: '5',
    name: 'Chile Omereji',
    initials: 'L',
    avatarColor: 'green',
    preview: 'Thank you so much ...',
    timestamp: 'Feb 01, 09:0pm',
  },
];

export const PAYMENT_ISSUE_CHART_DATA: PaymentIssueData[] = [
  { name: 'a', value: 1 },
  { name: 'x', value: 5 },
  { name: 'o', value: 3 },
  { name: 'n', value: 10 },
];

export const PAYMENT_ISSUE_COLORS = ['#FFAC1D', '#FFC966', '#FF6B6B', '#00BCD4'];

export const SUCCESS_RATE_DATA: SuccessRateData[] = [
  { name: 'Unsuccessful', value: 50 },
  { name: 'Successful', value: 100 },
];

export function useEarningsChart() {
  const [period, setPeriod] = useState('30');
  const { t } = useTranslation();

  const data = useMemo(
    () => [...CHART_DATA_PERIODS[period as keyof typeof CHART_DATA_PERIODS]],
    [period]
  );

  const periodOptions = useMemo(
    () => [
      { value: '7', label: t('earnings.last7Days') },
      { value: '30', label: t('earnings.last30Days') },
      { value: '90', label: t('earnings.last90Days') },
    ],
    [t]
  );

  return {
    period,
    setPeriod,
    data,
    periodOptions,
  };
}

export function useSidebar() {
  const [paymentsOpen, setPaymentsOpen] = useState(true);
  const [commerceOpen, setCommerceOpen] = useState(true);
  const { t } = useTranslation();

  const paymentItems = useMemo<NavItem[]>(
    () => [
      { icon: null, label: t('sidebar.transactions'), key: 'transactions' },
      { icon: null, label: t('sidebar.customers'), key: 'customers' },
      { icon: null, label: t('sidebar.payouts'), key: 'payouts' },
      { icon: null, label: t('sidebar.balances'), key: 'balances' },
      { icon: null, label: t('sidebar.subscriptions'), key: 'subscriptions' },
      { icon: null, label: t('sidebar.paymentPlans'), key: 'paymentPlans' },
    ],
    [t]
  );

  const commerceItems = useMemo<NavItem[]>(
    () => [
      { icon: null, label: t('sidebar.referrals'), key: 'referrals' },
      { icon: null, label: t('sidebar.auditLogs'), key: 'auditLogs' },
      { icon: null, label: t('sidebar.settings'), key: 'settings' },
    ],
    [t]
  );

  const togglePayments = () => setPaymentsOpen(!paymentsOpen);
  const toggleCommerce = () => setCommerceOpen(!commerceOpen);

  return {
    paymentsOpen,
    commerceOpen,
    paymentItems,
    commerceItems,
    togglePayments,
    toggleCommerce,
  };
}

export function useMessagesCard(messages: Message[] = DEFAULT_MESSAGES) {
  const { t } = useTranslation();

  return {
    messages,
    stats: t('messages.stats'),
    title: t('messages.title'),
  };
}

export function usePaymentIssuesCard(totalErrors: number = 19) {
  const { t } = useTranslation();

  const errorTypes = useMemo<ErrorType[]>(
    () => [
      { icon: '📦', label: t('paymentIssues.pending'), color: '#FFAC1D' },
      { icon: '📋', label: t('paymentIssues.review'), color: '#FFC966' },
      { icon: '🏦', label: t('paymentIssues.resolved'), color: '#FF6B6B' },
      { icon: '⚙️', label: t('paymentIssues.title'), color: '#00BCD4' },
    ],
    [t]
  );

  return {
    title: t('paymentIssues.title'),
    totalErrors,
    errorTypes,
    chartData: PAYMENT_ISSUE_CHART_DATA,
    colors: PAYMENT_ISSUE_COLORS,
  };
}

export function useSuccessRateCard(
  percentage: number = 90,
  successful: number = 150,
  unsuccessful: number = 1
) {
  const { t } = useTranslation();

  return {
    title: t('successRate.title'),
    percentage,
    successful,
    unsuccessful,
    chartData: SUCCESS_RATE_DATA,
    pendingLabel: t('paymentIssues.pending'),
    resolvedLabel: t('paymentIssues.resolved'),
  };
}

// ============================================================================
// WELCOME CARD HOOK
// ============================================================================

export function useWelcomeCard() {
  const { t } = useTranslation();

  return {
    title: t('welcome.title'),
    subtitle: t('welcome.subtitle'),
  };
}

export function useHeaderNavigation(
  userName: string = 'Martins Chidume',
  userId: string = 'ID 1234567'
) {
  const { language, setLanguage, t } = useTranslation();

  const languages = ['English', 'Spanish', 'French'] as const;

  const handleLanguageChange = (value: string | null) => {
    if (value) setLanguage(value as 'English' | 'Spanish' | 'French');
  };

  const menuItems = useMemo(
    () => [
      { label: t('header.profile'), color: 'gray' },
      { label: t('header.settings'), color: 'gray' },
      { label: t('header.logout'), color: 'red' },
    ],
    [t]
  );

  return {
    language,
    languages,
    userName,
    userId,
    searchPlaceholder: t('header.search'),
    liveLabel: t('header.live'),
    menuItems,
    handleLanguageChange,
  };
}

export function useDashboardLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(true);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleDesktopNav = () => setDesktopNavOpen(!desktopNavOpen);

  return {
    mobileNavOpen,
    desktopNavOpen,
    toggleMobileNav,
    toggleDesktopNav,
  };
}

// ============================================================================
// LOADING STATES HOOK
// ============================================================================

export interface DashboardLoadingState {
  header: boolean;
  sidebar: boolean;
  welcome: boolean;
  earnings: boolean;
  successRate: boolean;
  paymentIssues: boolean;
  messages: boolean;
}

export function useDashboardLoading(initialState: Partial<DashboardLoadingState> = {}) {
  const defaultState: DashboardLoadingState = {
    header: true,
    sidebar: true,
    welcome: true,
    earnings: true,
    successRate: true,
    paymentIssues: true,
    messages: true,
    ...initialState,
  };

  const [isLoading, setIsLoading] = useState<DashboardLoadingState>(defaultState);

  const setLoading = (key: keyof DashboardLoadingState, value: boolean) => {
    setIsLoading((prev) => ({ ...prev, [key]: value }));
  };

  const setAllLoading = (value: boolean) => {
    setIsLoading({
      header: value,
      sidebar: value,
      welcome: value,
      earnings: value,
      successRate: value,
      paymentIssues: value,
      messages: value,
    });
  };

  return {
    isLoading,
    setLoading,
    setAllLoading,
  };
}
