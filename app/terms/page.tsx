export const metadata = {
  title: "Terms of Service | BrightStartEd",
  description: "Terms of Service for BrightStartEd - Educational consulting services and professional development for early childhood educators."
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 prose prose-slate max-w-4xl">
      <h1>Terms of Service</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the BrightStartEd website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Description of Services</h2>
          <p>
            BrightStartEd provides educational consulting services, professional development training, and support for early childhood educators and institutions. Our services include but are not limited to:
          </p>
          <ul>
            <li>Educational consulting and strategic planning</li>
            <li>Professional development workshops and training sessions</li>
            <li>Curriculum development and assessment</li>
            <li>Compliance and accreditation support</li>
            <li>Educational technology integration guidance</li>
            <li>Data analysis and reporting services</li>
          </ul>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when engaging our services</li>
            <li>Maintain the confidentiality of any account credentials or access information</li>
            <li>Use our services only for lawful purposes and in accordance with these terms</li>
            <li>Respect intellectual property rights and not reproduce or distribute our materials without permission</li>
            <li>Notify us immediately of any unauthorized use of your account or any other security concerns</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property Rights</h2>
          <p>
            All content, materials, and intellectual property on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, are the property of BrightStartEd or its content suppliers and are protected by United States and international copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
          </p>
          <ul>
            <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
            <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
            <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
          </ul>
        </section>

        <section>
          <h2>5. Privacy and Data Protection</h2>
          <p>
            Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. By using our services, you consent to the collection and use of information as detailed in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>6. Service Availability and Modifications</h2>
          <p>
            We strive to provide reliable and high-quality services, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, BrightStartEd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your use or inability to use our services</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our services</li>
            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
          </ul>
          <p>
            In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for accessing our services during the twelve (12) month period prior to any cause of action arising.
          </p>
        </section>

        <section>
          <h2>8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless BrightStartEd and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms of Service or your use of our services.
          </p>
        </section>

        <section>
          <h2>9. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Service and any disputes arising out of or related to these terms or our services shall be governed by and construed in accordance with the laws of the state where BrightStartEd is incorporated, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="mb-2"><strong>Email:</strong> legal@brightstarted.org</p>
            <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
            <p><strong>Phone:</strong> [Your Business Phone]</p>
          </div>
        </section>

        <section>
          <h2>12. Severability</h2>
          <p>
            If any provision of these Terms of Service is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
          </p>
        </section>
      </div>
    </div>
  )
}
