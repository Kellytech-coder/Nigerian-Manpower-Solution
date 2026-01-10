import React from 'react';

const PrivacyContent = () => {
  const tableOfContents = [
    { name: 'Information We Collect', id: 'info-collect' },
    { name: 'How We Use Your Information', id: 'how-use' },
    { name: 'Legal Basis for Processing', id: 'legal-basis' },
    { name: 'Data Sharing & Disclosure', id: 'sharing' },
    { name: 'Data Retention', id: 'retention' },
    { name: 'Data Security', id: 'security' },
    { name: 'Your Rights', id: 'rights' },
    { name: 'Cookies Policy', id: 'cookies' },
    { name: 'Third-party Links', id: 'links' },
    { name: 'Changes to This Policy', id: 'changes' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <section className="bg-[#051129] text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-10">
            <h3 className="text-xl font-bold mb-6">Table of contents</h3>
            <nav className="flex flex-col space-y-4">
              {tableOfContents.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className={`text-sm hover:text-[#ff6f00] transition-colors ${item.id === 'info-collect' ? 'bg-white/10 p-2 rounded border-l-2 border-[#ff6f00] font-bold' : 'text-gray-400'}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-12 max-w-3xl">
          
          <article>
            <h2 className="text-4xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Nigerian Manpower Solutions (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              This Privacy Policy explains how we collect, use, store, and safeguard information when you interact with our website, request manpower services, submit a contact form, or apply for job opportunities. By using our website, you agree to the practices described in this policy.
            </p>
          </article>

          <article id="info-collect">
            <h2 className="text-4xl font-bold mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">A) Personal Information</h4>
                <p className="text-gray-400 mb-2">Collected when you fill forms or contact us:</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company/organization</li>
                  <li>Job title</li>
                  <li>Message details</li>
                </ol>
              </div>

              <div>
                <h4 className="font-bold mb-2">B) Recruitment & Employment Information</h4>
                <p className="text-gray-400 mb-2">Collected when applying for jobs:</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-2">
                  <li>CV/resume</li>
                  <li>Education & work history</li>
                  <li>Skills & Certifications</li>
                  <li>Identification details (where applicable)</li>
                  <li>References</li>
                </ol>
              </div>

              <div>
                <h4 className="font-bold mb-2">C) Automatically Collected Data</h4>
                <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Cookies & analytics data</li>
                </ol>
              </div>
            </div>
          </article>

          <article id="how-use">
            <h2 className="text-4xl font-bold mb-6">How we use Your Information</h2>
            <p className="text-gray-400 mb-4">We use collected information to:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Provide manpower services</li>
              <li>Respond to inquiries</li>
              <li>Process job applications</li>
              <li>Improve our website and user experience</li>
              <li>Verify identities</li>
              <li>Conduct internal reporting</li>
              <li>Comply with government or legal requirements</li>
            </ol>
            <p className="mt-6 font-bold text-white">We do not sell your data.</p>
          </article>

          <article id="legal-basis">
            <h2 className="text-4xl font-bold mb-6">Legal Basis for Processing</h2>
            <p className="text-gray-400 mb-4">We process personal data based on:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests</li>
            </ol>
          </article>

          <article id="sharing">
            <h2 className="text-4xl font-bold mb-6">Data Sharing & Disclosure</h2>
            <p className="text-gray-400 mb-4">We may share information with:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Client companies requesting manpower</li>
              <li>Background verification agencies</li>
              <li>Government or regulatory bodies</li>
              <li>Technology and hosting partners</li>
              <li>Internal HR & operations teams</li>
            </ol>
            <p className="mt-6 font-bold text-white">We do not share data with unauthorized third parties.</p>
          </article>

          <article id="retention">
            <h2 className="text-4xl font-bold mb-6">Data Retention</h2>
            <p className="text-gray-400 mb-4">We retain personal information only for as long necessary to fulfill:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Service delivery</li>
              <li>Legal requirements</li>
              <li>Employment records</li>
              <li>Business operations</li>
            </ol>
          </article>

          <article id="security">
            <h2 className="text-4xl font-bold mb-6">Data Security</h2>
            <p className="text-gray-400 mb-4">We use administrative, technical, and physical safeguards to protect your data from:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Unauthorized access</li>
              <li>Loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
            </ol>
          </article>

          <article id="rights">
            <h2 className="text-4xl font-bold mb-6">Your Rights</h2>
            <p className="text-gray-400 mb-4">Depending on applicable laws, you have the right to:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
              <li>Restrict processing</li>
            </ol>
            <p className="mt-6 text-gray-300">To exercise rights, email: <span className="font-bold text-[#ff6f00]">Privacy@nigerianmanpowersolutions.com</span></p>
          </article>

          <article id="cookies">
            <h2 className="text-4xl font-bold mb-6">Cookies Policy</h2>
            <p className="text-gray-400 mb-4">We use cookies to:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
              <li>Improve performance</li>
              <li>Track website analytics</li>
              <li>Personalize browsing</li>
            </ol>
            <p className="mt-4 text-gray-300 text-sm italic">You can disable cookies in your browser settings.</p>
          </article>

          <article id="links">
            <h2 className="text-4xl font-bold mb-6">Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may link to external sites. We are not <span className="underline">responsible</span> for their privacy practices.
            </p>
          </article>

          <article id="changes">
            <h2 className="text-4xl font-bold mb-6">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this <span className="font-bold">Privacy Policy</span>. Revised versions will be posted on this page with an updated date.
            </p>
          </article>

          <article id="contact" className="pt-10 border-t border-white/10">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-400 mb-4">For privacy-related questions:</p>
            <div className="space-y-1">
              <p className="text-gray-300"><span className="font-bold">Email:</span> <a href="mailto:privacy@nigerianmanpowersolutions.com" className="text-[#ff6f00] hover:underline">privacy@nigerianmanpowersolutions.com</a></p>
              <p className="text-gray-300"><span className="font-bold">Phone:</span> +234 000 000 0000</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;