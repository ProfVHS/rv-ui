import * as React from 'react'

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({variant = 'primary', size = 'md', children, className, ...props}, ref) => {
        return (
            <button
                ref={ref}
                className={`rvui-button rvui-button--${variant} rvui-button--${size} ${className ?? ''}`.trimStart()}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'
