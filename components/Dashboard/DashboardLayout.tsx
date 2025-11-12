'use client';

import { useEffect } from 'react';
import { AppShell, Container, Grid } from '@mantine/core';
import { useDashboardLayout, useDashboardLoading } from '@/hooks/useDashboard';
import { EarningsChart } from './EarningsChart';
import { Header } from './Header';
import { MessagesCard } from './MessagesCard';
import { PaymentIssuesCard } from './PaymentIssuesCard';
import { Sidebar } from './Sidebar';
import {
  EarningsChartSkeleton,
  HeaderSkeleton,
  MessageCardSkeleton,
  PaymentIssuesSkeleton,
  SidebarSkeleton,
  SuccessRateSkeleton,
  WelcomeCardSkeleton,
} from './skeletons';
import { SuccessRateCard } from './SuccessRateCard';
import { WelcomeCard } from './WelcomeCard';

export function DashboardLayout() {
  const { mobileNavOpen, desktopNavOpen, toggleMobileNav } = useDashboardLayout();
  const { isLoading, setAllLoading } = useDashboardLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setAllLoading]);
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: { base: 200, sm: 256 },
        breakpoint: 'sm',
        collapsed: { mobile: !mobileNavOpen, desktop: !desktopNavOpen },
      }}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header withBorder={false}>
        {isLoading.header ? <HeaderSkeleton /> : <Header onToggleMobileNav={toggleMobileNav} />}
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder={false}>
        {isLoading.sidebar ? <SidebarSkeleton /> : <Sidebar />}
      </AppShell.Navbar>

      <AppShell.Main
        pt={20}
        pb={20}
        style={{
          border: 'none',
        }}
      >
        <Container fluid className="mt-[170px] md:mt-[100px]">
          <Grid gutter="lg">
            {/* Welcome Card - Full width */}
            <Grid.Col span={{ base: 12, md: 9 }}>
              {isLoading.welcome ? <WelcomeCardSkeleton /> : <WelcomeCard />}
              <Grid mb={25}>
                <Grid.Col span={{ base: 12, md: 12 }}>
                  {isLoading.earnings ? <EarningsChartSkeleton /> : <EarningsChart />}
                </Grid.Col>
              </Grid>
              <Grid gutter="xl">
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  {isLoading.successRate ? <SuccessRateSkeleton /> : <SuccessRateCard />}
                </Grid.Col>

                {/* Payment Issues - Right side */}
                <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
                  {isLoading.paymentIssues ? <PaymentIssuesSkeleton /> : <PaymentIssuesCard />}
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }} ml="auto">
              {isLoading.messages ? <MessageCardSkeleton /> : <MessagesCard />}
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
