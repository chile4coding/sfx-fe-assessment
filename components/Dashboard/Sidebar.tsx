'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { Box, Collapse, Divider, Group, ScrollArea, Stack, Text, ThemeIcon } from '@mantine/core';
import { useSidebar } from '@/hooks/useDashboard';
import {
  AuditLogIcon,
  BalanceIcon,
  CustomersIcon,
  PaymentPlusPlanIcon,
  PayoutIcon,
  ReferrerIcon,
  SettingsIcon,
  SubscriptionIcon,
  TransactionIcon,
} from './icons/HandWaveIcon';

export function Sidebar() {
  const { paymentsOpen, commerceOpen, togglePayments, toggleCommerce } = useSidebar();
  const [hoveredPayment, setHoveredPayment] = useState<string | null>(null);
  const [hoveredCommerce, setHoveredCommerce] = useState<string | null>(null);

  console.log('======= ', hoveredPayment);

  const paymentItems = [
    { icon: <TransactionIcon />, label: 'Transactions', key: 'transactions' },
    { icon: <CustomersIcon />, label: 'Customers', key: 'customers' },
    { icon: <PayoutIcon />, label: 'Payouts', key: 'payouts' },
    { icon: <BalanceIcon />, label: 'Balances', key: 'balances' },
    { icon: <SubscriptionIcon />, label: 'Subscriptions', key: 'subscriptions' },
    { icon: <PaymentPlusPlanIcon />, label: 'Payment Plans', key: 'paymentPlans' },
  ];

  const commerceItems = [
    { icon: <ReferrerIcon />, label: 'Referrals', key: 'referrals' },
    { icon: <AuditLogIcon />, label: 'Audit Logs', key: 'auditLogs' },
    { icon: <SettingsIcon />, label: 'Settings', key: 'settings' },
  ];

  return (
    <Box component="nav" w={240} p="md" h="100%">
      <ScrollArea h="calc(100vh - 130px)">
        <Stack gap="lg">
          {/* Payments Section */}
          <div>
            <Group
              justify="space-between"
              onClick={togglePayments}
              style={{ cursor: 'pointer', padding: '8px 0' }}
            >
              <Text fw={500} size="sm" c="dimmed">
                Payments
              </Text>
              <IconChevronDown
                size={20}
                fill="#BDBDBD"
                color="#BDBDBD"
                style={{
                  transform: paymentsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}
              />
            </Group>
            <Collapse in={paymentsOpen}>
              <Stack gap="xs" pl="md">
                {paymentItems.map((item, index) => (
                  <Link key={index} href="#" style={{ textDecoration: 'none' }}>
                    <Group
                      gap="xs"
                      style={{ cursor: 'pointer', padding: '8px 0' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--mantine-color-violet-6)';
                        setHoveredPayment(item.key);
                      }}
                      onMouseLeave={(e) => {
                        setHoveredPayment(null);
                        e.currentTarget.style.color = 'inherit';
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        {item.key === 'transactions' && (
                          <TransactionIcon
                            color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'customers' && (
                          <CustomersIcon
                            color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'payouts' && (
                          <PayoutIcon color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'} />
                        )}
                        {item.key === 'balances' && (
                          <BalanceIcon
                            color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'subscriptions' && (
                          <SubscriptionIcon
                            color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'paymentPlans' && (
                          <PaymentPlusPlanIcon
                            color={hoveredPayment === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                      </div>
                      <span className="transition-colors hover:text-violet-600">{item.label}</span>
                    </Group>
                  </Link>
                ))}
              </Stack>
            </Collapse>
          </div>

          {/* Commerce Section */}
          <div>
            <Divider orientation="horizontal" />

            <Group
              justify="space-between"
              onClick={toggleCommerce}
              style={{ cursor: 'pointer', padding: '14px 0' }}
            >
              <Text fw={500} size="sm" c="dimmed">
                Commerce
              </Text>

              <IconChevronDown
                size={20}
                fill="#BDBDBD"
                color="#BDBDBD"
                style={{
                  transform: commerceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}
              />
            </Group>
            <Divider orientation="horizontal" />

            <Collapse in={commerceOpen}>
              <Stack gap="xs" pl="md">
                {commerceItems.map((item, index) => (
                  <Link key={index} href="#" style={{ textDecoration: 'none' }}>
                    <Group
                      gap="xs"
                      style={{ cursor: 'pointer', padding: '8px 0' }}
                      onMouseEnter={() => setHoveredCommerce(item.key)}
                      onMouseLeave={() => setHoveredCommerce(null)}
                    >
                      <div style={{ display: 'flex' }}>
                        {item.key === 'referrals' && (
                          <ReferrerIcon
                            color={hoveredCommerce === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'auditLogs' && (
                          <AuditLogIcon
                            color={hoveredCommerce === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                        {item.key === 'settings' && (
                          <SettingsIcon
                            color={hoveredCommerce === item.key ? '#7950f2' : '#BDBDBD'}
                          />
                        )}
                      </div>
                      <span className="transition-colors hover:text-violet-600">{item.label}</span>
                    </Group>
                  </Link>
                ))}
              </Stack>
            </Collapse>
          </div>
        </Stack>
      </ScrollArea>
    </Box>
  );
}
