'use client';

import { Box, Stack, Group, Skeleton, Divider } from '@mantine/core';

export function SidebarSkeleton() {
  return (
    <Box component="nav" w={240} p="md" h="100%">
      <Stack gap="lg">
        {/* Payments Section */}
        <div>
          <Group justify="space-between" mb="md">
            <Skeleton height={16} width={80} radius="md" />
            <Skeleton height={16} width={16} radius="md" />
          </Group>
          <Stack gap="xs" pl="md">
            {[...Array(6)].map((_, i) => (
              <Group key={i} gap="xs">
                <Skeleton height={32} width={32} radius="md" />
                <Skeleton height={14} width={100} radius="md" />
              </Group>
            ))}
          </Stack>
        </div>

        {/* Commerce Section */}
        <div>
          <Divider orientation="horizontal" />
          <Group justify="space-between" my="md">
            <Skeleton height={16} width={80} radius="md" />
            <Skeleton height={16} width={16} radius="md" />
          </Group>
          <Divider orientation="horizontal" mb="md" />
          <Stack gap="xs" pl="md">
            {[...Array(3)].map((_, i) => (
              <Group key={i} gap="xs">
                <Skeleton height={32} width={32} radius="md" />
                <Skeleton height={14} width={100} radius="md" />
              </Group>
            ))}
          </Stack>
        </div>
      </Stack>
    </Box>
  );
}
