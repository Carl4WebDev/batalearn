import { useStore } from '../stores/useStore'

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
]

export function LanguageSelector() {
  const { language, setLanguage } = useStore()

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-4 py-2 rounded-xl font-bold text-sm md:text-base transition-all duration-200
            ${language === lang.code
              ? 'bg-white text-primary shadow-lg scale-105'
              : 'bg-white/20 text-white hover:bg-white/30'
            }
          `}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  )
}
