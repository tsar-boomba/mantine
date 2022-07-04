import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      sx={{
        fontSize: 18,

        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: 755px)': {
          fontSize: 14,
        },
      }}
    >
      My custom text
    </Text>
  );
}
`;

export function SxDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Add inline styles to any component with{' '}
        <Anchor component={Link} to="/styles/sx/">
          sx prop:
        </Anchor>
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
