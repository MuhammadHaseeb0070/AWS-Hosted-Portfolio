import { cn } from '@/lib/utils';
import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
} & (
    | ({ as: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: 'link' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
    const baseStyles = 'px-8 py-3 rounded-full font-medium transition-all duration-300 inline-block';
    const variantStyles = {
        primary: 'bg-primary text-primary-foreground hover:opacity-90',
        secondary: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
    };

    if (props.as === 'link') {
        const { as, ...linkProps } = props;
        return (
            <a
                {...linkProps}
                className={cn(baseStyles, variantStyles[variant], className)}
            >
                {children}
            </a>
        );
    }

    const { as, ...buttonProps } = props;
    return (
        <button
            {...buttonProps}
            className={cn(baseStyles, variantStyles[variant], className)}
        >
            {children}
        </button>
    );
};

export default Button;
