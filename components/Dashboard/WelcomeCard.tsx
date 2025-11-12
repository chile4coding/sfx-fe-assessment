'use client';

import { Card, Group, Text } from '@mantine/core';
import HandWaveIcon from './icons/HandWaveIcon';
import { useWelcomeCard } from '@/hooks/useDashboard';

interface WelcomeCardProps {
  greeting?: string;
  amount?: string;
  subtitle?: string;
}

export function WelcomeCard({
  greeting = 'Hey Martins!',
  amount = 'You earned NGN 3,000,000 this month.',
}: WelcomeCardProps) {
  const { title, subtitle } = useWelcomeCard();

  return (
    <Card p="lg" radius="md" withBorder={false}>
      <Group gap="md" fw={600} mb="sm" c="#FFA14E">
        <HandWaveIcon /> {title}
      </Group>
      <Text size="xl" fw={700} mb="md" c="black">
        {subtitle}
      </Text>
    </Card>
  );
}
