import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#00FF00] mb-8 text-center">
              Политика конфиденциальности
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00FF00]/30 rounded-full" />
          </div>
          <div className="prose prose-invert max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              ФотОчки уделяет особое внимание защите конфиденциальности пользователей. В соответствии с нашей политикой, мы приняли решение не осуществлять сбор персональных данных при использовании сервиса. Данный подход обеспечивает максимальный уровень конфиденциальности для всех пользователей.
            </p>

            <div className="space-y-16">
              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">1</span>
                  Принципы обработки персональных данных
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Сервис ФотОчки функционирует без сбора и обработки персональных данных пользователей. Это включает отказ от сбора идентификационной информации, контактных данных и любых других персональных сведений.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">2</span>
                  Использование файлов cookie
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Сервис не использует файлы cookie и другие технологии отслеживания. Все функции сайта реализованы таким образом, чтобы обеспечить полную анонимность пользователей при взаимодействии с сервисом.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">3</span>
                  Меры по обеспечению безопасности
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Поскольку сервис не осуществляет сбор персональных данных, риски, связанные с их обработкой и хранением, полностью исключены. Это обеспечивает максимальный уровень защиты конфиденциальности пользователей.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">4</span>
                  Взаимодействие с третьими лицами
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Сервис не осуществляет передачу персональных данных третьим лицам, поскольку не производит их сбор. Взаимодействие с сервисом является полностью анонимным.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">5</span>
                  Права пользователей
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    В соответствии с принципом неприкосновенности частной жизни, сервис гарантирует полную анонимность использования. Пользователи могут быть уверены в отсутствии какого-либо сбора или обработки их персональных данных.
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

