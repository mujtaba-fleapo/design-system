# Design System

Welcome to the Design System of FanFix Version 2! The Design System provides a centralized and consistent set of UI components for
the Studio, Community, and Manager applications. This Design System is based on Material UI.

## Getting Started

To use the Design System in your application, follow these steps:

1. Clone the repository: `git clone https://github.com/fanfix/frontend-v2`
2. Navigate to the Design System folder: `cd libs/design-system`
3. Install the dependencies: `yarn`
4. Start the Design System: `yarn storybook`

## Usage

The Design System includes a wide range of UI components that can be used across applications. Some of the key components available
include:

- Buttons
- Input fields
- Forms
- Navigation bars
- Cards
- Modals
- Alerts
- Typography
- Spacing

To use the Design System components, import them into your application as needed. For example:

```jsx
import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from 'design-system';

const MyComponent = () => {
  return (
    <div>
      <Typography variant="h1">Welcome!</Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
};

export default MyComponent;
```
