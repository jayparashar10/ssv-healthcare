"use client";
import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, Activity, Truck, Menu, X } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  const [showForm, setShowForm] = useState(false);
const [selectedBrochure, setSelectedBrochure] = useState("");

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  organization: "",
});
const handleBrochureRequest = async () => {
  if (
  !formData.name ||
  !formData.email ||
  !formData.phone ||
  !formData.organization
) {
  alert("Please fill all fields");
  return;
}
  await fetch(
    "https://script.google.com/macros/s/AKfycbw5qRGdpzGVkBl8iY38Og0jwcKKDY5355Ii8__pcbfTtcFZ7QqHX2WeJvzor19VgjDa/exec",
    {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        product: selectedBrochure,
      }),
    }
  );

  window.open(selectedBrochure, "_blank");

  setShowForm(false);

  setFormData({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });
};
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const productPartners = [
  {
    company: "bioMérieux",
    products: [
      { name: "VITEK 2 System", file: "biomerieux-vitek2.pdf" },
      { name: "BACT/ALERT", file: "biomerieux-bactalert.pdf" },
      { name: "VIDAS KUBE", file: "biomerieux-vidas-kube.pdf" },
    ],
  },

  {
    company: "Ortho Clinical Diagnostics",
    products: [
      { name: "VITROS 350", file: "ortho-vitros350.pdf" },
      { name: "VITROS ECI", file: "ortho-vitros-eci.pdf" },
      { name: "VITROS 3600", file: "ortho-vitros3600.pdf" },
      { name: "VITROS 4600", file: "ortho-vitros4600.pdf" },
      { name: "VITROS 5600", file: "ortho-vitros5600.pdf" },
    ],
  },

  {
    company: "Nihon Kohden",
    products: [
  {
    name: "Celltac MEK 1301/1302",
    file: "nihonkohden-celltac-mek1301-1302.pdf",
  },
  {
    name: "Celltac α+ MEK-1305",
    file: "MEK_1305.pdf",
  },
  {
    name: "Celltac G+ MEK-9200",
    file: "MEK-9200.pdf",
  },
  {
    name: "Celltac Veterinary MEK-6550JK",
    file: "MEK-6550JK.pdf",
  },
  {
    name: "Celltac ES MEK-7300",
    file: "MEK-7300.pdf",
  },
  {
    name: "Celltac G MEK-9100K",
    file: "MEK-9100K.pdf",
  },
],
  },

  {
    company: "Sysmex",
    products: [
      { name: "XN-L Series", file: "sysmex-xnl-series.pdf" },
      { name: "XN-330", file: "sysmex-xn330.pdf" },
      { name: "XN-1000", file: "sysmex-xn1000.pdf" },
      { name: "XN Automation", file: "sysmex-xn-automation.pdf" },
      { name: "CA-600 LR", file: "sysmex-ca600lr.pdf" },
    ],
  },

  {
    company: "Radiometer",
    products: [
      { name: "ABL9", file: "radiometer-abl9.pdf" },
      { name: "ABL800 FLEX", file: "radiometer-abl800-flex.pdf" },
      { name: "AQT90 FLEX", file: "radiometer-aqt90-flex.pdf" },
      { name: "MicroClot on ABL90", file: "radiometer-microclot-abl90.pdf" },
    ],
  },

  {
    company: "Bio-Rad",
    products: [
      { name: "D-10", file: "biorad-d10.pdf" },
      { name: "RX50V"},
    ],
  },

  {
    company: "Abbott Diagnostics",
    products: [
      { name: "Afinion 2", file: "abbott-afinion2.pdf" },
    ],
  },
];
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <div className="flex items-center gap-3">

  <Image
  src="/logo.jpeg"
  alt="SSV Healthcare Logo"
  width={60}
  height={60}
  className="h-12 w-auto"
  priority
/>

  <div className="hidden md:block h-10 w-px bg-gray-300"></div>

  <div>
    <h2 className="text-lg md:text-3xl font-extrabold text-gray-500 tracking-tight">
  SSV Healthcare
</h2>

    <p className="hidden md:block text-base text-green-600 font-medium">
      Delivering Advanced Healthcare Solutions
    </p>
  </div>

