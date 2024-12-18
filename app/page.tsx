'use client'

import { ArrowRight, CheckCircle2, Eye, Gamepad2, Palette, Smartphone, VolumeX, X, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import FeatureModal from '@/components/feature-modal'
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import HeroModal from '@/components/hero-modal'

export default function Home() {
  const [heroModalOpen, setHeroModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-21 flex items-center border-b border-[#00FF00]/20">
        <Link className="flex items-center justify-center" href="#">
          <Logo className="h-20 w-auto" />
        </Link>
        
        <Button 
          variant="ghost" 
          className="ml-auto md:hidden text-[#00FF00] border border-[#00FF00]/20 hover:bg-[#003300] hover:border-[#00FF00] transition-all p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <nav className="hidden md:flex ml-auto gap-6">
          <Link className="text-sm font-medium hover:text-[#00FF00] transition-colors" href="#features">
            Особенности
          </Link>
          <Link className="text-sm font-medium hover:text-[#00FF00] transition-colors" href="#advantages">
            Преимущества
          </Link>
          <Link className="text-sm font-medium hover:text-[#00FF00] transition-colors" href="#gallery">
            Галерея
          </Link>
          <Link className="text-sm font-medium hover:text-[#00FF00] transition-colors" href="#pricing">
            Цены
          </Link>
          <Link className="text-sm font-medium hover:text-[#00FF00] transition-colors" href="/about">
            О нас
          </Link>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-21 bg-black/95 z-50">
            <div className="m-4 p-6 border border-[#00FF00]/20 rounded-xl bg-black/90 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,0,0.1)]">
              <div className="flex justify-end mb-6">
                <Button 
                  variant="ghost" 
                  className="text-[#00FF00] border border-[#00FF00]/20 hover:bg-[#003300] hover:border-[#00FF00] transition-all p-2 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center gap-4">
                <Link 
                  className="text-xl font-medium text-[#00FF00] w-full py-4 text-center hover:bg-[#003300] transition-all relative group"
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent" />
                  Особенности
                </Link>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />
                <Link 
                  className="text-xl font-medium text-[#00FF00] w-full py-4 text-center hover:bg-[#003300] transition-all relative group"
                  href="#advantages"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent" />
                  Преимущества
                </Link>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />
                <Link 
                  className="text-xl font-medium text-[#00FF00] w-full py-4 text-center hover:bg-[#003300] transition-all relative group"
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent" />
                  Галерея
                </Link>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />
                <Link 
                  className="text-xl font-medium text-[#00FF00] w-full py-4 text-center hover:bg-[#003300] transition-all relative group"
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent" />
                  Цены
                </Link>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />
                <Link 
                  className="text-xl font-medium text-[#00FF00] w-full py-4 text-center hover:bg-[#003300] transition-all relative group"
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent" />
                  О нас
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#00FF00]">
                  Твое видение – наши технологии!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Запечатлейте яркие моменты с нашими инновационными очками. Современный дизайн и передовые технологии.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-[#003300] text-[#00FF00] hover:bg-[#004400] transition-colors"
                  onClick={() => setHeroModalOpen(true)}
                >
                  Узнать больше
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#00FF00] text-[#00FF00] hover:bg-[#003300] transition-colors"
                  onClick={() => alert('Извините, в данный момент оформление заказа недоступно. Это демонстрационный сайт.')}
                >
                  Заказать сейчас
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#00FF00]">
              Особенности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FeatureCard
                icon={<VolumeX className="h-10 w-10 text-[#00FF00]" />}
                title="Голосовое управление"
                description="Управляйте очками с помощью голосового ассистента"
              />
              <FeatureCard
                icon={<Smartphone className="h-10 w-10 text-[#00FF00]" />}
                title="Дополненная реальность"
                description="Погрузитесь в мир дополненной реальности"
              />
              <FeatureCard
                icon={<Gamepad2 className="h-10 w-10 text-[#00FF00]" />}
                title="VR и геймификация"
                description="Обучение, развлечения и геймификация повседневных действий"
              />
              <FeatureCard
                icon={<Palette className="h-10 w-10 text-[#00FF00]" />}
                title="Разнообразный дизайн"
                description="Различный дизайн и цвет, сменные линзы"
              />
            </div>
          </div>
        </section>
        <section id="advantages" className="w-full py-12 md:py-24 lg:py-32 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#00FF00]">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AdvantageCard title="Высокое качество" description="Используем только лучшие материалы" />
              <AdvantageCard title="Современный дизайн" description="Стильный и инновационный внешний вид" />
              <AdvantageCard title="Комфорт" description="Удобные в носке, легкие и эргономичные" />
              <AdvantageCard title="Уникальность" description="Подчеркните свою индивидуальность" />
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#00FF00]">
              Галерея
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto place-items-center">
              <Image src="smart-glasses-1.jpg" alt="Смарт очки 1" width={400} height={300} className="rounded-lg border border-[#00FF00]/20" />
              <Image src="smart-glasses-2.jpg" alt="Смарт очки 2" width={400} height={300} className="rounded-lg border border-[#00FF00]/20" />
              <Image src="smart-glasses-3.jpg" alt="Смарт очки 3" width={400} height={300} className="rounded-lg border border-[#00FF00]/20" />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-20 md:py-32 lg:py-40 border-b border-[#00FF00]/20">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#00FF00]">Наши цены</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <PriceCard title="Базовая модель" price="14 999 ₽" features={["AR функции", "Голосовое управление", "Базовый дизайн"]} />
              <PriceCard title="Продвинутая модель" price="24 999 ₽" features={["AR + VR функции", "Голосовое управление", "Расширенный дизайн", "Геймификация"]} />
              <PriceCard title="Премиум модель" price="34 999 ₽" features={["Полный функционал AR + VR", "Продвинутое голосовое управление", "Премиум дизайн", "Расширенная геймификация", "Эксклюзивные аксессуары"]} />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00FF00]">
                  Готовы увидеть мир по-новому?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Закажите наши инновационные очки сегодня и откройте для себя новые горизонты!
                </p>
              </div>
              <div className="space-x-4">
                <Button 
                  className="bg-[#003300] text-[#00FF00] hover:bg-[#004400] transition-colors" 
                  size="lg"
                  onClick={() => alert('Извините, в данный момент оформление заказа недоступно. Это демонстрационный сайт.')}
                >
                  Заказать сейчас
                </Button>
              </div>
            </div>
          </div>
        </section>
        <HeroModal
          isOpen={heroModalOpen}
          onClose={() => setHeroModalOpen(false)}
        />
      </main>
      <footer className="py-6 w-full shrink-0 border-t border-[#00FF00]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 ФотОчки. Все права защищены.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs hover:text-[#00FF00] transition-colors" href="/terms">
                Условия использования
              </Link>
              <Link className="text-xs hover:text-[#00FF00] transition-colors" href="/privacy">
                Политика конфиденциальности
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col items-center text-center p-6 border border-[#00FF00]/20 rounded-lg space-y-4 h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#00FF00]">{title}</h3>
      <p className="text-gray-400 flex-grow">{description}</p>
      <Button
        variant="outline"
        className="border-[#00FF00] text-[#00FF00] hover:bg-[#003300] transition-colors mt-4"
        onClick={() => setIsModalOpen(true)}
      >
        Узнать больше
      </Button>
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
      />
    </div>
  )
}

function AdvantageCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4 p-6 border border-[#00FF00]/20 rounded-lg">
      <CheckCircle2 className="h-6 w-6 text-[#00FF00] mt-1" />
      <div>
        <h3 className="text-xl font-bold mb-2 text-[#00FF00]">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function PriceCard({ title, price, features }: { title: string, price: string, features: string[] }) {
  return (
    <div className="flex flex-col p-8 border border-[#00FF00]/20 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-center mb-6 text-[#00FF00]">{title}</h3>
      <p className="text-5xl font-bold text-center mb-8 text-[#00B300]" >{price}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-lg text-gray-400">
            <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button size="lg" className="mt-auto text-lg py-6 bg-[#003300] text-[#00FF00] hover:bg-[#004400] transition-colors" onClick={() => alert('Извините, в данный момент оформление заказа недоступно. Это демонстрационный сайт.')}>Выбрать</Button>
    </div>
  )
}