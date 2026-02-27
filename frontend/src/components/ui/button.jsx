import React, { cloneElement, forwardRef, isValidElement } from "react";
import { cn } from "../../lib/utils";

export const Button = forwardRef(
    (
        {
            className,
            variant = "primary",
            size = "md",
            asChild = false,
            isLoading = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const base =
            "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 gap-2";

        const variants = {
            primary: "bg-orange-500 text-white hover:bg-orange-600 active:scale-95 shadow-md hover:shadow-lg focus-visible:outline-orange-500",
            secondary: "bg-teal-500 text-white hover:bg-teal-600 active:scale-95 shadow-md hover:shadow-lg focus-visible:outline-teal-500",
            outline: "border-2 border-border bg-background text-foreground hover:bg-secondary focus-visible:outline-primary",
            ghost: "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-primary",
            danger: "bg-red-500 text-white hover:bg-red-600 active:scale-95 shadow-md hover:shadow-lg focus-visible:outline-red-500",
        };

        const sizes = {
            sm: "px-3 py-2 text-sm",
            md: "px-4 py-2.5 text-base",
            lg: "px-6 py-3 text-base",
            icon: "h-10 w-10 p-2"
        };

        const isDisabled = disabled || isLoading;

        if (asChild && isValidElement(children)) {
            return cloneElement(children, {
                className: cn(
                    base,
                    variants[variant],
                    sizes[size],
                    className,
                    children.props.className
                ),
                ref
            });
        }

        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                disabled={isDisabled}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin -ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
