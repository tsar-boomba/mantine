import React, { cloneElement, forwardRef, useEffect } from 'react';
import { isElement, createEventHandler } from '@mantine/utils';
import { useMenuContext } from '../Menu.context';
import { Popover } from '../../Popover';
import { MENU_ERRORS } from '../Menu.errors';

export interface MenuTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export const MenuTarget = forwardRef<HTMLElement, MenuTargetProps>(
  ({ children, refProp = 'ref', ...others }, ref) => {
    if (!isElement(children)) {
      throw new Error(MENU_ERRORS.children);
    }

    const ctx = useMenuContext();

    const onClick = createEventHandler(
      children.props.onClick,
      () => ctx.trigger === 'click' && ctx.toggleDropdown()
    );

    const onMouseEnter = createEventHandler(
      children.props.onMouseEnter,
      () => ctx.trigger === 'hover' && ctx.openDropdown()
    );

    const onMouseLeave = createEventHandler(
      children.props.onMouseLeave,
      () => ctx.trigger === 'hover' && ctx.closeDropdown()
    );

    useEffect(() => ctx.closeDropdown, [children]);

    return (
      <Popover.Target refProp={refProp} popupType="menu" ref={ref} {...others}>
        {cloneElement(children, {
          onClick,
          onMouseEnter,
          onMouseLeave,
          'data-expanded': ctx.opened ? true : undefined,
        })}
      </Popover.Target>
    );
  }
);

MenuTarget.displayName = '@mantine/core/MenuTarget';
