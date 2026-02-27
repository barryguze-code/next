import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
   <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto shadow-lg rounded-2xl p-10">
        
        <h1 className="text-3xl font-bold mb-4 text-gray-300">
          Next AI Commerce Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: Feb 27, 2026
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            By accessing, connecting to, or using the Next AI Commerce platform 
            (the "Platform") or website, you acknowledge that you have read and 
            understood these Terms of Service and our Privacy Policy. These terms 
            constitute a binding and enforceable legal contract between Next AI 
            Commerce and you. If you do not agree, please do not use any part 
            of the Platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Eligibility</h2>
          <p className="text-gray-400 leading-relaxed">
            The Platform is available only to individuals who are at least 
            thirteen (13) years old and possess the legal capacity to form a 
            binding agreement. You represent that you have the legal authority 
            to enter into these terms and perform your obligations hereunder.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            3. Services & E-Commerce Integration
          </h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              Next AI Commerce provides Amazon account management, advertising 
              optimization, and recovery services.
            </li>
            <li>
              <strong>Integration:</strong> To operate, you must link your 
              Amazon Seller Central account via the SP-API.
            </li>
            <li>
              <strong>Credentials:</strong> Next AI Commerce does not store your 
              E-Commerce account login credentials. You are responsible for 
              safeguarding your own login details and supervising all activity.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            4. Your Responsibilities & Compliance
          </h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Authorization:</strong> You must provide explicit 
              authorization via the Amazon OAuth workflow.
            </li>
            <li>
              <strong>Amazon Terms:</strong> You agree to maintain compliance 
              with the Amazon Services Business Solutions Agreement.
            </li>
            <li>
              <strong>Content Ownership:</strong> You represent that you own or 
              have all necessary permissions for any content or data used in 
              conjunction with the Platform.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Prohibited Conduct</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              Use the Platform for any illegal, immoral, or unauthorized purposes.
            </li>
            <li>
              Use automated software (bots/spiders) to access or extract data 
              without written consent.
            </li>
            <li>
              Use the Platform for competitive intelligence or to gain a 
              competitive advantage for your own selling activities.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the Platform.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            6. AI Transparency & Disclaimer
          </h2>
          <p className="text-gray-400 leading-relaxed mb-3">
            We use Artificial Intelligence (AI) tools to analyze data and 
            optimize advertising.
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>As-Is Basis:</strong> The Platform and AI-generated 
              insights are provided on an "AS IS" basis to the extent legally 
              permissible.
            </li>
            <li>
              <strong>Accuracy:</strong> AI insights depend on the accuracy of 
              underlying Amazon data. Next AI Commerce is not responsible for 
              errors resulting from automated changes.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Next AI Commerce will not be liable for any damages or losses 
            incurred by you or any other person as a result of your use of 
            the Platform. Your use of the Platform and its content is entirely 
            at your own risk.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl font-semibold mb-3">8. Amendments</h2>
          <p className="text-gray-400 leading-relaxed">
            Next AI Commerce may change these terms from time to time at its 
            sole discretion. Your continued use of the Platform after any change 
            constitutes acceptance of such changes.
          </p>
        </section>

      </div>
    </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;

