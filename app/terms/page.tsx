import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 mb-12">
            <Link 
              className="inline-flex items-center px-4 py-2 rounded-full border border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 transition-colors" 
              href="/"
            >
              ← Назад на главную
            </Link>
          </div>

          <div className="relative mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FF00]/70">
                Условия использования
              </span>
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00FF00]/30 rounded-full" />
          </div>

          <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-3xl mx-auto">
              <p className="text-xl mb-8">
                Добро пожаловать на сайт компании ФотОчки. Перед использованием наших продуктов и услуг, пожалуйста, внимательно ознакомьтесь с условиями использования, изложенными в данном документе:
              </p>
            </div>

            <div className="space-y-16">
              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">1</span>
                  Воображаемое использование
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Наши виртуальные очки существуют исключительно в цифровом пространстве и вашем воображении. Любые попытки найти их в реальном мире, надеть или постучать по ним могут привести к философским вопросам о природе реальности и забавным недоразумениям.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">2</span>
                  Виртуальная ответственность
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Используя наш сайт, вы соглашаетесь нести полную ответственность за работу своего воображения. Мы не несём ответственности за слишком яркие фантазии, внезапные приступы креативности или спонтанные улыбки при использовании наших виртуальных очков.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">3</span>
                  Точность выдумки
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Мы прилагаем все усилия, чтобы наши выдуманные очки были максимально правдоподобными в своей нереальности. Однако мы не гарантируем, что ваше воображение будет работать на той же частоте, что и наше.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">4</span>
                  Обновления и изменения
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Мы оставляем за собой право обновлять эти условия в любой момент времени, в любой точке мультивселенной. Продолжая использовать наш сайт, вы автоматически соглашаетесь с новыми условиями во всех известных, неизвестных и даже не открытых ещё измерениях.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">5</span>
                  Интеллектуальная собственность
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Все права на воображаемые очки, их несуществующие компоненты и виртуальные аксессуары принадлежат ФотОчкам. Любое несанкционированное копирование наших выдумок может привести к серьёзным последствиям в параллельных вселенных.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-16 p-4 rounded-xl bg-[#00FF00]/5 border border-[#00FF00]/10 text-sm text-gray-400 text-center">
              Последнее обновление: 18 декабря 2024
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 w-full shrink-0 border-t border-[#00FF00]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-400">© 2024 ФотОчки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

