import {
  Calculator,
  HelpCircle,
  Mail,
  MapPin,
  Package,
  Phone,
  Wrench,
} from "lucide-react";

const CONTACT_INFO = {
  phone: "(61) 99665-4539",
  whatsappNumber: "5561996654539",
  instagramUser: "estacaoclima2104",
  email: "",
  address: "Formosa, GO",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3844.0237294315043!2d-47.29407772487529!3d-15.536858585068146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDMyJzEyLjciUyA0N8KwMTcnMjkuNCJX!5e0!3m2!1spt-BR!2sbr!4v1743957220589!5m2!1spt-BR!2sbr",
};

const Footer = () => (
  <footer id="contato" className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">Estação Clima</h3>
          <p className="text-gray-400">
            Sua solução completa em climatização. Qualidade, confiança e o
            melhor atendimento.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#produtos"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-white"
              >
                <Package size={16} />
                <span>Produtos</span>
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-white"
              >
                <Wrench size={16} />
                <span>Serviços</span>
              </a>
            </li>
            <li>
              <a
                href="#calculadora"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-white"
              >
                <Calculator size={16} />
                <span>Calculadora</span>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-white"
              >
                <HelpCircle size={16} />
                <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <MapPin size={16} />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <Phone size={16} />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <Mail size={16} />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Estação Clima. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
