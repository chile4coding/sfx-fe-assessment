# SFX Dashboard

A modern financial dashboard built with Next.js, Mantine UI, and Tailwind CSS. This application provides a comprehensive interface for managing payments, commerce operations, transactions, and administrative settings.

## Features

- **Payment Management**: Track transactions, customers, payouts, balances, subscriptions, and payment plans
- **Commerce Operations**: Manage referrals, audit logs, and system settings
- **Modern UI**: Built with Mantine UI components and Tailwind CSS for responsive design
- **Type-Safe**: Full TypeScript support for better code quality
- **Icons**: Custom SVG icons with hover effects and color transitions
- **Responsive Sidebar**: Collapsible navigation with smooth animations
- **Testing**: Jest and React Testing Library setup
- **Code Quality**: ESLint, Prettier, and Stylelint integration
- **Storybook**: Component documentation and testing environment

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [Mantine 8.3](https://mantine.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + PostCSS
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Icons**: [Tabler Icons React](https://tabler-icons.io/)
- **Charts**: [Recharts](https://recharts.org/)
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn 4.11.0 (or npm)

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Development & Build

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn start` - Start production server
- `yarn analyze` - Analyze application bundle size

### Testing & Quality

- `yarn typecheck` - Check TypeScript types
- `yarn lint` - Run ESLint and Stylelint
- `yarn prettier:check` - Verify code formatting
- `yarn prettier:write` - Auto-format code
- `yarn jest` - Run Jest tests
- `yarn jest:watch` - Run tests in watch mode
- `yarn test` - Run all checks (formatting, linting, types, tests)

### Documentation

- `yarn storybook` - Start Storybook dev server
- `yarn storybook:build` - Build static Storybook

## Project Structure

```
├── app/                 # Next.js app router
├── components/          # React components
│   ├── Dashboard/       # Dashboard components
│   │   ├── Sidebar.tsx  # Navigation sidebar
│   │   └── icons/       # Custom SVG icons
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── public/              # Static assets
├── translations/        # i18n translation files
├── test-utils/          # Testing utilities
└── theme.ts             # Mantine theme configuration
```

## Key Components

### Sidebar
Collapsible navigation sidebar with two main sections:
- **Payments**: Transactions, Customers, Payouts, Balances, Subscriptions, Payment Plans
- **Commerce**: Referrals, Audit Logs, Settings

Features smooth hover effects with violet color transitions for both icons and labels.

### Custom Icons
SVG-based icon components with support for:
- Custom colors via the `color` prop
- Tailwind CSS classes via the `className` prop
- Hover effects using Tailwind's `group-hover` utilities

## Styling

This project uses a hybrid approach:

- **Mantine UI**: For component structure and layout
- **Tailwind CSS**: For utility-based styling and responsive design
- **PostCSS**: For advanced CSS processing

### Hover Effects Example

```tsx
<TransactionIcon className="group-hover:text-violet-600" />
```

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `.prettierrc.mjs` - Code formatting rules
- `jest.config.cjs` - Testing configuration
- `.stylelintrc.json` - CSS linting rules

## Browser Support

Supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

See LICENSE file for details

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Contributing

To maintain code quality:
1. Run `yarn test` before committing
2. Follow the established code style
3. Write tests for new features
4. Update documentation as needed
# sfx-fe-assessment
