'use client';

import { IconChevronRight } from '@tabler/icons-react';
import { ActionIcon, Avatar, Card, Divider, Group, Stack, Text } from '@mantine/core';
import { DEFAULT_MESSAGES, Message, useMessagesCard } from '@/hooks/useDashboard';

interface MessagesCardProps {
  messages?: Message[];
}

export function MessagesCard({ messages = DEFAULT_MESSAGES }: MessagesCardProps) {
  const { stats, title } = useMessagesCard(messages);

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
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::WebkitScrollbar': {
            display: 'none',
          },
        },
      }}
      withBorder={false}
    >
      <Group justify="space-between" mb="lg">
        <Text fw={600} size="md">
          {stats}
        </Text>
        <Text fw={700} size="md" c={'dark'}>
          {title}
        </Text>
      </Group>
      <Divider orientation="horizontal" mb={20} />

      <Stack gap="md">
        {messages.map((message) => (
          <Card withBorder={false} key={message.id} p="lg" radius="xl">
            <Group key={message.id} justify="space-between" p="xs" style={{ cursor: 'pointer' }}>
              <Group gap="md" style={{ flex: 1 }}>
                <Avatar size="md" color={message.avatarColor} radius="md">
                  {message.initials}
                </Avatar>
              </Group>
              <Group gap="xs" align="flex-start">
                <Text size="xs" c="dimmed" style={{ whiteSpace: 'nowrap' }}>
                  {message.timestamp}
                </Text>
              </Group>
            </Group>

            <Stack px={'xs'} gap={0} style={{ flex: 1 }}>
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500} c="dark">
                    {message.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {message.preview}
                  </Text>
                </div>

                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconChevronRight size={32} color="black" />
                </ActionIcon>
              </Group>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
