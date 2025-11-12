'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ActionIcon, Box, Card, Group, Select, Text } from '@mantine/core';
import { useEarningsChart } from '@/hooks/useDashboard';

export function EarningsChart() {
  const { period, setPeriod, data, periodOptions } = useEarningsChart();

  return (
    <Box>
      <Group justify="space-between" mb="lg">
        <Select
          value={period}
          styles={{
            input: {
              border: 0,
            },
          }}
          rightSection={
            <ActionIcon bg={'violet.0'}>
              <IconChevronDown size={15} color="#5c10ae" fill="#5c10ae" />
            </ActionIcon>
          }
          onChange={(val) => setPeriod(val || '30')}
          data={periodOptions}
          style={{ width: 120 }}
          size="xs"
        />
      </Group>

      <Card radius="xl" withBorder={true}>
        <Text fw={600} size="md" mb="md">
          Earnings
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--mantine-color-gray-3)"
              vertical={false}
            />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--mantine-color-white)',
                border: '1px solid var(--mantine-color-gray-3)',
              }}
            />
            <Bar dataKey="value" fill="#ECCCFF" radius={[8, 8, 0, 0]} activeBar={false} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
}
