'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Modal } from '@/components/Modal';

const testimonials = [
  {
    quote:
      '<p>Over the past 30+ years, I’ve had the privilege of collaborating with hundreds of developers, designers, and other creative and technical professionals on countless projects. With that perspective, I can say without hesitation that Cameron stands among the very best I’ve ever worked with.</p> <p>His work is consistently next level—exceptionally creative, technically precise, and always aligned with the project’s scope, budget, and objectives. Cameron brings a rare blend of imaginative vision and disciplined execution, delivering results that not only meet expectations but routinely exceed them.</p> <p>He works with astonishing speed while never compromising quality—a combination as rare as it is valuable in this industry. Cameron is attentive, accurate, and deeply invested in producing work that truly makes an impact.</p> <p>And perhaps just as important—he’s an absolute pleasure to work with. Simply put, Cameron is one of the nicest, most genuine professionals you’ll ever meet.</p> <p>It’s with my highest possible recommendation that I wholeheartedly endorse Cameron. He’s an extraordinary talent, a true professional, and without question, a rare find.</p>',
    name: 'Mike Chesser‑Roe, Founder',
    title: 'YourBrands Radio',
  },
  {
    quote:
      '<p>Cameron is quick to communicate any blockers, risks, and complexities to the team and always has an alternative solution to offer. Cam is a problem solver, very calm and professional. He is a pleasure to work with.</p> <p>Huge kudos and thanks to the amazing team members for consistently delivering outstanding results for the client, and we can certainly say that the client is very happy.</p>',
    name: 'Mahima Joshi, Project Manager',
    title: 'Spectrum Customizer, Inc.',
  },
  {
    quote:
      'I’ve hired Cameron numerous times over the years and he’s always come through with brilliant results! On top of that, he’s quick to respond and address any issues I may have. Whenever anyone asks who my web guy is or needing web design advice, I always point them to Cameron! Highly, HIGHLY recommended.',
    name: 'Nathan Madsen, Composer & Sound Designer',
    title: 'Madsen Studios',
  },
  {
    quote:
      'One of the best things about Cam is that he’s a technical expert who also is skilled at making dramatic website “look and feel” enhancements.',
    name: 'Robert Seger, Executive Director',
    title: 'Emergency Services at Mass General Hospital'
  },
  {
    quote:
      'Cameron did a great job for us in designing graphics that we have used in multiple marketing pieces. He completed the work ahead of schedule on a tight timeline. Also, his pricing was very competive.',
    name: 'Jerry Frank, CEO',
    title: 'CSG Professional Services',
  },
  {
    quote:
      'Your testimonial could be here! I would love to hear about your experience working together. Please <a href="/contact" class="link link--underline">get in touch</a> to share your thoughts.',
    name: 'Your Name',
    title: 'Your Company',
  },
];

const stripTags = (value: string) => value.replace(/<[^>]*>/g, '').trim();
const truncateToWord = (value: string, limit: number) => {
  if (value.length <= limit) return value;
  const clipped = value.slice(0, limit).trimEnd();
  const lastSpace = clipped.lastIndexOf(' ');
  if (lastSpace <= 0) return clipped;
  return clipped.slice(0, lastSpace).trimEnd();
};

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] =
    useState<(typeof testimonials)[number] | null>(null);
  const total = testimonials.length;
  const perSlide = 3;
  const totalSlides = Math.ceil(total / perSlide);
  const quotePreviewLength = 300;

  const goPrevious = () => setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalSlides);
  const openTestimonial = (item: (typeof testimonials)[number]) => setActiveTestimonial(item);
  const closeTestimonial = () => setActiveTestimonial(null);

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
                {slide.map((item) => {
                  const itemKey = `${item.name}-${item.title}`;
                  const plainQuote = stripTags(item.quote);
                  const isLong = plainQuote.length > quotePreviewLength;
                  const previewText = isLong
                    ? `${truncateToWord(plainQuote, quotePreviewLength)}…`
                    : plainQuote;

                  return (
                    <div key={itemKey} className="testimonials__item">
                    <article className="testimonials__card testimonials__card--bubble">
                      {isLong ? (
                        <span className="testimonials__quote">“{previewText}”</span>
                      ) : (
                        <p
                          className="testimonials__quote"
                          dangerouslySetInnerHTML={{ __html: `“${item.quote}”` }}
                        />
                      )}
                      {isLong && (
                        <button
                          type="button"
                          className="testimonials__read-more"
                          onClick={() => openTestimonial(item)}
                        >
                          Read more
                        </button>
                      )}
                    </article>
                    <div className="testimonials__meta">
                      <p className="testimonials__name">{item.name}</p>
                      <p className="testimonials__title">{item.title}</p>
                    </div>
                  </div>
                  );
                })}
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
      <Modal
        isOpen={!!activeTestimonial}
        onClose={closeTestimonial}
        ariaLabel="Full testimonial"
        className="modal__panel--wide"
        showCloseButton
      >
        {activeTestimonial ? (
          <div className="testimonial-modal">
            <p
              className="testimonial-modal__quote"
              dangerouslySetInnerHTML={{ __html: activeTestimonial.quote }}
            />
            <div className="testimonial-modal__meta">
              <p className="testimonial-modal__name">{activeTestimonial.name}</p>
              <p className="testimonial-modal__title">{activeTestimonial.title}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
