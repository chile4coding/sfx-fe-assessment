'use client';

import { Card, Stack, Group, Skeleton } from '@mantine/core';

export function PaymentIssuesSkeleton() {
  return (
    <Card p="lg" radius="xl" withBorder>
      <Stack gap="md">
        <Skeleton height={20} width={150} radius="md" />
        <Skeleton height={250} radius="md" />
        <Skeleton height={16} width={200} radius="md" />
        <Stack gap="xs">
          {[...Array(4)].map((_, i) => (
            <Group key={i} gap="sm">
              <Skeleton height={16} width={16} radius="md" />
              <Skeleton height={14} width={120} radius="md" />
            </Group>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
