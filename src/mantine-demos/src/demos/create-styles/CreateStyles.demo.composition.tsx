import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { createStyles } from '@mantine/core';

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  button: {
    // assign reference to selector
    ref: getRef('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: \`\${theme.spacing.sm}px \${theme.spacing.lg}px\`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    padding: theme.spacing.xl,

    // reference button with nested selector
    [\`&:hover .\${getRef('button')}\`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => ({
  button: {
    // assign reference to selector
    ref: getRef('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    padding: theme.spacing.xl,

    // reference button with nested selector
    [`&:hover .${getRef('button')}`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}

export const createStylesComposition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
