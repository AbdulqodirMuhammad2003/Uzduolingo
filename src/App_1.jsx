import React, { useState, useEffect } from 'react';
import {
  Hand, BookOpen, Users, Palette, Clock, Bus, Repeat, ChefHat, Key, Briefcase, MessageCircle,
  Home, Trophy, MapPin, Sun, Stethoscope, UtensilsCrossed, Plane, Landmark, Backpack, Syringe,
  Medal, Building2, Camera, HeartPulse, ThumbsUp, Mic, Handshake, Globe, Lightbulb, Feather,
  Heart, Flame, Gem, Lock, Check, X, Star, Volume2, ArrowLeft, Rocket, Tags, HelpCircle,
  Layers, UserCircle, Smile, Copy, Shuffle, Contact, ScrollText,
  Fingerprint, UsersRound, Wallet, Podcast, Hourglass, BookOpenText, GitBranch, Newspaper,
  Hash, Calculator, AlarmClock, Compass, Trees, Badge, Earth, History, CloudSun,
  CircleHelp, Map, Guitar, Sunrise, Sparkles, ArrowLeftRight, Gauge, MapPinned,
  Rainbow, MousePointer2, Target, Search, Shirt, Eye, KeyRound, Languages,
  ShoppingBag, PenTool, Shapes, Globe2, MessageCircleQuestion, Mail, RotateCcw,
  ListOrdered, Layers3, CaseSensitive, BookMarked, Signpost, SquareUser, DoorOpen, Sofa,
  RefreshCcw, ArrowRightLeft, HandCoins, Beef, Apple, Store, Utensils,
  PartyPopper, CalendarDays, CalendarClock, CheckCircle2, Repeat2, FlagTriangleRight, FastForward,
  Headphones, MonitorPlay, Link2, Tv2, Footprints, CarFront, Waypoints, CornerDownRight,
  PlaneTakeoff, Waves, Rabbit, CircleX, Link, Navigation2, ListTree,
  Hotel, SpellCheck2, Banknote, Cake, Boxes, Rows3, Coins,
  Clock3, ClipboardList, Split, Merge, CookingPot, Timer,
  UserCheck, ArrowUpRight, Scale, RefreshCw,
  Gift, Type, Thermometer, ShieldCheck, Megaphone, HandHelping, CircleUserRound, Move3d, ArrowUpNarrowWide, BookHeart,
  Award, Printer, Loader2, GraduationCap, LogOut,
  Menu, ChevronDown, ChevronRight, Unlock, VolumeX, Crown, Snowflake,
} from 'lucide-react';

