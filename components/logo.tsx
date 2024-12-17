import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="logo.png"
      alt="ФотОчки Logo"
      width={1280}
      height={1034}
      className={className}
    />
  )
}

