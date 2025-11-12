'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Box, Card, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useSuccessRateCard } from '@/hooks/useDashboard';

interface SuccessRateCardProps {
  percentage?: number;
  successful?: number;
  unsuccessful?: number;
}

export function SuccessRateCard({
  percentage = 90,
  successful = 150,
  unsuccessful = 1,
}: SuccessRateCardProps) {
  const { title, chartData, pendingLabel, resolvedLabel } = useSuccessRateCard(
    percentage,
    successful,
    unsuccessful
  );

  return (
    <Card p="lg" radius="xl" withBorder h={'100%'}>
      <Text fw={700} size="md" mb="lg" c={'dark'}>
        {title}
      </Text>

      <div className=" flex justify-center items-center h-full" style={{ marginBottom: '20px' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              dataKey="value"
              cornerRadius={150}
              paddingAngle={-20}
              fill="#DFEEDB"
            >
              <Cell fill="#DFEEDB" />
              <Cell fill="#A6D997" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 150,
            color: 'var(--mantine-color-green-6)',
            fontWeight: 600,
            fontSize: 32,
          }}
        >
          {percentage}%
        </div>
      </div>

      <Group justify="space-around" mt="xl">
        <Stack gap={0} align="center">
          <Group>
            <Box className=" rounded-md" bg={'#DFEEDB'} w={20} h={20}></Box>
            <Text fw={700} size="lg" c={'dark'}>
              {unsuccessful}
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            {pendingLabel}
          </Text>
        </Stack>
        <Stack gap={0} align="center">
          <Group>
            <Box className=" rounded-md" bg={'#DFEEDB'} w={20} h={20}></Box>
            <Text fw={700} size="lg" c={'dark'}>
              {successful}
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            {resolvedLabel}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}
