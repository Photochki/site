'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

const FEATURE_DETAILS: Record<string, {
  description: string,
  details: string,
  benefits: string[]
}> = {
  "Голосовое управление": {
    description: "Интуитивное управление очками с помощью голосовых команд",
    details: "Наша система голосового управления использует передовые алгоритмы распознавания речи и естественного языка. Вы можете управлять всеми функциями очков, просто произнося команды - от регулировки яркости до переключения режимов отображения.",
    benefits: [
      "Работает даже в шумной обстановке",
      "Поддерживает множество языков",
      "Возможность настройки собственных команд",
      "Мгновенный отклик системы"
    ]
  },
  "Дополненная реальность": {
    description: "Революционная AR-технология для расширения возможностей восприятия",
    details: "Наши очки накладывают цифровой контент на реальный мир с непревзойденной точностью. Технология отслеживания движений глаз и жестов позволяет взаимодействовать с виртуальными объектами естественным образом.",
    benefits: [
      "Сверхширокое поле зрения 150°",
      "Реалистичная графика высокого разрешения",
      "Точное позиционирование в пространстве",
      "Минимальная задержка отклика"
    ]
  },
  "VR и геймификация": {
    description: "Погружение в виртуальные миры с полным присутствием",
    details: "Революционная технология VR позволяет не только играть в игры, но и проводить виртуальные встречи, обучаться и работать в иммерсивной среде. Система отслеживания движений обеспечивает естественное взаимодействие с виртуальным миром.",
    benefits: [
      "Плавное переключение между AR и VR режимами",
      "Продвинутая система трекинга движений",
      "Встроенные контроллеры жестов",
      "Богатая библиотека приложений"
    ]
  },
  "Разнообразный дизайн": {
    description: "Элегантный и настраиваемый внешний вид",
    details: "Очки доступны в различных стилях и цветовых решениях, чтобы соответствовать любым предпочтениям. Модульная конструкция позволяет менять внешний вид и компоненты под ваши потребности.",
    benefits: [
      "Легкий вес и комфорт при длительном использовании",
      "Сменные модульные компоненты",
      "Различные варианты отделки",
      "Защита от влаги и пыли IP67"
    ]
  }
};

export default function FeatureModal({ isOpen, onClose, title, description }: FeatureModalProps) {
  const featureInfo = FEATURE_DETAILS[title];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-[#00FF00]/20">
        <DialogHeader>
          <DialogTitle className="text-[#00FF00]">{title}</DialogTitle>
          <DialogDescription className="text-gray-400">{featureInfo?.description || description}</DialogDescription>
        </DialogHeader>
        {featureInfo && (
          <div className="space-y-4">
            <p className="text-gray-300">{featureInfo.details}</p>
            <div>
              <h4 className="text-[#00FF00] mb-2">Преимущества:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {featureInfo.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Button
          className="bg-[#003300] text-[#00FF00] hover:bg-[#004400] transition-colors"
          onClick={onClose}
        >
          Закрыть
        </Button>
      </DialogContent>
    </Dialog>
  )
}

