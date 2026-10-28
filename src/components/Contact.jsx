import { useState } from 'react'
import { personal } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiMail, FiPhone, FiMessageCircle, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  // ✏️ To send real emails, replace this with EmailJS or Formspree integration
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const contactItems = [
    {
      icon: FiMail,
      label: 'Email',
      value: personal.email,
      href:  `mailto:${personal.email}`,
      color: 'blue',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personal.phone,
      href:  `tel:${personal.phone}`,
      color: 'green',
    },
    personal.whatsapp && {
      icon: FiMessageCircle,
      label: 'WhatsApp',
      value: personal.whatsapp,
      href:  `https://wa.me/${personal.whatsapp.replace(/\D/g, '')}`,
      color: 'emerald',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personal.location,
      href:  null,
      color: 'purple',
    },
  ].filter(Boolean)

  const colorMap = {
    blue:    'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    green:   'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    purple:  'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">Get In Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto">
            I&apos;m open to junior developer roles, internships, and open-source collaboration.
            Feel free to reach out!
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-10`}
        >
          {/* Left — contact info */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
              Contact Information
            </h3>

            {contactItems.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label}
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl
                  shadow-sm border border-slate-100 dark:border-slate-700 card-hover">
                <div className={`p-3 rounded-xl ${colorMap[color]}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — contact form */}
          <form onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md
              border border-slate-100 dark:border-slate-700 space-y-5">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Send a Message
            </h3>

            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700
                  border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700
                  border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Hi Imran, I'd like to discuss..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700
                  border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3
                bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl
                shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
              {sent ? (
                <><FiCheck size={18} /> Message Sent!</>
              ) : (
                <><FiSend size={18} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
