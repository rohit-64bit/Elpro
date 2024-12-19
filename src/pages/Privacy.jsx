import React from 'react'

const Privacy = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We collect both personal and non-personal information when you use our services or visit our website.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Personal Information</strong>: This includes your name, address, phone number, email address, and payment information when you book our cleaning services.</li>
                        <li><strong>Non-Personal Information</strong>: This includes browser type, device information, and website analytics to improve our services and website functionality.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We use your personal information to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>Provide and manage our janitorial services, including scheduling and billing.</li>
                        <li>Communicate with you regarding appointments, services, or customer support.</li>
                        <li>Improve our service offerings and enhance the user experience.</li>
                        <li>Comply with legal obligations, such as tax records and accounting.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Data Sharing</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We do not sell or share your personal information with third parties except in the following cases:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Service Providers</strong>: We may share your data with third-party vendors (e.g., payment processors) to perform necessary business functions.</li>
                        <li><strong>Legal Compliance</strong>: If required by law, we may disclose your information to government authorities or regulatory bodies in compliance with federal or state regulations.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Data Security</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction. This includes encryption of sensitive data and regular security audits.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Your Rights</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Depending on your location and applicable laws, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Right to Access</strong>: You can request a copy of the data we hold about you.</li>
                        <li><strong>Right to Rectification</strong>: You can request that we correct inaccurate or incomplete information.</li>
                        <li><strong>Right to Deletion</strong>: You can request that we delete your personal data, subject to legal obligations like record-keeping for tax purposes.</li>
                        <li><strong>Right to Opt-Out</strong>: You may opt out of certain data collection, such as for marketing purposes.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Compliance with Federal and State Laws</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We comply with federal privacy laws such as the <em>Gramm-Leach-Bliley Act</em> (for financial data protection) and any applicable state laws, including <em>New York State consumer protection laws</em> and <em>California Consumer Privacy Act (CCPA)</em> if your data falls under these jurisdictions.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Changes to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We reserve the right to update this privacy policy as needed. Any changes will be posted on our website with the effective date of the updated policy.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions or concerns regarding this privacy policy, please contact us at:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Email</strong>: <a href="mailto:info@elprocleaningservice.com" className="text-blue-500">info@elprocleaningservice.com</a></li>
                        <li><strong>Address</strong>: Queens, New York</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Privacy