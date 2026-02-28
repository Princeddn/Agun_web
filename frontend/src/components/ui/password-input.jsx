import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../lib/utils";

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative group">
            <input
                type={showPassword ? "text" : "password"}
                className={cn(
                    "flex h-12 w-full rounded-xl border-2 border-border bg-secondary/30 px-4 py-2 pr-10 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
                    "focus:border-primary focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)]",
                    "hover:border-border",
                    className
                )}
                ref={ref}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none"
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within:w-[80%] opacity-0 group-focus-within:opacity-100" />
        </div>
    );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
