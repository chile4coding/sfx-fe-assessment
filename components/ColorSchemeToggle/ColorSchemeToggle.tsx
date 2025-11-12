'use client';

import { IconStar, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Group justify="end" mt="xl">
      {colorScheme === 'light' && (
        <ActionIcon size="lg" variant="white" onClick={() => setColorScheme('dark')}>
          <IconStar />
        </ActionIcon>
      )}
      {colorScheme === 'dark' && (
        <ActionIcon size="lg" variant="white" onClick={() => setColorScheme('light')}>
          <IconSun />
        </ActionIcon>
      )}
    </Group>
  );
}
