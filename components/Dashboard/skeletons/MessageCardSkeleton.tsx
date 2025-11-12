'use client';

import { Card, Stack, Group, Skeleton, Divider } from '@mantine/core';

export function MessageCardSkeleton() {
  return (
    <Card
      bg={'#F9F9F9'}
      p="xl"
      mah={754}
      styles={{
        root: {
          borderBottomLeftRadius: '50px',
          borderTopLeftRadius: '50px',
          overflow: 'auto',
        },
      }}
      withBorder={false}
    >
      <Group justify="space-between" mb="lg">
        <Skeleton height={16} width={80} radius="md" />
        <Skeleton height={16} width={80} radius="md" />
      </Group>
      <Divider orientation="horizontal" mb={20} />

      <Stack gap="md">
        {[...Array(5)].map((_, i) => (
          <Card withBorder={false} key={i} p="lg" radius="xl">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="md">
                  <Skeleton height={40} width={40} radius="md" />
                  <Stack gap={4}>
                    <Skeleton height={14} width={100} radius="md" />
                    <Skeleton height={12} width={150} radius="md" />
                  </Stack>
                </Group>
                <Skeleton height={14} width={80} radius="md" />
              </Group>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
