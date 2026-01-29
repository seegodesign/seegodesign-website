'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  // {
  //   quote:
  //     'Cameron is quick to communicate any blockers, risks, and complexities to the team and always has an alternative solution to offer. Cam is a problem solver, very calm and professional. He is a pleasure to work with.',
  //   name: 'Mahima Joshi, Project Manager',
  //   title: 'Spectrum Customizer, Inc.',
  // },
  {
    quote:
      'One of the best things about Cam is that he’s a technical expert who also is skilled at making dramatic website “look and feel” enhancements.',
    name: 'Robert Seger, Executive Director',
    title: 'Emergency Services at Mass General Hospital'
  },
  {
    quote:
      'I’ve hired Cameron numerous times over the years and he’s always come through with brilliant results! On top of that, he’s quick to respond and address any issues I may have. Whenever anyone asks who my web guy is or needing web design advice, I always point them to Cameron! Highly, HIGHLY recommended.',
    name: 'Nathan Madsen, Composer & Sound Designer',
    title: 'Madsen Studios',
  },
  {
    quote:
      'Cameron did a great job for us in designing graphics that we have used in multiple marketing pieces. He completed the work ahead of schedule on a tight timeline. Also, his pricing was very competive.',
    name: 'Jerry Frank, CEO',
    title: 'CSG Professional Services',
  },
  // {
  //   quote:
  //     'The redesign paid for itself. Conversions improved, mobile usability went way up, and we finally have a site we’re proud to send traffic to.',
  //   name: 'Elena Ortiz',
  //   title: 'Head of Growth, Arborline',
  // },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const perSlide = 3;
  const totalSlides = Math.ceil(total / perSlide);

  const goPrevious = () => setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalSlides);

  const slides = useMemo(() => {
    const grouped: typeof testimonials[] = [];
    for (let i = 0; i < testimonials.length; i += perSlide) {
      grouped.push(testimonials.slice(i, i + perSlide));
    }
    return grouped;
  }, [perSlide]);

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="eyebrow">Testimonials</span>
          <div className="testimonials__header-row">
            <div>
              <h2 className="testimonials__headline">Trusted by teams who needed results</h2>
              <p className="testimonials__subhead">
                Hear from some of the clients I&apos;ve had the pleasure to work with.
              </p>
            </div>
            {totalSlides > 1 && (
              <div className="testimonials__controls">
                <button type="button" className="testimonials__control" onClick={goPrevious}>
                  <ArrowLeft size={18} />
                </button>
                <button type="button" className="testimonials__control" onClick={goNext}>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="testimonials__carousel">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={`slide-${slideIndex}`} className="testimonials__slide">
                {slide.map((item) => (
                  <div key={`${item.name}-${item.title}`} className="testimonials__item">
                    <article className="testimonials__card testimonials__card--bubble">
                      <p className="testimonials__quote">“{item.quote}”</p>
                    </article>
                    <div className="testimonials__meta">
                      <p className="testimonials__name">{item.name}</p>
                      <p className="testimonials__title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {totalSlides > 1 && (
          <div className="testimonials__dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`testimonials__dot ${index === activeIndex ? 'is-active' : ''}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
