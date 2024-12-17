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
              В ФотОчках мы придаем первостепенное значение защите конфиденциальности наших пользователей. В рамках нашей политики мы приняли принципиальное решение не осуществлять сбор персональных данных. Мы считаем, что полное отсутствие сбора информации является наиболее эффективным способом обеспечения конфиденциальности наших пользователей.
            </p>

            <div className="space-y-16">
              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">1</span>
                  Сбор данных (точнее, его отсутствие)
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Мы гордимся тем, что не собираем абсолютно никакой информации о вас. Ни имени, ни email, ни даже любимого цвета ваших воображаемых очков. Наша база данных настолько пуста, что в ней гуляет эхо!
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">2</span>
                  Cookies и другие вкусности
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Наш сайт не использует cookie-файлы. Мы предпочитаем настоящее печенье, и рекомендуем вам заварить чай и съесть парочку, пока просматриваете наш сайт. Это не повлияет на вашу конфиденциальность, но точно поднимет настроение!
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">3</span>
                  Безопасность данных
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Мы используем самую продвинутую систему защиты данных в мире - полное отсутствие данных! Хакеры могут пытаться взломать наши серверы сколько угодно, но найдут там только эту политику конфиденциальности и пару шуток про очки.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">4</span>
                  Передача данных третьим лицам
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    Мы не можем передать ваши данные третьим лицам, потому что у нас их нет. Даже если бы нас очень попросили, мы бы только развели руками и предложили чашечку чая взамен.
                  </p>
                </div>
              </section>

              <section className="relative">
                <h2 className="flex items-center text-2xl font-bold text-[#00FF00] mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF00]/10 mr-3 text-sm">5</span>
                  Ваши права
                </h2>
                <div className="pl-11">
                  <p className="bg-black/50 p-6 rounded-xl border border-[#00FF00]/5">
                    У вас есть право знать, какие данные мы храним о вас (спойлер: никакие), право на удаление этих данных (уже сделано!) и право наслаждаться нашим сайтом без всяких опасений за свою приватность.
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

