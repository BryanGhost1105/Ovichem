import type {Metadata} from 'next';
import Link from 'next/link';
import {siteUrl} from '../../lib/site-url';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ovichem Consult',
  description: 'How Ovichem Consult Limited collects and uses information submitted through its website contact form.',
  alternates: siteUrl ? {canonical: '/privacy-policy'} : undefined,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F6F1EA] px-4 py-16 text-[#06042D] sm:px-6 sm:py-24">
      <article className="mx-auto max-w-3xl space-y-8">
        <Link href="/" className="text-sm font-semibold text-[#990909] hover:text-[#E4980B]">
          Ovichem Consult Limited
        </Link>
        <header className="space-y-3 border-b border-[#D9CEC0] pb-6">
          <h1 className="font-serif-display text-4xl font-medium sm:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-[#666666]">Last updated: October 2, 2026</p>
        </header>

        <div className="space-y-7 text-sm leading-7 text-[#524B44] sm:text-base">
          <p>
            This policy explains how Ovichem Consult Limited handles information submitted through this website. It applies to website enquiries and not to third-party services you choose to use, such as WhatsApp.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#06042D]">Information you provide</h2>
            <p>
              When you use the contact form, we receive your name, email address, enquiry type, message, and, if you contact us as a company, your company name. Please do not include sensitive personal information that is not needed for your enquiry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#06042D]">How we use it</h2>
            <p>
              We use these details to respond to your enquiry, understand the products or services you need, prepare follow-up or quotations, and maintain relevant business correspondence. The website sends form submissions to our configured business email service; it does not store them in a website database.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#06042D]">Service providers and retention</h2>
            <p>
              Website hosting and email providers process information as needed to operate the site and deliver your enquiry. We do not sell enquiry details. We retain correspondence only for as long as needed to respond and maintain ordinary business records, subject to applicable legal requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#06042D]">Your choices and requests</h2>
            <p>
              You may contact us to request access to, correction of, or deletion of personal information you submitted, subject to applicable legal and business recordkeeping requirements. We handle such requests in accordance with applicable Nigerian data protection law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-[#06042D]">Contact</h2>
            <p>
              For privacy questions or requests, email{' '}
              <a className="font-semibold text-[#990909] hover:text-[#E4980B]" href="mailto:ovichemconsultltd@yahoo.com">
                ovichemconsultltd@yahoo.com
              </a>{' '}
              or write to Suite 1.03 Alfa Plaza, Opposite Coca Cola Depot, Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria.
            </p>
          </section>
        </div>

        <Link href="/" className="inline-block border-b border-[#990909] pb-1 text-sm font-semibold text-[#990909] hover:text-[#E4980B]">
          Return to home
        </Link>
      </article>
    </main>
  );
}