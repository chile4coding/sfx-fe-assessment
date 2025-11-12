'use client';

import { Card, Skeleton, Stack, Group } from '@mantine/core';

interface CardSkeletonProps {
  height?: number;
  lines?: number;
}

export function CardSkeleton({ height = 300, lines = 3 }: CardSkeletonProps) {
  return (
    <Card p="lg" radius="xl" withBorder>
      <Stack gap="md">
        {/* Title */}
        <Skeleton height={20} width={150} radius="md" />

        {/* Content */}
        <Skeleton height={height} radius="md" />

        {/* Additional lines */}
        {[...Array(lines)].map((_, i) => (
          <Skeleton key={i} height={16} radius="md" />
        ))}
      </Stack>
    </Card>
  );
}
