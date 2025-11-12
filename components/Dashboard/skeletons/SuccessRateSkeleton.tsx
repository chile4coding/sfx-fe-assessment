'use client';

import { Card, Stack, Group, Skeleton } from '@mantine/core';

export function SuccessRateSkeleton() {
  return (
    <Card p="lg" radius="xl" withBorder h={'100%'}>
      <Stack gap="md">
        <Skeleton height={20} width={150} radius="md" />
        <Skeleton height={250} radius="md" />
        <Group justify="space-around">
          <Stack gap={8} align="center">
            <Skeleton height={30} width={60} radius="md" />
            <Skeleton height={12} width={80} radius="md" />
          </Stack>
          <Stack gap={8} align="center">
            <Skeleton height={30} width={60} radius="md" />
            <Skeleton height={12} width={80} radius="md" />
          </Stack>
        </Group>
      </Stack>
    </Card>
  );
}