</div>

    <>
  {/* Desktop Menu */}
  <div className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">
    <a href="#about">About</a>
    <a href="#partners">Partners</a>
    <a href="#brochure">Brochure</a>
    <a href="#contact">Contact</a>
  </div>

  {/* Mobile Menu Button */}
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden absolute right-4 top-4 text-[#009933]"
>
  {menuOpen ? (
    <X size={32} className="text-[#009933]" />
  ) : (
    <Menu size={32} className="text-[#009933]" />
  )}
</button>
</>
  </div>
  {menuOpen && (
  <div className="md:hidden bg-white border-t border-gray-700 shadow-lg">
    <div className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">

      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>

      <a href="#partners" onClick={() => setMenuOpen(false)}>
        Partners
      </a>

      <a href="#brochure" onClick={() => setMenuOpen(false)}>
        Brochure
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>

    </div>
  </div>
)}
</nav>
      <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-44 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
  <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-300 opacity-30 blur-3xl"></div>
</div>
        <div className="max-w-6xl text-center">
          <p className="hidden md:inline-block px-6 py-2 rounded-full border border-green-200 bg-green-50 text-[#009933] font-semibold tracking-wider uppercase mb-6">
            SSV Healthcare
          </p>

          <h1 className="text-3xl md:text-7xl font-bold text-gray-800 leading-tight">
            Delivering Advanced
            <span className="text-green-600"> Healthcare Solutions</span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted distributor of high-quality medical equipment, helping
            hospitals, clinics, and healthcare professionals access innovative
            healthcare technologies.
          </p>
<div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">

  <div className="flex items-center gap-3 text-gray-700">
    <Truck className="h-6 w-6 text-[#009933]" />
    <span className="font-medium">Trusted Distribution</span>
  </div>

  <div className="flex items-center gap-3 text-gray-700">
    <Activity className="h-6 w-6 text-[#009933]" />
    <span className="font-medium">Quality Medical Equipment</span>
  </div>

  <div className="flex items-center gap-3 text-gray-700">
    <ShieldCheck className="h-6 w-6 text-[#009933]" />
    <span className="font-medium">Healthcare Solutions</span>
  </div>

</div>
          <div className="mt-10 flex justify-center">
  <button className="px-8 py-4 rounded-xl bg-[#009933] text-white font-semibold hover:bg-[#00802d] transition">
    Contact Us
  </button>
</div>
        </div>
      </section>
      <section id="about" className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>
        <p className="text-[#009933] font-semibold uppercase tracking-wider mb-3">
          About Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
  Trusted Healthcare Distribution Partner
</h2>

        <p className="text-gray-600 leading-8">
          SSV Healthcare is dedicated to delivering high-quality medical
          equipment and healthcare solutions to hospitals, pathology labs, blood banks, clinics, and
          healthcare professionals. Our focus is on reliability, innovation,
          and building long-term partnerships that improve healthcare delivery.
        </p>
      </div>

      <div className="bg-green-50 rounded-3xl p-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Why SSV Healthcare?
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li>✓ Quality Medical Equipment</li>
          <li>✓ Trusted Distribution Network</li>
          <li>✓ Professional Support</li>
          <li>✓ Long-Term Partnerships</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section id="leadership" className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

 <div className="text-center mb-16">
  <p className="text-[#009933] font-semibold uppercase tracking-wider">
    Leadership
  </p>

  <h2 className="mt-4 text-5xl md:text-6xl font-bold text-gray-800">
    Meet Our Founder & CEO
  </h2>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">

  <div className="flex justify-center">
    <Image
      src="/vijay-parashar.jpg"
      alt="Mr. Vijay Kumar Parashar"
      width={450}
      height={550}
      className="rounded-3xl shadow-2xl object-cover"
    />
  </div>

  <div>
    <p className="text-[#009933] font-bold uppercase tracking-wide">
      Founder & CEO
    </p>

    <h3 className="text-5xl font-bold text-gray-800 mt-4">
      Mr. Vijay Kumar Parashar
    </h3>

    <p className="text-xl text-gray-600 leading-10 mt-6">
      With over 30 years of experience in healthcare diagnostics
      and medical equipment distribution, he has built strong
      partnerships with leading global healthcare manufacturers.
    </p>

    <div className="grid grid-cols-2 gap-6 mt-10">

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
        <div className="text-5xl font-bold text-[#009933]">
          18+
        </div>
        <p className="text-gray-600 mt-2">
          Years Experience
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
        <div className="text-5xl font-bold text-[#009933]">
        
        </div>
        <p className="text-gray-600 mt-2">
          Global Partners
        </p>
      </div>

    </div>
  </div>

</div>
</div>

</section>
<section id="partners" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-[#009933] font-semibold uppercase tracking-wider">
        Our Partners
      </p>

      <h2 className="text-4xl font-bold text-gray-800 mt-4">
        Trusted Healthcare Technology Partners
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        SSV Healthcare partners with globally recognized diagnostic
        and healthcare technology companies to deliver reliable,
        innovative, and high-performance medical solutions.
      </p>
    </div>

    {/* Logo Strip */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
          src="/logos/bioMérieux-logo.jpg"
          alt="bioMérieux"
          width={120}
          height={60}
          className="object-contain h-16 w-full"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
          src="/logos/Ortho-Clinical-Diagnostics-logo.jpg"
          alt="Ortho Clinical Diagnostics"
          width={120}
          height={60}
          className="object-contain h-16 w-full"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-32">
        <Image
  src="/logos/nihon-kohden-logo.png"
  alt="Nihon Kohden"
  width={220}
  height={100}
  className="object-contain h-20 w-full"
/>
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
          src="/logos/sysmex-logo.jpg"
          alt="Sysmex"
          width={120}
          height={60}
          className="object-contain h-16 w-full"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
  src="/logos/radiometer-logo.jpg"
  alt="Radiometer"
  width={220}
  height={100}
  className="object-contain h-20 w-full"
/>
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
          src="/logos/Bio-Rad_Laboratories_Logo.png"
          alt="Bio-Rad"
          width={120}
          height={60}
          className="object-contain h-16 w-full"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-28">
        <Image
          src="/logos/abbott-logo.png"
          alt="Abbott"
          width={120}
          height={60}
          className="object-contain h-16 w-full"
        />
      </div>

    </div>

    {/* Partner Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">FRANCE</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">bioMérieux</h3>
        <p className="text-gray-600">
          Microbiology and infectious disease diagnostic solutions.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">USA</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Ortho Clinical Diagnostics
        </h3>
        <p className="text-gray-600">
          Clinical chemistry and immunodiagnostic systems.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">JAPAN</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Nihon Kohden
        </h3>
        <p className="text-gray-600">
          Hematology analyzers and patient monitoring systems.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">JAPAN</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Sysmex</h3>
        <p className="text-gray-600">
          Advanced hematology and coagulation solutions.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">USA</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Radiometer</h3>
        <p className="text-gray-600">
          Blood gas and critical care testing systems.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-[#009933] font-semibold text-sm mb-2">USA</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Bio-Rad Laboratories
        </h3>
        <p className="text-gray-600">
          Quality control and specialty diagnostic solutions.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm lg:col-span-3 text-center">
        <div className="text-[#009933] font-semibold text-sm mb-2">USA</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Abbott Diagnostics
        </h3>
        <p className="text-gray-600">
          Clinical diagnostics and laboratory testing solutions.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="brochure" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-[#009933] font-semibold uppercase tracking-wider">
        Product Catalog
      </p>

      <h2 className="mt-4 text-5xl font-bold text-gray-800">
        Products by Partners
      </h2>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
        Explore healthcare and diagnostic solutions from our trusted partners.
      </p>
      <div className="max-w-xl mx-auto mt-8">
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
</div>
    </div>
    <div className="space-y-10">
  {productPartners
  .filter((partner) =>
    partner.products.some((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
  .map((partner) => (
    <div
      key={partner.company}
      className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-800">
          {partner.company}
        </h3>

        <span className="bg-green-100 text-[#009933] px-4 py-2 rounded-full font-semibold">
          {partner.products.length} Products
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partner.products
  .filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((product) => (
          <div
            key={product.name}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              {product.name}
            </h4>

            {product.file ? (
  <button
    onClick={() => {
      setSelectedBrochure(`/brochures/${product.file}`);
      setShowForm(true);
    }}
    className="inline-flex mt-4 text-[#009933] font-semibold cursor-pointer hover:underline"
  >
    View Brochure →
  </button>
) : (
  <span className="inline-flex mt-4 text-gray-400 font-semibold">
    Brochure Coming Soon
  </span>
)}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

</div>
</section>
<section id="contact" className="py-24 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-[#009933] font-semibold uppercase tracking-wider">
        Contact Us
      </p>

      <h2 className="mt-4 text-5xl font-bold text-gray-800">
        Get In Touch
      </h2>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
        Reach out to SSV Healthcare for product inquiries, quotations,
        partnerships, and healthcare equipment solutions.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          Contact Information
        </h3>

        <div className="space-y-6">

          <div>
            <p className="text-sm font-semibold text-[#009933] uppercase">
              Phone
            </p>

            <a
              href="tel:+919690706060"
              className="text-lg text-gray-800 hover:text-[#009933]"
            >
              +91 9690706060
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#009933] uppercase">
              Email
            </p>

            <a
              href="mailto:ssv.healthcare@gmail.com"
              className="text-lg text-gray-800 hover:text-[#009933]"
            >
              ssv.healthcare@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#009933] uppercase">
              Address
            </p>

            <p className="text-lg text-gray-800">
              13 K.R Nagar, Mahirshipuram,
              Behind Guru Ka Taal,
              Agra - 282007
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/5Bsg8H4QT4zP8iPaA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#009933] text-white px-6 py-3 rounded-xl hover:bg-[#00802d] transition"
          >
            View on Google Maps
          </a>

        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

      <h3 className="text-2xl font-bold text-gray-800 mb-8">
  Need a Quotation?
</h3>

<div className="flex flex-col">

  <p className="text-lg text-gray-600 mb-8">
    Contact SSV Healthcare for product brochures,
    pricing information, quotations, installation support,
    and technical specifications.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">

    <a
      href="tel:+919690706060"
      className="bg-[#009933] text-white px-6 py-4 rounded-xl text-center font-semibold hover:bg-[#00802d] transition"
    >
      Call Now
    </a>

    <a
      href="mailto:ssv.healthcare@gmail.com"
      className="border border-[#009933] text-[#009933] px-6 py-4 rounded-xl text-center font-semibold hover:bg-green-50 transition"
    >
      Send Email
    </a>

  </div>
<div className="mt-8 p-5 bg-green-50 rounded-2xl">
  <p className="text-sm text-[#009933] font-semibold">
    ✓ Product Brochures
  </p>

  <p className="text-sm text-[#009933] font-semibold mt-2">
    ✓ Pricing & Quotations
  </p>

  <p className="text-sm text-[#009933] font-semibold mt-2">
    ✓ Installation Support
  </p>

  <p className="text-sm text-[#009933] font-semibold mt-2">
    ✓ Technical Specifications
  </p>
</div>
</div>

      </div>

    </div>

  </div>
</section>
<footer className="bg-gray-900 text-white py-12 px-6 mt-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {/* Company */}
    <div>
      <h3 className="text-2xl font-bold mb-4">
        SSV Healthcare
      </h3>

      <p className="text-gray-400">
        Trusted distributor of advanced healthcare and diagnostic
        equipment from globally recognized manufacturers.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-semibold text-lg mb-4">
        Quick Links
      </h4>

      <div className="space-y-2 text-gray-400">
       <a href="#about" className="hover:text-white transition">About Us</a>
<a href="#partners" className="hover:text-white transition">Partners</a>
<a href="#brochure" className="hover:text-white transition">Brochures</a>
<a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-semibold text-lg mb-4">
        Contact
      </h4>

      <div className="space-y-2 text-gray-400">
        <p>+91 9690706060</p>
        <p>ssv.healthcare@gmail.com</p>
        <p>Agra, Uttar Pradesh, India</p>
      </div>
    </div>

  </div>

  <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
    © 2026 SSV Healthcare. All Rights Reserved.
  </div>
</footer>
<a
  href="https://wa.me/919690706060"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 z-50"
>
  <FaWhatsapp size={30} />
</a>
{showForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl p-8 w-full max-w-md">

      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Download Brochure
      </h3>

      <div className="space-y-4">

        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
        />

        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
        />

        <input
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
        />

        <input
          placeholder="Organization / Hospital / Lab"
          value={formData.organization}
          onChange={(e) =>
            setFormData({
              ...formData,
              organization: e.target.value,
            })
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
        />

        <button
          onClick={handleBrochureRequest}
          className="w-full bg-[#009933] text-white py-3 rounded-xl font-semibold"
        >
          Submit & Download Brochure
        </button>

        <button
          onClick={() => setShowForm(false)}
          className="w-full border border-gray-300 py-3 rounded-xl text-gray-700 font-medium"
        >
          Cancel
        </button>

      </div>
    </div>
  </div>
)}
   
    </main>
  );
}