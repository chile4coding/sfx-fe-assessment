'use client';

import { Group, Skeleton, Stack } from '@mantine/core';

export function HeaderSkeleton() {
  return (
    <Group justify="space-between" align="center" px="md" py="sm">
      {/* Logo */}
      <Skeleton height={40} width={87} radius="md" />

      {/* Search Bar */}
      <Skeleton height={40} style={{ flex: 1, maxWidth: 400 }} radius={50} />

      {/* Controls Group */}
      <Group gap="xl">
        <Skeleton height={40} width={100} radius="md" />
        <Skeleton height={40} width={120} radius={20} />
      </Group>

      {/* Notification */}
      <Skeleton height={40} width={40} radius="md" />

      {/* User Menu */}
      <Group gap="sm">
        <Skeleton height={40} width={40} radius="md" />
        <Stack gap={4}>
          <Skeleton height={12} width={80} radius="md" />
          <Skeleton height={10} width={60} radius="md" />
        </Stack>
        <Skeleton height={16} width={16} radius="md" />
      </Group>
    </Group>
  );
}
