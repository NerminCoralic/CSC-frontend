import { XCircle } from "lucide-react";

interface EmptyProps {
  title: string;
  description: string;
}

export default function Empty({ title, description }: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
      <div className="relative mb-4">
        <XCircle className="w-16 h-16 text-[#30af5b] relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted to-transparent opacity-20 animate-pulse" />
      </div>
      <h3 className="text-2xl font-semibold tracking-tight mb-2 relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-muted to-transparent opacity-20 animate-pulse" />
      </h3>
      <div className="relative max-w-sm">
        <p className="text-muted-foreground relative z-10">{description}</p>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-muted to-transparent opacity-20 animate-pulse" />
      </div>
    </div>
  );
}
