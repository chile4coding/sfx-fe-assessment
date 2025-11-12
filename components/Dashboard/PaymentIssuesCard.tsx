'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Badge, Card, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { usePaymentIssuesCard } from '@/hooks/useDashboard';

interface PaymentIssuesCardProps {
  totalErrors?: number;
}

export function PaymentIssuesCard({ totalErrors = 19 }: PaymentIssuesCardProps) {
  const { title, errorTypes, chartData, colors } = usePaymentIssuesCard(totalErrors);

  return (
    <Card p="lg" radius="xl" withBorder>
      <Text fw={700} size="md" mb="lg" c={'black'}>
        {title}
      </Text>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--mantine-color-gray-3)"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--mantine-color-white)',
              border: '1px solid var(--mantine-color-gray-3)',
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} activeBar={false} label={{ position: 'top' }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <Stack gap="md" mt="lg">
        <Text size="sm" fw={600} c="orange">
          Total number of errors: <span className="font-bold text-xl">{totalErrors}</span>
        </Text>

        <Stack gap="xs">
          {errorTypes.map((error, index) => (
            <Group key={index} gap="sm">
              <div style={{ fontSize: 16 }}>{error.icon}</div>
              <Text size="sm">{error.label}</Text>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
