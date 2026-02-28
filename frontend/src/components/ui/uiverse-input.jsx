import * as React from "react";
import { cn } from "../../lib/utils";

const UiverseInput = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <div className="relative group">
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-xl border-2 border-border bg-secondary/30 px-4 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
                    "focus:border-primary focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)]",
                    "hover:border-border",
                    className
                )}
                ref={ref}
                {...props}
            />
            {/* Animated bottom line effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within:w-[80%] opacity-0 group-focus-within:opacity-100" />
        </div>
    );
});

UiverseInput.displayName = "UiverseInput";

export { UiverseInput };
