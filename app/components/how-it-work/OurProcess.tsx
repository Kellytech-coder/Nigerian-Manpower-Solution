import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const ComplianceAndSafety = () => {
  const compliancePoints = [
    'Insurance & NSITF coverage',
    'Verified worker records',
    'Safety briefing before every deployment',
    'Proper documentation for auditors',
    'Updated licenses and certifications',
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our Compliance & <br className="hidden md:block" /> Safety Process
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            We take worker safety and regulatory compliance seriously. Every
            deployment follows Nigeria&apos;s labor, HSE, and industry standards.
          </p>
        </div>

        {/* Compliance List */}
        <ul className="space-y-4 mb-12">
          {compliancePoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center text-gray-900 font-bold text-lg"
            >
              <span className="mr-3 text-xl leading-none">•</span>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/licenses-and-compliance"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
        >
          View Licenses & Compliance
          <ChevronRight size={18} />
        </Link>

      </div>
    </section>
  );
};

export default ComplianceAndSafety;
