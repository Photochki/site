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
                Добро пожаловать на демонстрационный сайт ФотОчки. Данный веб-сайт является учебным проектом и не предоставляет реальных услуг или товаров. Представленные условия использования носят исключительно демонстрационный характер:
              </p>
            </div>

            <div className="space-y-16">
              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">1</span>
                  Демонстрационный характер
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Данный веб-сайт создан исключительно в демонстрационных целях. Все материалы, продукты и услуги, представленные на сайте, являются вымышленными и не подразумевают реальных коммерческих отношений.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">2</span>
                  Использование материалов
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Все материалы сайта, включая тексты, изображения и дизайн, могут быть использованы как пример реализации веб-проекта. При этом рекомендуется указывать источник заимствования при использовании материалов в собственных проектах.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">3</span>
                  Отсутствие ответственности
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Поскольку сайт является демонстрационным, мы не несём ответственности за любые решения или действия, принятые на основе представленной здесь информации. Все данные и функциональность предназначены исключительно для демонстрации возможностей веб-разработки.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">4</span>
                  Обработка данных
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    На данном демонстрационном сайте не осуществляется реальный сбор или обработка персональных данных. Любые формы и интерактивные элементы созданы исключительно для демонстрации пользовательского интерфейса.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">5</span>
                  Контактная информация
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    По всем вопросам, связанным с работой сайта и услугами, вы можете связаться с нами через указанные на сайте контактные данные. Мы стремимся ответить на все обращения в кратчайшие сроки.
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

