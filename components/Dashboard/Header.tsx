'use client';

import {
  IconBellFilled,
  IconChevronDown,
  IconCircle,
  IconMenu2,
  IconSearch,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Image,
  Indicator,
  Menu,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useHeaderNavigation } from '@/hooks/useDashboard';

interface HeaderProps {
  userName?: string;
  userId?: string;
  userImage?: string;
  onToggleMobileNav?: () => void;
}

export function Header({
  userName = 'Martins Chidume',
  userId = 'ID 1234567',
  userImage = '/images/user.png',
  onToggleMobileNav,
}: HeaderProps) {
  const { language, languages, searchPlaceholder, liveLabel, menuItems, handleLanguageChange } =
    useHeaderNavigation(userName, userId);
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Group justify="space-between" align="center" px="md" py="sm" className=" z-50" bg="white">
      {isMobile && (
        <ActionIcon variant="subtle" onClick={onToggleMobileNav} aria-label="Toggle navigation">
          <IconMenu2 size={20} />
        </ActionIcon>
      )}
      <Image src="/favicon.svg" alt="logo" fit="contain" maw={87} />

      <TextInput
        placeholder={searchPlaceholder}
        leftSection={<IconSearch size={16} />}
        style={{ flex: 1, maxWidth: 400 }}
        size="lg"
        styles={{
          input: {
            border: 'none',
            backgroundColor: '#FCFCFC',
            borderRadius: '50px',
            '&:focus': {
              outline: '1px solid var(--mantine-color-gray-4)',
              outlineOffset: '2px',
            },
          },
        }}
      />

      <Group gap="xl">
        <Switch
          color="green.1"
          thumbIcon={<IconCircle color="#6FCF97" size={24} />}
          size="md"
          styles={{
            // track: {
            //   backgroundColor: 'var(--mantine-color-gray-3)',
            // },
            thumb: {
              backgroundColor: '#6FCF97',
              border: 'none',
            },
          }}
          label={liveLabel}
        />
        <Select
          size="md"
          value={language}
          onChange={handleLanguageChange}
          color="#969696"
          data={languages}
          rightSection={<IconChevronDown size={16} />}
          clearable={false}
          searchable={false}
          styles={{
            input: {
              borderRadius: '20px',
              width: 120,
              color: '#969696',
            },
          }}
        />
      </Group>

      <Stack align="center">
        <Indicator color="#E5A0FF" size={12}>
          <Box p={5} bg="#FAFAFA">
            <IconBellFilled size={20} fill="gray" />
          </Box>
        </Indicator>
      </Stack>

      <Menu position="bottom-end">
        <Menu.Target>
          <Group gap="" style={{ cursor: 'pointer' }}>
            <Box style={{ display: 'flex', gap: 10 }}>
              <Avatar src={userImage} radius="md" size="md" />
              <div>
                <Text style={{ fontSize: 12 }}>{userName}</Text>
                <Text style={{ fontSize: 12, color: 'var(--mantine-color-gray-6)' }}>{userId}</Text>
              </div>
            </Box>
            <IconChevronDown size={16} />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          {menuItems.map((item, index) =>
            item.label === menuItems[menuItems.length - 1].label ? (
              <div key={index}>
                <Menu.Divider />
                <Menu.Item color={item.color}>{item.label}</Menu.Item>
              </div>
            ) : (
              <Menu.Item key={index}>{item.label}</Menu.Item>
            )
          )}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
