export default function CTA({ primary = 'Request manpower', secondary = 'Learn more' }) {
  return (
    <div className="mt-6 flex gap-4">
      <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-700">
        {primary}
      </a>
      <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-sm font-semibold">
        {secondary}
      </a>
    </div>
  );
}
