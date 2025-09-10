import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-black)] py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Sección 1 */}
        <div>
          <h3 className="text-lg mb-4 text-[var(--color-light)]">Menú Principal</h3>
          <ul className="space-y-2 text-sm">
            <li className="font-medium"><a href="#">El Grupo:</a></li>
            <ul className="ml-4 space-y-1">
              <li><a href="#">Fundadores</a></li>
              <li><a href="#">Historia</a></li>
              <li><a href="#">Objetivos</a></li>
              <li><a href="#">Miembros Actuales</a></li>
              <li><a href="#">Directiva</a></li>
            </ul>
            <li className="font-medium"><a href="#">Revista América:</a></li>
            <ul className="ml-4 space-y-1">
              <li><a href="#">Historia Revista América</a></li>
              <li><a href="#">Descargar Revista América</a></li>
            </ul>
            <li className="font-medium"><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className="text-lg mb-4 text-[var(--color-light)]">Información</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Directorio</a></li>
            <li><a href="#">Prensa</a></li>
            <li><a href="#">Aviso de privacidad</a></li>
          </ul>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 className="text-lg mb-4 text-[var(--color-light)]">¡Síguenos en nuestras redes!</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="X (Twitter)">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
 &copy; {new Date().getFullYear()}                       <a
                href="https://omarbramirez.com" className="!inline !text-gray-400 " target="_blank"
              >Omar B Ramírez.</a> Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