const LEVELS = [
  {
    id: 'A1', label: "Boshlang'ich",
    units: [
      {
        title: "1-bo'lim",
        lessons: [
          {
            id: 1, title: 'Salomlashish', icon: Hand,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Salom', options: ['Привет', 'Спасибо', 'Пока', 'До свидания'], answer: 'Привет' },
              { type: 'listening', audioText: 'Здравствуйте! Меня зовут Анна. Я живу в Москве.', question: 'Ayolning ismi nima?', options: ['Анна', 'Ольга', 'Мария', 'Нина'], answer: 'Анна' },
              { type: 'fill_blank', sentence: '___ это? Это Анна.', hint: "(Odam haqida so'ralganda ishlatiladigan so'roq so'zi)", options: ['Кто', 'Что', 'Где', 'Как'], answer: 'Кто' },
              { type: 'match', pairs: [{ ru: 'Да', uz: 'Ha' }, { ru: 'Нет', uz: "Yo'q" }, { ru: 'Пока', uz: 'Xayr' }, { ru: 'Спасибо', uz: 'Rahmat' }] },
              { type: 'order', prompt: 'Mening ismim Nur', tiles: ['Меня', 'зовут', 'Нур'], answer: 'Меня зовут Нур' },
            ],
          },
          {
            id: 2, title: "Fe'l va olmosh", icon: BookOpen,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "Men o'qiyman", options: ['Я читаю', 'Ты читаешь', 'Он читает', 'Мы читаем'], answer: 'Я читаю' },
              { type: 'fill_blank', sentence: 'Что ты ___ ?', hint: "(hozirgi zamon, 'qilmoq' fe'lining 'sen' shakli)", options: ['делаешь', 'делает', 'делаю', 'делают'], answer: 'делаешь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он говорит', options: ['U gapiradi', 'Men gapiraman', 'Biz gapiramiz', 'Sen gapirasan'], answer: 'U gapiradi' },
              { type: 'match', pairs: [{ ru: 'Я', uz: 'Men' }, { ru: 'Ты', uz: 'Sen' }, { ru: 'Он', uz: 'U' }, { ru: 'Мы', uz: 'Biz' }] },
              { type: 'order', prompt: 'Men rus tilini bilaman', tiles: ['Я', 'знаю', 'русский', 'язык'], answer: 'Я знаю русский язык' },
            ],
          },
          {
            id: 3, title: 'Oila', icon: Users,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Ona', options: ['Мама', 'Папа', 'Дедушка', 'Бабушка'], answer: 'Мама' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ota', options: ['Папа', 'Мама', 'Дедушка', 'Бабушка'], answer: 'Папа' },
              { type: 'fill_blank', sentence: 'Это ___ дом.', hint: "(erkak jinsidagi so'z bilan ishlatiladigan egalik olmoshi)", options: ['мой', 'моя', 'моё', 'мои'], answer: 'мой' },
              { type: 'match', pairs: [{ ru: 'Мама', uz: 'Ona' }, { ru: 'Папа', uz: 'Ota' }, { ru: 'Бабушка', uz: 'Buvi' }, { ru: 'Дедушка', uz: 'Bobo' }] },
              { type: 'listening', audioText: 'Это моя мама. А это мой папа. Мы живём в Ташкенте.', question: 'Ular qayerda yashashadi?', options: ['Toshkentda', 'Moskvada', 'Samarqandda', 'Buxoroda'], answer: 'Toshkentda' },
              { type: 'order', prompt: 'Bu mening oilam', tiles: ['Это', 'моя', 'семья'], answer: 'Это моя семья' },
            ],
          },
          {
            id: 4, title: 'Son va rang', icon: Palette,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Bir', options: ['Один', 'Два', 'Три', 'Пять'], answer: 'Один' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Три', options: ['Uch', "To'rt", 'Besh', 'Ikki'], answer: 'Uch' },
              { type: 'fill_blank', sentence: 'У меня есть ___ книга.', hint: "('kitob' so'zi ayol jinsida, sifat ham shunga moslashadi)", options: ['красная', 'красный', 'красное', 'красные'], answer: 'красная' },
              { type: 'match', pairs: [{ ru: 'Красный', uz: 'Qizil' }, { ru: 'Синий', uz: "Ko'k" }, { ru: 'Жёлтый', uz: 'Sariq' }, { ru: 'Зелёный', uz: 'Yashil' }] },
              { type: 'order', prompt: 'Menda besh kitob bor', tiles: ['У', 'меня', 'пять', 'книг'], answer: 'У меня пять книг' },
            ],
          },
          {
            id: 5, title: 'Vaqt', icon: Clock,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Dushanba', options: ['Понедельник', 'Вторник', 'Среда', 'Пятница'], answer: 'Понедельник' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Суббота', options: ['Shanba', 'Yakshanba', 'Juma', 'Seshanba'], answer: 'Shanba' },
              { type: 'fill_blank', sentence: 'Летом я отдыхаю ___ море.', hint: "('dengizda' ma'nosini beruvchi predlog)", options: ['на', 'в', 'у', 'с'], answer: 'на' },
              { type: 'match', pairs: [{ ru: 'Зима', uz: 'Qish' }, { ru: 'Весна', uz: 'Bahor' }, { ru: 'Лето', uz: 'Yoz' }, { ru: 'Осень', uz: 'Kuz' }] },
              { type: 'listening', audioText: 'Сегодня пятница. Завтра суббота. Я отдыхаю в субботу и воскресенье.', question: 'U qachon dam oladi?', options: ['Shanba va yakshanba', 'Dushanba va seshanba', 'Juma va shanba', 'Faqat yakshanba'], answer: 'Shanba va yakshanba' },
              { type: 'order', prompt: 'Bugun juma', tiles: ['Сегодня', 'пятница'], answer: 'Сегодня пятница' },
            ],
          },
          {
            id: 6, title: 'Transport', icon: Bus,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Avtobus', options: ['Автобус', 'Машина', 'Поезд', 'Самолёт'], answer: 'Автобус' },
              { type: 'fill_blank', sentence: 'Каждый день я ___ в школу.', hint: "(har kuni takrorlanadigan harakat uchun 'yurmoq' fe'li)", options: ['хожу', 'иду', 'еду', 'летаю'], answer: 'хожу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я еду на машине', options: ['Men mashinada ketyapman', 'Men samolyotda uchyapman', 'Men piyoda yuryapman', 'Men poyezdda ketyapman'], answer: 'Men mashinada ketyapman' },
              { type: 'match', pairs: [{ ru: 'Самолёт', uz: 'Samolyot' }, { ru: 'Поезд', uz: 'Poyezd' }, { ru: 'Машина', uz: 'Mashina' }, { ru: 'Автобус', uz: 'Avtobus' }] },
              { type: 'order', prompt: 'Men Moskvaga poyezdda ketaman', tiles: ['Я', 'еду', 'в', 'Москву', 'на', 'поезде'], answer: 'Я еду в Москву на поезде' },
            ],
          },
        ],
      },
      {
        title: "2-bo'lim",
        lessons: [
          {
            id: 7, title: 'Uyda', icon: Home,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Xona', options: ['Комната', 'Кухня', 'Кровать', 'Стол'], answer: 'Комната' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Кухня', options: ['Oshxona', 'Xona', 'Yotoqxona', 'Hammom'], answer: 'Oshxona' },
              { type: 'fill_blank', sentence: 'Стол стоит ___ комнате.', hint: "('xonada' ma'nosidagi predlog)", options: ['в', 'на', 'у', 'с'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Кровать', uz: 'Karavot' }, { ru: 'Стол', uz: 'Stol' }, { ru: 'Шкаф', uz: 'Javon' }, { ru: 'Диван', uz: 'Divan' }] },
              { type: 'order', prompt: 'Mening xonamda stol bor', tiles: ['В', 'моей', 'комнате', 'есть', 'стол'], answer: 'В моей комнате есть стол' },
            ],
          },
          {
            id: 8, title: 'Sport', icon: Trophy,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Futbol', options: ['Футбол', 'Баскетбол', 'Теннис', 'Плавание'], answer: 'Футбол' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Плавание', options: ['Suzish', 'Yugurish', "Chang'i uchish", 'Boks'], answer: 'Suzish' },
              { type: 'fill_blank', sentence: 'Я люблю играть ___ футбол.', hint: "('futbol o'ynamoq' iborasida ishlatiladigan predlog)", options: ['в', 'на', 'с', 'о'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Футбол', uz: 'Futbol' }, { ru: 'Баскетбол', uz: 'Basketbol' }, { ru: 'Теннис', uz: 'Tennis' }, { ru: 'Бокс', uz: 'Boks' }] },
              { type: 'order', prompt: 'Men har kuni yuguraman', tiles: ['Я', 'каждый', 'день', 'бегаю'], answer: 'Я каждый день бегаю' },
            ],
          },
          {
            id: 9, title: 'Shaharda', icon: MapPin,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "Ko'cha", options: ['Улица', 'Площадь', 'Парк', 'Мост'], answer: 'Улица' },
              { type: 'fill_blank', sentence: 'Скажите, пожалуйста, как ___ до вокзала?', hint: "('yetib bormoq' fe'lining infinitiv shakli)", options: ['дойти', 'дойдёт', 'дошёл', 'идти'], answer: 'дойти' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Поверните направо', options: ["O'ngga buriling", 'Chapga buriling', "To'g'riga boring", 'Orqaga qayting'], answer: "O'ngga buriling" },
              { type: 'match', pairs: [{ ru: 'Улица', uz: "Ko'cha" }, { ru: 'Площадь', uz: 'Maydon' }, { ru: 'Парк', uz: "Bog'" }, { ru: 'Мост', uz: "Ko'prik" }] },
              { type: 'order', prompt: 'Muzey qayerda joylashgan?', tiles: ['Где', 'находится', 'музей'], answer: 'Где находится музей' },
            ],
          },
          {
            id: 10, title: 'Dam olish', icon: Sun,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "Ta'til", options: ['Отпуск', 'Работа', 'Школа', 'Дом'], answer: 'Отпуск' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Пляж', options: ['Plyaj', "Tog'", "O'rmon", "Ko'l"], answer: 'Plyaj' },
              { type: 'fill_blank', sentence: 'Летом мы едем ___ море.', hint: "('dengizga' yo'nalish ma'nosidagi predlog)", options: ['на', 'в', 'к', 'у'], answer: 'на' },
              { type: 'match', pairs: [{ ru: 'Отпуск', uz: "Ta'til" }, { ru: 'Пляж', uz: 'Plyaj' }, { ru: 'Чемодан', uz: 'Chamadon' }, { ru: 'Билет', uz: 'Chipta' }] },
              { type: 'order', prompt: "Biz tog'larga sayohat qilamiz", tiles: ['Мы', 'путешествуем', 'в', 'горы'], answer: 'Мы путешествуем в горы' },
            ],
          },
          {
            id: 11, title: "Kasal bo'lganda", icon: Stethoscope,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "Bosh og'rig'i", options: ['Головная боль', 'Кашель', 'Температура', 'Насморк'], answer: 'Головная боль' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня болит горло', options: ["Tomog'im og'riyapti", "Boshim og'riyapti", "Qorin og'riyapti", "Ko'zim og'riyapti"], answer: "Tomog'im og'riyapti" },
              { type: 'fill_blank', sentence: 'У меня ___ температура.', hint: "('bor' ma'nosidagi qisqa sifat, ayol jinsiga mos)", options: ['высокая', 'высокий', 'высокое', 'высокие'], answer: 'высокая' },
              { type: 'match', pairs: [{ ru: 'Врач', uz: 'Shifokor' }, { ru: 'Лекарство', uz: 'Dori' }, { ru: 'Аптека', uz: 'Dorixona' }, { ru: 'Больница', uz: 'Kasalxona' }] },
              { type: 'order', prompt: 'Menga dori kerak', tiles: ['Мне', 'нужно', 'лекарство'], answer: 'Мне нужно лекарство' },
            ],
          },
        ],
      },
      {
        title: "3-bo'lim",
        lessons: [
          {
            id: 32, title: 'Ot jinsi', icon: Tags,
            questions: [
              { type: 'gender', prompt: 'Книга', options: ['он', 'она', 'оно'], answer: 'она' },
              { type: 'gender', prompt: 'Окно', options: ['он', 'она', 'оно'], answer: 'оно' },
              { type: 'gender', prompt: 'Журнал', options: ['он', 'она', 'оно'], answer: 'он' },
              { type: 'gender', prompt: 'Семья', options: ['он', 'она', 'оно'], answer: 'она' },
              { type: 'order', prompt: 'Mana mening kitobim', tiles: ['Вот', 'моя', 'книга'], answer: 'Вот моя книга' },
            ],
          },
          {
            id: 33, title: 'Kim bu? Nima bu?', icon: HelpCircle,
            questions: [
              { type: 'whowhat', prompt: 'Музыкант', options: ['Кто', 'Что'], answer: 'Кто' },
              { type: 'whowhat', prompt: 'Гитара', options: ['Кто', 'Что'], answer: 'Что' },
              { type: 'listening', audioText: 'Это турист? Нет, это не турист. Это студент.', question: 'Bu odam kim ekan?', options: ['Turist', 'Talaba', 'Aktyor', 'Musiqachi'], answer: 'Talaba' },
              { type: 'match', pairs: [{ ru: 'Секретарь', uz: 'Kotib' }, { ru: 'Директор', uz: 'Direktor' }, { ru: 'Актриса', uz: 'Aktrisa' }, { ru: 'Стюардесса', uz: 'Styuardessa' }] },
              { type: 'order', prompt: 'Bu aktrisa', tiles: ['Это', 'актриса'], answer: 'Это актриса' },
            ],
          },
          {
            id: 34, title: "Fe'l guruhlari", icon: Layers,
            questions: [
              { type: 'fill_blank', sentence: 'Я хорошо ___ по-русски.', hint: "('tushunmoq' fe'lining 'men' shakli, I guruh)", options: ['понимаю', 'понимаешь', 'понимает', 'понимаем'], answer: 'понимаю' },
              { type: 'fill_blank', sentence: 'Ты ___ телевизор?', hint: "('tomosha qilmoq' fe'lining 'sen' shakli, II guruh)", options: ['смотришь', 'смотрю', 'смотрит', 'смотрят'], answer: 'смотришь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы отдыхаем', options: ['Biz dam olyapmiz', 'Ular dam olishyapti', 'Siz dam olyapsiz', 'Men dam olyapman'], answer: 'Biz dam olyapmiz' },
              { type: 'match', pairs: [{ ru: 'Знать', uz: 'Bilmoq' }, { ru: 'Работать', uz: 'Ishlamoq' }, { ru: 'Говорить', uz: 'Gapirmoq' }, { ru: 'Спешить', uz: 'Shoshilmoq' }] },
              { type: 'order', prompt: 'Ular hozir dam olishyapti', tiles: ['Они', 'сейчас', 'отдыхают'], answer: 'Они сейчас отдыхают' },
            ],
          },
          {
            id: 35, title: 'Olmoshlar: kim, kimni', icon: UserCircle,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ знаю.', hint: "('u' erkak, tushum kelishigi shakli)", options: ['его', 'он', 'ему', 'им'], answer: 'его' },
              { type: 'fill_blank', sentence: 'Вы ___ не слушаете!', hint: "('men' so'zining tushum kelishigi shakli)", options: ['меня', 'я', 'мне', 'мной'], answer: 'меня' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ты нас понимаешь?', options: ['Sen bizni tushunyapsanmi?', 'Biz seni tushunyapmizmi?', 'Sen meni tushunyapsanmi?', 'Ular bizni tushunishyaptimi?'], answer: 'Sen bizni tushunyapsanmi?' },
              { type: 'match', pairs: [{ ru: 'Меня', uz: 'Meni' }, { ru: 'Тебя', uz: 'Seni' }, { ru: 'Его', uz: 'Uni (erkak)' }, { ru: 'Её', uz: 'Uni (ayol)' }] },
              { type: 'order', prompt: '(Ayol haqida) Men uni bilaman', tiles: ['Я', 'её', 'знаю'], answer: 'Я её знаю' },
            ],
          },
          {
            id: 36, title: 'Tanishuv', icon: Smile,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Как вас зовут?', options: ['Ismingiz nima?', 'Yoshingiz nechida?', 'Qayerdansiz?', 'Kasbingiz nima?'], answer: 'Ismingiz nima?' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Juda yoqimli', options: ['Очень приятно', 'До свидания', 'Спасибо большое', 'Как дела?'], answer: 'Очень приятно' },
              { type: 'fill_blank', sentence: '— Как вас зовут? — ___ зовут Лена.', hint: "('meni' so'zi, bu iborada doim shu holatda ishlatiladi)", options: ['Меня', 'Я', 'Мне', 'Мной'], answer: 'Меня' },
              { type: 'match', pairs: [{ ru: 'Студент', uz: 'Talaba' }, { ru: 'Журналист', uz: 'Jurnalist' }, { ru: 'Адвокат', uz: 'Advokat' }, { ru: 'Экономист', uz: 'Iqtisodchi' }] },
              { type: 'order', prompt: 'Keling, tanishaylik!', tiles: ['Давайте', 'познакомимся'], answer: 'Давайте познакомимся' },
            ],
          },
          {
            id: 37, title: "Ko'plik: qoida", icon: Copy,
            questions: [
              { type: 'plural', prompt: 'Стол', options: ['столы', 'столов', 'столам', 'столе'], answer: 'столы' },
              { type: 'plural', prompt: 'Слово', options: ['слова', 'слово', 'слов', 'словам'], answer: 'слова' },
              { type: 'plural', prompt: 'Книга', options: ['книги', 'книгы', 'книг', 'книге'], answer: 'книги' },
              { type: 'fill_blank', sentence: 'Это секретарь. Это ___.', hint: "('ь' tushib, o'rniga -И qo'shiladi)", options: ['секретари', 'секретарь', 'секретарям', 'секретарей'], answer: 'секретари' },
              { type: 'order', prompt: 'Bu vrachlar', tiles: ['Это', 'врачи'], answer: 'Это врачи' },
            ],
          },
          {
            id: 38, title: "Ko'plikning istisnolari", icon: Shuffle,
            questions: [
              { type: 'plural', prompt: 'Дом', options: ['дома', 'домы', 'домов', 'домам'], answer: 'дома' },
              { type: 'plural', prompt: 'Брат', options: ['братья', 'браты', 'братов', 'братьев'], answer: 'братья' },
              { type: 'plural', prompt: 'Человек', options: ['люди', 'человеки', 'человека', 'людей'], answer: 'люди' },
              { type: 'plural', prompt: 'Ребёнок', options: ['дети', 'ребёнки', 'ребята', 'детей'], answer: 'дети' },
              { type: 'match', pairs: [{ ru: 'Часы', uz: 'Soat' }, { ru: 'Деньги', uz: 'Pul' }, { ru: 'Родители', uz: 'Ota-ona' }, { ru: 'Джинсы', uz: 'Jins shim' }] },
            ],
          },
          {
            id: 39, title: "Kasblar va do'stlar", icon: Contact,
            questions: [
              { type: 'match', pairs: [{ ru: 'Журналист', uz: 'Jurnalist' }, { ru: 'Таксист', uz: 'Taksist' }, { ru: 'Экономист', uz: "Iqtisodchi" }, { ru: 'Спортсмен', uz: 'Sportchi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы спортсмены?', options: ['Siz sportchimisiz?', 'Siz taksichimisiz?', 'Siz jurnalistmisiz?', 'Siz talabamisiz?'], answer: 'Siz sportchimisiz?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Yo'q, men muhandisman", options: ['Нет, я инженер', 'Нет, я журналист', 'Нет, я студент', 'Нет, я актёр'], answer: 'Нет, я инженер' },
              { type: 'listening', audioText: 'Это музыканты? Нет, это не музыканты. Это актёры.', question: 'Ular kim ekan?', options: ['Musiqachilar', 'Aktyorlar', 'Sportchilar', 'Jurnalistlar'], answer: 'Aktyorlar' },
              { type: 'order', prompt: 'Bular siyosatchilar', tiles: ['Это', 'политики'], answer: 'Это политики' },
            ],
          },
          {
            id: 40, title: "Matnni o'qish", icon: ScrollText,
            questions: [
              {
                type: 'reading',
                text: 'Город, улица, автобус, трамвай, машина, дом, магазин, киоск, музей, театр, парк.\n— Извините, где здесь киоски?\n— Вот киоск.',
                question: "Suhbatda odam nimani so'rayapti?",
                options: ['Kiosklar qayerdaligini', 'Muzey qachon ochilishini', "Avtobus necha pul turishini", 'Uning ismini'],
                answer: 'Kiosklar qayerdaligini',
              },
              {
                type: 'reading',
                text: 'Друг, подруга, собака, кошка, коллега, фотография.\n— Кто это?\n— Это мой друг. Его зовут Игорь. Это моя подруга. Её зовут Ольга.',
                question: 'Olga kim?',
                options: ["Uning do'sti (ayol)", 'Uning opasi', 'Uning direktori', 'Uning mijozi'],
                answer: "Uning do'sti (ayol)",
              },
              {
                type: 'reading',
                text: 'Брат, муж, сын, сестра, жена, папа, мама, дедушка, бабушка, внук, внучка.\n— Это твои сыновья?\n— Да, это мои сыновья, а это моя жена и мой брат.',
                question: 'Suhbatda kimlar haqida gapirilmoqda?',
                options: ["O'g'illar, xotin va aka-uka", 'Nabira va buvi', 'Amaki va xola', 'Opa-singillar'],
                answer: "O'g'illar, xotin va aka-uka",
              },
              {
                type: 'reading',
                text: 'Журналист, газета, журнал, слово, словарь, журналистка, буква, текст.\n— Вы журналист?\n— Да, я журналист. Вот мой журнал. Вы его читаете?',
                question: "Bu odam kim bo'lib ishlaydi?",
                options: ['Jurnalist', 'Taksist', 'Iqtisodchi', 'Sportchi'],
                answer: 'Jurnalist',
              },
              {
                type: 'reading',
                text: 'Это студенты. Они изучают русский язык. Вот кафе. Здесь студенты завтракают и обедают.',
                question: 'Talabalar nima qilishyapti?',
                options: ["Rus tilini o'rganishyapti", "Futbol o'ynashyapti", 'Kafeda ishlashyapti', 'Sayohatga borishyapti'],
                answer: "Rus tilini o'rganishyapti",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'A2', label: 'Elementar',
    units: [
      {
        title: "1-bo'lim",
        lessons: [
          {
            id: 12, title: "Fe'l vidi", icon: Repeat,
            questions: [
              { type: 'fill_blank', sentence: 'Обычно я ___ хлеб в этом магазине.', hint: "(odatiy, doimiy harakat — nomukammal fe'l)", options: ['покупаю', 'куплю', 'покупал', 'покупает'], answer: 'покупаю' },
              { type: 'fill_blank', sentence: 'Завтра я ___ этот подарок.', hint: "(bir martalik, kelasi zamon — mukammal fe'l)", options: ['куплю', 'покупаю', 'покупал', 'купит'], answer: 'куплю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я понял', options: ['Men tushundim', 'Men tushunyapman', 'Sen tushunding', 'Biz tushundik'], answer: 'Men tushundim' },
              { type: 'match', pairs: [{ ru: 'Купить', uz: 'Sotib olmoq' }, { ru: 'Дать', uz: 'Bermoq' }, { ru: 'Начать', uz: 'Boshlamoq' }, { ru: 'Понять', uz: 'Tushunmoq' }] },
              { type: 'listening', audioText: 'Вчера я купил новую книгу. Завтра я куплю подарок для сестры.', question: 'U kecha nima sotib oldi?', options: ['Yangi kitob', "Sovg'a", 'Non', 'Sut'], answer: 'Yangi kitob' },
              { type: 'order', prompt: 'Men kitobni sotib oldim', tiles: ['Я', 'купил', 'книгу'], answer: 'Я купил книгу' },
            ],
          },
          {
            id: 13, title: 'Oshxona', icon: ChefHat,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Non', options: ['Хлеб', 'Молоко', 'Мясо', 'Сыр'], answer: 'Хлеб' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Молоко', options: ['Sut', 'Suv', 'Non', "Go'sht"], answer: 'Sut' },
              { type: 'fill_blank', sentence: 'У меня нет ___.', hint: "('yo'q' so'zidan keyin qaratqich kelishigi keladi)", options: ['хлеба', 'хлеб', 'хлебом', 'хлебу'], answer: 'хлеба' },
              { type: 'match', pairs: [{ ru: 'Тарелка', uz: 'Likop' }, { ru: 'Вилка', uz: 'Vilka' }, { ru: 'Ложка', uz: 'Qoshiq' }, { ru: 'Нож', uz: 'Pichoq' }] },
              { type: 'order', prompt: 'Menga bir stakan suv kerak', tiles: ['Мне', 'нужен', 'стакан', 'воды'], answer: 'Мне нужен стакан воды' },
            ],
          },
          {
            id: 14, title: 'Kimniki?', icon: Key,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu kimning mashinasi?', options: ['Чья это машина?', 'Что это?', 'Кто это?', 'Где машина?'], answer: 'Чья это машина?' },
              { type: 'fill_blank', sentence: 'Это машина ___.', hint: "(egalik ma'nosida qaratqich kelishigi ishlatiladi)", options: ['брата', 'брат', 'брату', 'братом'], answer: 'брата' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У подруги есть виза', options: ["Do'stimda (ayol) viza bor", 'Ukamda viza bor', 'Mendan viza bor', 'Sizda viza bor'], answer: "Do'stimda (ayol) viza bor" },
              { type: 'match', pairs: [{ ru: 'Брат', uz: 'Aka / Uka' }, { ru: 'Подруга', uz: "Do'st (ayol)" }, { ru: 'Друг', uz: "Do'st (erkak)" }, { ru: 'Сестра', uz: 'Opa / Singil' }] },
              { type: 'listening', audioText: 'Это машина брата. А это книга сестры.', question: 'Mashina kimniki?', options: ['Akaning yoki ukaning', 'Opaning yoki singilning', "Do'stning", 'Onaning'], answer: 'Akaning yoki ukaning' },
              { type: 'order', prompt: 'Bu opamning kitobi', tiles: ['Это', 'книга', 'сестры'], answer: 'Это книга сестры' },
            ],
          },
          {
            id: 41, title: 'Egalik: mening, sening', icon: Fingerprint,
            questions: [
              { type: 'fill_blank', sentence: 'Это мой дом. Это ___ мама.', hint: "(ayol jinsidagi so'z uchun 'mening' shakli)", options: ['моя', 'мой', 'моё', 'мои'], answer: 'моя' },
              { type: 'fill_blank', sentence: 'Это твои дети? — Да, это ___ дети.', hint: "(ko'plik so'z uchun 'sening' shakli)", options: ['твои', 'твой', 'твоя', 'твоё'], answer: 'твои' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu mening kitobim', options: ['Это моя книга', 'Это твоя книга', 'Это наша книга', 'Это его книга'], answer: 'Это моя книга' },
              { type: 'match', pairs: [{ ru: 'Чей', uz: "Kimniki? (erkak so'z)" }, { ru: 'Чья', uz: 'Kimniki? (ayol so\'z)' }, { ru: 'Чьё', uz: 'Kimniki? (neytral so\'z)' }, { ru: 'Чьи', uz: "Kimniki? (ko'plik)" }] },
              { type: 'order', prompt: 'Bu mening jurnalim', tiles: ['Это', 'мой', 'журнал'], answer: 'Это мой журнал' },
            ],
          },
          {
            id: 15, title: 'Restoranda', icon: UtensilsCrossed,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Menyu, iltimos', options: ['Меню, пожалуйста', 'Счёт, пожалуйста', 'Спасибо большое', 'До свидания'], answer: 'Меню, пожалуйста' },
              { type: 'fill_blank', sentence: 'Я хочу ___ салат.', hint: "('buyurtma qilmoq' fe'lining infinitivi)", options: ['заказать', 'заказал', 'заказывал', 'заказывает'], answer: 'заказать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Принесите, пожалуйста, счёт', options: ['Iltimos, hisobni olib keling', 'Iltimos, menyuni bering', 'Iltimos, suv bering', 'Rahmat, mazali edi'], answer: 'Iltimos, hisobni olib keling' },
              { type: 'match', pairs: [{ ru: 'Официант', uz: 'Ofitsiant' }, { ru: 'Счёт', uz: 'Hisob-kitob' }, { ru: 'Меню', uz: 'Menyu' }, { ru: 'Заказ', uz: 'Buyurtma' }] },
              { type: 'order', prompt: 'Bu yerda juda mazali', tiles: ['Здесь', 'очень', 'вкусно'], answer: 'Здесь очень вкусно' },
            ],
          },
          {
            id: 42, title: 'Egalik: bizning, sizning', icon: UsersRound,
            questions: [
              { type: 'fill_blank', sentence: 'Это наша семья. Это ___ дом.', hint: "('bizning' — erkak/neytral so'z uchun)", options: ['наш', 'наша', 'наше', 'наши'], answer: 'наш' },
              { type: 'fill_blank', sentence: 'Это ваши часы? — Да, это ___ часы.', hint: "('sizning' — ko'plik so'z uchun)", options: ['ваши', 'ваш', 'ваша', 'ваше'], answer: 'ваши' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это его дом, его машина', options: ['Bu uning (erkak) uyi va mashinasi', 'Bu uning (ayol) uyi va mashinasi', 'Bu bizning uyimiz va mashinamiz', 'Bu sizning uyingiz va mashinangiz'], answer: 'Bu uning (erkak) uyi va mashinasi' },
              { type: 'match', pairs: [{ ru: 'Его', uz: 'Uning (erkak)' }, { ru: 'Её', uz: 'Uning (ayol)' }, { ru: 'Их', uz: 'Ularning' }, { ru: 'Наш', uz: 'Bizning' }] },
              { type: 'order', prompt: 'Bu ularning kartalari', tiles: ['Это', 'их', 'карты'], answer: 'Это их карты' },
            ],
          },
          {
            id: 16, title: 'Aeroportda', icon: Plane,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Chipta', options: ['Билет', 'Паспорт', 'Виза', 'Багаж'], answer: 'Билет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Регистрация на рейс', options: ["Reysga ro'yxatdan o'tish", 'Bojxona nazorati', 'Bagaj olish', 'Parvoz vaqti'], answer: "Reysga ro'yxatdan o'tish" },
              { type: 'fill_blank', sentence: 'Где я могу ___ багаж?', hint: "('topshirmoq' fe'lining infinitivi)", options: ['сдать', 'сдал', 'сдаю', 'сдают'], answer: 'сдать' },
              { type: 'match', pairs: [{ ru: 'Паспорт', uz: 'Pasport' }, { ru: 'Виза', uz: 'Viza' }, { ru: 'Багаж', uz: 'Bagaj' }, { ru: 'Рейс', uz: 'Reys' }] },
              { type: 'order', prompt: 'Mening reysim kechikdi', tiles: ['Мой', 'рейс', 'задержался'], answer: 'Мой рейс задержался' },
            ],
          },
          {
            id: 43, title: "Menda bor — «У меня есть»", icon: Wallet,
            questions: [
              { type: 'fill_blank', sentence: 'У меня есть брат. А у ___ есть сестра?', hint: "('sen' so'zining 'у' predlogi bilan shakli)", options: ['тебя', 'ты', 'тебе', 'тобой'], answer: 'тебя' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Mening savolim bor', options: ['У меня есть вопрос', 'У тебя есть вопрос', 'У нас есть вопрос', 'У вас есть вопрос'], answer: 'У меня есть вопрос' },
              { type: 'fill_blank', sentence: 'У нас есть машина. А у ___ есть велосипед.', hint: "('ular' so'zining 'у' predlogi bilan shakli)", options: ['них', 'они', 'им', 'ими'], answer: 'них' },
              { type: 'match', pairs: [{ ru: 'У меня', uz: 'Menda' }, { ru: 'У тебя', uz: 'Senda' }, { ru: 'У нас', uz: 'Bizda' }, { ru: 'У них', uz: 'Ularda' }] },
              { type: 'order', prompt: 'Bizda mashina bor', tiles: ['У', 'нас', 'есть', 'машина'], answer: 'У нас есть машина' },
            ],
          },
        ],
      },
      {
        title: "2-bo'lim",
        lessons: [
          {
            id: 17, title: 'Muzeyda', icon: Landmark,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Chipta narxi qancha?', options: ['Сколько стоит билет?', 'Где вход?', 'Что это такое?', 'Можно фотографировать?'], answer: 'Сколько стоит билет?' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно фотографировать?', options: ['Suratga olish mumkinmi?', 'Bu qancha turadi?', 'Bu qayerda?', 'Bu kim?'], answer: 'Suratga olish mumkinmi?' },
              { type: 'fill_blank', sentence: 'В музее много ___ картин.', hint: "('qadimiy' sifatining ko'plik shakli)", options: ['старинных', 'старинный', 'старинная', 'старинное'], answer: 'старинных' },
              { type: 'match', pairs: [{ ru: 'Картина', uz: 'Rasm' }, { ru: 'Художник', uz: 'Rassom' }, { ru: 'Экскурсия', uz: 'Ekskursiya' }, { ru: 'Вход', uz: 'Kirish' }] },
              { type: 'order', prompt: "Muzey soat o'ndan ochiq", tiles: ['Музей', 'открыт', 'с', 'десяти', 'часов'], answer: 'Музей открыт с десяти часов' },
            ],
          },
          {
            id: 45, title: 'Allaqachon, hali va ham', icon: Hourglass,
            questions: [
              { type: 'fill_blank', sentence: 'Олег уже дома? — Нет, он ___ гуляет.', hint: "('hali ham', hozirgi holat davom etmoqda)", options: ['ещё', 'уже', 'тоже', 'ещё не'], answer: 'ещё' },
              { type: 'fill_blank', sentence: 'Ты ужинаешь? — Да, я ___ ужинаю.', hint: "('allaqachon' — tasdiqlovchi javobda)", options: ['уже', 'ещё', 'тоже', 'пока'], answer: 'уже' },
              { type: 'fill_blank', sentence: 'Это студент, это ___ студент.', hint: "('ham' — ikkalasi ham bir xil)", options: ['тоже', 'ещё', 'уже', 'пока'], answer: 'тоже' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня есть брат, а ещё у меня есть сестра', options: ['Akam bor, yana singlim ham bor', "Akam yo'q", 'Faqat singlim bor', "Akam va singlim yo'q"], answer: 'Akam bor, yana singlim ham bor' },
              { type: 'fill_blank', sentence: 'Вы курите? — Нет, я ___ не курю.', hint: "('ham' — inkor gapda)", options: ['тоже', 'ещё', 'уже', 'пока'], answer: 'тоже' },
            ],
          },
          {
            id: 18, title: 'Sayohat', icon: Backpack,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Mehmonxonada joy band qildim', options: ['Я забронировал номер в гостинице', 'Я купил билет на самолёт', 'Я потерял паспорт', 'Я приехал вчера'], answer: 'Я забронировал номер в гостинице' },
              { type: 'fill_blank', sentence: 'Мы ___ в отеле три дня.', hint: "('turmoq' fe'lining o'tgan zamoni)", options: ['жили', 'живём', 'жить', 'живут'], answer: 'жили' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Экскурсовод рассказал нам много интересного', options: ["Gid bizga ko'p qiziqarli narsalar aytib berdi", 'Biz gidsiz sayohat qildik', 'Biz mehmonxonada qoldik', 'Biz uyga qaytdik'], answer: "Gid bizga ko'p qiziqarli narsalar aytib berdi" },
              { type: 'match', pairs: [{ ru: 'Гостиница', uz: 'Mehmonxona' }, { ru: 'Гид', uz: 'Gid' }, { ru: 'Виза', uz: 'Viza' }, { ru: 'Карта', uz: 'Xarita' }] },
              { type: 'order', prompt: 'Biz Samarqandga sayohat qildik', tiles: ['Мы', 'путешествовали', 'в', 'Самарканд'], answer: 'Мы путешествовали в Самарканд' },
            ],
          },
          {
            id: 44, title: 'Igorning oilasi', icon: Podcast,
            questions: [
              { type: 'listening', audioText: 'Здравствуйте! Меня зовут Игорь. Я биолог. Я много читаю и мало отдыхаю.', question: "Igor kim bo'lib ishlaydi?", options: ['Biolog', 'Iqtisodchi', 'Shifokor', 'Jurnalist'], answer: 'Biolog' },
              { type: 'listening', audioText: 'У меня есть жена. Её зовут Ольга. Она экономист. Она много работает.', question: "Olga kim bo'lib ishlaydi?", options: ['Iqtisodchi', 'Biolog', "O'qituvchi", 'Shifokor'], answer: 'Iqtisodchi' },
              { type: 'listening', audioText: 'У нас есть сын. Его зовут Дима. Он школьник. Я думаю, он мало читает и много смотрит телевизор.', question: "Dima nimani ko'p yaxshi ko'radi?", options: ["Televizor ko'rishni", "Kitob o'qishni", "Sport bilan shug'ullanishni", 'Musiqa tinglashni'], answer: "Televizor ko'rishni" },
              { type: 'listening', audioText: 'Ещё у меня есть брат. Его зовут Владимир. Мой брат — капитан. Он много курит, а я не курю.', question: "Vladimir kim bo'lib ishlaydi?", options: ['Kapitan', 'Biolog', 'Shifokor', 'Iqtisodchi'], answer: 'Kapitan' },
              { type: 'listening', audioText: 'У нас есть папа. Его зовут Пётр Ильич. Наш папа врач. Ещё у нас есть мама. Её зовут Светлана Георгиевна. Наша мама уже не работает.', question: "Igorning otasi kim bo'lib ishlaydi?", options: ['Shifokor (vrach)', 'Kapitan', 'Biolog', 'Iqtisodchi'], answer: 'Shifokor (vrach)' },
            ],
          },
          {
            id: 19, title: 'Shifokorda', icon: Syringe,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Necha kundan beri kasalsiz?', options: ['Как давно вы болеете?', 'Что у вас болит?', 'Сколько вам лет?', 'Где вы живёте?'], answer: 'Как давно вы болеете?' },
              { type: 'fill_blank', sentence: 'Врач сказал, что мне нужно ___ таблетки.', hint: "('ichmoq' fe'lining infinitiv shakli)", options: ['пить', 'пил', 'пью', 'пьёт'], answer: 'пить' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вам нужно отдыхать и пить много воды', options: ["Sizga dam olish va ko'p suv ichish kerak", "Sizga sport bilan shug'ullanish kerak", 'Sizga shifoxonaga yotish kerak', 'Sizga dori ichmaslik kerak'], answer: "Sizga dam olish va ko'p suv ichish kerak" },
              { type: 'match', pairs: [{ ru: 'Таблетка', uz: 'Tabletka' }, { ru: 'Рецепт', uz: 'Retsept' }, { ru: 'Укол', uz: 'Ukol' }, { ru: 'Анализ', uz: 'Tahlil' }] },
              { type: 'order', prompt: 'Tez tuzaling!', tiles: ['Выздоравливайте', 'скорее'], answer: 'Выздоравливайте скорее' },
            ],
          },
          {
            id: 47, title: 'Oila daraxti', icon: GitBranch,
            questions: [
              { type: 'match', pairs: [{ ru: 'Муж и жена', uz: 'Er va xotin' }, { ru: 'Сестра и брат', uz: 'Opa-singil va aka-uka' }, { ru: 'Внучка и бабушка', uz: 'Nevara qiz va buvi' }, { ru: 'Сын и дочь', uz: "O'g'il va qiz" }] },
              { type: 'fill_blank', sentence: 'Это мама и ___.', hint: "('ota' so'zi)", options: ['папа', 'сын', 'дочь', 'брат'], answer: 'папа' },
              { type: 'fill_blank', sentence: 'Это бабушка и ___.', hint: "('bobo' so'zi)", options: ['дедушка', 'внук', 'тётя', 'дядя'], answer: 'дедушка' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu amaki (tog'a) va xola (amma)", options: ['Это дядя и тётя', 'Это муж и жена', 'Это внук и внучка', 'Это брат и сестра'], answer: 'Это дядя и тётя' },
              { type: 'order', prompt: 'Bu mening oilam', tiles: ['Это', 'моя', 'семья'], answer: 'Это моя семья' },
            ],
          },
          {
            id: 46, title: 'Oilam haqida matn', icon: BookOpenText,
            questions: [
              { type: 'reading', text: 'Это Ольга Владиславовна. Она завтракает.\nЭто её сын. Его зовут Дима. Он играет.\nЭто его папа. Его зовут Игорь. Он отдыхает.', question: 'Dima kim?', options: ["Ularning o'g'li", 'Ularning akasi', 'Ularning nabirasi', 'Ularning amakisi'], answer: "Ularning o'g'li" },
              { type: 'reading', text: 'Это его брат. Его зовут Владимир. Он ужинает.\nЭто его жена. Её зовут Катя. Она читает.', question: "Vladimir Igorga kim bo'ladi?", options: ['Ukasi yoki akasi', "O'g'li", 'Otasi', 'Nabirasi'], answer: 'Ukasi yoki akasi' },
              { type: 'reading', text: 'Это его мама. Её зовут Светлана Георгиевна. Она смотрит телевизор.\nЭто её муж, Пётр Ильич. Он гуляет.', question: 'Svetlana Georgiyevna kim?', options: ['Igorning onasi', 'Igorning rafiqasi', 'Igorning singlisi', 'Igorning buvisi'], answer: 'Igorning onasi' },
              { type: 'reading', text: 'Это их внук, Дима. Он играет.\nЭто его дедушка и бабушка, а Владимир и Катя — его дядя и тётя.', question: "Vladimir va Katya Dimaga kim bo'lishadi?", options: ['Amaki va xola', 'Bobo va buvi', 'Ota va ona', 'Aka va opa'], answer: 'Amaki va xola' },
              { type: 'match', pairs: [{ ru: 'Внук', uz: "Nabira (o'g'il)" }, { ru: 'Дядя', uz: "Amaki / Tog'a" }, { ru: 'Тётя', uz: 'Xola / Amma' }, { ru: 'Дедушка', uz: 'Bobo' }] },
            ],
          },
          {
            id: 48, title: 'Intervyu: jurnalist bilan', icon: Newspaper,
            questions: [
              { type: 'listening', audioText: 'Добрый день, я журналист Дмитрий Тихонов, телеканал «Санкт-Петербург».', question: "Dmitriy Tixonov kim bo'lib ishlaydi?", options: ['Jurnalist', 'Futbolchi', 'Murabbiy', 'Iqtisodchi'], answer: 'Jurnalist' },
              { type: 'listening', audioText: 'Это футболист Андрей Бегунов.', question: 'Andrey Begunov kim?', options: ['Futbolchi', 'Jurnalist', 'Aktyor', 'Shifokor'], answer: 'Futbolchi' },
              { type: 'listening', audioText: 'Андрей, это ваша семья? Это ваша жена, а это ваш сын?', question: "Jurnalist Andreydan birinchi navbatda nima haqida so'ramoqda?", options: ['Uning oilasi haqida', 'Uning mashinasi haqida', 'Uning uyi haqida', 'Uning ishi haqida'], answer: 'Uning oilasi haqida' },
              { type: 'listening', audioText: 'Это ваши медали? Это ваша команда? Это ваш тренер?', question: "Bularning qaysi biri so'ralmagan?", options: ['Uning kitoblari', 'Medallari', 'Jamoasi', 'Murabbiyi'], answer: 'Uning kitoblari' },
              { type: 'listening', audioText: 'Спасибо за интервью!', question: "Suhbat oxirida jurnalist nima deydi?", options: ['Intervyu uchun rahmat', "Xayr, ko'rishguncha", 'Kechirasiz', 'Salomat bo\'ling'], answer: 'Intervyu uchun rahmat' },
            ],
          },
        ],
      },
      {
        title: "3-bo'lim",
        lessons: [
          {
            id: 49, title: 'Sonlar: 0-20', icon: Hash,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Восемь', options: ['Sakkiz', 'Yetti', "To'qqiz", 'Olti'], answer: 'Sakkiz' },
              { type: 'fill_blank', sentence: 'Восемь минус один — ___.', hint: '(8-1 amalining natijasi)', options: ['семь', 'шесть', 'девять', 'пять'], answer: 'семь' },
              { type: 'fill_blank', sentence: 'После тринадцати идёт ___.', hint: "(13dan keyingi son)", options: ['четырнадцать', 'пятнадцать', 'двенадцать', 'шестнадцать'], answer: 'четырнадцать' },
              { type: 'match', pairs: [{ ru: 'Одиннадцать', uz: '11' }, { ru: 'Пятнадцать', uz: '15' }, { ru: 'Семнадцать', uz: '17' }, { ru: 'Девятнадцать', uz: '19' }] },
              { type: 'order', prompt: "Bu o'n to'qqiz", tiles: ['Это', 'девятнадцать'], answer: 'Это девятнадцать' },
            ],
          },
          {
            id: 50, title: 'Sonlar: 20-100', icon: Calculator,
            questions: [
              { type: 'match', pairs: [{ ru: 'Двадцать', uz: '20' }, { ru: 'Пятьдесят', uz: '50' }, { ru: 'Семьдесят', uz: '70' }, { ru: 'Сто', uz: '100' }] },
              { type: 'fill_blank', sentence: 'После сорока идёт ___.', hint: "(40dan keyingi o'nlik)", options: ['пятьдесят', 'шестьдесят', 'тридцать', 'сорок'], answer: 'пятьдесят' },
              { type: 'choice', dir: 'uz2ru', prompt: "To'qson", options: ['Девяносто', 'Девятнадцать', 'Девять', 'Девятьсот'], answer: 'Девяносто' },
              { type: 'listening', audioText: 'Мне тридцать три года. А моему брату сорок пять лет.', question: 'Ukasi necha yoshda?', options: ['45', '33', '50', '25'], answer: '45' },
              { type: 'order', prompt: 'Menda oltmish rubl bor', tiles: ['У', 'меня', 'шестьдесят', 'рублей'], answer: 'У меня шестьдесят рублей' },
            ],
          },
          {
            id: 51, title: "Soat necha bo'ldi?", icon: AlarmClock,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Сколько времени?', options: ["Soat necha bo'ldi?", 'Bugun qaysi kun?', 'Necha yoshdasiz?', 'Qachon keldingiz?'], answer: "Soat necha bo'ldi?" },
              { type: 'fill_blank', sentence: '— Извините, сколько времени? — ___ семь тридцать.', hint: "('allaqachon' — vaqt aytishda)", options: ['Уже', 'Ещё', 'Тоже', 'Пока'], answer: 'Уже' },
              { type: 'listening', audioText: 'Сейчас девять пятнадцать. У нас ещё есть время.', question: 'Hozir soat necha?', options: ['9:15', '9:50', '7:15', '9:30'], answer: '9:15' },
              { type: 'match', pairs: [{ ru: 'Утро', uz: 'Ertalab' }, { ru: 'День', uz: 'Kunduzi' }, { ru: 'Вечер', uz: 'Kechqurun' }, { ru: 'Ночь', uz: 'Tunda' }] },
              { type: 'order', prompt: "Hozir soat o'n ikki", tiles: ['Сейчас', 'двенадцать'], answer: 'Сейчас двенадцать' },
            ],
          },
          {
            id: 52, title: "Qayerda? Asosiy so'zlar", icon: Compass,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'U yerda', options: ['Там', 'Здесь', 'Справа', 'Слева'], answer: 'Там' },
              { type: 'fill_blank', sentence: 'Мой стол ___, а твой — слева.', hint: "('o'ngda' so'zi)", options: ['справа', 'слева', 'здесь', 'там'], answer: 'справа' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Кто у вас справа?', options: ["O'ng tarafingizda kim bor?", 'Chap tarafingizda kim bor?', 'Bu yerda kim bor?', 'U yerda kim bor?'], answer: "O'ng tarafingizda kim bor?" },
              { type: 'match', pairs: [{ ru: 'Здесь', uz: 'Bu yerda' }, { ru: 'Там', uz: 'U yerda' }, { ru: 'Справа', uz: "O'ngda" }, { ru: 'Слева', uz: 'Chapda' }] },
              { type: 'order', prompt: 'Kitob u yerda', tiles: ['Книга', 'там'], answer: 'Книга там' },
            ],
          },
          {
            id: 53, title: "Predlojniy: maxsus so'zlar", icon: Trees,
            questions: [
              { type: 'fill_blank', sentence: 'Мы гуляем в ___.', hint: "('o'rmon' so'zi, maxsus -у shakli)", options: ['лесу', 'лес', 'лесе', 'леса'], answer: 'лесу' },
              { type: 'fill_blank', sentence: 'Моя куртка на ___.', hint: "('pol' so'zi, maxsus -у shakli)", options: ['полу', 'пол', 'поле', 'пола'], answer: 'полу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Они отдыхают в Крыму.', options: ['Ular Qrimda dam olishmoqda', 'Ular Qrimga ketishmoqda', 'Ular Qrimdan kelishmoqda', 'Ular Qrimni sevishadi'], answer: 'Ular Qrimda dam olishmoqda' },
              { type: 'match', pairs: [{ ru: 'В лесу', uz: "O'rmonda" }, { ru: 'На полу', uz: 'Polda' }, { ru: 'В саду', uz: "Bog'da" }, { ru: 'На берегу', uz: 'Sohilda' }] },
              { type: 'order', prompt: 'Kapitan portda', tiles: ['Капитан', 'в', 'порту'], answer: 'Капитан в порту' },
            ],
          },
          {
            id: 54, title: "Mening, sening, o'zimniki", icon: Badge,
            questions: [
              { type: 'fill_blank', sentence: 'Это мой дом. У меня ___ стол.', hint: "('o'zimniki' — ega bilan mos keladi)", options: ['свой', 'мой', 'твой', 'его'], answer: 'свой' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu sening g'oyang emas", options: ['Это не твоя идея', 'Это не моя идея', 'Это не наша идея', 'Это не его идея'], answer: 'Это не твоя идея' },
              { type: 'fill_blank', sentence: 'Он берёт ___ деньги, а не мои.', hint: "('o'zining' — u kishi haqida)", options: ['свои', 'его', 'мои', 'наши'], answer: 'свои' },
              { type: 'match', pairs: [{ ru: 'Свой', uz: "O'zimniki (erkak)" }, { ru: 'Своя', uz: "O'zimniki (ayol)" }, { ru: 'Своё', uz: "O'zimniki (neytral)" }, { ru: 'Свои', uz: "O'zimniki (ko'plik)" }] },
              { type: 'order', prompt: "Menda o'zimning stolim bor", tiles: ['У', 'меня', 'свой', 'стол'], answer: 'У меня свой стол' },
            ],
          },
          {
            id: 55, title: 'Shaharlar va mamlakatlar', icon: Earth,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ в Ташкенте.', hint: "('yashamoq' fe'lining 'men' shakli)", options: ['живу', 'живёшь', 'живёт', 'живём'], answer: 'живу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Где живёт Норико? — Она живёт в Японии, в Осаке.', options: ['Osakada, Yaponiyada yashaydi', "Parijda yashaydi", 'Moskvada yashaydi', 'Berlinda yashaydi'], answer: 'Osakada, Yaponiyada yashaydi' },
              { type: 'listening', audioText: 'Людвиг живёт в Голландии, в Амстердаме.', question: 'Lyudvig qayerda yashaydi?', options: ['Amsterdamda', 'Berlinda', 'Parijda', 'Rimda'], answer: 'Amsterdamda' },
              { type: 'match', pairs: [{ ru: 'Франция', uz: 'Fransiya' }, { ru: 'Германия', uz: 'Germaniya' }, { ru: 'Италия', uz: 'Italiya' }, { ru: 'Испания', uz: 'Ispaniya' }] },
              { type: 'order', prompt: 'Biz Toshkentda yashaymiz', tiles: ['Мы', 'живём', 'в', 'Ташкенте'], answer: 'Мы живём в Ташкенте' },
            ],
          },
          {
            id: 56, title: "O'tgan zamon: edi", icon: History,
            questions: [
              { type: 'fill_blank', sentence: 'Вчера я ___ дома.', hint: "('bo'lmoq' fe'lining o'tgan zamoni)", options: ['был', 'буду', 'есть', 'являюсь'], answer: 'был' },
              { type: 'fill_blank', sentence: 'Раньше я ___ в Москве, а сейчас живу в Ташкенте.', hint: "('yashamoq' fe'lining o'tgan zamoni)", options: ['жил', 'живу', 'жила', 'живём'], answer: 'жил' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ты уже обедал? — Нет, ещё не обедал.', options: ["Yo'q, hali tushlik qilmadim", 'Ha, allaqachon tushlik qildim', "Yo'q, men och emasman", 'Ha, hozir tushlik qilyapman'], answer: "Yo'q, hali tushlik qilmadim" },
              { type: 'match', pairs: [{ ru: 'Я был', uz: 'Men edim (erkak)' }, { ru: 'Я была', uz: 'Men edim (ayol)' }, { ru: 'Мы были', uz: 'Biz edik' }, { ru: 'Они были', uz: 'Ular edi' }] },
              { type: 'order', prompt: 'Kecha men uyda edim', tiles: ['Вчера', 'я', 'был', 'дома'], answer: 'Вчера я был дома' },
            ],
          },
          {
            id: 57, title: 'Fasllar, oylar va ob-havo', icon: CloudSun,
            questions: [
              { type: 'match', pairs: [{ ru: 'Зима', uz: 'Qish' }, { ru: 'Весна', uz: 'Bahor' }, { ru: 'Лето', uz: 'Yoz' }, { ru: 'Осень', uz: 'Kuz' }] },
              { type: 'fill_blank', sentence: 'Зимой у нас холодно и идёт ___.', hint: "('qor' so'zi)", options: ['снег', 'дождь', 'ветер', 'солнце'], answer: 'снег' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Летом здесь не очень жарко.', options: ['Yozda bu yerda unchalik issiq emas', 'Qishda bu yerda juda sovuq', "Bahorda bu yerda yomg'ir yog'adi", 'Kuzda bu yerda shamol bor'], answer: 'Yozda bu yerda unchalik issiq emas' },
              { type: 'listening', audioText: 'В январе я играю в хоккей. А в июле я отдыхаю на море.', question: 'Yanvarda u nima qiladi?', options: ["Xokkey o'ynaydi", 'Dengizda dam oladi', 'Maktabga boradi', "Kitob o'qiydi"], answer: "Xokkey o'ynaydi" },
              { type: 'order', prompt: 'Bahorda issiq', tiles: ['Весной', 'тепло'], answer: 'Весной тепло' },
            ],
          },
        ],
      },
      {
        title: "4-bo'lim",
        lessons: [
          {
            id: 58, title: "Chey, chya, chyo, chyi", icon: CircleHelp,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Чей это чай?', options: ["Bu kimning choyi?", 'Bu kimning kitobi?', 'Bu kimning uyi?', 'Bu kimning mashinasi?'], answer: "Bu kimning choyi?" },
              { type: 'fill_blank', sentence: '___ это письмо? — Я не знаю, чьё.', hint: "(neytral so'z uchun 'kimniki' so'roq olmoshi)", options: ['Чьё', 'Чей', 'Чья', 'Чьи'], answer: 'Чьё' },
              { type: 'fill_blank', sentence: '___ это ручка? — Это твоя ручка.', hint: "(ayol jinsidagi so'z uchun)", options: ['Чья', 'Чей', 'Чьё', 'Чьи'], answer: 'Чья' },
              { type: 'match', pairs: [{ ru: 'Чей', uz: "Erkak so'z uchun" }, { ru: 'Чья', uz: "Ayol so'z uchun" }, { ru: 'Чьё', uz: "Neytral so'z uchun" }, { ru: 'Чьи', uz: "Ko'plik uchun" }] },
              { type: 'order', prompt: 'Bu kimning soatlari?', tiles: ['Чьи', 'это', 'часы'], answer: 'Чьи это часы' },
            ],
          },
          {
            id: 59, title: 'V yoki NA? Joylar', icon: Map,
            questions: [
              { type: 'fill_blank', sentence: 'Рыбы живут ___ море.', hint: "('dengizda' — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Мы гуляем ___ улице.', hint: "('ko'chada' — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Туристы сейчас в Эрмитаже, на экскурсии.', options: ['Turistlar hozir Ermitajda, ekskursiyada', 'Turistlar hozir mehmonxonada', 'Turistlar hozir samolyotda', 'Turistlar hozir bozorda'], answer: 'Turistlar hozir Ermitajda, ekskursiyada' },
              { type: 'match', pairs: [{ ru: 'На севере', uz: 'Shimolda' }, { ru: 'На востоке', uz: 'Sharqda' }, { ru: 'На западе', uz: "G'arbda" }, { ru: 'На юге', uz: 'Janubda' }] },
              { type: 'order', prompt: 'Biz bozorda edik', tiles: ['Мы', 'были', 'на', 'рынке'], answer: 'Мы были на рынке' },
            ],
          },
          {
            id: 60, title: "O'ynash: V yoki NA?", icon: Guitar,
            questions: [
              { type: 'fill_blank', sentence: 'Мы играем ___ футбол.', hint: "(sport turlari — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Алла играет ___ пианино.', hint: "(musiqa asboblari — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'choice', dir: 'uz2ru', prompt: "Siz gitarada chalasizmi?", options: ['Вы играете на гитаре?', 'Вы играете в гитару?', 'Вы играете гитару?', 'Вы играете с гитарой?'], answer: 'Вы играете на гитаре?' },
              { type: 'match', pairs: [{ ru: 'Шахматы', uz: 'Shaxmat' }, { ru: 'Карты', uz: 'Qarta' }, { ru: 'Скрипка', uz: 'Skripka' }, { ru: 'Флейта', uz: 'Fleyta' }] },
              { type: 'order', prompt: "Ular shaxmat o'ynashadi", tiles: ['Они', 'играют', 'в', 'шахматы'], answer: 'Они играют в шахматы' },
            ],
          },
          {
            id: 61, title: 'Kun vaqtlari va chastota', icon: Sunrise,
            questions: [
              { type: 'match', pairs: [{ ru: 'Утром', uz: 'Ertalab' }, { ru: 'Днём', uz: 'Kunduzi' }, { ru: 'Вечером', uz: 'Kechqurun' }, { ru: 'Ночью', uz: 'Tunda' }] },
              { type: 'fill_blank', sentence: 'Я ___ смотрю телевизор, а часто читаю.', hint: "('kamdan-kam' — chastota ravishi)", options: ['редко', 'всегда', 'каждый день', 'часто'], answer: 'редко' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Сначала я думаю, потом говорю.', options: ["Avval o'ylayman, keyin gapiraman", "Avval gapiraman, keyin o'ylayman", "Men hech qachon o'ylamayman", 'Men doim gapiraman'], answer: "Avval o'ylayman, keyin gapiraman" },
              { type: 'fill_blank', sentence: 'Вы часто делаете глупости? — Нет, ___ не делаю.', hint: "('hech qachon' so'zi)", options: ['никогда', 'всегда', 'иногда', 'часто'], answer: 'никогда' },
              { type: 'order', prompt: 'Men har kuni ishlayman', tiles: ['Я', 'работаю', 'каждый', 'день'], answer: 'Я работаю каждый день' },
            ],
          },
          {
            id: 62, title: "Qanday? Sifatlar to'liq shakli", icon: Sparkles,
            questions: [
              { type: 'fill_blank', sentence: 'Это ___ урок.', hint: "(erkak jinsidagi so'z: 'qiyin')", options: ['трудный', 'трудное', 'трудная', 'трудные'], answer: 'трудный' },
              { type: 'fill_blank', sentence: 'Это ___ идея.', hint: "(ayol jinsidagi so'z: 'qiziqarli')", options: ['интересная', 'интересный', 'интересное', 'интересные'], answer: 'интересная' },
              { type: 'fill_blank', sentence: 'Это русск___ язык.', hint: "(к, г, х dan keyin — ИЙ)", options: ['ий', 'ый', 'ая', 'ое'], answer: 'ий' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какое у вас окно, большое или маленькое?', options: ['Sizning derazangiz qanday, katta yoki kichikmi?', 'Sizning uyingiz qanday?', 'Sizning stolingiz qayerda?', 'Sizning kitobingiz kimniki?'], answer: 'Sizning derazangiz qanday, katta yoki kichikmi?' },
              { type: 'order', prompt: 'Bu katta muzey', tiles: ['Это', 'большой', 'музей'], answer: 'Это большой музей' },
            ],
          },
          {
            id: 63, title: 'Sifat antonimlari', icon: ArrowLeftRight,
            questions: [
              { type: 'match', pairs: [{ ru: 'Хороший', uz: 'Yaxshi' }, { ru: 'Плохой', uz: 'Yomon' }, { ru: 'Большой', uz: 'Katta' }, { ru: 'Маленький', uz: 'Kichik' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это дорогая машина.', options: ['Bu qimmat mashina', 'Bu arzon mashina', 'Bu yangi mashina', 'Bu eski mashina'], answer: 'Bu qimmat mashina' },
              { type: 'fill_blank', sentence: 'Это не лёгкая работа, это ___ работа.', hint: "('qiyin' so'zi)", options: ['трудная', 'лёгкая', 'скучная', 'интересная'], answer: 'трудная' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu qiziqarli film emas, zerikarli film", options: ['Это не интересный фильм, скучный фильм', 'Это интересный фильм', 'Это новый фильм', 'Это плохой фильм'], answer: 'Это не интересный фильм, скучный фильм' },
              { type: 'order', prompt: 'U boy odam', tiles: ['Он', 'богатый', 'человек'], answer: 'Он богатый человек' },
            ],
          },
          {
            id: 64, title: 'Ravishlar: yaxshi, yomon...', icon: Gauge,
            questions: [
              { type: 'fill_blank', sentence: 'Он хорошо играет в теннис, а я играю ___.', hint: "('yomon' ravishi)", options: ['плохо', 'хорошо', 'быстро', 'медленно'], answer: 'плохо' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы играете быстро или медленно?', options: ["Tez o'ynaysizmi yoki sekin?", "Yaxshi o'ynaysizmi yoki yomon?", "Ko'p o'ynaysizmi yoki kam?", "Baland ovozda o'ynaysizmi yoki past?"], answer: "Tez o'ynaysizmi yoki sekin?" },
              { type: 'fill_blank', sentence: 'Не говорите так ___, я вас не слышу!', hint: "('past ovozda' ravishi)", options: ['тихо', 'громко', 'быстро', 'медленно'], answer: 'тихо' },
              { type: 'match', pairs: [{ ru: 'Быстро', uz: 'Tez' }, { ru: 'Медленно', uz: 'Sekin' }, { ru: 'Часто', uz: 'Tez-tez' }, { ru: 'Редко', uz: 'Kamdan-kam' }] },
              { type: 'order', prompt: "U yaxshi o'ynaydi", tiles: ['Он', 'хорошо', 'играет'], answer: 'Он хорошо играет' },
            ],
          },
          {
            id: 65, title: 'Sankt-Peterburg haqida matn', icon: MapPinned,
            questions: [
              { type: 'reading', text: 'Санкт-Петербург — большой и красивый город. Он не очень старый, но очень интересный.', question: 'Peterburg haqida qanday deyilgan?', options: ["Katta va chiroyli, lekin unchalik eski emas", 'Kichik va eski shahar', 'Faqat sanoat shahri', 'Juda qadimiy shahar'], answer: "Katta va chiroyli, lekin unchalik eski emas" },
              { type: 'reading', text: 'В городе есть красивые дворцы, памятники и большие музеи: Эрмитаж и Русский музей.', question: 'Shaharda qaysi muzeylar bor?', options: ['Ermitaj va Rus muzeyi', 'Faqat Ermitaj', 'Tretyakov galereyasi', 'Bolshoy teatri'], answer: 'Ermitaj va Rus muzeyi' },
              { type: 'reading', text: 'Главная улица города называется Невский проспект, а главная площадь — Дворцовая.', question: "Shaharning asosiy ko'chasi qanday ataladi?", options: ['Nevskiy prospekti', 'Qizil maydon', 'Arbat', "Tverskaya ko'chasi"], answer: 'Nevskiy prospekti' },
              { type: 'reading', text: 'Летом в Петербурге белые ночи, а зимой холодно и идёт снег.', question: "Peterburgda yozda nima bo'ladi?", options: ['Oq tunlar', 'Qattiq issiqlik', "Qor yog'adi", "Bo'ron bo'ladi"], answer: 'Oq tunlar' },
              { type: 'reading', text: 'Пётр Первый основал этот город, и поэтому Петербург связан с русской историей.', question: 'Peterburgni kim asos solgan?', options: ['Birinchi Pyotr', 'Ekaterina Ikkinchi', 'Ivan Grozniy', 'Lenin'], answer: 'Birinchi Pyotr' },
            ],
          },
        ],
      },
      {
        title: "5-bo'lim",
        lessons: [
          {
            id: 66, title: 'Ranglar', icon: Rainbow,
            questions: [
              { type: 'match', pairs: [{ ru: 'Красный', uz: 'Qizil' }, { ru: 'Синий', uz: "Ko'k" }, { ru: 'Жёлтый', uz: 'Sariq' }, { ru: 'Зелёный', uz: 'Yashil' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какого цвета ваша машина?', options: ['Mashinangiz qanday rangda?', 'Mashinangiz qancha turadi?', 'Mashinangiz qayerda?', 'Mashinangiz yangimi?'], answer: 'Mashinangiz qanday rangda?' },
              { type: 'fill_blank', sentence: 'Моя куртка ___.', hint: "('qora' rangi, ayol jinsidagi so'z uchun)", options: ['чёрная', 'чёрный', 'чёрное', 'чёрные'], answer: 'чёрная' },
              { type: 'choice', dir: 'uz2ru', prompt: "Mening ko'ylagim oq", options: ['Моя рубашка белая', 'Моя рубашка белый', 'Моя рубашка белое', 'Моя рубашка белые'], answer: 'Моя рубашка белая' },
              { type: 'order', prompt: 'Bu qizil mashina', tiles: ['Это', 'красная', 'машина'], answer: 'Это красная машина' },
            ],
          },
          {
            id: 67, title: 'Bu, shu — этот, эта, это, эти', icon: MousePointer2,
            questions: [
              { type: 'fill_blank', sentence: '___ дом большой.', hint: "(erkak jinsidagi so'z uchun 'bu')", options: ['Этот', 'Эта', 'Это', 'Эти'], answer: 'Этот' },
              { type: 'fill_blank', sentence: '___ книга интересная.', hint: "(ayol jinsidagi so'z uchun 'bu')", options: ['Эта', 'Этот', 'Это', 'Эти'], answer: 'Эта' },
              { type: 'fill_blank', sentence: '___ дети играют во дворе.', hint: "(ko'plik uchun 'bu')", options: ['Эти', 'Этот', 'Эта', 'Это'], answer: 'Эти' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это окно старое, а то окно новое.', options: ['Bu deraza eski, u deraza yangi', 'Bu deraza yangi, u deraza eski', 'Ikkala deraza ham yangi', 'Ikkala deraza ham eski'], answer: 'Bu deraza eski, u deraza yangi' },
              { type: 'order', prompt: 'Bu mashina qimmat', tiles: ['Эта', 'машина', 'дорогая'], answer: 'Эта машина дорогая' },
            ],
          },
          {
            id: 68, title: "Vinitelniy: nima o'qiyman?", icon: Target,
            questions: [
              { type: 'fill_blank', sentence: 'Я читаю ___.', hint: "('jurnal' so'zi — erkak jinsi, o'zgarmaydi)", options: ['журнал', 'журнала', 'журналу', 'журналом'], answer: 'журнал' },
              { type: 'fill_blank', sentence: 'Он читает ___.', hint: "('kitob' so'zi — ayol jinsi, -а → -у)", options: ['книгу', 'книга', 'книге', 'книгой'], answer: 'книгу' },
              { type: 'fill_blank', sentence: 'Мы смотрим ___.', hint: "('foto' so'zi — neytral, o'zgarmaydi)", options: ['фото', 'фота', 'фоту', 'фотом'], answer: 'фото' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я ищу газету.', options: ['Men gazeta qidiryapman', "Men jurnal o'qiyapman", 'Men kitob yozyapman', 'Men xat kutyapman'], answer: 'Men gazeta qidiryapman' },
              { type: 'order', prompt: "Men gazetalarni o'qiyman", tiles: ['Я', 'читаю', 'газеты'], answer: 'Я читаю газеты' },
            ],
          },
          {
            id: 69, title: 'Xohlamoq, sevmoq, izlamoq', icon: Search,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ читать журналы.', hint: "('xohlamoq' fe'lining 'men' shakli)", options: ['хочу', 'хочешь', 'хочет', 'хотим'], answer: 'хочу' },
              { type: 'fill_blank', sentence: 'Ты ___ русский язык?', hint: "('sevmoq' fe'lining 'sen' shakli)", options: ['любишь', 'люблю', 'любит', 'любим'], answer: 'любишь' },
              { type: 'choice', dir: 'uz2ru', prompt: "U mashinasini qidiryapti", options: ['Он ищет свою машину', 'Он любит свою машину', 'Он хочет машину', 'Он видит машину'], answer: 'Он ищет свою машину' },
              { type: 'match', pairs: [{ ru: 'Хотеть', uz: 'Xohlamoq' }, { ru: 'Любить', uz: 'Sevmoq' }, { ru: 'Искать', uz: 'Izlamoq' }, { ru: 'Смотреть', uz: 'Tomosha qilmoq' }] },
              { type: 'order', prompt: "Men rus tilini yaxshi ko'raman", tiles: ['Я', 'люблю', 'русский', 'язык'], answer: 'Я люблю русский язык' },
            ],
          },
          {
            id: 70, title: 'Kiyim-kechak', icon: Shirt,
            questions: [
              { type: 'match', pairs: [{ ru: 'Куртка', uz: 'Kurtka' }, { ru: 'Рубашка', uz: "Ko'ylak (erkak)" }, { ru: 'Платье', uz: "Ko'ylak (ayol)" }, { ru: 'Брюки', uz: 'Shim' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какие у него ботинки?', options: ['Uning oyoq kiyimi qanday?', 'Uning kurtkasi qanday?', 'Uning shimi qanday?', 'Uning shapkasi qanday?'], answer: 'Uning oyoq kiyimi qanday?' },
              { type: 'fill_blank', sentence: 'Зимой я ношу тёплую ___.', hint: "('po'stin' so'zi)", options: ['шубу', 'шуба', 'шубе', 'шубой'], answer: 'шубу' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sizda qanday sumka bor?", options: ['Какая у вас сумка?', 'Какой у вас сумка?', 'Какое у вас сумка?', 'Какие у вас сумка?'], answer: 'Какая у вас сумка?' },
              { type: 'order', prompt: 'Menda qora shapka bor', tiles: ['У', 'меня', 'чёрная', 'шапка'], answer: 'У меня чёрная шапка' },
            ],
          },
          {
            id: 71, title: "Tana qismlari va tashqi ko'rinish", icon: Eye,
            questions: [
              { type: 'match', pairs: [{ ru: 'Волосы', uz: 'Soch' }, { ru: 'Глаза', uz: "Ko'z" }, { ru: 'Лицо', uz: 'Yuz' }, { ru: 'Нос', uz: 'Burun' }] },
              { type: 'fill_blank', sentence: 'У неё чёрные ___.', hint: "('soch' so'zi, ko'plikda)", options: ['волосы', 'волос', 'волосу', 'волосом'], answer: 'волосы' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какие у вас глаза, синие или зелёные?', options: ["Ko'zlaringiz qanday, ko'kmi yoki yashilmi?", 'Sochlaringiz qanday rangda?', 'Yuzingiz qanday?', "Bo'yingiz qancha?"], answer: "Ko'zlaringiz qanday, ko'kmi yoki yashilmi?" },
              { type: 'fill_blank', sentence: 'У него голубые ___.', hint: "('ko'z' so'zi, ko'plikda)", options: ['глаза', 'глаз', 'глазу', 'глазом'], answer: 'глаза' },
              { type: 'order', prompt: "Uning ko'zlari yashil", tiles: ['У', 'него', 'зелёные', 'глаза'], answer: 'У него зелёные глаза' },
            ],
          },
          {
            id: 72, title: 'Egalik olmoshlari vinitelniy kelishikda', icon: KeyRound,
            questions: [
              { type: 'fill_blank', sentence: 'Я вижу ___ дом.', hint: "('mening' — erkak jinsi, jonsiz, o'zgarmaydi)", options: ['мой', 'моя', 'моё', 'мою'], answer: 'мой' },
              { type: 'fill_blank', sentence: 'Он читает ___ книгу.', hint: "('sening' — ayol jinsi, -я → -ю)", options: ['твою', 'твой', 'твоё', 'твоя'], answer: 'твою' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы любим нашу страну.', options: ["Biz o'z mamlakatimizni sevamiz", "Biz o'z uyimizni sevamiz", "Biz o'z oilamizni sevamiz", "Biz o'z ishimizni sevamiz"], answer: "Biz o'z mamlakatimizni sevamiz" },
              { type: 'match', pairs: [{ ru: 'Мою', uz: 'Mening (ayol)' }, { ru: 'Твоего', uz: 'Sening (jonli, erkak)' }, { ru: 'Нашу', uz: 'Bizning (ayol)' }, { ru: 'Вашу', uz: 'Sizning (ayol)' }] },
              { type: 'order', prompt: 'Men sizning savolingizni tushunaman', tiles: ['Я', 'понимаю', 'ваш', 'вопрос'], answer: 'Я понимаю ваш вопрос' },
            ],
          },
          {
            id: 73, title: 'Tillar: rus tilida, ingliz tilida', icon: Languages,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы говорите по-английски?', options: ['Siz ingliz tilida gaplashasizmi?', 'Siz rus tilida gaplashasizmi?', 'Siz nemis tilida gaplashasizmi?', 'Siz fransuz tilida gaplashasizmi?'], answer: 'Siz ingliz tilida gaplashasizmi?' },
              { type: 'fill_blank', sentence: 'Я немного говорю ___.', hint: "('rus tilida' — по- + til nomi)", options: ['по-русски', 'русский', 'русского', 'по-русский'], answer: 'по-русски' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men o'zbek tilida yozaman", options: ['Я пишу по-узбекски', 'Я пишу узбекский', 'Я говорю узбекский', 'Я читаю по-узбекски'], answer: 'Я пишу по-узбекски' },
              { type: 'match', pairs: [{ ru: 'По-русски', uz: 'Rus tilida' }, { ru: 'По-английски', uz: 'Ingliz tilida' }, { ru: 'По-немецки', uz: 'Nemis tilida' }, { ru: 'По-французски', uz: 'Fransuz tilida' }] },
              { type: 'order', prompt: 'U yaxshi ingliz tilida gapiradi', tiles: ['Он', 'хорошо', 'говорит', 'по-английски'], answer: 'Он хорошо говорит по-английски' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'B1', label: "O'rta",
    units: [
      {
        title: "1-bo'lim",
        lessons: [
          {
            id: 74, title: "Do'konda", icon: ShoppingBag,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "Menga shuni ko'rsating, iltimos", options: ['Покажите мне это, пожалуйста', 'Дайте мне сдачу', 'Сколько это стоит?', 'Это очень дорого'], answer: 'Покажите мне это, пожалуйста' },
              { type: 'fill_blank', sentence: 'Сколько ___ этот костюм?', hint: "('turadi/qiymatga ega' fe'li)", options: ['стоит', 'стоят', 'стою', 'стоим'], answer: 'стоит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У вас есть сдача?', options: ['Sizda qaytim bormi?', 'Sizda pul bormi?', 'Sizda karta bormi?', 'Sizda chek bormi?'], answer: 'Sizda qaytim bormi?' },
              { type: 'match', pairs: [{ ru: 'Продавец', uz: 'Sotuvchi' }, { ru: 'Покупатель', uz: 'Xaridor' }, { ru: 'Касса', uz: 'Kassa' }, { ru: 'Чек', uz: 'Chek' }] },
              { type: 'order', prompt: 'Bu qancha turadi?', tiles: ['Сколько', 'это', 'стоит'], answer: 'Сколько это стоит' },
            ],
          },
          {
            id: 20, title: 'Kasblar', icon: Briefcase,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: "O'qituvchi", options: ['Учитель', 'Врач', 'Повар', 'Продавец'], answer: 'Учитель' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Врач лечит больных', options: ['Shifokor kasallarni davolaydi', "O'qituvchi bolalarni o'qitadi", 'Oshpaz ovqat tayyorlaydi', 'Sotuvchi mol sotadi'], answer: 'Shifokor kasallarni davolaydi' },
              { type: 'fill_blank', sentence: 'Мой брат — ___. Он лечит людей.', hint: '(kasallarni davolaydigan kasb nomi)', options: ['врач', 'учитель', 'повар', 'продавец'], answer: 'врач' },
              { type: 'match', pairs: [{ ru: 'Учитель', uz: "O'qituvchi" }, { ru: 'Врач', uz: 'Shifokor' }, { ru: 'Повар', uz: 'Oshpaz' }, { ru: 'Продавец', uz: 'Sotuvchi' }] },
              { type: 'order', prompt: 'Mening opam shifokor', tiles: ['Моя', 'сестра', 'врач'], answer: 'Моя сестра врач' },
            ],
          },
          {
            id: 75, title: "Yozmoq: писать fe'li", icon: PenTool,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ письмо другу.', hint: "('yozmoq' fe'lining 'men' shakli)", options: ['пишу', 'пишешь', 'пишет', 'пишем'], answer: 'пишу' },
              { type: 'fill_blank', sentence: 'Ты ___ по-русски?', hint: "('yozmoq' fe'lining 'sen' shakli)", options: ['пишешь', 'пишу', 'пишет', 'пишете'], answer: 'пишешь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она пишет книгу.', options: ['U kitob yozyapti', "U kitob o'qiyapti", 'U kitob sotib olyapti', 'U kitobni qidiryapti'], answer: 'U kitob yozyapti' },
              { type: 'match', pairs: [{ ru: 'Писать', uz: 'Yozmoq' }, { ru: 'Читать', uz: "O'qimoq" }, { ru: 'Отвечать', uz: 'Javob bermoq' }, { ru: 'Спрашивать', uz: "So'ramoq" }] },
              { type: 'order', prompt: 'Biz maktub yozamiz', tiles: ['Мы', 'пишем', 'письмо'], answer: 'Мы пишем письмо' },
            ],
          },
          {
            id: 76, title: 'Sifatlar: neytral shakl', icon: Shapes,
            questions: [
              { type: 'fill_blank', sentence: 'Это ___ окно.', hint: "(neytral so'z: 'katta')", options: ['большое', 'большой', 'большая', 'большие'], answer: 'большое' },
              { type: 'fill_blank', sentence: 'У нас ___ письмо от друга.', hint: "(neytral so'z: 'yangi')", options: ['новое', 'новый', 'новая', 'новые'], answer: 'новое' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какое это красивое место!', options: ['Bu qanday chiroyli joy!', 'Bu qanday katta uy!', 'Bu qanday qiyin ish!', 'Bu qanday yangi mashina!'], answer: 'Bu qanday chiroyli joy!' },
              { type: 'match', pairs: [{ ru: 'Большое', uz: 'Katta (neytral)' }, { ru: 'Маленькое', uz: 'Kichik (neytral)' }, { ru: 'Красивое', uz: 'Chiroyli (neytral)' }, { ru: 'Старое', uz: 'Eski (neytral)' }] },
              { type: 'order', prompt: 'Bu qadimiy bino', tiles: ['Это', 'старое', 'здание'], answer: 'Это старое здание' },
            ],
          },
          {
            id: 77, title: "Mamlakatlar: -ия so'zlar", icon: Globe2,
            questions: [
              { type: 'fill_blank', sentence: 'Мы отдыхаем в ___.', hint: "('Italiya' so'zi, predlojniy kelishik)", options: ['Италии', 'Италия', 'Италию', 'Италией'], answer: 'Италии' },
              { type: 'fill_blank', sentence: 'Она учится в ___.', hint: "('Germaniya' so'zi, predlojniy kelishik)", options: ['Германии', 'Германия', 'Германию', 'Германией'], answer: 'Германии' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я живу в России, в Петербурге.', options: ['Men Rossiyada, Peterburgda yashayman', 'Men Fransiyada yashayman', 'Men Germaniyada yashayman', 'Men Italiyada yashayman'], answer: 'Men Rossiyada, Peterburgda yashayman' },
              { type: 'match', pairs: [{ ru: 'В Испании', uz: 'Ispaniyada' }, { ru: 'В Англии', uz: 'Angliyada' }, { ru: 'В Индии', uz: 'Hindistonda' }, { ru: 'В Австралии', uz: 'Avstraliyada' }] },
              { type: 'order', prompt: 'Ular Fransiyada yashashadi', tiles: ['Они', 'живут', 'во', 'Франции'], answer: 'Они живут во Франции' },
            ],
          },
          {
            id: 21, title: 'Suhbat', icon: MessageCircle,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Как дела?', options: ['Ishlar qalay?', 'Ismingiz nima?', 'Necha yoshdasiz?', 'Xayr'], answer: 'Ishlar qalay?' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga yoqadi', options: ['Мне нравится', 'Я люблю', 'Мне нужно', 'Я хочу'], answer: 'Мне нравится' },
              { type: 'fill_blank', sentence: '___ вам нравится?', hint: "('nima' so'rog'i kerak, chunki narsa haqida so'ralmoqda)", options: ['Что', 'Кто', 'Где', 'Когда'], answer: 'Что' },
              { type: 'match', pairs: [{ ru: 'Комплимент', uz: 'Iltifot' }, { ru: 'Приятно', uz: 'Yoqimli' }, { ru: 'Любезный', uz: 'Mehribon' }, { ru: 'Прекрасно', uz: 'Ajoyib' }] },
              { type: 'listening', audioText: 'Вам очень идёт это платье! Спасибо за комплимент, мне приятно.', question: 'Ayol komplimentga qanday javob berdi?', options: ['Rahmat, menga yoqimli', "Yo'q, unaqa emas", 'Menga yoqmadi', 'Bilmadim'], answer: 'Rahmat, menga yoqimli' },
              { type: 'order', prompt: "Sizga bu ko'ylak juda yarashadi", tiles: ['Вам', 'это', 'платье', 'очень', 'идёт'], answer: 'Вам это платье очень идёт' },
            ],
          },
          {
            id: 78, title: 'Kim haqida? Nima haqida?', icon: MessageCircleQuestion,
            questions: [
              { type: 'fill_blank', sentence: 'Я думаю ___.', hint: "('sen haqingda' — 'sen' olmoshining predlojniy shakli)", options: ['о тебе', 'о ты', 'о тебя', 'тебе'], answer: 'о тебе' },
              { type: 'fill_blank', sentence: 'Мы говорим ___.', hint: "('u (erkak) haqida' — 'u' olmoshining predlojniy shakli)", options: ['о нём', 'о он', 'о его', 'ему'], answer: 'о нём' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Расскажите мне о себе.', options: ["Menga o'zingiz haqingizda gapirib bering", 'Menga oilangiz haqida gapirib bering', 'Menga ishingiz haqida gapirib bering', 'Menga shahringiz haqida gapirib bering'], answer: "Menga o'zingiz haqingizda gapirib bering" },
              { type: 'match', pairs: [{ ru: 'Обо мне', uz: 'Men haqimda' }, { ru: 'О тебе', uz: 'Sen haqingda' }, { ru: 'О нас', uz: 'Biz haqimizda' }, { ru: 'О них', uz: 'Ular haqida' }] },
              { type: 'order', prompt: 'Biz sizlar haqingizda gaplashyapmiz', tiles: ['Мы', 'говорим', 'о', 'вас'], answer: 'Мы говорим о вас' },
            ],
          },
          {
            id: 79, title: 'Xat yozish', icon: Mail,
            questions: [
              { type: 'reading', text: 'Здравствуй, Максим! Пишу тебе из Петербурга. Здесь очень красиво.', question: 'Xat kimdan yozilmoqda?', options: ['Peterburgdan', 'Moskvadan', 'Toshkentdan', 'Londondan'], answer: 'Peterburgdan' },
              { type: 'reading', text: 'Я живу в маленькой гостинице. Утром я гуляю по городу, а вечером читаю книги.', question: 'U ertalab nima qiladi?', options: ["Shahar bo'ylab sayr qiladi", "Kitob o'qiydi", 'Ishlaydi', 'Uxlaydi'], answer: "Shahar bo'ylab sayr qiladi" },
              { type: 'reading', text: 'Вчера я был в Эрмитаже. Это очень большой и интересный музей.', question: 'U kecha qayerda edi?', options: ['Ermitajda', 'Mehmonxonada', 'Restoranda', 'Aeroportda'], answer: 'Ermitajda' },
              { type: 'reading', text: 'Напиши мне о себе. Что нового? Жду твоего письма.', question: "Xat oxirida nima so'ralmoqda?", options: ["O'zi haqida yozishni", 'Pul yuborishni', 'Tashrif buyurishni', "Qo'ng'iroq qilishni"], answer: "O'zi haqida yozishni" },
              { type: 'match', pairs: [{ ru: 'Здравствуй', uz: 'Salom (yaqin kishi)' }, { ru: 'Жду', uz: 'Kutmoqdaman' }, { ru: 'Гостиница', uz: 'Mehmonxona' }, { ru: 'Гулять', uz: 'Sayr qilmoq' }] },
            ],
          },
          {
            id: 80, title: 'Takrorlash: dastlabki qadamlar', icon: RotateCcw,
            questions: [
              { type: 'fill_blank', sentence: 'У меня ___ вопрос.', hint: "('bor' konstruksiyasi)", options: ['есть', 'есть у', 'имею', 'имеет'], answer: 'есть' },
              { type: 'fill_blank', sentence: 'Это ___ книга.', hint: "('mening' — ayol jinsi)", options: ['моя', 'мой', 'моё', 'мои'], answer: 'моя' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы уже позавтракали.', options: ['Biz allaqachon nonushta qildik', 'Biz hali nonushta qilmadik', 'Biz nonushta qilyapmiz', 'Biz nonushta qilamiz'], answer: 'Biz allaqachon nonushta qildik' },
              { type: 'match', pairs: [{ ru: 'Вчера', uz: 'Kecha' }, { ru: 'Сегодня', uz: 'Bugun' }, { ru: 'Завтра', uz: 'Ertaga' }, { ru: 'Сейчас', uz: 'Hozir' }] },
              { type: 'order', prompt: 'Men rus tilida yaxshi gapiraman', tiles: ['Я', 'хорошо', 'говорю', 'по-русски'], answer: 'Я хорошо говорю по-русски' },
            ],
          },
        ],
      },
      {
        title: "2-bo'lim",
        lessons: [
          {
            id: 81, title: 'Tartib sonlar', icon: ListOrdered,
            questions: [
              { type: 'match', pairs: [{ ru: 'Первый', uz: 'Birinchi' }, { ru: 'Второй', uz: 'Ikkinchi' }, { ru: 'Третий', uz: 'Uchinchi' }, { ru: 'Четвёртый', uz: "To'rtinchi" }] },
              { type: 'fill_blank', sentence: 'Я живу на ___ этаже.', hint: "('beshinchi' — tartib son)", options: ['пятом', 'пять', 'пятый', 'пятой'], answer: 'пятом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это моя десятая книга.', options: ["Bu mening o'ninchi kitobim", 'Bu mening birinchi kitobim', "Bu mening o'nta kitobim", 'Bu mening yagona kitobim'], answer: "Bu mening o'ninchi kitobim" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Yettinchi kun', options: ['Седьмой день', 'Семь дней', 'Седьмая неделя', 'Семьдесят дней'], answer: 'Седьмой день' },
              { type: 'order', prompt: 'Bu ikkinchi savol', tiles: ['Это', 'второй', 'вопрос'], answer: 'Это второй вопрос' },
            ],
          },
          {
            id: 82, title: 'Necha qavatda?', icon: Layers3,
            questions: [
              { type: 'fill_blank', sentence: 'На каком ___ вы живёте?', hint: "('qavat' so'zi)", options: ['этаже', 'этаж', 'этажу', 'этажом'], answer: 'этаже' },
              { type: 'fill_blank', sentence: 'Я живу на втор___ этаже.', hint: "(erkak/neytral so'z uchun predlojniy -ОМ)", options: ['ом', 'ой', 'ая', 'ое'], answer: 'ом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Моя квартира на пятом этаже.', options: ['Mening kvartiram beshinchi qavatda', 'Mening kvartiram birinchi qavatda', "Mening uyim beshinchi ko'chada", 'Mening ofisim beshinchi binoda'], answer: 'Mening kvartiram beshinchi qavatda' },
              { type: 'match', pairs: [{ ru: 'Этаж', uz: 'Qavat' }, { ru: 'Лифт', uz: 'Lift' }, { ru: 'Подъезд', uz: 'Kirish qismi' }, { ru: 'Квартира', uz: 'Kvartira' }] },
              { type: 'order', prompt: "Biz to'rtinchi qavatda yashaymiz", tiles: ['Мы', 'живём', 'на', 'четвёртом', 'этаже'], answer: 'Мы живём на четвёртом этаже' },
            ],
          },
          {
            id: 24, title: 'Sayohat xotiralari', icon: Camera,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Эта поездка запомнилась мне на всю жизнь', options: ['Bu sayohat menga umrbod esimda qoladi', 'Bu sayohat juda zerikarli edi', 'Men bu joyga boshqa bormayman', 'Men bu haqida hech narsa bilmayman'], answer: 'Bu sayohat menga umrbod esimda qoladi' },
              { type: 'fill_blank', sentence: 'Если бы я знал русский язык лучше, я бы ___ больше людей.', hint: "('tanishmoq' fe'lining shart mayli shakli)", options: ['познакомился', 'знакомлюсь', 'познакомлюсь', 'знакомился'], answer: 'познакомился' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men bu shaharni hech qachon unutmayman', options: ['Я никогда не забуду этот город', 'Я быстро забыл этот город', 'Я не был в этом городе', 'Я не хочу вспоминать'], answer: 'Я никогда не забуду этот город' },
              { type: 'match', pairs: [{ ru: 'Впечатление', uz: 'Taassurot' }, { ru: 'Воспоминание', uz: 'Xotira' }, { ru: 'Приключение', uz: 'Sarguzasht' }, { ru: 'Открытие', uz: 'Kashfiyot' }] },
              { type: 'order', prompt: "Sayohat davomida biz ko'p narsa o'rgandik", tiles: ['Во', 'время', 'путешествия', 'мы', 'многому', 'научились'], answer: 'Во время путешествия мы многому научились' },
            ],
          },
          {
            id: 83, title: 'Sifatlar predlojniy kelishikda', icon: CaseSensitive,
            questions: [
              { type: 'fill_blank', sentence: 'Я живу в больш___ городе.', hint: "(erkak/neytral so'z uchun predlojniy -ОМ)", options: ['ом', 'ой', 'ая', 'ое'], answer: 'ом' },
              { type: 'fill_blank', sentence: 'Мы были в красив___ стране.', hint: "(ayol jinsi uchun predlojniy -ОЙ)", options: ['ой', 'ом', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он рассказал о новом фильме.', options: ['U yangi film haqida gapirib berdi', "U eski film ko'rdi", 'U film yozdi', 'U kinoteatrga bordi'], answer: 'U yangi film haqida gapirib berdi' },
              { type: 'match', pairs: [{ ru: 'В большом доме', uz: 'Katta uyda' }, { ru: 'В новой квартире', uz: 'Yangi kvartirada' }, { ru: 'О старом друге', uz: "Eski do'st haqida" }, { ru: 'На высоком этаже', uz: 'Baland qavatda' }] },
              { type: 'order', prompt: 'Biz yangi shaharda yashaymiz', tiles: ['Мы', 'живём', 'в', 'новом', 'городе'], answer: 'Мы живём в новом городе' },
            ],
          },
          {
            id: 84, title: 'Necha asrda?', icon: BookMarked,
            questions: [
              { type: 'fill_blank', sentence: 'Пушкин жил в девятнадцат___ веке.', hint: "(tartib son, predlojniy -ОМ)", options: ['ом', 'ый', 'ого', 'ому'], answer: 'ом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В каком веке мы живём?', options: ['Biz qaysi asrda yashayapmiz?', 'Biz qaysi yilda yashayapmiz?', 'Bugun qaysi kun?', 'Hozir soat necha?'], answer: 'Biz qaysi asrda yashayapmiz?' },
              { type: 'fill_blank', sentence: 'Мы живём в двадцать перв___ веке.', hint: "(tartib son, predlojniy -ОМ)", options: ['ом', 'ый', 'ого', 'ому'], answer: 'ом' },
              { type: 'match', pairs: [{ ru: 'Век', uz: 'Asr' }, { ru: 'Столетие', uz: 'Yuz yillik' }, { ru: 'Эпоха', uz: 'Davr' }, { ru: 'История', uz: 'Tarix' }] },
              { type: 'order', prompt: "Bu yigirmanchi asrda bo'lgan", tiles: ['Это', 'было', 'в', 'двадцатом', 'веке'], answer: 'Это было в двадцатом веке' },
            ],
          },
          {
            id: 85, title: 'Shahar xaritasi', icon: Signpost,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Kechirasiz, metro qayerda?', options: ['Извините, где метро?', 'Извините, сколько времени?', 'Извините, как вас зовут?', 'Извините, где вы живёте?'], answer: 'Извините, где метро?' },
              { type: 'fill_blank', sentence: 'Идите прямо, потом ___ направо.', hint: "('burilmoq' fe'lining buyruq shakli)", options: ['поверните', 'идите', 'остановитесь', 'смотрите'], answer: 'поверните' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это далеко отсюда?', options: ['Bu shu yerdan uzoqmi?', 'Bu shu yerda qayerda?', 'Bu qanday joy?', 'Bu qachon ochiladi?'], answer: 'Bu shu yerdan uzoqmi?' },
              { type: 'match', pairs: [{ ru: 'Прямо', uz: "To'g'riga" }, { ru: 'Направо', uz: "O'ngga" }, { ru: 'Налево', uz: 'Chapga' }, { ru: 'Рядом', uz: 'Yonida' }] },
              { type: 'order', prompt: "To'g'riga boring", tiles: ['Идите', 'прямо'], answer: 'Идите прямо' },
            ],
          },
          {
            id: 23, title: 'Shahar hayoti', icon: Building2,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Жизнь в большом городе более динамичная, чем в деревне', options: ['Katta shaharda hayot qishloqqa qaraganda faolroq', 'Qishloqda hayot shahardan qiziqarliroq', 'Shaharda odam kam yashaydi', "Qishloqda transport yo'q"], answer: 'Katta shaharda hayot qishloqqa qaraganda faolroq' },
              { type: 'fill_blank', sentence: 'В городе больше возможностей, ___ в деревне меньше шума.', hint: "('lekin' ma'nosidagi qarama-qarshilik bog'lovchisi)", options: ['зато', 'и', 'или', 'что'], answer: 'зато' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerda transport tirbandligi juda katta', options: ['Здесь очень большие пробки', 'Здесь очень чисто', 'Здесь мало людей', 'Здесь тихо'], answer: 'Здесь очень большие пробки' },
              { type: 'match', pairs: [{ ru: 'Пробка', uz: 'Tirbandlik' }, { ru: 'Небоскрёб', uz: "Osmono'par bino" }, { ru: 'Метро', uz: 'Metro' }, { ru: 'Район', uz: 'Tuman' }] },
              { type: 'order', prompt: 'Shahar tobora rivojlanmoqda', tiles: ['Город', 'постоянно', 'развивается'], answer: 'Город постоянно развивается' },
            ],
          },
          {
            id: 86, title: 'Egalik olmoshlari predlojniy kelishikda', icon: SquareUser,
            questions: [
              { type: 'fill_blank', sentence: 'Расскажи мне о ___ друге.', hint: "('mening' — predlojniy, erkak/neytral)", options: ['моём', 'мой', 'моего', 'моему'], answer: 'моём' },
              { type: 'fill_blank', sentence: 'Мы говорили о ___ семье.', hint: "('bizning' — predlojniy, ayol jinsi)", options: ['нашей', 'наш', 'нашу', 'наша'], answer: 'нашей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он спросил о вашей работе.', options: ["U sizning ishingiz haqida so'radi", "U o'z ishi haqida gapirdi", "U hech narsa so'ramadi", 'U sizga ish taklif qildi'], answer: "U sizning ishingiz haqida so'radi" },
              { type: 'match', pairs: [{ ru: 'О моём доме', uz: 'Mening uyim haqida' }, { ru: 'О твоей семье', uz: 'Sening oilang haqida' }, { ru: 'О нашем городе', uz: 'Bizning shahrimiz haqida' }, { ru: 'О вашей стране', uz: 'Sizning mamlakatingiz haqida' }] },
              { type: 'order', prompt: 'Men sening oilang haqida bilaman', tiles: ['Я', 'знаю', 'о', 'твоей', 'семье'], answer: 'Я знаю о твоей семье' },
            ],
          },
          {
            id: 87, title: 'Uy-joy: xonalar', icon: DoorOpen,
            questions: [
              { type: 'match', pairs: [{ ru: 'Кухня', uz: 'Oshxona' }, { ru: 'Спальня', uz: 'Yotoqxona' }, { ru: 'Ванная', uz: 'Hammom' }, { ru: 'Гостиная', uz: 'Mehmonxona' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Где ты готовишь еду? — На кухне.', options: ['Oshxonada', 'Yotoqxonada', 'Hammomda', 'Mehmonxonada'], answer: 'Oshxonada' },
              { type: 'fill_blank', sentence: 'Дети спят в ___.', hint: "('yotoqxona' so'zi, predlojniy)", options: ['спальне', 'спальня', 'спальню', 'спальней'], answer: 'спальне' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Mehmonxonada televizor bor', options: ['В гостиной есть телевизор', 'В кухне есть телевизор', 'В ванной есть телевизор', 'В спальне есть телевизор'], answer: 'В гостиной есть телевизор' },
              { type: 'order', prompt: 'Bizning kvartiramizda uchta xona bor', tiles: ['В', 'нашей', 'квартире', 'три', 'комнаты'], answer: 'В нашей квартире три комнаты' },
            ],
          },
          {
            id: 88, title: 'Uy-joy: mebel', icon: Sofa,
            questions: [
              { type: 'match', pairs: [{ ru: 'Диван', uz: 'Divan' }, { ru: 'Шкаф', uz: 'Shkaf' }, { ru: 'Кровать', uz: 'Karavot' }, { ru: 'Полка', uz: 'Tokcha' }] },
              { type: 'fill_blank', sentence: 'Я сплю на ___.', hint: "('karavot' so'zi, predlojniy)", options: ['кровати', 'кровать', 'кроватью', 'кровате'], answer: 'кровати' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В комнате новый шкаф и старый диван.', options: ['Xonada yangi shkaf va eski divan bor', 'Xonada eski shkaf va yangi divan bor', 'Xonada faqat divan bor', "Xonada mebel yo'q"], answer: 'Xonada yangi shkaf va eski divan bor' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kitoblar tokchada', options: ['Книги на полке', 'Книги в шкафу', 'Книги на столе', 'Книги под кроватью'], answer: 'Книги на полке' },
              { type: 'order', prompt: 'Bu yerda katta stol bor', tiles: ['Здесь', 'есть', 'большой', 'стол'], answer: 'Здесь есть большой стол' },
            ],
          },
        ],
      },
      {
        title: "3-bo'lim",
        lessons: [
          {
            id: 89, title: "Fe'llar: д→ж, т→ч almashinuvi", icon: RefreshCcw,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ вас о помощи.', hint: "('so'ramoq' fe'li, 1-shaxs, с→ш almashinuvi)", options: ['прошу', 'просю', 'просишь', 'просит'], answer: 'прошу' },
              { type: 'fill_blank', sentence: 'Сколько я вам должен ___?', hint: "('to'lamoq' fe'lining infinitivi)", options: ['заплатить', 'плачу', 'платит', 'платят'], answer: 'заплатить' },
              { type: 'fill_blank', sentence: 'Я тебя не ___, где ты?', hint: "('ko'rmoq' fe'li, 1-shaxs, д→ж almashinuvi)", options: ['вижу', 'видю', 'видишь', 'видит'], answer: 'вижу' },
              { type: 'match', pairs: [{ ru: 'Просить', uz: "So'ramoq" }, { ru: 'Платить', uz: "To'lamoq" }, { ru: 'Видеть', uz: "Ko'rmoq" }, { ru: 'Переводить', uz: 'Tarjima qilmoq' }] },
              { type: 'order', prompt: "Men sizdan yordam so'rayman", tiles: ['Я', 'прошу', 'вас', 'о', 'помощи'], answer: 'Я прошу вас о помощи' },
            ],
          },
          {
            id: 90, title: "Fe'llar: б→бл, п→пл almashinuvi", icon: ArrowRightLeft,
            questions: [
              { type: 'fill_blank', sentence: 'Я тебя ___.', hint: "('sevmoq' fe'li, 1-shaxs, б→бл almashinuvi)", options: ['люблю', 'любю', 'любишь', 'любит'], answer: 'люблю' },
              { type: 'fill_blank', sentence: 'Обычно я ___ ужин сама.', hint: "('tayyorlamoq' fe'li, 1-shaxs, в→вл almashinuvi)", options: ['готовлю', 'готовю', 'готовит', 'готовят'], answer: 'готовлю' },
              { type: 'fill_blank', sentence: 'Я ___ восемь часов каждую ночь.', hint: "('uxlamoq' fe'li, 1-shaxs, п→пл almashinuvi)", options: ['сплю', 'спю', 'спишь', 'спит'], answer: 'сплю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я люблю готовить дома.', options: ["Men uyda ovqat tayyorlashni yaxshi ko'raman", "Men restoranda ovqatlanishni yaxshi ko'raman", "Men uxlashni yaxshi ko'raman", 'Men ishlashni yoqtirmayman'], answer: "Men uyda ovqat tayyorlashni yaxshi ko'raman" },
              { type: 'order', prompt: 'Men har kuni ertalab ovqat tayyorlayman', tiles: ['Я', 'готовлю', 'каждое', 'утро'], answer: 'Я готовлю каждое утро' },
            ],
          },
          {
            id: 91, title: "Брать fe'li", icon: HandCoins,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ такси каждый день.', hint: "('olmoq' fe'lining 'men' shakli)", options: ['беру', 'берёшь', 'берёт', 'берём'], answer: 'беру' },
              { type: 'fill_blank', sentence: 'Ты ___ книгу в библиотеке?', hint: "('olmoq' fe'lining 'sen' shakli)", options: ['берёшь', 'беру', 'берёт', 'берёте'], answer: 'берёшь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы берём отпуск в июле.', options: ["Biz iyulda ta'til olamiz", 'Biz iyulda ishlaymiz', 'Biz iyulda sayohat qilmaymiz', "Biz iyulda o'qiymiz"], answer: "Biz iyulda ta'til olamiz" },
              { type: 'match', pairs: [{ ru: 'Брать', uz: 'Olmoq' }, { ru: 'Давать', uz: 'Bermoq' }, { ru: 'Покупать', uz: 'Sotib olmoq' }, { ru: 'Продавать', uz: 'Sotmoq' }] },
              { type: 'order', prompt: 'U taksi oladi', tiles: ['Он', 'берёт', 'такси'], answer: 'Он берёт такси' },
            ],
          },
          {
            id: 92, title: "Go'sht va sabzavotlar", icon: Beef,
            questions: [
              { type: 'match', pairs: [{ ru: 'Мясо', uz: "Go'sht" }, { ru: 'Курица', uz: 'Tovuq' }, { ru: 'Рыба', uz: 'Baliq' }, { ru: 'Картофель', uz: 'Kartoshka' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не ем мясо, я вегетарианец.', options: ["Men go'sht yemayman, men vegetarianman", "Men faqat go'sht yeyman", "Men baliq yaxshi ko'raman", 'Men hamma narsani yeyman'], answer: "Men go'sht yemayman, men vegetarianman" },
              { type: 'fill_blank', sentence: 'В салате есть помидоры и ___.', hint: "('bodring' so'zi)", options: ['огурцы', 'огурец', 'огурцов', 'огурцами'], answer: 'огурцы' },
              { type: 'match', pairs: [{ ru: 'Лук', uz: 'Piyoz' }, { ru: 'Морковь', uz: 'Sabzi' }, { ru: 'Капуста', uz: 'Karam' }, { ru: 'Перец', uz: 'Qalampir' }] },
              { type: 'order', prompt: 'Menga tovuq va kartoshka kerak', tiles: ['Мне', 'нужны', 'курица', 'и', 'картофель'], answer: 'Мне нужны курица и картофель' },
            ],
          },
          {
            id: 93, title: 'Mevalar va sut mahsulotlari', icon: Apple,
            questions: [
              { type: 'match', pairs: [{ ru: 'Яблоко', uz: 'Olma' }, { ru: 'Банан', uz: 'Banan' }, { ru: 'Апельсин', uz: 'Apelsin' }, { ru: 'Виноград', uz: 'Uzum' }] },
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga sut va pishloq kerak', options: ['Мне нужны молоко и сыр', 'Мне нужны хлеб и масло', 'Мне нужны яблоки и бананы', 'Мне нужен йогурт'], answer: 'Мне нужны молоко и сыр' },
              { type: 'fill_blank', sentence: 'Я ем хлеб с ___.', hint: "('sariyog' so'zi)", options: ['маслом', 'масло', 'масла', 'маслу'], answer: 'маслом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот йогурт очень вкусный.', options: ['Bu yogurt juda mazali', 'Bu sut juda achchiq', 'Bu pishloq juda qattiq', 'Bu meva juda nordon'], answer: 'Bu yogurt juda mazali' },
              { type: 'order', prompt: 'Menda olma va uzum bor', tiles: ['У', 'меня', 'есть', 'яблоки', 'и', 'виноград'], answer: 'У меня есть яблоки и виноград' },
            ],
          },
          {
            id: 94, title: 'Bozorda', icon: Store,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu qancha kilosi?', options: ['Сколько стоит килограмм?', 'Сколько это весит?', 'Сколько у вас денег?', 'Сколько время?'], answer: 'Сколько стоит килограмм?' },
              { type: 'fill_blank', sentence: 'Дайте мне, пожалуйста, ___ помидоров.', hint: "('kilogramm' so'zi)", options: ['килограмм', 'килограмма', 'килограмму', 'килограммом'], answer: 'килограмм' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эти яблоки свежие?', options: ['Bu olmalar yangimi?', 'Bu olmalar shirinmi?', 'Bu olmalar qimmatmi?', 'Bu olmalar mahalliymi?'], answer: 'Bu olmalar yangimi?' },
              { type: 'match', pairs: [{ ru: 'Рынок', uz: 'Bozor' }, { ru: 'Свежий', uz: 'Yangi' }, { ru: 'Килограмм', uz: 'Kilogramm' }, { ru: 'Дёшево', uz: 'Arzon' }] },
              { type: 'order', prompt: 'Bu bozorda mevalar arzon', tiles: ['На', 'этом', 'рынке', 'фрукты', 'дёшево'], answer: 'На этом рынке фрукты дёшево' },
            ],
          },
          {
            id: 26, title: 'Restoranda fikr', icon: ThumbsUp,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Обслуживание было превосходным', options: ["Xizmat ko'rsatish ajoyib edi", 'Xizmat ko\'rsatish yomon edi', 'Ovqat sovuq edi', 'Bu yerga boshqa kelmayman'], answer: "Xizmat ko'rsatish ajoyib edi" },
              { type: 'fill_blank', sentence: 'На мой взгляд, это блюдо слишком ___.', hint: "('sho'r' sifati)", options: ['солёное', 'солёный', 'солёная', 'солёные'], answer: 'солёное' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men bu taomni tavsiya qilaman', options: ['Я рекомендую это блюдо', 'Я не советую это блюдо', 'Я никогда это не пробовал', 'Я не люблю рестораны'], answer: 'Я рекомендую это блюдо' },
              { type: 'match', pairs: [{ ru: 'Вкус', uz: "Ta'm" }, { ru: 'Обслуживание', uz: 'Xizmat' }, { ru: 'Атмосфера', uz: 'Muhit' }, { ru: 'Отзыв', uz: 'Fikr-mulohaza' }] },
              { type: 'order', prompt: 'Bu yerdagi taomlar juda mazali', tiles: ['Блюда', 'здесь', 'очень', 'вкусные'], answer: 'Блюда здесь очень вкусные' },
            ],
          },
          {
            id: 95, title: 'Ovqatlanish odatlari', icon: Utensils,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Я хочу есть, я очень голоден.', options: ['Men ovqat yegim kelyapti, men juda ochman', 'Men suv ichgim kelyapti', 'Men uxlagim kelyapti', "Men to'yganman"], answer: 'Men ovqat yegim kelyapti, men juda ochman' },
              { type: 'fill_blank', sentence: 'Спасибо, я уже ___.', hint: "('to'ygan' sifati, erkak jinsi)", options: ['сыт', 'сыта', 'сытый', 'сытые'], answer: 'сыт' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ovqatdan oldin qo'l yuving", options: ['Мойте руки перед едой', 'Ешьте медленно', 'Пейте больше воды', 'Готовьте сами'], answer: 'Мойте руки перед едой' },
              { type: 'match', pairs: [{ ru: 'Голодный', uz: 'Och' }, { ru: 'Сытый', uz: "To'ygan" }, { ru: 'Вкусный', uz: 'Mazali' }, { ru: 'Свежий', uz: 'Yangi' }] },
              { type: 'order', prompt: 'Men juda ochman', tiles: ['Я', 'очень', 'голоден'], answer: 'Я очень голоден' },
            ],
          },
        ],
      },
      {
        title: "4-bo'lim",
        lessons: [
          {
            id: 96, title: "Fe'llar: -овать/-евать", icon: PartyPopper,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ поехать в Москву.', hint: "('rejalashtirmoq' fe'li, 1-shaxs)", options: ['планирую', 'планировать', 'планируешь', 'планирует'], answer: 'планирую' },
              { type: 'fill_blank', sentence: 'Ты хорошо ___?', hint: "('raqsga tushmoq' fe'li, 2-shaxs)", options: ['танцуешь', 'танцую', 'танцует', 'танцуют'], answer: 'танцуешь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы организуем вечеринку в субботу.', options: ['Biz shanba kuni ziyofat tashkil qilamiz', 'Biz shanba kuni ishlaymiz', 'Biz shanba kuni dam olamiz', 'Biz shanba kuni sayohat qilamiz'], answer: 'Biz shanba kuni ziyofat tashkil qilamiz' },
              { type: 'match', pairs: [{ ru: 'Планировать', uz: 'Rejalashtirmoq' }, { ru: 'Танцевать', uz: 'Raqsga tushmoq' }, { ru: 'Организовать', uz: 'Tashkil qilmoq' }, { ru: 'Интересоваться', uz: 'Qiziqmoq' }] },
              { type: 'order', prompt: 'Men bugun kechqurun raqsga tushaman', tiles: ['Я', 'танцую', 'сегодня', 'вечером'], answer: 'Я танцую сегодня вечером' },
            ],
          },
          {
            id: 97, title: 'Hafta kunlari', icon: CalendarDays,
            questions: [
              { type: 'match', pairs: [{ ru: 'Понедельник', uz: 'Dushanba' }, { ru: 'Вторник', uz: 'Seshanba' }, { ru: 'Среда', uz: 'Chorshanba' }, { ru: 'Четверг', uz: 'Payshanba' }] },
              { type: 'match', pairs: [{ ru: 'Пятница', uz: 'Juma' }, { ru: 'Суббота', uz: 'Shanba' }, { ru: 'Воскресенье', uz: 'Yakshanba' }, { ru: 'Неделя', uz: 'Hafta' }] },
              { type: 'fill_blank', sentence: 'Я работаю ___ понедельник.', hint: "('kunida' — vaqt ma'nosidagi predlog)", options: ['в', 'на', 'о', 'с'], answer: 'в' },
              { type: 'choice', dir: 'ru2uz', prompt: 'По выходным я отдыхаю.', options: ['Dam olish kunlari men dam olaman', 'Ish kunlari men dam olaman', 'Men hech qachon dam olmayman', 'Men har kuni ishlayman'], answer: 'Dam olish kunlari men dam olaman' },
              { type: 'order', prompt: 'Yakshanba kuni men uxlayman', tiles: ['В', 'воскресенье', 'я', 'сплю'], answer: 'В воскресенье я сплю' },
            ],
          },
          {
            id: 22, title: 'Sport bahsi', icon: Medal,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'По-моему, футбол — самый интересный вид спорта', options: ['Menimcha, futbol eng qiziqarli sport turi', 'Menimcha, tennis foydali emas', "Men sportni yomon ko'raman", "Men hech qachon sport ko'rmayman"], answer: 'Menimcha, futbol eng qiziqarli sport turi' },
              { type: 'fill_blank', sentence: 'Наша команда играла ___, чем соперники.', hint: "('yaxshiroq' — ravishning qiyosiy darajasi)", options: ['лучше', 'хорошо', 'хороший', 'лучший'], answer: 'лучше' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men bu jamoani qollab-quvvatlayman', options: ['Я болею за эту команду', 'Я играю в эту команду', 'Я смотрю эту команду', 'Я знаю эту команду'], answer: 'Я болею за эту команду' },
              { type: 'match', pairs: [{ ru: 'Победа', uz: "G'alaba" }, { ru: 'Поражение', uz: "Mag'lubiyat" }, { ru: 'Соперник', uz: 'Raqib' }, { ru: 'Болельщик', uz: 'Muxlis' }] },
              { type: 'order', prompt: "Bizning jamoamiz g'alaba qozondi", tiles: ['Наша', 'команда', 'одержала', 'победу'], answer: 'Наша команда одержала победу' },
            ],
          },
          {
            id: 98, title: 'Menda edi: у меня была/было', icon: CalendarClock,
            questions: [
              { type: 'fill_blank', sentence: 'Вчера у меня ___ встреча.', hint: "('edi' — ayol jinsidagi so'z uchun)", options: ['была', 'был', 'было', 'были'], answer: 'была' },
              { type: 'fill_blank', sentence: 'На прошлой неделе у нас ___ праздник.', hint: "('edi' — erkak jinsidagi so'z uchun)", options: ['был', 'была', 'было', 'были'], answer: 'был' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня было много работы вчера.', options: ["Kecha menda ko'p ish bor edi", "Bugun menda ish yo'q", "Ertaga menda ko'p ish bo'ladi", "Menda hech qachon ish bo'lmaydi"], answer: "Kecha menda ko'p ish bor edi" },
              { type: 'match', pairs: [{ ru: 'У меня была', uz: "Menda edi (ayol so'z)" }, { ru: 'У меня был', uz: "Menda edi (erkak so'z)" }, { ru: 'У меня было', uz: "Menda edi (neytral so'z)" }, { ru: 'У меня были', uz: "Menda edi (ko'plik)" }] },
              { type: 'order', prompt: 'Kecha menda dars bor edi', tiles: ['Вчера', 'у', 'меня', 'был', 'урок'], answer: 'Вчера у меня был урок' },
            ],
          },
          {
            id: 99, title: 'Mumkin va bilmoq: мочь, уметь', icon: CheckCircle2,
            questions: [
              { type: 'fill_blank', sentence: 'Я не ___ прийти завтра.', hint: "('qila olmoq' fe'lining 'men' shakli)", options: ['могу', 'можешь', 'может', 'можем'], answer: 'могу' },
              { type: 'fill_blank', sentence: 'Ты ___ плавать?', hint: "('bilmoq/uddalamoq' fe'lining 'sen' shakli)", options: ['умеешь', 'умею', 'умеет', 'умеем'], answer: 'умеешь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я умею готовить плов.', options: ["Men palov pishirishni bilaman", "Men palov yeyishni yaxshi ko'raman", 'Men palov sotib olaman', 'Men palovni topa olmayman'], answer: 'Men palov pishirishni bilaman' },
              { type: 'match', pairs: [{ ru: 'Мочь', uz: 'Qila olmoq (imkoniyat)' }, { ru: 'Уметь', uz: "Bilmoq (ko'nikma)" }, { ru: 'Хотеть', uz: 'Xohlamoq' }, { ru: 'Любить', uz: 'Sevmoq' }] },
              { type: 'order', prompt: 'Men gitara chalishni bilaman', tiles: ['Я', 'умею', 'играть', 'на', 'гитаре'], answer: 'Я умею играть на гитаре' },
            ],
          },
          {
            id: 100, title: "O'zlik fe'llari: -ся", icon: Repeat2,
            questions: [
              { type: 'fill_blank', sentence: 'Мы ___ каждую субботу.', hint: "('uchrashmoq' fe'li, 1-shaxs ko'plik)", options: ['встречаемся', 'встречаем', 'встречаетесь', 'встречаются'], answer: 'встречаемся' },
              { type: 'fill_blank', sentence: 'Магазин ___ в девять утра.', hint: "('ochilmoq' fe'li, 3-shaxs birlik)", options: ['открывается', 'открывает', 'открываюсь', 'открываемся'], answer: 'открывается' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не бойтесь ошибаться.', options: ["Xato qilishdan qo'rqmang", "Kechikishdan qo'rqmang", "Gapirishdan qo'rqmang", "So'rashdan qo'rqmang"], answer: "Xato qilishdan qo'rqmang" },
              { type: 'match', pairs: [{ ru: 'Встречаться', uz: 'Uchrashmoq' }, { ru: 'Ошибаться', uz: 'Xato qilmoq' }, { ru: 'Открываться', uz: 'Ochilmoq' }, { ru: 'Закрываться', uz: 'Yopilmoq' }] },
              { type: 'order', prompt: "Do'kon kechqurun yopiladi", tiles: ['Магазин', 'закрывается', 'вечером'], answer: 'Магазин закрывается вечером' },
            ],
          },
          {
            id: 101, title: 'Boshlanadi, tugaydi', icon: FlagTriangleRight,
            questions: [
              { type: 'fill_blank', sentence: 'Урок ___ в девять часов.', hint: "('boshlanmoq' fe'li, 3-shaxs birlik)", options: ['начинается', 'начинает', 'начинаюсь', 'начинаемся'], answer: 'начинается' },
              { type: 'fill_blank', sentence: 'Фильм ___ в одиннадцать вечера.', hint: "('tugamoq' fe'li, 3-shaxs birlik)", options: ['кончается', 'кончает', 'кончаюсь', 'кончаемся'], answer: 'кончается' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Когда начинается концерт?', options: ['Konsert qachon boshlanadi?', 'Konsert qachon tugaydi?', 'Konsert qayerda?', 'Konsert qancha turadi?'], answer: 'Konsert qachon boshlanadi?' },
              { type: 'match', pairs: [{ ru: 'Начинаться', uz: 'Boshlanmoq' }, { ru: 'Кончаться', uz: 'Tugamoq' }, { ru: 'Продолжаться', uz: 'Davom etmoq' }, { ru: 'Заканчиваться', uz: 'Yakunlanmoq' }] },
              { type: 'order', prompt: "Dars soat to'qqizda boshlanadi", tiles: ['Урок', 'начинается', 'в', 'девять'], answer: 'Урок начинается в девять' },
            ],
          },
          {
            id: 102, title: 'Kelasi zamon: буду', icon: FastForward,
            questions: [
              { type: 'fill_blank', sentence: 'Завтра я ___ работать.', hint: "('bo'lmoq' fe'lining kelasi zamon 'men' shakli)", options: ['буду', 'будешь', 'будет', 'будем'], answer: 'буду' },
              { type: 'fill_blank', sentence: 'Мы ___ отдыхать летом.', hint: "('bo'lmoq' fe'lining kelasi zamon 'biz' shakli)", options: ['будем', 'буду', 'будешь', 'будете'], answer: 'будем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я буду изучать русский язык каждый день.', options: ["Men har kuni rus tilini o'rganaman", "Men rus tilini o'rgandim", 'Men rus tilini bilmayman', 'Men rus tilida gapiraman'], answer: "Men har kuni rus tilini o'rganaman" },
              { type: 'match', pairs: [{ ru: 'Я буду', uz: "Men bo'laman" }, { ru: 'Ты будешь', uz: "Sen bo'lasan" }, { ru: 'Мы будем', uz: "Biz bo'lamiz" }, { ru: 'Они будут', uz: "Ular bo'lishadi" }] },
              { type: 'order', prompt: "Ertaga men uyda bo'laman", tiles: ['Завтра', 'я', 'буду', 'дома'], answer: 'Завтра я буду дома' },
            ],
          },
        ],
      },
      {
        title: "5-bo'lim",
        lessons: [
          {
            id: 103, title: 'Eshitmoq va tinglamoq: слышать/слушать', icon: Headphones,
            questions: [
              { type: 'fill_blank', sentence: 'Я вас не ___, говорите громче!', hint: "('eshitmoq' fe'li, 1-shaxs — tovush qabul qilish)", options: ['слышу', 'слушаю', 'слышишь', 'слушаешь'], answer: 'слышу' },
              { type: 'fill_blank', sentence: 'Каждый вечер я ___ музыку.', hint: "('tinglamoq' fe'li, 1-shaxs — diqqat bilan)", options: ['слушаю', 'слышу', 'слушаешь', 'слышишь'], answer: 'слушаю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы слышали эту новость?', options: ['Siz bu yangilikni eshitdingizmi?', "Siz bu qo'shiqni tingladingizmi?", "Siz bu filmni ko'rdingizmi?", "Siz bu kitobni o'qidingizmi?"], answer: 'Siz bu yangilikni eshitdingizmi?' },
              { type: 'match', pairs: [{ ru: 'Слышать', uz: 'Eshitmoq (tasodifiy)' }, { ru: 'Слушать', uz: 'Tinglamoq (diqqat bilan)' }, { ru: 'Радио', uz: 'Radio' }, { ru: 'Новости', uz: 'Yangiliklar' }] },
              { type: 'order', prompt: 'Men radio tinglayman', tiles: ['Я', 'слушаю', 'радио'], answer: 'Я слушаю радио' },
            ],
          },
          {
            id: 104, title: "Ko'rmoq va tomosha qilmoq: видеть/смотреть", icon: MonitorPlay,
            questions: [
              { type: 'fill_blank', sentence: 'Я тебя не ___, где ты?', hint: "('ko'rmoq' fe'li, 1-shaxs — ko'z bilan payqamoq)", options: ['вижу', 'смотрю', 'видишь', 'смотришь'], answer: 'вижу' },
              { type: 'fill_blank', sentence: 'Вечером я ___ телевизор.', hint: "('tomosha qilmoq' fe'li, 1-shaxs — diqqat bilan)", options: ['смотрю', 'вижу', 'смотришь', 'видишь'], answer: 'смотрю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я вижу тебя!', options: ["Men seni ko'ryapman!", 'Men senga qarayapman!', 'Men seni tinglayapman!', 'Men seni bilaman!'], answer: "Men seni ko'ryapman!" },
              { type: 'match', pairs: [{ ru: 'Видеть', uz: "Ko'rmoq (payqamoq)" }, { ru: 'Смотреть', uz: 'Tomosha qilmoq' }, { ru: 'Фильм', uz: 'Film' }, { ru: 'Передача', uz: "Ko'rsatuv" }] },
              { type: 'order', prompt: 'Biz film tomosha qilamiz', tiles: ['Мы', 'смотрим', 'фильм'], answer: 'Мы смотрим фильм' },
            ],
          },
          {
            id: 25, title: "Sog'liq haqida", icon: HeartPulse,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Здоровый образ жизни очень важен', options: ["Sog'lom turmush tarzi juda muhim", 'Kasal bo\'lish yaxshi', 'Sport zararli', 'Ovqatlanish muhim emas'], answer: "Sog'lom turmush tarzi juda muhim" },
              { type: 'fill_blank', sentence: 'Чтобы быть здоровым, нужно ___ спортом регулярно.', hint: "('shug'ullanmoq' fe'lining infinitiv shakli)", options: ['заниматься', 'занимался', 'занимаюсь', 'занимается'], answer: 'заниматься' },
              { type: 'choice', dir: 'uz2ru', prompt: "Kamroq shakar iste'mol qilish kerak", options: ['Нужно есть меньше сахара', 'Нужно есть больше сахара', 'Сахар полезен', 'Сахар не важен'], answer: 'Нужно есть меньше сахара' },
              { type: 'match', pairs: [{ ru: 'Здоровье', uz: "Sog'liq" }, { ru: 'Питание', uz: 'Ovqatlanish' }, { ru: 'Иммунитет', uz: 'Immunitet' }, { ru: 'Привычка', uz: 'Odat' }] },
              { type: 'order', prompt: "Sog'liq — bu eng katta boylik", tiles: ['Здоровье', 'это', 'самое', 'большое', 'богатство'], answer: 'Здоровье это самое большое богатство' },
            ],
          },
          {
            id: 105, title: 'Chunki, shuning uchun: потому что/поэтому', icon: Link2,
            questions: [
              { type: 'fill_blank', sentence: 'Я устал, ___ иду спать.', hint: "('shuning uchun' — natija bog'lovchisi)", options: ['поэтому', 'потому что', 'и', 'а'], answer: 'поэтому' },
              { type: 'fill_blank', sentence: 'Я не пришёл, ___ был болен.', hint: "('chunki' — sabab bog'lovchisi)", options: ['потому что', 'поэтому', 'но', 'или'], answer: 'потому что' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она опоздала, потому что не было такси.', options: ["U kechikdi, chunki taksi yo'q edi", "U kechikdi, shuning uchun taksi yo'q edi", 'U taksi kutdi', 'U taksi chaqirmadi'], answer: "U kechikdi, chunki taksi yo'q edi" },
              { type: 'match', pairs: [{ ru: 'Потому что', uz: 'Chunki' }, { ru: 'Поэтому', uz: 'Shuning uchun' }, { ru: 'Если', uz: 'Agar' }, { ru: 'Хотя', uz: 'Garchi' }] },
              { type: 'order', prompt: 'Men charchadim, shuning uchun uxlayman', tiles: ['Я', 'устал', 'поэтому', 'сплю'], answer: 'Я устал поэтому сплю' },
            ],
          },
          {
            id: 106, title: 'TV va ommaviy axborot vositalari', icon: Tv2,
            questions: [
              { type: 'match', pairs: [{ ru: 'Телевизор', uz: 'Televizor' }, { ru: 'Канал', uz: 'Kanal' }, { ru: 'Программа', uz: "Dastur/Ko'rsatuv" }, { ru: 'Реклама', uz: 'Reklama' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какой канал вы смотрите?', options: ['Qaysi kanalni tomosha qilasiz?', "Qaysi kitobni o'qiysiz?", "Qaysi shaharni yaxshi ko'rasiz?", 'Qaysi ovqatni yoqtirasiz?'], answer: 'Qaysi kanalni tomosha qilasiz?' },
              { type: 'fill_blank', sentence: 'После фильма будут ___.', hint: "('yangiliklar' so'zi)", options: ['новости', 'новость', 'новостей', 'новостям'], answer: 'новости' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men har kuni yangiliklarni ko'raman", options: ['Я каждый день смотрю новости', 'Я каждый день слушаю новости', 'Я каждый день читаю новости', 'Я никогда не смотрю новости'], answer: 'Я каждый день смотрю новости' },
              { type: 'order', prompt: 'Bu mening sevimli kanalim', tiles: ['Это', 'мой', 'любимый', 'канал'], answer: 'Это мой любимый канал' },
            ],
          },
          {
            id: 107, title: "Yurish fe'llari: идти/ходить", icon: Footprints,
            questions: [
              { type: 'fill_blank', sentence: 'Сейчас я ___ в магазин.', hint: "('bormoq' — bir yo'nalishda, hozir)", options: ['иду', 'хожу', 'идёшь', 'ходишь'], answer: 'иду' },
              { type: 'fill_blank', sentence: 'Я часто ___ в парк по утрам.', hint: "('bormoq' — takroriy harakat)", options: ['хожу', 'иду', 'ходишь', 'идёшь'], answer: 'хожу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я иду домой.', options: ['Men uyga ketyapman (hozir)', "Men uyga tez-tez boraman", "Men uyda o'tiribman", 'Men uydan keldim'], answer: 'Men uyga ketyapman (hozir)' },
              { type: 'match', pairs: [{ ru: 'Идти', uz: 'Bormoq (hozir, bir marta)' }, { ru: 'Ходить', uz: 'Bormoq (doim, takroriy)' }, { ru: 'Пешком', uz: 'Piyoda' }, { ru: 'Прогулка', uz: 'Sayr' }] },
              { type: 'order', prompt: 'Men maktabga piyoda boraman', tiles: ['Я', 'иду', 'в', 'школу', 'пешком'], answer: 'Я иду в школу пешком' },
            ],
          },
          {
            id: 108, title: "Yurish fe'llari: ехать/ездить", icon: CarFront,
            questions: [
              { type: 'fill_blank', sentence: 'Сейчас мы ___ на работу.', hint: "('bormoq' — transportda, hozir)", options: ['едем', 'ездим', 'едешь', 'ездишь'], answer: 'едем' },
              { type: 'fill_blank', sentence: 'Каждое лето мы ___ на море.', hint: "('bormoq' — transportda, takroriy)", options: ['ездим', 'едем', 'ездишь', 'едешь'], answer: 'ездим' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы едем на машине.', options: ['Biz mashinada ketyapmiz', 'Biz piyoda ketyapmiz', 'Biz uchib ketyapmiz', 'Biz suzib ketyapmiz'], answer: 'Biz mashinada ketyapmiz' },
              { type: 'match', pairs: [{ ru: 'Ехать', uz: 'Bormoq (transportda, hozir)' }, { ru: 'Ездить', uz: 'Bormoq (transportda, doim)' }, { ru: 'Поезд', uz: "Poyezd" }, { ru: 'Автобус', uz: 'Avtobus' }] },
              { type: 'order', prompt: 'Biz poyezdda Samarqandga boramiz', tiles: ['Мы', 'едем', 'в', 'Самарканд', 'на', 'поезде'], answer: 'Мы едем в Самарканд на поезде' },
            ],
          },
          {
            id: 109, title: 'Qayerga? Qayerda? куда/где', icon: Waypoints,
            questions: [
              { type: 'fill_blank', sentence: '___ ты идёшь?', hint: "('qayerga' — harakat yo'nalishi)", options: ['Куда', 'Где', 'Откуда', 'Когда'], answer: 'Куда' },
              { type: 'fill_blank', sentence: '___ ты живёшь?', hint: "('qayerda' — turg'un joy)", options: ['Где', 'Куда', 'Откуда', 'Когда'], answer: 'Где' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Куда вы идёте? — Я иду в театр.', options: ['Siz qayerga ketyapsiz? — Men teatrga ketyapman', 'Siz qayerdasiz? — Men teatrdaman', 'Siz qayerdan keldingiz?', 'Siz nima qilyapsiz?'], answer: 'Siz qayerga ketyapsiz? — Men teatrga ketyapman' },
              { type: 'match', pairs: [{ ru: 'Куда', uz: 'Qayerga (harakat)' }, { ru: 'Где', uz: 'Qayerda (joy)' }, { ru: 'Откуда', uz: 'Qayerdan' }, { ru: 'Туда', uz: 'U yerga' }] },
              { type: 'order', prompt: 'Siz qayerga ketyapsiz?', tiles: ['Куда', 'вы', 'идёте'], answer: 'Куда вы идёте' },
            ],
          },
          {
            id: 110, title: "Yo'nalishlar: u yerga, bu yerga", icon: CornerDownRight,
            questions: [
              { type: 'fill_blank', sentence: 'Иди ___, я жду тебя.', hint: "('bu yerga' — harakat yo'nalishi)", options: ['сюда', 'здесь', 'туда', 'там'], answer: 'сюда' },
              { type: 'fill_blank', sentence: 'После работы я иду ___.', hint: "('uyga' — harakat yo'nalishi)", options: ['домой', 'дома', 'туда', 'там'], answer: 'домой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я дома, а ты идёшь домой.', options: ['Men uydaman, sen esa uyga ketyapsan', 'Men uyga ketyapman', 'Sen uydasan', 'Biz ikkalamiz uydamiz'], answer: 'Men uydaman, sen esa uyga ketyapsan' },
              { type: 'match', pairs: [{ ru: 'Туда', uz: 'U yerga (harakat)' }, { ru: 'Там', uz: 'U yerda (joy)' }, { ru: 'Наверх', uz: 'Yuqoriga' }, { ru: 'Вниз', uz: 'Pastga' }] },
              { type: 'order', prompt: 'Yuqoriga qarang', tiles: ['Посмотрите', 'наверх'], answer: 'Посмотрите наверх' },
            ],
          },
        ],
      },
      {
        title: "6-bo'lim",
        lessons: [
          {
            id: 111, title: "Harakat fe'llari: лететь/летать", icon: PlaneTakeoff,
            questions: [
              { type: 'fill_blank', sentence: 'Сейчас самолёт ___ в Москву.', hint: "('uchmoq' — bir yo'nalishda, hozir)", options: ['летит', 'летает', 'летишь', 'летаешь'], answer: 'летит' },
              { type: 'fill_blank', sentence: 'Птицы ___ на юг каждую осень.', hint: "('uchmoq' — takroriy harakat)", options: ['летают', 'летят', 'летаешь', 'летишь'], answer: 'летают' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я боюсь летать на самолёте.', options: ["Men samolyotda uchishdan qo'rqaman", "Men samolyotda uchishni yaxshi ko'raman", 'Men hech qachon uchmayman', "Men samolyotni ko'raman"], answer: "Men samolyotda uchishdan qo'rqaman" },
              { type: 'match', pairs: [{ ru: 'Лететь', uz: 'Uchmoq (hozir, bir marta)' }, { ru: 'Летать', uz: 'Uchmoq (doim, takroriy)' }, { ru: 'Самолёт', uz: 'Samolyot' }, { ru: 'Птица', uz: 'Qush' }] },
              { type: 'order', prompt: 'Biz Toshkentga uchamiz', tiles: ['Мы', 'летим', 'в', 'Ташкент'], answer: 'Мы летим в Ташкент' },
            ],
          },
          {
            id: 112, title: "Harakat fe'llari: плыть/плавать", icon: Waves,
            questions: [
              { type: 'fill_blank', sentence: 'Лодка ___ по реке.', hint: "('suzmoq' — bir yo'nalishda, hozir)", options: ['плывёт', 'плавает', 'плывёшь', 'плаваешь'], answer: 'плывёт' },
              { type: 'fill_blank', sentence: 'Я хорошо ___.', hint: "('suzmoq' — umumiy ko'nikma sifatida)", options: ['плаваю', 'плыву', 'плаваешь', 'плывёшь'], answer: 'плаваю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети плавают в бассейне.', options: ['Bolalar basseynda suzishmoqda', "Bolalar dengizda o'ynashmoqda", "Bolalar ko'lda baliq tutishmoqda", "Bolalar qirg'oqda o'tirishibdi"], answer: 'Bolalar basseynda suzishmoqda' },
              { type: 'match', pairs: [{ ru: 'Плыть', uz: 'Suzmoq (hozir, bir marta)' }, { ru: 'Плавать', uz: "Suzmoq (doim, ko'nikma)" }, { ru: 'Бассейн', uz: 'Basseyn' }, { ru: 'Река', uz: 'Daryo' }] },
              { type: 'order', prompt: 'Baliq daryoda suzadi', tiles: ['Рыба', 'плывёт', 'по', 'реке'], answer: 'Рыба плывёт по реке' },
            ],
          },
          {
            id: 113, title: "Harakat fe'llari: бежать/бегать", icon: Rabbit,
            questions: [
              { type: 'fill_blank', sentence: 'Он сейчас ___ на автобус.', hint: "('yugurmoq' — bir yo'nalishda, hozir)", options: ['бежит', 'бегает', 'бежишь', 'бегаешь'], answer: 'бежит' },
              { type: 'fill_blank', sentence: 'Я ___ каждое утро в парке.', hint: "('yugurmoq' — takroriy harakat, sport)", options: ['бегаю', 'бегу', 'бегаешь', 'бежишь'], answer: 'бегаю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Спортсмены бегают по стадиону.', options: ['Sportchilar stadionda yugurishmoqda', "Sportchilar stadionda o'tirishibdi", 'Sportchilar stadionda suzishmoqda', 'Sportchilar stadionni tomosha qilishmoqda'], answer: 'Sportchilar stadionda yugurishmoqda' },
              { type: 'match', pairs: [{ ru: 'Бежать', uz: 'Yugurmoq (hozir, bir marta)' }, { ru: 'Бегать', uz: 'Yugurmoq (doim, sport)' }, { ru: 'Стадион', uz: 'Stadion' }, { ru: 'Спортсмен', uz: 'Sportchi' }] },
              { type: 'order', prompt: 'Bola maktabga yuguradi', tiles: ['Мальчик', 'бежит', 'в', 'школу'], answer: 'Мальчик бежит в школу' },
            ],
          },
          {
            id: 114, title: "Yo'q: у меня нет", icon: CircleX,
            questions: [
              { type: 'fill_blank', sentence: 'У меня нет ___.', hint: "('vaqt' so'zi, qaratqich kelishigi)", options: ['времени', 'время', 'временем', 'времена'], answer: 'времени' },
              { type: 'fill_blank', sentence: 'У нас нет ___.', hint: "('pul' so'zi, qaratqich kelishigi ko'plikda)", options: ['денег', 'деньги', 'деньгами', 'деньгам'], answer: 'денег' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня нет машины.', options: ["Menda mashina yo'q", 'Menda mashina bor', 'Men mashina sotib olaman', "Men mashinani yo'qotdim"], answer: "Menda mashina yo'q" },
              { type: 'match', pairs: [{ ru: 'Нет времени', uz: "Vaqt yo'q" }, { ru: 'Нет денег', uz: "Pul yo'q" }, { ru: 'Нет работы', uz: "Ish yo'q" }, { ru: 'Нет вопросов', uz: "Savol yo'q" }] },
              { type: 'order', prompt: "Menda savol yo'q", tiles: ['У', 'меня', 'нет', 'вопросов'], answer: 'У меня нет вопросов' },
            ],
          },
          {
            id: 115, title: "Qaratqich kelishigi: predloglar bilan", icon: Link,
            questions: [
              { type: 'fill_blank', sentence: 'Я не могу жить ___ тебя.', hint: "('-siz' — 'без' predlogi + qaratqich kelishigi)", options: ['без', 'для', 'от', 'до'], answer: 'без' },
              { type: 'fill_blank', sentence: 'Это подарок ___ мамы.', hint: "('uchun' — 'для' predlogi + qaratqich kelishigi)", options: ['для', 'без', 'от', 'до'], answer: 'для' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я получил письмо от друга.', options: ["Men do'stimdan xat oldim", "Men do'stimga xat yozdim", "Men do'stim uchun sovg'a oldim", "Men do'stimsiz keldim"], answer: "Men do'stimdan xat oldim" },
              { type: 'match', pairs: [{ ru: 'Без', uz: '-siz' }, { ru: 'Для', uz: 'Uchun' }, { ru: 'От', uz: '-dan (kishidan)' }, { ru: 'После', uz: '-dan keyin' }] },
              { type: 'order', prompt: "Bu sabzavotlarsiz mumkin emas", tiles: ['Это', 'невозможно', 'без', 'овощей'], answer: 'Это невозможно без овощей' },
            ],
          },
          {
            id: 116, title: 'Откуда? Qayerdan?', icon: Navigation2,
            questions: [
              { type: 'fill_blank', sentence: '___ вы приехали?', hint: "('qayerdan' so'rog'i)", options: ['Откуда', 'Куда', 'Где', 'Когда'], answer: 'Откуда' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Откуда вы? — Я из Ташкента.', options: ['Siz qayerdansiz? — Men Toshkentdanman', 'Siz qayerdasiz?', 'Siz qayerga ketyapsiz?', 'Siz qachon keldingiz?'], answer: 'Siz qayerdansiz? — Men Toshkentdanman' },
              { type: 'fill_blank', sentence: 'Я приехал ___ Узбекистана.', hint: "('-dan' — mamlakat nomidan oldin)", options: ['из', 'в', 'на', 'с'], answer: 'из' },
              { type: 'match', pairs: [{ ru: 'Куда', uz: 'Qayerga' }, { ru: 'Где', uz: 'Qayerda' }, { ru: 'Откуда', uz: 'Qayerdan' }, { ru: 'Издалека', uz: 'Uzoqdan' }] },
              { type: 'order', prompt: 'Siz qayerdansiz?', tiles: ['Откуда', 'вы'], answer: 'Откуда вы' },
            ],
          },
          {
            id: 117, title: "Sonlar va qaratqich kelishigi", icon: ListTree,
            questions: [
              { type: 'fill_blank', sentence: 'У меня два ___.', hint: "('do'st' so'zi, 2 dan keyin qaratqich birlik)", options: ['друга', 'друзья', 'друзей', 'другу'], answer: 'друга' },
              { type: 'fill_blank', sentence: 'На столе три ___.', hint: "('kitob' so'zi, 3 dan keyin qaratqich birlik)", options: ['книги', 'книга', 'книг', 'книге'], answer: 'книги' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У неё четыре брата.', options: ["Uning to'rtta akasi/ukasi bor", 'Uning bitta akasi bor', 'Uning beshta akasi bor', "Uning akasi yo'q"], answer: "Uning to'rtta akasi/ukasi bor" },
              { type: 'match', pairs: [{ ru: 'Два стола', uz: 'Ikkita stol' }, { ru: 'Три окна', uz: 'Uchta deraza' }, { ru: 'Четыре стула', uz: "To'rtta stul" }, { ru: 'Пять столов', uz: "Beshta stol (ko'plik)" }] },
              { type: 'order', prompt: 'Menda uchta savol bor', tiles: ['У', 'меня', 'три', 'вопроса'], answer: 'У меня три вопроса' },
            ],
          },
        ],
      },
      {
        title: "7-bo'lim",
        lessons: [
          {
            id: 118, title: 'Mehmonxonada', icon: Hotel,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Menda bron qilingan xona bor', options: ['У меня забронирован номер', 'У меня нет номера', 'Дайте мне номер', 'Сколько стоит номер?'], answer: 'У меня забронирован номер' },
              { type: 'fill_blank', sentence: 'На сколько ночей вы ___?', hint: "('to'xtamoq' fe'lining kelasi zamon shakli)", options: ['останетесь', 'остались', 'останусь', 'останется'], answer: 'останетесь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Завтрак включён в стоимость номера?', options: ['Nonushta xona narxiga kiradimi?', 'Nonushta qancha turadi?', 'Nonushta soat nechada?', 'Nonushta qayerda?'], answer: 'Nonushta xona narxiga kiradimi?' },
              { type: 'match', pairs: [{ ru: 'Номер', uz: 'Xona' }, { ru: 'Ресепшн', uz: 'Qabulxona' }, { ru: 'Ключ', uz: 'Kalit' }, { ru: 'Бронь', uz: 'Bron' }] },
              { type: 'order', prompt: 'Menda ikkinchi qavatda xona bor', tiles: ['У', 'меня', 'номер', 'на', 'втором', 'этаже'], answer: 'У меня номер на втором этаже' },
            ],
          },
          {
            id: 119, title: "Sifat + ot qaratqich kelishigida", icon: SpellCheck2,
            questions: [
              { type: 'fill_blank', sentence: 'У меня нет нов___ телефона.', hint: "(erkak so'z uchun qaratqich kelishigi -OGO)", options: ['ого', 'ой', 'ая', 'ое'], answer: 'ого' },
              { type: 'fill_blank', sentence: 'Это дом стар___ подруги.', hint: "(ayol so'z uchun qaratqich kelishigi -OY)", options: ['ой', 'ого', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это машина моего старшего брата.', options: ['Bu mening katta akamning mashinasi', 'Bu mening kichik ukamning mashinasi', 'Bu mening onamning mashinasi', 'Bu mening mashinam'], answer: 'Bu mening katta akamning mashinasi' },
              { type: 'match', pairs: [{ ru: 'Нового дома', uz: 'Yangi uyning' }, { ru: 'Старой книги', uz: 'Eski kitobning' }, { ru: 'Большого города', uz: 'Katta shaharning' }, { ru: 'Красивой девушки', uz: 'Chiroyli qizning' }] },
              { type: 'order', prompt: 'Bu yangi mashinaning rangi', tiles: ['Это', 'цвет', 'нового', 'автомобиля'], answer: 'Это цвет нового автомобиля' },
            ],
          },
          {
            id: 120, title: 'Katta sonlar: 100-1000000', icon: Banknote,
            questions: [
              { type: 'match', pairs: [{ ru: 'Сто', uz: '100' }, { ru: 'Тысяча', uz: '1000' }, { ru: 'Миллион', uz: '1000000' }, { ru: 'Пятьсот', uz: '500' }] },
              { type: 'fill_blank', sentence: 'В городе живёт миллион ___.', hint: "('odam' so'zi, qaratqich ko'plik)", options: ['человек', 'людей', 'человека', 'люди'], answer: 'человек' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эта машина стоит двести тысяч долларов.', options: ['Bu mashina ikki yuz ming dollar turadi', 'Bu mashina yigirma ming dollar turadi', 'Bu mashina ikki million dollar turadi', 'Bu mashina bepul'], answer: 'Bu mashina ikki yuz ming dollar turadi' },
              { type: 'fill_blank', sentence: 'У меня есть ___ рублей.', hint: "('besh yuz' so'zi)", options: ['пятьсот', 'пятьдесят', 'пять', 'пятнадцать'], answer: 'пятьсот' },
              { type: 'order', prompt: 'Shaharda bir million odam yashaydi', tiles: ['В', 'городе', 'живёт', 'миллион', 'человек'], answer: 'В городе живёт миллион человек' },
            ],
          },
          {
            id: 121, title: "Qachon tug'ilgansiz?", icon: Cake,
            questions: [
              { type: 'fill_blank', sentence: 'Я родился первого ___.', hint: "('yanvar' so'zi, qaratqich kelishigi)", options: ['января', 'январь', 'январе', 'январём'], answer: 'января' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Когда вы родились? — Я родился в тысяча девятьсот девяностом году.', options: ["Qachon tug'ilgansiz? — Men 1990 yilda tug'ilganman", 'Necha yoshdasiz?', "Qayerda tug'ilgansiz?", 'Qachon uylangansiz?'], answer: "Qachon tug'ilgansiz? — Men 1990 yilda tug'ilganman" },
              { type: 'fill_blank', sentence: 'Праздник был двадцать пятого ___.', hint: "('dekabr' so'zi, qaratqich kelishigi)", options: ['декабря', 'декабрь', 'декабре', 'декабрём'], answer: 'декабря' },
              { type: 'match', pairs: [{ ru: 'Января', uz: 'Yanvarning' }, { ru: 'Марта', uz: 'Martning' }, { ru: 'Мая', uz: 'Mayning' }, { ru: 'Сентября', uz: 'Sentyabrning' }] },
              { type: 'order', prompt: "Men birinchi sentyabrda tug'ilganman", tiles: ['Я', 'родился', 'первого', 'сентября'], answer: 'Я родился первого сентября' },
            ],
          },
          {
            id: 122, title: "Qaratqich ko'plik: -ov/-ey qoidasi", icon: Boxes,
            questions: [
              { type: 'fill_blank', sentence: 'У нас пять ___.', hint: "('stol' so'zi, qaratqich ko'plik -OV)", options: ['столов', 'столы', 'столам', 'столами'], answer: 'столов' },
              { type: 'fill_blank', sentence: 'В классе двадцать ___.', hint: "('talaba' so'zi, qaratqich ko'plik -OV)", options: ['студентов', 'студенты', 'студентам', 'студентами'], answer: 'студентов' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня много друзей.', options: ["Mening ko'p do'stlarim bor", "Mening bitta do'stim bor", "Mening do'stim yo'q", "Men do'stlarimni sog'indim"], answer: "Mening ko'p do'stlarim bor" },
              { type: 'match', pairs: [{ ru: 'Столов', uz: "Stollarning (ko'plik)" }, { ru: 'Друзей', uz: "Do'stlarning (ko'plik)" }, { ru: 'Окон', uz: "Derazalarning (ko'plik)" }, { ru: 'Ночей', uz: "Tunlarning (ko'plik)" }] },
              { type: 'order', prompt: "Bizda ko'p savollar bor", tiles: ['У', 'нас', 'много', 'вопросов'], answer: 'У нас много вопросов' },
            ],
          },
          {
            id: 123, title: "5 dan keyin: sonlar", icon: Rows3,
            questions: [
              { type: 'fill_blank', sentence: 'У меня пять ___.', hint: "('do'st' so'zi, 5 dan keyin qaratqich ko'plik)", options: ['друзей', 'друга', 'друг', 'другу'], answer: 'друзей' },
              { type: 'fill_blank', sentence: 'В доме шесть ___.', hint: "('xona' so'zi, 6 dan keyin qaratqich ko'plik)", options: ['комнат', 'комната', 'комнаты', 'комнате'], answer: 'комнат' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня десять книг.', options: ["Mening o'nta kitobim bor", 'Mening bitta kitobim bor', "Menda kitob yo'q", "Men o'nta kitob o'qidim"], answer: "Mening o'nta kitobim bor" },
              { type: 'match', pairs: [{ ru: 'Пять друзей', uz: "Beshta do'st" }, { ru: 'Шесть комнат', uz: 'Oltita xona' }, { ru: 'Семь дней', uz: 'Yettita kun' }, { ru: 'Десять лет', uz: "O'nta yil" }] },
              { type: 'order', prompt: "Menda o'nta savol bor", tiles: ['У', 'меня', 'десять', 'вопросов'], answer: 'У меня десять вопросов' },
            ],
          },
          {
            id: 124, title: 'Pul va miqdor', icon: Coins,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu qancha turadi?', options: ['Сколько это стоит?', 'Сколько это весит?', 'Сколько времени?', 'Сколько лет?'], answer: 'Сколько это стоит?' },
              { type: 'fill_blank', sentence: 'Это стоит ___ рублей.', hint: "('yuz' so'zi)", options: ['сто', 'десять', 'тысяча', 'миллион'], answer: 'сто' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня мало денег.', options: ['Menda oz pul bor', "Menda ko'p pul bor", "Menda pul yo'q", 'Men pulni sarfladim'], answer: 'Menda oz pul bor' },
              { type: 'match', pairs: [{ ru: 'Много', uz: "Ko'p" }, { ru: 'Мало', uz: 'Oz' }, { ru: 'Несколько', uz: 'Bir nechta' }, { ru: 'Достаточно', uz: 'Yetarli' }] },
              { type: 'order', prompt: 'Menda yetarlicha pul bor', tiles: ['У', 'меня', 'достаточно', 'денег'], answer: 'У меня достаточно денег' },
            ],
          },
        ],
      },
      {
        title: "8-bo'lim",
        lessons: [
          {
            id: 125, title: "Kutmoq: ждать fe'li", icon: Clock3,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ тебя уже час.', hint: "('kutmoq' fe'lining 'men' shakli)", options: ['жду', 'ждёшь', 'ждёт', 'ждём'], answer: 'жду' },
              { type: 'fill_blank', sentence: 'Мы ___ автобус на остановке.', hint: "('kutmoq' fe'lining 'biz' shakli)", options: ['ждём', 'жду', 'ждёте', 'ждут'], answer: 'ждём' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Извините, что заставил вас ждать.', options: ['Kechirasiz, sizni kutdirganim uchun', 'Kechirasiz, men kechikdim', 'Kechirasiz, men unutdim', 'Rahmat, kutganingiz uchun'], answer: 'Kechirasiz, sizni kutdirganim uchun' },
              { type: 'match', pairs: [{ ru: 'Ждать', uz: 'Kutmoq' }, { ru: 'Опаздывать', uz: 'Kechikmoq' }, { ru: 'Спешить', uz: 'Shoshilmoq' }, { ru: 'Успевать', uz: 'Ulgurmoq' }] },
              { type: 'order', prompt: 'Men seni restoranda kutaman', tiles: ['Я', 'жду', 'тебя', 'в', 'ресторане'], answer: 'Я жду тебя в ресторане' },
            ],
          },
          {
            id: 126, title: 'Restoranda: buyurtma berish', icon: ClipboardList,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga osh tavsiya qilasizmi?', options: ['Вы порекомендуете мне плов?', 'Вы любите плов?', 'У вас есть плов?', 'Сколько стоит плов?'], answer: 'Вы порекомендуете мне плов?' },
              { type: 'fill_blank', sentence: 'Я бы хотел ___ столик на двоих.', hint: "('bron qilmoq' fe'lining infinitivi)", options: ['заказать', 'заказал', 'заказываю', 'заказывает'], answer: 'заказать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это блюдо острое?', options: ['Bu taom achchiqmi?', 'Bu taom qanchami?', 'Bu taom mazalimi?', 'Bu taom issiqmi?'], answer: 'Bu taom achchiqmi?' },
              { type: 'match', pairs: [{ ru: 'Столик на двоих', uz: 'Ikki kishilik stol' }, { ru: 'Острый', uz: 'Achchiq' }, { ru: 'Сладкий', uz: 'Shirin' }, { ru: 'Кислый', uz: 'Nordon' }] },
              { type: 'order', prompt: 'Menga bir chashka choy bering', tiles: ['Дайте', 'мне', 'чашку', 'чая'], answer: 'Дайте мне чашку чая' },
            ],
          },
          {
            id: 127, title: "Qaysi, -gan: который I", icon: Split,
            questions: [
              { type: 'fill_blank', sentence: 'Это книга, ___ я читаю.', hint: "('qaysiki' — ayol so'z, vinitelniy)", options: ['которую', 'который', 'которое', 'которые'], answer: 'которую' },
              { type: 'fill_blank', sentence: 'Вот дом, ___ стоит на углу.', hint: "('qaysiki' — erkak so'z, nominativ)", options: ['который', 'которая', 'которое', 'которые'], answer: 'который' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это человек, который помог мне.', options: ['Bu menga yordam bergan odam', 'Bu odam menga yordam bermadi', "Bu mening do'stim", "Bu mening qo'shnim"], answer: 'Bu menga yordam bergan odam' },
              { type: 'match', pairs: [{ ru: 'Который', uz: "Qaysi (erkak so'z)" }, { ru: 'Которая', uz: "Qaysi (ayol so'z)" }, { ru: 'Которое', uz: "Qaysi (neytral so'z)" }, { ru: 'Которые', uz: "Qaysi (ko'plik)" }] },
              { type: 'order', prompt: 'Bu men yozgan kitob', tiles: ['Это', 'книга', 'которую', 'я', 'написал'], answer: 'Это книга которую я написал' },
            ],
          },
          {
            id: 128, title: "Qaysi, -gan: который II", icon: Merge,
            questions: [
              { type: 'fill_blank', sentence: 'Вот дом, около ___ растёт дерево.', hint: "('qaysiki' — erkak/neytral, qaratqich kelishigi)", options: ['которого', 'которая', 'которой', 'которые'], answer: 'которого' },
              { type: 'fill_blank', sentence: 'Это девушка, у ___ красивые глаза.', hint: "('qaysiki' — ayol, qaratqich kelishigi)", options: ['которой', 'который', 'которого', 'которые'], answer: 'которой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это студенты, у которых завтра экзамен.', options: ["Bu ertaga imtihoni bo'lgan talabalar", 'Bu imtihonni topshirgan talabalar', "Bu talabalarning imtihoni yo'q", "Bu o'qituvchilar"], answer: "Bu ertaga imtihoni bo'lgan talabalar" },
              { type: 'match', pairs: [{ ru: 'Которого', uz: 'Qaysiki (erkak, qaratqich kelishigi)' }, { ru: 'Которой', uz: 'Qaysiki (ayol, qaratqich kelishigi)' }, { ru: 'Которых', uz: "Qaysiki (ko'plik, qaratqich kelishigi)" }, { ru: 'О котором', uz: 'Qaysi haqida (erkak)' }] },
              { type: 'order', prompt: 'Bu men gaplashgan odam', tiles: ['Это', 'человек', 'о', 'котором', 'я', 'говорил'], answer: 'Это человек о котором я говорил' },
            ],
          },
          {
            id: 129, title: 'Rus oshxonasi tarixi', icon: CookingPot,
            questions: [
              { type: 'reading', text: 'Русская кухня очень старая. Она начала формироваться много веков назад.', question: 'Rus oshxonasi qanday?', options: ['Juda qadimiy', "Yangi paydo bo'lgan", 'Faqat zamonaviy', "Boshqa mamlakatdan kelgan"], answer: 'Juda qadimiy' },
              { type: 'reading', text: 'Раньше русские люди ели простую еду: хлеб, кашу и суп.', question: 'Qadimgi ruslar nima yeyishgan?', options: ["Non, bo'tqa va sho'rva", "Faqat go'sht", 'Faqat meva', 'Faqat baliq'], answer: "Non, bo'tqa va sho'rva" },
              { type: 'reading', text: 'Самое известное русское блюдо — борщ, суп из свёклы.', question: 'Eng mashhur rus taomi qaysi?', options: ['Borsh', 'Palov', 'Manti', "Lag'mon"], answer: 'Borsh' },
              { type: 'reading', text: 'Сегодня в русской кухне есть блюда из разных стран мира.', question: 'Bugungi rus oshxonasida nima bor?', options: ["Dunyoning turli mamlakatlaridan taomlar", "Faqat an'anaviy taomlar", 'Faqat vegetarian taomlar', "Hech narsa o'zgarmagan"], answer: "Dunyoning turli mamlakatlaridan taomlar" },
              { type: 'match', pairs: [{ ru: 'Борщ', uz: "Borsh (lavlagi sho'rva)" }, { ru: 'Каша', uz: "Bo'tqa" }, { ru: 'Блины', uz: 'Bliny (quymoq)' }, { ru: 'Пельмени', uz: 'Pelmeni' }] },
            ],
          },
          {
            id: 130, title: "Shoshilmoq va ulgurmoq: спешить/успевать", icon: Timer,
            questions: [
              { type: 'fill_blank', sentence: 'Я ___ на работу, до свидания!', hint: "('shoshilmoq' fe'lining 'men' shakli)", options: ['спешу', 'спешишь', 'спешит', 'спешим'], answer: 'спешу' },
              { type: 'fill_blank', sentence: 'Мы не ___ на поезд!', hint: "('ulgurmoq' fe'lining 'biz' shakli)", options: ['успеваем', 'успеваю', 'успеваешь', 'успевает'], answer: 'успеваем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не спешите, у нас есть время.', options: ['Shoshilmang, bizda vaqt bor', 'Tezroq boring', 'Kechikmang', 'Meni kutmang'], answer: 'Shoshilmang, bizda vaqt bor' },
              { type: 'match', pairs: [{ ru: 'Спешить', uz: 'Shoshilmoq' }, { ru: 'Успевать', uz: 'Ulgurmoq' }, { ru: 'Опаздывать', uz: 'Kechikmoq' }, { ru: 'Торопиться', uz: 'Shoshilmoq (sinonim)' }] },
              { type: 'order', prompt: 'Men ishga shoshilyapman', tiles: ['Я', 'спешу', 'на', 'работу'], answer: 'Я спешу на работу' },
            ],
          },
        ],
      },
      {
        title: "9-bo'lim",
        lessons: [
          {
            id: 131, title: 'Kimni? Nimani? кого/что', icon: UserCheck,
            questions: [
              { type: 'fill_blank', sentence: 'Я слушаю ___.', hint: "('jurnalist' so'zi — jonli, vinitelniy qaratqich kelishigiga o'xshaydi)", options: ['журналиста', 'журнал', 'журналист', 'журналистом'], answer: 'журналиста' },
              { type: 'fill_blank', sentence: 'Я читаю ___.', hint: "('gazeta' so'zi — jonsiz, oddiy vinitelniy)", options: ['газету', 'газета', 'газеты', 'газете'], answer: 'газету' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы знаете этого актёра?', options: ['Siz bu aktyorni tanaysizmi?', "Siz bu filmni ko'rdingizmi?", "Siz bu kitobni o'qidingizmi?", 'Siz bu joyni bilasizmi?'], answer: 'Siz bu aktyorni tanaysizmi?' },
              { type: 'match', pairs: [{ ru: 'Кого?', uz: 'Kimni? (jonli)' }, { ru: 'Что?', uz: 'Nimani? (jonsiz)' }, { ru: 'Вижу студента', uz: "Talabani ko'raman" }, { ru: 'Вижу стол', uz: "Stolni ko'raman" }] },
              { type: 'order', prompt: "Men o'qituvchini tinglayman", tiles: ['Я', 'слушаю', 'преподавателя'], answer: 'Я слушаю преподавателя' },
            ],
          },
          {
            id: 132, title: 'Qayerdan: из yoki с?', icon: ArrowUpRight,
            questions: [
              { type: 'fill_blank', sentence: 'Студенты идут ___ университета.', hint: "('-dan' — bino/muassasa uchun)", options: ['из', 'с', 'от', 'до'], answer: 'из' },
              { type: 'fill_blank', sentence: 'Я иду ___ концерта.', hint: "('-dan' — tadbir uchun)", options: ['с', 'из', 'от', 'до'], answer: 'с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Туристы едут из Англии.', options: ['Turistlar Angliyadan kelishmoqda', 'Turistlar Angliyaga ketishmoqda', 'Turistlar Angliyada yashashadi', "Turistlar Angliyani ko'rishmoqda"], answer: 'Turistlar Angliyadan kelishmoqda' },
              { type: 'match', pairs: [{ ru: 'Из университета', uz: 'Universitetdan' }, { ru: 'С концерта', uz: 'Kontsertdan' }, { ru: 'С юга', uz: 'Janubdan' }, { ru: 'Из парка', uz: 'Parkdan' }] },
              { type: 'order', prompt: 'Qushlar shimoldan uchib kelishadi', tiles: ['Птицы', 'летят', 'с', 'севера'], answer: 'Птицы летят с севера' },
            ],
          },
          {
            id: 133, title: "Ko'p, oz, yo'q: takrorlash", icon: Scale,
            questions: [
              { type: 'fill_blank', sentence: 'В нашей стране много ___.', hint: "('ko'l' so'zi, qaratqich ko'plik)", options: ['озёр', 'озеро', 'озёра', 'озером'], answer: 'озёр' },
              { type: 'fill_blank', sentence: 'У нас мало ___.', hint: "('tog'' so'zi, qaratqich ko'plik)", options: ['гор', 'гора', 'горы', 'горам'], answer: 'гор' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В Финляндии пять миллионов жителей.', options: ["Finlyandiyada besh million aholi bor", 'Finlyandiyada besh ming aholi bor', "Finlyandiyada aholi yo'q", 'Finlyandiya besh million kishilik'], answer: "Finlyandiyada besh million aholi bor" },
              { type: 'match', pairs: [{ ru: 'Жители', uz: 'Aholi' }, { ru: 'Города', uz: 'Shaharlar' }, { ru: 'Реки', uz: 'Daryolar' }, { ru: 'Леса', uz: "O'rmonlar" }] },
              { type: 'order', prompt: "Bizda ko'p o'rmonlar bor", tiles: ['У', 'нас', 'много', 'лесов'], answer: 'У нас много лесов' },
            ],
          },
          {
            id: 134, title: "Harakat fe'llari: umumiy takrorlash", icon: RefreshCw,
            questions: [
              { type: 'fill_blank', sentence: 'Футболисты хорошо ___.', hint: "('yugurmoq' — umumiy ko'nikma sifatida)", options: ['бегают', 'бегут', 'бежит', 'бежат'], answer: 'бегают' },
              { type: 'fill_blank', sentence: 'Этот самолёт сейчас ___ в Индию.', hint: "('uchmoq' — hozir, bir yo'nalishda)", options: ['летит', 'летает', 'летишь', 'летаешь'], answer: 'летит' },
              { type: 'fill_blank', sentence: 'Мы спешим! Мы ___ на урок.', hint: "('yugurmoq' — hozir, bir yo'nalishda)", options: ['бежим', 'бегаем', 'бежите', 'бегаете'], answer: 'бежим' },
              { type: 'match', pairs: [{ ru: 'Идти/Ходить', uz: 'Piyoda yurish' }, { ru: 'Ехать/Ездить', uz: 'Transportda yurish' }, { ru: 'Лететь/Летать', uz: 'Uchish' }, { ru: 'Плыть/Плавать', uz: 'Suzish' }] },
              { type: 'order', prompt: 'Baliqlar daryoda suzishadi', tiles: ['Рыбы', 'плавают', 'в', 'реке'], answer: 'Рыбы плавают в реке' },
            ],
          },
        ],
      },
      {
        title: "10-bo'lim",
        lessons: [
          {
            id: 135, title: 'Kimga? Nimaga? Dativ kelishigi I', icon: Gift,
            questions: [
              { type: 'fill_blank', sentence: 'Я звоню ___.', hint: "('do'st' so'zi — dativ kelishik, kimga?)", options: ['другу', 'друга', 'другом', 'друге'], answer: 'другу' },
              { type: 'fill_blank', sentence: 'Мы дарим цветы ___.', hint: "('opa/singil' so'zi — dativ kelishik)", options: ['сестре', 'сестра', 'сестру', 'сестрой'], answer: 'сестре' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я помогаю маме готовить ужин.', options: ['Men onamga kechki ovqat tayyorlashda yordam beraman', 'Men onam uchun ovqat sotib olaman', "Men onamdan ovqat so'rayman", 'Men onam bilan ovqatlanaman'], answer: 'Men onamga kechki ovqat tayyorlashda yordam beraman' },
              { type: 'match', pairs: [{ ru: 'Звонить', uz: "Qo'ng'iroq qilmoq (+kimga)" }, { ru: 'Помогать', uz: 'Yordam bermoq (+kimga)' }, { ru: 'Дарить', uz: "Sovg'a qilmoq (+kimga)" }, { ru: 'Давать', uz: 'Bermoq (+kimga)' }] },
              { type: 'order', prompt: "Men do'stimga qo'ng'iroq qilaman", tiles: ['Я', 'звоню', 'другу'], answer: 'Я звоню другу' },
            ],
          },
          {
            id: 136, title: 'Sifat + ot dativ kelishikda', icon: Type,
            questions: [
              { type: 'fill_blank', sentence: 'Я показал картину нов___ художнику.', hint: "(erkak so'z uchun dativ -ОМУ)", options: ['ому', 'ой', 'ая', 'ое'], answer: 'ому' },
              { type: 'fill_blank', sentence: 'Мы подарили цветы красив___ девушке.', hint: "(ayol so'z uchun dativ -ОЙ)", options: ['ой', 'ому', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какому другу вы написали письмо?', options: ["Qaysi do'stingizga xat yozdingiz?", "Qaysi do'stingiz sizga xat yozdi?", "Qaysi do'stingiz bilan gaplashdingiz?", "Qaysi do'stingizni ko'rdingiz?"], answer: "Qaysi do'stingizga xat yozdingiz?" },
              { type: 'match', pairs: [{ ru: 'Новому другу', uz: "Yangi do'stga" }, { ru: 'Красивой девушке', uz: 'Chiroyli qizga' }, { ru: 'Старшему брату', uz: 'Katta akaga' }, { ru: 'Младшей сестре', uz: 'Kichik singilga' }] },
              { type: 'order', prompt: 'Men katta akamga yordam beraman', tiles: ['Я', 'помогаю', 'старшему', 'брату'], answer: 'Я помогаю старшему брату' },
            ],
          },
          {
            id: 137, title: 'Menga sovuq: shaxssiz konstruksiya', icon: Thermometer,
            questions: [
              { type: 'fill_blank', sentence: '___ холодно, закрой окно.', hint: "('menga' — dativ shaklida)", options: ['Мне', 'Я', 'Меня', 'Мной'], answer: 'Мне' },
              { type: 'fill_blank', sentence: '___ нравится этот фильм.', hint: "('bizga' — dativ shaklida)", options: ['Нам', 'Мы', 'Нас', 'Нами'], answer: 'Нам' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ей скучно на этой лекции.', options: ["Unga (ayolga) bu ma'ruzada zerikarli", "Unga bu ma'ruza yoqadi", "U ma'ruzani tinglamayapti", "U ma'ruzaga kelmadi"], answer: "Unga (ayolga) bu ma'ruzada zerikarli" },
              { type: 'match', pairs: [{ ru: 'Мне холодно', uz: 'Menga sovuq' }, { ru: 'Тебе жарко', uz: 'Senga issiq' }, { ru: 'Ему интересно', uz: 'Unga (erkak) qiziq' }, { ru: 'Ей весело', uz: 'Unga (ayol) quvnoq' }] },
              { type: 'order', prompt: 'Bizga bu yerda qulay', tiles: ['Нам', 'здесь', 'удобно'], answer: 'Нам здесь удобно' },
            ],
          },
          {
            id: 138, title: 'Kerak: надо/нужно/можно/нельзя', icon: ShieldCheck,
            questions: [
              { type: 'fill_blank', sentence: 'Мне ___ новый телефон.', hint: "('kerak' — erkak so'z uchun)", options: ['нужен', 'нужна', 'нужно', 'нужны'], answer: 'нужен' },
              { type: 'fill_blank', sentence: 'Ей ___ помощь.', hint: "('kerak' — ayol so'z uchun)", options: ['нужна', 'нужен', 'нужно', 'нужны'], answer: 'нужна' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Здесь нельзя курить.', options: ['Bu yerda chekish mumkin emas', 'Bu yerda chekish mumkin', 'Bu yerda ovqatlanish mumkin emas', 'Bu yerda kirish mumkin emas'], answer: 'Bu yerda chekish mumkin emas' },
              { type: 'match', pairs: [{ ru: 'Надо', uz: 'Kerak (zarurat)' }, { ru: 'Можно', uz: 'Mumkin' }, { ru: 'Нельзя', uz: 'Mumkin emas' }, { ru: 'Нужно', uz: 'Kerak' }] },
              { type: 'order', prompt: 'Menga yangi kitob kerak', tiles: ['Мне', 'нужна', 'новая', 'книга'], answer: 'Мне нужна новая книга' },
            ],
          },
          {
            id: 139, title: 'Buyruq mayli: императив', icon: Megaphone,
            questions: [
              { type: 'fill_blank', sentence: '___ громче, я вас не слышу!', hint: "('gapirmoq' fe'lining buyruq shakli)", options: ['Говорите', 'Говорить', 'Говорит', 'Говорю'], answer: 'Говорите' },
              { type: 'fill_blank', sentence: '___ дверь, холодно!', hint: "('yopmoq' fe'lining buyruq shakli)", options: ['Закройте', 'Закрыть', 'Закрывает', 'Закрыл'], answer: 'Закройте' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не опаздывайте завтра!', options: ['Ertaga kechikmang!', 'Ertaga keling!', 'Ertaga ketmang!', 'Ertaga dam oling!'], answer: 'Ertaga kechikmang!' },
              { type: 'match', pairs: [{ ru: 'Говорите!', uz: 'Gapiring!' }, { ru: 'Читайте!', uz: "O'qing!" }, { ru: 'Откройте!', uz: 'Oching!' }, { ru: 'Приходите!', uz: 'Keling!' }] },
              { type: 'order', prompt: 'Kitobni oching', tiles: ['Откройте', 'книгу'], answer: 'Откройте книгу' },
            ],
          },
          {
            id: 140, title: 'Iltimos va maslahat', icon: HandHelping,
            questions: [
              { type: 'fill_blank', sentence: 'Я попросил ___ помочь мне.', hint: "('do'st' so'zi — dativ, kimdan iltimos qilinmoqda)", options: ['другу', 'друга', 'другом', 'друге'], answer: 'другу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я посоветовал ей прочитать эту книгу.', options: ["Men unga bu kitobni o'qishni maslahat berdim", "Men undan bu kitobni so'radim", "Men unga bu kitobni sovg'a qildim", "Men bu kitobni o'zim o'qidim"], answer: "Men unga bu kitobni o'qishni maslahat berdim" },
              { type: 'fill_blank', sentence: 'Попросите ___ позвонить завтра.', hint: "('Ivan' ismi — dativ)", options: ['Ивану', 'Иван', 'Ивана', 'Иваном'], answer: 'Ивану' },
              { type: 'match', pairs: [{ ru: 'Попросить', uz: 'Iltimos qilmoq' }, { ru: 'Посоветовать', uz: 'Maslahat bermoq' }, { ru: 'Разрешить', uz: 'Ruxsat bermoq' }, { ru: 'Пригласить', uz: 'Taklif qilmoq' }] },
              { type: 'order', prompt: "Ukamdan yordam so'radim", tiles: ['Я', 'попросил', 'брата', 'помочь'], answer: 'Я попросил брата помочь' },
            ],
          },
          {
            id: 141, title: 'Kim bilan? Nima bilan? Instrumental I', icon: CircleUserRound,
            questions: [
              { type: 'fill_blank', sentence: 'Я пишу ___.', hint: "('ruchka' so'zi — instrumental, nima bilan?)", options: ['ручкой', 'ручка', 'ручку', 'ручке'], answer: 'ручкой' },
              { type: 'fill_blank', sentence: 'Он гуляет ___.', hint: "('do'st (ayol)' so'zi — 'с' predlogi bilan, instrumental)", options: ['с подругой', 'с подруга', 'с подругу', 'с подруге'], answer: 'с подругой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Чем вы занимаетесь? — Я занимаюсь спортом.', options: ["Nima bilan shug'ullanasiz? — Men sport bilan shug'ullanaman", "Nima qilyapsiz? — Men sport ko'ryapman", "Qayerda o'ynaysiz?", 'Kim bilan sport qilasiz?'], answer: "Nima bilan shug'ullanasiz? — Men sport bilan shug'ullanaman" },
              { type: 'match', pairs: [{ ru: 'Заниматься', uz: "Shug'ullanmoq" }, { ru: 'Интересоваться', uz: 'Qiziqmoq' }, { ru: 'Увлекаться', uz: 'Berilib ketmoq' }, { ru: 'Становиться', uz: "Bo'lib qolmoq" }] },
              { type: 'order', prompt: "U musiqa bilan qiziqadi", tiles: ['Он', 'интересуется', 'музыкой'], answer: 'Он интересуется музыкой' },
            ],
          },
          {
            id: 142, title: "Instrumental II: joy predloglari", icon: Move3d,
            questions: [
              { type: 'fill_blank', sentence: 'Кот спит под ___.', hint: "('stol' so'zi — instrumental)", options: ['столом', 'стол', 'столу', 'столе'], answer: 'столом' },
              { type: 'fill_blank', sentence: 'Лампа висит над ___.', hint: "('stol' so'zi — instrumental)", options: ['столом', 'стол', 'столу', 'столе'], answer: 'столом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Магазин находится между домом и парком.', options: ["Do'kon uy bilan park orasida joylashgan", "Do'kon uy oldida", "Do'kon parkning ortida", "Do'kon uydan uzoqda"], answer: "Do'kon uy bilan park orasida joylashgan" },
              { type: 'match', pairs: [{ ru: 'Под столом', uz: 'Stol ostida' }, { ru: 'Над столом', uz: 'Stol ustida' }, { ru: 'Перед домом', uz: 'Uy oldida' }, { ru: 'За домом', uz: 'Uy ortida' }] },
              { type: 'order', prompt: 'Mashina uy oldida turibdi', tiles: ['Машина', 'стоит', 'перед', 'домом'], answer: 'Машина стоит перед домом' },
            ],
          },
          {
            id: 143, title: "Solishtirma daraja: ko'proq, kamroq", icon: ArrowUpNarrowWide,
            questions: [
              { type: 'fill_blank', sentence: 'Этот дом ___, чем тот.', hint: "('chiroyliroq' — sifatning solishtirma darajasi)", options: ['красивее', 'красивый', 'более красивый', 'красивая'], answer: 'красивее' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я знаю больше, чем вы.', options: ["Men sizdan ko'proq bilaman", 'Men sizdan kamroq bilaman', 'Biz bir xil bilamiz', "Siz mendan ko'proq bilasiz"], answer: "Men sizdan ko'proq bilaman" },
              { type: 'fill_blank', sentence: 'Этот вопрос ___ важный.', hint: "('ko'proq' — uzun sifatlar uchun 'более' + sifat)", options: ['более', 'больше', 'лучше', 'быстрее'], answer: 'более' },
              { type: 'match', pairs: [{ ru: 'Больше', uz: "Ko'proq" }, { ru: 'Меньше', uz: 'Kamroq' }, { ru: 'Лучше', uz: 'Yaxshiroq' }, { ru: 'Хуже', uz: 'Yomonroq' }] },
              { type: 'order', prompt: 'Bu kitob undan qiziqarliroq', tiles: ['Эта', 'книга', 'интереснее', 'той'], answer: 'Эта книга интереснее той' },
            ],
          },
          {
            id: 144, title: "Rossiyada odob-axloq qoidalari", icon: BookHeart,
            questions: [
              { type: 'reading', text: 'В России не любят свистеть дома: считают, что тогда не будет денег.', question: 'Uyda nima qilish yoqtirilmaydi?', options: ['Hushtak chalish', 'Kulish', "Qo'shiq aytish", 'Gaplashish'], answer: 'Hushtak chalish' },
              { type: 'reading', text: 'Если хотите подарить цветы, дарите нечётное число: один, три, пять.', question: "Gul sovg'a qilishda nechta bo'lishi kerak?", options: ['Toq son (1, 3, 5)', 'Juft son (2, 4, 6)', "Har doim o'nta", "Farqi yo'q"], answer: 'Toq son (1, 3, 5)' },
              { type: 'reading', text: 'На тосте говорят «За здоровье!», а не «На здоровье!».', question: 'Tost aytishda qanday deyish kerak?', options: ['«За здоровье!»', '«На здоровье!»', '«Спасибо!»', '«Пожалуйста!»'], answer: '«За здоровье!»' },
              { type: 'reading', text: 'Перед едой в России часто выпивают, а после этого едят горячий суп.', question: 'Ovqatdan oldin odatda nima qilishadi?', options: ['Ichishadi', 'Uxlashadi', 'Yugurishadi', "Kuylashadi"], answer: 'Ichishadi' },
              { type: 'match', pairs: [{ ru: 'Обычай', uz: 'Odat' }, { ru: 'Традиция', uz: "An'ana" }, { ru: 'Суеверие', uz: 'Xurofot' }, { ru: 'Примета', uz: 'Alomat' }] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'C1', label: 'Erkin muloqot',
    units: [
      {
        title: "1-bo'lim",
        lessons: [
          {
            id: 27, title: 'Fikr bildirish', icon: Mic,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'С одной стороны, это удобно, а с другой стороны — дорого', options: ['Bir tomondan bu qulay, ikkinchi tomondan — qimmat', 'Bu hech qanday tomondan yaxshi emas', 'Bu juda arzon va qulay', "Men bu haqida fikrim yo'q"], answer: 'Bir tomondan bu qulay, ikkinchi tomondan — qimmat' },
              { type: 'fill_blank', sentence: 'Я согласен с тем, ___ вы сказали.', hint: "('nima' ma'nosidagi bog'lovchi so'z)", options: ['что', 'как', 'когда', 'где'], answer: 'что' },
              { type: 'choice', dir: 'uz2ru', prompt: "Mening fikrimcha, bu noto'g'ri", options: ['По-моему, это неправильно', 'Мне всё равно', 'Я не думаю об этом', 'Это неважно'], answer: 'По-моему, это неправильно' },
              { type: 'match', pairs: [{ ru: 'Мнение', uz: 'Fikr' }, { ru: 'Аргумент', uz: 'Dalil' }, { ru: 'Спор', uz: 'Bahs' }, { ru: 'Согласие', uz: 'Rozilik' }] },
              { type: 'order', prompt: 'Men siz bilan toliq roziman', tiles: ['Я', 'полностью', 'согласен', 'с', 'вами'], answer: 'Я полностью согласен с вами' },
            ],
          },
          {
            id: 28, title: 'Ish suhbati', icon: Handshake,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Расскажите о своём опыте работы', options: ['Ish tajribangiz haqida gapirib bering', 'Ismingiz nima?', 'Qayerda yashaysiz?', 'Necha yoshdasiz?'], answer: 'Ish tajribangiz haqida gapirib bering' },
              { type: 'fill_blank', sentence: 'У меня есть опыт работы в этой ___.', hint: "('soha' so'zi ayol jinsida)", options: ['сфере', 'сфера', 'сферу', 'сферой'], answer: 'сфере' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Mening kuchli tomonlarim mehnatsevarlik va masuliyat', options: ['Мои сильные стороны — трудолюбие и ответственность', 'У меня нет сильных сторон', 'Я не люблю работать', 'Я всегда опаздываю'], answer: 'Мои сильные стороны — трудолюбие и ответственность' },
              { type: 'match', pairs: [{ ru: 'Опыт', uz: 'Tajriba' }, { ru: 'Резюме', uz: 'Rezyume' }, { ru: 'Собеседование', uz: 'Suhbat' }, { ru: 'Зарплата', uz: 'Ish haqi' }] },
              { type: 'order', prompt: 'Men bu lavozimga juda mos kelaman', tiles: ['Я', 'отлично', 'подхожу', 'для', 'этой', 'должности'], answer: 'Я отлично подхожу для этой должности' },
            ],
          },
          {
            id: 29, title: 'Madaniyat', icon: Globe,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Традиции играют важную роль в узбекской культуре', options: ["An'analar o'zbek madaniyatida muhim rol o'ynaydi", "An'analar hech qanday ahamiyatga ega emas", 'Faqat zamonaviylik muhim', 'Madaniyat haqida gapirish kerak emas'], answer: "An'analar o'zbek madaniyatida muhim rol o'ynaydi" },
              { type: 'fill_blank', sentence: 'Каждая страна гордится своей уникальной ___.', hint: "('madaniyat' so'zi ayol jinsida)", options: ['культурой', 'культура', 'культуру', 'культуре'], answer: 'культурой' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu urf-odat qadimdan meros bolib kelmoqda', options: ['Этот обычай передаётся из поколения в поколение', 'Этот обычай уже забыт', 'Никто не соблюдает этот обычай', 'Это новая традиция'], answer: 'Этот обычай передаётся из поколения в поколение' },
              { type: 'match', pairs: [{ ru: 'Традиция', uz: "An'ana" }, { ru: 'Обычай', uz: 'Urf-odat' }, { ru: 'Наследие', uz: 'Meros' }, { ru: 'Поколение', uz: 'Avlod' }] },
              { type: 'order', prompt: "Har bir xalqning o'z qadriyatlari bor", tiles: ['У', 'каждого', 'народа', 'есть', 'свои', 'ценности'], answer: 'У каждого народа есть свои ценности' },
            ],
          },
          {
            id: 30, title: 'Muammo va yechim', icon: Lightbulb,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Нужно найти компромисс, который устроит всех', options: ['Hammani qanoatlantiradigan murosaga kelish kerak', 'Muammoni hal qilish shart emas', 'Faqat bitta odam qaror qabul qilishi kerak', "Muammo yo'q"], answer: 'Hammani qanoatlantiradigan murosaga kelish kerak' },
              { type: 'fill_blank', sentence: 'Если мы не решим эту проблему сейчас, она станет ___.', hint: "('jiddiyroq' — sifatning qiyosiy darajasi)", options: ['серьёзнее', 'серьёзная', 'серьёзно', 'серьёзный'], answer: 'серьёзнее' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu masalani muhokama qilishimiz kerak', options: ['Нам нужно обсудить этот вопрос', 'Этот вопрос неважен', 'Мы уже всё решили', 'Никто не хочет говорить об этом'], answer: 'Нам нужно обсудить этот вопрос' },
              { type: 'match', pairs: [{ ru: 'Проблема', uz: 'Muammo' }, { ru: 'Решение', uz: 'Yechim' }, { ru: 'Причина', uz: 'Sabab' }, { ru: 'Последствие', uz: 'Oqibat' }] },
              { type: 'order', prompt: 'Har bir muammoning yechimi bor', tiles: ['У', 'каждой', 'проблемы', 'есть', 'решение'], answer: 'У каждой проблемы есть решение' },
            ],
          },
          {
            id: 31, title: "Hikoya qilish", icon: Feather,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Однажды со мной произошла удивительная история', options: ["Bir kuni men bilan ajoyib voqea sodir bo'ldi", 'Men bilan hech narsa sodir bolmadi', 'Bu voqea zerikarli edi', 'Men bu haqida gapirmayman'], answer: "Bir kuni men bilan ajoyib voqea sodir bo'ldi" },
              { type: 'fill_blank', sentence: 'Пока я гулял по городу, я неожиданно ___ старого друга.', hint: "('uchratmoq' fe'lining o'tgan zamoni)", options: ['встретил', 'встречаю', 'встречал', 'встретит'], answer: 'встретил' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Voqea kutilmagan tarzda tugadi', options: ['История закончилась неожиданно', 'История никогда не заканчивается', 'Я не помню конец истории', 'Это была очень простая история'], answer: 'История закончилась неожиданно' },
              { type: 'match', pairs: [{ ru: 'Событие', uz: 'Voqea' }, { ru: 'Приключение', uz: 'Sarguzasht' }, { ru: 'Случай', uz: 'Hodisa' }, { ru: 'Финал', uz: 'Yakun' }] },
              { type: 'order', prompt: 'Bu mening hayotimdagi eng qiziq voqea', tiles: ['Это', 'самая', 'интересная', 'история', 'в', 'моей', 'жизни'], answer: 'Это самая интересная история в моей жизни' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'LG',
    label: "Lug'at boyligi",
    units: [
      {
        title: "1-bo'lim: Odamlar",
        lessons: [
          {
            id: 1001, title: '1-qism', icon: Users,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'odam', options: ['младший брат', 'человек', 'пророк', 'начальник, руководитель'], answer: 'человек' },
              { type: 'choice', dir: 'ru2uz', prompt: 'люди', options: ['qo’shni', 'qaynopa', 'sovchi', 'odamlar'], answer: 'odamlar' },
              { type: 'listening', audioText: 'родители', question: "Bu so'z qanday tarjima qilinadi?", options: ['ota-ona', 'tovlamachi', 'asir', 'payg’ambar'], answer: 'ota-ona' },
              { type: 'choice', dir: 'ru2uz', prompt: 'отец', options: ['pochcha, kuyov', 'yo’lboshchi', 'payg’ambar', 'ota'], answer: 'ota' },
              { type: 'choice', dir: 'uz2ru', prompt: 'ona', options: ['мать', 'младенец, малыш', 'гость', 'танцор, танцовщица'], answer: 'мать' },
              { type: 'match', pairs: [{ ru: 'человек', uz: 'odam' }, { ru: 'люди', uz: 'odamlar' }, { ru: 'родители', uz: 'ota-ona' }, { ru: 'отец', uz: 'ota' }, { ru: 'мать', uz: 'ona' }, { ru: 'папа', uz: 'dada' }] },
            ],
          },
          {
            id: 1002, title: '2-qism', icon: UserCircle,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'oyi', options: ['представитель, агент', 'мама', 'жених', 'лжец, врун, лгун(ья)'], answer: 'мама' },
              { type: 'choice', dir: 'ru2uz', prompt: 'брат', options: ['aka, uka', 'qotil', 'shifokor', 'kelin (to’yda)'], answer: 'aka, uka' },
              { type: 'listening', audioText: 'сестра', question: "Bu so'z qanday tarjima qilinadi?", options: ['ajdodlar', 'tovlamachi', 'opa, singil', 'qaynopa'], answer: 'opa, singil' },
              { type: 'choice', dir: 'ru2uz', prompt: 'старший брат', options: ['aka', 'qiz bola', 'buvi', 'ota-ona'], answer: 'aka' },
              { type: 'choice', dir: 'uz2ru', prompt: 'uka', options: ['шурин (брат жены)', 'младший брат', 'родители', 'наследник, наследница'], answer: 'младший брат' },
              { type: 'match', pairs: [{ ru: 'мама', uz: 'oyi' }, { ru: 'брат', uz: 'aka, uka' }, { ru: 'сестра', uz: 'opa, singil' }, { ru: 'старший брат', uz: 'aka' }, { ru: 'младший брат', uz: 'uka' }, { ru: 'бабушка', uz: 'buvi' }] },
            ],
          },
          {
            id: 1003, title: '3-qism', icon: Contact,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'bobo', options: ['взрослый', 'предки', 'дедушка', 'хвастун'], answer: 'дедушка' },
              { type: 'choice', dir: 'ru2uz', prompt: 'сирота', options: ['kampir', 'ish', 'xotin', 'yetim'], answer: 'yetim' },
              { type: 'listening', audioText: 'дядя', question: "Bu so'z qanday tarjima qilinadi?", options: ['amaki, tog’a', 'turmush o’rtog’', 'o’qish (tahsil)', 'murda'], answer: 'amaki, tog’a' },
              { type: 'choice', dir: 'ru2uz', prompt: 'тетя', options: ['maqtanchoq', 'egizaklar', 'amma, xola', 'bolalik'], answer: 'amma, xola' },
              { type: 'choice', dir: 'uz2ru', prompt: 'bola', options: ['ребенок', 'переводчик(ца)', 'целитель, лекарь', 'лжец, врун, лгун(ья)'], answer: 'ребенок' },
              { type: 'match', pairs: [{ ru: 'дедушка', uz: 'bobo' }, { ru: 'сирота', uz: 'yetim' }, { ru: 'дядя', uz: 'amaki, tog’a' }, { ru: 'тетя', uz: 'amma, xola' }, { ru: 'ребенок', uz: 'bola' }, { ru: 'дети', uz: 'bolalar' }] },
            ],
          },
          {
            id: 1004, title: '4-qism', icon: SquareUser,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'o’g’il farzand', options: ['посол', 'брат', 'сирота', 'сын'], answer: 'сын' },
              { type: 'choice', dir: 'ru2uz', prompt: 'дочь', options: ['qiz bola', 'oyi', 'qiz farzand', 'maqtanchoq'], answer: 'qiz farzand' },
              { type: 'listening', audioText: 'жена', question: "Bu so'z qanday tarjima qilinadi?", options: ['janob, xonim', 'xotin', 'xalq', 'fazogir'], answer: 'xotin' },
              { type: 'choice', dir: 'ru2uz', prompt: 'муж', options: ['o’yinchi', 'er', 'ona', 'navbatchi'], answer: 'er' },
              { type: 'choice', dir: 'uz2ru', prompt: 'turmush o’rtog’', options: ['враг', 'супруг(а)', 'деверь (брат мужа)', 'родители'], answer: 'супруг(а)' },
              { type: 'match', pairs: [{ ru: 'сын', uz: 'o’g’il farzand' }, { ru: 'дочь', uz: 'qiz farzand' }, { ru: 'жена', uz: 'xotin' }, { ru: 'муж', uz: 'er' }, { ru: 'супруг(а)', uz: 'turmush o’rtog’' }, { ru: 'свекровь, теща', uz: 'qaynona' }] },
            ],
          },
          {
            id: 1005, title: '5-qism', icon: UsersRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'qaynota', options: ['игрок', 'виновник', 'старый человек', 'свекор, тесть'], answer: 'свекор, тесть' },
              { type: 'choice', dir: 'ru2uz', prompt: 'свояченица (сестра жены)', options: ['ayol kishi', 'xodim', 'qaynopa', 'taniqli'], answer: 'qaynopa' },
              { type: 'listening', audioText: 'шурин (брат жены)', question: "Bu so'z qanday tarjima qilinadi?", options: ['qaynaka', 'egizaklar', 'ota', 'uchuvchi'], answer: 'qaynaka' },
              { type: 'choice', dir: 'ru2uz', prompt: 'золовка (сестра мужа)', options: ['qaynopa', 'chaqaloq, go\'dak', 'amma, xola', 'voyaga yetgan'], answer: 'qaynopa' },
              { type: 'choice', dir: 'uz2ru', prompt: 'qaynaka', options: ['деверь (брат мужа)', 'целитель, лекарь', 'племянник', 'детство'], answer: 'деверь (брат мужа)' },
              { type: 'match', pairs: [{ ru: 'свекор, тесть', uz: 'qaynota' }, { ru: 'свояченица (сестра жены)', uz: 'qaynopa' }, { ru: 'шурин (брат жены)', uz: 'qaynaka' }, { ru: 'зять', uz: 'pochcha, kuyov' }] },
            ],
          },
          {
            id: 1006, title: '6-qism', icon: CircleUserRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'o’gayona', options: ['дядя', 'больной, пациент', 'наследник, наследница', 'мачеха'], answer: 'мачеха' },
              { type: 'choice', dir: 'ru2uz', prompt: 'отчим', options: ['tikuvchi', 'tish duxtur', 'ona', 'o’gayota'], answer: 'o’gayota' },
              { type: 'listening', audioText: 'родственник', question: "Bu so'z qanday tarjima qilinadi?", options: ['jinoyatchi', 'qaynota', 'qarindosh', 'shifokor'], answer: 'qarindosh' },
              { type: 'choice', dir: 'ru2uz', prompt: 'племянник', options: ['o’g’il jiyan', 'janob, xonim', 'o’smir', 'elchi'], answer: 'o’g’il jiyan' },
              { type: 'choice', dir: 'uz2ru', prompt: 'qiz jiyan', options: ['традиция', 'любовник', 'племянница', 'деверь (брат мужа)'], answer: 'племянница' },
              { type: 'match', pairs: [{ ru: 'мачеха', uz: 'o’gayona' }, { ru: 'отчим', uz: 'o’gayota' }, { ru: 'родственник', uz: 'qarindosh' }, { ru: 'племянник', uz: 'o’g’il jiyan' }, { ru: 'племянница', uz: 'qiz jiyan' }, { ru: 'близнецы, двойняшки', uz: 'egizaklar' }] },
            ],
          },
          {
            id: 1007, title: '7-qism', icon: Fingerprint,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'mehmon', options: ['больной, пациент', 'гость', 'обычай', 'целитель, лекарь'], answer: 'гость' },
              { type: 'choice', dir: 'ru2uz', prompt: 'сосед(ка)', options: ['urf-odat', 'yordamchi', 'qo’shni', 'bemor'], answer: 'qo’shni' },
              { type: 'listening', audioText: 'невестка', question: "Bu so'z qanday tarjima qilinadi?", options: ['urf-odat', 'kelin', 'opa, singil', 'egizaklar'], answer: 'kelin' },
              { type: 'choice', dir: 'ru2uz', prompt: 'невеста', options: ['kelin (to’yda)', 'asir', 'yarador', 'aka, uka'], answer: 'kelin (to’yda)' },
              { type: 'choice', dir: 'uz2ru', prompt: 'kuyov (to’yda)', options: ['художник', 'старший брат', 'жених', 'друг'], answer: 'жених' },
              { type: 'match', pairs: [{ ru: 'гость', uz: 'mehmon' }, { ru: 'сосед(ка)', uz: 'qo’shni' }, { ru: 'невестка', uz: 'kelin' }, { ru: 'невеста', uz: 'kelin (to’yda)' }, { ru: 'жених', uz: 'kuyov (to’yda)' }, { ru: 'мужчина', uz: 'erkak kishi' }] },
            ],
          },
          {
            id: 1008, title: '8-qism', icon: UserCheck,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'ayol kishi', options: ['пилот, летчик', 'учник, ученица', 'господин, госпожа', 'женщина'], answer: 'женщина' },
              { type: 'choice', dir: 'ru2uz', prompt: 'мальчик', options: ['o’g’il bola', 'taniqli', 'aka', 'yolg’onchi'], answer: 'o’g’il bola' },
              { type: 'listening', audioText: 'девушка', question: "Bu so'z qanday tarjima qilinadi?", options: ['sovchi', 'yoshlar', 'qiz bola', 'o’quvchi'], answer: 'qiz bola' },
              { type: 'choice', dir: 'ru2uz', prompt: 'младенец, малыш', options: ['chaqaloq, go\'dak', 'o’g’il jiyan', 'qo’shni', 'opa, singil'], answer: 'chaqaloq, go\'dak' },
              { type: 'choice', dir: 'uz2ru', prompt: 'insoniyat', options: ['работа, дело', 'человечество', 'моряк, матрос', 'спонсор'], answer: 'человечество' },
              { type: 'match', pairs: [{ ru: 'женщина', uz: 'ayol kishi' }, { ru: 'мальчик', uz: 'o’g’il bola' }, { ru: 'девушка', uz: 'qiz bola' }, { ru: 'младенец, малыш', uz: 'chaqaloq, go\'dak' }, { ru: 'человечество', uz: 'insoniyat' }, { ru: 'народ', uz: 'xalq' }] },
            ],
          },
          {
            id: 1009, title: '9-qism', icon: Users,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'bolalik', options: ['старуха', 'мать', 'больной, пациент', 'детство'], answer: 'детство' },
              { type: 'choice', dir: 'ru2uz', prompt: 'молодость, юность', options: ['yo’lboshchi', 'yoshlik', 'o’qituvchi', 'qo’shiqchi'], answer: 'yoshlik' },
              { type: 'listening', audioText: 'молодежь', question: "Bu so'z qanday tarjima qilinadi?", options: ['aka, uka', 'amma, xola', 'aybdor', 'yoshlar'], answer: 'yoshlar' },
              { type: 'choice', dir: 'ru2uz', prompt: 'старый человек', options: ['fazogir', 'ish', 'voyaga yetmagan', 'qari odam'], answer: 'qari odam' },
              { type: 'choice', dir: 'uz2ru', prompt: 'chol', options: ['мясник', 'старик', 'любовница', 'господин, госпожа'], answer: 'старик' },
              { type: 'match', pairs: [{ ru: 'детство', uz: 'bolalik' }, { ru: 'молодость, юность', uz: 'yoshlik' }, { ru: 'молодежь', uz: 'yoshlar' }, { ru: 'старый человек', uz: 'qari odam' }, { ru: 'старик', uz: 'chol' }, { ru: 'старуха', uz: 'kampir' }] },
            ],
          },
          {
            id: 1010, title: '10-qism', icon: UserCircle,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'o’smir', options: ['учеба', 'подросток', 'лидер, вождь', 'убийца'], answer: 'подросток' },
              { type: 'choice', dir: 'ru2uz', prompt: 'взрослый', options: ['voyaga yetgan', 'jinoyatchi', 'opa, singil', 'odam'], answer: 'voyaga yetgan' },
              { type: 'listening', audioText: 'несовершеннолетний', question: "Bu so'z qanday tarjima qilinadi?", options: ['qo’shiqchi', 'qo’shni', 'voyaga yetmagan', 'ish'], answer: 'voyaga yetmagan' },
              { type: 'choice', dir: 'ru2uz', prompt: 'друг', options: ['qaynaka', 'fazogir', 'maqtanchoq', 'do’st'], answer: 'do’st' },
              { type: 'choice', dir: 'uz2ru', prompt: 'dushman', options: ['молодежь', 'сын', 'продавец, продавщица', 'враг'], answer: 'враг' },
              { type: 'match', pairs: [{ ru: 'подросток', uz: 'o’smir' }, { ru: 'взрослый', uz: 'voyaga yetgan' }, { ru: 'несовершеннолетний', uz: 'voyaga yetmagan' }, { ru: 'друг', uz: 'do’st' }, { ru: 'враг', uz: 'dushman' }, { ru: 'пол', uz: 'jins' }] },
            ],
          },
          {
            id: 1011, title: '11-qism', icon: Contact,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'til', options: ['обычай', 'старуха', 'язык', 'женщина'], answer: 'язык' },
              { type: 'choice', dir: 'ru2uz', prompt: 'обычай', options: ['xotin', 'urf-odat', 'qo’shni', 'yoshlik'], answer: 'urf-odat' },
              { type: 'listening', audioText: 'традиция', question: "Bu so'z qanday tarjima qilinadi?", options: ['janob, xonim', 'o’g’il jiyan', 'qassob', 'an’ana'], answer: 'an’ana' },
              { type: 'choice', dir: 'ru2uz', prompt: 'работа, дело', options: ['o’qish (tahsil)', 'ish', 'amma, xola', 'janob, xonim'], answer: 'ish' },
              { type: 'choice', dir: 'uz2ru', prompt: 'o’qish (tahsil)', options: ['дедушка', 'сотрудник(ница)', 'учеба', 'старый человек'], answer: 'учеба' },
              { type: 'match', pairs: [{ ru: 'язык', uz: 'til' }, { ru: 'обычай', uz: 'urf-odat' }, { ru: 'традиция', uz: 'an’ana' }, { ru: 'работа, дело', uz: 'ish' }, { ru: 'учеба', uz: 'o’qish (tahsil)' }, { ru: 'рабочий', uz: 'ishchi' }] },
            ],
          },
          {
            id: 1012, title: '12-qism', icon: SquareUser,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'xodim', options: ['подросток', 'моряк, матрос', 'мошенник', 'сотрудник(ница)'], answer: 'сотрудник(ница)' },
              { type: 'choice', dir: 'ru2uz', prompt: 'водитель', options: ['qaynopa', 'odam', 'kampir', 'haydovchi'], answer: 'haydovchi' },
              { type: 'listening', audioText: 'врач, доктор, лекарь', question: "Bu so'z qanday tarjima qilinadi?", options: ['o’g’il jiyan', 'shifokor', 'uka', 'ziyoratchi'], answer: 'shifokor' },
              { type: 'choice', dir: 'ru2uz', prompt: 'целитель, лекарь', options: ['erkak kishi', 'voyaga yetmagan', 'qaynopa', 'tabib'], answer: 'tabib' },
              { type: 'choice', dir: 'uz2ru', prompt: 'o’quvchi', options: ['отчим', 'портной', 'свояченица (сестра жены)', 'учник, ученица'], answer: 'учник, ученица' },
              { type: 'match', pairs: [{ ru: 'сотрудник(ница)', uz: 'xodim' }, { ru: 'водитель', uz: 'haydovchi' }, { ru: 'врач, доктор, лекарь', uz: 'shifokor' }, { ru: 'целитель, лекарь', uz: 'tabib' }, { ru: 'учник, ученица', uz: 'o’quvchi' }, { ru: 'переводчик(ца)', uz: 'tarjimon' }] },
            ],
          },
          {
            id: 1013, title: '13-qism', icon: UsersRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'muhandis', options: ['раб, рабыня', 'сын', 'инженер', 'жених'], answer: 'инженер' },
              { type: 'choice', dir: 'ru2uz', prompt: 'учитель(ница)', options: ['o’qituvchi', 'asir', 'maqtanchoq', 'qari odam'], answer: 'o’qituvchi' },
              { type: 'listening', audioText: 'строитель', question: "Bu so'z qanday tarjima qilinadi?", options: ['bemor', 'bobo', 'quruvchi', 'qaynona'], answer: 'quruvchi' },
              { type: 'choice', dir: 'ru2uz', prompt: 'бухгалтер', options: ['dushman', 'kelin', 'mehmon', 'hisobchi'], answer: 'hisobchi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'uchuvchi', options: ['охотник', 'пилот, летчик', 'наследник, наследница', 'учник, ученица'], answer: 'пилот, летчик' },
              { type: 'match', pairs: [{ ru: 'инженер', uz: 'muhandis' }, { ru: 'учитель(ница)', uz: 'o’qituvchi' }, { ru: 'строитель', uz: 'quruvchi' }, { ru: 'бухгалтер', uz: 'hisobchi' }, { ru: 'пилот, летчик', uz: 'uchuvchi' }, { ru: 'мясник', uz: 'qassob' }] },
            ],
          },
          {
            id: 1014, title: '14-qism', icon: CircleUserRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'sotuvchi', options: ['свекор, тесть', 'сирота', 'продавец, продавщица', 'брат'], answer: 'продавец, продавщица' },
              { type: 'choice', dir: 'ru2uz', prompt: 'торговец', options: ['savdogar', 'ayol kishi', 'chol', 'qiz farzand'], answer: 'savdogar' },
              { type: 'listening', audioText: 'игрок', question: "Bu so'z qanday tarjima qilinadi?", options: ['dada', 'erkak kishi', 'bemor', 'o’yinchi'], answer: 'o’yinchi' },
              { type: 'choice', dir: 'ru2uz', prompt: 'танцор, танцовщица', options: ['elchi', 'odam', 'buvi', 'raqqos(a)'], answer: 'raqqos(a)' },
              { type: 'choice', dir: 'uz2ru', prompt: 'qo’shiqchi', options: ['певец', 'молодость, юность', 'сваха', 'человек'], answer: 'певец' },
              { type: 'match', pairs: [{ ru: 'продавец, продавщица', uz: 'sotuvchi' }, { ru: 'торговец', uz: 'savdogar' }, { ru: 'игрок', uz: 'o’yinchi' }, { ru: 'танцор, танцовщица', uz: 'raqqos(a)' }, { ru: 'певец', uz: 'qo’shiqchi' }, { ru: 'художник', uz: 'rassom' }] },
            ],
          },
          {
            id: 1015, title: '15-qism', icon: Fingerprint,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'bemor', options: ['учеба', 'продавец, продавщица', 'больной, пациент', 'рабочий'], answer: 'больной, пациент' },
              { type: 'choice', dir: 'ru2uz', prompt: 'виновник', options: ['xodim', 'janob, xonim', 'aybdor', 'qul'], answer: 'aybdor' },
              { type: 'listening', audioText: 'преступник', question: "Bu so'z qanday tarjima qilinadi?", options: ['tovlamachi', 'o’g’il bola', 'jinoyatchi', 'bola'], answer: 'jinoyatchi' },
              { type: 'choice', dir: 'ru2uz', prompt: 'грешник', options: ['gunohkor', 'ziyoratchi', 'opa, singil', 'o’gayona'], answer: 'gunohkor' },
              { type: 'choice', dir: 'uz2ru', prompt: 'dengizchi', options: ['жена', 'обманщик', 'ребенок', 'моряк, матрос'], answer: 'моряк, матрос' },
              { type: 'match', pairs: [{ ru: 'больной, пациент', uz: 'bemor' }, { ru: 'виновник', uz: 'aybdor' }, { ru: 'преступник', uz: 'jinoyatchi' }, { ru: 'грешник', uz: 'gunohkor' }, { ru: 'моряк, матрос', uz: 'dengizchi' }, { ru: 'портной', uz: 'tikuvchi' }] },
            ],
          },
          {
            id: 1016, title: '16-qism', icon: UserCheck,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'yo’lboshchi', options: ['пол', 'бабушка', 'хвастун', 'лидер, вождь'], answer: 'лидер, вождь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'начальник, руководитель', options: ['sovchi', 'boshliq, rahbar', 'qari odam', 'ovchi'], answer: 'boshliq, rahbar' },
              { type: 'listening', audioText: 'любовник', question: "Bu so'z qanday tarjima qilinadi?", options: ['oshiq', 'o’yinchi', 'voyaga yetgan', 'savdogar'], answer: 'oshiq' },
              { type: 'choice', dir: 'ru2uz', prompt: 'любовница', options: ['murda', 'chaqaloq, go\'dak', 'aybdor', 'ma’shuqa'], answer: 'ma’shuqa' },
              { type: 'choice', dir: 'uz2ru', prompt: 'qo’riqchi', options: ['охранник', 'мачеха', 'строитель', 'папа'], answer: 'охранник' },
              { type: 'match', pairs: [{ ru: 'лидер, вождь', uz: 'yo’lboshchi' }, { ru: 'начальник, руководитель', uz: 'boshliq, rahbar' }, { ru: 'любовник', uz: 'oshiq' }, { ru: 'любовница', uz: 'ma’shuqa' }, { ru: 'охранник', uz: 'qo’riqchi' }, { ru: 'сторож', uz: 'qorovul' }] },
            ],
          },
          {
            id: 1017, title: '17-qism', icon: Users,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'elchi', options: ['посол', 'любовница', 'представитель, агент', 'заложник'], answer: 'посол' },
              { type: 'choice', dir: 'ru2uz', prompt: 'раб, рабыня', options: ['janob, xonim', 'qul', 'chol', 'xalq'], answer: 'qul' },
              { type: 'listening', audioText: 'слуга, служитель', question: "Bu so'z qanday tarjima qilinadi?", options: ['xizmatchi', 'insoniyat', 'amma, xola', 'murda'], answer: 'xizmatchi' },
              { type: 'choice', dir: 'ru2uz', prompt: 'горничная, служанка', options: ['insoniyat', 'oqsoch', 'o’gayona', 'qiz jiyan'], answer: 'oqsoch' },
              { type: 'choice', dir: 'uz2ru', prompt: 'ajdodlar', options: ['рабочий', 'предки', 'сторож', 'мясник'], answer: 'предки' },
              { type: 'match', pairs: [{ ru: 'посол', uz: 'elchi' }, { ru: 'раб, рабыня', uz: 'qul' }, { ru: 'слуга, служитель', uz: 'xizmatchi' }, { ru: 'горничная, служанка', uz: 'oqsoch' }, { ru: 'предки', uz: 'ajdodlar' }, { ru: 'пророк', uz: 'payg’ambar' }] },
            ],
          },
          {
            id: 1018, title: '18-qism', icon: UserCircle,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'ziyoratchi', options: ['человечество', 'дежурный', 'племянник', 'паломник'], answer: 'паломник' },
              { type: 'choice', dir: 'ru2uz', prompt: 'раненый', options: ['ota-ona', 'aldovchi', 'yarador', 'qul'], answer: 'yarador' },
              { type: 'listening', audioText: 'господин, госпожа', question: "Bu so'z qanday tarjima qilinadi?", options: ['ayol kishi', 'janob, xonim', 'amma, xola', 'bola'], answer: 'janob, xonim' },
              { type: 'choice', dir: 'ru2uz', prompt: 'труп', options: ['yoshlar', 'murda', 'kampir', 'ona'], answer: 'murda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'aldovchi', options: ['обманщик', 'племянница', 'раб, рабыня', 'учеба'], answer: 'обманщик' },
              { type: 'match', pairs: [{ ru: 'паломник', uz: 'ziyoratchi' }, { ru: 'раненый', uz: 'yarador' }, { ru: 'господин, госпожа', uz: 'janob, xonim' }, { ru: 'труп', uz: 'murda' }, { ru: 'обманщик', uz: 'aldovchi' }, { ru: 'лжец, врун, лгун(ья)', uz: 'yolg’onchi' }] },
            ],
          },
          {
            id: 1019, title: '19-qism', icon: Contact,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'tovlamachi', options: ['пророк', 'раб, рабыня', 'мошенник', 'жених'], answer: 'мошенник' },
              { type: 'choice', dir: 'ru2uz', prompt: 'карлик, лилипут', options: ['oshiq', 'pakana', 'ayol kishi', 'pochcha, kuyov'], answer: 'pakana' },
              { type: 'listening', audioText: 'убийца', question: "Bu so'z qanday tarjima qilinadi?", options: ['qaynaka', 'xotin', 'ona', 'qotil'], answer: 'qotil' },
              { type: 'choice', dir: 'ru2uz', prompt: 'известный', options: ['ota', 'fazogir', 'taniqli', 'qo’riqchi'], answer: 'taniqli' },
              { type: 'choice', dir: 'uz2ru', prompt: 'mashhur', options: ['моряк, матрос', 'невеста', 'знаменитый', 'хвастун'], answer: 'знаменитый' },
              { type: 'match', pairs: [{ ru: 'мошенник', uz: 'tovlamachi' }, { ru: 'карлик, лилипут', uz: 'pakana' }, { ru: 'убийца', uz: 'qotil' }, { ru: 'известный', uz: 'taniqli' }, { ru: 'знаменитый', uz: 'mashhur' }, { ru: 'подхалим, подлиза', uz: 'laganbardor' }] },
            ],
          },
          {
            id: 1020, title: '20-qism', icon: SquareUser,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'homiy', options: ['традиция', 'карлик, лилипут', 'спонсор', 'космонавт'], answer: 'спонсор' },
              { type: 'choice', dir: 'ru2uz', prompt: 'поручитель', options: ['ovchi', 'oshiq', 'kafil', 'odamlar'], answer: 'kafil' },
              { type: 'listening', audioText: 'повар, повариха, кухарка', question: "Bu so'z qanday tarjima qilinadi?", options: ['turmush o’rtog’', 'oshpaz', 'opa, singil', 'ish'], answer: 'oshpaz' },
              { type: 'choice', dir: 'ru2uz', prompt: 'космонавт', options: ['qari odam', 'bemor', 'jinoyatchi', 'fazogir'], answer: 'fazogir' },
              { type: 'choice', dir: 'uz2ru', prompt: 'tish duxtur', options: ['игрок', 'повар, повариха, кухарка', 'зубной врач, стоматолог', 'паломник'], answer: 'зубной врач, стоматолог' },
              { type: 'match', pairs: [{ ru: 'спонсор', uz: 'homiy' }, { ru: 'поручитель', uz: 'kafil' }, { ru: 'повар, повариха, кухарка', uz: 'oshpaz' }, { ru: 'космонавт', uz: 'fazogir' }, { ru: 'зубной врач, стоматолог', uz: 'tish duxtur' }, { ru: 'охотник', uz: 'ovchi' }] },
            ],
          },
          {
            id: 1021, title: '21-qism', icon: UsersRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'yordamchi', options: ['молодость, юность', 'помощник(ца)', 'зять', 'свояченица (сестра жены)'], answer: 'помощник(ца)' },
              { type: 'choice', dir: 'ru2uz', prompt: 'дежурный', options: ['navbatchi', 'qaynona', 'sovchi', 'jins'], answer: 'navbatchi' },
              { type: 'listening', audioText: 'хвастун', question: "Bu so'z qanday tarjima qilinadi?", options: ['maqtanchoq', 'taniqli', 'janob, xonim', 'haydovchi'], answer: 'maqtanchoq' },
              { type: 'choice', dir: 'ru2uz', prompt: 'заложник', options: ['qaynaka', 'xodim', 'asir', 'oqsoch'], answer: 'asir' },
              { type: 'choice', dir: 'uz2ru', prompt: 'merosxo’r', options: ['папа', 'народ', 'наследник, наследница', 'человек'], answer: 'наследник, наследница' },
              { type: 'choice', dir: 'ru2uz', prompt: 'представитель, агент', options: ['yoshlar', 'vakil', 'ma’shuqa', 'qiz jiyan'], answer: 'vakil' },
              { type: 'match', pairs: [{ ru: 'помощник(ца)', uz: 'yordamchi' }, { ru: 'дежурный', uz: 'navbatchi' }, { ru: 'хвастун', uz: 'maqtanchoq' }, { ru: 'заложник', uz: 'asir' }, { ru: 'наследник, наследница', uz: 'merosxo’r' }, { ru: 'представитель, агент', uz: 'vakil' }, { ru: 'сваха', uz: 'sovchi' }] },
            ],
          }
        ],
      },
    ],
  },
];

const X_PATTERN = [0, -72, 0, 72];
const Y_SPACING = 112;
function nodeX(i) { return 150 + X_PATTERN[i % X_PATTERN.length]; }
function nodeY(i) { return 55 + i * Y_SPACING; }

function buildPathD(n) {
  let d = `M${nodeX(0)},${nodeY(0)}`;
  for (let i = 1; i < n; i++) {
    const x0 = nodeX(i - 1), y0 = nodeY(i - 1), x1 = nodeX(i), y1 = nodeY(i);
    const my = (y0 + y1) / 2;
    d += ` C${x0},${my} ${x1},${my} ${x1},${y1}`;
  }
  return d;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Sana/seriya (streak) yordamchilari ----
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function daysBetween(a, b) {
  return Math.round((new Date(`${b}T00:00:00Z`) - new Date(`${a}T00:00:00Z`)) / 86400000);
}

// ---- Supabase mavjud bo'lmagan ustunlar uchun brauzerda zaxira saqlash ----
// (Supabase jadvalida hali gems/streak ustunlari yo'q bo'lsa ham ishlashda davom etadi)
function loadLocalProgress(userId) {
  try {
    const raw = localStorage.getItem(`uzd_progress_${userId || 'guest'}`);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function loadExtra(userId) {
  return loadLocalProgress(userId);
}
function saveExtra(userId, patch) {
  const merged = { ...loadLocalProgress(userId), ...patch };
  saveLocalProgress(userId, merged);
  return merged;
}
// Ilova ochilganda/kirilganda seriyani sana farqiga qarab hisoblaydi.
// Agar foydalanuvchi bitta kunni o'tkazib yuborsa-yu, "seriya muzlatgichi" bo'lsa, u sarflanadi va seriya saqlanadi.
function computeStreakOnLoad(extra) {
  if (!extra.lastActive) return { streak: 0, freezes: extra.streakFreezes || 0, freezeUsed: false };
  const gap = daysBetween(extra.lastActive, todayStr());
  if (gap <= 1) return { streak: extra.streak || 0, freezes: extra.streakFreezes || 0, freezeUsed: false };
  if (gap === 2 && (extra.streakFreezes || 0) > 0) {
    return { streak: extra.streak || 0, freezes: (extra.streakFreezes || 0) - 1, freezeUsed: true };
  }
  return { streak: 0, freezes: extra.streakFreezes || 0, freezeUsed: false };
}
function saveLocalProgress(userId, data) {
  try {
    localStorage.setItem(`uzd_progress_${userId || 'guest'}`, JSON.stringify(data));
  } catch (e) {
    // localStorage mavjud emas — jim o'tkazamiz
  }
}

// ---- Daraja aniqlash (placement) uchun tezkor test savollari ----
// Har bir darajadan (A1..C1) bittadan 'choice' turidagi savol tanlanadi.
function getPlacementQuestions() {
  return LEVELS.filter((lvl) => lvl.id !== 'LG').map((lvl, i) => {
    const lesson = lvl.units?.[0]?.lessons?.[0];
    if (!lesson) return null;
    const q = lesson.questions.find((qq) => qq.type === 'choice') || lesson.questions[0];
    if (!q) return null;
    return { levelIdx: i, levelLabel: lvl.label, q };
  }).filter(Boolean);
}

function starPoints(cx, cy, points, outerR, innerR) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

function speakRussian(text) {
  if (!SOUND_ENABLED) return;
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ru-RU';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

const RU_FONT = "'Golos Text', sans-serif";
const UZ_FONT = "'Manrope', sans-serif";
const eyebrow = { fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#1F8F84', fontWeight: 700, marginBottom: 10, fontFamily: UZ_FONT };

// ============================================================
// SUPABASE SOZLAMALARI
// Quyidagi ikki qiymatni Supabase loyihangizdagi
// Settings -> API sahifasidan olib almashtiring.
// ============================================================
const SUPABASE_URL = 'https://yykdlnnueunvtaiipywp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5a2Rsbm51ZXVudnRhaWlweXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwODAyODUsImV4cCI6MjEwMDY1NjI4NX0.k1rV5kfazBItTJsZeHXig0aMgg3CpClVFUq3nCC_TsE';

function supaConfigured() {
  return !SUPABASE_URL.includes('YOUR-PROJECT') && !SUPABASE_ANON_KEY.includes('YOUR-ANON-KEY');
}

// Sessiyani saqlash uchun yordamchi obyekt.
// Eslatma: window.storage faqat Claude Artifacts muhitida mavjud bo'ladi,
// haqiqiy saytda (masalan, Vercel'da) u mavjud emas — shuning uchun
// bu yerda oddiy brauzer localStorage ishlatiladi.
const localSession = {
  async get(key) {
    const v = localStorage.getItem(key);
    return v ? { value: v } : null;
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { key, value };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return { key, deleted: true };
  },
};

async function supaSignUp(email, password, name) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
    body: JSON.stringify({ email, password, data: { name } }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || data.error_description || data.error || "Ro'yxatdan o'tishda xatolik yuz berdi");
  return data;
}

async function supaSignIn(email, password) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || data.error_description || data.error || 'Kirishda xatolik yuz berdi');
  return data;
}

async function supaRefreshSession(refreshToken) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || 'Sessiya eskirgan');
  return data;
}

async function supaGetProfile(accessToken, userId) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}&select=*`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}` },
  });
  const data = await res.json();
  return Array.isArray(data) ? data[0] : null;
}

async function supaGetProgress(accessToken, userId) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/progress?user_id=eq.${userId}&select=*`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}` },
  });
  const data = await res.json();
  return Array.isArray(data) ? data[0] : null;
}

async function supaSaveProgress(accessToken, userId, progressData) {
  await fetch(`${SUPABASE_URL}/rest/v1/progress?user_id=eq.${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${accessToken}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ ...progressData, updated_at: new Date().toISOString() }),
  });
}

async function supaGetUser(accessToken) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Foydalanuvchi ma'lumotini olishda xatolik");
  return data;
}

function supaSignInWithGoogle() {
  const redirectTo = window.location.origin + window.location.pathname;
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(redirectTo)}`;
}

const AVATARS = [
  { id: 'panda', name: 'Panda', cost: 0 },
  { id: 'owl', name: "Boyo'g'li", cost: 600 },
  { id: 'fox', name: 'Tulki', cost: 800 },
  { id: 'lion', name: 'Arslon', cost: 1500 },
  { id: 'leopard', name: 'Leopard', cost: 5000 },
];

const ACCESSORIES = [
  { id: 'scarf', name: 'Sharf', cost: 150 },
  { id: 'glasses', name: "Ko'zoynak", cost: 200 },
  { id: 'cap', name: 'Kepka', cost: 300 },
];

const AVATAR_STYLES = {
  panda: { face: '#FFFFFF', ear: '#16181D', earShape: 'round' },
  owl: { face: '#E7D8BE', ear: '#B99B6B', earShape: 'tuft' },
  fox: { face: '#F7DFC0', ear: '#D2803D', earShape: 'pointy' },
  lion: { face: '#F3C25E', ear: '#D69A2D', earShape: 'mane' },
  leopard: { face: '#E9C687', ear: '#C99A52', earShape: 'round', spots: true },
};

function Mascot({ variant = 'panda', accessories = [], size = 96 }) {
  const st = AVATAR_STYLES[variant] || AVATAR_STYLES.panda;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block' }}>
      {st.earShape === 'mane' && (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
            const rad = (a * Math.PI) / 180;
            const cx = 60 + 50 * Math.cos(rad);
            const cy = 64 + 50 * Math.sin(rad);
            return <circle key={a} cx={cx} cy={cy} r={20} fill={st.ear} />;
          })}
        </g>
      )}
      {st.earShape === 'round' && (
        <>
          <circle cx="28" cy="26" r="17" fill={st.ear} />
          <circle cx="92" cy="26" r="17" fill={st.ear} />
        </>
      )}
      {st.earShape === 'pointy' && (
        <>
          <polygon points="14,38 34,4 46,34" fill={st.ear} />
          <polygon points="106,38 86,4 74,34" fill={st.ear} />
          <polygon points="20,34 34,14 40,32" fill="#FFF6EC" />
          <polygon points="100,34 86,14 80,32" fill="#FFF6EC" />
        </>
      )}
      {st.earShape === 'tuft' && (
        <>
          <polygon points="24,20 34,2 40,26" fill={st.ear} />
          <polygon points="96,20 86,2 80,26" fill={st.ear} />
        </>
      )}

      <circle cx="60" cy="64" r="46" fill={st.face} stroke="#16181D" strokeWidth="3" />

      {st.spots && (
        <>
          <ellipse cx="34" cy="40" rx="4.5" ry="3.5" fill="#8A5A26" />
          <ellipse cx="52" cy="28" rx="4" ry="3" fill="#8A5A26" />
          <ellipse cx="86" cy="40" rx="4.5" ry="3.5" fill="#8A5A26" />
          <ellipse cx="68" cy="26" rx="4" ry="3" fill="#8A5A26" />
          <ellipse cx="24" cy="70" rx="4" ry="3" fill="#8A5A26" />
          <ellipse cx="96" cy="70" rx="4" ry="3" fill="#8A5A26" />
          <ellipse cx="38" cy="98" rx="3.5" ry="2.8" fill="#8A5A26" />
          <ellipse cx="82" cy="98" rx="3.5" ry="2.8" fill="#8A5A26" />
        </>
      )}

      <ellipse cx="39" cy="62" rx="13" ry="17" fill="#16181D" transform="rotate(-14 39 62)" />
      <ellipse cx="81" cy="62" rx="13" ry="17" fill="#16181D" transform="rotate(14 81 62)" />
      <circle cx="40" cy="63" r="5" fill="#fff" />
      <circle cx="80" cy="63" r="5" fill="#fff" />
      <circle cx="41.5" cy="64.5" r="2.6" fill="#16181D" />
      <circle cx="78.5" cy="64.5" r="2.6" fill="#16181D" />
      <ellipse cx="60" cy="80" rx="8" ry="6" fill="#16181D" />
      <path d="M60 85 L60 90" stroke="#16181D" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 92 Q60 99 70 92" stroke="#16181D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="82" r="6.5" fill="#F6B4A0" opacity="0.65" />
      <circle cx="88" cy="82" r="6.5" fill="#F6B4A0" opacity="0.65" />

      {accessories.includes('scarf') && (
        <g>
          <path d="M24 96 Q60 112 96 96 L96 104 Q60 120 24 104 Z" fill="#C1502E" />
          <path d="M52 108 L52 122 L64 118 L58 108 Z" fill="#A83F20" />
        </g>
      )}
      {accessories.includes('glasses') && (
        <g stroke="#16181D" strokeWidth="3" fill="none">
          <circle cx="40" cy="63" r="12" fill="rgba(255,255,255,0.15)" />
          <circle cx="80" cy="63" r="12" fill="rgba(255,255,255,0.15)" />
          <path d="M52 60 L68 60" />
        </g>
      )}
      {accessories.includes('cap') && (
        <g>
          <path d="M16 30 Q60 -14 104 30 L98 40 Q60 6 22 40 Z" fill="#2FA89C" />
          <path d="M60 8 Q92 8 98 40 L82 36 Q70 14 60 8 Z" fill="#1F7A73" />
        </g>
      )}
    </svg>
  );
}

// Har bir daraja uchun madaniy tanaffus: haqiqiy, rasmiy YouTube manbalaridan olingan
// qo'shiq va multfilm (faqat havola sifatida — matn/qo'shiq so'zlari hech qayerda
// nusxalanmagan, mualliflik huquqini hurmat qilish uchun).
const MEDIA_BREAKS = {
  A1: {
    songTitle: "«Пусть бегут неуклюже» — Krokodil Gena qo'shig'i",
    songId: 't9g0HBEU30M',
    cartoonTitle: '«Крокодил Гена» (1969) — qisqa multfilm',
    cartoonId: 'HOmHqfOL2lA',
  },
  A2: {
    songTitle: '«Голубой вагон» — Cheburashka qo\'shig\'i',
    songId: 'eG8RG12QmwI',
    cartoonTitle: '«Чебурашка» (1971) — multfilm',
    cartoonId: 'rdfS_eJC6T0',
  },
  B1: {
    songTitle: "«Учат в школе» — bolalar qo'shig'i",
    songId: 'SC89Ddq53LY',
    cartoonTitle: '«Бременские музыканты» (1969) — musiqiy multfilm',
    cartoonId: 'SrMZlMb3wig',
  },
  C1: {
    songTitle: "«Учат в школе» — bolalar qo'shig'i",
    songId: 'SC89Ddq53LY',
    cartoonTitle: "«Простоквашино» — multfilm to'plami",
    cartoonId: 'w8T_2oJ6OFQ',
  },
  LG: {
    songTitle: '«Голубой вагон» — Cheburashka qo\'shig\'i',
    songId: 'eG8RG12QmwI',
    cartoonTitle: "«Простоквашино» — multfilm to'plami",
    cartoonId: 'w8T_2oJ6OFQ',
  },
};

const CONFETTI_CONFIG = [
  { tx: '-70px', ty: '-92px', delay: '0s', color: '#E3B23C' },
  { tx: '64px', ty: '-98px', delay: '0.04s', color: '#2FA89C' },
  { tx: '-102px', ty: '-24px', delay: '0.1s', color: '#C1502E' },
  { tx: '104px', ty: '-32px', delay: '0.08s', color: '#3F9142' },
  { tx: '-38px', ty: '-122px', delay: '0.15s', color: '#2FA89C' },
  { tx: '42px', ty: '-128px', delay: '0.12s', color: '#E3B23C' },
  { tx: '-116px', ty: '18px', delay: '0.2s', color: '#C1502E' },
  { tx: '118px', ty: '22px', delay: '0.18s', color: '#3F9142' },
  { tx: '-18px', ty: '-142px', delay: '0.22s', color: '#F6B4A0' },
  { tx: '20px', ty: '-146px', delay: '0.25s', color: '#2FA89C' },
  { tx: '-86px', ty: '-58px', delay: '0.3s', color: '#E3B23C' },
  { tx: '88px', ty: '-64px', delay: '0.28s', color: '#C1502E' },
];

// ---- Ovozli signallar (Web Audio API orqali sintez qilingan, tashqi fayl kerak emas) ----
let SOUND_ENABLED = true;
let __audioCtx = null;
function getAudioCtx() {
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  if (!__audioCtx) __audioCtx = new AC();
  if (__audioCtx.state === 'suspended') __audioCtx.resume();
  return __audioCtx;
}
function beep(freq, delay, duration, type = 'sine', volume = 0.2) {
  if (!SOUND_ENABLED) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0008, t + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.03);
}
function playCorrectSound() {
  beep(783.99, 0, 0.13, 'sine', 0.22);
  beep(1046.5, 0.09, 0.18, 'sine', 0.22);
}
function playWrongSound() {
  beep(220, 0, 0.16, 'triangle', 0.16);
  beep(174.61, 0.1, 0.24, 'triangle', 0.14);
}
function playMatchTickSound() {
  beep(880, 0, 0.09, 'sine', 0.15);
}
function playMismatchSound() {
  beep(196, 0, 0.14, 'triangle', 0.12);
}
function playLessonPassSound() {
  beep(523.25, 0, 0.14, 'sine', 0.22);
  beep(659.25, 0.11, 0.14, 'sine', 0.22);
  beep(783.99, 0.22, 0.14, 'sine', 0.22);
  beep(1046.5, 0.33, 0.3, 'sine', 0.25);
}
function playLessonRetrySound() {
  beep(392.0, 0, 0.14, 'triangle', 0.16);
  beep(329.63, 0.12, 0.24, 'triangle', 0.16);
}
function playHeartsOutSound() {
  beep(293.66, 0, 0.15, 'triangle', 0.14);
  beep(233.08, 0.12, 0.28, 'triangle', 0.14);
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [xp, setXp] = useState(100);
  const [streak, setStreak] = useState(0);
  const [streakFreezes, setStreakFreezes] = useState(0);
  const [hasBadge, setHasBadge] = useState(false);
  const [hints, setHints] = useState(0);
  const [ownedAvatars, setOwnedAvatars] = useState(['panda']);
  const [activeAvatar, setActiveAvatar] = useState('panda');
  const [ownedAccessories, setOwnedAccessories] = useState([]);
  const [equippedAccessories, setEquippedAccessories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [placementIdx, setPlacementIdx] = useState(0);
  const [placementSelected, setPlacementSelected] = useState(null);
  const [placementChecked, setPlacementChecked] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [ratings, setRatings] = useState({});
  const [activeLevelId, setActiveLevelId] = useState(null);
  const [activeUnitIdx, setActiveUnitIdx] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [selected, setSelected] = useState(null);
  const [options, setOptions] = useState([]);
  const [available, setAvailable] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [matchLeft, setMatchLeft] = useState([]);
  const [matchRight, setMatchRight] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [selLeft, setSelLeft] = useState(null);
  const [selRight, setSelRight] = useState(null);
  const [wrongFlash, setWrongFlash] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [failedRun, setFailedRun] = useState(false);
  const [lockMsg, setLockMsg] = useState(null);
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authMode, setAuthMode] = useState('signup');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [signupDone, setSignupDone] = useState(false);
  const [session, setSession] = useState(null);
  const [certLevelId, setCertLevelId] = useState(null);
  const [examMode, setExamMode] = useState(false);
  const [examLevelId, setExamLevelId] = useState(null);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examPassedLevels, setExamPassedLevels] = useState([]);

  const currentLevel = LEVELS.find((l) => l.id === selectedLevel);
  const activeUnit = activeLevelId != null && activeUnitIdx != null ? LEVELS.find((l) => l.id === activeLevelId).units[activeUnitIdx] : null;

  function findLesson(id) {
    for (const lv of LEVELS) for (const u of lv.units) for (const ls of u.lessons) if (ls.id === id) return ls;
    return null;
  }

  const activeLesson = examMode ? { id: 'exam', title: "Yakuniy imtihon", questions: examQuestions } : (activeLessonId != null ? findLesson(activeLessonId) : null);
  const activeQuestion = activeLesson ? activeLesson.questions[qIndex] : null;
  const hintEligible = !!(activeQuestion && activeQuestion.type !== 'order' && activeQuestion.type !== 'match' && !checked);

  // Ilova ochilganda saqlangan sessiyani window.storage'dan tiklashga harakat qilish
  async function applySessionData(accessToken, userId, profileFallback) {
    let prof = null;
    try {
      prof = await supaGetProfile(accessToken, userId);
    } catch (e) {
      prof = null;
    }
    setProfile(prof || profileFallback);
    setSession({ access_token: accessToken, user_id: userId });
    const prog = await supaGetProgress(accessToken, userId);
    const hasProgress = !!(prog && Array.isArray(prog.completed) && prog.completed.length > 0);
    if (prog) {
      if (Array.isArray(prog.completed)) setCompleted(prog.completed);
      if (prog.ratings) setRatings(prog.ratings);
      if (typeof prog.xp === 'number' && (prog.xp > 0 || hasProgress)) setXp(prog.xp);
      else setXp(100);
    } else {
      setXp(100);
    }
    const extra = loadExtra(userId);
    const sc = computeStreakOnLoad(extra);
    setStreak(sc.streak);
    setStreakFreezes(sc.freezes);
    if (sc.freezeUsed) saveExtra(userId, { streakFreezes: sc.freezes });
    setHasBadge(!!extra.hasBadge);
    setHints(extra.hints || 0);
    setOwnedAvatars(extra.ownedAvatars && extra.ownedAvatars.length ? extra.ownedAvatars : ['panda']);
    setActiveAvatar(extra.activeAvatar || 'panda');
    setOwnedAccessories(extra.ownedAccessories || []);
    setEquippedAccessories(extra.equippedAccessories || []);
    setExamPassedLevels(extra.examPassedLevels || []);
    if (!extra.placementDone && !hasProgress) {
      setScreen('placement-intro');
    }
  }

  useEffect(() => {
    (async () => {
      if (!supaConfigured()) {
        setProfileLoading(false);
        return;
      }
      // Google bilan kirishdan qaytgan bo'lsa, URL'dagi hash'da tokenlar keladi
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        try {
          const params = new URLSearchParams(hash.slice(1));
          const accessToken = params.get('access_token');
          const refreshToken = params.get('refresh_token');
          if (accessToken) {
            const user = await supaGetUser(accessToken);
            await localSession.set('session', JSON.stringify({ access_token: accessToken, refresh_token: refreshToken, user_id: user.id }), false);
            const displayName = user.user_metadata?.full_name || user.user_metadata?.name || '';
            await applySessionData(accessToken, user.id, { name: displayName, email: user.email || '' });
          }
        } catch (e) {
          setAuthError("Google orqali kirishda xatolik yuz berdi");
        }
        window.history.replaceState({}, '', window.location.pathname + window.location.search);
        setProfileLoading(false);
        return;
      }
      try {
        const s = await localSession.get('session', false);
        if (s && s.value) {
          const saved = JSON.parse(s.value);
          let accessToken = saved.access_token;
          const userId = saved.user_id;
          let prof = null;
          try {
            prof = await supaGetProfile(accessToken, userId);
          } catch (e) {
            prof = null;
          }
          if (!prof && saved.refresh_token) {
            try {
              const refreshed = await supaRefreshSession(saved.refresh_token);
              accessToken = refreshed.access_token;
              await localSession.set('session', JSON.stringify({ access_token: refreshed.access_token, refresh_token: refreshed.refresh_token, user_id: refreshed.user.id }), false);
              prof = await supaGetProfile(accessToken, refreshed.user.id);
            } catch (e) {
              prof = null;
            }
          }
          if (prof) {
            await applySessionData(accessToken, userId, { name: '', email: '' });
          } else {
            await localSession.delete('session', false).catch(() => {});
          }
        }
      } catch (e) {
        // saqlangan sessiya yo'q — kirish ekrani ko'rsatiladi
      }
      try {
        const v = localStorage.getItem('uzd_sound');
        if (v === '0') { setSoundOn(false); SOUND_ENABLED = false; }
      } catch (e) {
        // localStorage mavjud emas
      }
      setProfileLoading(false);
    })();
  }, []);

  // Progress o'zgargan sayin Supabase'dagi progress jadvaliga saqlash
  useEffect(() => {
    if (!session) return;
    supaSaveProgress(session.access_token, session.user_id, { completed, ratings, xp }).catch(() => {});
  }, [completed, ratings, xp, session]);

  async function submitAuth() {
    setAuthError('');
    const email = emailInput.trim();
    const password = passwordInput;
    const name = nameInput.trim();
    if (!email || !password || (authMode === 'signup' && !name)) {
      setAuthError("Barcha maydonlarni to'ldiring");
      return;
    }
    setAuthLoading(true);
    try {
      if (authMode === 'signup') {
        const data = await supaSignUp(email, password, name);
        if (data.access_token) {
          await localSession.set('session', JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token, user_id: data.user.id }), false);
          setSession({ access_token: data.access_token, user_id: data.user.id });
          setProfile({ name, email });
          setXp(100);
          setScreen('placement-intro');
        } else {
          setSignupDone(true);
        }
      } else {
        const data = await supaSignIn(email, password);
        await localSession.set('session', JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token, user_id: data.user.id }), false);
        await applySessionData(data.access_token, data.user.id, { name: '', email });
      }
    } catch (e) {
      setAuthError(e.message || "Noma'lum xatolik yuz berdi");
    }
    setAuthLoading(false);
  }

  function signOut() {
    localSession.delete('session', false).catch(() => {});
    setSession(null);
    setProfile(null);
    setCompleted([]);
    setRatings({});
    setXp(0);
    setStreak(0);
    setStreakFreezes(0);
    setHasBadge(false);
    setHints(0);
    setOwnedAvatars(['panda']);
    setActiveAvatar('panda');
    setOwnedAccessories([]);
    setEquippedAccessories([]);
    setExamPassedLevels([]);
    setExamMode(false);
    setMenuOpen(false);
    setScreen('home');
  }

  function isLevelComplete(level) {
    const total = level.units.reduce((s, u) => s + u.lessons.length, 0);
    const done = level.units.reduce((s, u) => s + u.lessons.filter((ls) => completed.includes(ls.id)).length, 0);
    return total > 0 && done === total;
  }

  function isLevelUnlocked(levelId) {
    if (levelId === 'LG') return true;
    const idx = LEVELS.findIndex((l) => l.id === levelId);
    if (idx <= 0) return true;
    return isLevelComplete(LEVELS[idx - 1]);
  }

  function isUnitLocked(levelId, unitIdx) {
    if (!isLevelUnlocked(levelId)) return true;
    if (unitIdx === 0) return false;
    const level = LEVELS.find((l) => l.id === levelId);
    const prevUnit = level.units[unitIdx - 1];
    return !prevUnit.lessons.every((ls) => completed.includes(ls.id));
  }

  function getUnitStatus(levelId, unitIdx) {
    const level = LEVELS.find((l) => l.id === levelId);
    const unit = level.units[unitIdx];
    const allDone = unit.lessons.every((ls) => completed.includes(ls.id));
    if (allDone) return 'completed';
    if (isUnitLocked(levelId, unitIdx)) return 'locked';
    return 'active';
  }

  function isLessonLocked(unit, idx) {
    if (idx === 0) return false;
    return !completed.includes(unit.lessons[idx - 1].id);
  }

  function getLessonStatus(unit, idx) {
    const lesson = unit.lessons[idx];
    if (completed.includes(lesson.id)) return 'completed';
    if (isLessonLocked(unit, idx)) return 'locked';
    return 'active';
  }

  function openUnit(levelId, unitIdx) {
    if (isUnitLocked(levelId, unitIdx)) return;
    setActiveLevelId(levelId);
    setActiveUnitIdx(unitIdx);
    setScreen('path');
  }

  function goHome() {
    setScreen('home');
  }

  function initQuestion(lesson, idx) {
    const q = lesson.questions[idx];
    if (q.type === 'order') {
      setAvailable(shuffle(q.tiles.map((t, i) => ({ t, i }))));
      setChosen([]);
    } else if (q.type === 'match') {
      setMatchLeft(shuffle(q.pairs.map((p, i) => ({ pid: i, text: p.ru }))));
      setMatchRight(shuffle(q.pairs.map((p, i) => ({ pid: i, text: p.uz }))));
      setMatchedIds([]);
      setSelLeft(null);
      setSelRight(null);
    } else {
      setOptions(shuffle(q.options));
      setSelected(null);
    }
    setChecked(false);
    setIsCorrect(null);
  }

  function handleNodeClick(idx) {
    const lesson = activeUnit.lessons[idx];
    if (isLessonLocked(activeUnit, idx)) {
      setLockMsg({ id: lesson.id, text: 'Avval oldingi darsni tugating' });
      setTimeout(() => setLockMsg(null), 1400);
      return;
    }
    startLesson(lesson.id);
  }

  function startLesson(id) {
    const lesson = findLesson(id);
    setActiveLessonId(id);
    setQIndex(0);
    setHearts(5);
    setCorrectCount(0);
    setSessionXp(0);
    setFailedRun(false);
    initQuestion(lesson, 0);
    setScreen('lesson');
  }

  function startExam(levelId) {
    const level = LEVELS.find((l) => l.id === levelId);
    const pool = [];
    level.units.forEach((u) => u.lessons.forEach((ls) => ls.questions.forEach((q) => pool.push(q))));
    const sampled = shuffle(pool).slice(0, Math.min(30, pool.length));
    setExamQuestions(sampled);
    setExamMode(true);
    setExamLevelId(levelId);
    setActiveLessonId(null);
    setQIndex(0);
    setHearts(10);
    setCorrectCount(0);
    setSessionXp(0);
    setFailedRun(false);
    initQuestion({ questions: sampled }, 0);
    setScreen('lesson');
  }

  function selectChoice(i) {
    if (checked) return;
    setSelected(options[i]);
  }

  function pickTile(i) {
    if (checked) return;
    const tile = available[i];
    setAvailable(available.filter((_, idx) => idx !== i));
    setChosen([...chosen, tile]);
  }

  function removeTile(i) {
    if (checked) return;
    const tile = chosen[i];
    setChosen(chosen.filter((_, idx) => idx !== i));
    setAvailable([...available, tile]);
  }

  function clickLeft(pid) {
    if (checked || matchedIds.includes(pid)) return;
    if (selRight != null) attemptMatch(pid, selRight);
    else setSelLeft(pid);
  }

  function clickRight(pid) {
    if (checked || matchedIds.includes(pid)) return;
    if (selLeft != null) attemptMatch(selLeft, pid);
    else setSelRight(pid);
  }

  function attemptMatch(l, r) {
    if (l === r) {
      const newMatched = [...matchedIds, l];
      setMatchedIds(newMatched);
      setSelLeft(null);
      setSelRight(null);
      setSessionXp((x) => x + 5);
      if (newMatched.length === activeQuestion.pairs.length) {
        setChecked(true);
        setIsCorrect(true);
        setCorrectCount((c) => c + 1);
        playCorrectSound();
      } else {
        playMatchTickSound();
      }
    } else {
      setWrongFlash({ l, r });
      setSelLeft(null);
      setSelRight(null);
      playMismatchSound();
      setTimeout(() => setWrongFlash(null), 500);
    }
  }

  function bumpStreakForToday() {
    const userId = session ? session.user_id : 'guest';
    const extra = loadExtra(userId);
    const today = todayStr();
    let newStreak;
    if (extra.lastActive === today) {
      newStreak = extra.streak || streak || 1;
    } else if (extra.lastActive && daysBetween(extra.lastActive, today) === 1) {
      newStreak = (extra.streak || streak || 0) + 1;
    } else {
      newStreak = 1;
    }
    saveExtra(userId, { streak: newStreak, lastActive: today });
    setStreak(newStreak);
  }

  function buyAvatar(id) {
    const av = AVATARS.find((a) => a.id === id);
    if (!av || ownedAvatars.includes(id) || xp < av.cost) return;
    const userId = session ? session.user_id : 'guest';
    const newOwned = [...ownedAvatars, id];
    setXp((x) => x - av.cost);
    setOwnedAvatars(newOwned);
    setActiveAvatar(id);
    saveExtra(userId, { ownedAvatars: newOwned, activeAvatar: id });
  }

  function selectAvatar(id) {
    if (!ownedAvatars.includes(id)) return;
    const userId = session ? session.user_id : 'guest';
    setActiveAvatar(id);
    saveExtra(userId, { activeAvatar: id });
  }

  function buyAccessory(id) {
    const ac = ACCESSORIES.find((a) => a.id === id);
    if (!ac || ownedAccessories.includes(id) || xp < ac.cost) return;
    const userId = session ? session.user_id : 'guest';
    const newOwned = [...ownedAccessories, id];
    const newEquipped = [...equippedAccessories, id];
    setXp((x) => x - ac.cost);
    setOwnedAccessories(newOwned);
    setEquippedAccessories(newEquipped);
    saveExtra(userId, { ownedAccessories: newOwned, equippedAccessories: newEquipped });
  }

  function toggleAccessory(id) {
    if (!ownedAccessories.includes(id)) return;
    const userId = session ? session.user_id : 'guest';
    const newEquipped = equippedAccessories.includes(id) ? equippedAccessories.filter((a) => a !== id) : [...equippedAccessories, id];
    setEquippedAccessories(newEquipped);
    saveExtra(userId, { equippedAccessories: newEquipped });
  }

  function buyStreakFreeze() {
    if (streakFreezes >= 2 || xp < 60) return;
    const userId = session ? session.user_id : 'guest';
    const nf = streakFreezes + 1;
    setXp((x) => x - 60);
    setStreakFreezes(nf);
    saveExtra(userId, { streakFreezes: nf });
  }

  function buyBadge() {
    if (hasBadge || xp < 150) return;
    const userId = session ? session.user_id : 'guest';
    setXp((x) => x - 150);
    setHasBadge(true);
    saveExtra(userId, { hasBadge: true });
  }

  function buyHints() {
    if (xp < 30) return;
    const userId = session ? session.user_id : 'guest';
    const nh = hints + 3;
    setXp((x) => x - 30);
    setHints(nh);
    saveExtra(userId, { hints: nh });
  }

  function useHint() {
    if (hints <= 0 || checked || !activeQuestion) return;
    if (activeQuestion.type === 'order' || activeQuestion.type === 'match') return;
    const correct = activeQuestion.answer;
    const wrongs = options.filter((o) => o !== correct);
    if (wrongs.length <= 1) return;
    const keepWrong = wrongs[Math.floor(Math.random() * wrongs.length)];
    const userId = session ? session.user_id : 'guest';
    const nh = hints - 1;
    setOptions(shuffle([correct, keepWrong]));
    setHints(nh);
    saveExtra(userId, { hints: nh });
  }

  function reviveWithGems() {
    if (xp < 15 || !activeLesson) return;
    setXp((x) => x - 15);
    setHearts(2);
    setFailedRun(false);
    initQuestion(activeLesson, qIndex);
    setScreen('lesson');
  }

  function toggleSound() {
    const v = !soundOn;
    setSoundOn(v);
    SOUND_ENABLED = v;
    try {
      localStorage.setItem('uzd_sound', v ? '1' : '0');
    } catch (e) {
      // localStorage mavjud emas
    }
  }

  function answerPlacement(opt) {
    if (placementChecked) return;
    const qs = getPlacementQuestions();
    const cur = qs[placementIdx];
    if (!cur) return;
    const correct = opt === cur.q.answer;
    setPlacementSelected(opt);
    setPlacementChecked(true);
    if (correct) playCorrectSound();
    else playWrongSound();
    setTimeout(() => {
      if (!correct) {
        finishPlacement(placementIdx - 1, qs);
        return;
      }
      if (placementIdx + 1 >= qs.length) {
        finishPlacement(placementIdx, qs);
        return;
      }
      setPlacementIdx(placementIdx + 1);
      setPlacementSelected(null);
      setPlacementChecked(false);
    }, 550);
  }

  function skipPlacement() {
    const userId = session ? session.user_id : 'guest';
    saveExtra(userId, { placementDone: true });
    setSelectedLevel(LEVELS[0].id);
    setScreen('home');
  }

  function finishPlacement(correctUpToIdx, qs) {
    const userId = session ? session.user_id : 'guest';
    if (correctUpToIdx >= 0) {
      const idsToComplete = [];
      for (let i = 0; i <= correctUpToIdx; i++) {
        const lvl = LEVELS[qs[i].levelIdx];
        lvl.units.forEach((u) => u.lessons.forEach((ls) => idsToComplete.push(ls.id)));
      }
      setCompleted((c) => Array.from(new Set([...c, ...idsToComplete])));
      setRatings((r) => {
        const nr = { ...r };
        idsToComplete.forEach((id) => {
          if (!nr[id]) nr[id] = 2;
        });
        return nr;
      });
      const nextIdx = Math.min(qs[correctUpToIdx].levelIdx + 1, LEVELS.length - 1);
      setSelectedLevel(LEVELS[nextIdx].id);
      setXp((x) => x + 30);
    } else {
      setSelectedLevel(LEVELS[0].id);
    }
    saveExtra(userId, { placementDone: true });
    setScreen('home');
  }

  function checkAnswer() {
    const q = activeQuestion;
    if (q.type === 'match') return;
    let correct;
    if (q.type === 'order') {
      if (chosen.length !== q.tiles.length) return;
      correct = chosen.map((c) => c.t).join(' ') === q.answer;
    } else {
      if (selected == null) return;
      correct = selected === q.answer;
    }
    setIsCorrect(correct);
    setChecked(true);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setSessionXp((x) => x + 10);
      playCorrectSound();
    } else {
      setHearts((h) => Math.max(0, h - 1));
      playWrongSound();
    }
  }

  function nextQuestion() {
    if (hearts <= 0) {
      setFailedRun(true);
      playHeartsOutSound();
      setScreen('summary');
      return;
    }
    if (qIndex + 1 >= activeLesson.questions.length) {
      const total = activeLesson.questions.length;
      const accuracy = correctCount / total;
      const perfect = correctCount === total;
      const passed = accuracy >= 0.7;
      const bonus = perfect ? 20 : 0;
      setXp((x) => x + sessionXp + bonus);
      bumpStreakForToday();
      if (examMode) {
        if (passed) {
          const userId = session ? session.user_id : 'guest';
          const newPassed = examPassedLevels.includes(examLevelId) ? examPassedLevels : [...examPassedLevels, examLevelId];
          setExamPassedLevels(newPassed);
          saveExtra(userId, { examPassedLevels: newPassed });
        }
        setFailedRun(false);
        if (passed) playLessonPassSound();
        else playLessonRetrySound();
        setScreen('summary');
        return;
      }
      if (passed) {
        setCompleted((c) => (c.includes(activeLesson.id) ? c : [...c, activeLesson.id]));
      }
      const stars = perfect ? 3 : passed ? 2 : 1;
      setRatings((r) => ({ ...r, [activeLesson.id]: Math.max(stars, r[activeLesson.id] || 0) }));
      setFailedRun(false);
      if (passed) playLessonPassSound();
      else playLessonRetrySound();
      setScreen('summary');
      return;
    }
    const nextIdx = qIndex + 1;
    setQIndex(nextIdx);
    initQuestion(activeLesson, nextIdx);
  }

  function retryLesson() {
    if (examMode) startExam(examLevelId);
    else startLesson(activeLessonId);
  }

  function exitToPath() {
    if (examMode) {
      setExamMode(false);
      setScreen('home');
    } else {
      setScreen('path');
    }
  }

  const pathD = activeUnit ? buildPathD(activeUnit.lessons.length) : '';
  const pathHeight = activeUnit ? nodeY(activeUnit.lessons.length - 1) + 90 : 0;

  const optionsAreRussian = activeQuestion
    ? activeQuestion.type === 'fill_blank' || activeQuestion.type === 'gender' || activeQuestion.type === 'whowhat' || activeQuestion.type === 'plural'
      ? true
      : activeQuestion.type === 'listening' || activeQuestion.type === 'reading'
      ? false
      : activeQuestion.dir === 'uz2ru'
    : true;
  const promptIsRussian = activeQuestion && activeQuestion.type === 'choice' ? activeQuestion.dir === 'ru2uz' : false;
  const ready = activeQuestion
    ? activeQuestion.type === 'order'
      ? chosen.length === activeQuestion.tiles.length
      : selected != null
    : false;
  const summaryAccuracy = activeLesson ? Math.round((correctCount / activeLesson.questions.length) * 100) : 0;
  const summaryPassed = summaryAccuracy >= 70;

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', borderRadius: 28, overflow: 'hidden', boxShadow: '0 25px 60px -20px rgba(11,32,54,0.45)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes pulseGlow { 0%,100% { filter: drop-shadow(0 0 0px #E3B23C); } 50% { filter: drop-shadow(0 0 9px #E3B23C); } }
        @keyframes shakeX { 0%,100% { transform: translateX(0); } 20%,60% { transform: translateX(-5px); } 40%,80% { transform: translateX(5px); } }
        @keyframes popIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pandaPop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          55% { transform: scale(1.18) rotate(5deg); opacity: 1; }
          75% { transform: scale(0.94) rotate(-3deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes confettiBurst {
          0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1); opacity: 0; }
        }
        @keyframes riseIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .pulse-node { animation: pulseGlow 2.2s ease-in-out infinite; }
        .shake { animation: shakeX .35s ease; }
        .pop-in { animation: popIn .25s ease; }
        .panda-pop { animation: pandaPop .65s cubic-bezier(.34,1.56,.64,1) both; }
        .confetti-wrap { position: absolute; inset: 0; pointer-events: none; }
        .confetti-dot { position: absolute; left: 50%; top: 50%; width: 9px; height: 9px; border-radius: 3px; animation: confettiBurst .85s ease-out both; }
        .summary-rise { opacity: 0; animation: riseIn .5s ease both; }
        .opt-btn:hover { border-color: #8FCFC7 !important; }
        .tile-btn:hover { border-color: #8FCFC7 !important; }
        .primary-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #1F7A73 !important; }
        .level-tab { transition: background .15s, color .15s; }
        .unit-card:hover { border-color: #8FCFC7 !important; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-icon { animation: spin 1s linear infinite; }
      `}</style>

      {profileLoading ? (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Loader2 className="spin-icon" size={32} color="rgba(255,255,255,0.6)" />
        </div>
      ) : !supaConfigured() ? (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
          <ShieldCheck size={48} color="#E3B23C" style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 10 }}>Backend hali ulanmagan</div>
          <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 280, lineHeight: 1.6 }}>
            Kodning yuqori qismidagi <b>SUPABASE_URL</b> va <b>SUPABASE_ANON_KEY</b> qiymatlarini o'z Supabase loyihangiznikiga almashtiring.
          </div>
        </div>
      ) : !profile ? (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
          <GraduationCap size={54} color="#E3B23C" style={{ marginBottom: 18 }} />
          {signupDone ? (
            <>
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 10 }}>Emailingizni tekshiring!</div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginBottom: 22, maxWidth: 280, lineHeight: 1.6 }}>
                <b>{emailInput}</b> manziliga tasdiqlash xati yubordik. Havolani bosgach, shu yerga qaytib "Kirish" orqali tizimga kiring.
              </div>
              <button
                onClick={() => { setSignupDone(false); setAuthMode('signin'); setPasswordInput(''); }}
                className="primary-btn"
                style={{ width: '100%', maxWidth: 300, border: 'none', borderRadius: 16, padding: 15, fontWeight: 800, fontSize: 15, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer' }}
              >
                Kirish sahifasiga o'tish
              </button>
            </>
          ) : (
            <>
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 8 }}>
                {authMode === 'signup' ? 'Xush kelibsiz!' : 'Qaytganingizdan xursandmiz!'}
              </div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginBottom: 22, maxWidth: 280 }}>
                {authMode === 'signup'
                  ? 'Progressingizni saqlab qolish va sertifikat olish uchun hisob yarating'
                  : 'Davom etish uchun hisobingizga kiring'}
              </div>

              <button
                onClick={supaSignInWithGoogle}
                type="button"
                style={{ width: '100%', maxWidth: 300, border: '2px solid rgba(255,255,255,0.2)', borderRadius: 16, padding: 14, fontWeight: 700, fontSize: 15, color: '#fff', fontFamily: UZ_FONT, background: 'rgba(255,255,255,0.06)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 18 }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.5H42V20.5H24v7h11.3C33.7 32 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5-5C33.5 5.5 29 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.3-3.5z" />
                  <path fill="#FF3D00" d="M6.3 14.7l5.7 4.2C13.5 15.3 18.4 12 24 12c3.1 0 5.8 1.1 8 3l5-5C33.5 5.5 29 3.5 24 3.5c-7.7 0-14.4 4.3-17.7 10.7z" />
                  <path fill="#4CAF50" d="M24 44.5c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.1c-2 1.4-4.5 2.2-7.3 2.2-5.3 0-9.7-3-11.3-7.4l-6 4.6C9.5 40 16.2 44.5 24 44.5z" />
                  <path fill="#1976D2" d="M43.6 20.5H42V20.5H24v7h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.1C40.4 35.6 44.5 30.4 44.5 24c0-1.2-.1-2.4-.3-3.5z" />
                </svg>
                Google orqali kirish
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', maxWidth: 300, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ fontFamily: UZ_FONT, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>yoki</div>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
              </div>

              {authMode === 'signup' && (
                <input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ism Familiya"
                  style={{ width: '100%', maxWidth: 300, border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '13px 16px', fontSize: 15, color: '#fff', fontFamily: UZ_FONT, marginBottom: 12, outline: 'none' }}
                />
              )}
              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Email manzilingiz"
                type="email"
                style={{ width: '100%', maxWidth: 300, border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '13px 16px', fontSize: 15, color: '#fff', fontFamily: UZ_FONT, marginBottom: 12, outline: 'none' }}
              />
              <input
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Parol (kamida 6 belgi)"
                type="password"
                style={{ width: '100%', maxWidth: 300, border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '13px 16px', fontSize: 15, color: '#fff', fontFamily: UZ_FONT, marginBottom: authError ? 10 : 20, outline: 'none' }}
              />
              {authError && (
                <div style={{ width: '100%', maxWidth: 300, color: '#F0A0A0', fontFamily: UZ_FONT, fontSize: 12.5, marginBottom: 14, textAlign: 'left' }}>{authError}</div>
              )}
              <button
                onClick={submitAuth}
                disabled={authLoading}
                className="primary-btn"
                style={{ width: '100%', maxWidth: 300, border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: authLoading ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: authLoading ? 0.7 : 1 }}
              >
                {authLoading && <Loader2 className="spin-icon" size={18} />}
                {authMode === 'signup' ? "Ro'yxatdan o'tish" : 'Kirish'}
              </button>
              <button
                onClick={() => { setAuthMode(authMode === 'signup' ? 'signin' : 'signup'); setAuthError(''); }}
                style={{ marginTop: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontFamily: UZ_FONT, fontSize: 13, cursor: 'pointer', textDecoration: 'underline' }}
              >
                {authMode === 'signup' ? 'Hisobingiz bormi? Kirish' : "Hisobingiz yo'qmi? Ro'yxatdan o'tish"}
              </button>
            </>
          )}
        </div>
      ) : (
        <>

      {screen === 'home' && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 30 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <button
                onClick={() => setMenuOpen(true)}
                style={{ border: 'none', background: 'rgba(255,255,255,0.12)', borderRadius: 12, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
                aria-label="Menyu"
              >
                <Menu size={19} color="#fff" />
              </button>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 18, color: '#fff', display: 'flex', alignItems: 'center', gap: 5 }}>
                  Rus tili {hasBadge && <Crown size={14} color="#E3B23C" fill="#E3B23C" />}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2, fontFamily: UZ_FONT, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {profile ? `Salom, ${profile.name.split(' ')[0]}!` : "O'zbek tilida o'rganish"}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 5, color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: UZ_FONT }}>
                <Flame size={16} fill="#E3B23C" stroke="#E3B23C" /> {streak}
              </div>
              <div
                onClick={() => setScreen('shop')}
                style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 5, color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: UZ_FONT, cursor: 'pointer' }}
              >
                <Gem size={16} fill="#2FA89C" stroke="#2FA89C" /> {xp}
              </div>
            </div>
          </div>

          <div style={{ padding: '0 20px 6px' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {LEVELS.map((lv) => {
                const unlocked = isLevelUnlocked(lv.id);
                const complete = isLevelComplete(lv);
                const isSel = selectedLevel === lv.id;
                return (
                  <button
                    key={lv.id}
                    className="level-tab"
                    onClick={() => setSelectedLevel(lv.id)}
                    style={{
                      flex: 1,
                      aspectRatio: '1',
                      minWidth: 0,
                      borderRadius: 12,
                      border: isSel ? '2px solid #E3B23C' : '2px solid transparent',
                      background: complete ? '#E3B23C' : isSel ? 'rgba(227,178,60,0.18)' : 'rgba(255,255,255,0.1)',
                      color: complete ? '#12233A' : unlocked ? '#fff' : 'rgba(255,255,255,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontFamily: UZ_FONT,
                      fontWeight: 800,
                      fontSize: 13,
                      position: 'relative',
                    }}
                  >
                    {complete ? <Check size={16} strokeWidth={3} /> : lv.id}
                    {!unlocked && (
                      <div style={{ position: 'absolute', top: -4, right: -4, width: 15, height: 15, borderRadius: '50%', background: '#0E2A43', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={8} color="rgba(255,255,255,0.75)" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 10, textAlign: 'center', fontFamily: UZ_FONT, fontSize: 12.5, color: 'rgba(255,255,255,0.65)' }}>
              {currentLevel.label} · {currentLevel.units.reduce((s, u) => s + u.lessons.filter((ls) => completed.includes(ls.id)).length, 0)}/
              {currentLevel.units.reduce((s, u) => s + u.lessons.length, 0)} dars tugatildi
            </div>
          </div>

          {isLevelComplete(currentLevel) && !examPassedLevels.includes(selectedLevel) && (
            <div
              onClick={() => startExam(selectedLevel)}
              style={{ margin: '0 20px 16px', background: 'linear-gradient(90deg,#2FA89C,#4FC2B5)', borderRadius: 16, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', boxShadow: '0 6px 0 #1F7A73' }}
            >
              <ClipboardList size={22} color="#fff" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13.5, color: '#fff' }}>
                Barcha darslar tugadi! Yakuniy imtihonni (30 savol) topshiring
              </div>
            </div>
          )}
          {isLevelComplete(currentLevel) && examPassedLevels.includes(selectedLevel) && (
            <div
              onClick={() => { setCertLevelId(selectedLevel); setScreen('certificate'); }}
              style={{ margin: '0 20px 16px', background: 'linear-gradient(90deg,#E3B23C,#F0C868)', borderRadius: 16, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', boxShadow: '0 6px 0 #B8862A' }}
            >
              <Award size={22} color="#12233A" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13.5, color: '#12233A' }}>
                Tabriklaymiz! {currentLevel.label} darajasi tugadi — sertifikatingizni oling
              </div>
            </div>
          )}

          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {currentLevel.units.map((unit, uIdx) => {
              const status = getUnitStatus(selectedLevel, uIdx);
              const doneCount = unit.lessons.filter((ls) => completed.includes(ls.id)).length;
              return (
                <div
                  key={uIdx}
                  className="unit-card"
                  onClick={() => openUnit(selectedLevel, uIdx)}
                  style={{ background: status === 'locked' ? 'rgba(255,255,255,0.06)' : '#fff', borderRadius: 18, padding: '16px 18px', cursor: status === 'locked' ? 'default' : 'pointer', border: '2px solid transparent', opacity: status === 'locked' ? 0.75 : 1 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 15, color: status === 'locked' ? 'rgba(255,255,255,0.65)' : '#12233A' }}>{unit.title}</div>
                    {status === 'locked' ? (
                      <Lock size={17} color="rgba(255,255,255,0.55)" />
                    ) : status === 'completed' ? (
                      <Check size={18} color="#3F9142" />
                    ) : (
                      <span style={{ fontFamily: UZ_FONT, fontSize: 12, fontWeight: 700, color: '#2FA89C' }}>
                        {doneCount}/{unit.lessons.length}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12.5, color: status === 'locked' ? 'rgba(255,255,255,0.45)' : '#5B807B', fontFamily: UZ_FONT }}>
                    {unit.lessons.map((ls) => ls.title).join(' • ')}
                  </div>
                </div>
              );
            })}
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Rocket size={20} color="rgba(255,255,255,0.5)" />
              <div style={{ fontFamily: UZ_FONT, fontSize: 12.5, color: 'rgba(255,255,255,0.55)' }}>Ko'proq bo'limlar tez orada...</div>
            </div>
          </div>
        </div>
      )}

      {screen === 'path' && activeUnit && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', paddingBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px 6px' }}>
            <ArrowLeft onClick={goHome} size={20} style={{ cursor: 'pointer', color: '#fff' }} />
            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 15, color: '#fff' }}>
              {LEVELS.find((l) => l.id === activeLevelId).label} · {activeUnit.title}
            </div>
          </div>

          <div style={{ position: 'relative', width: 300, height: pathHeight, margin: '10px auto 0' }}>
            <svg width={300} height={pathHeight} style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F3C862" />
                  <stop offset="100%" stopColor="#C68F1F" />
                </linearGradient>
                <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4FC2B5" />
                  <stop offset="100%" stopColor="#1F7A73" />
                </linearGradient>
              </defs>
              <path d={pathD} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={4} strokeDasharray="1 11" strokeLinecap="round" />
              {activeUnit.lessons.map((lesson, idx) => {
                const status = getLessonStatus(activeUnit, idx);
                const fill = status === 'completed' ? 'url(#goldGrad)' : status === 'active' ? 'url(#tealGrad)' : '#33475C';
                return (
                  <polygon
                    key={lesson.id}
                    points={starPoints(nodeX(idx), nodeY(idx), 8, 37, 26)}
                    fill={fill}
                    stroke={status === 'locked' ? '#26374A' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={2}
                    className={status === 'active' ? 'pulse-node' : ''}
                  />
                );
              })}
            </svg>

            {activeUnit.lessons.map((lesson, idx) => {
              const status = getLessonStatus(activeUnit, idx);
              const Icon = lesson.icon;
              const x = nodeX(idx), y = nodeY(idx);
              return (
                <div key={lesson.id} style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)' }}>
                  <div
                    onClick={() => handleNodeClick(idx)}
                    className={lockMsg && lockMsg.id === lesson.id ? 'shake' : ''}
                    style={{ width: 74, height: 74, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: status === 'locked' ? '#8A99A8' : '#fff' }}
                  >
                    {status === 'locked' ? <Lock size={26} /> : status === 'completed' ? <Check size={30} strokeWidth={3} /> : <Icon size={28} />}
                  </div>
                  <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 130, textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: status === 'locked' ? 'rgba(255,255,255,0.4)' : '#fff', fontFamily: UZ_FONT }}>
                    {lesson.title}
                  </div>
                  {status === 'completed' && (
                    <div style={{ position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2 }}>
                      {[1, 2, 3].map((n) => (
                        <Star key={n} size={11} fill={n <= (ratings[lesson.id] || 0) ? '#E3B23C' : 'none'} stroke="#E3B23C" />
                      ))}
                    </div>
                  )}
                  {lockMsg && lockMsg.id === lesson.id && (
                    <div className="pop-in" style={{ position: 'absolute', bottom: 88, left: '50%', transform: 'translateX(-50%)', background: '#fff', color: '#12395C', fontSize: 11, fontWeight: 700, padding: '6px 10px', borderRadius: 10, whiteSpace: 'nowrap', fontFamily: UZ_FONT }}>
                      {lockMsg.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {screen === 'lesson' && activeLesson && activeQuestion && (
        <div style={{ background: '#EFF6F3', padding: '18px 22px 26px', minHeight: 560 }}>
          {examMode && (
            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 11, color: '#2FA89C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
              Yakuniy imtihon · {qIndex + 1}/{activeLesson.questions.length}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <X onClick={exitToPath} size={22} style={{ cursor: 'pointer', color: '#94A3A8', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 12, background: '#DCEAE7', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(qIndex / activeLesson.questions.length) * 100}%`, background: 'linear-gradient(90deg,#2FA89C,#E3B23C)', borderRadius: 999, transition: 'width .3s ease' }} />
            </div>
            {hintEligible && (
              <button
                onClick={useHint}
                disabled={hints <= 0}
                style={{ display: 'flex', alignItems: 'center', gap: 3, border: 'none', background: hints > 0 ? '#FDF2DC' : '#F0F0EE', color: hints > 0 ? '#B8862A' : '#B7BEC2', borderRadius: 999, padding: '5px 9px', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, cursor: hints > 0 ? 'pointer' : 'default', flexShrink: 0 }}
                title="Maslahat: 2 ta noto'g'ri javobni olib tashlaydi"
              >
                <Lightbulb size={15} /> {hints}
              </button>
            )}
            <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
              {Array.from({ length: examMode ? 10 : 5 }, (_, i) => (
                <Heart key={i} size={examMode ? 13 : 17} fill={i < hearts ? '#C1502E' : 'none'} stroke={i < hearts ? '#C1502E' : '#C7D2D9'} />
              ))}
            </div>
          </div>

          {activeQuestion.type === 'choice' && (
            <>
              <div style={eyebrow}>{activeQuestion.dir === 'uz2ru' ? 'Ruschasini toping' : "Ma'nosini ayting"}</div>
              <div style={{ fontSize: promptIsRussian ? 30 : 26, fontWeight: promptIsRussian ? 600 : 800, color: '#12233A', fontFamily: promptIsRussian ? RU_FONT : UZ_FONT, marginBottom: 26 }}>
                {activeQuestion.prompt}
              </div>
            </>
          )}
          {activeQuestion.type === 'fill_blank' && (
            <>
              <div style={eyebrow}>Bo'sh joyni to'ldiring</div>
              <div style={{ fontSize: 23, fontWeight: 600, color: '#12233A', fontFamily: RU_FONT, marginBottom: 8, lineHeight: 1.6 }}>
                {activeQuestion.sentence.split('___')[0]}
                <span style={{ display: 'inline-block', minWidth: 76, borderBottom: '3px solid #2FA89C', textAlign: 'center', margin: '0 4px', color: selected ? '#12233A' : '#B9C6C3' }}>
                  {selected || '．．．'}
                </span>
                {activeQuestion.sentence.split('___')[1]}
              </div>
              <div style={{ fontSize: 13, color: '#5B807B', fontFamily: UZ_FONT, marginBottom: 26 }}>{activeQuestion.hint}</div>
            </>
          )}
          {activeQuestion.type === 'listening' && (
            <>
              <div style={eyebrow}>Tinglang va javob bering</div>
              <button
                onClick={() => speakRussian(activeQuestion.audioText)}
                style={{ display: 'flex', alignItems: 'center', gap: 10, border: 'none', background: '#2FA89C', color: '#fff', borderRadius: 999, padding: '12px 20px', fontWeight: 800, fontFamily: UZ_FONT, fontSize: 15, cursor: 'pointer', marginBottom: 22 }}
              >
                <Volume2 size={20} /> Tinglash
              </button>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#12233A', fontFamily: UZ_FONT, marginBottom: 26 }}>{activeQuestion.question}</div>
            </>
          )}
          {activeQuestion.type === 'reading' && (
            <>
              <div style={eyebrow}>Matnni o'qing</div>
              <div style={{ background: '#fff', border: '2px solid #DCEAE7', borderRadius: 16, padding: '16px 18px', marginBottom: 20, fontFamily: RU_FONT, fontSize: 16, fontWeight: 500, color: '#12233A', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                {activeQuestion.text}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#12233A', fontFamily: UZ_FONT, marginBottom: 22 }}>{activeQuestion.question}</div>
            </>
          )}
          {activeQuestion.type === 'order' && (
            <>
              <div style={eyebrow}>Rus tilida yozing</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#12233A', fontFamily: UZ_FONT, marginBottom: 26 }}>{activeQuestion.prompt}</div>
            </>
          )}
          {activeQuestion.type === 'match' && (
            <>
              <div style={eyebrow}>Juftliklarni toping</div>
              <div style={{ fontSize: 15, color: '#33475C', fontFamily: UZ_FONT, marginBottom: 20 }}>So'zni tarjimasiga ulang</div>
            </>
          )}
          {activeQuestion.type === 'gender' && (
            <>
              <div style={eyebrow}>Jinsini aniqlang</div>
              <div style={{ fontSize: 30, fontWeight: 600, color: '#12233A', fontFamily: RU_FONT, marginBottom: 26 }}>{activeQuestion.prompt}</div>
            </>
          )}
          {activeQuestion.type === 'whowhat' && (
            <>
              <div style={eyebrow}>Kim yoki nima?</div>
              <div style={{ fontSize: 30, fontWeight: 600, color: '#12233A', fontFamily: RU_FONT, marginBottom: 26 }}>{activeQuestion.prompt}</div>
            </>
          )}
          {activeQuestion.type === 'plural' && (
            <>
              <div style={eyebrow}>Ko'plikini toping</div>
              <div style={{ fontSize: 30, fontWeight: 600, color: '#12233A', fontFamily: RU_FONT, marginBottom: 26 }}>{activeQuestion.prompt}</div>
            </>
          )}

          {(activeQuestion.type === 'choice' || activeQuestion.type === 'fill_blank' || activeQuestion.type === 'listening' || activeQuestion.type === 'gender' || activeQuestion.type === 'whowhat' || activeQuestion.type === 'plural' || activeQuestion.type === 'reading') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {options.map((opt, i) => {
                let borderColor = '#DCEAE7', bg = '#fff', color = '#12233A';
                if (checked) {
                  if (opt === activeQuestion.answer) { borderColor = '#3F9142'; bg = '#E9F7EA'; color = '#256B29'; }
                  else if (opt === selected) { borderColor = '#C1502E'; bg = '#FBEAE4'; color = '#C1502E'; }
                  else { color = '#9AA7AE'; }
                } else if (opt === selected) {
                  borderColor = '#2FA89C'; bg = '#EAF7F5';
                }
                return (
                  <button
                    key={i}
                    className="opt-btn"
                    onClick={() => selectChoice(i)}
                    style={{ textAlign: 'left', border: `2px solid ${borderColor}`, background: bg, color, borderRadius: 16, padding: '14px 18px', fontSize: 16, cursor: checked ? 'default' : 'pointer', fontFamily: optionsAreRussian ? RU_FONT : UZ_FONT, fontWeight: optionsAreRussian ? 500 : 700 }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {activeQuestion.type === 'order' && (
            <div>
              <div style={{ minHeight: 54, borderBottom: '2px solid #C9DEDA', display: 'flex', flexWrap: 'wrap', gap: 8, padding: '4px 0 14px', marginBottom: 18 }}>
                {chosen.map((tile, i) => (
                  <button key={i} className="tile-btn" onClick={() => removeTile(i)} style={{ border: '2px solid #2FA89C', background: '#EAF7F5', borderRadius: 12, padding: '10px 16px', fontSize: 16, cursor: checked ? 'default' : 'pointer', fontFamily: RU_FONT, fontWeight: 500 }}>
                    {tile.t}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {available.map((tile, i) => (
                  <button key={i} className="tile-btn" onClick={() => pickTile(i)} style={{ border: '2px solid #DCEAE7', background: '#fff', borderRadius: 12, padding: '10px 16px', fontSize: 16, cursor: checked ? 'default' : 'pointer', fontFamily: RU_FONT, fontWeight: 500 }}>
                    {tile.t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeQuestion.type === 'match' && (
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {matchLeft.map((item) => {
                  const isMatched = matchedIds.includes(item.pid);
                  const isWrong = wrongFlash && wrongFlash.l === item.pid;
                  const isSel = selLeft === item.pid;
                  return (
                    <button
                      key={item.pid}
                      onClick={() => clickLeft(item.pid)}
                      disabled={isMatched}
                      style={{ fontFamily: RU_FONT, fontWeight: 500, fontSize: 15, padding: '12px 8px', borderRadius: 12, textAlign: 'center', border: `2px solid ${isMatched ? '#3F9142' : isWrong ? '#C1502E' : isSel ? '#2FA89C' : '#DCEAE7'}`, background: isMatched ? '#E9F7EA' : isWrong ? '#FBEAE4' : isSel ? '#EAF7F5' : '#fff', color: isMatched ? '#256B29' : '#12233A', cursor: isMatched ? 'default' : 'pointer' }}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {matchRight.map((item) => {
                  const isMatched = matchedIds.includes(item.pid);
                  const isWrong = wrongFlash && wrongFlash.r === item.pid;
                  const isSel = selRight === item.pid;
                  return (
                    <button
                      key={item.pid}
                      onClick={() => clickRight(item.pid)}
                      disabled={isMatched}
                      style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 13.5, padding: '12px 8px', borderRadius: 12, textAlign: 'center', border: `2px solid ${isMatched ? '#3F9142' : isWrong ? '#C1502E' : isSel ? '#2FA89C' : '#DCEAE7'}`, background: isMatched ? '#E9F7EA' : isWrong ? '#FBEAE4' : isSel ? '#EAF7F5' : '#fff', color: isMatched ? '#256B29' : '#12233A', cursor: isMatched ? 'default' : 'pointer' }}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ marginTop: 30 }}>
            {!checked && activeQuestion.type !== 'match' && (
              <button
                className="primary-btn"
                onClick={checkAnswer}
                style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: ready ? '#2FA89C' : '#C9DEDA', boxShadow: ready ? '0 5px 0 #1F7A73' : 'none', cursor: ready ? 'pointer' : 'default' }}
              >
                Tekshirish
              </button>
            )}
            {checked && (
              <div className="pop-in">
                <div style={{ background: isCorrect ? '#E9F7EA' : '#FBEAE4', color: isCorrect ? '#256B29' : '#C1502E', borderRadius: 16, padding: '14px 16px', fontWeight: 800, fontFamily: UZ_FONT, marginBottom: 12 }}>
                  {activeQuestion.type === 'match'
                    ? "Ajoyib! Barcha juftliklar to'g'ri topildi."
                    : isCorrect
                    ? "To'g'ri! +10 XP"
                    : (
                      <span>Xato. To'g'ri javob: <span style={{ fontFamily: RU_FONT, fontWeight: 500 }}>{activeQuestion.answer}</span></span>
                    )}
                </div>
                <button className="primary-btn" onClick={nextQuestion} style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer' }}>
                  Davom etish
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {screen === 'certificate' && certLevelId && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px 6px' }}>
            <ArrowLeft onClick={goHome} size={20} style={{ cursor: 'pointer', color: '#fff' }} />
            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 15, color: '#fff' }}>Sertifikat</div>
          </div>
          <div style={{ padding: '20px 22px' }}>
            <div
              className="certificate-card"
              style={{ background: '#fff', borderRadius: 20, padding: '36px 26px', textAlign: 'center', border: '3px solid #E3B23C', position: 'relative' }}
            >
              <Award size={44} color="#E3B23C" style={{ marginBottom: 14 }} />
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8FA0AE', marginBottom: 18 }}>Sertifikat</div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: '#5B807B', marginBottom: 6 }}>Ushbu sertifikat</div>
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 24, color: '#12233A', marginBottom: 16, wordBreak: 'break-word' }}>{profile?.name}</div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: '#5B807B', marginBottom: 22, lineHeight: 1.6 }}>
                "Rus tili" ilovasida <b style={{ color: '#12233A' }}>{LEVELS.find((l) => l.id === certLevelId)?.label}</b> ({certLevelId}) darajasini muvaffaqiyatli tugatgani uchun beriladi
              </div>
              <div style={{ height: 2, background: '#EEF3F2', margin: '0 auto 18px', width: '60%' }} />
              <div style={{ fontFamily: UZ_FONT, fontSize: 12, color: '#8FA0AE' }}>
                {new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="primary-btn"
              style={{ width: '100%', border: 'none', borderRadius: 16, padding: 15, fontWeight: 800, fontSize: 15, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer', marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
            >
              <Printer size={18} /> Chop etish / Saqlash
            </button>

            {MEDIA_BREAKS[certLevelId] && (
              <div style={{ marginTop: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <Gift size={17} color="#E3B23C" />
                  <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13.5, color: '#fff' }}>Bonus: madaniy tanaffus</div>
                </div>

                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                  {MEDIA_BREAKS[certLevelId].songTitle}
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 18, background: '#000', aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${MEDIA_BREAKS[certLevelId].songId}`}
                    title="Musiqiy tanaffus"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block' }}
                  />
                </div>

                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                  {MEDIA_BREAKS[certLevelId].cartoonTitle}
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden', background: '#000', aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${MEDIA_BREAKS[certLevelId].cartoonId}`}
                    title="Multfilm"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {screen === 'placement-intro' && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
          <Compass size={54} color="#E3B23C" style={{ marginBottom: 18 }} />
          <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 10 }}>Darajangizni bilamizmi?</div>
          <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginBottom: 26, maxWidth: 280, lineHeight: 1.6 }}>
            Bir necha savolga javob bering — sizga mos darajadan darslarni ochib beramiz. Xohlasangiz, boshlang'ich darajadan ham boshlashingiz mumkin.
          </div>
          <button
            onClick={() => { setPlacementIdx(0); setPlacementSelected(null); setPlacementChecked(false); setScreen('placement-test'); }}
            className="primary-btn"
            style={{ width: '100%', maxWidth: 300, border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 15, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer', marginBottom: 12 }}
          >
            Testni boshlash
          </button>
          <button
            onClick={skipPlacement}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontFamily: UZ_FONT, fontSize: 13, cursor: 'pointer', textDecoration: 'underline' }}
          >
            O'tkazib yuborish, boshidan boshlayman
          </button>
        </div>
      )}

      {screen === 'placement-test' && (() => {
        const qs = getPlacementQuestions();
        const cur = qs[placementIdx];
        if (!cur) return null;
        return (
          <div style={{ background: '#EFF6F3', padding: '24px 22px 30px', minHeight: 560 }}>
            <div style={{ fontFamily: UZ_FONT, fontSize: 11, fontWeight: 700, color: '#5B807B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
              {cur.levelLabel} darajasi savoli · {placementIdx + 1}/{qs.length}
            </div>
            <div style={{ height: 8, background: '#DCEAE7', borderRadius: 999, overflow: 'hidden', marginBottom: 24 }}>
              <div style={{ height: '100%', width: `${(placementIdx / qs.length) * 100}%`, background: 'linear-gradient(90deg,#2FA89C,#E3B23C)', borderRadius: 999, transition: 'width .3s ease' }} />
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#12233A', fontFamily: RU_FONT, marginBottom: 26 }}>
              {cur.q.prompt || cur.q.sentence || cur.q.question}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cur.q.options.map((opt, i) => {
                let borderColor = '#DCEAE7', bg = '#fff', color = '#12233A';
                if (placementChecked) {
                  if (opt === cur.q.answer) { borderColor = '#3F9142'; bg = '#E9F7EA'; color = '#256B29'; }
                  else if (opt === placementSelected) { borderColor = '#C1502E'; bg = '#FBEAE4'; color = '#C1502E'; }
                  else { color = '#9AA7AE'; }
                }
                return (
                  <button
                    key={i}
                    onClick={() => answerPlacement(opt)}
                    disabled={placementChecked}
                    className="opt-btn"
                    style={{ border: `2px solid ${borderColor}`, background: bg, color, borderRadius: 14, padding: '14px 16px', fontFamily: RU_FONT, fontSize: 16, fontWeight: 500, textAlign: 'left', cursor: placementChecked ? 'default' : 'pointer' }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })()}

      {screen === 'shop' && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px 6px' }}>
            <ArrowLeft onClick={goHome} size={20} style={{ cursor: 'pointer', color: '#fff' }} />
            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 15, color: '#fff' }}>Olmoslar do'koni</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 22px 20px', color: '#E3B23C', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 16 }}>
            <Gem size={18} fill="#2FA89C" stroke="#2FA89C" /> {xp} olmos mavjud
          </div>

          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', borderRadius: 18, padding: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Mascot variant={activeAvatar} accessories={equippedAccessories} size={96} />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#12233A' }}>{profile?.name}</div>
            </div>

            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Avatar tanlang</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10 }}>
              {AVATARS.map((av) => {
                const owned = ownedAvatars.includes(av.id);
                const isActive = activeAvatar === av.id;
                const affordable = owned || xp >= av.cost;
                return (
                  <button
                    key={av.id}
                    onClick={() => (owned ? selectAvatar(av.id) : buyAvatar(av.id))}
                    disabled={!affordable}
                    style={{ background: '#fff', border: isActive ? '2px solid #E3B23C' : '2px solid transparent', borderRadius: 16, padding: '10px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: affordable ? 'pointer' : 'default', opacity: affordable ? 1 : 0.55 }}
                  >
                    <Mascot variant={av.id} accessories={[]} size={50} />
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 10.5, color: '#12233A' }}>{av.name}</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 10, color: owned ? '#2FA89C' : '#B8862A', display: 'flex', alignItems: 'center', gap: 2 }}>
                      {owned ? (isActive ? 'Tanlangan' : "O'rnatish") : (<>{av.cost} <Gem size={10} /></>)}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Aksessuarlar</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10 }}>
              {ACCESSORIES.map((ac) => {
                const owned = ownedAccessories.includes(ac.id);
                const equipped = equippedAccessories.includes(ac.id);
                const affordable = owned || xp >= ac.cost;
                return (
                  <button
                    key={ac.id}
                    onClick={() => (owned ? toggleAccessory(ac.id) : buyAccessory(ac.id))}
                    disabled={!affordable}
                    style={{ background: '#fff', border: equipped ? '2px solid #2FA89C' : '2px solid transparent', borderRadius: 16, padding: '10px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: affordable ? 'pointer' : 'default', opacity: affordable ? 1 : 0.55 }}
                  >
                    <Mascot variant="panda" accessories={[ac.id]} size={50} />
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 10.5, color: '#12233A' }}>{ac.name}</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 10, color: owned ? (equipped ? '#2FA89C' : '#9AA7AE') : '#B8862A', display: 'flex', alignItems: 'center', gap: 2 }}>
                      {owned ? (equipped ? 'Kiyilgan' : 'Kiyish') : (<>{ac.cost} <Gem size={10} /></>)}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Foydali narsalar</div>
            <div style={{ background: '#fff', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Snowflake size={24} color="#378ADD" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#12233A' }}>Seriya muzlatgichi</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B', marginTop: 2 }}>Bir kun mashq qilmasangiz ham, seriyangiz saqlanadi ({streakFreezes}/2 bor)</div>
              </div>
              <button
                onClick={buyStreakFreeze}
                disabled={streakFreezes >= 2 || xp < 60}
                style={{ border: 'none', borderRadius: 12, padding: '9px 12px', background: streakFreezes >= 2 || xp < 60 ? '#EEF1F0' : '#2FA89C', color: streakFreezes >= 2 || xp < 60 ? '#9AA7AE' : '#fff', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, cursor: streakFreezes >= 2 || xp < 60 ? 'default' : 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 3 }}
              >
                60 <Gem size={11} />
              </button>
            </div>

            <div style={{ background: '#fff', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#FAEEDA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Lightbulb size={24} color="#B8862A" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#12233A' }}>Maslahat (3 dona)</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B', marginTop: 2 }}>Darsda qiynalsangiz, 2 ta noto'g'ri javobni olib tashlaydi ({hints} dona bor)</div>
              </div>
              <button
                onClick={buyHints}
                disabled={xp < 30}
                style={{ border: 'none', borderRadius: 12, padding: '9px 12px', background: xp < 30 ? '#EEF1F0' : '#2FA89C', color: xp < 30 ? '#9AA7AE' : '#fff', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, cursor: xp < 30 ? 'default' : 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 3 }}
              >
                30 <Gem size={11} />
              </button>
            </div>

            <div style={{ background: '#fff', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#FBEAF0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Crown size={24} color="#D4537E" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#12233A' }}>Oltin nishon</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B', marginTop: 2 }}>Ismingiz yonida doimiy toj belgisi</div>
              </div>
              <button
                onClick={buyBadge}
                disabled={hasBadge || xp < 150}
                style={{ border: 'none', borderRadius: 12, padding: '9px 12px', background: hasBadge || xp < 150 ? '#EEF1F0' : '#2FA89C', color: hasBadge || xp < 150 ? '#9AA7AE' : '#fff', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, cursor: hasBadge || xp < 150 ? 'default' : 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 3 }}
              >
                {hasBadge ? 'Sotib olindi' : (<>150 <Gem size={11} /></>)}
              </button>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: '14px 16px', display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 6 }}>
              <Heart size={16} color="#E39C8A" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontFamily: UZ_FONT, fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                Eslatma: darsda yuraklaringiz tugab qolsa, 15 olmos evaziga davom etishingiz ham mumkin.
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === 'summary' && activeLesson && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C)', padding: '70px 26px', minHeight: 560, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          {failedRun ? (
            <>
              <Heart size={54} stroke="#6B8AA3" style={{ marginBottom: 18 }} />
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 8 }}>Yuraklar tugadi</div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 30 }}>Xafa bo'lmang, yana urinib ko'ring!</div>
              {xp >= 15 && (
                <button
                  onClick={reviveWithGems}
                  style={{ width: '100%', border: '2px solid #E3B23C', borderRadius: 16, padding: 14, fontWeight: 800, fontSize: 15, color: '#E3B23C', background: 'rgba(227,178,60,0.1)', marginBottom: 10, cursor: 'pointer', fontFamily: UZ_FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <Gem size={16} /> 15 olmos evaziga davom etish
                </button>
              )}
              <button className="primary-btn" onClick={retryLesson} style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer' }}>
                Qayta urinish
              </button>
              <button className="secondary-btn" onClick={exitToPath} style={{ width: '100%', border: '2px solid rgba(255,255,255,0.25)', borderRadius: 16, padding: 14, fontWeight: 800, fontSize: 15, color: '#fff', background: 'transparent', marginTop: 10, cursor: 'pointer', fontFamily: UZ_FONT }}>
                Chiqish
              </button>
            </>
          ) : !summaryPassed ? (
            <>
              <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                {[1, 2, 3].map((n) => (
                  <Star key={n} size={42} fill={n <= (ratings[activeLesson.id] || 0) ? '#E3B23C' : 'none'} stroke="#E3B23C" />
                ))}
              </div>
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 8 }}>Yana mashq qiling</div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 16, color: '#E3B23C', fontWeight: 800, marginBottom: 6 }}>
                Aniqlik: {summaryAccuracy}%
              </div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 30, maxWidth: 260, lineHeight: 1.5 }}>
                {examMode ? "Imtihondan o'tish uchun kamida 70% aniqlik kerak. Yana urinib ko'ring!" : "Keyingi darsni ochish uchun kamida 70% aniqlik kerak. Yana urinib ko'ring!"}
              </div>
              <button className="primary-btn" onClick={retryLesson} style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer' }}>
                Qayta urinish
              </button>
              <button className="secondary-btn" onClick={exitToPath} style={{ width: '100%', border: '2px solid rgba(255,255,255,0.25)', borderRadius: 16, padding: 14, fontWeight: 800, fontSize: 15, color: '#fff', background: 'transparent', marginTop: 10, cursor: 'pointer', fontFamily: UZ_FONT }}>
                Chiqish
              </button>
            </>
          ) : (
            <>
              <div style={{ position: 'relative', width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <div className="confetti-wrap">
                  {CONFETTI_CONFIG.map((c, i) => (
                    <span
                      key={i}
                      className="confetti-dot"
                      style={{ '--tx': c.tx, '--ty': c.ty, animationDelay: c.delay, background: c.color }}
                    />
                  ))}
                </div>
                <div className="panda-pop">
                  <Mascot variant={activeAvatar} accessories={equippedAccessories} size={108} />
                </div>
              </div>
              {!examMode && (
                <div className="summary-rise" style={{ display: 'flex', gap: 6, marginBottom: 20, animationDelay: '.25s' }}>
                  {[1, 2, 3].map((n) => (
                    <Star key={n} size={42} fill={n <= (ratings[activeLesson.id] || 0) ? '#E3B23C' : 'none'} stroke="#E3B23C" />
                  ))}
                </div>
              )}
              <div className="summary-rise" style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10, animationDelay: '.32s' }}>
                {examMode ? "Imtihon muvaffaqiyatli topshirildi!" : 'Ajoyib natija!'}
              </div>
              <div className="summary-rise" style={{ fontFamily: UZ_FONT, fontSize: 16, color: '#E3B23C', fontWeight: 800, marginBottom: 4, animationDelay: '.38s' }}>
                +{sessionXp + (correctCount === activeLesson.questions.length ? 20 : 0)} XP
              </div>
              <div className="summary-rise" style={{ fontFamily: UZ_FONT, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 30, animationDelay: '.44s' }}>
                Aniqlik: {summaryAccuracy}%
              </div>
              {examMode ? (
                <button
                  className="primary-btn summary-rise"
                  onClick={() => { setExamMode(false); setCertLevelId(examLevelId); setScreen('certificate'); }}
                  style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#12233A', fontFamily: UZ_FONT, background: '#E3B23C', boxShadow: '0 5px 0 #B8862A', cursor: 'pointer', animationDelay: '.5s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <Award size={18} /> Sertifikatni olish
                </button>
              ) : (
                <button className="primary-btn summary-rise" onClick={exitToPath} style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer', animationDelay: '.5s' }}>
                  Davom etish
                </button>
              )}
            </>
          )}
        </div>
      )}
        </>
      )}

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(6,18,30,0.55)', zIndex: 50, display: 'flex' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: '78%', maxWidth: 300, height: '100%', background: '#123A5C', boxShadow: '4px 0 24px rgba(0,0,0,0.3)', padding: '26px 20px', display: 'flex', flexDirection: 'column', gap: 4, overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                <Mascot variant={activeAvatar} accessories={equippedAccessories} size={50} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 15, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{profile?.name}</div>
                  {hasBadge && <Crown size={15} color="#E3B23C" fill="#E3B23C" />}
                </div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{profile?.email}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '10px 6px', textAlign: 'center' }}>
                <Flame size={16} fill="#E3B23C" stroke="#E3B23C" style={{ marginBottom: 3 }} />
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#fff' }}>{streak}</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>kunlik seriya</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '10px 6px', textAlign: 'center' }}>
                <Gem size={16} fill="#2FA89C" stroke="#2FA89C" style={{ marginBottom: 3 }} />
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#fff' }}>{xp}</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>olmos</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: '10px 6px', textAlign: 'center' }}>
                <Check size={16} color="#8FCFC7" style={{ marginBottom: 3 }} />
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#fff' }}>{completed.length}</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>dars</div>
              </div>
            </div>

            <button
              onClick={() => { setScreen('shop'); setMenuOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginBottom: 8, textAlign: 'left' }}
            >
              <ShoppingBag size={19} color="#E3B23C" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#fff' }}>Olmoslar do'koni</div>
            </button>

            <button
              onClick={toggleSound}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginBottom: 8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {soundOn ? <Volume2 size={19} color="#8FCFC7" /> : <VolumeX size={19} color="rgba(255,255,255,0.5)" />}
                <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#fff' }}>Ovoz effektlari</div>
              </div>
              <div style={{ width: 36, height: 20, borderRadius: 999, background: soundOn ? '#2FA89C' : 'rgba(255,255,255,0.2)', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', top: 2, left: soundOn ? 18 : 2, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left .15s' }} />
              </div>
            </button>

            <div style={{ flex: 1 }} />

            <button
              onClick={signOut}
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'rgba(193,80,46,0.15)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginTop: 14 }}
            >
              <LogOut size={19} color="#E39C8A" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#E39C8A' }}>Chiqish</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
