'use client';

import { Box, Card, Group, Skeleton, Stack } from '@mantine/core';

export function EarningsChartSkeleton() {
  return (
    <Box>
      <Group justify="space-between" mb="lg">
        <Skeleton height={32} width={120} radius="md" />
      </Group>

      <Card radius="xl" withBorder={true}>
        <Stack gap="md">
          <Skeleton height={20} width={100} radius="md" />
          <Skeleton height={300} radius="md" />
        </Stack>
      </Card>
    </Box>
  );
}
