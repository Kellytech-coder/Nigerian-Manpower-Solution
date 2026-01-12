import React from 'react';

const TermsOfServiceContent = () => {
  return (
    <section className="bg-[#051129] text-white py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section 1: Acceptance of Terms */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using this website, you agree to comply with these <span className="font-bold">Terms & Conditions</span>.
          </p>
          <p className="text-gray-300 mt-4 italic">
            If you do <span className="not-italic font-bold underline">not</span> agree, please discontinue use.
          </p>
        </article>

        {/* Section 2: Our Services */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-bold">Nigerian Manpower Solutions.ng</span> provides manpower sourcing, staffing solutions, labor supply, recruitment assistance, and related corporate services.
          </p>
        </article>

        {/* Section 3: Use of Website */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Use of Website</h2>
          <p className="text-gray-400 mb-4">Users agree to:</p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
            <li>Provide accurate information</li>
            <li>Not misuse or hack the website</li>
            <li>Not impersonate any person or organization</li>
            <li>Not upload harmful files or malware</li>
          </ol>
          <p className="mt-6 font-bold text-white uppercase tracking-wide text-sm">
            We reserve the right to restrict or terminate access for misuse.
          </p>
        </article>

        {/* Section 4: Job Application & Recruitment */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Job Application & Recruitment</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Applicants must ensure that all submitted information (CV, credentials, personal details) is accurate. Providing false information may lead to:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
            <li>Disqualification</li>
            <li>Blacklisting</li>
            <li>Legal action (If necessary)</li>
          </ol>
        </article>

        {/* Section 5: Intellectual Property Rights */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Intellectual Property Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            All websites content including text, graphics, logos, icons, images, and layouts are owned by Nigerian Manpower Solution.ng.
          </p>
          <p className="mt-6 font-bold text-white uppercase tracking-wide text-sm">
            Users may not reproduce, distribute, or use content without permission.
          </p>
        </article>

        {/* Section 6: Limitation of Liability */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Limitation of Liability</h2>
          <p className="text-gray-400 mb-4">We are <span className="italic">not</span> liable for:</p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
            <li>Losses resulting from misuse of the website</li>
            <li>Third-party actions</li>
            <li>Delays or unavailability of services</li>
            <li>Technical issues or downtime</li>
          </ol>
        </article>

        {/* Section 7: Indemnification */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Indemnification</h2>
          <p className="text-gray-300 leading-relaxed">
            Users agree to indemnify and hold <span className="font-bold">Nigerian Manpower Solutions</span> harmless from claims, losses, or damages arising from misuse of the website or violation of these terms.
          </p>
        </article>

        {/* Section 8: Links to Third-party Websites */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Links to Third-party Websites</h2>
          <p className="text-gray-300 leading-relaxed">
            We are not responsible for external content or services accessed through third-party links.
          </p>
        </article>

        {/* Section 9: Termination */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Termination</h2>
          <p className="text-gray-300 leading-relaxed">
            We may suspend or terminate user access for violations of these <span className="underline">Terms</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Without notice to the users
          </p>
        </article>

        {/* Section 10: Governing Law */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These <span className="underline">Terms</span> are governed by the laws of the <span className="font-bold">Federal Republic of Nigeria</span>.
          </p>
        </article>

        {/* Section 11: Changes to Terms */}
        <article>
          <h2 className="text-4xl font-bold mb-6">Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these <span className="underline">Terms</span> at any time. Continued use of the website signifies acceptance of updated <span className="underline">Terms</span>.
          </p>
        </article>

      </div>
    </section>
  );
};

export default TermsOfServiceContent;