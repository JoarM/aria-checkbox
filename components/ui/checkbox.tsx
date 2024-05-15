import { Check } from "lucide-react";

export function Checkbox() {
    return (
        <span className="relative">
            <input type="checkbox" className="inset-0 absolute opacity-0 peer z-10 [&_+span>svg]:checked:opacity-100" />
            <span className="bg-background border-border border rounded-sm size-4 inline-flex items-center justify-center peer-hover:bg-muted/50 peer-hover:peer-checked:bg-primary transition-all peer-focus-visible:[box-shadow:_0px_0px_0px_3px_hsl(var(--primary)/.5)] peer-checked:bg-primary">
                <Check 
                className="size-4 opacity-0 text-primary-foreground"
                />
            </span>
        </span>
    )
}