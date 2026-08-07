export default function FooterCard({ icon, title, children }) {
  return (
    <article className="flex-1 rounded-lg bg-brand-footer/60 p-5 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-gray-200">{children}</div>
    </article>
  );
}
