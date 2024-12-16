import { ArrowRight, CheckCircle2, Eye, Gamepad2, Palette, Smartphone, VolumeX } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 lg:px-8 h-20 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Eye className="h-8 w-8" />
          <span className="text-xl font-bold ml-2">ФотОчки</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#features">
            Особенности
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#advantages">
            Преимущества
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#pricing">
            Цены
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56">
          <div className="container mx-auto max-w-5xl px-6 md:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Твое видение – наши технологии!
                </h1>
                <p className="mx-auto max-w-[800px] text-xl text-gray-500 md:text-2xl dark:text-gray-400">
                  Запечатлейте яркие моменты с нашими инновационными очками. Современный дизайн и передовые технологии.
                </p>
              </div>
              <div className="space-x-6">
                <Button size="lg" className="text-lg py-6 px-8">Узнать больше</Button>
                <Button size="lg" variant="outline" className="text-lg py-6 px-8">
                  Заказать сейчас
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16">Особенности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <FeatureCard
                icon={<VolumeX className="h-16 w-16" />}
                title="Голосовое управление"
                description="Управляйте очками с помощью голосового ассистента"
              />
              <FeatureCard
                icon={<Smartphone className="h-16 w-16" />}
                title="Дополненная реальность"
                description="Погрузитесь в мир дополненной реальности"
              />
              <FeatureCard
                icon={<Gamepad2 className="h-16 w-16" />}
                title="VR и геймификация"
                description="Обучение, развлечения и геймификация повседневных действий"
              />
              <FeatureCard
                icon={<Palette className="h-16 w-16" />}
                title="Разнообразный дизайн"
                description="Различный дизайн и цвет, сменные линзы"
              />
            </div>
          </div>
        </section>
        <section id="advantages" className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <AdvantageCard title="Высокое качество" description="Используем только лучшие материалы" />
              <AdvantageCard title="Современный дизайн" description="Стильный и инновационный внешний вид" />
              <AdvantageCard title="Комфорт" description="Удобные в носке, легкие и эргономичные" />
              <AdvantageCard title="Уникальность" description="Подчеркните свою индивидуальность" />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16">Наши цены</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <PriceCard title="Базовая модель" price="14 999 ₽" features={["AR функции", "Голосовое управление", "Базовый дизайн"]} />
              <PriceCard title="Продвинутая модель" price="24 999 ₽" features={["AR + VR функции", "Голосовое управление", "Расширенный дизайн", "Геймификация"]} />
              <PriceCard title="Премиум модель" price="34 999 ₽" features={["Полный функционал AR + VR", "Продвинутое голосовое управление", "Премиум дизайн", "Расширенная геймификация", "Эксклюзивные аксессуары"]} />
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto max-w-5xl px-6 md:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Готовы увидеть мир по-новому?
                </h2>
                <p className="mx-auto max-w-[800px] text-xl text-gray-500 md:text-2xl dark:text-gray-400">
                  Закажите наши инновационные очки сегодня и откройте для себя новые горизонты!
                </p>
              </div>
              <div className="space-x-6">
                <Button size="lg" className="text-lg py-6 px-8">Заказать сейчас</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-6 md:px-8 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 ФотОчки. Все права защищены.</p>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Условия использования
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Политика конфиденциальности
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

function AdvantageCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex items-start space-x-6">
      <CheckCircle2 className="h-8 w-8 text-green-500 mt-1" />
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function PriceCard({ title, price, features }: { title: string, price: string, features: string[] }) {
  return (
    <div className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-center mb-6">{title}</h3>
      <p className="text-5xl font-bold text-center mb-8">{price}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-lg">
            <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button size="lg" className="mt-auto text-lg py-6">Выбрать</Button>
    </div>
  )
}

