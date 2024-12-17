import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-[#00FF00]/20">
        <Link className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors" href="/">
          ← Назад
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#00FF00]">
                О нас
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Мы - команда энтузиастов, создающих инновационные смарт-очки для улучшения вашей жизни
              </p>
            </div>
            <div className="mt-12 grid gap-8">
              <div className="grid gap-4">
                <h2 className="text-2xl font-bold text-[#00FF00]">Наши контакты</h2>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 border border-[#00FF00]/20 rounded-lg">
                    <Phone className="h-6 w-6 text-[#00FF00]" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-gray-400">+7 (981) 186-55-40</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-[#00FF00]/20 rounded-lg">
                    <Mail className="h-6 w-6 text-[#00FF00]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">fotochki@mail.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-[#00FF00]/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#00FF00]" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-gray-400">г. Санкт-Петербург, ул. Проспект Ветеранов, д. 173, к. 4, помещение 326</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#00FF00]/20">
        <p className="text-xs text-gray-400">© 2024 ФотОчки. Все права защищены.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-[#00FF00] transition-colors" href="/terms">
            Условия использования
          </Link>
          <Link className="text-xs hover:text-[#00FF00] transition-colors" href="/privacy">
            Политика конфиденциальности
          </Link>
        </nav>
      </footer>
    </div>
  )
}

