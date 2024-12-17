'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface HeroModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HeroModal({ isOpen, onClose }: HeroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-[#00FF00]/20">
        <DialogHeader>
          <DialogTitle className="text-[#00FF00]">Узнайте больше о ФотОчках</DialogTitle>
          <DialogDescription className="text-gray-400">
            Откройте для себя мир инновационных смарт-очков
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-300">
            ФотОчки - это революционные смарт-очки, которые сочетают в себе передовые технологии и стильный дизайн. 
            Наши очки предлагают широкий спектр функций, включая:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Высококачественную камеру для фото и видео</li>
            <li>Дополненную реальность для интерактивного взаимодействия с окружающим миром</li>
            <li>Голосовое управление для удобства использования</li>
            <li>Стильный и эргономичный дизайн для комфортного ношения</li>
          </ul>
          <p className="text-gray-300">
            Независимо от того, используете ли вы их для работы, развлечений или повседневной жизни, 
            ФотОчки откроют для вас новые возможности и изменят ваш взгляд на мир.
          </p>
        </div>
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

