import React from 'react'

const Terms = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Service Agreement</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Upon booking a service with Elpro Cleaning Services, you enter into a service agreement. Our team will perform the requested cleaning services as outlined in your appointment confirmation.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Scope of Services</strong>: We offer residential, commercial, post-construction, Airbnb, and move-in/move-out cleaning services.</li>
                        <li><strong>Right to Refuse Service</strong>: We reserve the right to refuse service for any unsafe working conditions or other reasonable cause.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Payment Terms</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Payment Methods</strong>: We accept credit cards, bank transfers, and other forms of payment approved by us.</li>
                        <li><strong>Payment Timing</strong>: Payments are due at the time of service unless other arrangements have been made in writing.</li>
                        <li><strong>Late Payments</strong>: If payments are not received on time, Elpro Cleaning Services reserves the right to charge late fees or terminate future service agreements.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Cancellations and Rescheduling</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>Cancellation Policy</strong>: Cancellations must be made at least 24 hours prior to the scheduled service. Failure to cancel in time may result in a cancellation fee of up to 50% of the service cost.</li>
                        <li><strong>Rescheduling</strong>: We will work with you to reschedule any service without penalty if notice is provided more than 24 hours before the appointment.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Liability and Damage</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Elpro Cleaning Services is committed to providing professional and careful cleaning services. However, we are not responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>Pre-existing conditions, such as damages to floors or surfaces that are old or not properly maintained.</li>
                        <li>Damage to delicate items not properly secured prior to our service (e.g., artwork, heirlooms).</li>
                        <li>Loss or damage caused by external factors beyond our control (e.g., weather conditions, structural issues).</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        We are fully insured for any liabilities that may arise during the provision of our services. You must notify us of any claims within 24 hours of service.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Warranties and Disclaimer</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We provide our services "as is" and make no warranties or guarantees of any kind beyond those required by law. We strive for the highest standards of service but do not guarantee any specific results.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Compliance with Federal and State Laws</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our services comply with all applicable federal and state laws, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li><strong>OSHA regulations</strong> related to workplace safety for janitorial services.</li>
                        <li><strong>Fair Labor Standards Act (FLSA)</strong> and <strong>New York State labor laws</strong>, ensuring our employees are paid in accordance with applicable wage and hour laws.</li>
                        <li><strong>EPA guidelines</strong> for the use of cleaning products in accordance with environmental safety.</li>
                        <li>We also adhere to the <strong>Service Contract Act</strong> when dealing with commercial clients that require compliance with federal regulations related to government contracts.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Intellectual Property</h2>
                    <p className="text-gray-700 leading-relaxed">
                        All content on our website, including text, images, and logos, is the intellectual property of Elpro Cleaning Services and may not be used or reproduced without our express written consent.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Changes to Terms</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Governing Law</h2>
                    <p className="text-gray-700 leading-relaxed">
                        These terms are governed by the laws of the <strong>State of New York</strong>. Any disputes arising from this agreement will be subject to the exclusive jurisdiction of the state and federal courts located in <strong>New York City</strong>.
                    </p>
                </section>

                <section>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Cancellation Policy</h2>

                    <p className="text-gray-700 leading-relaxed">
                        There is a $100 to $150 Cancelation Fee for bookings already confirmed by the client. Fee is paid upon cancellation. $150 for Deep Cleanings, Move in/Out. $100 for Regular Cleanings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                        For any questions regarding these terms, please contact us at:
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

export default Terms