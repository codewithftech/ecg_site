const PrivacyToc = ({ sections, activeId }) => {
  return (
    <aside id="sidebar-nav" className="lg:w-64 flex-shrink-0">
      <div className="bg-card rounded-xl border border-border p-6 lg:sticky lg:top-24">
        <h3 className="font-bold text-foreground mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`sidebar-nav block px-4 py-2 rounded-lg text-sm text-secondary hover:bg-muted transition-colors ${
                activeId === s.id ? 'active' : ''
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default PrivacyToc;


