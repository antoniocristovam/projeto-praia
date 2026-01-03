import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Acomodações', href: '#accommodations' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Localização', href: '#location' },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(00) 00000-0000',
      href: 'tel:+5500000000000',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@privebeach.com',
      href: 'mailto:contato@privebeach.com',
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Av. José Bezerra Sobrinho, Tamandaré - PE',
      href: '#location',
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="section-padding container-width py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="text-ocean-400">Prive</span>
              <span className="text-sand-200"> Beach</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sua experiência exclusiva à beira-mar. Conforto, lazer e 
              momentos inesquecíveis a apenas 40 metros do mar.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ocean-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-ocean-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">
              Entre em Contato
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start space-x-3 text-gray-400 hover:text-ocean-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ocean-600/20 transition-colors">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Prive Beach. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                Política de Cancelamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

