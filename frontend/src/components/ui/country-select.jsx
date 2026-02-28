import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { COUNTRIES } from "../../data/constants";
import { cn } from "../../lib/utils";

export function CountrySelect({
    value,
    onChange,
    countries = COUNTRIES,
    placeholder = "Choisis ton pays",
    className,
    disabled,
    ...ariaProps
}) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const triggerRef = useRef(null);
    const listRef = useRef(null);
    const searchInputRef = useRef(null);

    const sortedCountries = useMemo(
        () =>
            [...countries].sort((a, b) =>
                a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
            ),
        [countries]
    );

    const selectedCountry = useMemo(
        () => sortedCountries.find((country) => country.id === value || country.name === value),
        [sortedCountries, value]
    );

    const filteredCountries = useMemo(() => {
        if (!search.trim()) return sortedCountries;
        const searchLower = search.toLowerCase();
        return sortedCountries.filter((country) =>
            country.name.toLowerCase().includes(searchLower)
        );
    }, [sortedCountries, search]);

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

    const handleSelect = (countryId) => {
        onChange(countryId);
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
                <span className={cn("truncate", selectedCountry ? "text-foreground" : "text-muted-foreground")}>
                    {selectedCountry?.name || placeholder}
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
                            placeholder="Rechercher un pays..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/60"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.length === 0 ? (
                            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                Aucun pays trouvé
                            </div>
                        ) : (
                            filteredCountries.map((country) => {
                                const isSelected = country.id === selectedCountry?.id;
                                return (
                                    <button
                                        key={country.id}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        className={cn(
                                            "flex w-full items-center justify-between px-4 py-2.5 text-sm transition text-left",
                                            "hover:bg-secondary/60 focus:bg-secondary/60",
                                            isSelected && "bg-primary/10 text-primary font-semibold"
                                        )}
                                        onClick={() => handleSelect(country.id)}
                                    >
                                        <span>{country.name}</span>
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
