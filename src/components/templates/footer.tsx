import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-auto noPrint">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍳</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Recetas Deliciosas
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Tu destino culinario favorito. Descubre recetas increíbles,
                técnicas de cocina y consejos de chefs profesionales.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Ir a facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Ir a twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Ir a instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Ir a youtube"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Categorías */}
            <div></div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                Enlaces útiles
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Blog de cocina
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Consejos de chef
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Nutrición
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Términos de uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    hola@recetasdeliciosas.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">
                    123 Calle Culinaria
                    <br />
                    Ciudad Gastronómica, CG 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Recetas Deliciosas. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Hecho con
              </span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                para los amantes de la cocina
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
