import Link from "next/link";
const page = () => {
  return (
    <div className="max-w-[800px] px-4 py-6 space-y-3 mx-auto">
      <article className="article">
        <h1 className="pb-3 upercase text-[29px] onest font-bold tracking-wide">Privacy Policy</h1>
        <section>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            handle information when you interact with our webiste.
            Please take a moment to read through the details below.
          </p>
        </section>
        <section>
          <h3>What Information Do We Collect?</h3>
          <p>
            We do not collect any personal data from users. You can browse and
            interact with our webiste freely, without the need to provide any
            personal information.
          </p>
        </section>
        <section>
          <h3>Do We Use Cookies or Other Tracking Technologies?</h3>
          <p>
            No, we do not use cookies or any other tracking technologies to
            monitor your behavior or collect information.
          </p>
        </section>
        <section>
          <h3>How Can You Contact Us About This Notice?</h3>
          <p>
            You can reach us via our{" "}
            <Link href="/page/contact" className="underline font-semibold px-1">
              Contact
            </Link>{" "}
            form, which includes fields for your first name, last name, email,
            and message. You can also contact us through our social media
            platforms.
          </p>
        </section>
        <section>
          <h3>Third-Party Services</h3>
          <p>We may use third-party services such as:</p>
          <ul>
            <li>Content Delivery Networks(CDNs)</li>
            <li>Embedded media (e.g., YouTube videos)</li>
            <li>Potential future analytics tools</li>
          </ul>
          <p>
            These services may collect anonymous data in accordance with their
            own privacy policies. We do not control or manage how they collect
            or use this data.
          </p>
        </section>
        <section>
          <h3>External Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of these external
            sites. We encourage you to read their privacy policies when you
            visit them.
          </p>
        </section>
        <section>
          <h3> Data Security</h3>
          <p>
            While we do not collect or store user data, we still implement
            general security measures to keep our website safe from unauthorized
            access or alteration.
          </p>
        </section>
        <section>
          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. All updates
            will be posted on this page with a revised effective date. We
            encourage you to review this policy periodically.
          </p>
        </section>
        <section>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            feel free to reach out through our contact methods listed above
          </p>
        </section>
      </article>
    </div>
  );
};

export default page;
