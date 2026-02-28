import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { CITIES } from "../../data/constants";
import { cn } from "../../lib/utils";

export function CitySelect({
    value,
    onChange,
    cities,
    placeholder = "Choisis ta ville",
    className,
    disabled,
    ...ariaProps
}) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const triggerRef = useRef(null);
    const listRef = useRef(null);
    const searchInputRef = useRef(null);

    const options = useMemo(() => {
        const source = cities ?? CITIES;
        return [...source].sort((a, b) =>
            a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
        );
    }, [cities]);

    const selectedCity = useMemo(
        () => options.find((city) => city.id === value || city.name === value),
        [options, value]
    );

    const filteredCities = useMemo(() => {
        if (!search.trim()) return options;
        const searchLower = search.toLowerCase();
        return options.filter((city) =>
            city.name.toLowerCase().includes(searchLower)
        );
    }, [options, search]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                listRef.current &&
                !listRef.current.contains(event.target) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target)
            ) {
                setOpen(false);
                setSearch("");
            }
        };

        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
                setSearch("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    useEffect(() => {
        if (open && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [open]);

    const handleSelect = (cityId) => {
        onChange(cityId);
        setOpen(false);
        setSearch("");
    };

    return (
        <div className="relative w-full">
            <button
                ref={triggerRef}
                type="button"
                disabled={disabled}
                aria-expanded={open}
                aria-haspopup="listbox"
                className={cn(
                    "flex w-full items-center justify-between gap-2 rounded-xl border-2 border-border bg-secondary/30 px-4 h-12 text-left text-foreground transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary",
                    "hover:border-border",
                    disabled && "opacity-60 cursor-not-allowed",
                    className
                )}
                onClick={() => setOpen((prev) => !prev)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setOpen((prev) => !prev);
                    }
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setOpen(true);
                    }
                }}
                {...ariaProps}
            >
                <span className={cn("truncate", selectedCity ? "text-foreground" : "text-muted-foreground")}>
                    {selectedCity?.name || placeholder}
                </span>
                <ChevronsUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
            </button>

            {open && (
                <div
                    ref={listRef}
                    role="listbox"
                    className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover text-foreground shadow-lg"
                >
                    <div className="p-2 border-b border-border/50">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Rechercher une ville..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/60"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {filteredCities.length === 0 ? (
                            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                Aucune ville trouvée
                            </div>
                        ) : (
                            filteredCities.map((city) => {
                                const isSelected = city.id === selectedCity?.id;
                                return (
                                    <button
                                        key={city.id}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        className={cn(
                                            "flex w-full items-center justify-between px-4 py-2.5 text-sm transition text-left",
                                            "hover:bg-secondary/60 focus:bg-secondary/60",
                                            isSelected && "bg-primary/10 text-primary font-semibold"
                                        )}
                                        onClick={() => handleSelect(city.id)}
                                    >
                                        <span>{city.name}</span>
                                        {isSelected && <Check className="h-4 w-4" />}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
