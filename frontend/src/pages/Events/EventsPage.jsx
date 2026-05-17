import React from 'react';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-saffron-100 flex items-center justify-center">
          <Calendar size={18} className="text-saffron" />
        </div>
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">Événements</h1>
          <p className="text-xs text-muted-foreground">Bientôt disponible</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-cream-200 flex items-center justify-center mx-auto">
          <Calendar size={28} className="text-brown-400" />
        </div>
        <p className="font-display font-semibold text-foreground">Les événements arrivent bientôt</p>
        <p className="text-sm text-muted-foreground">
          Soirées, rencontres, événements culturels près de chez toi.
        </p>
      </div>
    </div>
  );
}
