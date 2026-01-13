import { useEffect, useMemo, useState } from 'react';
import PrivacyContent from '../components/privacy/PrivacyContent';
import PrivacyToc from '../components/privacy/PrivacyToc';

const Privacy = () => {
  const sections = useMemo(
    () => [
      { id: 'introduction', label: 'Introduction' },
      { id: 'information-collection', label: 'Information We Collect' },
      { id: 'use-of-information', label: 'How We Use Your Information' },
      { id: 'data-sharing', label: 'Data Sharing & Disclosure' },
      { id: 'cookies', label: 'Cookies & Tracking' },
      { id: 'data-security', label: 'Data Security' },
      { id: 'your-rights', label: 'Your Rights' },
      { id: 'age-restriction', label: 'Age Restriction' },
      { id: 'changes', label: 'Changes to Policy' },
      { id: 'contact', label: 'Contact Us' },
    ],
    []
  );

  const [active, setActive] = useState('introduction');

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      let current = sections[0]?.id ?? 'introduction';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (y + 120 >= top) current = s.id;
      }
      setActive(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  return (
    <main id="privacy-policy-main" className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <PrivacyToc sections={sections} activeId={active} />
        <PrivacyContent />
      </div>
    </main>
  );
};

export default Privacy;

