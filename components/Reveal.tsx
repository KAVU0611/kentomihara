import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** 表示開始の遅延 (ms)。連続要素を少しずつずらす用 */
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * スクロールでビューポートに入った時、静かにフェードイン（控えめなモーション）。
 * IntersectionObserver で一度だけ発火。
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as = 'div' }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // モーションを抑制する設定のユーザーには即時表示
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
