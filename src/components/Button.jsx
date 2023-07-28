import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-red-600 hover:brightness-125',
  secondary: 'bg-zinc-950 hover:brightness-125',
  tertiary: 'bg-zinc-200 text-zinc-950 hover:brightness-75',
};

const sizes = {
  small: 'px-6 py-3',
  base: 'px-8 py-4',
};

const Button = ({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'base',
  transition = true,
  icon,
  className = '',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'flex cursor-pointer justify-center text-xs font-semibold uppercase tracking-[.30em]',
        variants[variant],
        sizes[size],
        transition && 'transition duration-500',
        icon && 'flex items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
      {icon && icon}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'base']),
  transition: PropTypes.bool,
  icon: PropTypes.element,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'base',
  transition: true,
  icon: null,
  className: '',
};

export default Button;
