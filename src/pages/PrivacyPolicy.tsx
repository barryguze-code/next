import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
   <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto shadow-lg rounded-2xl p-10">
        
        <h1 className="text-3xl font-bold mb-4 text-gray-300">
          Next AI Commerce Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: Feb 27, 2026
        </p>

        {/* 1. Consent */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            1. Your Consent
          </h2>
          <p className="text-gray-400 leading-relaxed">
            By entering, connecting to, accessing, or using our Platform and/or
            Site, you acknowledge that you have read and understood the terms
            of this Privacy Policy and agree to be bound by them.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            2. Information We Collect
          </h2>

          <p className="text-gray-400 leading-relaxed mb-3">
            We may collect two types of information from our Users:
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-3">
            <li>
              <strong>Non-Personal Information:</strong> Non-identifiable and
              anonymous technical information, such as your operating system,
              device type, and click-stream activity on our Site. This
              information is used to improve our Platform’s performance and
              user experience.
            </li>

            <li>
              <strong>Personal Information:</strong> Information that enables
              identification of an individual, provided voluntarily by you.
              This includes:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Registration Data:</strong> Name, business name,
                  email address, and phone number.
                </li>
                <li>
                  <strong>Contact Data:</strong> Details provided via support
                  pages or contact forms.
                </li>
                <li>
                  <strong>E-commerce Account Data:</strong> Data from your
                  linked Amazon account (e.g., listings, orders, inventory)
                  retrieved via Amazon APIs (SP-API/MWS).
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 3. How We Collect Data */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            3. How We Collect Data
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Voluntary Entry:</strong> Information you provide when
              registering or contacting us.
            </li>
            <li>
              <strong>Automated Collection:</strong> Technical data collected
              as you use the Site.
            </li>
            <li>
              <strong>API Integration:</strong> Data extracted from your linked
              E-commerce accounts solely to provide the services offered via
              the Platform.
            </li>
          </ul>
        </section>

        {/* 4. Data Usage & Retention */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            4. Data Usage & Retention
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Service Delivery:</strong> We use your Personal
              Information solely to provide, customize, and improve our services.
            </li>
            <li>
              <strong>No Sharing for Marketing:</strong> We do not and will
              never share your Personal Information with any third party for
              marketing purposes whatsoever.
            </li>
            <li>
              <strong>Amazon Compliance:</strong> In accordance with Amazon’s
              Data Protection Policy (DPP), we do not store Personally
              Identifiable Information (PII) for more than 30 days after order
              fulfillment.
            </li>
          </ul>
        </section>

        {/* 5. Cookies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            5. Cookies
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use cookies to help identify and track visitors, their usage of
            our website, and their access preferences. You may configure your
            browser to refuse cookies; however, some features of the Platform
            may not function properly without them.
          </p>
        </section>

        {/* 6. Security Measures */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            6. Security Measures
          </h2>

          <p className="text-gray-400 leading-relaxed mb-3">
            We acknowledge that you upload sensitive business information to
            the Platform and we implement strong security controls.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Encryption:</strong> Data is encrypted at rest using
              AES-256 and in transit using TLS 1.2 or higher.
            </li>
            <li>
              <strong>Access Control:</strong> We apply the Principle of Least
              Privilege. Only authorized personnel with Multi-Factor
              Authentication (MFA) may access your data.
            </li>
            <li>
              <strong>Disclosure:</strong> We disclose Personal Information only
              to satisfy legal processes, subpoenas, governmental requests, or
              to enforce this Privacy Policy.
            </li>
          </ul>
        </section>

        {/* 7. Policy Changes */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Next AI Commerce may change this Privacy Policy from time to time
            at its sole discretion. Your continued use of the Site after any
            change constitutes your acceptance of such changes.
          </p>
        </section>

      </div>
    </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

