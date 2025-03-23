import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import '@/i18n'

interface Language {
    code: string;
    name: string;
    native: string;
}

const languages: Language[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'zh-CN', name: 'Chinese', native: '简体中文' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Update selectedLanguage when i18n.language changes
    useEffect(() => {
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
            i18n.changeLanguage(lng);
            localStorage.setItem('i18nextLng', lng);
            setSelectedLanguage(lng);
            setIsOpen(false);
        };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedLangObj = languages.find(lang => lang.code === selectedLanguage) || {
        code: 'en',
        name: 'English',
        native: 'English',
    };

    return (
        <div ref={dropdownRef} className="relative inline-flex">
            <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center justify-between gap-2 px-4 py-2 rounded-full",
                    "bg-gray-800 text-white hover:bg-gray-700 transition-colors",
                    "border border-gray-700",
                    "min-w-[120px]" // Ensure button has minimum width
                )}
                aria-label="Language Switcher"
            >
                <Globe className="w-4 h-4" />
                <span>{selectedLangObj.native}</span>
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 w-auto min-w-[120px]"
                        aria-labelledby="language-menu"
                    >
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => changeLanguage(lang.code)}
                                    className={cn(
                                        "block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors w-full text-left",
                                        lang.code === selectedLanguage && "bg-gray-700"
                                    )}
                                >
                                    {lang.native} ({lang.name})
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
