'use client';

import { Card, Skeleton, Stack } from '@mantine/core';

export function WelcomeCardSkeleton() {
  return (
    <Card p="lg" radius="md" withBorder={false}>
      <Stack gap="md">
        <Skeleton height={24} width={200} radius="md" />
        <Skeleton height={32} width="100%" radius="md" />
        <Skeleton height={16} width="80%" radius="md" />
      </Stack>
    </Card>
  );
}
