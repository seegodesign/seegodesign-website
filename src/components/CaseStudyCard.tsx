'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  client: string;
  image: string;
  problem: string;
  work: string;
  outcome: string;
  tech: string[];
  index: number;
}

export function CaseStudyCard({
  title,
  client,
  image,
  problem,
  work,
  outcome,
  tech,
  index,
}: CaseStudyCardProps) {

  return (
    <div
      className="cursor-glow bg-slate-900 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-shadow border border-slate-800"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className={`relative h-64 md:h-full min-h-[400px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-secondary)]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-sm text-[color:var(--brand-secondary)]">{client}</span>
          </div>
          <h3 className="text-slate-100 text-2xl mb-6">
            {title}
          </h3>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                </div>
                <div>
                  <h4 className="text-slate-100 mb-1">The Problem</h4>
                  <p className="text-slate-300">{problem}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[color:var(--color-surface-muted)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[color:var(--brand-primary)]"></div>
                </div>
                <div>
                  <h4 className="text-slate-100 mb-1">The Work</h4>
                  <p className="text-slate-300">{work}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="text-slate-100 mb-1">The Outcome</h4>
                  <p className="text-slate-300">{outcome}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[color:var(--color-surface-muted)] text-[color:var(--brand-primary)] rounded-full text-sm border border-[color:var(--brand-primary)]/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
