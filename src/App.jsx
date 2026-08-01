import React, { useState, useEffect, useRef } from 'react';
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
              { type: 'choice', dir: 'ru2uz', prompt: 'Как его зовут?', options: ["Uning (erkak) ismi nima?", 'Uning (ayol) ismi nima?', 'Sizning ismingiz nima?', 'Ularning ismi nima?'], answer: "Uning (erkak) ismi nima?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Uning (ayol) ismi Marta', options: ['Её зовут Марта', 'Его зовут Марта', 'Меня зовут Марта', 'Их зовут Марта'], answer: 'Её зовут Марта' },
              { type: 'fill_blank', sentence: 'Это ваш друг? Как ___ зовут?', hint: "('u erkak'ning tushum kelishigi shakli)", options: ['его', 'он', 'ему', 'им'], answer: 'его' },
              { type: 'fill_blank', sentence: 'Это ваша подруга? Как ___ зовут?', hint: "('u ayol'ning tushum kelishigi shakli)", options: ['её', 'она', 'ей', 'ею'], answer: 'её' },
              { type: 'match', pairs: [{ ru: 'Я — меня', uz: 'Men — meni' }, { ru: 'Ты — тебя', uz: 'Sen — seni' }, { ru: 'Мы — нас', uz: 'Biz — bizni' }, { ru: 'Вы — вас', uz: 'Siz — sizni' }] },
              { type: 'match', pairs: [{ ru: 'Он — его', uz: 'U (erkak) — uni' }, { ru: 'Она — её', uz: 'U (ayol) — uni' }, { ru: 'Они — их', uz: 'Ular — ularni' }, { ru: 'Это я', uz: 'Bu men' }] },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu men. Mening ismim Aleks', options: ['Это я. Меня зовут Алекс', 'Это он. Его зовут Алекс', 'Это ты. Тебя зовут Алекс', 'Это мы. Нас зовут Алекс'], answer: 'Это я. Меня зовут Алекс' },
              { type: 'fill_blank', sentence: 'Это они. ___ зовут Инна и Дима.', hint: "('ular'ning tushum kelishigi shakli)", options: ['Их', 'Они', 'Им', 'Ими'], answer: 'Их' },
              { type: 'listening', audioText: 'Это ваш друг? Как его зовут? — Антон.', question: 'Suhbat kim haqida?', options: ["Do'st (erkak) haqida", "Do'st (ayol) haqida", "O'qituvchi haqida", 'Opa haqida'], answer: "Do'st (erkak) haqida" },
              { type: 'order', prompt: "Bu sizning do'stingizmi? Uning ismi nima?", tiles: ['Это', 'ваш', 'друг?', 'Как', 'его', 'зовут?'], answer: 'Это ваш друг? Как его зовут?' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это мы. Нас зовут Ира и Антон', options: ['Bu biz. Bizning ismimiz Ira va Anton', 'Bu ular. Ularning ismi Ira va Anton', 'Bu siz. Sizning ismingiz Ira va Anton', 'Bu men. Mening ismim Ira'], answer: 'Bu biz. Bizning ismimiz Ira va Anton' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Sizlarning ismingiz Aleks va Marta', options: ['Вас зовут Алекс и Марта', 'Их зовут Алекс и Марта', 'Нас зовут Алекс и Марта', 'Тебя зовут Алекс и Марта'], answer: 'Вас зовут Алекс и Марта' },
              { type: 'match', pairs: [{ ru: 'Друг', uz: "Do'st (erkak)" }, { ru: 'Подруга', uz: "Do'st (ayol)" }, { ru: 'Ваш', uz: 'Sizning' }, { ru: 'Наш', uz: 'Bizning' }] },
              { type: 'fill_blank', sentence: 'Это ___ друг? Как его зовут?', hint: "('sizning' egalik olmoshi)", options: ['ваш', 'ваша', 'ваше', 'ваши'], answer: 'ваш' },
              { type: 'order', prompt: "Bu bizning do'stimiz", tiles: ['Это', 'наш', 'друг'], answer: 'Это наш друг' },
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
              { type: 'match', pairs: [{ ru: 'Она', uz: 'U (ayol)' }, { ru: 'Вы', uz: 'Siz' }, { ru: 'Они', uz: 'Ular' }, { ru: 'Мы', uz: 'Biz' }] },
              { type: 'fill_blank', sentence: 'Она хорошо ___.', hint: "('gapirmoq' fe'lining 'u ayol' shakli, II guruh)", options: ['говорит', 'говорю', 'говоришь', 'говорят'], answer: 'говорит' },
              { type: 'fill_blank', sentence: 'Мы ___ русский язык.', hint: "('bilmoq' fe'lining 'biz' shakli, I guruh)", options: ['знаем', 'знаю', 'знаешь', 'знают'], answer: 'знаем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы читаете книгу', options: ["Siz kitob o'qiyapsiz", "Ular kitob o'qishyapti", "Biz kitob o'qiyapmiz", "Sen kitob o'qiyapsan"], answer: "Siz kitob o'qiyapsiz" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ular yaxshi tushunishadi', options: ['Они хорошо понимают', 'Мы хорошо понимаем', 'Вы хорошо понимаете', 'Она хорошо понимает'], answer: 'Они хорошо понимают' },
              { type: 'fill_blank', sentence: 'Ты ___ ?', hint: "('qilmoq' fe'lining 'sen' shakli)", options: ['делаешь', 'делаю', 'делает', 'делаем'], answer: 'делаешь' },
              { type: 'match', pairs: [{ ru: 'Я знаю', uz: 'Men bilaman' }, { ru: 'Ты знаешь', uz: 'Sen bilasan' }, { ru: 'Он знает', uz: 'U biladi' }, { ru: 'Мы знаем', uz: 'Biz bilamiz' }] },
              { type: 'listening', audioText: 'Я читаю, а ты пишешь.', question: 'Kim nima qilyapti?', options: ["Men o'qiyman, sen yozasan", "Men yozaman, sen o'qiysan", "Biz o'qiymiz", 'Ular yozishadi'], answer: "Men o'qiyman, sen yozasan" },
              { type: 'order', prompt: 'U yaxshi biladi', tiles: ['Он', 'хорошо', 'знает'], answer: 'Он хорошо знает' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я делаю упражнение', options: ['Men mashq qilyapman', 'Sen mashq qilyapsan', 'Biz mashq qilyapmiz', 'U mashq qilyapti'], answer: 'Men mashq qilyapman' },
              { type: 'fill_blank', sentence: 'Они ___ по-русски.', hint: "('gapirmoq' fe'lining 'ular' shakli, II guruh)", options: ['говорят', 'говорит', 'говорю', 'говорим'], answer: 'говорят' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz rus tilini bilamiz', options: ['Мы знаем русский язык', 'Я знаю русский язык', 'Вы знаете русский язык', 'Они знают русский язык'], answer: 'Мы знаем русский язык' },
              { type: 'match', pairs: [{ ru: 'Делать', uz: 'Qilmoq' }, { ru: 'Знать', uz: 'Bilmoq' }, { ru: 'Говорить', uz: 'Gapirmoq' }, { ru: 'Читать', uz: "O'qimoq" }] },
              { type: 'fill_blank', sentence: 'Что вы ___ ?', hint: "('qilmoq' fe'lining 'siz' shakli)", options: ['делаете', 'делаешь', 'делает', 'делают'], answer: 'делаете' },
              { type: 'order', prompt: 'Biz rus tilida gapiramiz', tiles: ['Мы', 'говорим', 'по-русски'], answer: 'Мы говорим по-русски' },
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
              { type: 'match', pairs: [{ ru: 'Брат', uz: 'Aka/Uka' }, { ru: 'Сестра', uz: 'Opa/Singil' }, { ru: 'Сын', uz: "O'g'il" }, { ru: 'Дочь', uz: 'Qiz' }] },
              { type: 'fill_blank', sentence: 'Мне 12 ___.', hint: "('yosh' so'zining ko'plik shakli, 5dan ortiq sonlar bilan)", options: ['лет', 'год', 'года', 'годов'], answer: 'лет' },
              { type: 'fill_blank', sentence: 'Моему брату 1 ___.', hint: "('yosh' so'zi, 1 soni bilan)", options: ['год', 'лет', 'года', 'годом'], answer: 'год' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне 12 лет, а моему брату 1 год', options: ['Men 12 yoshdaman, ukam esa 1 yoshda', 'Men 1 yoshdaman, akam 12 yoshda', 'Bizning yoshimiz bir xil', 'Ukam mendan katta'], answer: 'Men 12 yoshdaman, ukam esa 1 yoshda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Mening akam bor', options: ['У меня есть брат', 'У меня есть сестра', 'У меня есть сын', 'У меня есть дочь'], answer: 'У меня есть брат' },
              { type: 'fill_blank', sentence: 'У меня есть ___ и сестра.', hint: "('aka/uka' so'zi)", options: ['брат', 'братья', 'сестры', 'дочь'], answer: 'брат' },
              { type: 'listening', audioText: 'У меня есть брат и сестра. Брату 10 лет, а сестре 8 лет.', question: 'Aka va singil necha yoshda?', options: ['10 va 8', '8 va 10', '12 va 1', '5 va 6'], answer: '10 va 8' },
              { type: 'match', pairs: [{ ru: 'Внук', uz: "Nabira (o'g'il)" }, { ru: 'Внучка', uz: 'Nabira (qiz)' }, { ru: 'Родители', uz: 'Ota-onalar' }, { ru: 'Дети', uz: 'Bolalar' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мои родители отдыхают вечером', options: ['Ota-onam kechqurun dam olishadi', 'Ota-onam ertalab ishlashadi', "Bolalarim kechqurun o'ynashadi", 'Bobom kechqurun uxlaydi'], answer: 'Ota-onam kechqurun dam olishadi' },
              { type: 'fill_blank', sentence: 'Это ___ родители.', hint: "('mening' egalik olmoshi, ko'plik shakli)", options: ['мои', 'мой', 'моя', 'моё'], answer: 'мои' },
              { type: 'order', prompt: "Mening akam futbol o'ynaydi", tiles: ['Мой', 'брат', 'играет', 'в', 'футбол'], answer: 'Мой брат играет в футбол' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bizning oilamiz katta', options: ['Наша семья большая', 'Наша семья маленькая', 'Моя семья маленькая', 'Твоя семья большая'], answer: 'Наша семья большая' },
              { type: 'match', pairs: [{ ru: 'Большая семья', uz: 'Katta oila' }, { ru: 'Маленькая семья', uz: 'Kichik oila' }, { ru: 'Дружная семья', uz: 'Hamjihat oila' }, { ru: 'Счастливая семья', uz: "Baxtli oila" }] },
              { type: 'fill_blank', sentence: 'У нас ___ семья.', hint: "('hamjihat/do'stona', ayol jinsidagi sifat)", options: ['дружная', 'дружный', 'дружное', 'дружные'], answer: 'дружная' },
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
              { type: 'match', pairs: [{ ru: 'Ноль', uz: 'Nol' }, { ru: 'Два', uz: 'Ikki' }, { ru: 'Четыре', uz: "To'rt" }, { ru: 'Шесть', uz: 'Olti' }] },
              { type: 'match', pairs: [{ ru: 'Семь', uz: 'Yetti' }, { ru: 'Восемь', uz: 'Sakkiz' }, { ru: 'Девять', uz: "To'qqiz" }, { ru: 'Десять', uz: "O'n" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Одиннадцать', options: ["O'n bir", "O'n", 'Yigirma', "O'n ikki"], answer: "O'n bir" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Yigirma', options: ['Двадцать', 'Двенадцать', 'Десять', 'Тридцать'], answer: 'Двадцать' },
              { type: 'fill_blank', sentence: 'У меня есть ___ карандаш.', hint: "('qora' rangi, erkak jinsidagi so'zga)", options: ['чёрный', 'чёрная', 'чёрное', 'чёрные'], answer: 'чёрный' },
              { type: 'fill_blank', sentence: 'Это ___ пальто.', hint: "('oq' rangi, o'rta jinsdagi so'zga)", options: ['белое', 'белый', 'белая', 'белые'], answer: 'белое' },
              { type: 'match', pairs: [{ ru: 'Чёрный', uz: 'Qora' }, { ru: 'Белый', uz: 'Oq' }, { ru: 'Коричневый', uz: 'Jigarrang' }, { ru: 'Серый', uz: 'Kulrang' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это коричневое здание', options: ['Bu jigarrang bino', 'Bu qora bino', 'Bu kulrang bino', 'Bu oq bino'], answer: 'Bu jigarrang bino' },
              { type: 'fill_blank', sentence: 'Это ___ куртка.', hint: "('kulrang', ayol jinsidagi so'zga)", options: ['серая', 'серый', 'серое', 'серые'], answer: 'серая' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu sariq soyabon', options: ['Это жёлтый зонт', 'Это жёлтое ведро', 'Это жёлтая юбка', 'Это жёлтые шары'], answer: 'Это жёлтый зонт' },
              { type: 'fill_blank', sentence: 'Это ___ урок.', hint: "(tartib son 'birinchi')", options: ['первый', 'первая', 'первое', 'один'], answer: 'первый' },
              { type: 'fill_blank', sentence: 'Это ___ страница.', hint: "(tartib son 'ikkinchi', ayol jinsida)", options: ['вторая', 'второй', 'второе', 'два'], answer: 'вторая' },
              { type: 'fill_blank', sentence: 'Это ___ упражнение.', hint: "(tartib son 'uchinchi', o'rta jinsda)", options: ['третье', 'третий', 'третья', 'три'], answer: 'третье' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Сегодня пятое.', options: ['Bugun beshinchi (sana)', 'Bugun besh soat', 'Bugun besh kun', 'Bugun beshinchi dars'], answer: 'Bugun beshinchi (sana)' },
              { type: 'listening', audioText: 'Сегодня двадцать первое.', question: 'Bugun nechanchi sana?', options: ['21', '12', '20', '31'], answer: '21' },
              { type: 'match', pairs: [{ ru: 'Танцевать', uz: 'Raqsga tushmoq' }, { ru: 'Любить', uz: 'Sevmoq/yoqtirmoq' }, { ru: 'Играть', uz: "O'ynamoq" }, { ru: 'Читать', uz: "O'qimoq" }] },
              { type: 'fill_blank', sentence: 'Я ___ танцевать.', hint: "('yoqtirmoq' fe'lining 'men' shakli, II guruh)", options: ['люблю', 'любишь', 'любит', 'любим'], answer: 'люблю' },
              { type: 'fill_blank', sentence: 'Она хорошо ___.', hint: "('raqsga tushmoq' fe'lining 'u ayol' shakli)", options: ['танцует', 'танцую', 'танцуешь', 'танцуем'], answer: 'танцует' },
              { type: 'order', prompt: 'Menda qirq besh kitob bor', tiles: ['У', 'меня', 'сорок', 'пять', 'книг'], answer: 'У меня сорок пять книг' },
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
              { type: 'match', pairs: [{ ru: 'Январь', uz: 'Yanvar' }, { ru: 'Февраль', uz: 'Fevral' }, { ru: 'Март', uz: 'Mart' }, { ru: 'Апрель', uz: 'Aprel' }] },
              { type: 'match', pairs: [{ ru: 'Май', uz: 'May' }, { ru: 'Июнь', uz: 'Iyun' }, { ru: 'Июль', uz: 'Iyul' }, { ru: 'Август', uz: 'Avgust' }] },
              { type: 'match', pairs: [{ ru: 'Сентябрь', uz: 'Sentabr' }, { ru: 'Октябрь', uz: 'Oktabr' }, { ru: 'Ноябрь', uz: 'Noyabr' }, { ru: 'Декабрь', uz: 'Dekabr' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какой сейчас месяц?', options: ['Hozir qaysi oy?', 'Bugun qaysi kun?', 'Soat necha?', 'Bugun necha sana?'], answer: 'Hozir qaysi oy?' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bugun necha sana?', options: ['Какое сегодня число?', 'Какой сегодня день?', 'Сколько сейчас времени?', 'Какой месяц был вчера?'], answer: 'Какое сегодня число?' },
              { type: 'fill_blank', sentence: 'Завтра ___ 1 сентября.', hint: "('bo'ladi' fe'lining kelasi zamon shakli)", options: ['будет', 'было', 'есть', 'был'], answer: 'будет' },
              { type: 'fill_blank', sentence: 'Вчера ___ 30 августа.', hint: "('edi' — o'tgan zamon 'bo'lmoq')", options: ['было', 'будет', 'есть', 'была'], answer: 'было' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kecha seshanba edi', options: ['Вчера был вторник', 'Вчера была среда', 'Завтра будет вторник', 'Сегодня вторник'], answer: 'Вчера был вторник' },
              { type: 'match', pairs: [{ ru: 'Хочу', uz: 'Xohlayman' }, { ru: 'Хочешь', uz: 'Xohlaysan' }, { ru: 'Хочет', uz: 'Xohlaydi' }, { ru: 'Хотим', uz: 'Xohlaymiz' }] },
              { type: 'fill_blank', sentence: 'Я ___ изучать русский язык.', hint: "('xohlamoq' fe'lining 'men' shakli)", options: ['хочу', 'хочешь', 'хочет', 'хотим'], answer: 'хочу' },
              { type: 'fill_blank', sentence: 'Вы ___ читать по-русски?', hint: "('xohlamoq' fe'lining 'siz' shakli)", options: ['хотите', 'хочешь', 'хочет', 'хотят'], answer: 'хотите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Они хотят учить новые слова', options: ["Ular yangi so'zlarni o'rganishni xohlashadi", "Ular yangi so'zlarni bilishadi", "Biz yangi so'zlarni o'rganamiz", "Sen yangi so'zlarni o'rganasan"], answer: "Ular yangi so'zlarni o'rganishni xohlashadi" },
              { type: 'fill_blank', sentence: 'Музыку можно слушать ___ комнате.', hint: '(joy bildiruvchi predlog, o\u2019rin-payt kelishigi)', options: ['в', 'на', 'с', 'у'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Фильм можно смотреть ___ кинотеатре.', hint: '(joy bildiruvchi predlog)', options: ['в', 'на', 'с', 'из'], answer: 'в' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Iltimos, ruchka va konvertni bering', options: ['Дайте, пожалуйста, ручку и конверт', 'Покажите, пожалуйста, ручку и конверт', 'Возьмите, пожалуйста, ручку и конверт', 'Дайте, пожалуйста, книгу и газету'], answer: 'Дайте, пожалуйста, ручку и конверт' },
              { type: 'listening', audioText: 'Сегодня двадцать второе декабря, вторник.', question: 'Bugun qaysi kun?', options: ['Seshanba', 'Dushanba', 'Chorshanba', 'Payshanba'], answer: 'Seshanba' },
              { type: 'order', prompt: "Ertaga payshanba bo'ladi", tiles: ['Завтра', 'будет', 'четверг'], answer: 'Завтра будет четверг' },
              { type: 'match', pairs: [{ ru: 'Зимой', uz: 'Qishda' }, { ru: 'Весной', uz: 'Bahorda' }, { ru: 'Летом', uz: 'Yozda' }, { ru: 'Осенью', uz: 'Kuzda' }] },
              { type: 'fill_blank', sentence: 'Мы отдыхаем ___ воскресенье.', hint: "(kun nomlaridan oldin keladigan predlog)", options: ['в', 'на', 'к', 'с'], answer: 'в' },
              { type: 'fill_blank', sentence: 'У нас каникулы ___ январе.', hint: "(oy nomlaridan oldin keladigan predlog)", options: ['в', 'на', 'к', 'с'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Утром', uz: 'Ertalab' }, { ru: 'Днём', uz: 'Kunduzi' }, { ru: 'Вечером', uz: 'Kechqurun' }, { ru: 'Ночью', uz: 'Kechasi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ночью Ира спит.', options: ['Kechasi Ira uxlaydi', 'Kunduzi Ira uxlaydi', 'Ertalab Ira uxlaydi', "Kechqurun Ira uyg'onadi"], answer: 'Kechasi Ira uxlaydi' },
              { type: 'fill_blank', sentence: 'Я ___ в буфете.', hint: "('nonushta qilmoq' fe'lining 'men' shakli)", options: ['завтракаю', 'завтракаешь', 'завтракает', 'завтракаем'], answer: 'завтракаю' },
              { type: 'fill_blank', sentence: 'Ты ___ в столовой.', hint: "('tushlik qilmoq' fe'lining 'sen' shakli)", options: ['обедаешь', 'обедаю', 'обедает', 'обедаем'], answer: 'обедаешь' },
              { type: 'fill_blank', sentence: 'Они ___ вечером.', hint: "('kechki ovqat yemoq' fe'lining 'ular' shakli)", options: ['ужинают', 'ужинает', 'ужинаю', 'ужинаем'], answer: 'ужинают' },
              { type: 'match', pairs: [{ ru: 'Завтракать', uz: 'Nonushta qilmoq' }, { ru: 'Обедать', uz: 'Tushlik qilmoq' }, { ru: 'Ужинать', uz: 'Kechki ovqat yemoq' }, { ru: 'Спать', uz: 'Uxlamoq' }] },
              { type: 'choice', dir: 'uz2ru', prompt: 'Soat nechi?', options: ['Который час?', 'Какой сегодня день?', 'Какое сегодня число?', 'Сколько лет?'], answer: 'Который час?' },
              { type: 'listening', audioText: 'Сейчас семь часов пятнадцать минут.', question: 'Soat nechida?', options: ['7:15', '7:50', '5:17', '17:07'], answer: '7:15' },
              { type: 'fill_blank', sentence: 'Я делаю домашнее задание 3 ___.', hint: "('soat' so'zining 2-4 sonlaridan keyingi shakli)", options: ['часа', 'час', 'часов', 'часами'], answer: 'часа' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Сколько времени вы изучаете русский язык?', options: ["Siz rus tilini qancha vaqtdan beri o'rganasiz?", "Siz rus tilini qachon o'rganasiz?", "Siz rus tilini nima uchun o'rganasiz?", "Siz rus tilini qayerda o'rganasiz?"], answer: "Siz rus tilini qancha vaqtdan beri o'rganasiz?" },
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
              { type: 'fill_blank', sentence: 'Обычно Алекс ___ на стадион в субботу.', hint: "('bormoq' odatiy/takroriy fe'li, II guruh)", options: ['ходит', 'идёт', 'едет', 'ездит'], answer: 'ходит' },
              { type: 'fill_blank', sentence: 'Автобус ___ по городу.', hint: "('yurmoq' odatiy fe'li, transport uchun)", options: ['ездит', 'едет', 'идёт', 'ходит'], answer: 'ездит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети едут в Новгород', options: ['Bolalar Novgorodga ketishyapti', 'Bolalar Novgorodga borishyapti (piyoda)', "Bolalar Novgorodda o'tirishibdi", 'Bolalar Novgoroddan kelishyapti'], answer: 'Bolalar Novgorodga ketishyapti' },
              { type: 'match', pairs: [{ ru: 'Иду', uz: 'Yuryapman (piyoda)' }, { ru: 'Еду', uz: 'Ketyapman (transportda)' }, { ru: 'Хожу', uz: 'Yuraman (odatiy)' }, { ru: 'Езжу', uz: 'Ketaman (odatiy)' }] },
              { type: 'fill_blank', sentence: 'Завтра я ___ в театр.', hint: "('bormoq' fe'lining kelasi zamon shakli, piyoda)", options: ['пойду', 'иду', 'поеду', 'еду'], answer: 'пойду' },
              { type: 'fill_blank', sentence: 'Завтра он ___ в Москву.', hint: "('ketmoq' fe'lining kelasi zamon shakli, transportda)", options: ['поедет', 'едет', 'пойдёт', 'идёт'], answer: 'поедет' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kecha men teatrda edim', options: ['Вчера я был в театре', 'Вчера я ходил в театр', 'Завтра я буду в театре', 'Сейчас я в театре'], answer: 'Вчера я был в театре' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Антон ходил в театр', options: ['Anton teatrga borgan edi', 'Anton teatrda edi', 'Anton teatrga ketyapti', "Anton teatrni yaxshi ko'radi"], answer: 'Anton teatrga borgan edi' },
              { type: 'fill_blank', sentence: 'Антон приехал ___ Берлина.', hint: "('dan' predlogi, kelib chiqish manbai)", options: ['из', 'в', 'с', 'от'], answer: 'из' },
              { type: 'fill_blank', sentence: 'Я еду ___ Испанию.', hint: "(yo'nalish bildiruvchi predlog, 'ga')", options: ['в', 'из', 'на', 'с'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Машина едет ___ завода.', hint: "('dan' predlogi, ba'zi so'zlar bilan 'с' ishlatiladi)", options: ['с', 'из', 'в', 'к'], answer: 'с' },
              { type: 'match', pairs: [{ ru: 'Куда?', uz: 'Qayerga?' }, { ru: 'Где?', uz: 'Qayerda?' }, { ru: 'Откуда?', uz: 'Qayerdan?' }, { ru: 'Домой', uz: 'Uyga' }] },
              { type: 'listening', audioText: 'Я иду в школу пешком, а мой папа едет на работу на машине.', question: 'Ota qanday transportda ishga boradi?', options: ['Mashinada', 'Piyoda', 'Poyezdda', 'Avtobusda'], answer: 'Mashinada' },
              { type: 'order', prompt: "U kinoteatrga ketmoqchi (ertaga)", tiles: ['Завтра', 'он', 'пойдёт', 'в', 'кино'], answer: 'Завтра он пойдёт в кино' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men Vengriyadan keldim', options: ['Я приехал из Венгрии', 'Я еду в Венгрию', 'Я живу в Венгрии', 'Я приехал в Венгрию'], answer: 'Я приехал из Венгрии' },
              { type: 'fill_blank', sentence: 'Мальчик ___ в парк утром.', hint: "('bormoq' odatiy fe'li, II guruh, piyoda)", options: ['ходит', 'идёт', 'едет', 'ездит'], answer: 'ходит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Обычно машина ездит в город', options: ['Odatda mashina shaharga boradi', 'Hozir mashina shaharga ketyapti', 'Mashina shahardan keldi', 'Mashina shaharda turibdi'], answer: 'Odatda mashina shaharga boradi' },
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
              { type: 'match', pairs: [{ ru: 'Чашка', uz: 'Piyola' }, { ru: 'Стакан', uz: 'Stakan' }, { ru: 'Тарелка', uz: 'Likopcha' }, { ru: 'Вилка', uz: 'Vilka' }] },
              { type: 'match', pairs: [{ ru: 'Ложка', uz: 'Qoshiq' }, { ru: 'Нож', uz: 'Pichoq' }, { ru: 'Окно', uz: 'Deraza' }, { ru: 'Дверь', uz: 'Eshik' }] },
              { type: 'fill_blank', sentence: 'На столе стоит ___.', hint: "('stakan' so'zi)", options: ['стакан', 'стакана', 'стакану', 'стаканом'], answer: 'стакан' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ложка и вилка на столе', options: ['Qoshiq va vilka stolda', 'Qoshiq va pichoq stolda', 'Likopcha va stakan stolda', 'Chashka va likopcha stolda'], answer: 'Qoshiq va vilka stolda' },
              { type: 'fill_blank', sentence: 'Стул стоит ___ стола.', hint: "('yonida' emas, 'yaqinida' ma'nosini beruvchi predlog)", options: ['около', 'в', 'на', 'из'], answer: 'около' },
              { type: 'choice', dir: 'uz2ru', prompt: "Kitob javonda", options: ['Книга в шкафу', 'Книга на шкафу', 'Книга у шкафа', 'Книга со шкафа'], answer: 'Книга в шкафу' },
              { type: 'fill_blank', sentence: 'Лампа стоит ___ столе.', hint: "('stol ustida' ma'nosini beruvchi predlog)", options: ['на', 'в', 'у', 'с'], answer: 'на' },
              { type: 'match', pairs: [{ ru: 'Виноград', uz: 'Uzum' }, { ru: 'Яблоко', uz: 'Olma' }, { ru: 'Картошка', uz: 'Kartoshka' }, { ru: 'Морковка', uz: 'Sabzi' }] },
              { type: 'match', pairs: [{ ru: 'Капуста', uz: 'Karam' }, { ru: 'Груша', uz: 'Nok' }, { ru: 'Молоко', uz: 'Sut' }, { ru: 'Мыло', uz: 'Sovun' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня дома есть виноград и яблоки', options: ['Uyimda uzum va olma bor', 'Uyimda kartoshka va sabzi bor', 'Uyimda sut va sovun bor', 'Uyimda non va sut bor'], answer: 'Uyimda uzum va olma bor' },
              { type: 'fill_blank', sentence: 'Утром я пью ___.', hint: "('sut' so'zi)", options: ['молоко', 'молока', 'молоку', 'молоком'], answer: 'молоко' },
              { type: 'listening', audioText: 'В моей комнате есть кровать, стол и шкаф.', question: 'Xonada nima bor?', options: ['Karavot, stol va javon', 'Faqat karavot', 'Divan va televizor', 'Stol va oshxona'], answer: 'Karavot, stol va javon' },
              { type: 'order', prompt: 'Deraza yonida stol bor', tiles: ['Около', 'окна', 'есть', 'стол'], answer: 'Около окна есть стол' },
              { type: 'fill_blank', sentence: 'В кухне стоит ___.', hint: "('stol' so'zi)", options: ['стол', 'стола', 'столу', 'столом'], answer: 'стол' },
              { type: 'choice', dir: 'uz2ru', prompt: "Divan xonada, televizor ham shu yerda", options: ['Диван в комнате, телевизор тоже здесь', 'Диван на кухне, телевизор в ванной', 'Стол в комнате, диван на кухне', 'Кровать в кухне'], answer: 'Диван в комнате, телевизор тоже здесь' },
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
              { type: 'match', pairs: [{ ru: 'Волейбол', uz: 'Voleybol' }, { ru: 'Хоккей', uz: 'Xokkey' }, { ru: 'Гимнастика', uz: 'Gimnastika' }, { ru: 'Бег', uz: 'Yugurish' }] },
              { type: 'match', pairs: [{ ru: 'Плавать', uz: 'Suzmoq' }, { ru: 'Бегать', uz: 'Yugurmoq' }, { ru: 'Играть', uz: "O'ynamoq" }, { ru: 'Заниматься', uz: "Shug'ullanmoq" }] },
              { type: 'fill_blank', sentence: 'Я занимаюсь ___ спортом.', hint: "('katta' sifatining vositalik kelishigi, erkak/o'rta jinsda)", options: ['большим', 'большой', 'большое', 'большие'], answer: 'большим' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Виктор занимается большим теннисом', options: ["Viktor katta tennis bilan shug'ullanadi", "Viktor futbol o'ynaydi", "Viktor suzish bilan shug'ullanadi", 'Viktor gimnastika qiladi'], answer: "Viktor katta tennis bilan shug'ullanadi" },
              { type: 'fill_blank', sentence: 'Ты любишь играть ___ баскетбол?', hint: "('o'ynamoq' iborasida ishlatiladigan predlog)", options: ['в', 'на', 'с', 'о'], answer: 'в' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har kuni suzaman', options: ['Я каждый день плаваю', 'Я каждый день бегаю', 'Я иногда плаваю', 'Я никогда не плаваю'], answer: 'Я каждый день плаваю' },
              { type: 'match', pairs: [{ ru: 'Стадион', uz: 'Stadion' }, { ru: 'Бассейн', uz: 'Basseyn' }, { ru: 'Мяч', uz: "To'p" }, { ru: 'Команда', uz: 'Jamoa' }] },
              { type: 'fill_blank', sentence: 'Мы играем в футбол ___ стадионе.', hint: "(joy-payt kelishigi predlogi)", options: ['на', 'в', 'к', 'с'], answer: 'на' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Наша команда играет хорошо', options: ["Bizning jamoamiz yaxshi o'ynaydi", "Bizning jamoamiz yomon o'ynaydi", 'Ularning jamoasi kuchli', 'Mening do\u2019stim sportchi'], answer: "Bizning jamoamiz yaxshi o'ynaydi" },
              { type: 'listening', audioText: 'По субботам я играю в футбол на стадионе.', question: "Qachon futbol o'ynaydi?", options: ['Shanba kunlari', 'Yakshanba kunlari', 'Har kuni', 'Faqat dam olish kunida'], answer: 'Shanba kunlari' },
              { type: 'order', prompt: 'U basseynda suzadi', tiles: ['Он', 'плавает', 'в', 'бассейне'], answer: 'Он плавает в бассейне' },
              { type: 'fill_blank', sentence: 'Я люблю ___ в волейбол.', hint: "('o'ynamoq' fe'lining infinitiv shakli)", options: ['играть', 'играю', 'играешь', 'играет'], answer: 'играть' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sport sog'liq uchun foydali", options: ['Спорт полезен для здоровья', 'Спорт вреден для здоровья', 'Спорт трудный', 'Спорт неинтересный'], answer: 'Спорт полезен для здоровья' },
              { type: 'match', pairs: [{ ru: 'Сильный', uz: 'Kuchli' }, { ru: 'Быстрый', uz: 'Tez' }, { ru: 'Здоровый', uz: "Sog'lom" }, { ru: 'Спортсмен', uz: 'Sportchi' }] },
              { type: 'fill_blank', sentence: 'Он ___ спортсмен.', hint: "('kuchli', erkak jinsidagi sifat)", options: ['сильный', 'сильная', 'сильное', 'сильные'], answer: 'сильный' },
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
              { type: 'match', pairs: [{ ru: 'Страна', uz: 'Mamlakat' }, { ru: 'Здание', uz: 'Bino' }, { ru: 'Школа', uz: 'Maktab' }, { ru: 'Аптека', uz: 'Dorixona' }] },
              { type: 'match', pairs: [{ ru: 'Университет', uz: 'Universitet' }, { ru: 'Библиотека', uz: 'Kutubxona' }, { ru: 'Вокзал', uz: 'Vokzal' }, { ru: 'Почта', uz: 'Pochta' }] },
              { type: 'fill_blank', sentence: 'Лекарство можно купить ___ аптеке.', hint: "(joy-payt kelishigi predlogi)", options: ['в', 'на', 'с', 'у'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Тетради и ручки можно купить ___ магазине.', hint: "(joy-payt kelishigi predlogi)", options: ['в', 'на', 'с', 'из'], answer: 'в' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Где можно слушать музыку?', options: ["Musiqani qayerda tinglash mumkin?", "Musiqani qanday tinglash mumkin?", "Musiqani nima uchun tinglash mumkin?", "Kim musiqa tinglaydi?"], answer: "Musiqani qayerda tinglash mumkin?" },
              { type: 'fill_blank', sentence: 'Я работаю ___ заводе.', hint: "('zavodda' predlogi, ba'zi so'zlar bilan 'на' ishlatiladi)", options: ['на', 'в', 'к', 'у'], answer: 'на' },
              { type: 'fill_blank', sentence: 'Она отдыхает ___ санатории.', hint: "(joy-payt kelishigi predlogi)", options: ['в', 'на', 'с', 'к'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Стадион', uz: 'Stadion' }, { ru: 'Кинотеатр', uz: 'Kinoteatr' }, { ru: 'Больница', uz: 'Kasalxona' }, { ru: 'Гимназия', uz: 'Gimnaziya' }] },
              { type: 'choice', dir: 'uz2ru', prompt: "Kutubxonada kitob va gazeta o'qish mumkin", options: ['В библиотеке можно читать книги и газеты', 'В библиотеке можно купить книги', 'В школе можно читать газеты', 'В аптеке можно читать книги'], answer: 'В библиотеке можно читать книги и газеты' },
              { type: 'fill_blank', sentence: 'Фильм можно смотреть ___ кинотеатре.', hint: "(joy-payt kelishigi predlogi)", options: ['в', 'на', 'с', 'у'], answer: 'в' },
              { type: 'order', prompt: 'Bu yerda katta universitet bor', tiles: ['Здесь', 'есть', 'большой', 'университет'], answer: 'Здесь есть большой университет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это старый русский город', options: ['Bu qadimiy rus shahri', 'Bu yangi rus shahri', 'Bu katta rus shahri', 'Bu kichik rus shahri'], answer: 'Bu qadimiy rus shahri' },
              { type: 'listening', audioText: 'В городе есть парки, стадионы и музеи.', question: 'Shaharda nima bor?', options: ["Bog'lar, stadionlar va muzeylar", 'Faqat maktablar', "Faqat do'konlar", 'Faqat kasalxonalar'], answer: "Bog'lar, stadionlar va muzeylar" },
              { type: 'fill_blank', sentence: 'Здесь есть красивые улицы и ___.', hint: "('bog'lar' so'zining ko'plik shakli)", options: ['парки', 'парк', 'парком', 'парках'], answer: 'парки' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerda qadimiy rus arxitekturasi yodgorliklari bor', options: ['Здесь есть памятники древнерусской архитектуры', 'Здесь есть новые здания', 'Здесь есть большие магазины', 'Здесь есть маленькие улицы'], answer: 'Здесь есть памятники древнерусской архитектуры' },
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
              { type: 'match', pairs: [{ ru: 'Гора', uz: "Tog'" }, { ru: 'Лес', uz: "O'rmon" }, { ru: 'Озеро', uz: "Ko'l" }, { ru: 'Река', uz: 'Daryo' }] },
              { type: 'match', pairs: [{ ru: 'Путешествие', uz: 'Sayohat' }, { ru: 'Отдыхать', uz: 'Dam olmoq' }, { ru: 'Загорать', uz: 'Quyosh vannasi olmoq' }, { ru: 'Купаться', uz: "Cho'milmoq" }] },
              { type: 'fill_blank', sentence: 'Летом я отдыхаю ___ горах.', hint: "(joy-payt kelishigi predlogi, ko'plikda)", options: ['в', 'на', 'к', 'с'], answer: 'в' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы купаемся в озере', options: ["Biz ko'lda cho'milamiz", "Biz ko'lda suzamiz", 'Biz dengizda dam olamiz', "Biz tog'da yuramiz"], answer: "Biz ko'lda cho'milamiz" },
              { type: 'fill_blank', sentence: 'У меня есть ___ на самолёт.', hint: "('chipta' so'zi)", options: ['билет', 'билета', 'билету', 'билетом'], answer: 'билет' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men chamadonimni yig'ayapman", options: ['Я собираю чемодан', 'Я открываю чемодан', 'Я покупаю чемодан', 'Я ищу чемодан'], answer: 'Я собираю чемодан' },
              { type: 'match', pairs: [{ ru: "Собирать чемодан", uz: "Chamadon yig'moq" }, { ru: 'Загорать', uz: 'Quyosh vannasi olmoq' }, { ru: 'Фотографировать', uz: 'Suratga olmoq' }, { ru: 'Отдыхать', uz: 'Dam olmoq' }] },
              { type: 'fill_blank', sentence: 'В отпуске мы ___ на пляже.', hint: "('quyosh vannasi olmoq' fe'lining 'biz' shakli)", options: ['загораем', 'загораю', 'загораешь', 'загорают'], answer: 'загораем' },
              { type: 'listening', audioText: 'В августе моя семья едет к морю.', question: 'Oila qachon dengizga boradi?', options: ['Avgustda', 'Iyulda', 'Sentabrda', 'Iyunda'], answer: 'Avgustda' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы фотографируем красивые горы', options: ["Biz go'zal tog'larni suratga olamiz", "Biz go'zal tog'larga chiqamiz", "Biz go'zal ko'llarda suzamiz", "Biz go'zal o'rmonda yuramiz"], answer: "Biz go'zal tog'larni suratga olamiz" },
              { type: 'order', prompt: "Ta'tilda biz dengizga boramiz", tiles: ['В', 'отпуске', 'мы', 'едем', 'к', 'морю'], answer: 'В отпуске мы едем к морю' },
              { type: 'fill_blank', sentence: 'Мы едем ___ горы каждое лето.', hint: "(yo'nalish bildiruvchi predlog)", options: ['в', 'на', 'к', 'из'], answer: 'в' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yerdagi tabiat juda go'zal", options: ['Здесь очень красивая природа', 'Здесь очень холодно', 'Здесь очень шумно', 'Здесь очень далеко'], answer: 'Здесь очень красивая природа' },
              { type: 'match', pairs: [{ ru: 'Природа', uz: 'Tabiat' }, { ru: 'Красивый', uz: "Go'zal" }, { ru: 'Тёплый', uz: 'Issiq' }, { ru: 'Холодный', uz: 'Sovuq' }] },
              { type: 'fill_blank', sentence: 'Летом ___ море тепло.', hint: "('dengizda', joy-payt kelishigi predlogi)", options: ['на', 'в', 'у', 'с'], answer: 'на' },
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
              { type: 'match', pairs: [{ ru: 'Кашель', uz: "Yo'tal" }, { ru: 'Насморк', uz: 'Tumov' }, { ru: 'Температура', uz: 'Harorat' }, { ru: 'Простуда', uz: 'Shamollash' }] },
              { type: 'fill_blank', sentence: 'У меня болит ___.', hint: "('bosh' so'zi)", options: ['голова', 'голову', 'голове', 'головой'], answer: 'голова' },
              { type: 'fill_blank', sentence: 'У меня болит ___.', hint: "('tish' so'zi)", options: ['зуб', 'зуба', 'зубу', 'зубом'], answer: 'зуб' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня болит живот', options: ["Qorinim og'riyapti", "Boshim og'riyapti", "Tomog'im og'riyapti", "Tishim og'riyapti"], answer: "Qorinim og'riyapti" },
              { type: 'match', pairs: [{ ru: 'Болит', uz: "Og'riyapti" }, { ru: 'Здоровый', uz: "Sog'lom" }, { ru: 'Больной', uz: 'Bemor' }, { ru: 'Выздороветь', uz: 'Tuzalmoq' }] },
              { type: 'fill_blank', sentence: 'Мне нужно ___ врача.', hint: "('shifokor' so'zi, tushum kelishigi)", options: ['врача', 'врач', 'врачу', 'врачом'], answer: 'врача' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men shifokorga bormoqchiman', options: ['Я хочу пойти к врачу', 'Я хочу пойти в аптеку', 'Я хочу пойти домой', 'Я хочу пойти в школу'], answer: 'Я хочу пойти к врачу' },
              { type: 'fill_blank', sentence: 'Врач говорит: «Вам нужно пить ___».', hint: "('dori' so'zi)", options: ['лекарство', 'лекарства', 'лекарству', 'лекарством'], answer: 'лекарство' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не хожу в школу, потому что я болею', options: ['Men maktabga bormayman, chunki kasalman', "Men maktabga boraman, chunki sog'lomman", 'Men maktabni yaxshi ko\u2019raman', 'Men shifokorman'], answer: 'Men maktabga bormayman, chunki kasalman' },
              { type: 'listening', audioText: 'У меня температура и кашель. Я не иду в школу.', question: 'Nega maktabga bormayapti?', options: ['Kasal', 'Dam oladi', 'Uxlamoqchi', 'Sayohatga ketyapti'], answer: 'Kasal' },
              { type: 'order', prompt: "Menda tumov va yo'tal bor", tiles: ['У', 'меня', 'насморк', 'и', 'кашель'], answer: 'У меня насморк и кашель' },
              { type: 'fill_blank', sentence: 'Сегодня я чувствую себя ___.', hint: "('yaxshi' ravishi)", options: ['хорошо', 'хороший', 'хорошая', 'хорошее'], answer: 'хорошо' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ertaga tuzalaman deb umid qilaman", options: ['Я надеюсь, что завтра выздоровею', 'Я думаю, что завтра заболею', 'Я знаю, что завтра пойду в школу', 'Я хочу спать весь день'], answer: 'Я надеюсь, что завтра выздоровею' },
              { type: 'match', pairs: [{ ru: 'Градусник', uz: 'Termometr' }, { ru: 'Укол', uz: 'Ukol' }, { ru: 'Таблетка', uz: 'Tabletka' }, { ru: 'Постель', uz: "To'shak" }] },
              { type: 'fill_blank', sentence: 'Больной лежит в ___.', hint: "('to'shak' so'zi, joy-payt kelishigi)", options: ['постели', 'постель', 'постелью', 'постелям'], answer: 'постели' },
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
              { type: 'gender', prompt: 'Ручка', options: ['он', 'она', 'оно'], answer: 'она' },
              { type: 'gender', prompt: 'Яблоко', options: ['он', 'она', 'оно'], answer: 'оно' },
              { type: 'gender', prompt: 'Учебник', options: ['он', 'она', 'оно'], answer: 'он' },
              { type: 'gender', prompt: 'Задание', options: ['он', 'она', 'оно'], answer: 'оно' },
              { type: 'fill_blank', sentence: 'Чей это учебник? — ___.', hint: "('mening' egalik olmoshi, erkak jinsidagi so'zga)", options: ['Мой', 'Моя', 'Моё', 'Мои'], answer: 'Мой' },
              { type: 'fill_blank', sentence: 'Чья это ручка? — ___.', hint: "('mening' egalik olmoshi, ayol jinsidagi so'zga)", options: ['Моя', 'Мой', 'Моё', 'Мои'], answer: 'Моя' },
              { type: 'fill_blank', sentence: 'Чьё это окно? — ___.', hint: "('bizning' egalik olmoshi, o'rta jinsdagi so'zga)", options: ['Наше', 'Наш', 'Наша', 'Наши'], answer: 'Наше' },
              { type: 'fill_blank', sentence: 'Чьи это вещи? — ___.', hint: "('mening' egalik olmoshi, ko'plik shakli)", options: ['Мои', 'Мой', 'Моя', 'Моё'], answer: 'Мои' },
              { type: 'match', pairs: [{ ru: 'Мой (у)', uz: 'Mening (erkak jinsi)' }, { ru: 'Моя (ж)', uz: 'Mening (ayol jinsi)' }, { ru: 'Моё (с)', uz: "Mening (o'rta jins)" }, { ru: 'Мои', uz: "Mening (ko'plik)" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня есть друг и подруга.', options: ["Mening do'stim (erkak) va do'stim (ayol) bor", "Sening do'sting bor", "Bizning do'stimiz bor", "Uning do'sti bor"], answer: "Mening do'stim (erkak) va do'stim (ayol) bor" },
              { type: 'fill_blank', sentence: 'У ___ есть друг.', hint: "('u ayol'ga tegishli kelishik shakli)", options: ['неё', 'она', 'ней', 'ей'], answer: 'неё' },
              { type: 'fill_blank', sentence: 'У ___ есть учебник.', hint: "('u erkak'ga tegishli kelishik shakli)", options: ['него', 'он', 'нём', 'ему'], answer: 'него' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sizda do'st bormi?", options: ['У вас есть друг?', 'У тебя есть друг?', 'У нас есть друг?', 'У них есть друг?'], answer: 'У вас есть друг?' },
              { type: 'fill_blank', sentence: 'У меня ___ красный карандаш.', hint: "('bor' fe'li, hozirgi zamon)", options: ['есть', 'был', 'будет', 'нет'], answer: 'есть' },
              { type: 'match', pairs: [{ ru: 'Красный', uz: 'Qizil (erkak jinsi)' }, { ru: 'Красная', uz: 'Qizil (ayol jinsi)' }, { ru: 'Красное', uz: "Qizil (o'rta jins)" }, { ru: 'Красные', uz: "Qizil (ko'plik)" }] },
              { type: 'fill_blank', sentence: 'У неё есть красн___ пальто.', hint: "(sifatning o'rta jinsdagi tugashi)", options: ['ое', 'ый', 'ая', 'ые'], answer: 'ое' },
              { type: 'fill_blank', sentence: 'У него есть красн___ ручка.', hint: "(sifatning ayol jinsidagi tugashi)", options: ['ая', 'ый', 'ое', 'ые'], answer: 'ая' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Русский студент, русские студенты', options: ['Rus talaba, rus talabalar', 'Rus tili, rus adabiyoti', 'Rus shahri, rus shaharlari', 'Rus kitobi, rus kitoblari'], answer: 'Rus talaba, rus talabalar' },
              { type: 'order', prompt: "Bu bizning yangi o'qituvchimiz", tiles: ['Это', 'наш', 'новый', 'учитель'], answer: 'Это наш новый учитель' },
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
              { type: 'whowhat', prompt: 'Актёр', options: ['Кто', 'Что'], answer: 'Кто' },
              { type: 'whowhat', prompt: 'Учебник', options: ['Кто', 'Что'], answer: 'Что' },
              { type: 'whowhat', prompt: 'Певец', options: ['Кто', 'Что'], answer: 'Кто' },
              { type: 'whowhat', prompt: 'Радио', options: ['Кто', 'Что'], answer: 'Что' },
              { type: 'whowhat', prompt: 'Инженер', options: ['Кто', 'Что'], answer: 'Кто' },
              { type: 'whowhat', prompt: 'Мяч', options: ['Кто', 'Что'], answer: 'Что' },
              { type: 'fill_blank', sentence: '___ это? Это врач.', hint: "(odam haqida so'ralganda ishlatiladigan so'roq so'zi)", options: ['Кто', 'Что', 'Где', 'Когда'], answer: 'Кто' },
              { type: 'fill_blank', sentence: '___ это? Это учебник.', hint: "(narsa haqida so'ralganda ishlatiladigan so'roq so'zi)", options: ['Что', 'Кто', 'Какой', 'Чей'], answer: 'Что' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это не турист. Это студент.', options: ['Bu turist emas. Bu talaba.', "Bu turist. Bu talaba emas.", "Bu o'qituvchi.", 'Bu shifokor.'], answer: 'Bu turist emas. Bu talaba.' },
              { type: 'match', pairs: [{ ru: 'Космонавт', uz: 'Kosmonavt' }, { ru: 'Пилот', uz: 'Uchuvchi' }, { ru: 'Повар', uz: 'Oshpaz' }, { ru: 'Продавец', uz: 'Sotuvchi' }] },
              { type: 'listening', audioText: 'Это не музыкант. Это художник.', question: 'Bu odam kim?', options: ['Rassom', 'Musiqachi', 'Aktyor', 'Shifokor'], answer: 'Rassom' },
              { type: 'order', prompt: 'Bu sekretar', tiles: ['Это', 'секретарь'], answer: 'Это секретарь' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu kim?', options: ['Кто это?', 'Что это?', 'Где это?', 'Как это?'], answer: 'Кто это?' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu nima?', options: ['Что это?', 'Кто это?', 'Чей это?', 'Какой это?'], answer: 'Что это?' },
              { type: 'match', pairs: [{ ru: 'Директор', uz: 'Direktor' }, { ru: 'Стюардесса', uz: 'Styuardessa' }, { ru: 'Гитара', uz: 'Gitara' }, { ru: 'Магнитофон', uz: 'Magnitafon' }] },
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
              { type: 'fill_blank', sentence: 'Он ___ книгу.', hint: "('o'qimoq' fe'lining 'u' shakli, I guruh)", options: ['читает', 'читаю', 'читаешь', 'читаем'], answer: 'читает' },
              { type: 'fill_blank', sentence: 'Мы ___ письмо.', hint: "('yozmoq' fe'lining 'biz' shakli, I guruh)", options: ['пишем', 'пишете', 'пишут', 'пишу'], answer: 'пишем' },
              { type: 'fill_blank', sentence: 'Вы ___ по-русски?', hint: "('gapirmoq' fe'lining 'siz' shakli, II guruh)", options: ['говорите', 'говорим', 'говорят', 'говоришь'], answer: 'говорите' },
              { type: 'fill_blank', sentence: 'Они ___ урок.', hint: "('o'rganmoq' fe'lining 'ular' shakli, II guruh)", options: ['учат', 'учит', 'учим', 'учу'], answer: 'учат' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я пишу упражнение', options: ['Men mashqni yozyapman', 'Men mashqni o\u2019qiyapman', 'Biz mashqni yozyapmiz', 'Sen mashqni yozyapsan'], answer: 'Men mashqni yozyapman' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Sen tez javob berasan', options: ['Ты отвечаешь быстро', 'Он отвечает быстро', 'Вы отвечаете быстро', 'Я отвечаю быстро'], answer: 'Ты отвечаешь быстро' },
              { type: 'fill_blank', sentence: 'Ученики ___ текст.', hint: "('o'qimoq' fe'lining 'ular' shakli, I guruh)", options: ['читают', 'читает', 'читаю', 'читаешь'], answer: 'читают' },
              { type: 'fill_blank', sentence: 'Антон ___ быстро.', hint: "('javob bermoq' fe'lining 'u' shakli, I guruh)", options: ['отвечает', 'отвечаю', 'отвечаешь', 'отвечаем'], answer: 'отвечает' },
              { type: 'choice', dir: 'ru2uz', prompt: "Учительница спрашивает: «Что ты делаешь?»", options: ["O'qituvchi so'raydi: «Sen nima qilyapsan?»", "O'quvchi so'raydi: «Sen nima qilyapsan?»", "O'qituvchi javob beradi: «Men nima qilyapman»", "O'qituvchi so'raydi: «U nima qilyapti?»"], answer: "O'qituvchi so'raydi: «Sen nima qilyapsan?»" },
              { type: 'match', pairs: [{ ru: 'Понимать', uz: 'Tushunmoq' }, { ru: 'Повторять', uz: 'Takrorlamoq' }, { ru: 'Спрашивать', uz: "So'ramoq" }, { ru: 'Отвечать', uz: 'Javob bermoq' }] },
              { type: 'match', pairs: [{ ru: 'Читаю', uz: "O'qiyman" }, { ru: 'Пишешь', uz: 'Yozyapsan' }, { ru: 'Говорит', uz: 'Gapiryapti' }, { ru: 'Учим', uz: "O'rganyapmiz" }] },
              { type: 'order', prompt: 'U darsda javob beryapti', tiles: ['Он', 'отвечает', 'на', 'уроке'], answer: 'Он отвечает на уроке' },
              { type: 'order', prompt: 'Ular rus tilida gapirishyapti', tiles: ['Они', 'говорят', 'по-русски'], answer: 'Они говорят по-русски' },
              { type: 'listening', audioText: 'Я читаю книгу.', question: "Nima eshitdingiz?", options: ["Men kitob o'qiyapman", 'Men kitob yozyapman', "Sen kitob o'qiyapsan", "Biz kitob o'qiyapmiz"], answer: "Men kitob o'qiyapman" },
              { type: 'listening', audioText: 'Мы делаем упражнение.', question: "Nima eshitdingiz?", options: ['Biz mashq qilyapmiz', 'Siz mashq qilyapsiz', 'Ular mashq qilishyapti', 'Men mashq qilyapman'], answer: 'Biz mashq qilyapmiz' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu darsda men hech qachon o\u2019ynamayman', options: ['На уроке я никогда не играю', 'На уроке я всегда играю', 'На уроке он никогда не играет', 'На уроке я никогда не пишу'], answer: 'На уроке я никогда не играю' },
              { type: 'fill_blank', sentence: 'На уроке я ___ домашнее задание.', hint: "('qilmoq' fe'lining 'men' shakli, I guruh)", options: ['делаю', 'делаешь', 'делает', 'делаем'], answer: 'делаю' },
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
              { type: 'fill_blank', sentence: 'Ты ___ видишь?', hint: "('u ayol'ning tushum kelishigi shakli)", options: ['её', 'она', 'ей', 'ею'], answer: 'её' },
              { type: 'fill_blank', sentence: 'Мы ___ ждём.', hint: "('ular'ning tushum kelishigi shakli)", options: ['их', 'они', 'им', 'ими'], answer: 'их' },
              { type: 'fill_blank', sentence: 'Он ___ любит.', hint: "('biz'ning tushum kelishigi shakli)", options: ['нас', 'мы', 'нам', 'нами'], answer: 'нас' },
              { type: 'fill_blank', sentence: 'Я ___ не понимаю.', hint: "('siz'ning tushum kelishigi shakli)", options: ['вас', 'вы', 'вам', 'вами'], answer: 'вас' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он меня не слушает', options: ['U meni tinglamayapti', 'Men uni tinglamayapman', 'Biz uni tinglaymiz', 'U bizni tinglamayapti'], answer: 'U meni tinglamayapti' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ular bizni ko'rishyaptimi?", options: ['Они нас видят?', 'Мы их видим?', 'Вы нас видите?', 'Они вас видят?'], answer: 'Они нас видят?' },
              { type: 'match', pairs: [{ ru: 'Нас', uz: 'Bizni' }, { ru: 'Вас', uz: 'Sizni' }, { ru: 'Их', uz: 'Ularni' }, { ru: 'Тебя', uz: 'Seni' }] },
              { type: 'fill_blank', sentence: 'Учитель ___ спрашивает.', hint: "('sen'ning tushum kelishigi shakli)", options: ['тебя', 'ты', 'тебе', 'тобой'], answer: 'тебя' },
              { type: 'listening', audioText: 'Я тебя понимаю, а ты меня не понимаешь.', question: 'Kim kimni tushunmayapti?', options: ['Sen meni tushunmayapsan', 'Men seni tushunmayapman', 'Biz ularni tushunmaymiz', 'U meni tushunmaydi'], answer: 'Sen meni tushunmayapsan' },
              { type: 'order', prompt: 'Men sizni yaxshi tushunaman', tiles: ['Я', 'вас', 'хорошо', 'понимаю'], answer: 'Я вас хорошо понимаю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она их видит каждый день', options: ["U ularni har kuni ko'radi", "Ular uni har kuni ko'rishadi", 'U bizni har kuni ko\u2019radi', 'Ular meni ko\u2019rishadi'], answer: "U ularni har kuni ko'radi" },
              { type: 'fill_blank', sentence: 'Врач ___ смотрит.', hint: "('u erkak'ning tushum kelishigi shakli)", options: ['его', 'он', 'ему', 'им'], answer: 'его' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men ularni tanimayman', options: ['Я их не знаю', 'Я его не знаю', 'Я вас не знаю', 'Я тебя не знаю'], answer: 'Я их не знаю' },
              { type: 'match', pairs: [{ ru: 'Знать кого?', uz: 'Kimni bilmoq?' }, { ru: 'Видеть кого?', uz: "Kimni ko'rmoq?" }, { ru: 'Слушать кого?', uz: 'Kimni tinglamoq?' }, { ru: 'Понимать кого?', uz: 'Kimni tushunmoq?' }] },
              { type: 'order', prompt: 'Bola onasini kutmoqda', tiles: ['Ребёнок', 'ждёт', 'маму'], answer: 'Ребёнок ждёт маму' },
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
              { type: 'match', pairs: [{ ru: 'Врач', uz: 'Shifokor' }, { ru: 'Инженер', uz: 'Muhandis' }, { ru: 'Учительница', uz: "O'qituvchi (ayol)" }, { ru: 'Экономист', uz: 'Iqtisodchi' }] },
              { type: 'match', pairs: [{ ru: 'Школьница', uz: "O'quvchi qiz" }, { ru: 'Студент', uz: 'Talaba (erkak)' }, { ru: 'Мама', uz: 'Ona' }, { ru: 'Папа', uz: 'Ota' }] },
              { type: 'fill_blank', sentence: 'Вот моя мама. ___ зовут Анна Михайловна.', hint: "('u ayol'ning tushum kelishigi shakli)", options: ['Её', 'Она', 'Ей', 'Ею'], answer: 'Её' },
              { type: 'fill_blank', sentence: 'Вот мой папа. ___ зовут Сергей Иванович.', hint: "('u erkak'ning tushum kelishigi shakli)", options: ['Его', 'Он', 'Ему', 'Им'], answer: 'Его' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она врач.', options: ['U shifokor.', 'U muhandis.', "U o'qituvchi.", 'U talaba.'], answer: 'U shifokor.' },
              { type: 'choice', dir: 'uz2ru', prompt: 'U muhandis', options: ['Он инженер.', 'Она инженер.', 'Он врач.', 'Он студент.'], answer: 'Он инженер.' },
              { type: 'fill_blank', sentence: 'А это моя сестра Инночка. ___ десять лет.', hint: "('unga' — ayol kishiga qaratilgan jo'nalish kelishigi)", options: ['Ей', 'Она', 'Её', 'Ею'], answer: 'Ей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вот наш папа. Его зовут Марк. Он экономист.', options: ['Bizning otamiz Mark, u iqtisodchi', 'Bizning onamiz Mark, u iqtisodchi', 'Bizning otamiz Mark, u shifokor', 'Uning otasi Mark, u iqtisodchi'], answer: 'Bizning otamiz Mark, u iqtisodchi' },
              { type: 'match', pairs: [{ ru: 'Мой брат', uz: 'Mening akam/ukam' }, { ru: 'Моя сестра', uz: 'Mening opam/singlim' }, { ru: 'Наша мама', uz: 'Bizning onamiz' }, { ru: 'Наш папа', uz: 'Bizning otamiz' }] },
              { type: 'listening', audioText: 'Вот мой брат. Его зовут Витя. Он студент.', question: 'Vitya kim?', options: ['Talaba', 'Shifokor', 'Muhandis', 'Iqtisodchi'], answer: 'Talaba' },
              { type: 'order', prompt: 'Mana mening onam. Uning ismi Anna', tiles: ['Вот', 'моя', 'мама.', 'Её', 'зовут', 'Анна'], answer: 'Вот моя мама. Её зовут Анна' },
              { type: 'choice', dir: 'uz2ru', prompt: "U (qizcha) maktab o'quvchisi", options: ['Она школьница.', 'Она студентка.', 'Он школьник.', 'Она учительница.'], answer: 'Она школьница.' },
              { type: 'fill_blank', sentence: 'Это ___ подруга? Как её зовут?', hint: "('sening' egalik olmoshi, ayol jinsi)", options: ['твоя', 'твой', 'твоё', 'твои'], answer: 'твоя' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это твоя подруга? Как её зовут?', options: ["Bu sening do'stingmi (ayol)? Uning ismi nima?", "Bu sening do'stingmi (erkak)? Uning ismi nima?", "Bu mening do'stim? Uning ismi nima?", 'Bu sizning do\u2019stingiz? Ismingiz nima?'], answer: "Bu sening do'stingmi (ayol)? Uning ismi nima?" },
              { type: 'order', prompt: 'U talaba', tiles: ['Он', 'студент'], answer: 'Он студент' },
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
              { type: 'plural', prompt: 'Ручка', options: ['ручки', 'ручкы', 'ручек', 'ручке'], answer: 'ручки' },
              { type: 'plural', prompt: 'Журнал', options: ['журналы', 'журналов', 'журналам', 'журнале'], answer: 'журналы' },
              { type: 'plural', prompt: 'Тетрадь', options: ['тетради', 'тетрадь', 'тетрадей', 'тетрадям'], answer: 'тетради' },
              { type: 'plural', prompt: 'Улица', options: ['улицы', 'улицов', 'улице', 'улицам'], answer: 'улицы' },
              { type: 'plural', prompt: 'Окно', options: ['окна', 'окно', 'окон', 'окнам'], answer: 'окна' },
              { type: 'fill_blank', sentence: 'Это одна книга, а это две ___.', hint: "('kitob' so'zining ko'plik shakli)", options: ['книги', 'книга', 'книг', 'книгам'], answer: 'книги' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В классе есть столы и стулья', options: ['Sinfda stollar va stullar bor', 'Sinfda bitta stol bor', "Sinfda o'quvchilar bor", 'Sinfda kitoblar bor'], answer: 'Sinfda stollar va stullar bor' },
              { type: 'match', pairs: [{ ru: 'Студент → студенты', uz: 'Talaba → talabalar' }, { ru: 'Урок → уроки', uz: 'Dars → darslar' }, { ru: "Слово → слова", uz: "So'z → so'zlar" }, { ru: 'Газета → газеты', uz: 'Gazeta → gazetalar' }] },
              { type: 'fill_blank', sentence: 'У меня есть новые ___.', hint: "('so'zlar' so'zi)", options: ['слова', 'слово', 'слов', 'словам'], answer: 'слова' },
              { type: 'listening', audioText: 'В библиотеке есть книги, журналы и газеты.', question: 'Kutubxonada nima bor?', options: ['Kitoblar, jurnallar va gazetalar', 'Faqat kitoblar', 'Ruchkalar va daftarlar', 'Stollar va stullar'], answer: 'Kitoblar, jurnallar va gazetalar' },
              { type: 'order', prompt: 'Bu yerda yangi maktablar bor', tiles: ['Здесь', 'есть', 'новые', 'школы'], answer: 'Здесь есть новые школы' },
              { type: 'plural', prompt: 'Музей', options: ['музеи', 'музеы', 'музеев', 'музеям'], answer: 'музеи' },
              { type: 'plural', prompt: 'Задание', options: ['задания', 'заданья', 'заданий', 'заданиям'], answer: 'задания' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yangi mashqlar', options: ['Это новые упражнения', 'Это новое упражнение', 'Это новая тетрадь', 'Это новый учебник'], answer: 'Это новые упражнения' },
              { type: 'fill_blank', sentence: 'Это старые ___.', hint: "('bino' so'zining ko'plik shakli)", options: ['здания', 'здание', 'зданий', 'зданиям'], answer: 'здания' },
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
              { type: 'plural', prompt: 'Стул', options: ['стулья', 'стулы', 'стульев', 'стульям'], answer: 'стулья' },
              { type: 'plural', prompt: 'Сын', options: ['сыновья', 'сыны', 'сынов', 'сыновей'], answer: 'сыновья' },
              { type: 'plural', prompt: 'Друг', options: ['друзья', 'други', 'другов', 'друзьёв'], answer: 'друзья' },
              { type: 'plural', prompt: 'Учитель', options: ['учителя', 'учители', 'учительи', 'учителям'], answer: 'учителя' },
              { type: 'plural', prompt: 'Город', options: ['города', 'городы', 'городов', 'городам'], answer: 'города' },
              { type: 'fill_blank', sentence: 'Мои ___ живут в Москве.', hint: "('do'st' so'zining ko'plik shakli, istisno)", options: ['друзья', 'други', 'другы', 'друзей'], answer: 'друзья' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мои друзья учат русский язык', options: ["Mening do'stlarim rus tilini o'rganishadi", "Mening do'stim rus tilini o'rganadi", "Bizning o'qituvchilarimiz rus tili o'rgatishadi", "Ularning do'stlari ingliz tilini o'rganishadi"], answer: "Mening do'stlarim rus tilini o'rganishadi" },
              { type: 'match', pairs: [{ ru: 'Брат → братья', uz: 'Aka/uka → aka-ukalar' }, { ru: 'Стул → стулья', uz: 'Stul → stullar' }, { ru: 'Друг → друзья', uz: "Do'st → do'stlar" }, { ru: 'Сын → сыновья', uz: "O'g'il → o'g'illar" }] },
              { type: 'fill_blank', sentence: 'В комнате есть новые ___.', hint: "('stul' so'zining ko'plik shakli, istisno)", options: ['стулья', 'стулы', 'стульев', 'стульям'], answer: 'стулья' },
              { type: 'listening', audioText: 'В нашем городе живут добрые люди.', question: 'Shaharda kimlar yashaydi?', options: ['Mehribon odamlar', 'Yosh bolalar', "Ko'p talabalar", "Ko'p shifokorlar"], answer: 'Mehribon odamlar' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ko'p odamlar bu shaharni yaxshi ko'radi", options: ['Многие люди любят этот город', 'Один человек любит этот город', 'Дети любят этот город', 'Учителя любят этот город'], answer: 'Многие люди любят этот город' },
              { type: 'order', prompt: "Bizning o'qituvchilarimiz yaxshi", tiles: ['Наши', 'учителя', 'хорошие'], answer: 'Наши учителя хорошие' },
              { type: 'plural', prompt: 'Мать', options: ['матери', 'маты', 'матерей', 'матерям'], answer: 'матери' },
              { type: 'fill_blank', sentence: 'Наши ___ работают в школе.', hint: "('o'qituvchi' so'zining ko'plik shakli, istisno)", options: ['учителя', 'учители', 'учительи', 'учителям'], answer: 'учителя' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети играют во дворе', options: ["Bolalar hovlida o'ynashyapti", 'Bolalar uyda o\u2019qishyapti', 'Do\u2019stlar hovlida yurishibdi', 'Odamlar ko\u2019chada yurishibdi'], answer: "Bolalar hovlida o'ynashyapti" },
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
              { type: 'match', pairs: [{ ru: 'Художник', uz: 'Rassom' }, { ru: 'Певец', uz: "Qo'shiqchi" }, { ru: 'Космонавт', uz: 'Kosmonavt' }, { ru: 'Пилот', uz: 'Uchuvchi' }] },
              { type: 'match', pairs: [{ ru: 'Повар', uz: 'Oshpaz' }, { ru: 'Продавец', uz: 'Sotuvchi' }, { ru: 'Строитель', uz: 'Quruvchi' }, { ru: 'Учитель', uz: "O'qituvchi" }] },
              { type: 'fill_blank', sentence: 'Мой друг работает ___.', hint: "('shifokor bo'lib' — vositalik kelishigi)", options: ['врачом', 'врач', 'врача', 'врачу'], answer: 'врачом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она хочет стать актрисой', options: ["U aktrisa bo'lishni xohlaydi", 'U aktyor', "U styuardessa bo'lishni xohlaydi", 'U hozir aktrisa'], answer: "U aktrisa bo'lishni xohlaydi" },
              { type: 'fill_blank', sentence: 'Я хочу быть ___.', hint: "('muhandis bo'lib' — vositalik kelishigi)", options: ['инженером', 'инженер', 'инженера', 'инженеру'], answer: 'инженером' },
              { type: 'choice', dir: 'uz2ru', prompt: "Mening ukam quruvchi bo'lib ishlaydi", options: ['Мой брат работает строителем', 'Мой брат работает врачом', 'Мой брат работает учителем', 'Мой брат учится в школе'], answer: 'Мой брат работает строителем' },
              { type: 'match', pairs: [{ ru: 'Кем ты хочешь стать?', uz: "Kim bo'lishni xohlaysan?" }, { ru: 'Я хочу стать врачом', uz: "Men shifokor bo'lishni xohlayman" }, { ru: 'Он работает инженером', uz: "U muhandis bo'lib ishlaydi" }, { ru: 'Она учительница', uz: "U o'qituvchi" }] },
              { type: 'listening', audioText: 'Мой отец работает инженером, а мать — учительницей.', question: "Ota-onasi kim bo'lib ishlaydi?", options: ["Muhandis va o'qituvchi", 'Shifokor va sotuvchi', 'Haydovchi va oshpaz', 'Rassom va musiqachi'], answer: "Muhandis va o'qituvchi" },
              { type: 'fill_blank', sentence: 'Мои друзья хотят стать ___.', hint: "('sportchilar' — vositalik kelishigi, ko'plik)", options: ['спортсменами', 'спортсмены', 'спортсменов', 'спортсменам'], answer: 'спортсменами' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня много друзей разных профессий', options: ["Mening turli kasb egalari bo'lgan ko'p do'stlarim bor", 'Mening bitta do\u2019stim bor', 'Men hech kimni tanimayman', 'Mening do\u2019stlarim yo\u2019q'], answer: "Mening turli kasb egalari bo'lgan ko'p do'stlarim bor" },
              { type: 'order', prompt: "Do'stim tez orada shifokor bo'ladi", tiles: ['Мой', 'друг', 'скоро', 'станет', 'врачом'], answer: 'Мой друг скоро станет врачом' },
              { type: 'match', pairs: [{ ru: 'Программист', uz: 'Dasturchi' }, { ru: 'Дизайнер', uz: 'Dizayner' }, { ru: 'Официант', uz: 'Ofitsiant' }, { ru: 'Парикмахер', uz: 'Sartarosh' }] },
              { type: 'fill_blank', sentence: 'Она работает ___.', hint: "('dizayner bo'lib' — vositalik kelishigi)", options: ['дизайнером', 'дизайнер', 'дизайнера', 'дизайнеру'], answer: 'дизайнером' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sizning do'stlaringiz orasida shifokor bormi?", options: ['Среди ваших друзей есть врач?', 'Среди ваших друзей есть студент?', 'У вас есть друг?', 'Вы врач?'], answer: 'Среди ваших друзей есть врач?' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы дружим уже пять лет', options: ["Biz besh yildan beri do'stmiz", 'Biz besh oydan beri tanishmiz', 'Biz besh kun oldin tanishdik', 'Biz hali tanish emasmiz'], answer: "Biz besh yildan beri do'stmiz" },
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
              {
                type: 'reading',
                text: 'Дом, квартира, комната, кухня, стол, стул, окно.\n— Где твой дом?\n— Вот мой дом. Здесь моя квартира.',
                question: 'Suhbatda nima haqida gap ketyapti?',
                options: ['Uy haqida', 'Maktab haqida', 'Shahar haqida', 'Transport haqida'],
                answer: 'Uy haqida',
              },
              {
                type: 'reading',
                text: 'Учитель, ученик, урок, доска, мел, тетрадь, ручка.\n— Что вы делаете на уроке?\n— Мы читаем текст и пишем упражнения.',
                question: "O'quvchilar darsda nima qilishadi?",
                options: ["O'qishadi va yozishadi", "O'ynashadi", 'Uxlashadi', 'Ovqatlanishadi'],
                answer: "O'qishadi va yozishadi",
              },
              {
                type: 'reading',
                text: 'Врач, больница, лекарство, температура, здоровье.\n— Что у вас болит?\n— У меня болит голова и есть температура.',
                question: 'Bemorda nima og\u2019riyapti?',
                options: ["Bosh og'riyapti va harorati bor", 'Tishi og\u2019riyapti', 'Qorni og\u2019riyapti', "Hech narsa og'rimayapti"],
                answer: "Bosh og'riyapti va harorati bor",
              },
              {
                type: 'reading',
                text: 'Магазин, продавец, деньги, покупать, продавать.\n— Сколько стоит эта книга?\n— Она стоит сто рублей.',
                question: 'Kitob narxi qancha?',
                options: ['Yuz rubl', 'Ellik rubl', "Ikki yuz rubl", 'Bepul'],
                answer: 'Yuz rubl',
              },
              {
                type: 'reading',
                text: 'Погода, зима, лето, снег, дождь, солнце.\n— Какая сегодня погода?\n— Сегодня холодно. Идёт снег.',
                question: 'Bugungi ob-havo qanday?',
                options: ["Sovuq, qor yog'yapti", 'Issiq va quyoshli', "Yomg'ir yog'yapti", 'Shamolli'],
                answer: "Sovuq, qor yog'yapti",
              },
              {
                type: 'reading',
                text: 'Спорт, футбол, команда, играть, побеждать.\n— Твоя команда играет сегодня?\n— Да, мы играем в футбол на стадионе.',
                question: "Jamoa qayerda futbol o'ynaydi?",
                options: ['Stadionda', 'Maktabda', 'Uyda', "Bog'da"],
                answer: 'Stadionda',
              },
              {
                type: 'reading',
                text: 'Ресторан, официант, меню, вкусно, заказать.\n— Что вы хотите заказать?\n— Я хочу салат и чай, пожалуйста.',
                question: 'Mijoz nima buyurtma qilmoqchi?',
                options: ['Salat va choy', 'Non va sut', "Go'sht va sharbat", 'Meva va suv'],
                answer: 'Salat va choy',
              },
              {
                type: 'reading',
                text: 'Аэропорт, самолёт, билет, паспорт, путешествие.\n— Когда твой самолёт?\n— Мой самолёт в семь часов утра.',
                question: 'Samolyot soat nechada uchadi?',
                options: ['Ertalab yettida', 'Kechqurun yettida', 'Kunduzi', 'Tunda'],
                answer: 'Ertalab yettida',
              },
              {
                type: 'reading',
                text: 'Праздник, подарок, гости, торт, поздравлять.\n— Сегодня день рождения моей сестры.\n— Поздравляю! Что ты подаришь ей?',
                question: 'Kimning tug\u2019ilgan kuni?',
                options: ['Singlisining', 'Akasining', 'Onasining', "Do'stining"],
                answer: 'Singlisining',
              },
              {
                type: 'reading',
                text: 'Зима, снег, холодно, тепло одеваться, шапка.\n— Зимой очень холодно?\n— Да, зимой холодно. Нужно тепло одеваться.',
                question: 'Qishda qanday kiyinish kerak?',
                options: ['Issiq kiyinish kerak', 'Yengil kiyinish kerak', 'Kiyinish shart emas', 'Faqat shapka kiyish kerak'],
                answer: 'Issiq kiyinish kerak',
              },
              {
                type: 'reading',
                text: 'Вокзал, поезд, билет, платформа, расписание.\n— Когда отходит поезд в Самарканд?\n— Поезд отходит в девять часов.',
                question: 'Poyezd qachon jo\u2019naydi?',
                options: ["Soat to'qqizda", "Soat o'nda", 'Kechqurun', 'Ertalab beshda'],
                answer: "Soat to'qqizda",
              },
              {
                type: 'reading',
                text: 'Библиотека, книга, читатель, тихо, полка.\n— Можно взять эту книгу?\n— Да, конечно. Читайте тихо, пожалуйста.',
                question: 'Kutubxonada qanday xatti-harakat kerak?',
                options: ["Jim o'tirish kerak", 'Baland gapirish mumkin', 'Ovqatlanish mumkin', 'Musiqa eshitish mumkin'],
                answer: "Jim o'tirish kerak",
              },
              {
                type: 'reading',
                text: 'Семья, дети, родители, любовь, счастье.\n— У тебя большая семья?\n— Да, у меня большая и дружная семья.',
                question: 'Oila qanday tavsiflanmoqda?',
                options: ['Katta va hamjihat', "Kichik va yolg'iz", "G'amgin", 'Notanish'],
                answer: 'Katta va hamjihat',
              },
              {
                type: 'reading',
                text: 'Улица, машина, светофор, переход, осторожно.\n— Как перейти улицу?\n— Нужно смотреть на светофор и идти осторожно.',
                question: "Ko'chadan qanday o'tish kerak?",
                options: ["Svetoforga qarab, ehtiyot bo'lib", 'Yugurib o\u2019tish kerak', "Ko'zni yumib o'tish kerak", "Istalgan vaqtda o'tsa bo'ladi"],
                answer: "Svetoforga qarab, ehtiyot bo'lib",
              },
              {
                type: 'reading',
                text: 'Каникулы, отдых, море, горы, путешествие.\n— Куда ты поедешь на каникулах?\n— Я поеду к морю с семьёй.',
                question: 'Kanikulda qayerga boradi?',
                options: ['Dengizga oilasi bilan', "Tog'ga yolg'iz", "Hech qayerga", 'Maktabga'],
                answer: 'Dengizga oilasi bilan',
              },
            ],
          },
        ],
      },
      {
        title: "4-bo'lim: Lug'at boyligi",
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
              { type: 'match', pairs: [{ ru: 'Мочь', uz: 'Qila olmoq (NSV)' }, { ru: 'Смочь', uz: 'Qila olmoq (SV)' }, { ru: 'Начинать', uz: 'Boshlamoq (NSV)' }, { ru: 'Начать', uz: 'Boshlamoq (SV)' }] },
              { type: 'fill_blank', sentence: 'Я не ___ прийти вчера.', hint: "('qila olmadi' — mukammal fe'l, o'tgan zamon)", options: ['смог', 'могу', 'мог', 'смогу'], answer: 'смог' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Урок начинается в девять часов', options: ["Dars soat to'qqizda boshlanadi", "Dars soat to'qqizda tugaydi", 'Dars kecha boshlangan edi', 'Dars ertaga boshlanadi'], answer: "Dars soat to'qqizda boshlanadi" },
              { type: 'fill_blank', sentence: 'Завтра я ___ читать эту книгу.', hint: "('boshlayman' — mukammal fe'l, kelasi zamon)", options: ['начну', 'начинаю', 'начал', 'начинал'], answer: 'начну' },
              { type: 'choice', dir: 'uz2ru', prompt: 'U darsni tugatdi', options: ['Он закончил урок', 'Он начал урок', 'Он начинает урок', 'Он кончает урок'], answer: 'Он закончил урок' },
              { type: 'match', pairs: [{ ru: 'Кончать', uz: 'Tugatmoq (NSV)' }, { ru: 'Кончить', uz: 'Tugatmoq (SV)' }, { ru: 'Писать', uz: 'Yozmoq (NSV)' }, { ru: 'Написать', uz: 'Yozmoq (SV)' }] },
              { type: 'fill_blank', sentence: 'Обычно я ___ письма по вечерам.', hint: "(odatiy harakat — nomukammal fe'l)", options: ['пишу', 'напишу', 'написал', 'писал'], answer: 'пишу' },
              { type: 'fill_blank', sentence: 'Я уже ___ это письмо.', hint: "(natija, tugallangan — mukammal fe'l, o'tgan zamon)", options: ['написал', 'пишу', 'писал', 'напишу'], answer: 'написал' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я могу говорить по-русски', options: ["Men rus tilida gapira olaman", 'Men rus tilida gapiraman', "Men rus tilini o'rganaman", 'Men rus tilini bilmayman'], answer: "Men rus tilida gapira olaman" },
              { type: 'listening', audioText: 'Я начал читать книгу, но не смог закончить.', question: 'Kitobni tugatdimi?', options: ["Yo'q, tugata olmadi", 'Ha, tugatdi', 'Hali boshlamagan', "Ikki marta o'qidi"], answer: "Yo'q, tugata olmadi" },
              { type: 'order', prompt: 'U darsni tugatolmadi', tiles: ['Он', 'не', 'смог', 'закончить', 'урок'], answer: 'Он не смог закончить урок' },
              { type: 'fill_blank', sentence: 'Мы ___ фильм каждую субботу.', hint: "(odatiy harakat — nomukammal fe'l)", options: ['смотрим', 'посмотрим', 'посмотрели', 'смотрели'], answer: 'смотрим' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bugun kechqurun bu filmni ko'raman", options: ['Сегодня вечером я посмотрю этот фильм', 'Сегодня вечером я смотрю этот фильм', 'Вчера я посмотрел этот фильм', 'Я всегда смотрю фильмы'], answer: 'Сегодня вечером я посмотрю этот фильм' },
              { type: 'match', pairs: [{ ru: 'Делать → сделать', uz: 'Qilmoq (NSV→SV)' }, { ru: 'Читать → прочитать', uz: "O'qimoq (NSV→SV)" }, { ru: 'Говорить → сказать', uz: 'Aytmoq (NSV→SV)' }, { ru: 'Учить → выучить', uz: "O'rganmoq (NSV→SV)" }] },
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
              { type: 'match', pairs: [{ ru: 'Сыр', uz: 'Pishloq' }, { ru: 'Яйцо', uz: 'Tuxum' }, { ru: 'Мясо', uz: "Go'sht" }, { ru: 'Рыба', uz: 'Baliq' }] },
              { type: 'match', pairs: [{ ru: 'Соль', uz: 'Tuz' }, { ru: 'Сахар', uz: 'Shakar' }, { ru: 'Масло', uz: "Yog'" }, { ru: 'Мука', uz: 'Un' }] },
              { type: 'fill_blank', sentence: 'Я готовлю суп ___ солью.', hint: "('bilan' — vositalik kelishigi predlogi)", options: ['с', 'без', 'на', 'в'], answer: 'с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не ем мясо', options: ["Men go'sht yemayman", 'Men baliq yemayman', 'Men non yemayman', 'Men sut ichmayman'], answer: "Men go'sht yemayman" },
              { type: 'fill_blank', sentence: 'У меня нет ___.', hint: "('tuxum' so'zi, ko'plikda qaratqich kelishigi)", options: ['яиц', 'яйцо', 'яйцом', 'яйцу'], answer: 'яиц' },
              { type: 'choice', dir: 'uz2ru', prompt: "Menga bir kosa sho'rva kerak", options: ['Мне нужна тарелка супа', 'Мне нужен стакан воды', 'Мне нужен хлеб', 'Мне нужна ложка'], answer: 'Мне нужна тарелка супа' },
              { type: 'match', pairs: [{ ru: 'Готовить', uz: 'Pishirmoq' }, { ru: 'Резать', uz: 'Kesmoq' }, { ru: 'Мыть', uz: 'Yuvmoq' }, { ru: 'Есть', uz: 'Yemoq' }] },
              { type: 'fill_blank', sentence: 'Мама ___ ужин на кухне.', hint: "('pishirmoq' fe'lining 'u ayol' shakli)", options: ['готовит', 'готовлю', 'готовишь', 'готовят'], answer: 'готовит' },
              { type: 'listening', audioText: 'На завтрак я ем яйца и сыр.', question: 'Nonushtada nima yeydi?', options: ['Tuxum va pishloq', 'Non va sut', "Go'sht va baliq", 'Meva va sabzavot'], answer: 'Tuxum va pishloq' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Холодильник пустой, нужно купить продукты', options: ["Muzlatgich bo'sh, oziq-ovqat sotib olish kerak", "Muzlatgich to'la", 'Oshxona kichkina', 'Bugun bozor kuni emas'], answer: "Muzlatgich bo'sh, oziq-ovqat sotib olish kerak" },
              { type: 'fill_blank', sentence: 'Дай мне, пожалуйста, ___.', hint: "('tuz' so'zi, tushum kelishigi)", options: ['соль', 'соли', 'солью', 'соле'], answer: 'соль' },
              { type: 'order', prompt: 'Onam kechki ovqat pishiryapti', tiles: ['Мама', 'готовит', 'ужин'], answer: 'Мама готовит ужин' },
              { type: 'match', pairs: [{ ru: 'Холодильник', uz: 'Muzlatgich' }, { ru: 'Плита', uz: 'Plita' }, { ru: 'Сковорода', uz: 'Tova' }, { ru: 'Кастрюля', uz: 'Qozon' }] },
              { type: 'choice', dir: 'uz2ru', prompt: "Men non pishirishni yaxshi ko'raman", options: ['Я люблю печь хлеб', 'Я люблю есть хлеб', 'Я люблю покупать хлеб', 'Я не люблю хлеб'], answer: 'Я люблю печь хлеб' },
              { type: 'fill_blank', sentence: 'Этот суп очень ___.', hint: "('mazali' sifati, erkak jinsi)", options: ['вкусный', 'вкусная', 'вкусное', 'вкусные'], answer: 'вкусный' },
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
              { type: 'fill_blank', sentence: 'Это дом ___.', hint: "('opa/singil' so'zi, qaratqich kelishigi)", options: ['сестры', 'сестра', 'сестре', 'сестрой'], answer: 'сестры' },
              { type: 'fill_blank', sentence: 'Это машина ___.', hint: "('do'st, erkak' so'zi, qaratqich kelishigi)", options: ['друга', 'друг', 'другу', 'другом'], answer: 'друга' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это телефон учителя', options: ["Bu o'qituvchining telefoni", "Bu o'quvchining telefoni", "Bu do'stimning telefoni", 'Bu mening telefonim'], answer: "Bu o'qituvchining telefoni" },
              { type: 'match', pairs: [{ ru: 'Дом отца', uz: 'Otaning uyi' }, { ru: 'Книга матери', uz: 'Onaning kitobi' }, { ru: 'Ручка ученика', uz: "O'quvchining ruchkasi" }, { ru: 'Сумка подруги', uz: "Do'stning (ayol) sumkasi" }] },
              { type: 'fill_blank', sentence: 'Это тетрадь ___.', hint: "('o'quvchi' so'zi, qaratqich kelishigi)", options: ['ученика', 'ученик', 'ученику', 'учеником'], answer: 'ученика' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu direktorning ofisi", options: ['Это кабинет директора', 'Это дом директора', 'Это машина директора', 'Это телефон директора'], answer: 'Это кабинет директора' },
              { type: 'fill_blank', sentence: 'Чья это шапка? — Это шапка ___.', hint: "('bola' so'zi, qaratqich kelishigi)", options: ['ребёнка', 'ребёнок', 'ребёнку', 'ребёнком'], answer: 'ребёнка' },
              { type: 'listening', audioText: 'Это ключи от квартиры соседа.', question: 'Kalitlar kimniki?', options: ["Qo'shnining", "Do'stning", 'Direktorning', "O'qituvchining"], answer: "Qo'shnining" },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня нет времени', options: ["Vaqtim yo'q", "Pulim yo'q", "Do'stim yo'q", "Kitobim yo'q"], answer: "Vaqtim yo'q" },
              { type: 'match', pairs: [{ ru: 'Нет времени', uz: "Vaqt yo'q" }, { ru: 'Нет денег', uz: "Pul yo'q" }, { ru: 'Нет вопросов', uz: "Savol yo'q" }, { ru: 'Нет проблем', uz: "Muammo yo'q" }] },
              { type: 'fill_blank', sentence: 'У нас нет ___.', hint: "('non' so'zi, qaratqich kelishigi)", options: ['хлеба', 'хлеб', 'хлебом', 'хлебу'], answer: 'хлеба' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu shaharning markazi", options: ['Это центр города', 'Это конец города', 'Это карта города', 'Это имя города'], answer: 'Это центр города' },
              { type: 'order', prompt: 'Bu vrachning kabineti', tiles: ['Это', 'кабинет', 'врача'], answer: 'Это кабинет врача' },
              { type: 'fill_blank', sentence: 'Столица ___ — Ташкент.', hint: "('O'zbekiston' so'zi, qaratqich kelishigi)", options: ['Узбекистана', 'Узбекистан', 'Узбекистану', 'Узбекистаном'], answer: 'Узбекистана' },
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
              { type: 'fill_blank', sentence: 'Это ___ письмо.', hint: "('mening' — neytral so'z uchun)", options: ['моё', 'мой', 'моя', 'мои'], answer: 'моё' },
              { type: 'fill_blank', sentence: 'Это твой словарь? — Да, это ___ словарь.', hint: "('sening' — erkak so'z uchun)", options: ['твой', 'твоя', 'твоё', 'твои'], answer: 'твой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это твои очки?', options: ["Bu sening ko'zoynagingmi?", 'Bu sening kitobingmi?', "Bu mening ko'zoynagimmi?", 'Bu uning ko\u2019zoynagimi?'], answer: "Bu sening ko'zoynagingmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu mening pulim', options: ['Это мои деньги', 'Это твои деньги', 'Это его деньги', 'Это наши деньги'], answer: 'Это мои деньги' },
              { type: 'fill_blank', sentence: 'У меня есть ___ друзья.', hint: "('mening' — ko'plik so'z uchun)", options: ['мои', 'мой', 'моя', 'моё'], answer: 'мои' },
              { type: 'match', pairs: [{ ru: 'Мой словарь', uz: "Mening lug'atim" }, { ru: 'Моя сумка', uz: 'Mening sumkam' }, { ru: 'Моё имя', uz: 'Mening ismim' }, { ru: 'Мои ключи', uz: 'Mening kalitlarim' }] },
              { type: 'fill_blank', sentence: 'Твоё пальто здесь? — Да, ___ пальто здесь.', hint: "('sening' — neytral so'z uchun)", options: ['твоё', 'твой', 'твоя', 'твои'], answer: 'твоё' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это твоя ручка или моя?', options: ['Bu sening ruchkang yoki meningmi?', 'Bu sening kitobing yoki meningmi?', 'Bu uning ruchkasi', 'Bu bizning ruchkamiz'], answer: 'Bu sening ruchkang yoki meningmi?' },
              { type: 'listening', audioText: 'Это моя сумка, а это твоя куртка.', question: 'Kimning nimasi?', options: ['Mening sumkam, sening kurtkang', 'Sening sumkang, mening kurtkam', 'Bizning sumkamiz', 'Uning kurtkasi'], answer: 'Mening sumkam, sening kurtkang' },
              { type: 'order', prompt: 'Bu mening ismim', tiles: ['Это', 'моё', 'имя'], answer: 'Это моё имя' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bular mening do'stlarim", options: ['Это мои друзья', 'Это твои друзья', 'Это его друзья', 'Это наши друзья'], answer: 'Это мои друзья' },
              { type: 'fill_blank', sentence: 'Твои дети хорошо учатся? — Да, ___ дети хорошо учатся.', hint: "('sening' — ko'plik so'z uchun)", options: ['твои', 'твой', 'твоя', 'твоё'], answer: 'твои' },
              { type: 'match', pairs: [{ ru: 'Твой брат', uz: 'Sening akang/ukang' }, { ru: 'Твоя сестра', uz: 'Sening opang/singling' }, { ru: 'Твоё окно', uz: 'Sening derazang' }, { ru: 'Твои друзья', uz: "Sening do'stlaring" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мой телефон новый, а твой старый', options: ['Mening telefonim yangi, seningi eski', 'Sening telefoning yangi, mening ham', 'Bizning telefonlarimiz yangi', 'Uning telefoni eski'], answer: 'Mening telefonim yangi, seningi eski' },
              { type: 'order', prompt: 'Bu sening jurnalingmi?', tiles: ['Это', 'твой', 'журнал?'], answer: 'Это твой журнал?' },
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
              { type: 'match', pairs: [{ ru: 'Суп', uz: "Sho'rva" }, { ru: 'Салат', uz: 'Salat' }, { ru: 'Десерт', uz: 'Desert' }, { ru: 'Напиток', uz: 'Ichimlik' }] },
              { type: 'fill_blank', sentence: 'Я ___ пиццу.', hint: "('buyurtma qilmoq' fe'lining kelasi zamon, 'men' shakli)", options: ['закажу', 'заказал', 'заказываю', 'закажешь'], answer: 'закажу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вам что-нибудь ещё?', options: ['Yana biror narsa kerakmi?', 'Bu qancha turadi?', 'Menyu qayerda?', 'Stol bandmi?'], answer: 'Yana biror narsa kerakmi?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Hisobni ajratib bering", options: ['Разделите счёт, пожалуйста', 'Принесите счёт, пожалуйста', 'Дайте меню, пожалуйста', 'Позовите официанта'], answer: 'Разделите счёт, пожалуйста' },
              { type: 'fill_blank', sentence: 'Этот стол ___?', hint: "('bo'sh' sifati, erkak jinsi)", options: ['свободен', 'свободна', 'свободно', 'свободны'], answer: 'свободен' },
              { type: 'match', pairs: [{ ru: 'Завтрак', uz: 'Nonushta' }, { ru: 'Обед', uz: 'Tushlik' }, { ru: 'Ужин', uz: 'Kechki ovqat' }, { ru: 'Перекус', uz: 'Yengil tamaddi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Приятного аппетита!', options: ["Ishtahangiz ochilsin!", "Sog' bo'ling!", "Xush kelibsiz!", "Rahmat!"], answer: "Ishtahangiz ochilsin!" },
              { type: 'fill_blank', sentence: 'Официант принёс ___.', hint: "('hisob' so'zi)", options: ['счёт', 'счета', 'счету', 'счётом'], answer: 'счёт' },
              { type: 'listening', audioText: 'Я закажу суп и салат, а на десерт — мороженое.', question: 'Desertga nima buyurtma qildi?', options: ["Muzqaymoq", 'Tort', 'Meva', 'Choy'], answer: "Muzqaymoq" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu taom juda achchiq', options: ['Это блюдо очень острое', 'Это блюдо очень сладкое', 'Это блюдо очень солёное', 'Это блюдо очень холодное'], answer: 'Это блюдо очень острое' },
              { type: 'order', prompt: 'Menga stol band qiling', tiles: ['Забронируйте', 'мне', 'стол'], answer: 'Забронируйте мне стол' },
              { type: 'match', pairs: [{ ru: 'Вкусно', uz: 'Mazali' }, { ru: 'Невкусно', uz: 'Mazasiz' }, { ru: 'Сладкий', uz: 'Shirin' }, { ru: 'Острый', uz: 'Achchiq' }] },
              { type: 'fill_blank', sentence: 'Я не люблю ___ еду.', hint: "('achchiq' sifati, ayol jinsi)", options: ['острую', 'острый', 'острое', 'острые'], answer: 'острую' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно мне воду без газа?', options: ["Menga gazsiz suv mumkinmi?", 'Menga gazli suv bering', 'Menga sharbat bering', 'Menga choy bering'], answer: "Menga gazsiz suv mumkinmi?" },
              { type: 'order', prompt: 'Bu yerda ovqat mazali va arzon', tiles: ['Здесь', 'вкусная', 'и', 'недорогая', 'еда'], answer: 'Здесь вкусная и недорогая еда' },
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
              { type: 'fill_blank', sentence: 'Это ___ школа.', hint: "('bizning' — ayol so'z uchun)", options: ['наша', 'наш', 'наше', 'наши'], answer: 'наша' },
              { type: 'fill_blank', sentence: 'Это ваше окно? — Да, это ___ окно.', hint: "('sizning' — neytral so'z uchun)", options: ['ваше', 'ваш', 'ваша', 'ваши'], answer: 'ваше' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это ваши дети?', options: ['Bu sizning bolalaringizmi?', 'Bu bizning bolalarimizmi?', 'Bu ularning bolalarimi?', 'Bu mening bolalarimmi?'], answer: 'Bu sizning bolalaringizmi?' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu bizning mashinamiz', options: ['Это наша машина', 'Это ваша машина', 'Это их машина', 'Это моя машина'], answer: 'Это наша машина' },
              { type: 'fill_blank', sentence: 'У нас есть ___ дом.', hint: "('bizning' — erkak/neytral so'z uchun)", options: ['наш', 'наша', 'наше', 'наши'], answer: 'наш' },
              { type: 'match', pairs: [{ ru: 'Наш город', uz: 'Bizning shahrimiz' }, { ru: 'Наша страна', uz: 'Bizning mamlakatimiz' }, { ru: 'Наше время', uz: 'Bizning vaqtimiz' }, { ru: 'Наши планы', uz: 'Bizning rejalarimiz' }] },
              { type: 'fill_blank', sentence: 'Ваша сумка здесь? — Да, ___ сумка здесь.', hint: "('sizning' — ayol so'z uchun)", options: ['ваша', 'ваш', 'ваше', 'ваши'], answer: 'ваша' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это наш новый учитель', options: ["Bu bizning yangi o'qituvchimiz", "Bu sizning yangi o'qituvchingiz", "Bu ularning yangi o'qituvchisi", 'Bu mening yangi o\u2019qituvchim'], answer: "Bu bizning yangi o'qituvchimiz" },
              { type: 'listening', audioText: 'Это наша квартира, а это ваш дом.', question: 'Kimning nimasi?', options: ['Bizning kvartiramiz, sizning uyingiz', 'Sizning kvartirangiz, bizning uyimiz', 'Ularning kvartirasi', 'Mening uyim'], answer: 'Bizning kvartiramiz, sizning uyingiz' },
              { type: 'order', prompt: 'Bu bizning oilamiz', tiles: ['Это', 'наша', 'семья'], answer: 'Это наша семья' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bular sizning kitoblaringizmi?', options: ['Это ваши книги?', 'Это наши книги?', 'Это их книги?', 'Это твои книги?'], answer: 'Это ваши книги?' },
              { type: 'fill_blank', sentence: 'Ваши друзья приедут? — Да, ___ друзья приедут.', hint: "('sizning' — ko'plik so'z uchun)", options: ['ваши', 'ваш', 'ваша', 'ваше'], answer: 'ваши' },
              { type: 'match', pairs: [{ ru: 'Ваш билет', uz: 'Sizning chiptangiz' }, { ru: 'Ваша виза', uz: 'Sizning vizangiz' }, { ru: 'Ваше место', uz: 'Sizning joyingiz' }, { ru: 'Ваши документы', uz: 'Sizning hujjatlaringiz' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Наша команда играет лучше вашей', options: ["Bizning jamoamiz sizningdan yaxshiroq o'ynaydi", "Sizning jamoangiz bizningdan yaxshi", "Ularning jamoasi eng kuchli", "Bizning jamoamiz yomon"], answer: "Bizning jamoamiz sizningdan yaxshiroq o'ynaydi" },
              { type: 'order', prompt: 'Bu sizning uyingizmi?', tiles: ['Это', 'ваш', 'дом?'], answer: 'Это ваш дом?' },
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
              { type: 'match', pairs: [{ ru: 'Самолёт', uz: 'Samolyot' }, { ru: 'Посадка', uz: "Qo'nish/o'tirish" }, { ru: 'Взлёт', uz: 'Uchish' }, { ru: 'Терминал', uz: 'Terminal' }] },
              { type: 'fill_blank', sentence: 'Посадка на самолёт начинается через ___ минут.', hint: "('20' soni)", options: ['двадцать', 'два', 'двенадцать', 'две'], answer: 'двадцать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Где зона получения багажа?', options: ['Bagaj olish maydoni qayerda?', 'Chiptalar kassasi qayerda?', 'Bojxona qayerda?', 'Restoran qayerda?'], answer: 'Bagaj olish maydoni qayerda?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Mening chamadonim yo'qoldi", options: ['Мой чемодан потерялся', 'Мой чемодан тяжёлый', 'Мой чемодан новый', 'Мой чемодан там'], answer: 'Мой чемодан потерялся' },
              { type: 'fill_blank', sentence: 'Пожалуйста, покажите ваш ___.', hint: "('pasport' so'zi)", options: ['паспорт', 'паспорта', 'паспорту', 'паспортом'], answer: 'паспорт' },
              { type: 'match', pairs: [{ ru: 'Таможня', uz: 'Bojxona' }, { ru: 'Пограничник', uz: 'Chegarachi' }, { ru: 'Посадочный талон', uz: 'Chiqish taloni' }, { ru: 'Ручная кладь', uz: "Qo'l yuki" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ваш рейс отправляется с четвёртого выхода', options: ["Sizning reysingiz 4-eshikdan jo'naydi", 'Sizning reysingiz kechikadi', 'Sizning reysingiz bekor qilindi', "Sizning reysingiz o'zgardi"], answer: "Sizning reysingiz 4-eshikdan jo'naydi" },
              { type: 'fill_blank', sentence: 'Самолёт ___ вовремя.', hint: "('uchmoq' fe'lining hozirgi zamon shakli)", options: ['вылетает', 'вылетел', 'вылетал', 'вылетит'], answer: 'вылетает' },
              { type: 'listening', audioText: 'Наш самолёт вылетает в десять утра, а прилетает в два часа дня.', question: 'Samolyot qachon uchadi?', options: ["Ertalab soat o'nda", 'Kunduzi soat ikkida', 'Kechqurun', 'Tunda'], answer: "Ertalab soat o'nda" },
              { type: 'choice', dir: 'uz2ru', prompt: "Menda faqat qo'l yukim bor", options: ['У меня только ручная кладь', 'У меня два чемодана', 'У меня нет багажа', 'У меня тяжёлый чемодан'], answer: 'У меня только ручная кладь' },
              { type: 'order', prompt: 'Reys kechikmoqda', tiles: ['Рейс', 'задерживается'], answer: 'Рейс задерживается' },
              { type: 'match', pairs: [{ ru: 'Международный рейс', uz: 'Xalqaro reys' }, { ru: 'Внутренний рейс', uz: 'Ichki reys' }, { ru: 'Прямой рейс', uz: "To'g'ridan-to'g'ri reys" }, { ru: 'Пересадка', uz: "Ko'chib o'tirish" }] },
              { type: 'fill_blank', sentence: 'У меня будет ___ в Стамбуле.', hint: "('ko'chib o'tirish' so'zi)", options: ['пересадка', 'посадка', 'взлёт', 'рейс'], answer: 'пересадка' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Наш самолёт задержался на два часа', options: ["Bizning samolyotimiz ikki soatga kechikdi", "Bizning samolyotimiz bekor qilindi", "Bizning samolyotimiz erta uchdi", "Bizning samolyotimiz o'z vaqtida uchdi"], answer: "Bizning samolyotimiz ikki soatga kechikdi" },
              { type: 'order', prompt: "Iltimos, xavfsizlik nazoratidan o'ting", tiles: ['Пройдите', 'через', 'контроль', 'безопасности'], answer: 'Пройдите через контроль безопасности' },
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
              { type: 'fill_blank', sentence: 'У ___ есть новая книга.', hint: "('u erkak'ning 'у' predlogi bilan shakli)", options: ['него', 'он', 'нём', 'ему'], answer: 'него' },
              { type: 'fill_blank', sentence: 'У ___ есть красивое платье.', hint: "('u ayol'ning 'у' predlogi bilan shakli)", options: ['неё', 'она', 'ней', 'ей'], answer: 'неё' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У вас есть время?', options: ['Vaqtingiz bormi?', 'Pulingiz bormi?', 'Do\u2019stingiz bormi?', 'Savolingiz bormi?'], answer: 'Vaqtingiz bormi?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ularda yangi mashina bor", options: ['У них есть новая машина', 'У нас есть новая машина', 'У вас есть новая машина', 'У него есть новая машина'], answer: 'У них есть новая машина' },
              { type: 'fill_blank', sentence: 'У меня ___ денег.', hint: "('yo'q' — 'есть' so'zining zidi)", options: ['нет', 'есть', 'не', 'нельзя'], answer: 'нет' },
              { type: 'match', pairs: [{ ru: 'У него', uz: 'Unda (erkak)' }, { ru: 'У неё', uz: 'Unda (ayol)' }, { ru: 'У вас', uz: 'Sizda' }, { ru: 'У них', uz: 'Ularda' }] },
              { type: 'listening', audioText: 'У меня нет денег, но у тебя есть.', question: 'Kimda pul bor?', options: ["Sizda", "Menda", "Bizda", "Ularda"], answer: 'Sizda' },
              { type: 'order', prompt: 'Sizda savol bormi?', tiles: ['У', 'вас', 'есть', 'вопрос?'], answer: 'У вас есть вопрос?' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня есть время, а у него нет.', options: ["Menda vaqt bor, unda yo'q", "Unda vaqt bor, menda yo'q", "Bizda vaqt yo'q", "Sizda vaqt bor"], answer: "Menda vaqt bor, unda yo'q" },
              { type: 'fill_blank', sentence: 'У тебя есть братья и сёстры? — Да, у меня ___ есть.', hint: "('bor' fe'lining takroriy tasdig'i)", options: ['есть', 'нет', 'был', 'будет'], answer: 'есть' },
              { type: 'choice', dir: 'uz2ru', prompt: "Menda hech qanday savolim yo'q", options: ['У меня нет вопросов', 'У меня есть вопрос', 'У меня много вопросов', 'У меня трудный вопрос'], answer: 'У меня нет вопросов' },
              { type: 'match', pairs: [{ ru: 'Есть', uz: 'Bor' }, { ru: 'Нет', uz: "Yo'q" }, { ru: 'У кого?', uz: 'Kimda?' }, { ru: 'У всех', uz: 'Hammada' }] },
              { type: 'order', prompt: "Unda (erkak) ko'p do'st bor", tiles: ['У', 'него', 'много', 'друзей'], answer: 'У него много друзей' },
              { type: 'fill_blank', sentence: 'У ___ есть большая семья.', hint: "('biz'ning 'у' predlogi bilan shakli)", options: ['нас', 'мы', 'нам', 'нами'], answer: 'нас' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У неё есть работа', options: ["Unda (ayol) ish bor", "Unda (erkak) ish bor", "Bizda ish bor", "Sizda ish bor"], answer: "Unda (ayol) ish bor" },
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
              { type: 'match', pairs: [{ ru: 'Скульптура', uz: 'Haykal' }, { ru: 'Экспонат', uz: 'Eksponat' }, { ru: 'Зал', uz: 'Zal' }, { ru: 'Гид', uz: 'Gid' }] },
              { type: 'fill_blank', sentence: 'Экскурсия ___ через десять минут.', hint: "('boshlanadi' fe'lining hozirgi zamon shakli)", options: ['начинается', 'начинался', 'начнётся', 'начал'], answer: 'начинается' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот музей закрыт по понедельникам', options: ["Bu muzey dushanba kunlari yopiq", "Bu muzey har kuni ochiq", "Bu muzey bepul", "Bu muzey yaqinda ochilgan"], answer: "Bu muzey dushanba kunlari yopiq" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu rasm juda mashhur", options: ['Эта картина очень известная', 'Эта картина очень старая', 'Эта картина очень дорогая', 'Эта картина очень маленькая'], answer: 'Эта картина очень известная' },
              { type: 'fill_blank', sentence: 'В этом зале выставлены ___ скульптуры.', hint: "('qadimiy' sifatining ko'plik shakli)", options: ['древние', 'древний', 'древняя', 'древнее'], answer: 'древние' },
              { type: 'match', pairs: [{ ru: 'Билет для взрослых', uz: "Kattalar uchun chipta" }, { ru: 'Билет для детей', uz: "Bolalar uchun chipta" }, { ru: 'Льготный билет', uz: "Chegirmali chipta" }, { ru: 'Аудиогид', uz: 'Audiogid' }] },
              { type: 'listening', audioText: 'Экскурсия на русском языке начинается в двенадцать часов.', question: "Ekskursiya soat nechada boshlanadi?", options: ["Soat o'n ikkida", "Soat o'nda", "Soat birda", "Soat ikkida"], answer: "Soat o'n ikkida" },
              { type: 'choice', dir: 'ru2uz', prompt: 'В музее есть аудиогид на нескольких языках', options: ["Muzeyda bir necha tilda audiogid bor", "Muzeyda faqat rus tilida gid bor", "Muzeyda gid yo'q", "Muzeyda kitob do'koni bor"], answer: "Muzeyda bir necha tilda audiogid bor" },
              { type: 'fill_blank', sentence: 'Художник нарисовал ___ картину.', hint: "('go'zal' sifati, ayol jinsi)", options: ['красивую', 'красивый', 'красивое', 'красивые'], answer: 'красивую' },
              { type: 'order', prompt: "Bu haykal juda qadimiy", tiles: ['Эта', 'скульптура', 'очень', 'древняя'], answer: 'Эта скульптура очень древняя' },
              { type: 'choice', dir: 'uz2ru', prompt: "Muzeyda flesh bilan suratga olish mumkin emas", options: ['В музее нельзя фотографировать со вспышкой', 'В музее нельзя разговаривать', 'В музее нельзя сидеть', 'В музее нельзя покупать билеты'], answer: 'В музее нельзя фотографировать со вспышкой' },
              { type: 'match', pairs: [{ ru: 'Открытие выставки', uz: "Ko'rgazma ochilishi" }, { ru: 'Закрытие музея', uz: "Muzey yopilishi" }, { ru: 'Постоянная экспозиция', uz: "Doimiy ko'rgazma" }, { ru: 'Временная выставка', uz: "Vaqtinchalik ko'rgazma" }] },
              { type: 'fill_blank', sentence: 'Мы посетили ___ выставку.', hint: "('vaqtinchalik' sifati, ayol jinsi)", options: ['временную', 'временный', 'временное', 'временные'], answer: 'временную' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Гид рассказывает об истории города', options: ["Gid shahar tarixi haqida gapiryapti", "Gid narxlar haqida gapiryapti", "Gid o'zi haqida gapiryapti", "Gid ob-havo haqida gapiryapti"], answer: "Gid shahar tarixi haqida gapiryapti" },
              { type: 'order', prompt: "Muzeyga kirish bepul", tiles: ['Вход', 'в', 'музей', 'бесплатный'], answer: 'Вход в музей бесплатный' },
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
              { type: 'fill_blank', sentence: 'Он ещё не пришёл? — Нет, он ___ не пришёл.', hint: "('hali' — inkor bilan)", options: ['ещё', 'уже', 'тоже', 'пока'], answer: 'ещё' },
              { type: 'fill_blank', sentence: 'Ты уже поел? — Да, я ___ поел.', hint: "('allaqachon')", options: ['уже', 'ещё', 'тоже', 'пока'], answer: 'уже' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я тоже хочу поехать с вами', options: ["Men ham siz bilan bormoqchiman", 'Men bormoqchi emasman', 'Siz ham bormoqchimisiz?', 'Men allaqachon bordim'], answer: "Men ham siz bilan bormoqchiman" },
              { type: 'fill_blank', sentence: 'Уроки ___ не закончились.', hint: "('hali')", options: ['ещё', 'уже', 'тоже', 'опять'], answer: 'ещё' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men ham rus tilini o'rganaman", options: ['Я тоже изучаю русский язык', 'Я уже изучаю русский язык', 'Я ещё не изучаю русский язык', 'Я изучаю английский язык'], answer: 'Я тоже изучаю русский язык' },
              { type: 'fill_blank', sentence: 'Фильм ___ начался?', hint: "('allaqachon' — savolda)", options: ['уже', 'ещё', 'тоже', 'опять'], answer: 'уже' },
              { type: 'match', pairs: [{ ru: 'Уже', uz: 'Allaqachon' }, { ru: 'Ещё', uz: 'Hali' }, { ru: 'Тоже', uz: 'Ham' }, { ru: 'Опять', uz: 'Yana' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он опять опоздал на урок', options: ['U yana darsga kechikdi', 'U birinchi marta kechikdi', 'U hech qachon kechikmaydi', 'U bugun kelmadi'], answer: 'U yana darsga kechikdi' },
              { type: 'fill_blank', sentence: 'Мы ___ не были в Москве.', hint: "('hali')", options: ['ещё', 'уже', 'тоже', 'опять'], answer: 'ещё' },
              { type: 'listening', audioText: 'Ты уже сделал домашнее задание? — Нет, ещё нет.', question: 'Uy vazifasi tayyormi?', options: ["Yo'q, hali emas", 'Ha, tayyor', "U umuman qilmaydi", "U allaqachon topshirdi"], answer: "Yo'q, hali emas" },
              { type: 'choice', dir: 'uz2ru', prompt: 'U yana savol berdi', options: ['Он опять задал вопрос', 'Он уже ответил на вопрос', 'Он тоже задал вопрос', 'Он больше не спрашивает'], answer: 'Он опять задал вопрос' },
              { type: 'fill_blank', sentence: 'Я ___ читаю эту книгу, ещё не закончил.', hint: "('hali ham' — davomiylik)", options: ['всё ещё', 'уже', 'тоже', 'опять'], answer: 'всё ещё' },
              { type: 'order', prompt: 'Men ham u yerga bormoqchiman', tiles: ['Я', 'тоже', 'хочу', 'туда', 'поехать'], answer: 'Я тоже хочу туда поехать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Уже поздно, пора идти домой', options: ['Allaqachon kech, uyga borish vaqti', "Hali erta, o'ynash mumkin", 'Bugun bayram', 'Ertaga dam olish kuni'], answer: 'Allaqachon kech, uyga borish vaqti' },
              { type: 'fill_blank', sentence: 'Она ___ не знает ответа.', hint: "('hali')", options: ['ещё', 'уже', 'тоже', 'опять'], answer: 'ещё' },
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
              { type: 'match', pairs: [{ ru: 'Путешествие', uz: 'Sayohat' }, { ru: 'Турист', uz: 'Turist' }, { ru: 'Маршрут', uz: 'Marshrut' }, { ru: 'Достопримечательность', uz: "Diqqatga sazovor joy" }] },
              { type: 'fill_blank', sentence: 'Мы ___ по разным странам.', hint: "('sayohat qilmoq' fe'lining 'biz' shakli)", options: ['путешествуем', 'путешествуешь', 'путешествует', 'путешествуют'], answer: 'путешествуем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я хочу посетить много стран', options: ["Men ko'p mamlakatlarni ziyorat qilishni xohlayman", "Men bitta mamlakatda yashayman", "Men hech qayerga bormayman", "Men faqat o'z shahrimni bilaman"], answer: "Men ko'p mamlakatlarni ziyorat qilishni xohlayman" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yerning tabiati juda go'zal", options: ['Природа здесь очень красивая', 'Погода здесь очень плохая', 'Люди здесь очень добрые', 'Еда здесь очень вкусная'], answer: 'Природа здесь очень красивая' },
              { type: 'fill_blank', sentence: 'Турист сфотографировал ___ здание.', hint: "('qadimiy' sifati, o'rta jinsi)", options: ['старинное', 'старинный', 'старинная', 'старинные'], answer: 'старинное' },
              { type: 'match', pairs: [{ ru: 'Карта', uz: 'Xarita' }, { ru: 'Компас', uz: 'Kompas' }, { ru: 'Рюкзак', uz: 'Ryukzak' }, { ru: 'Палатка', uz: 'Chodir' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы остановились в маленькой деревне', options: ["Biz kichik qishloqda to'xtadik", 'Biz katta shaharda to\u2019xtadik', 'Biz mehmonxonada yashadik', "Biz tog'da yurdik"], answer: "Biz kichik qishloqda to'xtadik" },
              { type: 'fill_blank', sentence: 'Путешествовать одному ___ интересно.', hint: "('juda' kuchaytiruvchi so'zi)", options: ['очень', 'мало', 'редко', 'иногда'], answer: 'очень' },
              { type: 'listening', audioText: 'В следующем году мы поедем в Испанию и Португалию.', question: 'Kelasi yil qayerga borishadi?', options: ['Ispaniya va Portugaliyaga', 'Fransiya va Italiyaga', 'Angliyaga', 'Yaponiyaga'], answer: 'Ispaniya va Portugaliyaga' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sayohat paytida ko'p suratga oldik", options: ['Во время путешествия мы много фотографировали', 'Во время путешествия мы много спали', 'Во время путешествия мы много читали', 'Во время путешествия мы много работали'], answer: 'Во время путешествия мы много фотографировали' },
              { type: 'order', prompt: 'Biz yangi madaniyatlarni kashf qilamiz', tiles: ['Мы', 'открываем', 'новые', 'культуры'], answer: 'Мы открываем новые культуры' },
              { type: 'match', pairs: [{ ru: 'Виза', uz: 'Viza' }, { ru: 'Страховка', uz: "Sug'urta" }, { ru: 'Маршрут', uz: 'Marshrut' }, { ru: 'Приключение', uz: 'Sarguzasht' }] },
              { type: 'fill_blank', sentence: 'Нам нужна туристическая ___.', hint: "('sug'urta' so'zi)", options: ['страховка', 'страховку', 'страховкой', 'страховке'], answer: 'страховка' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это было незабываемое путешествие', options: ['Bu unutilmas sayohat edi', 'Bu oddiy sayohat edi', 'Bu qisqa sayohat edi', 'Bu qimmat sayohat edi'], answer: 'Bu unutilmas sayohat edi' },
              { type: 'order', prompt: 'Biz butun dunyoni sayohat qilmoqchimiz', tiles: ['Мы', 'хотим', 'путешествовать', 'по', 'всему', 'миру'], answer: 'Мы хотим путешествовать по всему миру' },
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
              { type: 'listening', audioText: 'У Игоря есть бабушка. Её зовут Мария Петровна. Она уже не работает, но любит готовить.', question: 'Buvisi hozir ishlaydimi?', options: ["Yo'q, ishlamaydi", 'Ha, ishlaydi', 'U shifokor', "U o'qituvchi"], answer: "Yo'q, ishlamaydi" },
              { type: 'listening', audioText: 'У Игоря есть дедушка. Его зовут Николай Петрович. Раньше он был военным.', question: 'Bobosi avval kim bo\'lgan?', options: ['Harbiy', 'Shifokor', "O'qituvchi", 'Iqtisodchi'], answer: 'Harbiy' },
              { type: 'listening', audioText: 'Ольга и Игорь женаты уже десять лет. У них крепкая семья.', question: "Ular necha yildan beri turmush qurgan?", options: ["O'n yil", 'Besh yil', 'Ikki yil', "Yigirma yil"], answer: "O'n yil" },
              { type: 'listening', audioText: 'Дима учится в седьмом классе. Его любимый предмет — физика.', question: "Dimaning sevimli fani nima?", options: ['Fizika', 'Matematika', 'Adabiyot', 'Tarix'], answer: 'Fizika' },
              { type: 'listening', audioText: 'По выходным вся семья ходит гулять в парк.', question: 'Dam olish kunlari oila nima qiladi?', options: ["Bog'da sayr qilishadi", 'Uyda o\u2019tirishadi', 'Ishlashadi', 'Sayohat qilishadi'], answer: "Bog'da sayr qilishadi" },
              { type: 'listening', audioText: 'Владимир любит рыбачить на выходных. Это его хобби.', question: "Vladimirning sevimli mashg'uloti nima?", options: ['Baliq ovlash', "Kitob o'qish", 'Sport', 'Rasm chizish'], answer: 'Baliq ovlash' },
              { type: 'listening', audioText: 'Игорь работает в лаборатории и изучает растения.', question: 'Igor qayerda ishlaydi?', options: ['Laboratoriyada', 'Maktabda', 'Kasalxonada', 'Bankda'], answer: 'Laboratoriyada' },
              { type: 'listening', audioText: 'Ольга работает в банке уже пять лет.', question: 'Olga necha yildan beri bankda ishlaydi?', options: ['Besh yil', "O'n yil", 'Bir yil', 'Ikki yil'], answer: 'Besh yil' },
              { type: 'listening', audioText: 'Мама Игоря сейчас на пенсии, но раньше была врачом.', question: "Igorning onasi kim bo'lgan?", options: ['Shifokor', "O'qituvchi", 'Iqtisodchi', 'Jurnalist'], answer: 'Shifokor' },
              { type: 'listening', audioText: 'У Игоря и Ольги есть кот. Его зовут Барсик.', question: 'Ularning mushugi bormi?', options: ['Ha, Barsik', "Yo'q", 'Ularda it bor', 'Ularda quti bor'], answer: 'Ha, Barsik' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вся семья собирается вместе на праздники', options: ["Bayramlarda butun oila birga yig'ilishadi", "Bayramlarda hech kim kelmaydi", 'Ular hech qachon uchrashishmaydi', "Faqat bolalar keladi"], answer: "Bayramlarda butun oila birga yig'ilishadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu oila juda hamjihat', options: ['Эта семья очень дружная', 'Эта семья очень большая', 'Эта семья очень богатая', 'Эта семья очень известная'], answer: 'Эта семья очень дружная' },
              { type: 'match', pairs: [{ ru: 'Дедушка и бабушка', uz: 'Bobo va buvi' }, { ru: 'Муж и жена', uz: 'Er va xotin' }, { ru: 'Внук', uz: "Nabira (o'g'il)" }, { ru: 'Родственники', uz: 'Qarindoshlar' }] },
              { type: 'fill_blank', sentence: 'Игорь и Ольга живут ___ уже десять лет.', hint: "('birga' ravishi)", options: ['вместе', 'отдельно', 'дома', 'рядом'], answer: 'вместе' },
              { type: 'order', prompt: 'Bu Igorning katta oilasi', tiles: ['Это', 'большая', 'семья', 'Игоря'], answer: 'Это большая семья Игоря' },
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
              { type: 'match', pairs: [{ ru: 'Больница', uz: 'Kasalxona' }, { ru: 'Поликлиника', uz: 'Poliklinika' }, { ru: 'Медсестра', uz: 'Hamshira' }, { ru: 'Пациент', uz: 'Bemor' }] },
              { type: 'fill_blank', sentence: 'У меня ___ температура.', hint: "('yuqori' sifati, ayol jinsi)", options: ['высокая', 'высокий', 'высокое', 'высокие'], answer: 'высокая' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Откройте рот, пожалуйста', options: ["Iltimos, og'zingizni oching", "Iltimos, ko'zingizni yuming", "Iltimos, qo'lingizni ko'tarib turing", 'Iltimos, chuqur nafas oling'], answer: "Iltimos, og'zingizni oching" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Chuqur nafas oling', options: ['Дышите глубже', 'Не дышите', 'Кашляйте', 'Откройте рот'], answer: 'Дышите глубже' },
              { type: 'fill_blank', sentence: 'Врач выписал мне ___.', hint: "('retsept' so'zi)", options: ['рецепт', 'рецепта', 'рецепту', 'рецептом'], answer: 'рецепт' },
              { type: 'match', pairs: [{ ru: 'Аллергия', uz: 'Allergiya' }, { ru: 'Давление', uz: 'Bosim' }, { ru: 'Пульс', uz: 'Puls' }, { ru: 'Диагноз', uz: 'Tashxis' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня аллергия на лекарства', options: ['Menda dorilarga allergiya bor', "Menda dorilarga ehtiyoj yo'q", 'Men dori ichmayman', 'Men shifokorman'], answer: 'Menda dorilarga allergiya bor' },
              { type: 'fill_blank', sentence: 'Мне нужно сдать ___ крови.', hint: "('tahlil' so'zi)", options: ['анализ', 'анализа', 'анализу', 'анализом'], answer: 'анализ' },
              { type: 'listening', audioText: 'Врач измерил моё давление и пульс.', question: 'Shifokor nimani o\u2019lchadi?', options: ['Bosim va pulsni', "Bo'yni", 'Vaznni', 'Haroratni'], answer: 'Bosim va pulsni' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men shifoxonaga yotqizildim', options: ['Меня положили в больницу', 'Меня выписали из больницы', 'Я работаю в больнице', 'Я здоров'], answer: 'Меня положили в больницу' },
              { type: 'order', prompt: 'Menga tez yordam kerak', tiles: ['Мне', 'нужна', 'скорая', 'помощь'], answer: 'Мне нужна скорая помощь' },
              { type: 'match', pairs: [{ ru: 'Скорая помощь', uz: 'Tez yordam' }, { ru: 'Операция', uz: 'Operatsiya' }, { ru: 'Диагноз', uz: 'Tashxis' }, { ru: 'Выздоровление', uz: 'Tuzalish' }] },
              { type: 'fill_blank', sentence: 'После операции нужно много ___.', hint: "('dam olmoq' fe'lining infinitivi)", options: ['отдыхать', 'отдыхаю', 'отдыхал', 'отдохнёт'], answer: 'отдыхать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне нужно сделать операцию', options: ['Menga operatsiya qilish kerak', 'Menga dam olish kerak', "Menga sport qilish kerak", 'Menga ovqatlanish kerak'], answer: 'Menga operatsiya qilish kerak' },
              { type: 'order', prompt: "Shifokor menga tashxis qo'ydi", tiles: ['Врач', 'поставил', 'мне', 'диагноз'], answer: 'Врач поставил мне диагноз' },
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
              { type: 'match', pairs: [{ ru: 'Тесть', uz: 'Qaynota (xotin tomonidan)' }, { ru: 'Свёкор', uz: 'Qaynota (er tomonidan)' }, { ru: 'Невестка', uz: 'Kelin' }, { ru: 'Зять', uz: 'Kuyov' }] },
              { type: 'fill_blank', sentence: 'Это моя ___ — сестра моей мамы.', hint: "('xola' so'zi)", options: ['тётя', 'дядя', 'бабушка', 'сестра'], answer: 'тётя' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это мой двоюродный брат', options: ["Bu mening amakivachcham (erkak)", 'Bu mening akam', 'Bu mening jiyanim', "Bu mening o'g'lim"], answer: "Bu mening amakivachcham (erkak)" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu mening jiyanim (o'g'il)", options: ['Это мой племянник', 'Это моя племянница', 'Это мой внук', 'Это мой сын'], answer: 'Это мой племянник' },
              { type: 'match', pairs: [{ ru: 'Двоюродный брат', uz: 'Amakivachcha (erkak)' }, { ru: 'Двоюродная сестра', uz: 'Amakivachcha (ayol)' }, { ru: 'Племянник', uz: "Jiyan (o'g'il)" }, { ru: 'Племянница', uz: 'Jiyan (qiz)' }] },
              { type: 'fill_blank', sentence: 'Это мои ___.', hint: "('amakivachchalar' so'zi)", options: ['двоюродные братья', 'двоюродный брат', 'двоюродная сестра', 'двоюродные сестра'], answer: 'двоюродные братья' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Моя невестка живёт с нами', options: ["Kelinim biz bilan yashaydi", "Kuyovim biz bilan yashaydi", "Xolam biz bilan yashaydi", "Amakim biz bilan yashaydi"], answer: "Kelinim biz bilan yashaydi" },
              { type: 'listening', audioText: 'Мой зять работает инженером.', question: "Kuyovi kim bo'lib ishlaydi?", options: ['Muhandis', 'Shifokor', "O'qituvchi", 'Iqtisodchi'], answer: 'Muhandis' },
              { type: 'fill_blank', sentence: 'Это генеалогическое ___ моей семьи.', hint: "('daraxt' so'zi)", options: ['дерево', 'деревья', 'дереву', 'деревом'], answer: 'дерево' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bizning oilada uchta avlod bor', options: ['В нашей семье три поколения', 'В нашей семье три брата', 'В нашей семье три ребёнка', 'В нашей семье три дома'], answer: 'В нашей семье три поколения' },
              { type: 'match', pairs: [{ ru: 'Поколение', uz: 'Avlod' }, { ru: 'Предки', uz: 'Ajdodlar' }, { ru: 'Потомки', uz: 'Avlodlar (kelajakdagi)' }, { ru: 'Родословная', uz: 'Nasl-nasab' }] },
              { type: 'fill_blank', sentence: 'Мои ___ жили в этом городе сто лет назад.', hint: "('ajdodlar' so'zi)", options: ['предки', 'потомки', 'родители', 'дети'], answer: 'предки' },
              { type: 'order', prompt: 'Bu bizning oila daraxtimiz', tiles: ['Это', 'наше', 'семейное', 'древо'], answer: 'Это наше семейное древо' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я знаю историю своей семьи', options: ["Men o'z oilamning tarixini bilaman", 'Men oilamni bilmayman', "Mening oilam yo'q", 'Men tarixni yaxshi ko\u2019raman'], answer: "Men o'z oilamning tarixini bilaman" },
              { type: 'fill_blank', sentence: 'Моя ___ живёт в другом городе.', hint: "('kelin' so'zi)", options: ['невестка', 'зять', 'тесть', 'свёкор'], answer: 'невестка' },
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
              { type: 'reading', text: 'Это Игорь. Он биолог. Он работает в институте.\nЭто его дочь. Её зовут Аня. Она учится в университете.', question: 'Anya nima qilyapti?', options: ["Universitetda o'qiydi", "Institutda ishlaydi", "Maktabda o'qiydi", 'Uyda dam oladi'], answer: "Universitetda o'qiydi" },
              { type: 'reading', text: 'Это бабушка Игоря. Она уже старенькая, но очень добрая.\nОна живёт в деревне и любит цветы.', question: 'Buvisi qayerda yashaydi?', options: ['Qishloqda', 'Shaharda', 'Chet elda', 'Poytaxtda'], answer: 'Qishloqda' },
              { type: 'reading', text: 'Это семья на даче летом.\nВсе отдыхают: дети играют, взрослые разговаривают.', question: 'Oila yozda qayerda?', options: ['Dachada', 'Shaharda', 'Dengizda', "Tog'da"], answer: 'Dachada' },
              { type: 'reading', text: 'Отец готовит шашлык. Мать накрывает на стол.\nДети помогают им.', question: 'Bolalar nima qilishyapti?', options: ["Ota-onaga yordam berishyapti", "O'ynashyapti", 'Uxlashyapti', "Kitob o'qishyapti"], answer: "Ota-onaga yordam berishyapti" },
              { type: 'reading', text: 'Вечером вся семья садится ужинать вместе.\nЭто их традиция каждый день.', question: 'Oilaning kunlik odati nima?', options: ['Birga kechki ovqat yeyish', 'Birga sport qilish', 'Birga sayohat qilish', "Birga o'qish"], answer: 'Birga kechki ovqat yeyish' },
              { type: 'reading', text: 'У Игоря есть младшая сестра. Её зовут Марина.\nОна врач и работает в больнице.', question: "Marina kim bo'lib ishlaydi?", options: ['Shifokor', "O'qituvchi", 'Iqtisodchi', 'Jurnalist'], answer: 'Shifokor' },
              { type: 'reading', text: 'Марина замужем. Её муж инженер.\nУ них есть маленькая дочка.', question: "Marinaning eri kim bo'lib ishlaydi?", options: ['Muhandis', 'Shifokor', "O'qituvchi", 'Haydovchi'], answer: 'Muhandis' },
              { type: 'reading', text: 'Семья Игоря часто ездит на природу.\nОни любят гулять в лесу и у реки.', question: 'Oila qayerga sayr qilishni yaxshi ko\u2019radi?', options: ["O'rmon va daryo bo'yiga", 'Bozorga', 'Muzeyga', 'Kinoteatrga'], answer: "O'rmon va daryo bo'yiga" },
              { type: 'reading', text: 'На день рождения дедушки собралась вся большая семья.\nБыло очень весело и вкусно.', question: 'Nima munosabati bilan yig\u2019ilishdi?', options: ["Bobosining tug'ilgan kuni", 'Bayram', "To'y", 'Yangi yil'], answer: "Bobosining tug'ilgan kuni" },
              { type: 'reading', text: 'Игорь пишет письмо своей бабушке.\nОн рассказывает ей о своей работе и семье.', question: 'Igor kimga xat yozyapti?', options: ['Buvisiga', 'Onasiga', "Do'stiga", 'Ustoziga'], answer: 'Buvisiga' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Семья для меня — самое важное в жизни', options: ["Oila men uchun hayotdagi eng muhim narsa", "Ish men uchun eng muhim", "Pul men uchun eng muhim", "Do'stlar men uchun eng muhim"], answer: "Oila men uchun hayotdagi eng muhim narsa" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bizning oilamiz an'analarni hurmat qiladi", options: ['Наша семья уважает традиции', 'Наша семья не любит традиции', 'Наша семья маленькая', 'Наша семья богатая'], answer: 'Наша семья уважает традиции' },
              { type: 'match', pairs: [{ ru: 'Традиция', uz: "An'ana" }, { ru: 'Праздник', uz: 'Bayram' }, { ru: 'Уважение', uz: 'Hurmat' }, { ru: 'Забота', uz: "G'amxo'rlik" }] },
              { type: 'fill_blank', sentence: 'В нашей семье все заботятся друг о ___.', hint: "('do'st' so'zining o'zaro almashinuv shakli)", options: ['друге', 'друг', 'другом', 'другу'], answer: 'друге' },
              { type: 'listening', audioText: 'Каждое воскресенье вся семья ужинает вместе у бабушки.', question: 'Yakshanba kunlari nima bo\'ladi?', options: ['Butun oila buvinikida yig\'iladi', 'Hech kim uchrashmaydi', 'Hamma ishlaydi', 'Bolalar uxlaydi'], answer: "Butun oila buvinikida yig'iladi" },
              { type: 'order', prompt: 'Oila - bu baxt', tiles: ['Семья', '—', 'это', 'счастье'], answer: 'Семья — это счастье' },
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
              { type: 'listening', audioText: 'Андрей, сколько лет вы уже играете в футбол?', question: "Jurnalist nima haqida so'rayapti?", options: ["Necha yildan beri futbol o'ynashi haqida", 'Uning ismi haqida', 'Uning uyi haqida', 'Uning ovqati haqida'], answer: "Necha yildan beri futbol o'ynashi haqida" },
              { type: 'listening', audioText: 'Я играю в футбол уже пятнадцать лет.', question: 'Necha yildan beri futbol o\u2019ynaydi?', options: ["O'n besh yil", "O'n yil", 'Besh yil', 'Yigirma yil'], answer: "O'n besh yil" },
              { type: 'listening', audioText: 'Какая ваша любимая команда была в детстве?', question: "Jurnalist nima haqida so'rayapti?", options: ['Bolaligidagi sevimli jamoasi haqida', 'Hozirgi jamoasi haqida', 'Murabbiyi haqida', 'Oilasi haqida'], answer: 'Bolaligidagi sevimli jamoasi haqida' },
              { type: 'listening', audioText: 'Вы много тренируетесь каждый день?', question: "Nima haqida so'ralmoqda?", options: ["Har kuni ko'p mashq qilishi haqida", 'Ovqatlanishi haqida', 'Uyqusi haqida', 'Kiyimlari haqida'], answer: "Har kuni ko'p mashq qilishi haqida" },
              { type: 'listening', audioText: 'Да, я тренируюсь каждый день по три часа.', question: 'Kuniga necha soat mashq qiladi?', options: ['Uch soat', 'Bir soat', 'Besh soat', "O'n soat"], answer: 'Uch soat' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Расскажите о ваших планах на будущее', options: ["Kelajakdagi rejalaringiz haqida gapirib bering", "O'tmishingiz haqida gapiring", 'Oilangiz haqida gapiring', 'Kasbingiz haqida gapiring'], answer: "Kelajakdagi rejalaringiz haqida gapirib bering" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men Olimpiadada g'olib bo'lishni orzu qilaman", options: ['Я мечтаю победить на Олимпиаде', 'Я мечтаю стать журналистом', 'Я мечтаю путешествовать', 'Я мечтаю отдохнуть'], answer: 'Я мечтаю победить на Олимпиаде' },
              { type: 'match', pairs: [{ ru: 'Вопрос', uz: 'Savol' }, { ru: 'Ответ', uz: 'Javob' }, { ru: 'Интервью', uz: 'Intervyu' }, { ru: 'Журналист', uz: 'Jurnalist' }] },
              { type: 'fill_blank', sentence: 'Журналист задал мне интересный ___.', hint: "('savol' so'zi)", options: ['вопрос', 'ответ', 'вопросы', 'вопросом'], answer: 'вопрос' },
              { type: 'listening', audioText: 'Спасибо за интересные ответы, Андрей!', question: 'Jurnalist nima uchun rahmat aytmoqda?', options: ['Qiziqarli javoblar uchun', "Sovg'a uchun", 'Vaqt uchun', 'Yordam uchun'], answer: 'Qiziqarli javoblar uchun' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это интервью будет показано вечером', options: ["Bu intervyu kechqurun ko'rsatiladi", 'Bu intervyu allaqachon ko\u2019rsatildi', 'Bu intervyu bekor qilindi', 'Bu intervyu radiosida bo\u2019ladi'], answer: "Bu intervyu kechqurun ko'rsatiladi" },
              { type: 'order', prompt: 'Menga savolingiz uchun rahmat', tiles: ['Спасибо', 'за', 'ваш', 'вопрос'], answer: 'Спасибо за ваш вопрос' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu mening birinchi intervyum', options: ['Это моё первое интервью', 'Это моё последнее интервью', 'Это моя первая игра', 'Это мой первый матч'], answer: 'Это моё первое интервью' },
              { type: 'match', pairs: [{ ru: 'Телеканал', uz: 'Telekanal' }, { ru: 'Зритель', uz: 'Tomoshabin' }, { ru: 'Камера', uz: 'Kamera' }, { ru: 'Микрофон', uz: 'Mikrofon' }] },
              { type: 'fill_blank', sentence: 'Журналист держит в руке ___.', hint: "('mikrofon' so'zi)", options: ['микрофон', 'камеру', 'вопрос', 'интервью'], answer: 'микрофон' },
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
              { type: 'match', pairs: [{ ru: 'Ноль', uz: '0' }, { ru: 'Один', uz: '1' }, { ru: 'Два', uz: '2' }, { ru: 'Три', uz: '3' }] },
              { type: 'match', pairs: [{ ru: 'Четыре', uz: '4' }, { ru: 'Пять', uz: '5' }, { ru: 'Шесть', uz: '6' }, { ru: 'Семь', uz: '7' }] },
              { type: 'fill_blank', sentence: 'Два плюс два — ___.', hint: '(2+2 amalining natijasi)', options: ['четыре', 'три', 'пять', 'шесть'], answer: 'четыре' },
              { type: 'fill_blank', sentence: 'Десять минус пять — ___.', hint: '(10-5 amalining natijasi)', options: ['пять', 'шесть', 'четыре', 'десять'], answer: 'пять' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Двенадцать', options: ["O'n ikki", "O'n uch", 'Ikki', "O'n"], answer: "O'n ikki" },
              { type: 'choice', dir: 'ru2uz', prompt: 'Шестнадцать', options: ["O'n olti", "O'n oltmish", 'Olti', "Oltmish"], answer: "O'n olti" },
              { type: 'listening', audioText: 'У меня есть четырнадцать книг.', question: "Nechta kitob bor?", options: ['14', '4', '40', '41'], answer: '14' },
              { type: 'fill_blank', sentence: 'Перед двадцатью идёт ___.', hint: "(20dan oldingi son)", options: ['девятнадцать', 'восемнадцать', 'двадцать один', 'десять'], answer: 'девятнадцать' },
              { type: 'order', prompt: 'Menda oltita olma bor', tiles: ['У', 'меня', 'есть', 'шесть', 'яблок'], answer: 'У меня есть шесть яблок' },
              { type: 'choice', dir: 'uz2ru', prompt: "Uchdan yettigacha sanang", options: ['Три, четыре, пять, шесть, семь', 'Один, два, три', 'Семь, шесть, пять', "Десять, одиннадцать"], answer: 'Три, четыре, пять, шесть, семь' },
              { type: 'match', pairs: [{ ru: 'Двенадцать', uz: '12' }, { ru: 'Тринадцать', uz: '13' }, { ru: 'Четырнадцать', uz: '14' }, { ru: 'Шестнадцать', uz: '16' }] },
              { type: 'fill_blank', sentence: 'В классе ___ учеников.', hint: "('20' sonining odam bilan ishlatiladigan shakli)", options: ['двадцать', 'два', 'двенадцать', 'два раза'], answer: 'двадцать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Пятнадцать плюс пять — двадцать.', options: ['15+5=20', '15+5=25', '15-5=10', '15+5=15'], answer: '15+5=20' },
              { type: 'order', prompt: "O'n birinchi sinfda o'qiyman", tiles: ['Я', 'учусь', 'в', 'одиннадцатом', 'классе'], answer: 'Я учусь в одиннадцатом классе' },
              { type: 'fill_blank', sentence: 'У меня ___ рублей.', hint: "('18' soni)", options: ['восемнадцать', 'восемь', 'восемьдесят', 'восемьсот'], answer: 'восемнадцать' },
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
              { type: 'match', pairs: [{ ru: 'Тридцать', uz: '30' }, { ru: 'Сорок', uz: '40' }, { ru: 'Шестьдесят', uz: '60' }, { ru: 'Восемьдесят', uz: '80' }] },
              { type: 'fill_blank', sentence: 'Двадцать плюс тридцать — ___.', hint: '(20+30 amalining natijasi)', options: ['пятьдесят', 'сорок', 'шестьдесят', 'семьдесят'], answer: 'пятьдесят' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Сто рублей', options: ['Yuz rubl', "O'n rubl", "Ming rubl", "Yuz dollar"], answer: 'Yuz rubl' },
              { type: 'fill_blank', sentence: 'Сто минус двадцать — ___.', hint: '(100-20 amalining natijasi)', options: ['восемьдесят', 'семьдесят', 'девяносто', 'шестьдесят'], answer: 'восемьдесят' },
              { type: 'choice', dir: 'uz2ru', prompt: "Yigirma besh", options: ['Двадцать пять', 'Пятьдесят два', 'Двадцать', 'Пятнадцать'], answer: 'Двадцать пять' },
              { type: 'listening', audioText: 'В нашей школе учится восемьсот учеников.', question: "Maktabda nechta o'quvchi bor?", options: ['800', '80', '8000', '18'], answer: '800' },
              { type: 'match', pairs: [{ ru: 'Двадцать один', uz: '21' }, { ru: 'Тридцать два', uz: '32' }, { ru: 'Сорок три', uz: '43' }, { ru: 'Пятьдесят четыре', uz: '54' }] },
              { type: 'fill_blank', sentence: 'Мне уже ___ лет.', hint: "('30' soni)", options: ['тридцать', 'три', 'тринадцать', 'третий'], answer: 'тридцать' },
              { type: 'order', prompt: "Bu kitob ellik rubl turadi", tiles: ['Эта', 'книга', 'стоит', 'пятьдесят', 'рублей'], answer: 'Эта книга стоит пятьдесят рублей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Семьдесят семь', options: ["Yetmish yetti", "Yetti yuz yetmish", "Yetmish", "Yetti"], answer: "Yetmish yetti" },
              { type: 'fill_blank', sentence: 'Шестьдесят плюс десять — ___.', hint: '(60+10 amalining natijasi)', options: ['семьдесят', 'восемьдесят', 'шестьдесят', 'девяносто'], answer: 'семьдесят' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bizning maktabimizda to'qson o'qituvchi bor", options: ['В нашей школе девяносто учителей', 'В нашей школе девятнадцать учителей', 'В нашей школе девять учителей', 'В нашей школе сто учителей'], answer: 'В нашей школе девяносто учителей' },
              { type: 'match', pairs: [{ ru: 'Пятьдесят', uz: '50' }, { ru: 'Шестьдесят пять', uz: '65' }, { ru: 'Восемьдесят восемь', uz: '88' }, { ru: 'Девяносто девять', uz: '99' }] },
              { type: 'order', prompt: "Bu shaharda yuz maktab bor", tiles: ['В', 'этом', 'городе', 'сто', 'школ'], answer: 'В этом городе сто школ' },
              { type: 'fill_blank', sentence: 'Автобус номер ___.', hint: "('45' soni)", options: ['сорок пять', 'пятьдесят четыре', 'четыре', 'пять'], answer: 'сорок пять' },
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
              { type: 'fill_blank', sentence: 'Урок начинается в ___ часов.', hint: "('9' soni)", options: ['девять', 'девятнадцать', 'девяносто', 'девятый'], answer: 'девять' },
              { type: 'choice', dir: 'uz2ru', prompt: "Soat sakkizda", options: ['В восемь часов', 'В восьмом часу', 'Восемь часов', 'До восьми'], answer: 'В восемь часов' },
              { type: 'fill_blank', sentence: 'Сейчас без пяти ___.', hint: "('to'rt' soni)", options: ['четыре', 'четыреста', 'четырнадцать', 'четвёртый'], answer: 'четыре' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ещё нет двух часов.', options: ["Hali soat ikki bo'lgani yo'q", "Soat ikkidan oshdi", "Soat ikki bo'ldi", "Soat ikkidan qoldi"], answer: "Hali soat ikki bo'lgani yo'q" },
              { type: 'match', pairs: [{ ru: 'Полдень', uz: 'Peshin' }, { ru: 'Полночь', uz: 'Yarim tun' }, { ru: 'Рано', uz: 'Erta' }, { ru: 'Поздно', uz: 'Kech' }] },
              { type: 'listening', audioText: 'Магазин работает с девяти утра до восьми вечера.', question: "Do'kon soat nechagacha ishlaydi?", options: ["Kechqurun sakkizgacha", "Ertalab to'qqizgacha", "Kunduzi ikkigacha", "Tungi o'ngacha"], answer: "Kechqurun sakkizgacha" },
              { type: 'fill_blank', sentence: 'Поезд отходит ровно ___ час.', hint: "('bir' soni)", options: ['в', 'на', 'через', 'до'], answer: 'в' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ertalab soat yettida turaman", options: ['Я встаю в семь часов утра', 'Я встаю в семь часов вечера', 'Я ложусь в семь утра', 'Я встаю в семь минут'], answer: 'Я встаю в семь часов утра' },
              { type: 'order', prompt: "Hozir soat uch", tiles: ['Сейчас', 'три', 'часа'], answer: 'Сейчас три часа' },
              { type: 'fill_blank', sentence: 'Фильм начинается через ___ минут.', hint: "('20' soni)", options: ['двадцать', 'два', 'двенадцать', 'второй'], answer: 'двадцать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Уже поздно, пора спать.', options: ["Allaqachon kech, uxlash vaqti", "Hali erta, uyg'onish vaqti", "Vaqt yo'q", "Hozir tush payti"], answer: "Allaqachon kech, uxlash vaqti" },
              { type: 'match', pairs: [{ ru: 'Час', uz: 'Soat (vaqt birligi)' }, { ru: 'Минута', uz: 'Daqiqa' }, { ru: 'Секунда', uz: 'Soniya' }, { ru: 'Сутки', uz: 'Bir kecha-kunduz' }] },
              { type: 'choice', dir: 'uz2ru', prompt: "Kechqurun oltida uchrashamiz", options: ['Встретимся в шесть вечера', 'Встретимся в шесть утра', 'Встретимся в шестом часу дня', 'Встретимся через шесть часов'], answer: 'Встретимся в шесть вечера' },
              { type: 'order', prompt: "Soat allaqachon o'n bir", tiles: ['Уже', 'одиннадцать', 'часов'], answer: 'Уже одиннадцать часов' },
              { type: 'fill_blank', sentence: 'Самолёт прилетает ___ полночь.', hint: "('yarim tunda' predlogi)", options: ['в', 'на', 'к', 'до'], answer: 'в' },
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
              { type: 'match', pairs: [{ ru: 'Наверху', uz: 'Yuqorida' }, { ru: 'Внизу', uz: 'Pastda' }, { ru: 'Впереди', uz: 'Oldinda' }, { ru: 'Сзади', uz: 'Orqada' }] },
              { type: 'fill_blank', sentence: 'Мой дом ___, за углом.', hint: "('yaqin' ravishi)", options: ['рядом', 'далеко', 'там', 'здесь'], answer: 'рядом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Библиотека далеко отсюда?', options: ['Kutubxona bu yerdan uzoqmi?', 'Kutubxona qachon ochiladi?', 'Kutubxona kimniki?', 'Kutubxona nima uchun yopiq?'], answer: 'Kutubxona bu yerdan uzoqmi?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Yo'nalish qayerga?", options: ['Куда идти?', 'Где это?', 'Откуда вы?', 'Кто там?'], answer: 'Куда идти?' },
              { type: 'fill_blank', sentence: 'Магазин находится ___ от моего дома.', hint: "('yaqin' — 'yaqinida' ma'nosidagi so'z)", options: ['недалеко', 'далеко', 'наверху', 'внизу'], answer: 'недалеко' },
              { type: 'match', pairs: [{ ru: 'Рядом', uz: 'Yonida' }, { ru: 'Далеко', uz: 'Uzoqda' }, { ru: 'Близко', uz: 'Yaqinda' }, { ru: 'Напротив', uz: 'Qarama-qarshida' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Аптека напротив школы', options: ['Dorixona maktabning qarshisida', 'Dorixona maktabning yonida', 'Dorixona maktabdan uzoqda', 'Dorixona yopiq'], answer: 'Dorixona maktabning qarshisida' },
              { type: 'fill_blank', sentence: 'Мой офис ___, на пятом этаже.', hint: "('yuqorida' ravishi)", options: ['наверху', 'внизу', 'рядом', 'далеко'], answer: 'наверху' },
              { type: 'listening', audioText: 'Магазин рядом, а вокзал далеко.', question: "Do'kon qanaqa?", options: ['Yaqin', 'Uzoq', 'Yopiq', 'Katta'], answer: 'Yaqin' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bank pochtaning yonida", options: ['Банк рядом с почтой', 'Банк напротив почты', 'Банк далеко от почты', 'Банк за почтой'], answer: 'Банк рядом с почтой' },
              { type: 'order', prompt: "Kutubxona uzoqda emas", tiles: ['Библиотека', 'не', 'далеко'], answer: 'Библиотека не далеко' },
              { type: 'match', pairs: [{ ru: 'Посередине', uz: "O'rtasida" }, { ru: 'В углу', uz: 'Burchakda' }, { ru: 'На краю', uz: 'Chekkasida' }, { ru: 'Между', uz: 'Orasida' }] },
              { type: 'fill_blank', sentence: 'Стол стоит ___ комнаты.', hint: "('o'rtasida' predlogi)", options: ['посередине', 'наверху', 'внизу', 'сзади'], answer: 'посередине' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Парк находится между школой и больницей', options: ["Bog' maktab va kasalxona orasida", "Bog' maktabning yonida", "Bog' shahar chekkasida", "Bog' uzoqda"], answer: "Bog' maktab va kasalxona orasida" },
              { type: 'order', prompt: "Uy ko'chaning boshida", tiles: ['Дом', 'в', 'начале', 'улицы'], answer: 'Дом в начале улицы' },
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
              { type: 'fill_blank', sentence: 'Дети играют в ___.', hint: "('bog'da' maxsus -у shakli)", options: ['саду', 'сад', 'саде', 'садом'], answer: 'саду' },
              { type: 'fill_blank', sentence: 'Корабль в ___.', hint: "('port' so'zi, maxsus -у shakli)", options: ['порту', 'порт', 'порте', 'портом'], answer: 'порту' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети играют в саду', options: ["Bolalar bog'da o'ynashyapti", "Bolalar uyda o'ynashyapti", 'Bolalar maktabda', "Bolalar ko'chada"], answer: "Bolalar bog'da o'ynashyapti" },
              { type: 'match', pairs: [{ ru: 'В шкафу', uz: 'Shkafda' }, { ru: 'В углу', uz: 'Burchakda' }, { ru: 'На мосту', uz: "Ko'prikda" }, { ru: 'В году', uz: 'Yilda' }] },
              { type: 'fill_blank', sentence: 'Моя одежда в ___.', hint: "('shkaf' so'zi, maxsus -у shakli)", options: ['шкафу', 'шкаф', 'шкафе', 'шкафом'], answer: 'шкафу' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yilda ko'p bayramlar bor", options: ['В этом году много праздников', 'В этом месяце много праздников', 'В этой неделе много праздников', 'Сегодня много праздников'], answer: 'В этом году много праздников' },
              { type: 'fill_blank', sentence: 'Машина стоит на ___.', hint: "('ko'prik' so'zi, maxsus -у shakli)", options: ['мосту', 'мост', 'мосте', 'мостом'], answer: 'мосту' },
              { type: 'listening', audioText: 'Летом дети отдыхают в лесу и в саду.', question: 'Bolalar yozda qayerda dam olishadi?', options: ["O'rmon va bog'da", 'Uyda', 'Shaharda', 'Dengizda'], answer: "O'rmon va bog'da" },
              { type: 'choice', dir: 'ru2uz', prompt: 'В прошлом году я был в Москве', options: ["O'tgan yili men Moskvada edim", 'Bu yil men Moskvaga boraman', 'Har yili men Moskvada bo\u2019laman', 'Kelasi yil men Moskvaga boraman'], answer: "O'tgan yili men Moskvada edim" },
              { type: 'match', pairs: [{ ru: 'В лесу', uz: "O'rmonda" }, { ru: 'В саду', uz: "Bog'da" }, { ru: 'На берегу', uz: 'Sohilda' }, { ru: 'В порту', uz: 'Portda' }] },
              { type: 'fill_blank', sentence: 'Рыбаки работают в ___.', hint: "('port' so'zi, maxsus -у shakli)", options: ['порту', 'порт', 'порте', 'портом'], answer: 'порту' },
              { type: 'order', prompt: "Bolalar bog'da o'ynashyapti", tiles: ['Дети', 'играют', 'в', 'саду'], answer: 'Дети играют в саду' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kiyimlar shkafda', options: ['Одежда в шкафу', 'Одежда на шкафу', 'Одежда у шкафа', 'Одежда со шкафа'], answer: 'Одежда в шкафу' },
              { type: 'fill_blank', sentence: 'В этом ___ я закончил школу.', hint: "('yil' so'zi, maxsus -у shakli)", options: ['году', 'год', 'годе', 'годом'], answer: 'году' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Они гуляют в лесу каждые выходные', options: ["Ular har dam olish kunlari o'rmonda sayr qilishadi", 'Ular har kuni ishlashadi', "Ular bog'da o'tirishadi", 'Ular uyda dam olishadi'], answer: "Ular har dam olish kunlari o'rmonda sayr qilishadi" },
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
              { type: 'fill_blank', sentence: 'Она читает ___ книгу.', hint: "('o'zining' — ayol egaga mos)", options: ['свою', 'свой', 'своё', 'свои'], answer: 'свою' },
              { type: 'fill_blank', sentence: 'Мы любим ___ город.', hint: "('o'zimizning' — erkak jinsi)", options: ['свой', 'своя', 'своё', 'свои'], answer: 'свой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Каждый любит свою работу', options: ["Har kim o'z ishini yaxshi ko'radi", "Hech kim ishlamaydi", "Ular boshqa ish qilishadi", "Men ishni yoqtirmayman"], answer: "Har kim o'z ishini yaxshi ko'radi" },
              { type: 'choice', dir: 'uz2ru', prompt: "U o'z fikrini aytdi", options: ['Он высказал своё мнение', 'Он высказал моё мнение', 'Он высказал твоё мнение', 'Он высказал наше мнение'], answer: 'Он высказал своё мнение' },
              { type: 'fill_blank', sentence: 'Ты берёшь ___ вещи?', hint: "('o'zining' — ko'plik)", options: ['свои', 'свой', 'своя', 'своё'], answer: 'свои' },
              { type: 'match', pairs: [{ ru: 'Свой дом', uz: "O'z uyi" }, { ru: 'Своя семья', uz: "O'z oilasi" }, { ru: 'Своё мнение', uz: "O'z fikri" }, { ru: 'Свои дети', uz: "O'z bolalari" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она гордится своими детьми', options: ["U o'z bolalari bilan faxrlanadi", 'U boshqalarning bolalari bilan faxrlanadi', 'U bolalarni yoqtirmaydi', 'U bolasiz'], answer: "U o'z bolalari bilan faxrlanadi" },
              { type: 'fill_blank', sentence: 'Каждый студент имеет ___ мнение.', hint: "('o'zining' — o'rta jinsi)", options: ['своё', 'свой', 'своя', 'свои'], answer: 'своё' },
              { type: 'listening', audioText: 'Он всегда говорит своё мнение открыто.', question: 'U qanday odat qiladi?', options: ['Fikrini ochiq aytadi', 'Hech narsa demaydi', 'Boshqalarga taqlid qiladi', 'Doim jim turadi'], answer: 'Fikrini ochiq aytadi' },
              { type: 'choice', dir: 'uz2ru', prompt: "Har bir kishi o'z yo'lini tanlaydi", options: ['Каждый выбирает свой путь', 'Все выбирают один путь', 'Никто не выбирает путь', 'Мы выбираем чужой путь'], answer: 'Каждый выбирает свой путь' },
              { type: 'order', prompt: "U o'z mashinasini sotdi", tiles: ['Он', 'продал', 'свою', 'машину'], answer: 'Он продал свою машину' },
              { type: 'fill_blank', sentence: 'Я забыл ___ ключи дома.', hint: "('o'zimning' — ko'plik)", options: ['свои', 'свой', 'своя', 'своё'], answer: 'свои' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У каждой страны свои традиции', options: ["Har bir mamlakatning o'z an'analari bor", 'Barcha mamlakatlar bir xil', 'Mamlakatlarda an\u2019analar yo\u2019q', 'Faqat bitta mamlakat bor'], answer: "Har bir mamlakatning o'z an'analari bor" },
              { type: 'match', pairs: [{ ru: 'Свой выбор', uz: "O'z tanlovi" }, { ru: 'Своя точка зрения', uz: "O'z nuqtai nazari" }, { ru: 'Своё дело', uz: "O'z ishi" }, { ru: 'Свои правила', uz: "O'z qoidalari" }] },
              { type: 'order', prompt: "Har bir uy o'z qoidalariga ega", tiles: ['У', 'каждого', 'дома', 'свои', 'правила'], answer: 'У каждого дома свои правила' },
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
              { type: 'match', pairs: [{ ru: 'Англия', uz: 'Angliya' }, { ru: 'Китай', uz: 'Xitoy' }, { ru: 'Индия', uz: 'Hindiston' }, { ru: 'Корея', uz: 'Koreya' }] },
              { type: 'fill_blank', sentence: 'Я родился в ___.', hint: "('Toshkent' shahri, joy-payt kelishigi)", options: ['Ташкенте', 'Ташкент', 'Ташкенту', 'Ташкентом'], answer: 'Ташкенте' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она приехала из Кореи', options: ["U Koreyadan kelgan", 'U Koreyaga ketyapti', "U Koreyada tug'ilgan", 'U Koreyani sevadi'], answer: "U Koreyadan kelgan" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men Buxoroda tug'ilganman", options: ['Я родился в Бухаре', 'Я живу в Бухаре', 'Я еду в Бухару', 'Я люблю Бухару'], answer: 'Я родился в Бухаре' },
              { type: 'fill_blank', sentence: 'Он живёт в ___.', hint: "('Angliya' so'zi, joy-payt kelishigi)", options: ['Англии', 'Англия', 'Англию', 'Англией'], answer: 'Англии' },
              { type: 'match', pairs: [{ ru: 'Столица', uz: 'Poytaxt' }, { ru: 'Гражданство', uz: 'Fuqarolik' }, { ru: 'Родина', uz: 'Vatan' }, { ru: 'Иностранец', uz: 'Chet ellik' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Столица Узбекистана — Ташкент', options: ["O'zbekistonning poytaxti — Toshkent", 'Toshkent Rossiyada', 'Toshkent kichik shahar', "Toshkent dengiz bo'yida"], answer: "O'zbekistonning poytaxti — Toshkent" },
              { type: 'fill_blank', sentence: 'Я приехал ___ Германии.', hint: "('dan' predlogi)", options: ['из', 'в', 'на', 'к'], answer: 'из' },
              { type: 'listening', audioText: 'Норико из Японии, а Людвиг из Германии.', question: 'Noriko qayerdan?', options: ['Yaponiyadan', 'Germaniyadan', 'Xitoydan', 'Koreyadan'], answer: 'Yaponiyadan' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men o'zbekistonlikman", options: ['Я гражданин Узбекистана', 'Я живу в России', 'Я еду в Узбекистан', 'Я иностранец'], answer: 'Я гражданин Узбекистана' },
              { type: 'order', prompt: 'U Fransiyada yashaydi', tiles: ['Она', 'живёт', 'во', 'Франции'], answer: 'Она живёт во Франции' },
              { type: 'match', pairs: [{ ru: 'Родной язык', uz: 'Ona tili' }, { ru: 'Иностранный язык', uz: 'Chet tili' }, { ru: 'Национальность', uz: 'Millat' }, { ru: 'Гражданин', uz: 'Fuqaro' }] },
              { type: 'fill_blank', sentence: 'Мой родной язык — ___.', hint: "('o'zbek tili' so'zi)", options: ['узбекский', 'по-узбекски', 'узбек', 'узбека'], answer: 'узбекский' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он гражданин двух стран', options: ["U ikki mamlakat fuqarosi", 'U bir mamlakatda yashaydi', "U fuqaro emas", 'U chet ellik'], answer: "U ikki mamlakat fuqarosi" },
              { type: 'order', prompt: 'Biz turli mamlakatlardanmiz', tiles: ['Мы', 'из', 'разных', 'стран'], answer: 'Мы из разных стран' },
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
              { type: 'fill_blank', sentence: 'Она ___ студенткой.', hint: "('bo'lmoq' fe'lining o'tgan zamoni, ayol jinsi)", options: ['была', 'был', 'было', 'были'], answer: 'была' },
              { type: 'fill_blank', sentence: 'Мы ___ дома вчера вечером.', hint: "('bo'lmoq' fe'lining o'tgan zamoni, ko'plik)", options: ['были', 'был', 'была', 'было'], answer: 'были' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Раньше здесь было поле, а теперь город', options: ["Ilgari bu yerda dala edi, hozir shahar", "Bu yerda hech qachon dala bo'lmagan", 'Bu yerda hozir ham dala', "Bu yerda shahar edi, hozir dala"], answer: "Ilgari bu yerda dala edi, hozir shahar" },
              { type: 'choice', dir: 'uz2ru', prompt: 'U bola paytida bu yerda edim', options: ['В детстве я был здесь', 'Сейчас я здесь', 'Завтра я буду здесь', 'Я никогда не был здесь'], answer: 'В детстве я был здесь' },
              { type: 'fill_blank', sentence: 'В прошлом году погода ___ холодной.', hint: "('bo'lmoq' fe'lining o'tgan zamoni, ayol jinsi)", options: ['была', 'был', 'было', 'были'], answer: 'была' },
              { type: 'match', pairs: [{ ru: 'Было интересно', uz: 'Qiziqarli edi' }, { ru: 'Было трудно', uz: 'Qiyin edi' }, { ru: 'Было весело', uz: 'Quvnoq edi' }, { ru: 'Было скучно', uz: 'Zerikarli edi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'На вечеринке было очень весело', options: ['Kechada juda quvnoq edi', 'Kechada juda zerikarli edi', "Kecha bo'lmadi", 'Kecha ertaga bo\u2019ladi'], answer: 'Kechada juda quvnoq edi' },
              { type: 'fill_blank', sentence: 'Вчера у меня ___ много работы.', hint: "('bor edi' — 'было' shakli)", options: ['было', 'есть', 'будет', 'нет'], answer: 'было' },
              { type: 'listening', audioText: 'Раньше я жил в маленьком городе, а теперь живу в столице.', question: 'U avval qayerda yashagan?', options: ['Kichik shaharda', 'Poytaxtda', 'Qishloqda', 'Chet elda'], answer: 'Kichik shaharda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kecha kuni sovuq edi', options: ['Вчера был холодный день', 'Сегодня холодный день', 'Завтра будет холодный день', 'Вчера было тепло'], answer: 'Вчера был холодный день' },
              { type: 'order', prompt: "U yerda katta bog' bor edi", tiles: ['Там', 'был', 'большой', 'сад'], answer: 'Там был большой сад' },
              { type: 'fill_blank', sentence: 'Раньше на этом месте ___ старый дом.', hint: "('bo'lmoq' fe'lining o'tgan zamoni, erkak jinsi)", options: ['был', 'была', 'было', 'были'], answer: 'был' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Когда я был маленьким, я жил у бабушки', options: ["Men kichkina bo'lganimda buvimnikida yashaganman", "Men hozir buvimnikida yashayman", "Men buvimni ko'rmayman", 'Men bobomnikida yashayman'], answer: "Men kichkina bo'lganimda buvimnikida yashaganman" },
              { type: 'fill_blank', sentence: 'Это ___ лучшее время в моей жизни.', hint: "('bo'lmoq' fe'lining o'tgan zamoni, o'rta jinsi)", options: ['было', 'был', 'была', 'были'], answer: 'было' },
              { type: 'order', prompt: 'Biz bolalikda baxtli edik', tiles: ['В', 'детстве', 'мы', 'были', 'счастливы'], answer: 'В детстве мы были счастливы' },
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
              { type: 'match', pairs: [{ ru: 'Дождь', uz: "Yomg'ir" }, { ru: 'Ветер', uz: 'Shamol' }, { ru: 'Солнце', uz: 'Quyosh' }, { ru: 'Облако', uz: 'Bulut' }] },
              { type: 'fill_blank', sentence: 'Осенью часто идёт ___.', hint: "('yomg'ir' so'zi)", options: ['дождь', 'снег', 'солнце', 'облако'], answer: 'дождь' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bugun tashqarida shamolli", options: ['Сегодня на улице ветрено', 'Сегодня на улице тепло', 'Сегодня на улице солнечно', 'Сегодня на улице дождливо'], answer: 'Сегодня на улице ветрено' },
              { type: 'fill_blank', sentence: 'В феврале очень ___.', hint: "('sovuq' ravishi)", options: ['холодно', 'жарко', 'тепло', 'сухо'], answer: 'холодно' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какая сегодня погода?', options: ["Bugun ob-havo qanday?", "Bugun qaysi kun?", "Bugun necha daraja?", "Bugun bayram bormi?"], answer: "Bugun ob-havo qanday?" },
              { type: 'listening', audioText: 'Весной тепло, летом жарко, осенью прохладно, а зимой холодно.', question: "Yozda qanday?", options: ['Issiq', 'Sovuq', 'Salqin', 'Iliq'], answer: 'Issiq' },
              { type: 'match', pairs: [{ ru: 'Март', uz: 'Mart (bahor)' }, { ru: 'Июль', uz: 'Iyul (yoz)' }, { ru: 'Октябрь', uz: 'Oktabr (kuz)' }, { ru: 'Декабрь', uz: 'Dekabr (qish)' }] },
              { type: 'fill_blank', sentence: 'В мае погода уже ___.', hint: "('issiq' emas, 'iliq' ravishi)", options: ['тёплая', 'холодная', 'снежная', 'дождливая'], answer: 'тёплая' },
              { type: 'choice', dir: 'uz2ru', prompt: "Kuzda barglar sarg'ayadi", options: ['Осенью листья желтеют', 'Весной листья зеленеют', 'Зимой листья падают', 'Летом листья растут'], answer: 'Осенью листья желтеют' },
              { type: 'order', prompt: "Qishda tez-tez qor yog'adi", tiles: ['Зимой', 'часто', 'идёт', 'снег'], answer: 'Зимой часто идёт снег' },
              { type: 'fill_blank', sentence: 'Сегодня светит ___.', hint: "('quyosh' so'zi)", options: ['солнце', 'дождь', 'снег', 'облако'], answer: 'солнце' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Возьми зонт, на улице дождь.', options: ["Soyabon ol, tashqarida yomg'ir", "Kurtka ki, tashqarida sovuq", "Ko'zoynak tak, tashqarida quyosh", "Shapka ki, tashqarida shamol"], answer: "Soyabon ol, tashqarida yomg'ir" },
              { type: 'match', pairs: [{ ru: 'Жарко', uz: 'Issiq' }, { ru: 'Прохладно', uz: 'Salqin' }, { ru: 'Сухо', uz: 'Quruq' }, { ru: 'Влажно', uz: 'Nam' }] },
              { type: 'choice', dir: 'uz2ru', prompt: "Sentabrda maktab boshlanadi", options: ['В сентябре начинается школа', 'В сентябре начинаются каникулы', 'В сентябре начинается лето', 'В сентябре начинается зима'], answer: 'В сентябре начинается школа' },
              { type: 'fill_blank', sentence: 'В апреле идёт ___ дождь.', hint: "('bahor' sifatining erkak jinsi)", options: ['весенний', 'весенняя', 'весеннее', 'весенние'], answer: 'весенний' },
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
              { type: 'fill_blank', sentence: '___ это дом? — Это дом моего дедушки.', hint: "(erkak jinsidagi so'z uchun)", options: ['Чей', 'Чья', 'Чьё', 'Чьи'], answer: 'Чей' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu kimning derazasi?", options: ['Чьё это окно?', 'Чей это дом?', 'Чья это комната?', 'Чьи это вещи?'], answer: 'Чьё это окно?' },
              { type: 'fill_blank', sentence: '___ это дети играют во дворе?', hint: "(ko'plik uchun 'kimniki')", options: ['Чьи', 'Чей', 'Чья', 'Чьё'], answer: 'Чьи' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Чья это сумка на столе?', options: ["Stoldagi bu kimning sumkasi?", "Stoldagi bu nima?", "Stol qayerda?", "Bu kimning stoli?"], answer: "Stoldagi bu kimning sumkasi?" },
              { type: 'match', pairs: [{ ru: 'Чей это стол?', uz: 'Bu kimning stoli?' }, { ru: 'Чья это книга?', uz: 'Bu kimning kitobi?' }, { ru: 'Чьё это пальто?', uz: 'Bu kimning palьtosi?' }, { ru: 'Чьи это очки?', uz: 'Bu kimning ko\'zoynagi?' }] },
              { type: 'fill_blank', sentence: '— ___ эти ключи? — Мои.', hint: "(ko'plik uchun 'kimniki')", options: ['Чьи', 'Чей', 'Чья', 'Чьё'], answer: 'Чьи' },
              { type: 'listening', audioText: 'Чей это телефон? — Это телефон моего брата.', question: "Telefon kimniki?", options: ["Ukasiniki", "Onasiniki", "Do'stiniki", "O'ziniki"], answer: "Ukasiniki" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu kimning mashinasi turibdi?", options: ['Чья это машина стоит?', 'Чей это дом стоит?', 'Чьё это здание стоит?', 'Чьи это вещи лежат?'], answer: 'Чья это машина стоит?' },
              { type: 'order', prompt: "Bu kimning uyi?", tiles: ['Чей', 'это', 'дом?'], answer: 'Чей это дом?' },
              { type: 'fill_blank', sentence: '___ это фотография на стене?', hint: "(ayol jinsidagi so'z uchun)", options: ['Чья', 'Чей', 'Чьё', 'Чьи'], answer: 'Чья' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Чьи это дети такие красивые?', options: ["Kimning bunday chiroyli bolalari bor?", "Bu kimning uyi?", "Bu kim?", "Bolalar qayerda?"], answer: "Kimning bunday chiroyli bolalari bor?" },
              { type: 'match', pairs: [{ ru: 'Мой (чей?)', uz: "Erkak so'zga javob" }, { ru: 'Моя (чья?)', uz: "Ayol so'zga javob" }, { ru: 'Моё (чьё?)', uz: "Neytral so'zga javob" }, { ru: 'Мои (чьи?)', uz: "Ko'plikka javob" }] },
              { type: 'fill_blank', sentence: '— ___ это собака? — Это моя собака.', hint: "(ayol jinsidagi so'z uchun)", options: ['Чья', 'Чей', 'Чьё', 'Чьи'], answer: 'Чья' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu kimning byurosi (yozuv stoli)?", options: ['Чей это письменный стол?', 'Чья это комната?', 'Чьё это кресло?', 'Чьи это бумаги?'], answer: 'Чей это письменный стол?' },
              { type: 'order', prompt: "Bu kimning kompyuteri?", tiles: ['Чей', 'это', 'компьютер?'], answer: 'Чей это компьютер?' },
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
              { type: 'fill_blank', sentence: 'Дети играют ___ дворе.', hint: "('hovlida' — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'fill_blank', sentence: 'Книги лежат ___ полке.', hint: "('tokchada' — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самолёт летит в небе', options: ['Samolyot osmonda uchmoqda', 'Samolyot yerda turibdi', 'Samolyot dengizda', "Samolyot tog'da"], answer: 'Samolyot osmonda uchmoqda' },
              { type: 'fill_blank', sentence: 'Мы живём ___ пятом этаже.', hint: "('qavatda' — 'на' predlogi)", options: ['на', 'в', 'о', 'к'], answer: 'на' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kitob stolda', options: ['Книга на столе', 'Книга в столе', 'Книга у стола', 'Книга со стола'], answer: 'Книга на столе' },
              { type: 'fill_blank', sentence: 'Деньги лежат ___ кармане.', hint: "('cho'ntakda' — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'В деревне', uz: 'Qishloqda' }, { ru: 'На даче', uz: 'Dachada' }, { ru: 'В центре', uz: 'Markazda' }, { ru: 'На границе', uz: 'Chegarada' }] },
              { type: 'fill_blank', sentence: 'Рыбы живут ___ реке.', hint: "('daryoda' — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'order', prompt: "Bolalar hovlida o'ynashyapti", tiles: ['Дети', 'играют', 'во', 'дворе'], answer: 'Дети играют во дворе' },
              { type: 'choice', dir: 'uz2ru', prompt: "Konsertda ko'p odam bor edi", options: ['На концерте было много людей', 'В концерте было много людей', 'У концерта было много людей', 'За концертом было много людей'], answer: 'На концерте было много людей' },
              { type: 'fill_blank', sentence: 'Мы отдыхали ___ горах.', hint: "('tog'larda' — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'order', prompt: "Bu voqea maydonda sodir bo'ldi", tiles: ['Это', 'случилось', 'на', 'площади'], answer: 'Это случилось на площади' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Летом мы жили на даче', options: ["Yozda biz dachada yashadik", "Yozda biz shaharda yashadik", "Yozda biz mehmonxonada yashadik", "Yozda biz chet elda yashadik"], answer: "Yozda biz dachada yashadik" },
              { type: 'fill_blank', sentence: 'Люди работают ___ заводе.', hint: "('zavodda' — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'choice', dir: 'uz2ru', prompt: "Kitoblar javonda turibdi", options: ['Книги стоят в шкафу', 'Книги стоят на шкафу', 'Книги стоят у шкафа', 'Книги стоят со шкафа'], answer: 'Книги стоят в шкафу' },
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
              { type: 'fill_blank', sentence: 'Мы играем ___ баскетбол.', hint: "(sport turlari — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'fill_blank', sentence: 'Он играет ___ скрипке.', hint: "(musiqa asboblari — 'на' predlogi)", options: ['на', 'в', 'о', 'у'], answer: 'на' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы играем в теннис по выходным', options: ["Biz dam olish kunlari tennis o'ynaymiz", 'Biz har kuni tennis o\u2019ynaymiz', "Biz tennis ko'rmaymiz", 'Biz tennis sotib olamiz'], answer: "Biz dam olish kunlari tennis o'ynaymiz" },
              { type: 'choice', dir: 'uz2ru', prompt: "U pianinoda ajoyib chaladi", options: ['Она прекрасно играет на пианино', 'Она прекрасно играет в пианино', 'Она любит пианино', 'Она купила пианино'], answer: 'Она прекрасно играет на пианино' },
              { type: 'fill_blank', sentence: 'Дети играют ___ куклы.', hint: "(o'yinlar — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Играть в футбол', uz: "Futbol o'ynamoq" }, { ru: 'Играть на гитаре', uz: 'Gitara chalmoq' }, { ru: 'Играть в шахматы', uz: "Shaxmat o'ynamoq" }, { ru: 'Играть на пианино', uz: 'Pianino chalmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он научился играть на барабане', options: ["U baraban chalishni o'rgandi", "U futbol o'ynashni o'rgandi", "U shaxmat o'ynashni o'rgandi", "U qo'shiq aytishni o'rgandi"], answer: "U baraban chalishni o'rgandi" },
              { type: 'fill_blank', sentence: 'Мальчики играют ___ карты.', hint: "(o'yinlar — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'listening', audioText: 'Алла играет на пианино каждый день два часа.', question: 'Alla kuniga necha soat pianino chaladi?', options: ['Ikki soat', 'Bir soat', 'Uch soat', "O'n soat"], answer: 'Ikki soat' },
              { type: 'choice', dir: 'uz2ru', prompt: "Biz voleybol o'ynaymiz", options: ['Мы играем в волейбол', 'Мы играем на волейболе', 'Мы играем волейбол', 'Мы играем с волейболом'], answer: 'Мы играем в волейбол' },
              { type: 'order', prompt: 'U skripkada chaladi', tiles: ['Он', 'играет', 'на', 'скрипке'], answer: 'Он играет на скрипке' },
              { type: 'match', pairs: [{ ru: 'Флейта', uz: 'Fleyta' }, { ru: 'Скрипка', uz: 'Skripka' }, { ru: 'Барабан', uz: 'Baraban' }, { ru: 'Гитара', uz: 'Gitara' }] },
              { type: 'fill_blank', sentence: 'Мы часто играем ___ настольные игры.', hint: "(o'yinlar — 'в' predlogi)", options: ['в', 'на', 'о', 'у'], answer: 'в' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети играют в прятки во дворе', options: ["Bolalar hovlida bekinmachoq o'ynashyapti", "Bolalar hovlida futbol o'ynashyapti", 'Bolalar uyda o\u2019tirishibdi', 'Bolalar maktabda'], answer: "Bolalar hovlida bekinmachoq o'ynashyapti" },
              { type: 'order', prompt: 'U gitarada yaxshi chaladi', tiles: ['Он', 'хорошо', 'играет', 'на', 'гитаре'], answer: 'Он хорошо играет на гитаре' },
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
              { type: 'match', pairs: [{ ru: 'Всегда', uz: 'Doim' }, { ru: 'Обычно', uz: 'Odatda' }, { ru: 'Иногда', uz: "Ba'zan" }, { ru: 'Никогда', uz: 'Hech qachon' }] },
              { type: 'fill_blank', sentence: 'Я ___ хожу в спортзал по утрам.', hint: "('odatda' ravishi)", options: ['обычно', 'никогда', 'редко', 'иногда'], answer: 'обычно' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он всегда приходит вовремя', options: ["U doim o'z vaqtida keladi", 'U hech qachon kelmaydi', "U ba'zan kechikadi", 'U doim kechikadi'], answer: "U doim o'z vaqtida keladi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men ba'zan kino ko'raman", options: ['Я иногда смотрю фильмы', 'Я всегда смотрю фильмы', 'Я никогда не смотрю фильмы', 'Я часто смотрю фильмы'], answer: 'Я иногда смотрю фильмы' },
              { type: 'fill_blank', sentence: 'Мы ___ встречаемся по субботам.', hint: "('tez-tez' ravishi)", options: ['часто', 'редко', 'никогда', 'всегда'], answer: 'часто' },
              { type: 'match', pairs: [{ ru: 'Каждый день', uz: 'Har kuni' }, { ru: 'Каждую неделю', uz: 'Har hafta' }, { ru: 'Раз в месяц', uz: "Oyiga bir marta" }, { ru: 'Иногда', uz: "Ba'zan" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы видимся раз в неделю', options: ["Biz haftada bir marta ko'rishamiz", "Biz har kuni ko'rishamiz", "Biz hech qachon ko'rishmaymiz", "Biz oyda bir marta ko'rishamiz"], answer: "Biz haftada bir marta ko'rishamiz" },
              { type: 'fill_blank', sentence: 'Она ___ опаздывает.', hint: "('kamdan-kam' ravishi)", options: ['редко', 'всегда', 'часто', 'иногда'], answer: 'редко' },
              { type: 'listening', audioText: 'Обычно я встаю рано утром, около шести часов.', question: 'Odatda soat nechada turadi?', options: ['Soat oltilarda', "Soat to'qqizda", 'Kunduzi', 'Kech tunda'], answer: 'Soat oltilarda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'U doim yordam beradi', options: ['Он всегда помогает', 'Он никогда не помогает', 'Он иногда помогает', 'Он редко помогает'], answer: 'Он всегда помогает' },
              { type: 'order', prompt: 'Biz har kuni gaplashamiz', tiles: ['Мы', 'разговариваем', 'каждый', 'день'], answer: 'Мы разговариваем каждый день' },
              { type: 'fill_blank', sentence: 'Ты ___ читаешь книги?', hint: "('tez-tez' ravishi, savol)", options: ['часто', 'редко', 'никогда', 'иногда'], answer: 'часто' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я почти никогда не смотрю телевизор', options: ["Men deyarli hech qachon televizor ko'rmayman", 'Men har doim televizor ko\u2019raman', "Men ba'zan televizor ko'raman", 'Men doim televizor ko\u2019raman'], answer: "Men deyarli hech qachon televizor ko'rmayman" },
              { type: 'match', pairs: [{ ru: 'Утром рано', uz: 'Erta ertalab' }, { ru: 'Поздно вечером', uz: 'Kech kechqurun' }, { ru: 'В полдень', uz: 'Peshinda' }, { ru: 'В полночь', uz: 'Yarim tunda' }] },
              { type: 'order', prompt: "Men ertalab yugurishni yaxshi ko'raman", tiles: ['Я', 'люблю', 'бегать', 'по', 'утрам'], answer: 'Я люблю бегать по утрам' },
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
              { type: 'fill_blank', sentence: 'У меня ___ квартира.', hint: "(ayol jinsi: 'yangi')", options: ['новая', 'новый', 'новое', 'новые'], answer: 'новая' },
              { type: 'fill_blank', sentence: 'Это ___ письмо.', hint: "(o'rta jinsi: 'muhim')", options: ['важное', 'важный', 'важная', 'важные'], answer: 'важное' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu qiziqarli hikoya", options: ['Это интересный рассказ', 'Это интересная книга', 'Это интересное письмо', 'Это интересные новости'], answer: 'Это интересный рассказ' },
              { type: 'fill_blank', sentence: 'Это ___ новости.', hint: "(ko'plik: 'yaxshi')", options: ['хорошие', 'хороший', 'хорошая', 'хорошее'], answer: 'хорошие' },
              { type: 'match', pairs: [{ ru: '-ый / -ий (он)', uz: 'Erkak jinsi tugashi' }, { ru: '-ая / -яя (она)', uz: 'Ayol jinsi tugashi' }, { ru: '-ое / -ее (оно)', uz: "O'rta jinsi tugashi" }, { ru: '-ые / -ие (они)', uz: "Ko'plik tugashi" }] },
              { type: 'fill_blank', sentence: 'Это ___ город.', hint: "(erkak jinsi: 'qadimiy')", options: ['древний', 'древняя', 'древнее', 'древние'], answer: 'древний' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это очень удобное кресло', options: ["Bu juda qulay kreslo","Bu juda qattiq kreslo","Bu juda eski kreslo","Bu juda qimmat kreslo"], answer: "Bu juda qulay kreslo" },
              { type: 'fill_blank', sentence: 'У неё ___ характер.', hint: "(erkak jinsi: 'yaxshi')", options: ['хороший', 'хорошая', 'хорошее', 'хорошие'], answer: 'хороший' },
              { type: 'listening', audioText: 'Это удобная и светлая комната.', question: 'Xona qanday?', options: ["Qulay va yorug'", "Kichik va qorong'i", 'Sovuq', 'Eski'], answer: "Qulay va yorug'" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu og'ir sumka", options: ['Это тяжёлая сумка', 'Это лёгкая сумка', 'Это красивая сумка', 'Это новая сумка'], answer: 'Это тяжёлая сумка' },
              { type: 'order', prompt: "Bu qadimiy shahar", tiles: ['Это', 'древний', 'город'], answer: 'Это древний город' },
              { type: 'fill_blank', sentence: 'Это ___ решение.', hint: "(o'rta jinsi: 'to'g'ri')", options: ['правильное', 'правильный', 'правильная', 'правильные'], answer: 'правильное' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это сложная задача', options: ["Bu murakkab masala", "Bu oson masala", "Bu qiziqarli o'yin", "Bu yangi kitob"], answer: "Bu murakkab masala" },
              { type: 'fill_blank', sentence: 'Это ___ учебники.', hint: "(ko'plik: 'og'ir')", options: ['тяжёлые', 'тяжёлый', 'тяжёлая', 'тяжёлое'], answer: 'тяжёлые' },
              { type: 'order', prompt: "Bu foydali maslahat", tiles: ['Это', 'полезный', 'совет'], answer: 'Это полезный совет' },
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
              { type: 'match', pairs: [{ ru: 'Высокий', uz: 'Baland' }, { ru: 'Низкий', uz: 'Past' }, { ru: 'Широкий', uz: 'Keng' }, { ru: 'Узкий', uz: 'Tor' }] },
              { type: 'fill_blank', sentence: 'Эта улица очень ___.', hint: "('tor' sifati, ayol jinsi)", options: ['узкая', 'узкий', 'узкое', 'узкие'], answer: 'узкая' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот дом очень старый, а тот новый', options: ["Bu uy juda eski, u yangi", "Bu uy yangi, u eski", "Ikkalasi ham yangi", "Ikkalasi ham eski"], answer: "Bu uy juda eski, u yangi" },
              { type: 'match', pairs: [{ ru: 'Быстрый', uz: 'Tez' }, { ru: 'Медленный', uz: 'Sekin' }, { ru: 'Сильный', uz: 'Kuchli' }, { ru: 'Слабый', uz: 'Kuchsiz' }] },
              { type: 'fill_blank', sentence: 'Он очень ___ человек.', hint: "('kuchli' sifati, erkak jinsi)", options: ['сильный', 'сильная', 'сильное', 'сильные'], answer: 'сильный' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu qorong'i xona, yorug' xona emas", options: ['Это тёмная комната, а не светлая', 'Это светлая комната', 'Это большая комната', 'Это маленькая комната'], answer: 'Это тёмная комната, а не светлая' },
              { type: 'match', pairs: [{ ru: 'Тёплый', uz: 'Iliq' }, { ru: 'Холодный', uz: 'Sovuq' }, { ru: 'Чистый', uz: 'Toza' }, { ru: 'Грязный', uz: 'Iflos' }] },
              { type: 'fill_blank', sentence: 'Вода в реке очень ___.', hint: "('toza' sifati, ayol jinsi)", options: ['чистая', 'чистый', 'чистое', 'чистые'], answer: 'чистая' },
              { type: 'listening', audioText: 'Эта задача лёгкая, а та трудная.', question: "Ikkinchi masala qanday?", options: ["Qiyin", "Oson", "Qiziqarli", "Zerikarli"], answer: "Qiyin" },
              { type: 'choice', dir: 'ru2uz', prompt: 'Молодой человек и старый человек', options: ["Yosh odam va keksa odam","Yosh odam va bola","Kuchli odam va kuchsiz odam","Boy odam va kambag'al odam"], answer: "Yosh odam va keksa odam" },
              { type: 'match', pairs: [{ ru: 'Лёгкий', uz: 'Oson / Yengil' }, { ru: 'Тяжёлый', uz: "Qiyin / Og'ir" }, { ru: 'Умный', uz: 'Aqlli' }, { ru: 'Глупый', uz: 'Ahmoq' }] },
              { type: 'fill_blank', sentence: 'Эта сумка очень ___.', hint: "('og'ir' sifati, ayol jinsi)", options: ['тяжёлая', 'тяжёлый', 'тяжёлое', 'тяжёлые'], answer: 'тяжёлая' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu daryo chuqur, u ko'l esa sayoz", options: ['Эта река глубокая, а то озеро мелкое', 'Эта река мелкая', 'Это озеро глубокое', 'Оба глубокие'], answer: 'Эта река глубокая, а то озеро мелкое' },
              { type: 'order', prompt: "Bu qiz aqlli va mehribon", tiles: ['Эта', 'девушка', 'умная', 'и', 'добрая'], answer: 'Эта девушка умная и добрая' },
              { type: 'match', pairs: [{ ru: 'Добрый', uz: 'Mehribon' }, { ru: 'Злой', uz: 'Yovuz' }, { ru: 'Весёлый', uz: 'Quvnoq' }, { ru: 'Грустный', uz: "G'amgin" }] },
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
              { type: 'match', pairs: [{ ru: 'Громко', uz: 'Baland ovozda' }, { ru: 'Тихо', uz: 'Past ovozda' }, { ru: 'Ясно', uz: 'Aniq' }, { ru: 'Неясно', uz: "Noaniq" }] },
              { type: 'fill_blank', sentence: 'Он говорит очень ___.', hint: "('aniq' ravishi)", options: ['ясно', 'громко', 'тихо', 'быстро'], answer: 'ясно' },
              { type: 'choice', dir: 'uz2ru', prompt: "U doim to'g'ri javob beradi", options: ['Он всегда отвечает правильно', 'Он никогда не отвечает', 'Он отвечает неправильно', 'Он не понимает вопрос'], answer: 'Он всегда отвечает правильно' },
              { type: 'fill_blank', sentence: 'Дети играют ___ во дворе.', hint: "('quvnoq' ravishi)", options: ['весело', 'грустно', 'скучно', 'тихо'], answer: 'весело' },
              { type: 'match', pairs: [{ ru: 'Легко', uz: 'Oson' }, { ru: 'Трудно', uz: 'Qiyin' }, { ru: 'Приятно', uz: 'Yoqimli' }, { ru: 'Неприятно', uz: 'Yoqimsiz' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне очень приятно с вами познакомиться', options: ["Siz bilan tanishganimdan juda xursandman", "Siz bilan tanishish qiyin", "Men sizni tanimayman", "Menga bu yoqmadi"], answer: "Siz bilan tanishganimdan juda xursandman" },
              { type: 'fill_blank', sentence: 'Изучать новый язык ___.', hint: "('qiyin' ravishi)", options: ['трудно', 'легко', 'весело', 'скучно'], answer: 'трудно' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu masalani yechish oson", options: ['Решить эту задачу легко', 'Решить эту задачу трудно', 'Эта задача интересная', 'Эта задача скучная'], answer: 'Решить эту задачу легко' },
              { type: 'listening', audioText: 'Он всегда говорит тихо и вежливо.', question: "U qanday gapiradi?", options: ["Past ovozda va xushmuomalalik bilan","Baland ovozda","Qo'pol tarzda","Tez va tushunarsiz"], answer: "Past ovozda va xushmuomalalik bilan" },
              { type: 'fill_blank', sentence: 'Она поёт очень ___.', hint: "('go'zal' ravishi)", options: ['красиво', 'плохо', 'громко', 'тихо'], answer: 'красиво' },
              { type: 'match', pairs: [{ ru: 'Внимательно', uz: 'Diqqat bilan' }, { ru: 'Невнимательно', uz: "E'tiborsiz" }, { ru: 'Аккуратно', uz: "Ehtiyotkorlik bilan" }, { ru: 'Небрежно', uz: 'Beparvo' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Слушайте внимательно, пожалуйста', options: ["Iltimos, diqqat bilan tinglang","Iltimos, tez gapiring","Iltimos, jim turing","Iltimos, kuting"], answer: "Iltimos, diqqat bilan tinglang" },
              { type: 'fill_blank', sentence: 'Он пишет очень ___.', hint: "('ehtiyotkorlik bilan' ravishi)", options: ['аккуратно', 'небрежно', 'быстро', 'медленно'], answer: 'аккуратно' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yerda qulay va tinch", options: ['Здесь удобно и спокойно', 'Здесь неудобно и шумно', 'Здесь холодно', 'Здесь скучно'], answer: 'Здесь удобно и спокойно' },
              { type: 'order', prompt: "U diqqat bilan tinglaydi", tiles: ['Он', 'слушает', 'внимательно'], answer: 'Он слушает внимательно' },
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
              { type: 'reading', text: 'Санкт-Петербург основан в 1703 году Петром Первым.', question: 'Peterburg qachon asos solingan?', options: ['1703 yilda', '1800 yilda', '1900 yilda', '1500 yilda'], answer: '1703 yilda' },
              { type: 'reading', text: 'Город стоит на реке Неве. Через реку построено много красивых мостов.', question: "Shahar qaysi daryo bo'yida joylashgan?", options: ['Neva', 'Volga', 'Don', 'Ob'], answer: 'Neva' },
              { type: 'reading', text: 'Летом мосты в Петербурге разводят ночью, чтобы прошли большие корабли.', question: "Ko'priklar nima uchun ochiladi?", options: ["Katta kemalar o'tishi uchun", 'Ta\u2019mirlash uchun', 'Bayram uchun', 'Bekor'], answer: "Katta kemalar o'tishi uchun" },
              { type: 'reading', text: 'В Эрмитаже хранятся картины великих художников со всего мира.', question: 'Ermitajda nima saqlanadi?', options: ['Buyuk rassomlarning suratlari', 'Kitoblar', 'Kiyimlar', 'Mashinalar'], answer: 'Buyuk rassomlarning suratlari' },
              { type: 'reading', text: 'Многие туристы приезжают в Петербург, чтобы увидеть белые ночи.', question: "Turistlar nimani ko'rish uchun kelishadi?", options: ['Oq tunlarni', "Qor bo'ronini", 'Yozgi jazirama issiqni', "Kuzgi yomg'irni"], answer: 'Oq tunlarni' },
              { type: 'reading', text: 'В Петербурге очень много музеев, театров и концертных залов.', question: 'Shaharda nima ko\u2019p?', options: ['Muzey, teatr va konsert zallari', "Faqat do'konlar", 'Faqat maktablar', 'Faqat kasalxonalar'], answer: 'Muzey, teatr va konsert zallari' },
              { type: 'reading', text: 'Зимой в Петербурге рано темнеет, а летом солнце светит почти всю ночь.', question: 'Yozda quyosh qachon botadi?', options: ["Deyarli butun tun yorug'", 'Ertalab', 'Kunduzi', 'Hech qachon botmaydi'], answer: "Deyarli butun tun yorug'" },
              { type: 'reading', text: 'Александр Пушкин учился в Царскосельском лицее недалеко от Петербурга.', question: "Pushkin qayerda o'qigan?", options: ['Tsarskoye Selo litseyida', 'Moskva universitetida', 'Peterburg maktabida', 'Chet elda'], answer: 'Tsarskoye Selo litseyida' },
              { type: 'reading', text: 'Летний сад — один из самых красивых парков города.', question: 'Letniy sad nima?', options: ["Shahardagi eng go'zal bog'lardan biri", 'Muzey', 'Teatr', 'Bozor'], answer: "Shahardagi eng go'zal bog'lardan biri" },
              { type: 'reading', text: 'Каждый год миллионы туристов посещают этот удивительный город.', question: 'Har yili shaharga kim keladi?', options: ['Millionlab turistlar', 'Faqat mahalliy aholi', 'Hech kim', 'Faqat talabalar'], answer: 'Millionlab turistlar' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот город часто называют «культурной столицей России»', options: ["Bu shaharni ko'pincha 'Rossiyaning madaniy poytaxti' deb atashadi", "Bu shahar Rossiyaning rasmiy poytaxti", 'Bu shahar kichik qishloq', 'Bu shahar sanoat markazi'], answer: "Bu shaharni ko'pincha 'Rossiyaning madaniy poytaxti' deb atashadi" },
              { type: 'match', pairs: [{ ru: 'Дворец', uz: 'Saroy' }, { ru: 'Мост', uz: "Ko'prik" }, { ru: 'Река', uz: 'Daryo' }, { ru: 'Канал', uz: 'Kanal' }] },
              { type: 'fill_blank', sentence: 'В городе много красивых ___.', hint: "('saroy' so'zining ko'plik shakli)", options: ['дворцов', 'дворец', 'дворцы', 'дворцами'], answer: 'дворцов' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu shaharda ko'p kanallar bor", options: ['В этом городе много каналов', 'В этом городе мало каналов', 'В этом городе нет каналов', 'В этом городе один канал'], answer: 'В этом городе много каналов' },
              { type: 'order', prompt: 'Peterburg juda go\u2019zal shahar', tiles: ['Петербург', 'очень', 'красивый', 'город'], answer: 'Петербург очень красивый город' },
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
              { type: 'match', pairs: [{ ru: 'Коричневый', uz: 'Jigarrang' }, { ru: 'Серый', uz: 'Kulrang' }, { ru: 'Розовый', uz: 'Pushti' }, { ru: 'Оранжевый', uz: "To'q sariq" }] },
              { type: 'fill_blank', sentence: 'У меня есть ___ шарф.', hint: "('ko'k' rangi, erkak jinsidagi so'z uchun)", options: ['синий', 'синяя', 'синее', 'синие'], answer: 'синий' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это зелёное яблоко.', options: ["Bu yashil olma", "Bu qizil olma", "Bu sariq olma", "Bu jigarrang olma"], answer: "Bu yashil olma" },
              { type: 'fill_blank', sentence: 'Небо ___ .', hint: "('ko'k' rangi, o'rta jinsdagi so'z uchun)", options: ['синее', 'синий', 'синяя', 'синие'], answer: 'синее' },
              { type: 'choice', dir: 'uz2ru', prompt: "Uning ko'zlari yashil", options: ['У неё зелёные глаза', 'У неё синие глаза', 'У неё чёрные глаза', 'У неё карие глаза'], answer: 'У неё зелёные глаза' },
              { type: 'match', pairs: [{ ru: 'Голубой', uz: "Moviy" }, { ru: 'Фиолетовый', uz: 'Binafsha' }, { ru: 'Золотой', uz: 'Oltin rang' }, { ru: 'Серебряный', uz: 'Kumush rang' }] },
              { type: 'listening', audioText: 'У меня жёлтая машина, а у брата чёрная.', question: "Ukasining mashinasi qanday rangda?", options: ['Qora', 'Sariq', "Ko'k", 'Yashil'], answer: 'Qora' },
              { type: 'fill_blank', sentence: 'Это ___ цветы.', hint: "('pushti' rangi, ko'plik shakli)", options: ['розовые', 'розовый', 'розовая', 'розовое'], answer: 'розовые' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне нравится белый цвет.', options: ["Menga oq rang yoqadi", "Menga qora rang yoqadi", "Menga sariq rang yoqadi", "Menga hech qanday rang yoqmaydi"], answer: "Menga oq rang yoqadi" },
              { type: 'order', prompt: "Bu jigarrang sumka", tiles: ['Это', 'коричневая', 'сумка'], answer: 'Это коричневая сумка' },
              { type: 'fill_blank', sentence: 'У неё ___ платье.', hint: "('to'q sariq' rangi, o'rta jinsdagi so'z uchun)", options: ['оранжевое', 'оранжевый', 'оранжевая', 'оранжевые'], answer: 'оранжевое' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu kulrang bulut", options: ['Это серое облако', 'Это белое облако', 'Это синее небо', 'Это чёрная туча'], answer: 'Это серое облако' },
              { type: 'match', pairs: [{ ru: 'Тёмный', uz: "To'q rang" }, { ru: 'Светлый', uz: 'Ochiq rang' }, { ru: 'Яркий', uz: "Yorqin" }, { ru: 'Бледный', uz: "Xira" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какой твой любимый цвет?', options: ["Sevimli ranging qaysi?", "Bu qanday rang?", "Sen qaysi rangni bilmaysan?", "Nima uchun bu rang?"], answer: "Sevimli ranging qaysi?" },
              { type: 'fill_blank', sentence: 'Мой любимый цвет — ___.', hint: "('yashil' rangi)", options: ['зелёный', 'зелёная', 'зелёное', 'зелёные'], answer: 'зелёный' },
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
              { type: 'fill_blank', sentence: '___ ручка новая.', hint: "(ayol jinsidagi so'z uchun 'bu')", options: ['Эта', 'Этот', 'Это', 'Эти'], answer: 'Эта' },
              { type: 'fill_blank', sentence: '___ окно открыто.', hint: "(o'rta jinsidagi so'z uchun 'bu')", options: ['Это', 'Этот', 'Эта', 'Эти'], answer: 'Это' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот студент хорошо учится', options: ["Bu talaba yaxshi o'qiydi", "Bu talaba yomon o'qiydi", 'U talaba emas', "Bu o'qituvchi"], answer: "Bu talaba yaxshi o'qiydi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu maktab yangi', options: ['Эта школа новая', 'Этот школа новая', 'Это школа новая', 'Эти школа новая'], answer: 'Эта школа новая' },
              { type: 'fill_blank', sentence: '___ дети играют вместе.', hint: "(ko'plik uchun 'bu')", options: ['Эти', 'Этот', 'Эта', 'Это'], answer: 'Эти' },
              { type: 'match', pairs: [{ ru: 'Этот дом', uz: 'Bu uy' }, { ru: 'Эта улица', uz: "Bu ko'cha" }, { ru: 'Это здание', uz: 'Bu bino' }, { ru: 'Эти люди', uz: 'Bu odamlar' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эти книги очень интересные', options: ['Bu kitoblar juda qiziqarli', 'Bu kitob juda qiziqarli', 'Bu kitoblar zerikarli', 'Bu daftar qiziqarli'], answer: 'Bu kitoblar juda qiziqarli' },
              { type: 'fill_blank', sentence: '___ работа очень трудная.', hint: "(ayol jinsidagi so'z uchun 'bu')", options: ['Эта', 'Этот', 'Это', 'Эти'], answer: 'Эта' },
              { type: 'listening', audioText: 'Это окно старое, а то окно новое.', question: 'Qaysi deraza yangi?', options: ['Ikkinchisi (u deraza)', 'Birinchisi (bu deraza)', 'Ikkalasi ham eski', 'Ikkalasi ham yangi'], answer: 'Ikkinchisi (u deraza)' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu mashina qimmat', options: ['Эта машина дорогая', 'Этот машина дорогая', 'Это машина дорогая', 'Эти машина дорогая'], answer: 'Эта машина дорогая' },
              { type: 'order', prompt: "Bu odamlar mening do'stlarim", tiles: ['Эти', 'люди', 'мои', 'друзья'], answer: 'Эти люди мои друзья' },
              { type: 'fill_blank', sentence: '___ упражнение лёгкое.', hint: "(o'rta jinsidagi so'z uchun 'bu')", options: ['Это', 'Этот', 'Эта', 'Эти'], answer: 'Это' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В этом городе я родился', options: ["Men shu shaharda tug'ilganman", 'Men shu shaharda ishlayman', 'Men shu shaharni sevmayman', 'Men shu shaharga ketaman'], answer: "Men shu shaharda tug'ilganman" },
              { type: 'match', pairs: [{ ru: 'В этой комнате', uz: 'Shu xonada' }, { ru: 'На этой улице', uz: "Shu ko'chada" }, { ru: 'В этом городе', uz: 'Shu shaharda' }, { ru: 'На этих полках', uz: 'Shu tokchalarda' }] },
              { type: 'order', prompt: 'Bu masala juda oson', tiles: ['Эта', 'задача', 'очень', 'лёгкая'], answer: 'Эта задача очень лёгкая' },
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
              { type: 'fill_blank', sentence: 'Она пишет ___.', hint: "('xat' so'zi — o'rta jinsi, o'zgarmaydi)", options: ['письмо', 'письма', 'письму', 'письмом'], answer: 'письмо' },
              { type: 'fill_blank', sentence: 'Мы смотрим ___.', hint: "('film' so'zi — erkak jinsi, jonsiz, o'zgarmaydi)", options: ['фильм', 'фильма', 'фильму', 'фильмом'], answer: 'фильм' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я читаю интересную статью', options: ["Men qiziqarli maqola o'qiyapman", "Men qiziqarli kitob yozyapman", "Men qiziqarli xat kutyapman", "Men qiziqarli filmni tomosha qilyapman"], answer: "Men qiziqarli maqola o'qiyapman" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men yangi gazeta sotib olaman", options: ['Я куплю новую газету', 'Я читаю новую газету', 'Я пишу новую газету', 'Я ищу новую газету'], answer: 'Я куплю новую газету' },
              { type: 'fill_blank', sentence: 'Ты слушаешь ___?', hint: "('musiqa' so'zi — ayol jinsi, -а → -у)", options: ['музыку', 'музыка', 'музыке', 'музыкой'], answer: 'музыку' },
              { type: 'match', pairs: [{ ru: 'Смотреть телевизор', uz: "Televizor ko'rmoq" }, { ru: 'Слушать радио', uz: 'Radio tinglamoq' }, { ru: 'Читать журнал', uz: "Jurnal o'qimoq" }, { ru: 'Писать письмо', uz: 'Xat yozmoq' }] },
              { type: 'fill_blank', sentence: 'Дети смотрят ___.', hint: "('multfilm' so'zi — erkak jinsi, jonsiz)", options: ['мультфильм', 'мультфильма', 'мультфильму', 'мультфильмом'], answer: 'мультфильм' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он пишет диссертацию', options: ["U dissertatsiya yozyapti", "U dissertatsiya o'qiyapti", 'U dissertatsiya sotib oldi', "U dissertatsiyani yo'qotdi"], answer: "U dissertatsiya yozyapti" },
              { type: 'listening', audioText: 'Я слушаю новую песню каждый день.', question: 'Nimani tinglaydi?', options: ["Yangi qo'shiqni", 'Yangi filmni', 'Yangi kitobni', 'Yangi yangilikni'], answer: "Yangi qo'shiqni" },
              { type: 'fill_blank', sentence: 'Мы изучаем ___.', hint: "('rus tili' so'zi — erkak jinsi)", options: ['русский язык', 'русского языка', 'русскому языку', 'русским языком'], answer: 'русский язык' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men har kuni yangiliklarni o'qiyman", options: ['Я читаю новости каждый день', 'Я смотрю новости каждый день', 'Я слушаю новости каждый день', 'Я пишу новости каждый день'], answer: 'Я читаю новости каждый день' },
              { type: 'order', prompt: "Men jurnalni o'qiyapman", tiles: ['Я', 'читаю', 'журнал'], answer: 'Я читаю журнал' },
              { type: 'fill_blank', sentence: 'Она купила ___.', hint: "('yangi mashina' so'zi — ayol jinsi)", options: ['новую машину', 'новая машина', 'новой машины', 'новой машине'], answer: 'новую машину' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы посмотрим этот сериал вечером', options: ["Biz bu serialni kechqurun tomosha qilamiz", 'Biz bu serialni yozamiz', 'Biz bu serialni sotib olamiz', 'Biz bu serialni unutdik'], answer: "Biz bu serialni kechqurun tomosha qilamiz" },
              { type: 'order', prompt: "U gazeta o'qiyapti", tiles: ['Он', 'читает', 'газету'], answer: 'Он читает газету' },
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
              { type: 'fill_blank', sentence: 'Мы ___ путешествовать.', hint: "('xohlamoq' fe'lining 'biz' shakli)", options: ['хотим', 'хочу', 'хочет', 'хотят'], answer: 'хотим' },
              { type: 'fill_blank', sentence: 'Вы ___ классическую музыку?', hint: "('sevmoq' fe'lining 'siz' shakli)", options: ['любите', 'люблю', 'любит', 'любим'], answer: 'любите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она ищет работу', options: ["U ish qidiryapti", 'U ishlayapti', "U ishni yaxshi ko'radi", 'U ishni xohlamaydi'], answer: "U ish qidiryapti" },
              { type: 'choice', dir: 'uz2ru', prompt: "Ular yangi uy izlashyapti", options: ['Они ищут новый дом', 'Они любят новый дом', 'Они хотят новый дом', 'Они видят новый дом'], answer: 'Они ищут новый дом' },
              { type: 'fill_blank', sentence: 'Я ___ моих родителей.', hint: "('sevmoq' fe'lining 'men' shakli)", options: ['люблю', 'любишь', 'любит', 'любим'], answer: 'люблю' },
              { type: 'match', pairs: [{ ru: 'Хотеть', uz: 'Xohlamoq' }, { ru: 'Любить', uz: 'Sevmoq' }, { ru: 'Искать', uz: 'Izlamoq' }, { ru: 'Найти', uz: 'Topmoq' }] },
              { type: 'fill_blank', sentence: 'Он ___ ключи уже час.', hint: "('izlamoq' fe'lining 'u' shakli)", options: ['ищет', 'ищу', 'ищешь', 'ищем'], answer: 'ищет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети любят мороженое', options: ["Bolalar muzqaymoqni yaxshi ko'radi", "Bolalar muzqaymoqni yomon ko'radi", 'Bolalar muzqaymoq izlamoqda', 'Bolalar muzqaymoq xohlamaydi'], answer: "Bolalar muzqaymoqni yaxshi ko'radi" },
              { type: 'listening', audioText: 'Я хочу найти хорошую работу.', question: 'Nimani xohlaydi?', options: ["Yaxshi ish topishni", 'Uy sotib olishni', 'Sayohat qilishni', 'Dam olishni'], answer: 'Yaxshi ish topishni' },
              { type: 'choice', dir: 'uz2ru', prompt: "Biz yangi do'stlar orttirishni xohlaymiz", options: ['Мы хотим найти новых друзей', 'Мы любим новых друзей', 'Мы ищем новых друзей', 'Мы видим новых друзей'], answer: 'Мы хотим найти новых друзей' },
              { type: 'order', prompt: 'U meni sevadi', tiles: ['Она', 'меня', 'любит'], answer: 'Она меня любит' },
              { type: 'fill_blank', sentence: 'Ты ___ переводчиком?', hint: "('xohlamoq' fe'lining 'sen' shakli, kelasi kasb haqida)", options: ['хочешь стать', 'любишь стать', 'ищешь стать', 'хочет стать'], answer: 'хочешь стать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы наконец нашли то, что искали', options: ["Nihoyat izlagan narsamizni topdik", 'Hali hech narsa topmadik', "Biz izlashni to'xtatdik", 'Biz yangi narsa izlayapmiz'], answer: "Nihoyat izlagan narsamizni topdik" },
              { type: 'match', pairs: [{ ru: 'Хочу купить', uz: 'Sotib olishni xohlayman' }, { ru: 'Люблю читать', uz: "O'qishni yaxshi ko'raman" }, { ru: 'Ищу дом', uz: 'Uy izlayapman' }, { ru: 'Хочу знать', uz: 'Bilishni xohlayman' }] },
              { type: 'order', prompt: "Men chet tillarini o'rganishni yaxshi ko'raman", tiles: ['Я', 'люблю', 'изучать', 'иностранные', 'языки'], answer: 'Я люблю изучать иностранные языки' },
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
              { type: 'match', pairs: [{ ru: 'Юбка', uz: 'Yubka' }, { ru: 'Шапка', uz: 'Shapka' }, { ru: 'Перчатки', uz: "Qo'lqop" }, { ru: 'Носки', uz: 'Paypoq' }] },
              { type: 'fill_blank', sentence: 'Я надену ___ куртку.', hint: "('yangi' sifati, ayol jinsi, tushum kelishigi)", options: ['новую', 'новый', 'новое', 'новые'], answer: 'новую' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эти джинсы мне велики', options: ['Bu jins shim menga katta', 'Bu jins shim menga kichik', 'Bu jins shim menga yoqmaydi', 'Bu jins shim yangi'], answer: 'Bu jins shim menga katta' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu ko'ylak menga juda mos", options: ['Это платье мне очень идёт', 'Это платье мне велико', 'Это платье мне мало', 'Это платье дорогое'], answer: 'Это платье мне очень идёт' },
              { type: 'fill_blank', sentence: 'Зимой нужно носить тёплые ___.', hint: "('qo'lqop' so'zining ko'plik shakli)", options: ['перчатки', 'перчатка', 'перчаток', 'перчатками'], answer: 'перчатки' },
              { type: 'match', pairs: [{ ru: 'Галстук', uz: 'Galstuk' }, { ru: 'Костюм', uz: 'Kostyum' }, { ru: 'Свитер', uz: 'Sviter' }, { ru: 'Пояс', uz: 'Kamar' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он всегда носит галстук на работу', options: ['U ishga doim galstuk taqib boradi', 'U hech qachon galstuk taqmaydi', 'U ishga sviter kiyadi', 'U galstuksiz yuradi'], answer: 'U ishga doim galstuk taqib boradi' },
              { type: 'fill_blank', sentence: 'Мне нужны новые ___.', hint: "('poyabzal' so'zining ko'plik shakli)", options: ['туфли', 'туфля', 'туфель', 'туфлями'], answer: 'туфли' },
              { type: 'listening', audioText: 'Я купила красное платье и чёрные туфли.', question: 'Nima sotib oldi?', options: ["Qizil ko'ylak va qora poyabzal", "Ko'k shim va oq ko'ylak", 'Sariq shapka', 'Yashil sviter'], answer: "Qizil ko'ylak va qora poyabzal" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu kostyum menga yarashadi", options: ['Этот костюм мне идёт', 'Этот костюм мне велик', 'Этот костюм дорогой', 'Этот костюм новый'], answer: 'Этот костюм мне идёт' },
              { type: 'order', prompt: "Men yangi ko'ylak sotib oldim", tiles: ['Я', 'купила', 'новое', 'платье'], answer: 'Я купила новое платье' },
              { type: 'fill_blank', sentence: 'Он снял ___ и сел.', hint: "('kurtka' so'zi, tushum kelishigi)", options: ['куртку', 'куртка', 'куртке', 'курткой'], answer: 'куртку' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Примерочная находится там', options: ['Kiyim kiyish xonasi u yerda', 'Kassa u yerda', 'Chiqish joyi u yerda', 'Kirish joyi u yerda'], answer: 'Kiyim kiyish xonasi u yerda' },
              { type: 'match', pairs: [{ ru: 'Примерять', uz: "Kiyib ko'rmoq" }, { ru: 'Носить', uz: 'Kiymoq' }, { ru: 'Снимать', uz: 'Yechmoq' }, { ru: 'Покупать', uz: 'Sotib olmoq' }] },
              { type: 'order', prompt: "Men bu ko'ylakni kiyib ko'rmoqchiman", tiles: ['Я', 'хочу', 'примерить', 'это', 'платье'], answer: 'Я хочу примерить это платье' },
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
              { type: 'match', pairs: [{ ru: 'Рот', uz: "Og'iz" }, { ru: 'Уши', uz: 'Quloq' }, { ru: 'Руки', uz: "Qo'l" }, { ru: 'Ноги', uz: 'Oyoq' }] },
              { type: 'fill_blank', sentence: 'У него длинные ___.', hint: "('qo'l' so'zining ko'plik shakli)", options: ['руки', 'рука', 'руку', 'руками'], answer: 'руки' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она высокая и стройная', options: ["U baland bo'yli va nozik", "U past bo'yli va to'la", "U o'rta bo'yli", 'U kichkina'], answer: "U baland bo'yli va nozik" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Uning burni kichkina', options: ['У неё маленький нос', 'У неё большой нос', 'У неё длинные волосы', 'У неё голубые глаза'], answer: 'У неё маленький нос' },
              { type: 'fill_blank', sentence: 'У него ___ борода.', hint: "('qora' rangi, ayol jinsi)", options: ['чёрная', 'чёрный', 'чёрное', 'чёрные'], answer: 'чёрная' },
              { type: 'match', pairs: [{ ru: 'Высокий', uz: "Baland bo'yli" }, { ru: 'Низкий', uz: "Past bo'yli" }, { ru: 'Худой', uz: "Ozg'in" }, { ru: 'Полный', uz: "To'la" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У неё курчавые волосы', options: ['Uning jingalak sochi bor', "Uning to'g'ri sochi bor", 'Uning qisqa sochi bor', 'Uning oq sochi bor'], answer: 'Uning jingalak sochi bor' },
              { type: 'fill_blank', sentence: 'У девушки красивая ___.', hint: "('tabassum' so'zi)", options: ['улыбка', 'улыбку', 'улыбке', 'улыбкой'], answer: 'улыбка' },
              { type: 'listening', audioText: 'У моего брата короткие тёмные волосы и карие глаза.', question: 'Ukasining sochi qanday?', options: ["Qisqa va to'q rangli", 'Uzun va och rangli', 'Jingalak', 'Oq'], answer: "Qisqa va to'q rangli" },
              { type: 'choice', dir: 'uz2ru', prompt: "U yosh ko'rinadi", options: ['Он выглядит молодо', 'Он выглядит старо', 'Он выглядит уставшим', 'Он выглядит грустным'], answer: 'Он выглядит молодо' },
              { type: 'order', prompt: "Onasi juda go'zal", tiles: ['Его', 'мама', 'очень', 'красивая'], answer: 'Его мама очень красивая' },
              { type: 'match', pairs: [{ ru: 'Плечи', uz: 'Yelka' }, { ru: 'Спина', uz: 'Orqa' }, { ru: 'Живот', uz: 'Qorin' }, { ru: 'Колено', uz: 'Tizza' }] },
              { type: 'fill_blank', sentence: 'У спортсмена сильные ___.', hint: "('yelka' so'zining ko'plik shakli)", options: ['плечи', 'плечо', 'плеч', 'плечами'], answer: 'плечи' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он похож на своего отца', options: ["U otasiga o'xshaydi", 'U onasiga o\u2019xshaydi', "U hech kimga o'xshamaydi", 'U akasiga o\u2019xshaydi'], answer: "U otasiga o'xshaydi" },
              { type: 'fill_blank', sentence: 'Моя бабушка носит ___.', hint: "('ko'zoynak' so'zining ko'plik shakli)", options: ['очки', 'очко', 'очков', 'очками'], answer: 'очки' },
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
              { type: 'fill_blank', sentence: 'Я вижу ___ сумку.', hint: "('uning' ayol — o'zgarmas shakl)", options: ['её', 'его', 'их', 'наш'], answer: 'её' },
              { type: 'fill_blank', sentence: 'Он видит ___ друзей.', hint: "('ularning' — o'zgarmas shakl)", options: ['их', 'его', 'её', 'наших'], answer: 'их' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы знаем его брата', options: ["Biz uning akasini bilamiz", 'Biz uning singlisini bilamiz', 'Biz bizning akamizni bilamiz', 'Biz sizning akangizni bilamiz'], answer: "Biz uning akasini bilamiz" },
              { type: 'match', pairs: [{ ru: 'Мою (ж.р.)', uz: "Meningni (ayol so'z)" }, { ru: 'Твоего (jonli)', uz: 'Seningni (jonli, erkak)' }, { ru: 'Нашу (ж.р.)', uz: "Bizningni (ayol so'z)" }, { ru: 'Вашу (ж.р.)', uz: "Sizningni (ayol so'z)" }] },
              { type: 'fill_blank', sentence: 'Вы видите ___ учителя?', hint: "('bizning' — jonli, erkak jinsi)", options: ['нашего', 'наш', 'нашу', 'наше'], answer: 'нашего' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men uning kitobini o\u2019qiyapman', options: ['Я читаю его книгу', 'Я читаю её книгу', 'Я читаю их книгу', 'Я читаю нашу книгу'], answer: 'Я читаю его книгу' },
              { type: 'fill_blank', sentence: 'Ты видишь ___ сестру?', hint: "('mening', ayol jinsi -я → -ю)", options: ['мою', 'мой', 'моё', 'мои'], answer: 'мою' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она любит своего кота', options: ["U o'z mushugini yaxshi ko'radi", "U o'z itini yaxshi ko'radi", "U bizning mushugimizni yaxshi ko'radi", 'U mushukni yomon ko\u2019radi'], answer: "U o'z mushugini yaxshi ko'radi" },
              { type: 'fill_blank', sentence: 'Мы уважаем ___ учителей.', hint: "('bizning' — ko'plik, jonli)", options: ['наших', 'наши', 'нашего', 'нашу'], answer: 'наших' },
              { type: 'listening', audioText: 'Я вижу вашу машину около дома.', question: 'Nima ko\u2019rinyapti?', options: ['Sizning mashinangiz', 'Bizning mashinamiz', 'Uning mashinasi', 'Ularning mashinasi'], answer: 'Sizning mashinangiz' },
              { type: 'choice', dir: 'uz2ru', prompt: "Biz sizning bolalaringizni bilamiz", options: ['Мы знаем ваших детей', 'Мы знаем наших детей', 'Мы знаем их детей', 'Мы знаем моих детей'], answer: 'Мы знаем ваших детей' },
              { type: 'fill_blank', sentence: 'Я встретил ___ подругу вчера.', hint: "('sening', ayol jinsi)", options: ['твою', 'твой', 'твоё', 'твои'], answer: 'твою' },
              { type: 'match', pairs: [{ ru: 'Его (jonli)', uz: 'Uningni (erkak)' }, { ru: 'Её (jonli)', uz: 'Uningni (ayol)' }, { ru: 'Их (jonli)', uz: 'Ularningni' }, { ru: 'Ваших (ko\'plik)', uz: "Sizningni (ko'plik)" }] },
              { type: 'order', prompt: 'Men sizning oilangizni yaxshi bilaman', tiles: ['Я', 'хорошо', 'знаю', 'вашу', 'семью'], answer: 'Я хорошо знаю вашу семью' },
              { type: 'fill_blank', sentence: 'Он благодарит ___ родителей.', hint: "('o'z' — refleksiv egalik, ko'plik jonli)", options: ['своих', 'свой', 'свою', 'своё'], answer: 'своих' },
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
              { type: 'match', pairs: [{ ru: 'Испанский', uz: 'Ispan tili' }, { ru: 'Итальянский', uz: 'Italyan tili' }, { ru: 'Китайский', uz: 'Xitoy tili' }, { ru: 'Японский', uz: 'Yapon tili' }] },
              { type: 'fill_blank', sentence: 'Она говорит ___.', hint: "('ispancha' — по- + til nomi)", options: ['по-испански', 'испанский', 'испанского', 'по-испанский'], answer: 'по-испански' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он свободно говорит на трёх языках', options: ["U uch tilda erkin gaplashadi", 'U faqat bir tilda gaplashadi', "U hech qanday tilni bilmaydi", "U ikkita tilni o'rganmoqda"], answer: "U uch tilda erkin gaplashadi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men xitoy tilini o'rganmoqchiman", options: ['Я хочу изучать китайский язык', 'Я хочу изучать японский язык', 'Я уже знаю китайский язык', 'Я не хочу учить языки'], answer: 'Я хочу изучать китайский язык' },
              { type: 'fill_blank', sentence: 'Родной ___ этого студента — арабский.', hint: "('til' so'zi)", options: ['язык', 'языка', 'языку', 'языком'], answer: 'язык' },
              { type: 'match', pairs: [{ ru: 'Родной язык', uz: 'Ona tili' }, { ru: 'Иностранный язык', uz: 'Chet tili' }, { ru: 'Переводчик', uz: 'Tarjimon' }, { ru: 'Словарь', uz: "Lug'at" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне нужен словарь, чтобы перевести этот текст', options: ["Bu matnni tarjima qilish uchun menga lug'at kerak", 'Menga qalam kerak', 'Menga kompyuter kerak', "Menga o'qituvchi kerak"], answer: "Bu matnni tarjima qilish uchun menga lug'at kerak" },
              { type: 'fill_blank', sentence: 'Я плохо понимаю ___.', hint: "('nemischa' — по- + til nomi)", options: ['по-немецки', 'немецкий', 'немецкого', 'по-немецкий'], answer: 'по-немецки' },
              { type: 'listening', audioText: 'Мой друг знает пять языков: русский, английский, французский, немецкий и испанский.', question: 'Do\u2019sti nechta til biladi?', options: ['Beshta', 'Uchta', 'Ikkita', 'Oltita'], answer: 'Beshta' },
              { type: 'choice', dir: 'uz2ru', prompt: "Til o'rganish qiziqarli", options: ['Изучать языки интересно', 'Изучать языки скучно', 'Изучать языки трудно', 'Изучать языки бесполезно'], answer: 'Изучать языки интересно' },
              { type: 'order', prompt: "U tarjimon bo'lib ishlashni xohlaydi", tiles: ['Она', 'хочет', 'работать', 'переводчиком'], answer: 'Она хочет работать переводчиком' },
              { type: 'fill_blank', sentence: 'Переводчик знает несколько ___.', hint: "('til' so'zining ko'plik shakli)", options: ['языков', 'языки', 'языкам', 'языками'], answer: 'языков' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Английский — международный язык бизнеса', options: ["Ingliz tili — xalqaro biznes tili", "Fransuz tili — san'at tili", 'Nemis tili — fan tili', 'Xitoy tili — savdo tili'], answer: "Ingliz tili — xalqaro biznes tili" },
              { type: 'match', pairs: [{ ru: 'Понимать', uz: 'Tushunmoq' }, { ru: 'Переводить', uz: 'Tarjima qilmoq' }, { ru: 'Произносить', uz: 'Talaffuz qilmoq' }, { ru: 'Запоминать', uz: "Yodda saqlamoq" }] },
              { type: 'fill_blank', sentence: 'Трудно ___ новые слова.', hint: "('yodda saqlamoq' fe'lining infinitivi)", options: ['запоминать', 'запоминаю', 'запоминаешь', 'запоминает'], answer: 'запоминать' },
            ],
          },
        ],
      },
      {
        title: "6-bo'lim: Lug'at boyligi",
        lessons: [
          {
            id: 1006, title: '1-qism', icon: CircleUserRound,
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
            id: 1007, title: '2-qism', icon: Fingerprint,
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
            id: 1008, title: '3-qism', icon: UserCheck,
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
            id: 1009, title: '4-qism', icon: Users,
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
            id: 1010, title: '5-qism', icon: UserCircle,
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
            id: 1011, title: '6-qism', icon: Contact,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'til', options: ['обычай', 'старуха', 'язык', 'женщина'], answer: 'язык' },
              { type: 'choice', dir: 'ru2uz', prompt: 'обычай', options: ['xotin', 'urf-odat', 'qo’shni', 'yoshlik'], answer: 'urf-odat' },
              { type: 'listening', audioText: 'традиция', question: "Bu so'z qanday tarjima qilinadi?", options: ['janob, xonim', 'o’g’il jiyan', 'qassob', 'an’ana'], answer: 'an’ana' },
              { type: 'choice', dir: 'ru2uz', prompt: 'работа, дело', options: ['o’qish (tahsil)', 'ish', 'amma, xola', 'janob, xonim'], answer: 'ish' },
              { type: 'choice', dir: 'uz2ru', prompt: 'o’qish (tahsil)', options: ['дедушка', 'сотрудник(ница)', 'учеба', 'старый человек'], answer: 'учеба' },
              { type: 'match', pairs: [{ ru: 'язык', uz: 'til' }, { ru: 'обычай', uz: 'urf-odat' }, { ru: 'традиция', uz: 'an’ana' }, { ru: 'работа, дело', uz: 'ish' }, { ru: 'учеба', uz: 'o’qish (tahsil)' }, { ru: 'рабочий', uz: 'ishchi' }] },
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
              { type: 'match', pairs: [{ ru: 'Скидка', uz: 'Chegirma' }, { ru: 'Размер', uz: "O'lcham" }, { ru: 'Примерочная', uz: 'Kiyinish xonasi' }, { ru: 'Наличные', uz: 'Naqd pul' }] },
              { type: 'fill_blank', sentence: 'Вы принимаете ___ карты?', hint: "('kredit' sifati, ko'plik)", options: ['кредитные', 'кредитный', 'кредитная', 'кредитное'], answer: 'кредитные' },
              { type: 'choice', dir: 'ru2uz', prompt: 'На это есть скидка?', options: ['Bunga chegirma bormi?', 'Bu qancha turadi?', 'Bu yangi modelmi?', "Buni almashtirish mumkinmi?"], answer: 'Bunga chegirma bormi?' },
              { type: 'choice', dir: 'uz2ru', prompt: "Menga kattaroq o'lcham kerak", options: ['Мне нужен размер побольше', 'Мне нужен размер поменьше', 'Мне нужен этот размер', 'Мне не нужен размер'], answer: 'Мне нужен размер побольше' },
              { type: 'fill_blank', sentence: 'Можно ___ эту рубашку?', hint: "('kiyib ko'rmoq' fe'lining infinitivi)", options: ['примерить', 'примерил', 'примеряю', 'примерит'], answer: 'примерить' },
              { type: 'match', pairs: [{ ru: 'Дорого', uz: 'Qimmat' }, { ru: 'Дёшево', uz: 'Arzon' }, { ru: 'Качество', uz: 'Sifat' }, { ru: 'Обмен', uz: 'Almashtirish' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно вернуть этот товар?', options: ["Bu tovarni qaytarish mumkinmi?", "Bu tovarni sotib olsam bo'ladimi?", 'Bu tovar yangi', 'Bu tovar arzon'], answer: "Bu tovarni qaytarish mumkinmi?" },
              { type: 'fill_blank', sentence: 'Я хочу ___ деньги обратно.', hint: "('qaytarib olmoq' fe'lining infinitivi)", options: ['получить', 'получил', 'получаю', 'получит'], answer: 'получить' },
              { type: 'listening', audioText: 'Этот товар стоит две тысячи рублей, но сегодня скидка тридцать процентов.', question: 'Bugun necha foiz chegirma bor?', options: ['30%', '20%', '50%', '10%'], answer: '30%' },
              { type: 'choice', dir: 'uz2ru', prompt: "Chekni saqlab qo'ying", options: ['Сохраните чек', 'Выбросьте чек', 'Дайте мне чек', 'Покажите чек'], answer: 'Сохраните чек' },
              { type: 'order', prompt: 'Bu naqd pulda qancha turadi?', tiles: ['Сколько', 'это', 'стоит', 'наличными?'], answer: 'Сколько это стоит наличными?' },
              { type: 'match', pairs: [{ ru: 'Оплатить картой', uz: "Karta bilan to'lamoq" }, { ru: 'Оплатить наличными', uz: "Naqd to'lamoq" }, { ru: 'Вернуть товар', uz: 'Tovarni qaytarmoq' }, { ru: 'Обменять товар', uz: 'Tovarni almashtirmoq' }] },
              { type: 'fill_blank', sentence: 'Этот магазин работает ___ восьми вечера.', hint: "('gacha' predlogi)", options: ['до', 'с', 'от', 'к'], answer: 'до' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот товар был на распродаже', options: ["Bu tovar chegirmada edi", 'Bu tovar yangi keldi', 'Bu tovar qimmat', 'Bu tovar sifatsiz'], answer: "Bu tovar chegirmada edi" },
              { type: 'order', prompt: 'Menga chek bering, iltimos', tiles: ['Дайте', 'мне', 'чек,', 'пожалуйста'], answer: 'Дайте мне чек, пожалуйста' },
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
              { type: 'match', pairs: [{ ru: 'Инженер', uz: 'Muhandis' }, { ru: 'Юрист', uz: 'Yurist' }, { ru: 'Бухгалтер', uz: 'Buxgalter' }, { ru: 'Менеджер', uz: 'Menejer' }] },
              { type: 'fill_blank', sentence: 'Он работает ___.', hint: "('arxitektor' kasbi, vositalik kelishigi)", options: ['архитектором', 'архитектор', 'архитектора', 'архитектору'], answer: 'архитектором' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она мечтает стать судьёй', options: ["U sudya bo'lishni orzu qiladi", "U advokat bo'lishni orzu qiladi", 'U hozir sudya', 'U sudyani yaxshi ko\u2019radi'], answer: "U sudya bo'lishni orzu qiladi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu ish juda mas'uliyatli", options: ['Эта работа очень ответственная', 'Эта работа очень лёгкая', 'Эта работа очень скучная', 'Эта работа не важная'], answer: 'Эта работа очень ответственная' },
              { type: 'fill_blank', sentence: 'Мой отец работает ___.', hint: "('direktor' kasbi, vositalik kelishigi)", options: ['директором', 'директор', 'директора', 'директору'], answer: 'директором' },
              { type: 'match', pairs: [{ ru: 'Пожарный', uz: "O't o'chiruvchi" }, { ru: 'Полицейский', uz: 'Politsiyachi' }, { ru: 'Военный', uz: 'Harbiy' }, { ru: 'Фермер', uz: 'Fermer' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Пожарные спасают людей от огня', options: ["O't o'chiruvchilar odamlarni olovdan qutqarishadi", 'Politsiyachilar odamlarni himoya qilishadi', "Fermerlar don yetishtirishadi", 'Harbiylar mamlakatni himoya qilishadi'], answer: "O't o'chiruvchilar odamlarni olovdan qutqarishadi" },
              { type: 'fill_blank', sentence: 'Она хочет работать ___.', hint: "('menejer' kasbi, vositalik kelishigi)", options: ['менеджером', 'менеджер', 'менеджера', 'менеджеру'], answer: 'менеджером' },
              { type: 'listening', audioText: 'Мой дядя фермер. Он выращивает пшеницу и овощи.', question: 'Amakisi nima yetishtiradi?', options: ["Bug'doy va sabzavot", 'Meva', 'Chorva', 'Paxta'], answer: "Bug'doy va sabzavot" },
              { type: 'choice', dir: 'uz2ru', prompt: "Yurist qonunlarni yaxshi biladi", options: ['Юрист хорошо знает законы', 'Юрист хорошо готовит', 'Юрист хорошо рисует', 'Юрист хорошо поёт'], answer: 'Юрист хорошо знает законы' },
              { type: 'order', prompt: 'Buxgalter pullarni hisoblaydi', tiles: ['Бухгалтер', 'считает', 'деньги'], answer: 'Бухгалтер считает деньги' },
              { type: 'match', pairs: [{ ru: 'Ответственный', uz: "Mas'uliyatli" }, { ru: 'Опытный', uz: 'Tajribali' }, { ru: 'Квалифицированный', uz: 'Malakali' }, { ru: 'Трудолюбивый', uz: 'Mehnatsevar' }] },
              { type: 'fill_blank', sentence: 'Нам нужен ___ специалист.', hint: "('tajribali' sifati, erkak jinsi)", options: ['опытный', 'опытная', 'опытное', 'опытные'], answer: 'опытный' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Каждая профессия важна и нужна', options: ["Har bir kasb muhim va kerakli", "Faqat ba'zi kasblar muhim", 'Kasb tanlash oson', 'Kasb muhim emas'], answer: "Har bir kasb muhim va kerakli" },
              { type: 'order', prompt: "U yaxshi menejer bo'lishni xohlaydi", tiles: ['Она', 'хочет', 'стать', 'хорошим', 'менеджером'], answer: 'Она хочет стать хорошим менеджером' },
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
              { type: 'fill_blank', sentence: 'Он ___ письмо.', hint: "('yozmoq' fe'lining 'u' shakli)", options: ['пишет', 'пишу', 'пишешь', 'пишем'], answer: 'пишет' },
              { type: 'fill_blank', sentence: 'Мы ___ упражнения.', hint: "('yozmoq' fe'lining 'biz' shakli)", options: ['пишем', 'пишете', 'пишут', 'пишу'], answer: 'пишем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы пишете статью?', options: ["Siz maqola yozyapsizmi?", "Siz maqola o'qiyapsizmi?", 'Siz maqola qidiryapsizmi?', "Siz maqolani tarjima qilyapsizmi?"], answer: "Siz maqola yozyapsizmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ular xat yozishmoqda', options: ['Они пишут письмо', 'Они читают письмо', 'Они ищут письмо', 'Они получают письмо'], answer: 'Они пишут письмо' },
              { type: 'fill_blank', sentence: 'Я ___ письмо вчера.', hint: "('yozmoq' fe'lining o'tgan zamon, erkak jinsi)", options: ['написал', 'пишу', 'написала', 'напишу'], answer: 'написал' },
              { type: 'match', pairs: [{ ru: 'Писать письмо', uz: 'Xat yozmoq' }, { ru: 'Писать статью', uz: 'Maqola yozmoq' }, { ru: 'Писать книгу', uz: 'Kitob yozmoq' }, { ru: 'Писать диктант', uz: 'Diktant yozmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он написал интересную книгу', options: ["U qiziqarli kitob yozdi", "U qiziqarli kitob o'qidi", "U qiziqarli kitob sotib oldi", "U qiziqarli kitob topdi"], answer: "U qiziqarli kitob yozdi" },
              { type: 'fill_blank', sentence: 'Завтра я ___ ответ.', hint: "('yozaman' — mukammal fe'l, kelasi zamon)", options: ['напишу', 'пишу', 'написал', 'писал'], answer: 'напишу' },
              { type: 'listening', audioText: 'Учительница пишет на доске новые слова.', question: "O'qituvchi qayerga yozyapti?", options: ['Doskaga', 'Daftarga', 'Kitobga', 'Telefonga'], answer: 'Doskaga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men elektron pochta yozyapman', options: ['Я пишу электронное письмо', 'Я читаю электронное письмо', 'Я отправляю электронное письмо', 'Я удаляю электронное письмо'], answer: 'Я пишу электронное письмо' },
              { type: 'order', prompt: 'U menga xat yozdi', tiles: ['Он', 'написал', 'мне', 'письмо'], answer: 'Он написал мне письмо' },
              { type: 'fill_blank', sentence: 'Дети учатся ___ буквы.', hint: "('yozmoq' fe'lining infinitivi)", options: ['писать', 'пишут', 'писал', 'напишут'], answer: 'писать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я пишу дневник каждый вечер', options: ["Men har kuni kechqurun kundalik yozaman", "Men har kuni kitob o'qiyman", 'Men har kuni maktub kutaman', "Men har kuni xat jo'natyapman"], answer: "Men har kuni kechqurun kundalik yozaman" },
              { type: 'match', pairs: [{ ru: 'Ручка', uz: 'Ruchka' }, { ru: 'Карандаш', uz: 'Qalam' }, { ru: 'Бумага', uz: "Qog'oz" }, { ru: 'Тетрадь', uz: 'Daftar' }] },
              { type: 'order', prompt: "Men bu so'zlarni yozib olishim kerak", tiles: ['Мне', 'нужно', 'записать', 'эти', 'слова'], answer: 'Мне нужно записать эти слова' },
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
              { type: 'fill_blank', sentence: 'У меня ___ пальто.', hint: "(neytral so'z: 'yangi')", options: ['новое', 'новый', 'новая', 'новые'], answer: 'новое' },
              { type: 'fill_blank', sentence: 'Это ___ здание в городе.', hint: "(neytral so'z: 'eng baland')", options: ['самое высокое', 'самый высокий', 'самая высокая', 'самые высокие'], answer: 'самое высокое' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какое сегодня интересное занятие!', options: ["Bugun qanday qiziqarli mashg'ulot!", 'Bugun qanday zerikarli kun!', 'Bugun qanday sovuq havo!', "Bugun qanday uzun yo'l!"], answer: "Bugun qanday qiziqarli mashg'ulot!" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu og'ir savol", options: ['Это трудное задание', 'Это лёгкое задание', 'Это интересное задание', 'Это старое задание'], answer: 'Это трудное задание' },
              { type: 'fill_blank', sentence: 'В нашем доме есть ___ окно.', hint: "(neytral so'z: 'katta')", options: ['большое', 'большой', 'большая', 'большие'], answer: 'большое' },
              { type: 'match', pairs: [{ ru: 'Тёплое', uz: 'Issiq (neytral)' }, { ru: 'Холодное', uz: 'Sovuq (neytral)' }, { ru: 'Светлое', uz: "Yorug' (neytral)" }, { ru: 'Тёмное', uz: "Qorong'u (neytral)" }] },
              { type: 'fill_blank', sentence: 'Сегодня ___ утро.', hint: "(neytral so'z: 'sovuq')", options: ['холодное', 'холодный', 'холодная', 'холодные'], answer: 'холодное' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это моё любимое место в городе', options: ["Bu mening shahardagi sevimli joyim", 'Bu mening yangi uyim', 'Bu mening ishim', 'Bu mening mashinam'], answer: "Bu mening shahardagi sevimli joyim" },
              { type: 'listening', audioText: 'У них большое и светлое окно в гостиной.', question: 'Mehmonxonada qanday deraza bor?', options: ["Katta va yorug'", "Kichik va qorong'i", "O'rtacha", "Yo'q"], answer: "Katta va yorug'" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu qadimiy shahar', options: ['Это старинное место', 'Это новое место', 'Это красивое место', 'Это далёкое место'], answer: 'Это старинное место' },
              { type: 'fill_blank', sentence: 'Это ___ решение.', hint: "(neytral so'z: 'to'g'ri')", options: ['правильное', 'правильный', 'правильная', 'правильные'], answer: 'правильное' },
              { type: 'order', prompt: 'Bu chiroyli manzara', tiles: ['Это', 'красивое', 'место'], answer: 'Это красивое место' },
              { type: 'match', pairs: [{ ru: 'Простое', uz: 'Oddiy (neytral)' }, { ru: 'Сложное', uz: 'Murakkab (neytral)' }, { ru: 'Важное', uz: 'Muhim (neytral)' }, { ru: 'Интересное', uz: 'Qiziqarli (neytral)' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это очень важное решение для нашей семьи', options: ["Bu oilamiz uchun juda muhim qaror", 'Bu oddiy qaror', 'Bu tez qaror', 'Bu oson qaror'], answer: "Bu oilamiz uchun juda muhim qaror" },
              { type: 'fill_blank', sentence: 'Какое красивое ___!', hint: "('osmon' so'zi)", options: ['небо', 'небом', 'небу', 'неба'], answer: 'небо' },
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
              { type: 'fill_blank', sentence: 'Мой друг работает в ___.', hint: "('Yaponiya' so'zi, predlojniy kelishik)", options: ['Японии', 'Япония', 'Японию', 'Японией'], answer: 'Японии' },
              { type: 'fill_blank', sentence: 'Она родилась в ___.', hint: "('Turkiya' so'zi, predlojniy kelishik)", options: ['Турции', 'Турция', 'Турцию', 'Турцией'], answer: 'Турции' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он путешествует по Европе', options: ["U Yevropa bo'ylab sayohat qilmoqda", 'U Osiyoda yashaydi', 'U Amerikaga ketmoqchi', "U Afrikadan qaytdi"], answer: "U Yevropa bo'ylab sayohat qilmoqda" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men Xitoyda ishlayman", options: ['Я работаю в Китае', 'Я работаю в Корее', 'Я работаю во Вьетнаме', 'Я работаю в Таиланде'], answer: 'Я работаю в Китае' },
              { type: 'match', pairs: [{ ru: 'В Швейцарии', uz: 'Shveytsariyada' }, { ru: 'В Норвегии', uz: 'Norvegiyada' }, { ru: 'В Швеции', uz: 'Shvetsiyada' }, { ru: 'В Финляндии', uz: 'Finlyandiyada' }] },
              { type: 'fill_blank', sentence: 'Они провели отпуск в ___.', hint: "('Gretsiya' so'zi, predlojniy kelishik)", options: ['Греции', 'Греция', 'Грецию', 'Грецией'], answer: 'Греции' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В Австрии очень красивые горы', options: ["Avstriyada juda go'zal tog'lar bor", 'Avstraliyada juda katta okeanlar bor', 'Angliyada juda ko\u2019p muzeylar bor', "Estoniyada juda ko'p o'rmonlar bor"], answer: "Avstriyada juda go'zal tog'lar bor" },
              { type: 'fill_blank', sentence: 'Мы никогда не были в ___.', hint: "('Argentina' so'zi, predlojniy kelishik)", options: ['Аргентине', 'Аргентина', 'Аргентину', 'Аргентиной'], answer: 'Аргентине' },
              { type: 'listening', audioText: 'Мой брат сейчас учится в Канаде, в Торонто.', question: "Ukasi hozir qayerda o'qiydi?", options: ['Kanadada, Torontoda', 'AQShda', 'Angliyada', 'Fransiyada'], answer: 'Kanadada, Torontoda' },
              { type: 'choice', dir: 'uz2ru', prompt: "Biz Misrda piramidalarni ko'rdik", options: ['Мы видели пирамиды в Египте', 'Мы видели пирамиды в Мексике', 'Мы видели горы в Египте', 'Мы видели пустыню в Марокко'], answer: 'Мы видели пирамиды в Египте' },
              { type: 'order', prompt: "U Braziliyada tug'ilgan", tiles: ['Она', 'родилась', 'в', 'Бразилии'], answer: 'Она родилась в Бразилии' },
              { type: 'fill_blank', sentence: 'Она изучает историю в ___.', hint: "('Belgiya' so'zi, predlojniy kelishik)", options: ['Бельгии', 'Бельгия', 'Бельгию', 'Бельгией'], answer: 'Бельгии' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В Индии живёт больше миллиарда людей', options: ["Hindistonda bir milliarddan ortiq odam yashaydi", "Xitoyda hech kim yashamaydi", "Indoneziyada eng kam aholi bor", "Yaponiyada aholi kam"], answer: "Hindistonda bir milliarddan ortiq odam yashaydi" },
              { type: 'match', pairs: [{ ru: 'В Португалии', uz: 'Portugaliyada' }, { ru: 'В Голландии', uz: 'Gollandiyada' }, { ru: 'В Дании', uz: 'Daniyada' }, { ru: 'В Ирландии', uz: 'Irlandiyada' }] },
              { type: 'fill_blank', sentence: 'Он давно живёт в ___.', hint: "('Avstraliya' so'zi, predlojniy kelishik)", options: ['Австралии', 'Австралия', 'Австралию', 'Австралией'], answer: 'Австралии' },
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
              { type: 'match', pairs: [{ ru: 'Спасибо', uz: 'Rahmat' }, { ru: 'Пожалуйста', uz: 'Marhamat' }, { ru: 'Извините', uz: 'Kechirasiz' }, { ru: 'Конечно', uz: 'Albatta' }] },
              { type: 'fill_blank', sentence: 'Мне очень ___ ваш город.', hint: "('yoqmoq' fe'lining hozirgi zamon shakli)", options: ['нравится', 'нравятся', 'нравился', 'нравлюсь'], answer: 'нравится' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне всё равно', options: ["Menga farqi yo'q", 'Men rozi emasman', 'Men rozi', 'Meni qiziqtiradi'], answer: "Menga farqi yo'q" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Albatta!', options: ['Конечно!', 'Может быть', 'Не знаю', 'Никогда'], answer: 'Конечно!' },
              { type: 'fill_blank', sentence: 'Извините, я не ___ вас.', hint: "('tushunmoq' fe'lining 'men' shakli)", options: ['понимаю', 'понял', 'понимал', 'пойму'], answer: 'понимаю' },
              { type: 'match', pairs: [{ ru: 'Согласен', uz: 'Roziman' }, { ru: 'Не согласен', uz: 'Rozi emasman' }, { ru: 'Может быть', uz: 'Balki' }, { ru: 'Наверное', uz: 'Ehtimol' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я с вами полностью согласен', options: ["Men siz bilan to'liq roziman", 'Men siz bilan rozi emasman', 'Men bilmayman', 'Men qarshiman'], answer: "Men siz bilan to'liq roziman" },
              { type: 'fill_blank', sentence: 'Как ___ дела?', hint: "('sizning' egalik olmoshi)", options: ['ваши', 'ваш', 'ваша', 'ваше'], answer: 'ваши' },
              { type: 'listening', audioText: 'Извините, вы не подскажете, который час?', question: "Nima so'ralmoqda?", options: ['Soat necha ekanligi', "Yo'l qanday", 'Ism nima', 'Narx qancha'], answer: 'Soat necha ekanligi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Iltimos, sekinroq gapiring', options: ['Говорите медленнее, пожалуйста', 'Говорите громче, пожалуйста', 'Говорите быстрее, пожалуйста', 'Молчите, пожалуйста'], answer: 'Говорите медленнее, пожалуйста' },
              { type: 'order', prompt: 'Meni tushunyapsizmi?', tiles: ['Вы', 'меня', 'понимаете?'], answer: 'Вы меня понимаете?' },
              { type: 'fill_blank', sentence: 'Повторите, ___.', hint: "('iltimos' so'zi)", options: ['пожалуйста', 'спасибо', 'извините', 'конечно'], answer: 'пожалуйста' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не за что!', options: ['Arzimaydi!', 'Rahmat!', 'Kechirasiz!', 'Albatta!'], answer: 'Arzimaydi!' },
              { type: 'order', prompt: 'Sizni tinglayapman', tiles: ['Я', 'вас', 'слушаю'], answer: 'Я вас слушаю' },
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
              { type: 'fill_blank', sentence: 'Она рассказывает ___.', hint: "('u ayol haqida' — 'u ayol' olmoshining predlojniy shakli)", options: ['о ней', 'о она', 'о её', 'ей'], answer: 'о ней' },
              { type: 'fill_blank', sentence: 'Вы говорите ___?', hint: "('men haqimda' — 'men' olmoshining predlojniy shakli)", options: ['обо мне', 'о я', 'о меня', 'мне'], answer: 'обо мне' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я часто думаю о будущем', options: ["Men kelajak haqida ko'p o'ylayman", "Men o'tmish haqida o'ylayman", "Men hozirgi kun haqida o'ylamayman", "Men hech narsa haqida o'ylamayman"], answer: "Men kelajak haqida ko'p o'ylayman" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ular biz haqimizda gapirishmoqda', options: ['Они говорят о нас', 'Мы говорим о них', 'Они говорят с нами', 'Мы думаем о них'], answer: 'Они говорят о нас' },
              { type: 'fill_blank', sentence: 'Мы мечтаем ___.', hint: "('ular haqida' — 'ular' olmoshining predlojniy shakli)", options: ['о них', 'о они', 'об их', 'им'], answer: 'о них' },
              { type: 'match', pairs: [{ ru: 'О чём?', uz: 'Nima haqida?' }, { ru: 'О ком?', uz: 'Kim haqida?' }, { ru: 'О вас', uz: 'Siz haqingizda' }, { ru: 'О себе', uz: "O'zi haqida" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Расскажи мне о своей поездке', options: ["Sayohating haqida gapirib ber", 'Ishing haqida gapirib ber', 'Oilang haqida gapirib ber', 'Kasbing haqida gapirib ber'], answer: "Sayohating haqida gapirib ber" },
              { type: 'fill_blank', sentence: 'Я забочусь ___.', hint: "('o'zim haqimda' — refleksiv olmoshning predlojniy shakli)", options: ['о себе', 'о я', 'обо мне', 'себе'], answer: 'о себе' },
              { type: 'listening', audioText: 'Учитель говорит о новой теме урока.', question: "O'qituvchi nima haqida gapiryapti?", options: ['Yangi dars mavzusi haqida', "O'quvchilar haqida", 'Maktab haqida', 'Kanikullar haqida'], answer: 'Yangi dars mavzusi haqida' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men bu kitob haqida ko'p eshitganman", options: ['Я много слышал об этой книге', 'Я написал эту книгу', 'Я не читал эту книгу', 'Я забыл эту книгу'], answer: 'Я много слышал об этой книге' },
              { type: 'order', prompt: 'Biz sizning rejalaringiz haqida bilishni xohlaymiz', tiles: ['Мы', 'хотим', 'знать', 'о', 'ваших', 'планах'], answer: 'Мы хотим знать о ваших планах' },
              { type: 'fill_blank', sentence: 'Не волнуйся ___.', hint: "('men haqimda' — predlojniy shakl)", options: ['обо мне', 'о я', 'о меня', 'мне'], answer: 'обо мне' },
              { type: 'choice', dir: 'ru2uz', prompt: 'О чём этот фильм?', options: ["Bu film nima haqida?", 'Bu film qachon boshlanadi?', 'Bu film qancha turadi?', 'Bu film kim haqida?'], answer: "Bu film nima haqida?" },
              { type: 'match', pairs: [{ ru: "Спорить о чём-то", uz: "Nimadir haqida bahslashmoq" }, { ru: "Забыть о чём-то", uz: 'Nimadir haqida unutmoq' }, { ru: "Мечтать о чём-то", uz: 'Nimadir haqida orzu qilmoq' }, { ru: "Помнить о чём-то", uz: 'Nimadir haqida eslab qolmoq' }] },
              { type: 'fill_blank', sentence: 'Дети спрашивают ___.', hint: "('bobo haqida' — 'bobo' so'zining predlojniy shakli)", options: ['о дедушке', 'о дедушка', 'о дедушку', 'дедушке'], answer: 'о дедушке' },
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
              { type: 'reading', text: 'Дорогая мама! Пишу тебе из Москвы. У меня всё хорошо.', question: 'Xat qayerdan yozilmoqda?', options: ['Moskvadan', 'Peterburgdan', 'Toshkentdan', 'Londondan'], answer: 'Moskvadan' },
              { type: 'reading', text: 'Я живу в общежитии университета. Мои соседи по комнате очень дружелюбные.', question: 'U qayerda yashaydi?', options: ["Universitet yotoqxonasida", 'Mehmonxonada', 'Kvartirada', "Do'stida"], answer: "Universitet yotoqxonasida" },
              { type: 'reading', text: 'Каждый день я хожу на лекции и изучаю русскую литературу.', question: "U nimani o'rganmoqda?", options: ["Rus adabiyotini", 'Tarixni', 'Matematikani', 'Fizikani'], answer: "Rus adabiyotini" },
              { type: 'reading', text: 'В выходные я гуляю по городу и фотографирую красивые места.', question: 'Dam olish kunlari nima qiladi?', options: ["Shahar bo'ylab sayr qiladi va suratga oladi", 'Uyda o\u2019tiradi', 'Ishlaydi', 'Kitob yozadi'], answer: "Shahar bo'ylab sayr qiladi va suratga oladi" },
              { type: 'match', pairs: [{ ru: 'Дорогой/Дорогая', uz: 'Aziz(im)' }, { ru: 'С уважением', uz: 'Hurmat bilan' }, { ru: 'Целую', uz: "O'paman" }, { ru: 'До скорой встречи', uz: "Tez orada ko'rishguncha" }] },
              { type: 'reading', text: 'Целую тебя крепко. Жду встречи летом. Твой сын.', question: 'Xat kim tomonidan yozilgan?', options: ["O'g'il", 'Qiz', "Do'st", 'Nabira'], answer: "O'g'il" },
              { type: 'reading', text: 'Уважаемый господин Петров! Пишу вам по поводу вашего объявления о работе.', question: 'Bu qanday xat?', options: ['Rasmiy xat (ish haqida)', "Do'stona xat", 'Oilaviy xat', 'Tabrik xati'], answer: 'Rasmiy xat (ish haqida)' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я получил твоё письмо вчера', options: ["Men sening xatingni kecha oldim", 'Men senga xat yozdim', 'Men xat kutyapman', "Men xatni yo'qotdim"], answer: "Men sening xatingni kecha oldim" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Javobingizni sabrsizlik bilan kutaman', options: ['С нетерпением жду вашего ответа', 'Не жду вашего ответа', 'Забыл про ответ', 'Ответ не важен'], answer: 'С нетерпением жду вашего ответа' },
              { type: 'fill_blank', sentence: 'Спасибо за ваше ___.', hint: "('xat' so'zi)", options: ['письмо', 'письма', 'письму', 'письмом'], answer: 'письмо' },
              { type: 'match', pairs: [{ ru: 'Отправить письмо', uz: "Xat jo'natmoq" }, { ru: 'Получить письмо', uz: 'Xat olmoq' }, { ru: 'Открыть письмо', uz: 'Xatni ochmoq' }, { ru: 'Ответить на письмо', uz: 'Xatga javob bermoq' }] },
              { type: 'order', prompt: 'Men sizga tez orada javob beraman', tiles: ['Я', 'отвечу', 'вам', 'скоро'], answer: 'Я отвечу вам скоро' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Пишите мне почаще!', options: ["Menga tez-tez yozib turing!", 'Menga hech qachon yozmang!', 'Menga bir marta yozing!', "Menga qo'ng'iroq qiling!"], answer: "Menga tez-tez yozib turing!" },
              { type: 'listening', audioText: 'Дорогой друг! Спасибо за твоё письмо. Очень рад был его получить.', question: 'Muallif nimadan xursand?', options: ['Xat olganidan', "Sovg'a olganidan", 'Pul olganidan', 'Kitob olganidan'], answer: 'Xat olganidan' },
              { type: 'fill_blank', sentence: 'Я жду от тебя ___.', hint: "('javob' so'zi)", options: ['ответа', 'ответ', 'ответу', 'ответом'], answer: 'ответа' },
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
              { type: 'fill_blank', sentence: 'Меня ___ Анна.', hint: "('deyiladi' fe'lining o'zi)", options: ['зовут', 'звать', 'зову', 'зовём'], answer: 'зовут' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Приятно познакомиться', options: ["Tanishganimdan xursandman", 'Xayr', 'Rahmat', 'Kechirasiz'], answer: "Tanishganimdan xursandman" },
              { type: 'fill_blank', sentence: '___ меня есть семья.', hint: "('menda' konstruksiyasi predlogi)", options: ['У', 'В', 'На', 'К'], answer: 'У' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Salom, ishlaring qalay?', options: ['Привет, как дела?', 'Пока, до встречи', 'Спасибо большое', 'Извините, пожалуйста'], answer: 'Привет, как дела?' },
              { type: 'fill_blank', sentence: 'Это ___ дом, а это ваш.', hint: "('mening' egalik olmoshi)", options: ['мой', 'моя', 'моё', 'мои'], answer: 'мой' },
              { type: 'match', pairs: [{ ru: 'Здравствуйте', uz: 'Assalomu alaykum (rasmiy)' }, { ru: 'Привет', uz: 'Salom (norasmiy)' }, { ru: 'До свидания', uz: 'Xayr (rasmiy)' }, { ru: 'Пока', uz: 'Xayr (norasmiy)' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Откуда вы?', options: ["Qayerdansiz?", 'Qayerga borasiz?', 'Qayerdasiz?', 'Kimsiz?'], answer: "Qayerdansiz?" },
              { type: 'fill_blank', sentence: 'Я ___ из Узбекистана.', hint: "('kelmoq' fe'lining o'tgan zamon shakli)", options: ['приехал', 'приезжаю', 'приеду', 'приезжал'], answer: 'приехал' },
              { type: 'listening', audioText: 'Здравствуйте! Меня зовут Анна. Я из Москвы.', question: 'Ayolning ismi va shahri nima?', options: ['Anna, Moskva', 'Olga, Peterburg', 'Marta, London', 'Ira, Toshkent'], answer: 'Anna, Moskva' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Uzr, kechikdim', options: ['Извините, я опоздал', 'Спасибо, я пришёл вовремя', 'Простите, я забыл', 'Извините, я не понял'], answer: 'Извините, я опоздал' },
              { type: 'order', prompt: "Sizni ko'rganimdan xursandman", tiles: ['Я', 'рад', 'вас', 'видеть'], answer: 'Я рад вас видеть' },
              { type: 'fill_blank', sentence: 'Сколько ___ лет?', hint: "('sizga' — jo'nalish kelishigi)", options: ['вам', 'вы', 'вас', 'вами'], answer: 'вам' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне двадцать пять лет', options: ["Men yigirma besh yoshdaman", "Men o'n besh yoshdaman", 'Men yigirma yoshdaman', 'Men ellik yoshdaman'], answer: "Men yigirma besh yoshdaman" },
              { type: 'match', pairs: [{ ru: 'Как вас зовут?', uz: 'Ismingiz nima?' }, { ru: 'Сколько вам лет?', uz: 'Necha yoshdasiz?' }, { ru: 'Откуда вы?', uz: 'Qayerdansiz?' }, { ru: 'Кем вы работаете?', uz: 'Kasbingiz nima?' }] },
              { type: 'order', prompt: 'Sizning oilangiz haqida gapirib bering', tiles: ['Расскажите', 'мне', 'о', 'вашей', 'семье'], answer: 'Расскажите мне о вашей семье' },
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
              { type: 'match', pairs: [{ ru: 'Пятый', uz: 'Beshinchi' }, { ru: 'Шестой', uz: 'Oltinchi' }, { ru: 'Седьмой', uz: 'Yettinchi' }, { ru: 'Восьмой', uz: 'Sakkizinchi' }] },
              { type: 'fill_blank', sentence: 'Это ___ урок.', hint: "(tartib son 'to'qqizinchi', erkak jinsi)", options: ['девятый', 'девять', 'девятое', 'девятая'], answer: 'девятый' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он занял первое место в конкурсе', options: ["U tanlovda birinchi o'rinni egalladi", "U tanlovda oxirgi o'rinda", 'U tanlovda qatnashmadi', "U tanlovni g'olib qildi"], answer: "U tanlovda birinchi o'rinni egalladi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu mening o'n birinchi safar", options: ['Это мой одиннадцатый раз', 'Это мой первый раз', 'Это мой десятый раз', 'Это мой последний раз'], answer: 'Это мой одиннадцатый раз' },
              { type: 'fill_blank', sentence: 'Сегодня ___ урок в расписании.', hint: "(tartib son 'to'rtinchi', erkak jinsi)", options: ['четвёртый', 'четыре', 'четвёртая', 'четвёртое'], answer: 'четвёртый' },
              { type: 'match', pairs: [{ ru: 'Двадцатый', uz: "Yigirmanchi" }, { ru: 'Тридцатый', uz: "O'ttizinchi" }, { ru: 'Сотый', uz: 'Yuzinchi' }, { ru: 'Последний', uz: 'Oxirgi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это моя вторая попытка', options: ["Bu mening ikkinchi urinishim", 'Bu mening birinchi urinishim', 'Bu mening oxirgi urinishim', 'Bu mening yagona urinishim'], answer: "Bu mening ikkinchi urinishim" },
              { type: 'fill_blank', sentence: 'В ___ классе учится моя сестра.', hint: "(tartib son 'yettinchi', joy-payt kelishigi)", options: ['седьмом', 'седьмой', 'седьмого', 'седьмую'], answer: 'седьмом' },
              { type: 'listening', audioText: 'Это уже третья книга этого автора.', question: "Bu muallifning nechanchi kitobi?", options: ['Uchinchi', 'Ikkinchi', 'Birinchi', "To'rtinchi"], answer: 'Uchinchi' },
              { type: 'choice', dir: 'uz2ru', prompt: "U musobaqada uchinchi bo'ldi", options: ['Он занял третье место', 'Он занял первое место', 'Он занял второе место', 'Он не участвовал'], answer: 'Он занял третье место' },
              { type: 'order', prompt: 'Bu birinchi qadam', tiles: ['Это', 'первый', 'шаг'], answer: 'Это первый шаг' },
              { type: 'fill_blank', sentence: 'Я живу на ___ этаже.', hint: "(tartib son 'o'ninchi', joy-payt kelishigi)", options: ['десятом', 'десять', 'десятый', 'десятой'], answer: 'десятом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Двадцать первый век — век технологий', options: ["Yigirma birinchi asr — texnologiyalar asri", "O'nninchi asr — qadimiy davr", "Yigirmanchi asr o'tmish", "Kelasi asr noma'lum"], answer: "Yigirma birinchi asr — texnologiyalar asri" },
              { type: 'match', pairs: [{ ru: 'XXI век', uz: '21-asr' }, { ru: 'XX век', uz: '20-asr' }, { ru: 'XIX век', uz: '19-asr' }, { ru: 'XVIII век', uz: '18-asr' }] },
              { type: 'fill_blank', sentence: 'Это её ___ ребёнок.', hint: "(tartib son 'uchinchi', erkak jinsi)", options: ['третий', 'три', 'третья', 'третье'], answer: 'третий' },
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
              { type: 'fill_blank', sentence: 'Лифт не работает, нужно идти ___ лестнице.', hint: "(joy bildiruvchi predlog, 'zinapoyada')", options: ['по', 'на', 'в', 'к'], answer: 'по' },
              { type: 'choice', dir: 'ru2uz', prompt: 'На каком этаже находится офис?', options: ["Ofis nechinchi qavatda joylashgan?", 'Ofis qayerda joylashgan?', 'Ofis qachon ochiladi?', 'Ofis qanday?'], answer: "Ofis nechinchi qavatda joylashgan?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bizning kvartiramiz uchinchi qavatda', options: ['Наша квартира на третьем этаже', 'Наша квартира на первом этаже', 'Наш дом на третьей улице', 'Наш офис на третьем этаже'], answer: 'Наша квартира на третьем этаже' },
              { type: 'fill_blank', sentence: 'В этом доме нет ___.', hint: "('lift' so'zi, qaratqich kelishigi)", options: ['лифта', 'лифт', 'лифту', 'лифтом'], answer: 'лифта' },
              { type: 'match', pairs: [{ ru: 'Первый этаж', uz: 'Birinchi qavat' }, { ru: 'Последний этаж', uz: 'Oxirgi qavat' }, { ru: 'Подвал', uz: 'Podval' }, { ru: 'Крыша', uz: 'Tom' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы поднимаемся на восьмой этаж на лифте', options: ["Biz liftda sakkizinchi qavatga chiqamiz", 'Biz zinapoyadan tushamiz', 'Biz birinchi qavatda qolamiz', 'Biz tomga chiqamiz'], answer: "Biz liftda sakkizinchi qavatga chiqamiz" },
              { type: 'fill_blank', sentence: 'Наш офис находится на ___ этаже.', hint: "(tartib son 'ikkinchi', joy-payt kelishigi)", options: ['втором', 'два', 'вторая', 'второе'], answer: 'втором' },
              { type: 'listening', audioText: 'Библиотека находится на первом этаже, а читальный зал — на втором.', question: "O'qish zali qaysi qavatda?", options: ['Ikkinchi qavatda', 'Birinchi qavatda', 'Uchinchi qavatda', 'Podvalda'], answer: 'Ikkinchi qavatda' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu bino to'qqiz qavatli", options: ['Это здание девятиэтажное', 'Это здание одноэтажное', 'Это здание пятиэтажное', 'Это здание высокое'], answer: 'Это здание девятиэтажное' },
              { type: 'fill_blank', sentence: 'Сколько этажей ___ в этом доме?', hint: "('bor' fe'li, ko'plikda)", options: ['есть', 'был', 'нет', 'будет'], answer: 'есть' },
              { type: 'order', prompt: 'Men beshinchi qavatga chiqmoqchiman', tiles: ['Я', 'хочу', 'подняться', 'на', 'пятый', 'этаж'], answer: 'Я хочу подняться на пятый этаж' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы живём на верхнем этаже', options: ["Biz eng yuqori qavatda yashaymiz", 'Biz birinchi qavatda yashaymiz', 'Biz podvalda yashaymiz', 'Biz tomda yashaymiz'], answer: "Biz eng yuqori qavatda yashaymiz" },
              { type: 'match', pairs: [{ ru: 'Подниматься', uz: 'Chiqmoq (yuqoriga)' }, { ru: 'Спускаться', uz: 'Tushmoq (pastga)' }, { ru: 'Лестница', uz: 'Zinapoya' }, { ru: 'Балкон', uz: 'Balkon' }] },
              { type: 'fill_blank', sentence: 'У нас есть красивый ___.', hint: "('balkon' so'zi)", options: ['балкон', 'балкона', 'балкону', 'балконом'], answer: 'балкон' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu bino juda baland, o'n besh qavatli", options: ['Это здание очень высокое, пятнадцатиэтажное', 'Это здание низкое', 'Это здание среднее', 'Это здание десятиэтажное'], answer: 'Это здание очень высокое, пятнадцатиэтажное' },
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
              { type: 'match', pairs: [{ ru: 'Незабываемый', uz: 'Unutilmas' }, { ru: 'Волнующий', uz: "To'lqinlantiruvchi" }, { ru: 'Захватывающий', uz: 'Hayajonli' }, { ru: 'Удивительный', uz: 'Ajoyib' }] },
              { type: 'fill_blank', sentence: 'Я всегда буду ___ этот момент.', hint: "('eslamoq' fe'lining infinitivi)", options: ['помнить', 'помню', 'помнил', 'вспомню'], answer: 'помнить' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эта фотография напоминает мне о доме', options: ["Bu surat menga uyni eslatadi", 'Bu surat eski', 'Men bu suratni sevmayman', "Bu surat yo'qolgan"], answer: "Bu surat menga uyni eslatadi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu sayohat mening hayotimni o'zgartirdi", options: ['Это путешествие изменило мою жизнь', 'Это путешествие было скучным', 'Я не хочу вспоминать это путешествие', 'Это путешествие было коротким'], answer: 'Это путешествие изменило мою жизнь' },
              { type: 'fill_blank', sentence: 'Мы с теплом ___ о том лете.', hint: "('eslamoq' fe'lining 'biz' shakli)", options: ['вспоминаем', 'вспоминаю', 'вспомнил', 'вспомним'], answer: 'вспоминаем' },
              { type: 'match', pairs: [{ ru: 'Ностальгия', uz: "Sog'inch" }, { ru: 'Радость', uz: 'Xursandchilik' }, { ru: 'Грусть', uz: "G'am" }, { ru: 'Вдохновение', uz: 'Ilhom' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Эти воспоминания вдохновляют меня', options: ["Bu xotiralar meni ilhomlantiradi", 'Bu xotiralar meni xafa qiladi', 'Men bu xotiralarni unutdim', 'Bu xotiralar noaniq'], answer: "Bu xotiralar meni ilhomlantiradi" },
              { type: 'fill_blank', sentence: 'Я никогда не ___ этот день.', hint: "('unutmoq' fe'lining 'men' shakli, kelasi zamon)", options: ['забуду', 'забываю', 'забыл', 'забывал'], answer: 'забуду' },
              { type: 'listening', audioText: 'Мы вспоминаем это путешествие с большой любовью.', question: 'Ular sayohatni qanday eslashadi?', options: ['Katta muhabbat bilan', 'Xafalik bilan', 'Zerikish bilan', "Qo'rquv bilan"], answer: 'Katta muhabbat bilan' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu sarguzasht meni o'zgartirdi", options: ['Это приключение изменило меня', 'Это приключение было опасным', 'Я не участвовал в приключении', 'Приключение закончилось быстро'], answer: 'Это приключение изменило меня' },
              { type: 'order', prompt: "Biz o'sha voqealarni yaxshi eslaymiz", tiles: ['Мы', 'хорошо', 'помним', 'те', 'события'], answer: 'Мы хорошо помним те события' },
              { type: 'fill_blank', sentence: 'Эти фотографии хранят ___ воспоминания.', hint: "('qadrli' sifati, ko'plik)", options: ['ценные', 'ценный', 'ценная', 'ценное'], answer: 'ценные' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я веду дневник путешествий', options: ["Men sayohat kundaligini yuritaman", 'Men xat yozaman', 'Men kitob nashr qilaman', "Men jurnal o'qiyman"], answer: "Men sayohat kundaligini yuritaman" },
              { type: 'match', pairs: [{ ru: 'Вести дневник', uz: 'Kundalik yuritmoq' }, { ru: 'Делать фото', uz: 'Surat olmoq' }, { ru: 'Собирать сувениры', uz: "Suvenir yig'moq" }, { ru: 'Писать заметки', uz: 'Qaydlar yozmoq' }] },
              { type: 'order', prompt: "Bu meni butunlay o'zgartirgan sayohat edi", tiles: ['Это', 'было', 'путешествие,', 'которое', 'полностью', 'изменило', 'меня'], answer: 'Это было путешествие, которое полностью изменило меня' },
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
              { type: 'fill_blank', sentence: 'Мы говорим о больш___ проблеме.', hint: "(ayol jinsi uchun predlojniy -ОЙ)", options: ['ой', 'ом', 'ая', 'ое'], answer: 'ой' },
              { type: 'fill_blank', sentence: 'В нов___ фильме играет известный актёр.', hint: "(erkak/neytral so'z uchun predlojniy -ОМ)", options: ['ом', 'ой', 'ая', 'ое'], answer: 'ом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я читал о древней истории Рима', options: ["Men Rim qadimiy tarixi haqida o'qidim", 'Men Rim haqida kitob yozdim', 'Men Rimga bordim', 'Men Rim haqida hech narsa bilmayman'], answer: "Men Rim qadimiy tarixi haqida o'qidim" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz yaxshi restoranda ovqatlandik', options: ['Мы поели в хорошем ресторане', 'Мы поели в новом кафе', 'Мы готовили дома', 'Мы не ели весь день'], answer: 'Мы поели в хорошем ресторане' },
              { type: 'fill_blank', sentence: 'В маленьк___ деревне живут добрые люди.', hint: "(ayol jinsi uchun predlojniy -ОЙ)", options: ['ой', 'ом', 'ая', 'ое'], answer: 'ой' },
              { type: 'match', pairs: [{ ru: 'В тёплой стране', uz: 'Issiq mamlakatda' }, { ru: 'В холодном климате', uz: 'Sovuq iqlimda' }, { ru: 'На высокой горе', uz: "Baland tog'da" }, { ru: 'В глубоком озере', uz: "Chuqur ko'lda" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она рассказала о своей интересной работе', options: ["U o'zining qiziqarli ishi haqida gapirib berdi", 'U yangi ish qidiryapti', 'U ishsiz', 'U ishdan norozi'], answer: "U o'zining qiziqarli ishi haqida gapirib berdi" },
              { type: 'fill_blank', sentence: 'Я мечтаю о больш___ доме.', hint: "(erkak/neytral so'z uchun predlojniy -ОМ)", options: ['ом', 'ой', 'ая', 'ое'], answer: 'ом' },
              { type: 'listening', audioText: 'Мы говорили о нашей новой квартире весь вечер.', question: 'Ular kechqurun nima haqida gaplashishdi?', options: ['Yangi kvartira haqida', 'Ish haqida', 'Sayohat haqida', 'Ob-havo haqida'], answer: 'Yangi kvartira haqida' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu qiyin masala haqida ko'p o'yladim", options: ['Я много думал об этом трудном вопросе', 'Я забыл об этом вопросе', 'Этот вопрос лёгкий', 'Я не думаю об этом'], answer: 'Я много думал об этом трудном вопросе' },
              { type: 'order', prompt: "Biz uzun yo'l haqida gapirdik", tiles: ['Мы', 'говорили', 'о', 'долгой', 'дороге'], answer: 'Мы говорили о долгой дороге' },
              { type: 'fill_blank', sentence: 'В этой стар___ книге много интересного.', hint: "(ayol jinsi uchun predlojniy -ОЙ)", options: ['ой', 'ом', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он живёт в маленьком, но уютном доме', options: ["U kichik, ammo shinam uyda yashaydi", 'U katta uyda yashaydi', 'U uysiz', 'U mehmonxonada yashaydi'], answer: "U kichik, ammo shinam uyda yashaydi" },
              { type: 'match', pairs: [{ ru: 'О важном деле', uz: 'Muhim ish haqida' }, { ru: 'О новом друге', uz: "Yangi do'st haqida" }, { ru: 'О старой машине', uz: 'Eski mashina haqida' }, { ru: 'О тёплой погоде', uz: 'Issiq ob-havo haqida' }] },
              { type: 'fill_blank', sentence: 'На син___ небе не было облаков.', hint: "(o'rta jinsi uchun predlojniy -ЕМ)", options: ['ем', 'ом', 'ей', 'ее'], answer: 'ем' },
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
              { type: 'fill_blank', sentence: 'Толстой родился в девятнадцат___ веке.', hint: "(tartib son, predlojniy -ОМ)", options: ['ом', 'ый', 'ого', 'ому'], answer: 'ом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это здание построили в восемнадцатом веке', options: ["Bu bino XVIII asrda qurilgan", 'Bu bino yangi', 'Bu bino XX asrda qurilgan', 'Bu bino hali qurilmoqda'], answer: "Bu bino XVIII asrda qurilgan" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu voqea XX asrda sodir bo'lgan", options: ['Это случилось в двадцатом веке', 'Это случится в будущем', 'Это случилось вчера', 'Это никогда не случалось'], answer: 'Это случилось в двадцатом веке' },
              { type: 'fill_blank', sentence: 'В каком ___ жил этот писатель?', hint: "('asr' so'zi)", options: ['веке', 'век', 'века', 'веком'], answer: 'веке' },
              { type: 'match', pairs: [{ ru: 'Древний век', uz: 'Qadimiy asr' }, { ru: 'Средние века', uz: "O'rta asrlar" }, { ru: 'Новое время', uz: 'Yangi davr' }, { ru: 'Современность', uz: 'Zamonaviylik' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'В Средние века люди жили по-другому', options: ["O'rta asrlarda odamlar boshqacha yashashgan", "Hozir odamlar o'rta asrlardagidek yashashadi", "O'rta asrlar hali kelmagan", "O'rta asrlar haqida hech narsa bilmaymiz"], answer: "O'rta asrlarda odamlar boshqacha yashashgan" },
              { type: 'fill_blank', sentence: 'Эта традиция существует уже несколько ___.', hint: "('asr' so'zining ko'plik shakli)", options: ['веков', 'век', 'века', 'веками'], answer: 'веков' },
              { type: 'listening', audioText: 'Этот замок был построен в пятнадцатом веке.', question: "Bu qal'a qachon qurilgan?", options: ['XV asrda', 'XX asrda', 'XIX asrda', 'XVIII asrda'], answer: 'XV asrda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu kashfiyot XVII asrda qilingan', options: ['Это открытие было сделано в семнадцатом веке', 'Это открытие ещё не сделано', 'Это открытие сделали вчера', 'Это открытие устарело'], answer: 'Это открытие было сделано в семнадцатом веке' },
              { type: 'order', prompt: "Bu ancha oldin, XVI asrda bo'lgan", tiles: ['Это', 'было', 'давно,', 'в', 'шестнадцатом', 'веке'], answer: 'Это было давно, в шестнадцатом веке' },
              { type: 'fill_blank', sentence: 'Технологии быстро меняются в наш___ веке.', hint: "('bizning', erkak/neytral so'z uchun predlojniy)", options: ['ем', 'им', 'ей', 'ими'], answer: 'ем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Каждый век имеет свои особенности', options: ["Har bir asrning o'z xususiyatlari bor", 'Barcha asrlar bir xil', 'Faqat bizning asrimiz muhim', 'Asrlar ahamiyatsiz'], answer: "Har bir asrning o'z xususiyatlari bor" },
              { type: 'match', pairs: [{ ru: 'В прошлом веке', uz: "O'tgan asrda" }, { ru: 'В этом веке', uz: 'Shu asrda' }, { ru: 'В следующем веке', uz: 'Kelasi asrda' }, { ru: 'Много веков назад', uz: "Ko'p asrlar oldin" }] },
              { type: 'fill_blank', sentence: 'Эта картина написана в семнадцат___ веке.', hint: "(tartib son, predlojniy -ОМ)", options: ['ом', 'ый', 'ого', 'ому'], answer: 'ом' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu voqea uch asr oldin bo\u2019lgan', options: ['Это случилось три века назад', 'Это случилось три года назад', 'Это случится через три века', 'Это случилось три дня назад'], answer: 'Это случилось три века назад' },
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
              { type: 'match', pairs: [{ ru: 'Перекрёсток', uz: 'Chorraha' }, { ru: 'Светофор', uz: 'Svetofor' }, { ru: 'Пешеход', uz: 'Piyoda' }, { ru: 'Переход', uz: "O'tish joyi" }] },
              { type: 'fill_blank', sentence: 'Идите ___ до конца улицы.', hint: "('to'g'ri' ravishi)", options: ['прямо', 'прямой', 'прямая', 'прямое'], answer: 'прямо' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Пройдите два квартала и поверните налево', options: ["Ikki blok yuring va chapga buriling", "Bir blok yuring va o'ngga buriling", "To'g'ri boring", 'Orqaga qayting'], answer: "Ikki blok yuring va chapga buriling" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Muzey qanday topaman?', options: ['Как мне найти музей?', 'Где находится музей?', 'Когда открывается музей?', 'Сколько стоит музей?'], answer: 'Как мне найти музей?' },
              { type: 'fill_blank', sentence: 'Вокзал находится ___ центра города.', hint: "('markazidan uzoq', qaratqich kelishigi predlogi)", options: ['недалеко от', 'рядом с', 'около', 'из'], answer: 'недалеко от' },
              { type: 'match', pairs: [{ ru: 'Остановка', uz: 'Bekat' }, { ru: 'Площадь', uz: 'Maydon' }, { ru: 'Мост', uz: "Ko'prik" }, { ru: 'Набережная', uz: "Qirg'oq bo'yi" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Автобусная остановка рядом с банком', options: ["Avtobus bekati bank yonida", 'Avtobus bekati uzoqda', "Avtobus yo'q", 'Bank yopiq'], answer: "Avtobus bekati bank yonida" },
              { type: 'fill_blank', sentence: 'Вам нужно перейти ___ мост.', hint: "(harakat yo'nalishini bildiruvchi predlog, tushum kelishigi)", options: ['через', 'по', 'на', 'к'], answer: 'через' },
              { type: 'listening', audioText: 'Идите прямо, потом поверните направо у светофора.', question: 'Svetofordan keyin qayerga burilish kerak?', options: ["O'ngga", 'Chapga', 'Orqaga', "To'g'riga"], answer: "O'ngga" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kechirasiz, bu yerdan bankka qanday borsam bo\u2019ladi?', options: ['Извините, как пройти отсюда до банка?', 'Извините, где банк работает?', 'Извините, сколько денег в банке?', 'Извините, банк открыт?'], answer: 'Извините, как пройти отсюда до банка?' },
              { type: 'order', prompt: "Bu yerdan yaqin, piyoda 5 daqiqa", tiles: ['Это', 'близко', 'отсюда,', 'пять', 'минут', 'пешком'], answer: 'Это близко отсюда, пять минут пешком' },
              { type: 'fill_blank', sentence: 'Театр находится ___ парком.', hint: "('yonida' ma'nosini beruvchi predlog, vositalik kelishigi)", options: ['рядом с', 'около', 'из', 'через'], answer: 'рядом с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы почти пришли, это следующее здание', options: ["Siz deyarli yetib keldingiz, bu keyingi bino", 'Siz adashib qoldingiz', 'Bu juda uzoq', "Bu yerda hech narsa yo'q"], answer: "Siz deyarli yetib keldingiz, bu keyingi bino" },
              { type: 'match', pairs: [{ ru: 'Как пройти?', uz: 'Qanday borish mumkin?' }, { ru: 'Как проехать?', uz: "Qanday yetib borsam bo'ladi (transportda)?" }, { ru: 'Далеко ли?', uz: 'Uzoqmi?' }, { ru: 'Это рядом?', uz: 'Bu yaqinmi?' }] },
              { type: 'fill_blank', sentence: 'Идите по этой улице ___ площади.', hint: "('gacha' predlogi)", options: ['до', 'от', 'через', 'по'], answer: 'до' },
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
              { type: 'match', pairs: [{ ru: 'Мегаполис', uz: 'Megapolis' }, { ru: 'Пригород', uz: 'Shahar atrofi' }, { ru: 'Инфраструктура', uz: 'Infratuzilma' }, { ru: 'Население', uz: 'Aholi' }] },
              { type: 'fill_blank', sentence: 'В этом городе очень быстрый ___ жизни.', hint: "('sur'at/ritm' so'zi)", options: ['ритм', 'скорость', 'время', 'час'], answer: 'ритм' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В большом городе легко найти работу', options: ["Katta shaharda ish topish oson", 'Katta shaharda ish topish qiyin', "Qishloqda ish ko'p", "Shaharda ish yo'q"], answer: "Katta shaharda ish topish oson" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerda hayot qimmat', options: ['Здесь жизнь дорогая', 'Здесь жизнь дешёвая', 'Здесь жизнь скучная', 'Здесь жизнь простая'], answer: 'Здесь жизнь дорогая' },
              { type: 'fill_blank', sentence: 'Молодёжь предпочитает жить ___ городе.', hint: "('shaharda' — joy-payt predlogi)", options: ['в', 'на', 'у', 'к'], answer: 'в' },
              { type: 'match', pairs: [{ ru: 'Загрязнение', uz: 'Ifloslanish' }, { ru: 'Экология', uz: 'Ekologiya' }, { ru: 'Шум', uz: 'Shovqin' }, { ru: 'Суета', uz: "Tashvish/g'alva" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'В деревне воздух чище, чем в городе', options: ["Qishloqda havo shahardan tozaroq", "Shaharda havo tozaroq", "Ikkalasida ham bir xil", "Havo haqida hech narsa aytilmagan"], answer: "Qishloqda havo shahardan tozaroq" },
              { type: 'fill_blank', sentence: 'Многие люди устают от городской ___.', hint: "('shovqin/tashvish' so'zi)", options: ['суеты', 'суета', 'суету', 'суетой'], answer: 'суеты' },
              { type: 'listening', audioText: 'Жизнь в мегаполисе быстрая и напряжённая.', question: "Megapolisdagi hayot qanday?", options: ["Tez va zo'riqishli", 'Sekin va tinch', 'Zerikarli', 'Oson'], answer: "Tez va zo'riqishli" },
              { type: 'choice', dir: 'uz2ru', prompt: "Ko'p odamlar tabiatga yaqinroq yashashni xohlashadi", options: ['Многие люди хотят жить ближе к природе', 'Многие люди хотят жить в центре', 'Никто не хочет жить в деревне', 'Все хотят жить в мегаполисе'], answer: 'Многие люди хотят жить ближе к природе' },
              { type: 'order', prompt: 'Bu shaharda hayot juda qulay', tiles: ['Жизнь', 'в', 'этом', 'городе', 'очень', 'удобная'], answer: 'Жизнь в этом городе очень удобная' },
              { type: 'fill_blank', sentence: 'В городе есть хорошая ___.', hint: "('infratuzilma' so'zi)", options: ['инфраструктура', 'инфраструктуру', 'инфраструктуре', 'инфраструктурой'], answer: 'инфраструктура' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Городская жизнь имеет свои плюсы и минусы', options: ["Shahar hayotining o'z ijobiy va salbiy tomonlari bor", 'Shahar hayotida faqat ijobiy tomonlar bor', 'Shahar hayoti yomon', 'Shahar hayoti oson'], answer: "Shahar hayotining o'z ijobiy va salbiy tomonlari bor" },
              { type: 'match', pairs: [{ ru: 'Плюсы', uz: 'Ijobiy tomonlar' }, { ru: 'Минусы', uz: 'Salbiy tomonlar' }, { ru: 'Удобство', uz: 'Qulaylik' }, { ru: 'Возможности', uz: 'Imkoniyatlar' }] },
              { type: 'fill_blank', sentence: 'Население этого города ___ миллиона человек.', hint: "('bir necha' so'zi)", options: ['несколько', 'много', 'мало', 'около'], answer: 'несколько' },
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
              { type: 'fill_blank', sentence: 'Я думаю о ___ подруге.', hint: "('sening' — predlojniy, ayol jinsi)", options: ['твоей', 'твой', 'твою', 'твоя'], answer: 'твоей' },
              { type: 'fill_blank', sentence: 'Мы заботимся о ___ детях.', hint: "('bizning' — predlojniy, ko'plik)", options: ['наших', 'наша', 'нашу', 'наше'], answer: 'наших' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я мечтаю о своей будущей семье', options: ["Men o'z kelajakdagi oilam haqida orzu qilaman", 'Men hozirgi oilam haqida gapiraman', "Men oila haqida o'ylamayman", 'Men boshqalar oilasi haqida gapiraman'], answer: "Men o'z kelajakdagi oilam haqida orzu qilaman" },
              { type: 'choice', dir: 'uz2ru', prompt: "U sizning rejalaringiz haqida so'radi", options: ['Он спросил о ваших планах', 'Он рассказал о своих планах', 'Он забыл о планах', 'Он не интересуется планами'], answer: 'Он спросил о ваших планах' },
              { type: 'fill_blank', sentence: 'Она беспокоится о ___ здоровье.', hint: "('uning (erkak)' — predlojniy)", options: ['его', 'он', 'ему', 'им'], answer: 'его' },
              { type: 'match', pairs: [{ ru: 'О моей работе', uz: 'Mening ishim haqida' }, { ru: 'О твоём городе', uz: 'Sening shahring haqida' }, { ru: 'О её мечте', uz: 'Uning (ayol) orzusi haqida' }, { ru: 'О его планах', uz: 'Uning (erkak) rejalari haqida' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Расскажите о вашей поездке в Москву', options: ["Moskvaga sayohatingiz haqida gapirib bering", 'Moskvaga qachon borasiz?', 'Moskva qayerda joylashgan?', "Moskvada qancha odam yashaydi?"], answer: "Moskvaga sayohatingiz haqida gapirib bering" },
              { type: 'fill_blank', sentence: 'Я забочусь о ___ здоровье.', hint: "('o'z' — refleksiv egalik, predlojniy)", options: ['своём', 'свой', 'своего', 'своему'], answer: 'своём' },
              { type: 'listening', audioText: 'Он много говорит о своей новой машине.', question: "U nima haqida ko'p gapiradi?", options: ['Yangi mashinasi haqida', 'Yangi uyi haqida', 'Yangi ishi haqida', 'Yangi oilasi haqida'], answer: 'Yangi mashinasi haqida' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz sizning kelajagingiz haqida o\u2019ylaymiz', options: ['Мы думаем о вашем будущем', 'Мы думаем о нашем будущем', 'Мы не думаем о будущем', 'Мы забыли о будущем'], answer: 'Мы думаем о вашем будущем' },
              { type: 'order', prompt: 'Men uning muvaffaqiyati haqida eshitdim', tiles: ['Я', 'слышал', 'о', 'его', 'успехе'], answer: 'Я слышал о его успехе' },
              { type: 'fill_blank', sentence: 'Мы говорили о ___ путешествии.', hint: "('sizning' — predlojniy, o'rta jinsi)", options: ['вашем', 'ваш', 'вашу', 'ваша'], answer: 'вашем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она никогда не говорит о своём прошлом', options: ["U hech qachon o'z o'tmishi haqida gapirmaydi", "U doim o'tmishi haqida gapiradi", "U kelajak haqida gapiradi", "U hozirgi kun haqida gapiradi"], answer: "U hech qachon o'z o'tmishi haqida gapirmaydi" },
              { type: 'match', pairs: [{ ru: 'О своей стране', uz: "O'z mamlakati haqida" }, { ru: 'О своей культуре', uz: "O'z madaniyati haqida" }, { ru: 'О своём языке', uz: "O'z tili haqida" }, { ru: 'О своей истории', uz: "O'z tarixi haqida" }] },
              { type: 'fill_blank', sentence: 'Дети спрашивают о ___ игрушках.', hint: "('ularning' — predlojniy)", options: ['их', 'они', 'им', 'ими'], answer: 'их' },
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
              { type: 'match', pairs: [{ ru: 'Прихожая', uz: "Kirish yo'lagi" }, { ru: 'Коридор', uz: 'Koridor' }, { ru: 'Кладовая', uz: 'Ombor' }, { ru: 'Кабинет', uz: 'Kabinet' }] },
              { type: 'fill_blank', sentence: 'В ___ мы храним вещи.', hint: "('ombor' so'zi, predlojniy)", options: ['кладовой', 'кладовая', 'кладовую', 'кладовою'], answer: 'кладовой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В прихожей стоит зеркало', options: ["Kirish yo'lagida oyna turibdi", 'Oshxonada oyna turibdi', 'Hammomda oyna turibdi', 'Yotoqxonada oyna turibdi'], answer: "Kirish yo'lagida oyna turibdi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Otam kabinetda ishlaydi', options: ['Мой отец работает в кабинете', 'Мой отец работает на кухне', 'Мой отец работает в спальне', 'Мой отец работает в коридоре'], answer: 'Мой отец работает в кабинете' },
              { type: 'fill_blank', sentence: 'Наша квартира состоит из четырёх ___.', hint: "('xona' so'zining ko'plik shakli)", options: ['комнат', 'комната', 'комнате', 'комнатам'], answer: 'комнат' },
              { type: 'match', pairs: [{ ru: 'Балкон', uz: 'Balkon' }, { ru: 'Лоджия', uz: 'Loggiya' }, { ru: 'Терраса', uz: 'Terassa' }, { ru: 'Подвал', uz: 'Podval' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'На балконе растут цветы', options: ["Balkonda gullar o'sadi", "Balkonda hech narsa yo'q", 'Balkon yopiq', 'Balkon kichkina'], answer: "Balkonda gullar o'sadi" },
              { type: 'fill_blank', sentence: 'В нашем доме есть просторная ___.', hint: "('mehmonxona' so'zi)", options: ['гостиная', 'гостиную', 'гостиной', 'гостиною'], answer: 'гостиная' },
              { type: 'listening', audioText: 'В квартире три комнаты: спальня, гостиная и кабинет.', question: 'Kvartirada nechta xona bor?', options: ['Uch', 'Ikki', "To'rt", 'Besh'], answer: 'Uch' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu xona juda yorug'", options: ['Эта комната очень светлая', 'Эта комната очень тёмная', 'Эта комната маленькая', 'Эта комната холодная'], answer: 'Эта комната очень светлая' },
              { type: 'order', prompt: 'Yotoqxonamda katta deraza bor', tiles: ['В', 'моей', 'спальне', 'большое', 'окно'], answer: 'В моей спальне большое окно' },
              { type: 'fill_blank', sentence: 'Мы ремонтируем ___ комнату.', hint: "('mehmonxona' so'zi, tushum kelishigi)", options: ['гостиную', 'гостиная', 'гостиной', 'гостиною'], answer: 'гостиную' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В доме есть отдельная детская комната', options: ["Uyda alohida bolalar xonasi bor", "Uyda faqat bitta xona bor", "Bolalar xonasi yo'q", 'Uy juda kichik'], answer: "Uyda alohida bolalar xonasi bor" },
              { type: 'match', pairs: [{ ru: 'Детская', uz: 'Bolalar xonasi' }, { ru: 'Столовая', uz: 'Ovqat xonasi' }, { ru: 'Прачечная', uz: 'Kir yuvish xonasi' }, { ru: 'Библиотека', uz: 'Kutubxona' }] },
              { type: 'fill_blank', sentence: 'В квартире нет ___.', hint: "('balkon' so'zi, qaratqich kelishigi)", options: ['балкона', 'балкон', 'балкону', 'балконом'], answer: 'балкона' },
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
              { type: 'match', pairs: [{ ru: 'Стул', uz: 'Stul' }, { ru: 'Стол', uz: 'Stol' }, { ru: 'Зеркало', uz: 'Oyna' }, { ru: 'Ковёр', uz: 'Gilam' }] },
              { type: 'fill_blank', sentence: 'На ___ лежит ковёр.', hint: "('pol' so'zi, predlojniy)", options: ['полу', 'пол', 'полом', 'поле'], answer: 'полу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В спальне стоит удобная кровать', options: ["Yotoqxonada qulay karavot turibdi", 'Yotoqxonada faqat stul bor', "Yotoqxonada mebel yo'q", 'Yotoqxona bo\u2019sh'], answer: "Yotoqxonada qulay karavot turibdi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu shkaf juda katta', options: ['Этот шкаф очень большой', 'Этот стол маленький', 'Этот стул новый', 'Этот диван старый'], answer: 'Этот шкаф очень большой' },
              { type: 'fill_blank', sentence: 'Мы купили новый ___ для гостиной.', hint: "('divan' so'zi)", options: ['диван', 'дивана', 'дивану', 'диваном'], answer: 'диван' },
              { type: 'match', pairs: [{ ru: 'Комод', uz: 'Komod' }, { ru: 'Тумбочка', uz: 'Tumbochka' }, { ru: 'Кресло', uz: 'Kreslo' }, { ru: 'Подушка', uz: 'Yostiq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Рядом с кроватью стоит тумбочка', options: ["Karavot yonida tumbochka turibdi", 'Karavot yonida shkaf turibdi', "Karavot bo'sh xonada", "Tumbochka yo'q"], answer: "Karavot yonida tumbochka turibdi" },
              { type: 'fill_blank', sentence: 'На диване лежат мягкие ___.', hint: "('yostiq' so'zining ko'plik shakli)", options: ['подушки', 'подушка', 'подушек', 'подушкам'], answer: 'подушки' },
              { type: 'listening', audioText: 'В гостиной новый диван, кресло и телевизор.', question: 'Mehmonxonada nima bor?', options: ['Divan, kreslo va televizor', 'Faqat divan', 'Stol va stul', 'Karavot va shkaf'], answer: 'Divan, kreslo va televizor' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu stol yog'ochdan yasalgan", options: ['Этот стол сделан из дерева', 'Этот стол сделан из металла', 'Этот стол сделан из стекла', 'Этот стол пластиковый'], answer: 'Этот стол сделан из дерева' },
              { type: 'order', prompt: 'Bu yerda qulay kreslo bor', tiles: ['Здесь', 'есть', 'удобное', 'кресло'], answer: 'Здесь есть удобное кресло' },
              { type: 'fill_blank', sentence: 'Зеркало висит на ___.', hint: "('devor' so'zi, predlojniy)", options: ['стене', 'стена', 'стену', 'стеной'], answer: 'стене' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот шкаф занимает много места', options: ["Bu shkaf ko'p joy egallaydi", 'Bu shkaf kichkina', 'Bu shkaf bo\u2019sh', 'Bu shkaf yangi'], answer: "Bu shkaf ko'p joy egallaydi" },
              { type: 'match', pairs: [{ ru: 'Мебель', uz: 'Mebel' }, { ru: 'Интерьер', uz: 'Interyer' }, { ru: 'Дизайн', uz: 'Dizayn' }, { ru: 'Уют', uz: 'Shinamlik' }] },
              { type: 'fill_blank', sentence: 'В нашей квартире современный ___.', hint: "('dizayn' so'zi)", options: ['дизайн', 'дизайна', 'дизайну', 'дизайном'], answer: 'дизайн' },
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
              { type: 'fill_blank', sentence: 'Я ___ дома весь день.', hint: "('o'tirmoq' fe'li, 1-shaxs, д→ж almashinuvi)", options: ['сижу', 'сидю', 'сидит', 'сидят'], answer: 'сижу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я хожу в школу пешком', options: ["Men maktabga piyoda boraman", 'Men maktabga mashinada boraman', 'Men maktabga bormayman', "Men maktabda o'qiyman"], answer: "Men maktabga piyoda boraman" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men uyda o'tiraman", options: ['Я сижу дома', 'Я стою дома', 'Я иду домой', 'Я работаю дома'], answer: 'Я сижу дома' },
              { type: 'fill_blank', sentence: 'Я всегда ___ решение.', hint: "('topmoq' fe'li, 1-shaxs, д→ж almashinuvi)", options: ['нахожу', 'находю', 'находит', 'находят'], answer: 'нахожу' },
              { type: 'match', pairs: [{ ru: 'Ходить → хожу', uz: 'Yurmoq → yuraman' }, { ru: 'Сидеть → сижу', uz: "O'tirmoq → o'tiraman" }, { ru: 'Находить → нахожу', uz: 'Topmoq → topaman' }, { ru: 'Будить → бужу', uz: "Uyg'otmoq → uyg'otaman" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я бужу детей в семь утра', options: ["Men bolalarni ertalab yettida uyg'otaman", 'Men bolalarni kechqurun uxlataman', "Men bolalar bilan o'ynayman", 'Men bolalarga ovqat beraman'], answer: "Men bolalarni ertalab yettida uyg'otaman" },
              { type: 'fill_blank', sentence: 'Я ___ деньги за услуги.', hint: "('to'lamoq' fe'li, 1-shaxs, т→ч almashinuvi)", options: ['плачу', 'плату', 'платит', 'платят'], answer: 'плачу' },
              { type: 'listening', audioText: 'Я плачу за квартиру каждый месяц.', question: "Nima uchun to'laydi?", options: ['Kvartira uchun', 'Mashina uchun', 'Kitob uchun', 'Ovqat uchun'], answer: 'Kvartira uchun' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har doim rost gapiraman', options: ['Я всегда говорю правду', 'Я никогда не говорю правду', 'Я иногда лгу', 'Я молчу'], answer: 'Я всегда говорю правду' },
              { type: 'order', prompt: "Men bu yerda birinchi marta o'tiribman", tiles: ['Я', 'сижу', 'здесь', 'впервые'], answer: 'Я сижу здесь впервые' },
              { type: 'fill_blank', sentence: 'Я ___ прощения.', hint: "('kechirim so'ramoq' fe'li, 1-shaxs, с→ш almashinuvi)", options: ['прошу', 'просю', 'просит', 'просят'], answer: 'прошу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я перевожу текст с русского на узбекский', options: ["Men matnni rus tilidan o'zbek tiliga tarjima qilaman", 'Men matnni yozaman', "Men matnni o'qiyman", 'Men matnni topshiraman'], answer: "Men matnni rus tilidan o'zbek tiliga tarjima qilaman" },
              { type: 'match', pairs: [{ ru: 'Просить → прошу', uz: "So'ramoq → so'rayman" }, { ru: 'Платить → плачу', uz: "To'lamoq → to'layman" }, { ru: 'Видеть → вижу', uz: "Ko'rmoq → ko'raman" }, { ru: 'Переводить → перевожу', uz: 'Tarjima qilmoq → tarjima qilaman' }] },
              { type: 'fill_blank', sentence: 'Я ___ вас впервые.', hint: "('ko'rmoq' fe'li, 1-shaxs, д→ж almashinuvi)", options: ['вижу', 'видю', 'видит', 'видят'], answer: 'вижу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я хожу в бассейн по средам', options: ["Men chorshanba kunlari basseynga boraman", "Men hech qachon basseynga bormayman", "Men har kuni basseynga boraman", "Men suzishni bilmayman"], answer: "Men chorshanba kunlari basseynga boraman" },
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
              { type: 'fill_blank', sentence: 'Я ___ музыку по вечерам.', hint: "('yaxshi ko'rmoq' fe'li, 1-shaxs, б→бл almashinuvi)", options: ['люблю', 'любю', 'любит', 'любят'], answer: 'люблю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я ловлю рыбу на выходных', options: ["Men dam olish kunlari baliq tutaman", 'Men dam olish kunlari suzaman', 'Men dam olish kunlari uxlayman', "Men dam olish kunlari o'qiyman"], answer: "Men dam olish kunlari baliq tutaman" },
              { type: 'fill_blank', sentence: 'Я ___ новую машину в следующем году.', hint: "('sotib olmoq' fe'lining kelasi zamon, 1-shaxs, п→пл almashinuvi)", options: ['куплю', 'купю', 'купит', 'купят'], answer: 'куплю' },
              { type: 'match', pairs: [{ ru: 'Любить → люблю', uz: 'Sevmoq → sevaman' }, { ru: 'Готовить → готовлю', uz: 'Tayyorlamoq → tayyorlayman' }, { ru: 'Купить → куплю', uz: 'Sotib olmoq → sotib olaman' }, { ru: 'Ловить → ловлю', uz: 'Tutmoq → tutaman' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я ставлю чашку на стол', options: ["Men chashkani stolga qo'yaman", 'Men chashkani olib qo\u2019yaman', 'Men chashkani yuvaman', 'Men chashkani sindiraman'], answer: "Men chashkani stolga qo'yaman" },
              { type: 'fill_blank', sentence: 'Я всегда ___ будильник на семь утра.', hint: "('qo'ymoq' fe'li, 1-shaxs, в→вл almashinuvi)", options: ['ставлю', 'ставю', 'ставит', 'ставят'], answer: 'ставлю' },
              { type: 'listening', audioText: 'Я люблю читать книги перед сном.', question: 'Uxlashdan oldin nima qiladi?', options: ["Kitob o'qiydi", 'Musiqa tinglaydi', 'Ovqat pishiradi', 'Kir yuvadi'], answer: "Kitob o'qiydi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men bugun tez uxlayman', options: ['Я сегодня сплю рано', 'Я сегодня сплю поздно', 'Я сегодня не сплю', 'Я сегодня работаю'], answer: 'Я сегодня сплю рано' },
              { type: 'fill_blank', sentence: 'Я ___ кота два раза в день.', hint: "('boqmoq' fe'li, 1-shaxs, м→мл almashinuvi)", options: ['кормлю', 'кормю', 'кормит', 'кормят'], answer: 'кормлю' },
              { type: 'order', prompt: 'Men bolalarni har kuni boqaman', tiles: ['Я', 'кормлю', 'детей', 'каждый', 'день'], answer: 'Я кормлю детей каждый день' },
              { type: 'fill_blank', sentence: 'Я ___ о своей стране.', hint: "('faxrlanmoq' fe'li, 1-shaxs)", options: ['горжусь', 'горжу', 'гордюсь', 'гордится'], answer: 'горжусь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я ставлю тарелки на стол перед ужином', options: ["Men kechki ovqatdan oldin likopchalarni stolga qo'yaman", 'Men likopchalarni yuvaman', 'Men likopchalarni sotib olaman', 'Men likopchalarni sindiraman'], answer: "Men kechki ovqatdan oldin likopchalarni stolga qo'yaman" },
              { type: 'match', pairs: [{ ru: 'Ставить → ставлю', uz: "Qo'ymoq → qo'yaman" }, { ru: 'Кормить → кормлю', uz: 'Boqmoq → boqaman' }, { ru: 'Спать → сплю', uz: 'Uxlamoq → uxlayman' }, { ru: 'Купить → куплю', uz: 'Sotib olmoq → sotib olaman' }] },
              { type: 'fill_blank', sentence: 'Я ___ этим успехом.', hint: "('faxrlanmoq' fe'li, 1-shaxs)", options: ['горжусь', 'горжу', 'гордюсь', 'гордится'], answer: 'горжусь' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men uni juda yaxshi ko'raman", options: ['Я его очень люблю', 'Я его не люблю', 'Я его не знаю', 'Я его боюсь'], answer: 'Я его очень люблю' },
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
              { type: 'fill_blank', sentence: 'Мы ___ такси до аэропорта.', hint: "('olmoq' fe'lining 'biz' shakli)", options: ['берём', 'беру', 'берёшь', 'берёт'], answer: 'берём' },
              { type: 'fill_blank', sentence: 'Вы ___ отпуск летом?', hint: "('olmoq' fe'lining 'siz' shakli)", options: ['берёте', 'беру', 'берёшь', 'берёт'], answer: 'берёте' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Они берут книги в библиотеке', options: ["Ular kutubxonadan kitob olishadi", 'Ular kitob sotishadi', 'Ular kitob yozishadi', "Ular kitob o'qishmaydi"], answer: "Ular kutubxonadan kitob olishadi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men ertaga ta'til olaman", options: ['Я беру отпуск завтра', 'Я работаю завтра', 'Я еду завтра', 'Я отдыхаю сегодня'], answer: 'Я беру отпуск завтра' },
              { type: 'fill_blank', sentence: 'Я ___ зонт, потому что идёт дождь.', hint: "('olmoq' fe'li, 1-shaxs)", options: ['беру', 'берёшь', 'берёт', 'берём'], answer: 'беру' },
              { type: 'match', pairs: [{ ru: 'Брать такси', uz: 'Taksi olmoq' }, { ru: 'Брать отпуск', uz: "Ta'til olmoq" }, { ru: 'Брать кредит', uz: 'Kredit olmoq' }, { ru: 'Брать интервью', uz: 'Intervyu olmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Журналист берёт интервью у звезды', options: ["Jurnalist yulduzdan intervyu olyapti", 'Jurnalist yulduzga qo\u2019shiq aytmoqda', 'Jurnalist yulduzni suratga olmoqda', 'Jurnalist yulduz haqida yozmoqda'], answer: "Jurnalist yulduzdan intervyu olyapti" },
              { type: 'fill_blank', sentence: 'Банк даёт кредит, а мы его ___.', hint: "('olmoq' fe'lining 'biz' shakli)", options: ['берём', 'даём', 'платим', 'покупаем'], answer: 'берём' },
              { type: 'listening', audioText: 'Каждое утро я беру кофе с собой на работу.', question: 'Ertalab nima olib ketadi?', options: ['Qahva', 'Choy', 'Suv', 'Sut'], answer: 'Qahva' },
              { type: 'choice', dir: 'uz2ru', prompt: 'U mendan kitob oldi', options: ['Он взял у меня книгу', 'Он дал мне книгу', 'Он купил книгу', 'Он читает книгу'], answer: 'Он взял у меня книгу' },
              { type: 'order', prompt: "Men har doim o'zim bilan suv olib yuraman", tiles: ['Я', 'всегда', 'беру', 'с', 'собой', 'воду'], answer: 'Я всегда беру с собой воду' },
              { type: 'fill_blank', sentence: 'Он ___ ответственность за проект.', hint: "('olmoq' fe'lining 'u' shakli)", options: ['берёт', 'беру', 'берём', 'берёте'], answer: 'берёт' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Врач берёт анализ крови', options: ["Shifokor qon tahlili olmoqda", 'Shifokor dori bermoqda', 'Shifokor operatsiya qilmoqda', 'Shifokor dam olmoqda'], answer: "Shifokor qon tahlili olmoqda" },
              { type: 'match', pairs: [{ ru: 'Взять с собой', uz: 'Olib yurmoq' }, { ru: 'Взять взаймы', uz: 'Qarzga olmoq' }, { ru: 'Взять ответственность', uz: "Mas'uliyatni olmoq" }, { ru: 'Взять пример', uz: 'Namuna olmoq' }] },
              { type: 'fill_blank', sentence: 'Ты можешь ___ мою ручку.', hint: "('olmoq' fe'lining infinitivi)", options: ['взять', 'брать', 'берёшь', 'возьмёшь'], answer: 'взять' },
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
              { type: 'match', pairs: [{ ru: 'Баранина', uz: "Qo'y go'shti" }, { ru: 'Говядина', uz: "Mol go'shti" }, { ru: 'Свинина', uz: "Cho'chqa go'shti" }, { ru: 'Фарш', uz: 'Qiyma' }] },
              { type: 'fill_blank', sentence: 'На рынке продают свежее ___.', hint: "('go'sht' so'zi)", options: ['мясо', 'мяса', 'мясу', 'мясом'], answer: 'мясо' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Баранина очень популярна в Узбекистане', options: ["Qo'y go'shti O'zbekistonda juda mashhur", "Mol go'shti O'zbekistonda taqiqlangan", "Cho'chqa go'shti O'zbekistonda mashhur", "Baliq O'zbekistonda yo'q"], answer: "Qo'y go'shti O'zbekistonda juda mashhur" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga bir kilogramm qiyma kerak', options: ['Мне нужен килограмм фарша', 'Мне нужен килограмм мяса', 'Мне нужна курица', 'Мне нужна рыба'], answer: 'Мне нужен килограмм фарша' },
              { type: 'fill_blank', sentence: 'Плов готовят из риса, моркови и ___.', hint: "('go'sht' so'zi, vositalik kelishigi)", options: ['мяса', 'мясо', 'мясом', 'мясу'], answer: 'мяса' },
              { type: 'match', pairs: [{ ru: 'Помидор', uz: 'Pomidor' }, { ru: 'Огурец', uz: 'Bodring' }, { ru: 'Баклажан', uz: 'Baqlajon' }, { ru: 'Тыква', uz: 'Qovoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Овощи полезны для здоровья', options: ["Sabzavotlar sog'liq uchun foydali", 'Sabzavotlar zararli', "Faqat go'sht foydali", "Meva foydali emas"], answer: "Sabzavotlar sog'liq uchun foydali" },
              { type: 'fill_blank', sentence: 'Я купил килограмм ___.', hint: "('sabzi' so'zi, qaratqich kelishigi)", options: ['моркови', 'морковь', 'морковью', 'моркове'], answer: 'моркови' },
              { type: 'listening', audioText: 'На базаре продают свежие овощи: помидоры, огурцы, лук и морковь.', question: 'Bozorda nima sotiladi?', options: ['Yangi sabzavotlar', "Faqat go'sht", 'Faqat meva', 'Kiyim'], answer: 'Yangi sabzavotlar' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu qovoq juda katta', options: ['Эта тыква очень большая', 'Этот баклажан маленький', 'Этот огурец зелёный', 'Этот помидор красный'], answer: 'Эта тыква очень большая' },
              { type: 'order', prompt: 'Menga piyoz va sarimsoq kerak', tiles: ['Мне', 'нужны', 'лук', 'и', 'чеснок'], answer: 'Мне нужны лук и чеснок' },
              { type: 'fill_blank', sentence: 'Салат состоит из свежих ___.', hint: "('sabzavotlar' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['овощей', 'овощи', 'овощам', 'овощами'], answer: 'овощей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Курица дешевле, чем говядина', options: ["Tovuq mol go'shtidan arzon", 'Tovuq qimmatroq', "Tovuq va mol go'shti bir xil narxda", 'Tovuq sotilmaydi'], answer: "Tovuq mol go'shtidan arzon" },
              { type: 'match', pairs: [{ ru: 'Чеснок', uz: 'Sarimsoq' }, { ru: 'Зелень', uz: "Ko'katlar" }, { ru: 'Специи', uz: 'Ziravorlar' }, { ru: 'Соус', uz: 'Sous' }] },
              { type: 'fill_blank', sentence: 'Повар добавляет много ___.', hint: "('ziravorlar' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['специй', 'специи', 'специям', 'специями'], answer: 'специй' },
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
              { type: 'match', pairs: [{ ru: 'Груша', uz: 'Nok' }, { ru: 'Слива', uz: 'Olcha' }, { ru: 'Персик', uz: 'Shaftoli' }, { ru: 'Абрикос', uz: "O'rik" }] },
              { type: 'fill_blank', sentence: 'Я купил килограмм ___.', hint: "('shaftoli' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['персиков', 'персики', 'персикам', 'персиками'], answer: 'персиков' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Узбекские дыни и арбузы очень сладкие', options: ["O'zbek qovun va tarvuzlari juda shirin", "O'zbek qovunlari achchiq", "Tarvuz O'zbekistonda yo'q", 'Qovun mazasi yomon'], answer: "O'zbek qovun va tarvuzlari juda shirin" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga tvorog va smetana kerak', options: ['Мне нужны творог и сметана', 'Мне нужны молоко и кефир', 'Мне нужен йогурт', 'Мне нужен сыр'], answer: 'Мне нужны творог и сметана' },
              { type: 'fill_blank', sentence: 'Утром я пью кефир или ___.', hint: "('yogurt' so'zi)", options: ['йогурт', 'йогурта', 'йогурту', 'йогуртом'], answer: 'йогурт' },
              { type: 'match', pairs: [{ ru: 'Творог', uz: 'Tvorog' }, { ru: 'Сметана', uz: 'Smetana' }, { ru: 'Кефир', uz: 'Kefir' }, { ru: 'Сливки', uz: 'Qaymoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Молочные продукты полезны для костей', options: ["Sut mahsulotlari suyaklar uchun foydali", 'Sut mahsulotlari zararli', 'Faqat meva foydali', "Sut ichish shart emas"], answer: "Sut mahsulotlari suyaklar uchun foydali" },
              { type: 'fill_blank', sentence: 'Дыня слаще, чем ___.', hint: "('tarvuz' so'zi)", options: ['арбуз', 'арбуза', 'арбузу', 'арбузом'], answer: 'арбуз' },
              { type: 'listening', audioText: 'На рынке продают спелые дыни, арбузы и виноград.', question: 'Bozorda qanday meva bor?', options: ['Pishgan qovun, tarvuz va uzum', 'Faqat olma', 'Faqat banan', "Hech qanday meva yo'q"], answer: 'Pishgan qovun, tarvuz va uzum' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu o'rik juda shirin", options: ['Этот абрикос очень сладкий', 'Эта слива кислая', 'Этот персик зелёный', 'Эта груша твёрдая'], answer: 'Этот абрикос очень сладкий' },
              { type: 'order', prompt: 'Ertalabki nonushtada tvorog yeyman', tiles: ['На', 'завтрак', 'я', 'ем', 'творог'], answer: 'На завтрак я ем творог' },
              { type: 'fill_blank', sentence: 'В салат добавляют ___.', hint: "('smetana' so'zi, tushum kelishigi)", options: ['сметану', 'сметана', 'сметаны', 'сметаной'], answer: 'сметану' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Кефир хорошо влияет на пищеварение', options: ["Kefir ovqat hazm qilishga yaxshi ta'sir qiladi", 'Kefir foydasiz', 'Kefir zararli', "Kefir ichilmaydi"], answer: "Kefir ovqat hazm qilishga yaxshi ta'sir qiladi" },
              { type: 'match', pairs: [{ ru: 'Кислый', uz: 'Nordon' }, { ru: 'Сладкий', uz: 'Shirin' }, { ru: 'Спелый', uz: 'Pishgan' }, { ru: 'Свежий', uz: 'Yangi' }] },
              { type: 'fill_blank', sentence: 'Эти яблоки очень ___.', hint: "('nordon' sifatining ko'plik shakli)", options: ['кислые', 'кислый', 'кислая', 'кислое'], answer: 'кислые' },
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
              { type: 'match', pairs: [{ ru: 'Продавец', uz: 'Sotuvchi' }, { ru: 'Покупатель', uz: 'Xaridor' }, { ru: 'Торговаться', uz: 'Savdolashmoq' }, { ru: 'Прилавок', uz: 'Peshtaxta' }] },
              { type: 'fill_blank', sentence: 'Можно ___ цену?', hint: "('tushirmoq' fe'lining infinitivi)", options: ['снизить', 'снижу', 'снизишь', 'снизит'], answer: 'снизить' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это самая низкая цена', options: ['Bu eng past narx', 'Bu eng yuqori narx', "Bu o'rtacha narx", 'Bu bepul'], answer: 'Bu eng past narx' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerdagi mahsulotlar mahalliy', options: ['Продукты здесь местные', 'Продукты здесь импортные', 'Продукты здесь дорогие', 'Продукты здесь несвежие'], answer: 'Продукты здесь местные' },
              { type: 'fill_blank', sentence: 'Взвесьте мне, пожалуйста, два ___ винограда.', hint: "('kilogramm' so'zining ko'plik shakli)", options: ['килограмма', 'килограмм', 'килограммов', 'килограммам'], answer: 'килограмма' },
              { type: 'match', pairs: [{ ru: 'Взвесить', uz: "Tortmoq (o'lchamoq)" }, { ru: 'Упаковать', uz: 'Qadoqlamoq' }, { ru: 'Торговец', uz: 'Savdogar' }, { ru: 'Весы', uz: 'Tarozi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Взвесьте, пожалуйста, эти помидоры', options: ["Iltimos, bu pomidorlarni torting", 'Iltimos, bu pomidorlarni tanlang', 'Iltimos, bu pomidorlarni yuving', "Iltimos, bu pomidorlarni qadoqlang"], answer: "Iltimos, bu pomidorlarni torting" },
              { type: 'fill_blank', sentence: 'Продавец ___ товар покупателю.', hint: "('ko'rsatmoq' fe'lining 'u' shakli)", options: ['показывает', 'показываю', 'показываешь', 'показывают'], answer: 'показывает' },
              { type: 'listening', audioText: 'На рынке всегда можно поторговаться о цене.', question: 'Bozorda nima qilish mumkin?', options: ['Narx haqida savdolashish', 'Faqat kuzatish', "Pul yig'ish", 'Uxlash'], answer: 'Narx haqida savdolashish' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yerdagi go'sht eng yaxshisi", options: ['Мясо здесь самое лучшее', 'Мясо здесь самое дорогое', 'Мясо здесь несвежее', 'Мясо здесь плохое'], answer: 'Мясо здесь самое лучшее' },
              { type: 'order', prompt: 'Bu tarvuz qancha turadi?', tiles: ['Сколько', 'стоит', 'этот', 'арбуз?'], answer: 'Сколько стоит этот арбуз?' },
              { type: 'fill_blank', sentence: 'Товары здесь продают по низкой ___.', hint: "('narx' so'zi)", options: ['цене', 'цена', 'цену', 'ценой'], answer: 'цене' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Продавцы на рынке очень дружелюбные', options: ["Bozordagi sotuvchilar juda samimiy", "Bozordagi sotuvchilar qo'pol", "Bozorda sotuvchilar yo'q", 'Bozor yopiq'], answer: "Bozordagi sotuvchilar juda samimiy" },
              { type: 'match', pairs: [{ ru: 'Дешевле', uz: 'Arzonroq' }, { ru: 'Дороже', uz: 'Qimmatroq' }, { ru: 'Свежее', uz: 'Yangiroq' }, { ru: 'Лучше', uz: 'Yaxshiroq' }] },
              { type: 'fill_blank', sentence: 'Здесь фрукты ___, чем в магазине.', hint: "('arzonroq' — qiyoslash darajasi)", options: ['дешевле', 'дёшево', 'дешёвый', 'дешёвая'], answer: 'дешевле' },
            ],
          },
          {
            id: 26, title: 'Restoranda fikr', icon: ThumbsUp,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Обслуживание было превосходным', options: ["Xizmat ko'rsatish ajoyib edi", "Xizmat ko'rsatish yomon edi", 'Ovqat sovuq edi', 'Bu yerga boshqa kelmayman'], answer: "Xizmat ko'rsatish ajoyib edi" },
              { type: 'fill_blank', sentence: 'На мой взгляд, это блюдо слишком ___.', hint: "('sho'r' sifati)", options: ['солёное', 'солёный', 'солёная', 'солёные'], answer: 'солёное' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men bu taomni tavsiya qilaman', options: ['Я рекомендую это блюдо', 'Я не советую это блюдо', 'Я никогда это не пробовал', 'Я не люблю рестораны'], answer: 'Я рекомендую это блюдо' },
              { type: 'match', pairs: [{ ru: 'Вкус', uz: "Ta'm" }, { ru: 'Обслуживание', uz: 'Xizmat' }, { ru: 'Атмосфера', uz: 'Muhit' }, { ru: 'Отзыв', uz: 'Fikr-mulohaza' }] },
              { type: 'order', prompt: 'Bu yerdagi taomlar juda mazali', tiles: ['Блюда', 'здесь', 'очень', 'вкусные'], answer: 'Блюда здесь очень вкусные' },
              { type: 'match', pairs: [{ ru: 'Восхитительно', uz: 'Ajoyib' }, { ru: 'Разочаровывающе', uz: "Ko'ngilsiz" }, { ru: 'Приемлемо', uz: 'Qoniqarli' }, { ru: 'Ужасно', uz: 'Dahshatli' }] },
              { type: 'fill_blank', sentence: 'Это блюдо было ___ вкусным.', hint: "('juda' kuchaytiruvchi so'zi)", options: ['очень', 'мало', 'редко', 'едва'], answer: 'очень' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я оставлю хороший отзыв об этом ресторане', options: ["Men bu restoran haqida yaxshi fikr qoldiraman", 'Men bu restoranga boshqa kelmayman', 'Men bu restoran haqida yomon fikrdaman', "Men hech qanday fikr qoldirmayman"], answer: "Men bu restoran haqida yaxshi fikr qoldiraman" },
              { type: 'choice', dir: 'uz2ru', prompt: "Xizmat ko'rsatish sekin edi", options: ['Обслуживание было медленным', 'Обслуживание было быстрым', 'Обслуживание было отличным', 'Официант был грубым'], answer: 'Обслуживание было медленным' },
              { type: 'fill_blank', sentence: 'Я советую всем попробовать это ___.', hint: "('taom' so'zi)", options: ['блюдо', 'блюда', 'блюду', 'блюдом'], answer: 'блюдо' },
              { type: 'match', pairs: [{ ru: 'Рекомендовать', uz: 'Tavsiya qilmoq' }, { ru: 'Разочароваться', uz: "Ko'ngli qolmoq" }, { ru: 'Наслаждаться', uz: 'Zavqlanmoq' }, { ru: 'Жаловаться', uz: 'Shikoyat qilmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы наслаждались каждым блюдом', options: ["Biz har bir taomdan zavqlandik", "Biz taomlardan norozi bo'ldik", 'Biz taom buyurtma qilmadik', 'Biz restoranga bormadik'], answer: "Biz har bir taomdan zavqlandik" },
              { type: 'fill_blank', sentence: 'К сожалению, я был ___ обслуживанием.', hint: "('norozi' sifati, erkak jinsi)", options: ['недоволен', 'недовольна', 'недовольно', 'недовольны'], answer: 'недоволен' },
              { type: 'listening', audioText: 'Атмосфера в ресторане была уютная, а еда — превосходная.', question: 'Restoran haqida qanday fikr bildirildi?', options: ['Shinam va ajoyib taom', 'Sovuq va mazasiz', 'Shovqinli', 'Qimmat'], answer: 'Shinam va ajoyib taom' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men bu joyni do'stlarimga tavsiya qilaman", options: ['Я рекомендую это место друзьям', 'Я не советую это место', 'Я забуду это место', 'Я больше сюда не приду'], answer: 'Я рекомендую это место друзьям' },
              { type: 'order', prompt: "Xizmat ko'rsatish juda tez edi", tiles: ['Обслуживание', 'было', 'очень', 'быстрым'], answer: 'Обслуживание было очень быстрым' },
              { type: 'fill_blank', sentence: 'Официант был очень ___.', hint: "('e'tiborli' sifati, erkak jinsi)", options: ['внимательным', 'внимательной', 'внимательное', 'внимательные'], answer: 'внимательным' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Цены здесь довольно высокие для такого качества', options: ["Bu yerdagi narxlar shu sifat uchun ancha yuqori", "Narxlar juda arzon", "Narxlar o'rtacha", 'Sifat past'], answer: "Bu yerdagi narxlar shu sifat uchun ancha yuqori" },
              { type: 'match', pairs: [{ ru: 'Качество', uz: 'Sifat' }, { ru: 'Цена', uz: 'Narx' }, { ru: 'Порция', uz: 'Porsiya' }, { ru: 'Впечатление', uz: 'Taassurot' }] },
              { type: 'fill_blank', sentence: 'У меня остались только ___ впечатления.', hint: "('ijobiy' sifatining ko'plik shakli)", options: ['положительные', 'положительный', 'положительная', 'положительное'], answer: 'положительные' },
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
              { type: 'match', pairs: [{ ru: 'Завтракать', uz: 'Nonushta qilmoq' }, { ru: 'Обедать', uz: 'Tushlik qilmoq' }, { ru: 'Ужинать', uz: 'Kechki ovqat yemoq' }, { ru: 'Перекусывать', uz: 'Yengil tamaddi qilmoq' }] },
              { type: 'fill_blank', sentence: 'Я обычно ___ в семь утра.', hint: "('nonushta qilmoq' fe'lining 'men' shakli)", options: ['завтракаю', 'завтракаешь', 'завтракает', 'завтракаем'], answer: 'завтракаю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Важно есть медленно и тщательно пережёвывать пищу', options: ["Ovqatni sekin va yaxshi chaynab yeyish muhim", 'Tez ovqatlanish yaxshi', "Ovqatlanish shart emas", 'Kam ovqatlanish yaxshi'], answer: "Ovqatni sekin va yaxshi chaynab yeyish muhim" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men kechqurun kam ovqatlanaman', options: ['Вечером я мало ем', 'Вечером я много ем', 'Вечером я не ем', 'Утром я не ем'], answer: 'Вечером я мало ем' },
              { type: 'fill_blank', sentence: 'Врачи советуют есть ___ раз в день.', hint: "('besh' soni)", options: ['пять', 'пятый', 'пятеро', 'пятью'], answer: 'пять' },
              { type: 'match', pairs: [{ ru: 'Аппетит', uz: 'Ishtaha' }, { ru: 'Диета', uz: 'Parhez' }, { ru: 'Порция', uz: 'Porsiya' }, { ru: 'Калория', uz: 'Kaloriya' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня хороший аппетит сегодня', options: ['Bugun ishtaham yaxshi', "Bugun ishtahayim yo'q", 'Men kasalman', "Men to'yganman"], answer: 'Bugun ishtaham yaxshi' },
              { type: 'fill_blank', sentence: 'Она соблюдает строгую ___.', hint: "('parhez' so'zi)", options: ['диету', 'диета', 'диеты', 'диетой'], answer: 'диету' },
              { type: 'listening', audioText: 'В нашей семье принято ужинать вместе в семь вечера.', question: 'Oilada odat qanday?', options: ['Kechqurun soat yettida birga ovqatlanish', 'Har kim alohida ovqatlanadi', 'Ular ovqatlanmaydilar', 'Ular faqat ertalab yeyishadi'], answer: 'Kechqurun soat yettida birga ovqatlanish' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ovqatdan keyin choy ichaman', options: ['После еды я пью чай', 'До еды я пью чай', 'Я не пью чай', 'Я пью только воду'], answer: 'После еды я пью чай' },
              { type: 'order', prompt: "Sog'lom ovqatlanish muhim", tiles: ['Здоровое', 'питание', 'важно'], answer: 'Здоровое питание важно' },
              { type: 'fill_blank', sentence: 'Не стоит есть ___ перед сном.', hint: "('ko'p' so'zi)", options: ['много', 'мало', 'ничего', 'мало ли'], answer: 'много' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети должны есть больше овощей и фруктов', options: ["Bolalar ko'proq sabzavot va meva yeyishlari kerak", 'Bolalar shirinlik yeyishlari kerak', 'Bolalar ovqatlanmasligi kerak', "Bolalar faqat go'sht yeyishlari kerak"], answer: "Bolalar ko'proq sabzavot va meva yeyishlari kerak" },
              { type: 'match', pairs: [{ ru: 'Переедать', uz: 'Ortiqcha yemoq' }, { ru: 'Голодать', uz: 'Ochlik qilmoq' }, { ru: 'Питаться правильно', uz: "To'g'ri ovqatlanmoq" }, { ru: 'Соблюдать режим', uz: 'Tartibga rioya qilmoq' }] },
              { type: 'fill_blank', sentence: 'Важно не ___ перед сном.', hint: "('ortiqcha yemoq' fe'lining infinitivi)", options: ['переедать', 'переедаю', 'переедаешь', 'переедает'], answer: 'переедать' },
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
              { type: 'fill_blank', sentence: 'Я хочу ___ это событие.', hint: "('rejalashtirmoq' fe'lining infinitivi)", options: ['спланировать', 'планирую', 'планируешь', 'планирует'], answer: 'спланировать' },
              { type: 'fill_blank', sentence: 'Мы ___ конференцию в этом году.', hint: "('tashkil qilmoq' fe'lining 'biz' shakli)", options: ['организуем', 'организую', 'организуешь', 'организует'], answer: 'организуем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она интересуется искусством', options: ["U san'atga qiziqadi", 'U san\u2019atni bilmaydi', "U san'atkor", "U san'atdan norozi"], answer: "U san'atga qiziqadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men siyosat bilan qiziqmayman', options: ['Я не интересуюсь политикой', 'Я интересуюсь политикой', 'Я политик', 'Я изучаю политику'], answer: 'Я не интересуюсь политикой' },
              { type: 'fill_blank', sentence: 'Дети ___ во дворе.', hint: "('raqsga tushmoq' fe'lining 'ular' shakli)", options: ['танцуют', 'танцует', 'танцую', 'танцуем'], answer: 'танцуют' },
              { type: 'match', pairs: [{ ru: 'Использовать', uz: 'Foydalanmoq' }, { ru: 'Существовать', uz: "Mavjud bo'lmoq" }, { ru: 'Путешествовать', uz: 'Sayohat qilmoq' }, { ru: 'Требовать', uz: 'Talab qilmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я использую словарь каждый день', options: ["Men har kuni lug'atdan foydalanaman", "Men lug'at sotib olaman", "Men lug'atni yo'qotdim", "Men lug'atni yozaman"], answer: "Men har kuni lug'atdan foydalanaman" },
              { type: 'fill_blank', sentence: 'Эта проблема ___ немедленного решения.', hint: "('talab qilmoq' fe'lining 'u' shakli)", options: ['требует', 'требую', 'требуешь', 'требуют'], answer: 'требует' },
              { type: 'listening', audioText: 'Я путешествую по разным странам каждый год.', question: 'Har yili nima qiladi?', options: ['Turli mamlakatlarga sayohat qiladi', 'Uyda qoladi', 'Ishlaydi', "O'qiydi"], answer: 'Turli mamlakatlarga sayohat qiladi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu muammo mavjud', options: ['Эта проблема существует', 'Эта проблема не существует', 'Эта проблема решена', 'Эта проблема простая'], answer: 'Эта проблема существует' },
              { type: 'order', prompt: 'Biz kelasi hafta bayramni tashkil qilamiz', tiles: ['Мы', 'организуем', 'праздник', 'на', 'следующей', 'неделе'], answer: 'Мы организуем праздник на следующей неделе' },
              { type: 'fill_blank', sentence: 'Я ___ этой музыкой.', hint: "('qiziqmoq' fe'lining 'men' shakli, vositalik kelishigi bilan)", options: ['интересуюсь', 'интересую', 'интересуешь', 'интересуется'], answer: 'интересуюсь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Компания требует от сотрудников профессионализма', options: ["Kompaniya xodimlardan professionallikni talab qiladi", 'Kompaniya xodimlarga pul beradi', 'Kompaniya yopilmoqda', 'Kompaniya kichkina'], answer: "Kompaniya xodimlardan professionallikni talab qiladi" },
              { type: 'match', pairs: [{ ru: 'Рисковать', uz: 'Xavf qilmoq' }, { ru: 'Волноваться', uz: 'Xavotirlanmoq' }, { ru: 'Радоваться', uz: "Xursand bo'lmoq" }, { ru: 'Стараться', uz: 'Harakat qilmoq' }] },
              { type: 'fill_blank', sentence: 'Не ___, всё будет хорошо!', hint: "('xavotirlanmoq' fe'lining buyruq shakli)", options: ['волнуйся', 'волнуюсь', 'волнуешься', 'волнуется'], answer: 'волнуйся' },
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
              { type: 'fill_blank', sentence: 'Мы встречаемся ___ пятницам.', hint: "('juma kunlari' — odatiy takrorlanish predlogi)", options: ['по', 'в', 'на', 'с'], answer: 'по' },
              { type: 'choice', dir: 'ru2uz', prompt: 'По средам у меня тренировка', options: ["Chorshanba kunlari mashg'ulotim bor", "Har kuni mashg'ulotim bor", 'Dushanba kuni dam olaman', 'Yakshanba kuni ishlayman'], answer: "Chorshanba kunlari mashg'ulotim bor" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kelasi seshanba kuni uchrashamiz', options: ['Встретимся в следующий вторник', 'Встретимся в прошлый вторник', 'Встретимся сегодня', 'Встретимся завтра'], answer: 'Встретимся в следующий вторник' },
              { type: 'fill_blank', sentence: 'В этот ___ у нас экзамен.', hint: "('payshanba' so'zi)", options: ['четверг', 'четвергу', 'четверге', 'четвергом'], answer: 'четверг' },
              { type: 'match', pairs: [{ ru: 'На этой неделе', uz: 'Shu hafta' }, { ru: 'На прошлой неделе', uz: "O'tgan hafta" }, { ru: 'На следующей неделе', uz: 'Kelasi hafta' }, { ru: 'Каждую неделю', uz: 'Har hafta' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'На прошлой неделе я был занят', options: ["O'tgan hafta men band edim", 'Kelasi hafta men band bo\u2019laman', 'Bu hafta men bandman', 'Men hech qachon band emasman'], answer: "O'tgan hafta men band edim" },
              { type: 'fill_blank', sentence: 'Собрание состоится в следующий ___.', hint: "('dushanba' so'zi)", options: ['понедельник', 'понедельника', 'понедельнику', 'понедельником'], answer: 'понедельник' },
              { type: 'listening', audioText: 'Магазин закрыт по воскресеньям.', question: 'Do\u2019kon qachon yopiq?', options: ['Yakshanba kunlari', 'Dushanba kunlari', 'Har kuni', 'Faqat bayramlarda'], answer: 'Yakshanba kunlari' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Har kuni ertalab yuguraman', options: ['Я бегаю каждый день утром', 'Я бегаю раз в неделю', 'Я никогда не бегаю', 'Я бегаю только по субботам'], answer: 'Я бегаю каждый день утром' },
              { type: 'fill_blank', sentence: 'Рабочая неделя длится с понедельника ___ пятницу.', hint: "('gacha' predlogi)", options: ['по', 'до', 'к', 'от'], answer: 'по' },
              { type: 'order', prompt: 'Dushanbadan jumagacha ishlayman', tiles: ['Я', 'работаю', 'с', 'понедельника', 'по', 'пятницу'], answer: 'Я работаю с понедельника по пятницу' },
              { type: 'fill_blank', sentence: 'Через ___ дня у меня выходной.', hint: "('ikki' soni)", options: ['два', 'двое', 'вторых', 'второй'], answer: 'два' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Каждую среду мы ходим в бассейн', options: ["Har chorshanba biz basseynga boramiz", 'Har payshanba biz uyda qolamiz', "Biz hech qachon basseynga bormaymiz", 'Biz har kuni basseynga boramiz'], answer: "Har chorshanba biz basseynga boramiz" },
              { type: 'match', pairs: [{ ru: 'Будний день', uz: 'Ish kuni' }, { ru: 'Выходной день', uz: 'Dam olish kuni' }, { ru: 'Праздничный день', uz: 'Bayram kuni' }, { ru: 'Рабочая неделя', uz: 'Ish haftasi' }] },
              { type: 'fill_blank', sentence: 'Завтра ___ день, я не работаю.', hint: "('dam olish' sifati, erkak jinsi)", options: ['выходной', 'выходная', 'выходное', 'выходные'], answer: 'выходной' },
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
              { type: 'match', pairs: [{ ru: 'Чемпион', uz: 'Chempion' }, { ru: 'Рекорд', uz: 'Rekord' }, { ru: 'Тренер', uz: 'Murabbiy' }, { ru: 'Стадион', uz: 'Stadion' }] },
              { type: 'fill_blank', sentence: 'Он играет ___, чем я.', hint: "('yaxshiroq' — ravishning qiyosiy darajasi)", options: ['лучше', 'хорошо', 'хороший', 'лучший'], answer: 'лучше' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот спортсмен установил новый рекорд', options: ["Bu sportchi yangi rekord o'rnatdi", "Bu sportchi mag'lub bo'ldi", 'Bu sportchi chiqib ketdi', 'Bu sportchi kasal'], answer: "Bu sportchi yangi rekord o'rnatdi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Meningcha, bu jamoa g'olib bo'ladi", options: ['По-моему, эта команда победит', 'По-моему, эта команда проиграет', 'Я не болею ни за кого', 'Мне не интересен спорт'], answer: 'По-моему, эта команда победит' },
              { type: 'fill_blank', sentence: 'Наша команда ___ вчера.', hint: "('yutmoq' fe'lining o'tgan zamon, ayol jinsi)", options: ['выиграла', 'выиграл', 'выиграло', 'выиграли'], answer: 'выиграла' },
              { type: 'match', pairs: [{ ru: 'Выиграть', uz: 'Yutmoq' }, { ru: 'Проиграть', uz: 'Yutqazmoq' }, { ru: 'Забить гол', uz: 'Gol urmoq' }, { ru: 'Судья', uz: 'Hakam' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Судья принял несправедливое решение', options: ["Hakam adolatsiz qaror qabul qildi", "Hakam to'g'ri qaror qabul qildi", "Hakam o'yinni to'xtatdi", 'Hakam ketib qoldi'], answer: "Hakam adolatsiz qaror qabul qildi" },
              { type: 'fill_blank', sentence: 'Наш нападающий ___ два гола.', hint: "('urmoq' fe'lining o'tgan zamon, erkak jinsi)", options: ['забил', 'забила', 'забило', 'забили'], answer: 'забил' },
              { type: 'listening', audioText: 'Матч закончился со счётом два-один в нашу пользу.', question: "O'yin qanday tugadi?", options: ['2-1 bizning foydamizga', '1-0 raqib foydasiga', '0-0 durang', '3-2 raqib foydasiga'], answer: '2-1 bizning foydamizga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu musobaqa tarixiy edi', options: ['Этот матч был историческим', 'Этот матч был скучным', 'Этот матч отменили', 'Этот матч перенесли'], answer: 'Этот матч был историческим' },
              { type: 'order', prompt: 'Murabbiy jamoani tayyorlayapti', tiles: ['Тренер', 'готовит', 'команду'], answer: 'Тренер готовит команду' },
              { type: 'fill_blank', sentence: 'На чемпионате мира участвуют ___ команд.', hint: "('ko'p' so'zi)", options: ['много', 'мало', 'несколько', 'две'], answer: 'много' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это был лучший матч сезона', options: ["Bu mavsumning eng yaxshi o'yini edi", "Bu mavsumning eng yomon o'yini edi", 'Bu birinchi o\u2019yin edi', 'Bu oxirgi o\u2019yin edi'], answer: "Bu mavsumning eng yaxshi o'yini edi" },
              { type: 'match', pairs: [{ ru: 'Финал', uz: 'Final' }, { ru: 'Полуфинал', uz: 'Yarim final' }, { ru: 'Кубок', uz: 'Kubok' }, { ru: 'Медаль', uz: 'Medal' }] },
              { type: 'fill_blank', sentence: 'Он получил золотую ___.', hint: "('medal' so'zi)", options: ['медаль', 'медаля', 'медали', 'медалью'], answer: 'медаль' },
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
              { type: 'fill_blank', sentence: 'У них ___ большая проблема.', hint: "('edi' — ayol jinsidagi so'z uchun)", options: ['была', 'был', 'было', 'были'], answer: 'была' },
              { type: 'fill_blank', sentence: 'У тебя ___ хорошие оценки в школе?', hint: "('edi' — ko'plik uchun)", options: ['были', 'был', 'была', 'было'], answer: 'были' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У неё была интересная идея', options: ["Uning (ayol) qiziqarli fikri bor edi", "Uning qiziqarli fikri yo'q", 'Bizda qiziqarli fikr bor edi', "Ularda hech qanday fikr yo'q edi"], answer: "Uning (ayol) qiziqarli fikri bor edi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bizda dam olish kuni bor edi', options: ['У нас был выходной', 'У нас есть выходной', 'У нас будет выходной', 'У нас нет выходного'], answer: 'У нас был выходной' },
              { type: 'fill_blank', sentence: 'В прошлом году у меня ___ отпуск в Турции.', hint: "('edi' — erkak jinsidagi so'z uchun)", options: ['был', 'была', 'было', 'были'], answer: 'был' },
              { type: 'match', pairs: [{ ru: 'У нас была', uz: "Bizda edi (ayol so'z)" }, { ru: 'У нас был', uz: "Bizda edi (erkak so'z)" }, { ru: 'У нас было', uz: "Bizda edi (neytral so'z)" }, { ru: 'У нас были', uz: "Bizda edi (ko'plik)" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня не было денег на билет', options: ["Menda chiptaga pul yo'q edi", 'Menda pul bor edi', 'Menda chipta bor edi', 'Men chipta sotib oldim'], answer: "Menda chiptaga pul yo'q edi" },
              { type: 'fill_blank', sentence: 'У вас ___ трудности с этим заданием?', hint: "('edi' — ko'plik uchun)", options: ['были', 'был', 'была', 'было'], answer: 'были' },
              { type: 'listening', audioText: 'У нас было прекрасное путешествие в прошлом месяце.', question: "O'tgan oy nima bo'lgan edi?", options: ['Ajoyib sayohat', 'Yomon kunlar', 'Kasallik', 'Muammo'], answer: 'Ajoyib sayohat' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bizning o'qituvchimiz juda yaxshi edi", options: ['У нас был очень хороший учитель', 'У нас есть хороший учитель', 'У нас будет хороший учитель', 'У нас нет учителя'], answer: 'У нас был очень хороший учитель' },
              { type: 'order', prompt: "Kecha menda ko'p vazifa bor edi", tiles: ['Вчера', 'у', 'меня', 'было', 'много', 'заданий'], answer: 'Вчера у меня было много заданий' },
              { type: 'fill_blank', sentence: 'У них ___ большой дом за городом.', hint: "('edi' — erkak jinsidagi so'z uchun)", options: ['был', 'была', 'было', 'были'], answer: 'был' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня была возможность учиться за границей', options: ["Menda chet elda o'qish imkoniyati bor edi", "Menda hech qanday imkoniyat yo'q edi", "Men chet elda o'qidim", 'Men chet elga bormoqchiman'], answer: "Menda chet elda o'qish imkoniyati bor edi" },
              { type: 'match', pairs: [{ ru: 'Была возможность', uz: 'Imkoniyat bor edi' }, { ru: 'Был выбор', uz: 'Tanlov bor edi' }, { ru: 'Было время', uz: 'Vaqt bor edi' }, { ru: 'Были деньги', uz: 'Pul bor edi' }] },
              { type: 'fill_blank', sentence: 'У меня ___ время подумать.', hint: "('edi' — neytral so'z uchun)", options: ['было', 'был', 'была', 'были'], answer: 'было' },
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
              { type: 'fill_blank', sentence: 'Мы не ___ помочь вам сегодня.', hint: "('qila olmoq' fe'lining 'biz' shakli)", options: ['можем', 'могу', 'можешь', 'может'], answer: 'можем' },
              { type: 'fill_blank', sentence: 'Она ___ говорить на трёх языках.', hint: "('bilmoq/uddalamoq' fe'lining 'u' shakli)", options: ['умеет', 'умею', 'умеешь', 'умеем'], answer: 'умеет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Вы можете мне помочь?', options: ["Menga yordam bera olasizmi?", 'Sizga yordam kerakmi?', 'Men sizga yordam beraman', "Yordam kerak emas"], answer: "Menga yordam bera olasizmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men suzishni bilmayman', options: ['Я не умею плавать', 'Я не могу плавать сегодня', 'Я люблю плавать', 'Я хочу плавать'], answer: 'Я не умею плавать' },
              { type: 'fill_blank', sentence: 'Ты ___ водить машину?', hint: "('bilmoq/uddalamoq' fe'lining 'sen' shakli)", options: ['умеешь', 'умею', 'умеет', 'умеем'], answer: 'умеешь' },
              { type: 'match', pairs: [{ ru: 'Я могу', uz: 'Men qila olaman' }, { ru: 'Я умею', uz: 'Men bilaman/uddalayman' }, { ru: 'Я не могу', uz: 'Men qila olmayman' }, { ru: 'Я не умею', uz: 'Men bilmayman' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'К сожалению, я не смогу прийти', options: ["Afsuski, men kela olmayman", 'Men albatta kelaman', 'Men hozir kelyapman', 'Men kechikaman'], answer: "Afsuski, men kela olmayman" },
              { type: 'fill_blank', sentence: 'Дети ___ читать и писать.', hint: "('bilmoq/uddalamoq' fe'lining 'ular' shakli)", options: ['умеют', 'умеет', 'умею', 'умеем'], answer: 'умеют' },
              { type: 'listening', audioText: 'Я умею играть на пианино, но не умею петь.', question: 'U nimani bila oladi?', options: ['Pianino chalishni', "Qo'shiq aytishni", 'Ikkalasini ham', 'Hech narsani'], answer: 'Pianino chalishni' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu vazifani hal qila olamiz', options: ['Мы можем решить эту задачу', 'Мы не можем решить эту задачу', 'Задача уже решена', 'Задача не важна'], answer: 'Мы можем решить эту задачу' },
              { type: 'order', prompt: 'U velosiped haydashni biladi', tiles: ['Он', 'умеет', 'кататься', 'на', 'велосипеде'], answer: 'Он умеет кататься на велосипеде' },
              { type: 'fill_blank', sentence: 'Извините, я не ___ понять вас.', hint: "('qila olmoq' fe'lining 'men' shakli)", options: ['могу', 'можешь', 'может', 'можем'], answer: 'могу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он умеет готовить очень вкусно', options: ["U juda mazali ovqat pishirishni biladi", "U ovqat pishirishni bilmaydi", 'U faqat non yeydi', "U restoranda ishlaydi"], answer: "U juda mazali ovqat pishirishni biladi" },
              { type: 'match', pairs: [{ ru: 'Уметь плавать', uz: 'Suzishni bilmoq' }, { ru: 'Уметь готовить', uz: 'Ovqat pishirishni bilmoq' }, { ru: 'Уметь рисовать', uz: 'Rasm chizishni bilmoq' }, { ru: 'Уметь петь', uz: "Qo'shiq aytishni bilmoq" }] },
              { type: 'fill_blank', sentence: 'Мы ___ закончить проект вовремя.', hint: "('qila olmoq' fe'lining 'biz' shakli)", options: ['можем', 'могу', 'можешь', 'может'], answer: 'можем' },
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
              { type: 'fill_blank', sentence: 'Дети ___ над шуткой.', hint: "('kulmoq' fe'li, 3-shaxs ko'plik)", options: ['смеются', 'смеётся', 'смеюсь', 'смеёмся'], answer: 'смеются' },
              { type: 'fill_blank', sentence: 'Я ___ каждое утро в семь часов.', hint: "('uyg'onmoq' fe'li, 1-shaxs)", options: ['просыпаюсь', 'просыпается', 'просыпаешься', 'просыпаемся'], answer: 'просыпаюсь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я одеваюсь быстро по утрам', options: ["Men ertalab tez kiyinaman", 'Men ertalab sekin kiyinaman', 'Men kiyinishni yoqtirmayman', 'Men hech qachon kiyinmayman'], answer: "Men ertalab tez kiyinaman" },
              { type: 'choice', dir: 'uz2ru', prompt: "U bu yerda tug'ilgan", options: ['Он родился здесь', 'Он живёт здесь', 'Он умер здесь', 'Он работает здесь'], answer: 'Он родился здесь' },
              { type: 'fill_blank', sentence: 'Мы ___ друг другу вчера.', hint: "('uchrashmoq' fe'lining o'tgan zamon, ko'plik)", options: ['встретились', 'встретился', 'встретилась', 'встретилось'], answer: 'встретились' },
              { type: 'match', pairs: [{ ru: 'Просыпаться', uz: "Uyg'onmoq" }, { ru: 'Одеваться', uz: 'Kiyinmoq' }, { ru: 'Умываться', uz: 'Yuvinmoq' }, { ru: 'Причёсываться', uz: 'Sochini taramoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я умываюсь холодной водой', options: ["Men sovuq suvda yuvinaman", 'Men issiq suvda yuvinaman', "Men umuman yuvinmayman", 'Men dushga tushaman'], answer: "Men sovuq suvda yuvinaman" },
              { type: 'fill_blank', sentence: 'Он всегда ___ рано ложиться спать.', hint: "('odatlanmoq' fe'lining 'u' shakli)", options: ['привыкает', 'привык', 'привыкать', 'привыкают'], answer: 'привыкает' },
              { type: 'listening', audioText: 'Я всегда улыбаюсь, когда вижу друзей.', question: "Do'stlarini ko'rganda nima qiladi?", options: ['Tabassum qiladi', "Yig'laydi", 'Qochib ketadi', 'Gapirmaydi'], answer: 'Tabassum qiladi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu masala hal qilinmoqda', options: ['Эта проблема решается', 'Эта проблема не решается', 'Проблема уже решена', 'Проблема исчезла'], answer: 'Эта проблема решается' },
              { type: 'order', prompt: "U ertalab erta uyg'onadi", tiles: ['Она', 'рано', 'просыпается', 'утром'], answer: 'Она рано просыпается утром' },
              { type: 'fill_blank', sentence: 'Мы часто ___ по телефону.', hint: "('gaplashmoq' fe'lining 'biz' shakli)", options: ['общаемся', 'общаюсь', 'общаешься', 'общается'], answer: 'общаемся' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дверь открывается автоматически', options: ["Eshik avtomatik ochiladi", "Eshik qo'lda ochiladi", 'Eshik yopiq', 'Eshik buzilgan'], answer: "Eshik avtomatik ochiladi" },
              { type: 'match', pairs: [{ ru: 'Улыбаться', uz: 'Tabassum qilmoq' }, { ru: 'Смеяться', uz: 'Kulmoq' }, { ru: 'Плакать', uz: "Yig'lamoq" }, { ru: 'Общаться', uz: 'Muloqot qilmoq' }] },
              { type: 'fill_blank', sentence: 'Мне трудно ___ к новому расписанию.', hint: "('odatlanmoq' fe'lining infinitivi)", options: ['привыкнуть', 'привыкать', 'привыкаю', 'привыкает'], answer: 'привыкнуть' },
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
              { type: 'fill_blank', sentence: 'Спектакль ___ через час.', hint: "('boshlanmoq' fe'li, 3-shaxs birlik)", options: ['начинается', 'начинает', 'начинаюсь', 'начинаемся'], answer: 'начинается' },
              { type: 'fill_blank', sentence: 'Урок уже ___.', hint: "('tugamoq' fe'li, o'tgan zamon, erkak jinsi)", options: ['закончился', 'закончилась', 'закончилось', 'закончились'], answer: 'закончился' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Учебный год начинается первого сентября', options: ["O'quv yili birinchi sentabrda boshlanadi", "O'quv yili yozda boshlanadi", "O'quv yili tugadi", "O'quv yili qishda boshlanadi"], answer: "O'quv yili birinchi sentabrda boshlanadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu ertak yaxshi tugaydi', options: ['Эта сказка хорошо заканчивается', 'Эта сказка плохо начинается', 'Эта сказка никогда не заканчивается', 'Эта сказка грустная'], answer: 'Эта сказка хорошо заканчивается' },
              { type: 'fill_blank', sentence: 'Каникулы ___ через неделю.', hint: "('boshlanmoq' fe'li, 3-shaxs birlik)", options: ['начинаются', 'начинается', 'начинаюсь', 'начинаемся'], answer: 'начинаются' },
              { type: 'match', pairs: [{ ru: 'Начало', uz: 'Boshlanish' }, { ru: 'Конец', uz: 'Oxir/Tugash' }, { ru: 'Середина', uz: "O'rtasi" }, { ru: 'Продолжение', uz: 'Davomi' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это только начало нашей истории', options: ["Bu bizning tariximizning boshi xolos", 'Bu bizning tariximizning oxiri', 'Hikoyamiz tugadi', "Hikoya yo'q"], answer: "Bu bizning tariximizning boshi xolos" },
              { type: 'fill_blank', sentence: 'Собрание ___ в три часа дня.', hint: "('boshlanmoq' fe'li, 3-shaxs birlik)", options: ['начинается', 'начинает', 'начинаюсь', 'начинаемся'], answer: 'начинается' },
              { type: 'listening', audioText: 'Фильм начинается в восемь и заканчивается в десять.', question: "Film qancha davom etadi?", options: ['Ikki soat', 'Bir soat', 'Uch soat', "To'rt soat"], answer: 'Ikki soat' },
              { type: 'choice', dir: 'uz2ru', prompt: "Konsert soat to'qqizda tugaydi", options: ['Концерт заканчивается в девять', 'Концерт начинается в девять', 'Концерт отменён', 'Концерт продолжается'], answer: 'Концерт заканчивается в девять' },
              { type: 'order', prompt: 'Bayram ertaga boshlanadi', tiles: ['Праздник', 'начинается', 'завтра'], answer: 'Праздник начинается завтра' },
              { type: 'fill_blank', sentence: 'Наши отношения только ___.', hint: "('boshlanmoq' fe'lining o'tgan zamon, ko'plik)", options: ['начались', 'начался', 'началась', 'началось'], answer: 'начались' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Всё хорошее когда-нибудь заканчивается', options: ["Har qanday yaxshi narsa qachondir tugaydi", 'Yaxshi narsalar hech qachon tugamaydi', 'Faqat yomon narsalar tugaydi', "Hech narsa o'zgarmaydi"], answer: "Har qanday yaxshi narsa qachondir tugaydi" },
              { type: 'match', pairs: [{ ru: 'В начале месяца', uz: 'Oy boshida' }, { ru: 'В конце года', uz: 'Yil oxirida' }, { ru: 'В середине недели', uz: "Hafta o'rtasida" }, { ru: 'С самого начала', uz: 'Boshidanoq' }] },
              { type: 'fill_blank', sentence: 'Экзамены ___ в июне.', hint: "('boshlanmoq' fe'li, 3-shaxs ko'plik)", options: ['начинаются', 'начинается', 'начинаюсь', 'начинаемся'], answer: 'начинаются' },
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
              { type: 'fill_blank', sentence: 'Он ___ учиться в университете.', hint: "('bo'lmoq' fe'lining kelasi zamon 'u' shakli)", options: ['будет', 'буду', 'будешь', 'будем'], answer: 'будет' },
              { type: 'fill_blank', sentence: 'Вы ___ участвовать в конкурсе?', hint: "('bo'lmoq' fe'lining kelasi zamon 'siz' shakli)", options: ['будете', 'буду', 'будешь', 'будет'], answer: 'будете' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Они будут путешествовать по Европе', options: ["Ular Yevropa bo'ylab sayohat qilishadi", 'Ular Yevropada yashashadi', "Ular Yevropaga ketmaydi", "Ular Yevropadan qaytishadi"], answer: "Ular Yevropa bo'ylab sayohat qilishadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Sen kelasi yil bitirasan', options: ['Ты будешь заканчивать в следующем году', 'Ты закончил в прошлом году', 'Ты учишься сейчас', 'Ты никогда не закончишь'], answer: 'Ты будешь заканчивать в следующем году' },
              { type: 'fill_blank', sentence: 'Что ты ___ делать вечером?', hint: "('bo'lmoq' fe'lining kelasi zamon 'sen' shakli)", options: ['будешь', 'буду', 'будет', 'будем'], answer: 'будешь' },
              { type: 'match', pairs: [{ ru: 'Я буду читать', uz: "Men o'qiyman (kelasi)" }, { ru: 'Ты будешь писать', uz: 'Sen yozasan (kelasi)' }, { ru: 'Он будет работать', uz: 'U ishlaydi (kelasi)' }, { ru: 'Мы будем учиться', uz: "Biz o'qiymiz (kelasi)" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'В следующем месяце я буду в Москве', options: ["Kelasi oy men Moskvada bo'laman", "O'tgan oy men Moskvada edim", "Men hech qachon Moskvaga bormayman", "Men Moskvani yaxshi ko'raman"], answer: "Kelasi oy men Moskvada bo'laman" },
              { type: 'fill_blank', sentence: 'Скоро мы ___ жить в новой квартире.', hint: "('bo'lmoq' fe'lining kelasi zamon 'biz' shakli)", options: ['будем', 'буду', 'будешь', 'будете'], answer: 'будем' },
              { type: 'listening', audioText: 'Завтра я буду отдыхать весь день.', question: 'Ertaga nima qiladi?', options: ['Butun kun dam oladi', 'Ishlaydi', 'Sayohat qiladi', "O'qiydi"], answer: 'Butun kun dam oladi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ular kelasi hafta imtihon topshirishadi', options: ['Они будут сдавать экзамен на следующей неделе', 'Они сдали экзамен', 'Они не будут сдавать экзамен', 'У них нет экзамена'], answer: 'Они будут сдавать экзамен на следующей неделе' },
              { type: 'order', prompt: 'Biz kelasi yil sayohat qilamiz', tiles: ['Мы', 'будем', 'путешествовать', 'в', 'следующем', 'году'], answer: 'Мы будем путешествовать в следующем году' },
              { type: 'fill_blank', sentence: 'Я надеюсь, что всё ___ хорошо.', hint: "('bo'lmoq' fe'lining kelasi zamon 'u (neytral)' shakli)", options: ['будет', 'буду', 'будешь', 'будем'], answer: 'будет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он будет очень рад вас видеть', options: ["U sizni ko'rganidan juda xursand bo'ladi", "U sizni ko'rishni xohlamaydi", "U hozir xursand", "U sizni unutdi"], answer: "U sizni ko'rganidan juda xursand bo'ladi" },
              { type: 'match', pairs: [{ ru: 'Скоро', uz: 'Tez orada' }, { ru: 'В будущем', uz: 'Kelajakda' }, { ru: 'Через год', uz: 'Bir yildan keyin' }, { ru: 'На следующей неделе', uz: 'Kelasi hafta' }] },
              { type: 'fill_blank', sentence: 'Мои дети ___ говорить на трёх языках.', hint: "('bo'lmoq' fe'lining kelasi zamon 'ular' shakli)", options: ['будут', 'будет', 'буду', 'будем'], answer: 'будут' },
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
              { type: 'fill_blank', sentence: 'Ты ___ меня?', hint: "('eshitmoq' fe'li, 2-shaxs)", options: ['слышишь', 'слушаешь', 'слышу', 'слушаю'], answer: 'слышишь' },
              { type: 'fill_blank', sentence: 'Она внимательно ___ учителя.', hint: "('tinglamoq' fe'li, 3-shaxs — diqqat bilan)", options: ['слушает', 'слышит', 'слушаю', 'слышу'], answer: 'слушает' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я слышу шум за окном', options: ["Deraza tashqarisida shovqin eshityapman", 'Men musiqa tinglayapman', 'Men gapiryapman', 'Men uxlayapman'], answer: "Deraza tashqarisida shovqin eshityapman" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har kuni yangiliklarni tinglayman', options: ['Я слушаю новости каждый день', 'Я слышу новости иногда', 'Я не слушаю радио', 'Я смотрю телевизор'], answer: 'Я слушаю новости каждый день' },
              { type: 'fill_blank', sentence: 'Вы ___ этот шум?', hint: "('eshitmoq' fe'li, 2-shaxs, hurmat shakli)", options: ['слышите', 'слушаете', 'слышу', 'слушаю'], answer: 'слышите' },
              { type: 'match', pairs: [{ ru: 'Слышать шум', uz: 'Shovqin eshitmoq' }, { ru: "Слушать лекцию", uz: "Ma'ruzani tinglamoq" }, { ru: 'Слышать голос', uz: 'Ovoz eshitmoq' }, { ru: 'Слушать подкаст', uz: 'Podkast tinglamoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети внимательно слушают сказку', options: ["Bolalar ertakni diqqat bilan tinglashyapti", "Bolalar ertakni o'qishyapti", 'Bolalar ertakni yozishyapti', 'Bolalar uxlab qolishdi'], answer: "Bolalar ertakni diqqat bilan tinglashyapti" },
              { type: 'fill_blank', sentence: 'Я не ___ тебя, повтори, пожалуйста.', hint: "('eshitmoq' fe'li, 1-shaxs)", options: ['слышу', 'слушаю', 'слышишь', 'слушаешь'], answer: 'слышу' },
              { type: 'listening', audioText: 'Я слушаю подкасты по дороге на работу.', question: 'Ishga borayotganda nima qiladi?', options: ['Podkast tinglaydi', 'Musiqa yozadi', "Gazeta o'qiydi", 'Gaplashadi'], answer: 'Podkast tinglaydi' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Sizni yaxshi eshitmayapman', options: ['Я вас плохо слышу', 'Я вас хорошо слышу', 'Я вас не слушаю', 'Я вас вижу'], answer: 'Я вас плохо слышу' },
              { type: 'order', prompt: 'Men konsertda musiqa tingladim', tiles: ['Я', 'слушал', 'музыку', 'на', 'концерте'], answer: 'Я слушал музыку на концерте' },
              { type: 'fill_blank', sentence: 'Мы ___ интересную историю от бабушки.', hint: "('eshitmoq' fe'lining o'tgan zamon, ko'plik)", options: ['услышали', 'услышал', 'слушали', 'слышали'], answer: 'услышали' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я слышал, что ты переезжаешь', options: ["Men sen ko'chib o'tishing haqida eshitdim", 'Men senga qo\u2019ng\u2019iroq qildim', "Men seni ko'rdim", "Men sendan xat oldim"], answer: "Men sen ko'chib o'tishing haqida eshitdim" },
              { type: 'match', pairs: [{ ru: 'Слух', uz: 'Eshitish qobiliyati' }, { ru: 'Звук', uz: 'Tovush' }, { ru: 'Тишина', uz: 'Sukunat' }, { ru: 'Громкость', uz: 'Ovoz balandligi' }] },
              { type: 'fill_blank', sentence: 'У бабушки плохой ___.', hint: "('eshitish qobiliyati' so'zi)", options: ['слух', 'звук', 'шум', 'голос'], answer: 'слух' },
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
              { type: 'fill_blank', sentence: 'Он ___ интересный сон.', hint: "('ko'rmoq' fe'lining o'tgan zamon, erkak jinsi)", options: ['видел', 'видела', 'видело', 'видели'], answer: 'видел' },
              { type: 'fill_blank', sentence: 'Мы ___ новости каждый вечер.', hint: "('tomosha qilmoq' fe'li, 1-shaxs ko'plik)", options: ['смотрим', 'видим', 'смотрите', 'видите'], answer: 'смотрим' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я видел твою маму вчера', options: ["Men kecha onangni ko'rdim", 'Men onangni bilaman', "Men onangga qo'ng'iroq qildim", 'Men onang bilan gaplashdim'], answer: "Men kecha onangni ko'rdim" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men bu filmni ko'rmoqchiman", options: ['Я хочу посмотреть этот фильм', 'Я уже видел этот фильм', 'Я не люблю фильмы', 'Я забыл этот фильм'], answer: 'Я хочу посмотреть этот фильм' },
              { type: 'fill_blank', sentence: 'Ты ___ этот сериал?', hint: "('tomosha qilmoq' fe'li, 2-shaxs, o'tgan zamon)", options: ['смотрел', 'видел', 'смотрю', 'вижу'], answer: 'смотрел' },
              { type: 'match', pairs: [{ ru: 'Видеть сон', uz: "Tush ko'rmoq" }, { ru: 'Смотреть сериал', uz: 'Serial tomosha qilmoq' }, { ru: 'Видеть разницу', uz: "Farqni ko'rmoq" }, { ru: 'Смотреть в окно', uz: 'Derazadan qaramoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я вижу большую разницу между ними', options: ["Ular orasida katta farq ko'ryapman", 'Ular bir xil', "Men ularni ko'rmayapman", 'Men ularni tanimayman'], answer: "Ular orasida katta farq ko'ryapman" },
              { type: 'fill_blank', sentence: 'Дети ___ мультфильмы по субботам.', hint: "('tomosha qilmoq' fe'li, 3-shaxs ko'plik)", options: ['смотрят', 'видят', 'смотрит', 'видит'], answer: 'смотрят' },
              { type: 'listening', audioText: 'Я вижу знакомое лицо в толпе.', question: "Nimani ko'ryapti?", options: ['Tanish yuzni', 'Notanish odamni', 'Hech kimni', "Do'stini"], answer: 'Tanish yuzni' },
              { type: 'choice', dir: 'uz2ru', prompt: "Sen bu yerdan tog'larni ko'ryapsanmi?", options: ['Ты видишь отсюда горы?', 'Ты смотришь на горы?', 'Ты был в горах?', 'Ты любишь горы?'], answer: 'Ты видишь отсюда горы?' },
              { type: 'order', prompt: 'Biz kecha yangi film ko\u2019rdik', tiles: ['Мы', 'вчера', 'смотрели', 'новый', 'фильм'], answer: 'Мы вчера смотрели новый фильм' },
              { type: 'fill_blank', sentence: 'Я давно не ___ своих друзей.', hint: "('ko'rmoq' fe'li, 1-shaxs)", options: ['видел', 'смотрел', 'вижу', 'смотрю'], answer: 'видел' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он смотрит на часы каждые пять минут', options: ["U har besh daqiqada soatga qaraydi", "U soatni ko'rmaydi", 'U soatsiz yuradi', 'U vaqtni bilmaydi'], answer: "U har besh daqiqada soatga qaraydi" },
              { type: 'match', pairs: [{ ru: 'Взгляд', uz: 'Qarash' }, { ru: 'Зрение', uz: "Ko'rish qobiliyati" }, { ru: 'Экран', uz: 'Ekran' }, { ru: 'Изображение', uz: 'Tasvir' }] },
              { type: 'fill_blank', sentence: 'У него отличное ___.', hint: "('ko'rish qobiliyati' so'zi)", options: ['зрение', 'взгляд', 'экран', 'изображение'], answer: 'зрение' },
            ],
          },
          {
            id: 25, title: "Sog'liq haqida", icon: HeartPulse,
            questions: [
              { type: 'choice', dir: 'ru2uz', prompt: 'Здоровый образ жизни очень важен', options: ["Sog'lom turmush tarzi juda muhim", "Kasal bo'lish yaxshi", 'Sport zararli', 'Ovqatlanish muhim emas'], answer: "Sog'lom turmush tarzi juda muhim" },
              { type: 'fill_blank', sentence: 'Чтобы быть здоровым, нужно ___ спортом регулярно.', hint: "('shug'ullanmoq' fe'lining infinitiv shakli)", options: ['заниматься', 'занимался', 'занимаюсь', 'занимается'], answer: 'заниматься' },
              { type: 'choice', dir: 'uz2ru', prompt: "Kamroq shakar iste'mol qilish kerak", options: ['Нужно есть меньше сахара', 'Нужно есть больше сахара', 'Сахар полезен', 'Сахар не важен'], answer: 'Нужно есть меньше сахара' },
              { type: 'match', pairs: [{ ru: 'Здоровье', uz: "Sog'liq" }, { ru: 'Питание', uz: 'Ovqatlanish' }, { ru: 'Иммунитет', uz: 'Immunitet' }, { ru: 'Привычка', uz: 'Odat' }] },
              { type: 'order', prompt: "Sog'liq — bu eng katta boylik", tiles: ['Здоровье', 'это', 'самое', 'большое', 'богатство'], answer: 'Здоровье это самое большое богатство' },
              { type: 'match', pairs: [{ ru: 'Витамины', uz: 'Vitaminlar' }, { ru: 'Физкультура', uz: 'Jismoniy tarbiya' }, { ru: 'Сон', uz: 'Uyqu' }, { ru: 'Стресс', uz: 'Stress' }] },
              { type: 'fill_blank', sentence: 'Важно спать не менее ___ часов.', hint: "('sakkiz' soni)", options: ['восьми', 'восемь', 'восьмой', 'восьмом'], answer: 'восьми' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Стресс негативно влияет на здоровье', options: ["Stress sog'liqqa salbiy ta'sir qiladi", 'Stress foydali', 'Stress muhim emas', 'Stress hech narsaga ta\u2019sir qilmaydi'], answer: "Stress sog'liqqa salbiy ta'sir qiladi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Har kuni suv ko'p ichish kerak", options: ['Нужно пить много воды каждый день', 'Не нужно пить воду', 'Вода не важна', 'Нужно пить только чай'], answer: 'Нужно пить много воды каждый день' },
              { type: 'fill_blank', sentence: 'Курение очень ___ для здоровья.', hint: "('zararli' sifati, neytral so'z uchun)", options: ['вредно', 'вредный', 'вредная', 'вредные'], answer: 'вредно' },
              { type: 'match', pairs: [{ ru: 'Профилактика', uz: 'Profilaktika' }, { ru: 'Вакцинация', uz: 'Emlash' }, { ru: 'Диагностика', uz: 'Diagnostika' }, { ru: 'Лечение', uz: 'Davolash' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Регулярные проверки помогают предотвратить болезни', options: ["Muntazam tekshiruvlar kasalliklarni oldini olishga yordam beradi", 'Tekshiruv shart emas', "Kasallikni oldini olib bo'lmaydi", "Faqat kasal bo'lgach shifokorga borish kerak"], answer: "Muntazam tekshiruvlar kasalliklarni oldini olishga yordam beradi" },
              { type: 'fill_blank', sentence: 'Ежедневная ___ полезна для сердца.', hint: "('yurish' so'zi)", options: ['прогулка', 'прогулку', 'прогулки', 'прогулкой'], answer: 'прогулка' },
              { type: 'listening', audioText: 'Здоровое питание и физическая активность улучшают качество жизни.', question: 'Nima hayot sifatini yaxshilaydi?', options: ["Sog'lom ovqatlanish va jismoniy faollik", 'Faqat dam olish', 'Faqat ovqatlanish', 'Faqat sport'], answer: "Sog'lom ovqatlanish va jismoniy faollik" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Yurak uchun sport foydali', options: ['Спорт полезен для сердца', 'Спорт вреден для сердца', 'Спорт не влияет на сердце', 'Спорт опасен'], answer: 'Спорт полезен для сердца' },
              { type: 'order', prompt: "Sog'lom bo'lish uchun yaxshi uxlash kerak", tiles: ['Чтобы', 'быть', 'здоровым,', 'нужно', 'хорошо', 'спать'], answer: 'Чтобы быть здоровым, нужно хорошо спать' },
              { type: 'fill_blank', sentence: 'Врачи рекомендуют избегать ___ пищи.', hint: "('yog'li' sifatining qaratqich kelishigi)", options: ['жирной', 'жирная', 'жирную', 'жирное'], answer: 'жирной' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Психическое здоровье так же важно, как физическое', options: ["Ruhiy sog'liq jismoniy sog'liq kabi muhim", "Faqat jismoniy sog'liq muhim", "Ruhiy sog'liq ahamiyatsiz", "Faqat ruhiy sog'liq muhim"], answer: "Ruhiy sog'liq jismoniy sog'liq kabi muhim" },
              { type: 'match', pairs: [{ ru: 'Физическое здоровье', uz: "Jismoniy sog'liq" }, { ru: 'Психическое здоровье', uz: "Ruhiy sog'liq" }, { ru: 'Крепкий иммунитет', uz: 'Kuchli immunitet' }, { ru: 'Плохое самочувствие', uz: 'Yomon holat' }] },
              { type: 'fill_blank', sentence: 'Хороший сон укрепляет ___.', hint: "('immunitet' so'zi, tushum kelishigi)", options: ['иммунитет', 'иммунитета', 'иммунитету', 'иммунитетом'], answer: 'иммунитет' },
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
              { type: 'fill_blank', sentence: 'Дорога была закрыта, ___ мы опоздали.', hint: "('shuning uchun' — natija bog'lovchisi)", options: ['поэтому', 'потому что', 'и', 'а'], answer: 'поэтому' },
              { type: 'fill_blank', sentence: 'Я рад, ___ ты приехал.', hint: "('chunki' — sabab bog'lovchisi)", options: ['потому что', 'поэтому', 'но', 'или'], answer: 'потому что' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не пошёл гулять, потому что шёл дождь', options: ["Men sayr qilishga bormadim, chunki yomg'ir yog'ayotgan edi", "Men sayr qilishga bordim, chunki yomg'ir yo'q edi", 'Men uyda qoldim, chunki charchagandim', 'Men sayr qilishni yoqtiraman'], answer: "Men sayr qilishga bormadim, chunki yomg'ir yog'ayotgan edi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'U kasal, shuning uchun uyda qoldi', options: ['Он болен, поэтому остался дома', 'Он болен, потому что остался дома', 'Он здоров, поэтому пошёл гулять', 'Он не болен'], answer: 'Он болен, поэтому остался дома' },
              { type: 'fill_blank', sentence: 'Мы устали, ___ решили отдохнуть.', hint: "('shuning uchun' — natija bog'lovchisi)", options: ['поэтому', 'потому что', 'и', 'а'], answer: 'поэтому' },
              { type: 'match', pairs: [{ ru: 'Из-за того что', uz: 'Sababli' }, { ru: 'Благодаря тому что', uz: 'Tufayli (ijobiy)' }, { ru: 'В результате', uz: 'Natijada' }, { ru: 'Следовательно', uz: 'Demak' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Благодаря тому что мы готовились, мы сдали экзамен', options: ["Tayyorlangan bo'lganimiz uchun, imtihonni topshirdik", "Tayyorlanmagan bo'lsak ham, imtihonni topshirdik", 'Imtihon oson edi', 'Biz imtihonga bormadik'], answer: "Tayyorlangan bo'lganimiz uchun, imtihonni topshirdik" },
              { type: 'fill_blank', sentence: 'Он опоздал, ___ проспал.', hint: "('chunki' — sabab bog'lovchisi)", options: ['потому что', 'поэтому', 'но', 'если'], answer: 'потому что' },
              { type: 'listening', audioText: 'У меня болит голова, поэтому я не пойду на работу.', question: 'Nega ishga bormaydi?', options: ["Boshi og'riyapti", 'Charchagan', 'Dam olmoqchi', 'Sayohatga ketyapti'], answer: "Boshi og'riyapti" },
              { type: 'choice', dir: 'uz2ru', prompt: "Vaqtim yo'q edi, shuning uchun kelmadim", options: ['У меня не было времени, поэтому я не пришёл', 'У меня было время, но я не пришёл', 'Я забыл, потому что был занят', 'Я пришёл вовремя'], answer: 'У меня не было времени, поэтому я не пришёл' },
              { type: 'order', prompt: 'Men band edim, shuning uchun javob bermadim', tiles: ['Я', 'был', 'занят,', 'поэтому', 'не', 'ответил'], answer: 'Я был занят, поэтому не ответил' },
              { type: 'fill_blank', sentence: 'Экзамен отменили, ___ учитель заболел.', hint: "('chunki' — sabab bog'lovchisi)", options: ['потому что', 'поэтому', 'и', 'а'], answer: 'потому что' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Так как было поздно, мы пошли домой', options: ["Kech bo'lgani uchun uyga ketdik", 'Erta bo\u2019lgani uchun qoldik', 'Biz umuman ketmadik', 'Biz mehmonxonaga ketdik'], answer: "Kech bo'lgani uchun uyga ketdik" },
              { type: 'match', pairs: [{ ru: 'Так как', uz: 'Chunki (rasmiy)' }, { ru: 'Поэтому', uz: 'Shuning uchun' }, { ru: 'Из-за этого', uz: 'Shu sababdan' }, { ru: 'Ведь', uz: 'Axir' }] },
              { type: 'fill_blank', sentence: 'Она плакала, ___ была очень расстроена.', hint: "('chunki' — sabab bog'lovchisi)", options: ['потому что', 'поэтому', 'и', 'а'], answer: 'потому что' },
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
              { type: 'match', pairs: [{ ru: 'Пресса', uz: 'Matbuot' }, { ru: 'Радио', uz: 'Radio' }, { ru: 'Интернет', uz: 'Internet' }, { ru: 'Журналист', uz: 'Jurnalist' }] },
              { type: 'fill_blank', sentence: 'Я читаю новости в ___.', hint: "('internet' so'zi, joy-payt kelishigi)", options: ['интернете', 'интернет', 'интернету', 'интернетом'], answer: 'интернете' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Реклама прерывает мой любимый сериал', options: ["Reklama sevimli serialimni to'xtatadi", 'Reklama sevimli serialim', "Men reklamani yaxshi ko'raman", 'Serial hech qachon to\u2019xtamaydi'], answer: "Reklama sevimli serialimni to'xtatadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu jurnalist mashhur', options: ['Этот журналист известный', 'Этот журналист новый', 'Этот журналист молодой', 'Этот журналист скучный'], answer: 'Этот журналист известный' },
              { type: 'fill_blank', sentence: 'Эта ___ выходит каждый день.', hint: "('gazeta' so'zi)", options: ['газета', 'газету', 'газеты', 'газетой'], answer: 'газета' },
              { type: 'match', pairs: [{ ru: 'Ведущий', uz: 'Boshlovchi' }, { ru: 'Диктор', uz: 'Diktor' }, { ru: 'Репортаж', uz: 'Reportaj' }, { ru: 'Интервью', uz: 'Intervyu' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Диктор читает новости спокойным голосом', options: ["Diktor yangiliklarni sokin ovozda o'qiydi", 'Diktor qichqiryapti', 'Diktor kuladi', "Diktor jim turibdi"], answer: "Diktor yangiliklarni sokin ovozda o'qiydi" },
              { type: 'fill_blank', sentence: 'Я не смотрю ___ телеканал.', hint: "('bu' ko'rsatish olmoshi, erkak jinsi)", options: ['этот', 'эта', 'это', 'эти'], answer: 'этот' },
              { type: 'listening', audioText: 'В новостях сегодня рассказали о новом законе.', question: 'Yangiliklarda nima haqida gapirilgan?', options: ['Yangi qonun haqida', 'Sport haqida', 'Ob-havo haqida', 'Musiqa haqida'], answer: 'Yangi qonun haqida' },
              { type: 'choice', dir: 'uz2ru', prompt: "Men ijtimoiy tarmoqlarda ko'p vaqt sarflayman", options: ['Я много времени провожу в социальных сетях', 'Я не пользуюсь интернетом', 'Я редко читаю новости', 'Я не смотрю телевизор'], answer: 'Я много времени провожу в социальных сетях' },
              { type: 'order', prompt: 'Bu kanal juda mashhur', tiles: ['Этот', 'канал', 'очень', 'популярный'], answer: 'Этот канал очень популярный' },
              { type: 'fill_blank', sentence: 'Многие люди больше не смотрят ___.', hint: "('televizor' so'zi, tushum kelishigi)", options: ['телевизор', 'телевизора', 'телевизору', 'телевизором'], answer: 'телевизор' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Социальные сети сильно влияют на молодёжь', options: ["Ijtimoiy tarmoqlar yoshlarga kuchli ta'sir qiladi", "Ijtimoiy tarmoqlar hech kimga ta'sir qilmaydi", "Faqat kattalar ijtimoiy tarmoqdan foydalanadi", "Ijtimoiy tarmoq foydasiz"], answer: "Ijtimoiy tarmoqlar yoshlarga kuchli ta'sir qiladi" },
              { type: 'match', pairs: [{ ru: 'Социальные сети', uz: 'Ijtimoiy tarmoqlar' }, { ru: 'Блогер', uz: 'Bloger' }, { ru: 'Подписчик', uz: 'Obunachi' }, { ru: 'Прямой эфир', uz: "To'g'ridan-to'g'ri efir" }] },
              { type: 'fill_blank', sentence: 'Этот блогер имеет миллион ___.', hint: "('obunachi' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['подписчиков', 'подписчик', 'подписчикам', 'подписчиками'], answer: 'подписчиков' },
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
              { type: 'fill_blank', sentence: 'Куда ты сейчас ___?', hint: "('bormoq' — hozir, bir yo'nalishda, 2-shaxs)", options: ['идёшь', 'ходишь', 'иду', 'хожу'], answer: 'идёшь' },
              { type: 'fill_blank', sentence: 'Она каждый день ___ на работу пешком.', hint: "('bormoq' — takroriy, 3-shaxs)", options: ['ходит', 'идёт', 'хожу', 'иду'], answer: 'ходит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы идём в кино сейчас', options: ["Biz hozir kinoga ketyapmiz", 'Biz doim kinoga boramiz', 'Biz kinodan qaytdik', "Biz kinoni yaxshi ko'ramiz"], answer: "Biz hozir kinoga ketyapmiz" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har yakshanba masjidga boraman', options: ['Я хожу в мечеть каждое воскресенье', 'Я иду в мечеть сейчас', 'Я никогда не хожу в мечеть', 'Я был в мечети вчера'], answer: 'Я хожу в мечеть каждое воскресенье' },
              { type: 'fill_blank', sentence: 'Дети ___ в школу каждое утро.', hint: "('bormoq' — takroriy, ko'plik)", options: ['ходят', 'идут', 'ходит', 'идёт'], answer: 'ходят' },
              { type: 'match', pairs: [{ ru: 'Идти быстро', uz: 'Tez yurmoq (hozir)' }, { ru: 'Ходить медленно', uz: 'Sekin yurmoq (odatda)' }, { ru: 'Идти домой', uz: 'Uyga ketmoq (hozir)' }, { ru: 'Ходить в спортзал', uz: 'Sport zaliga bormoq (odatda)' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он идёт медленно, потому что устал', options: ["U sekin yuryapti, chunki charchagan", 'U tez yuryapti', 'U yugurmoqda', "U to'xtab qoldi"], answer: "U sekin yuryapti, chunki charchagan" },
              { type: 'fill_blank', sentence: 'Я ___ в бассейн два раза в неделю.', hint: "('bormoq' — takroriy, 1-shaxs)", options: ['хожу', 'иду', 'ходишь', 'идёшь'], answer: 'хожу' },
              { type: 'listening', audioText: 'Куда ты идёшь? Я иду в библиотеку.', question: 'U qayerga ketyapti?', options: ['Kutubxonaga', 'Maktabga', 'Uyga', "Do'konga"], answer: 'Kutubxonaga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz odatda oqshomlari sayr qilamiz', options: ['Мы обычно гуляем по вечерам', 'Мы гуляем сейчас', 'Мы никогда не гуляем', 'Мы гуляли вчера'], answer: 'Мы обычно гуляем по вечерам' },
              { type: 'order', prompt: "U hozir do'konga ketyapti", tiles: ['Она', 'сейчас', 'идёт', 'в', 'магазин'], answer: 'Она сейчас идёт в магазин' },
              { type: 'fill_blank', sentence: 'Вы часто ___ в театр?', hint: "('bormoq' — takroriy, 2-shaxs ko'plik)", options: ['ходите', 'идёте', 'ходишь', 'идёшь'], answer: 'ходите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я иду за хлебом', options: ["Men non olgani ketyapman", 'Men non yeyapman', 'Men nonni sevmayman', 'Men nonsiz yashayman'], answer: "Men non olgani ketyapman" },
              { type: 'match', pairs: [{ ru: 'Идти на встречу', uz: 'Uchrashuvga ketmoq (hozir)' }, { ru: 'Ходить на курсы', uz: 'Kurslarga bormoq (odatda)' }, { ru: 'Идти к врачу', uz: 'Shifokorga ketmoq (hozir)' }, { ru: 'Ходить пешком', uz: 'Piyoda yurmoq (odatda)' }] },
              { type: 'fill_blank', sentence: 'Обычно я ___ пешком, но сегодня еду на автобусе.', hint: "('bormoq' — takroriy, 1-shaxs)", options: ['хожу', 'иду', 'ходишь', 'идёшь'], answer: 'хожу' },
            ],
          },
          {
            id: 108, title: "Yurish fe'llari: ехать/ездить", icon: CarFront,
            questions: [
              { type: 'fill_blank', sentence: 'Сейчас мы ___ на работу.', hint: "('bormoq' — transportda, hozir)", options: ['едем', 'ездим', 'едешь', 'ездишь'], answer: 'едем' },
              { type: 'fill_blank', sentence: 'Каждое лето мы ___ на море.', hint: "('bormoq' — transportda, takroriy)", options: ['ездим', 'едем', 'ездишь', 'едешь'], answer: 'ездим' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы едем на машине.', options: ['Biz mashinada ketyapmiz', 'Biz piyoda ketyapmiz', 'Biz uchib ketyapmiz', 'Biz suzib ketyapmiz'], answer: 'Biz mashinada ketyapmiz' },
              { type: 'match', pairs: [{ ru: 'Ехать', uz: 'Bormoq (transportda, hozir)' }, { ru: 'Ездить', uz: 'Bormoq (transportda, doim)' }, { ru: 'Поезд', uz: 'Poyezd' }, { ru: 'Автобус', uz: 'Avtobus' }] },
              { type: 'order', prompt: 'Biz poyezdda Samarqandga boramiz', tiles: ['Мы', 'едем', 'в', 'Самарканд', 'на', 'поезде'], answer: 'Мы едем в Самарканд на поезде' },
              { type: 'fill_blank', sentence: 'Куда вы сейчас ___?', hint: "('bormoq' — transportda, hozir, 2-shaxs)", options: ['едете', 'ездите', 'едешь', 'ездишь'], answer: 'едете' },
              { type: 'fill_blank', sentence: 'Он часто ___ в командировки.', hint: "('bormoq' — transportda, takroriy, 3-shaxs)", options: ['ездит', 'едет', 'езжу', 'еду'], answer: 'ездит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы едем на дачу на выходных', options: ["Biz dam olish kunlari dachaga ketyapmiz", 'Biz doim dachada yashaymiz', 'Biz dachadan qaytdik', 'Biz dachani sotamiz'], answer: "Biz dam olish kunlari dachaga ketyapmiz" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har yili chet elga sayohat qilaman', options: ['Я каждый год езжу за границу', 'Я сейчас еду за границу', 'Я никогда не был за границей', 'Я живу за границей'], answer: 'Я каждый год езжу за границу' },
              { type: 'fill_blank', sentence: 'Туристы ___ на автобусе по всему городу.', hint: "('bormoq' — transportda, takroriy, ko'plik)", options: ['ездят', 'едут', 'ездит', 'едет'], answer: 'ездят' },
              { type: 'match', pairs: [{ ru: 'Ехать быстро', uz: 'Tez ketmoq (hozir)' }, { ru: 'Ездить редко', uz: 'Kamdan-kam bormoq (odatda)' }, { ru: 'Ехать в отпуск', uz: "Ta'tilga ketmoq (hozir)" }, { ru: 'Ездить на работу', uz: 'Ishga qatnamoq (odatda)' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Такси едет очень быстро', options: ["Taksi juda tez ketyapti", 'Taksi sekin yuryapti', "Taksi to'xtadi", "Taksi yo'q"], answer: "Taksi juda tez ketyapti" },
              { type: 'fill_blank', sentence: 'Я ___ на работу на метро каждый день.', hint: "('bormoq' — transportda, takroriy, 1-shaxs)", options: ['езжу', 'еду', 'ездишь', 'едешь'], answer: 'езжу' },
              { type: 'listening', audioText: 'Куда вы едете? Мы едем в аэропорт.', question: 'Ular qayerga ketishyapti?', options: ['Aeroportga', 'Vokzalga', 'Bozorga', 'Maktabga'], answer: 'Aeroportga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ular tez-tez chet elga sayohat qilishadi', options: ['Они часто ездят за границу', 'Они сейчас едут за границу', 'Они никогда не ездят', 'Они живут за границей'], answer: 'Они часто ездят за границу' },
              { type: 'order', prompt: 'Biz hozir vokzalga ketyapmiz', tiles: ['Мы', 'сейчас', 'едем', 'на', 'вокзал'], answer: 'Мы сейчас едем на вокзал' },
              { type: 'fill_blank', sentence: 'Вы ___ на работу на машине?', hint: "('bormoq' — transportda, takroriy, 2-shaxs ko'plik)", options: ['ездите', 'едете', 'ездишь', 'едешь'], answer: 'ездите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Поезд едет в Ташкент', options: ["Poyezd Toshkentga ketyapti", "Poyezd to'xtadi", 'Poyezd Toshkentdan keldi', "Poyezd yo'q"], answer: "Poyezd Toshkentga ketyapti" },
              { type: 'match', pairs: [{ ru: 'Ехать на юг', uz: 'Janubga ketmoq (hozir)' }, { ru: 'Ездить в горы', uz: "Tog'larga bormoq (odatda)" }, { ru: 'Ехать домой', uz: 'Uyga ketmoq (hozir, transportda)' }, { ru: 'Ездить на такси', uz: 'Taksida yurmoq (odatda)' }] },
              { type: 'fill_blank', sentence: 'Обычно я ___ на автобусе, но сегодня еду на такси.', hint: "('bormoq' — transportda, takroriy, 1-shaxs)", options: ['езжу', 'еду', 'ездишь', 'едешь'], answer: 'езжу' },
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
              { type: 'fill_blank', sentence: '___ находится вокзал?', hint: "('qayerda' — turg'un joy)", options: ['Где', 'Куда', 'Откуда', 'Когда'], answer: 'Где' },
              { type: 'fill_blank', sentence: '___ вы едете на отдых?', hint: "('qayerga' — harakat yo'nalishi)", options: ['Куда', 'Где', 'Откуда', 'Почему'], answer: 'Куда' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Где ты был вчера?', options: ["Kecha qayerda eding?", 'Qayerga ketyapsan?', 'Qachon ketding?', 'Nima qilding?'], answer: "Kecha qayerda eding?" },
              { type: 'choice', dir: 'uz2ru', prompt: "Kitoblarni qayerga qo'yay?", options: ['Куда положить книги?', 'Где лежат книги?', 'Откуда эти книги?', 'Чьи это книги?'], answer: 'Куда положить книги?' },
              { type: 'fill_blank', sentence: 'Скажите, ___ ближайшая аптека?', hint: "('qayerda' — turg'un joy)", options: ['где', 'куда', 'откуда', 'когда'], answer: 'где' },
              { type: 'match', pairs: [{ ru: 'Где ты живёшь?', uz: 'Qayerda yashaysan?' }, { ru: 'Куда ты идёшь?', uz: 'Qayerga ketyapsan?' }, { ru: 'Откуда ты приехал?', uz: 'Qayerdan kelding?' }, { ru: 'Где это находится?', uz: 'Bu qayerda joylashgan?' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Куда мы поедем в отпуск в этом году?', options: ["Bu yil ta'tilga qayerga boramiz?", "Ta'til qayerda o'tadi?", "Qachon ta'til boshlanadi?", "Ta'til qancha davom etadi?"], answer: "Bu yil ta'tilga qayerga boramiz?" },
              { type: 'fill_blank', sentence: '___ ты положил ключи?', hint: "('qayerga' — harakat yo'nalishi)", options: ['Куда', 'Где', 'Откуда', 'Зачем'], answer: 'Куда' },
              { type: 'listening', audioText: 'Где ты сейчас находишься? Я нахожусь в офисе.', question: 'U hozir qayerda?', options: ['Ofisda', 'Uyda', 'Maktabda', 'Bozorda'], answer: 'Ofisda' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bolalar qayerda o'ynashyapti?", options: ['Где играют дети?', 'Куда идут дети?', 'Откуда пришли дети?', 'Когда играют дети?'], answer: 'Где играют дети?' },
              { type: 'order', prompt: 'U qayerda ishlaydi?', tiles: ['Где', 'он', 'работает?'], answer: 'Где он работает?' },
              { type: 'fill_blank', sentence: 'Я не знаю, ___ он сейчас.', hint: "('qayerda' — turg'un joy)", options: ['где', 'куда', 'откуда', 'когда'], answer: 'где' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Куда вы обычно ходите по выходным?', options: ["Dam olish kunlari odatda qayerga borasiz?", 'Dam olish kuni qayerdasiz?', "Dam olish kuni qachon boshlanadi?", "Dam olish kunlari nima qilasiz?"], answer: "Dam olish kunlari odatda qayerga borasiz?" },
              { type: 'match', pairs: [{ ru: 'Никуда', uz: 'Hech qayerga' }, { ru: 'Нигде', uz: 'Hech qayerda' }, { ru: 'Куда-нибудь', uz: 'Qayergadir' }, { ru: 'Где-нибудь', uz: 'Qayerdadir' }] },
              { type: 'fill_blank', sentence: 'Я сегодня ___ не пойду, останусь дома.', hint: "('hech qayerga' so'zi)", options: ['никуда', 'нигде', 'куда-то', 'где-то'], answer: 'никуда' },
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
              { type: 'fill_blank', sentence: 'Подойди ___, я тебе кое-что покажу.', hint: "('bu yerga' — harakat yo'nalishi)", options: ['сюда', 'здесь', 'туда', 'там'], answer: 'сюда' },
              { type: 'fill_blank', sentence: 'Он живёт ___, недалеко от нас.', hint: "('bu yerda' — turg'un joy)", options: ['здесь', 'сюда', 'там', 'туда'], answer: 'здесь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Иди сюда, я хочу тебе кое-что сказать', options: ["Bu yoqqa kel, senga bir narsa aytmoqchiman", "U yoqqa bor", 'Bu yerda tur', 'U yerda kut'], answer: "Bu yoqqa kel, senga bir narsa aytmoqchiman" },
              { type: 'choice', dir: 'uz2ru', prompt: "U yerda juda go'zal", options: ['Там очень красиво', 'Здесь очень красиво', 'Сюда очень далеко', 'Туда нельзя'], answer: 'Там очень красиво' },
              { type: 'fill_blank', sentence: 'Положи книгу ___.', hint: "('u yerga' — harakat yo'nalishi)", options: ['туда', 'там', 'сюда', 'здесь'], answer: 'туда' },
              { type: 'match', pairs: [{ ru: 'Сюда', uz: 'Bu yoqqa (harakat)' }, { ru: 'Здесь', uz: 'Bu yerda (joy)' }, { ru: 'Отсюда', uz: 'Bu yerdan' }, { ru: 'Оттуда', uz: 'U yerdan' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Отсюда до вокзала пять минут', options: ["Bu yerdan vokzalgacha besh daqiqa", 'U yerdan vokzalgacha uzoq', 'Vokzal bu yerda', "Vokzal yo'q"], answer: "Bu yerdan vokzalgacha besh daqiqa" },
              { type: 'fill_blank', sentence: 'Мы приехали ___ вчера вечером.', hint: "('bu yerga' — harakat yo'nalishi)", options: ['сюда', 'здесь', 'туда', 'там'], answer: 'сюда' },
              { type: 'listening', audioText: 'Не ходи туда, там опасно.', question: 'Nega u yerga bormaslik kerak?', options: ['Xavfli', 'Qiziqarli', 'Yaqin', 'Chiroyli'], answer: 'Xavfli' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Pastga qarang', options: ['Посмотрите вниз', 'Посмотрите наверх', 'Посмотрите сюда', 'Посмотрите туда'], answer: 'Посмотрите вниз' },
              { type: 'order', prompt: 'U yerdan qayting', tiles: ['Вернитесь', 'оттуда'], answer: 'Вернитесь оттуда' },
              { type: 'fill_blank', sentence: 'Я никогда не был ___.', hint: "('u yerda' — turg'un joy)", options: ['там', 'туда', 'здесь', 'сюда'], answer: 'там' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Отойдите отсюда, здесь опасно', options: ["Bu yerdan uzoqlashing, bu yerda xavfli", 'Bu yerga keling', 'U yerga boring', 'U yerda qoling'], answer: "Bu yerdan uzoqlashing, bu yerda xavfli" },
              { type: 'match', pairs: [{ ru: 'Вперёд', uz: 'Oldinga' }, { ru: 'Назад', uz: 'Orqaga' }, { ru: 'Влево', uz: 'Chapga' }, { ru: 'Вправо', uz: "O'ngga" }] },
              { type: 'fill_blank', sentence: 'Сделайте шаг ___.', hint: "('oldinga' so'zi)", options: ['вперёд', 'назад', 'влево', 'вправо'], answer: 'вперёд' },
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
              { type: 'fill_blank', sentence: 'Он часто ___ в командировки на самолёте.', hint: "('uchmoq' — takroriy, 3-shaxs)", options: ['летает', 'летит', 'летаю', 'лечу'], answer: 'летает' },
              { type: 'fill_blank', sentence: 'Куда ты сейчас ___?', hint: "('uchmoq' — hozir, 2-shaxs)", options: ['летишь', 'летаешь', 'лечу', 'летаю'], answer: 'летишь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самолёт летит очень высоко', options: ["Samolyot juda baland uchyapti", 'Samolyot pastda uchyapti', "Samolyot qo'ndi", "Samolyot yo'q"], answer: "Samolyot juda baland uchyapti" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men tez-tez turli shaharlarga uchib turaman', options: ['Я часто летаю в разные города', 'Я никогда не летаю', 'Я боюсь самолётов', 'Я живу в аэропорту'], answer: 'Я часто летаю в разные города' },
              { type: 'fill_blank', sentence: 'Самолёты ___ из этого аэропорта каждый час.', hint: "('uchmoq' — takroriy, ko'plik)", options: ['летают', 'летят', 'летаешь', 'летишь'], answer: 'летают' },
              { type: 'match', pairs: [{ ru: 'Лететь высоко', uz: 'Baland uchmoq (hozir)' }, { ru: 'Летать часто', uz: 'Tez-tez uchmoq (odatda)' }, { ru: 'Взлетать', uz: "Uchib ko'tarilmoq" }, { ru: 'Приземляться', uz: "Qo'nmoq" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самолёт приземляется через десять минут', options: ["Samolyot o'n daqiqadan keyin qo'nadi", 'Samolyot uchib ketdi', 'Samolyot kechikdi', 'Samolyot bekor qilindi'], answer: "Samolyot o'n daqiqadan keyin qo'nadi" },
              { type: 'fill_blank', sentence: 'Я ___ в Дубай на этой неделе.', hint: "('uchmoq' — kelasi/hozirgi, 1-shaxs)", options: ['лечу', 'летаю', 'летишь', 'летаешь'], answer: 'лечу' },
              { type: 'listening', audioText: 'Птицы летают на юг зимой.', question: 'Qushlar qishda qayerga uchishadi?', options: ['Janubga', 'Shimolga', 'Sharqqa', "G'arbga"], answer: 'Janubga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men samolyotda uchishni yoqtiraman', options: ['Мне нравится летать на самолёте', 'Мне не нравится летать', 'Я боюсь самолётов', 'Я никогда не летал'], answer: 'Мне нравится летать на самолёте' },
              { type: 'order', prompt: 'Qushlar osmonda uchishyapti', tiles: ['Птицы', 'летят', 'в', 'небе'], answer: 'Птицы летят в небе' },
              { type: 'fill_blank', sentence: 'Вертолёт ___ над городом.', hint: "('uchmoq' — hozir, 3-shaxs)", options: ['летит', 'летает', 'лечу', 'летаю'], answer: 'летит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот самолёт летает только по выходным', options: ["Bu samolyot faqat dam olish kunlari uchadi", 'Bu samolyot har kuni uchadi', 'Bu samolyot hech qachon uchmaydi', 'Bu samolyot buzilgan'], answer: "Bu samolyot faqat dam olish kunlari uchadi" },
              { type: 'match', pairs: [{ ru: 'Вертолёт', uz: 'Vertolyot' }, { ru: 'Ракета', uz: 'Raketa' }, { ru: 'Крыло', uz: 'Qanot' }, { ru: 'Пилот', uz: 'Uchuvchi' }] },
              { type: 'fill_blank', sentence: 'Пилот управляет ___.', hint: "('samolyot' so'zi, vositalik kelishigi)", options: ['самолётом', 'самолёт', 'самолёта', 'самолёту'], answer: 'самолётом' },
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
              { type: 'fill_blank', sentence: 'Она сейчас ___ к берегу.', hint: "('suzmoq' — hozir, 3-shaxs)", options: ['плывёт', 'плавает', 'плыву', 'плаваю'], answer: 'плывёт' },
              { type: 'fill_blank', sentence: 'Мы ___ в бассейн каждую неделю.', hint: "('suzmoq' — takroriy, ko'plik)", options: ['плаваем', 'плывём', 'плаваете', 'плывёте'], answer: 'плаваем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Корабль плывёт через океан', options: ["Kema okean bo'ylab suzyapti", 'Kema portda turibdi', "Kema cho'kdi", 'Kema qaytdi'], answer: "Kema okean bo'ylab suzyapti" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men suzishni yaxshi bilaman', options: ['Я хорошо плаваю', 'Я плохо плаваю', 'Я не умею плавать', 'Я боюсь воды'], answer: 'Я хорошо плаваю' },
              { type: 'fill_blank', sentence: 'Рыбы ___ в аквариуме.', hint: "('suzmoq' — takroriy, ko'plik)", options: ['плавают', 'плывут', 'плаваешь', 'плывёшь'], answer: 'плавают' },
              { type: 'match', pairs: [{ ru: 'Плыть к острову', uz: 'Orolga suzib bormoq (hozir)' }, { ru: 'Плавать каждый день', uz: 'Har kuni suzmoq (odatda)' }, { ru: 'Тонуть', uz: "Cho'kmoq" }, { ru: 'Нырять', uz: "Sho'ng'imoq" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дельфины плавают очень быстро', options: ["Delfinlar juda tez suzishadi", 'Delfinlar sekin suzishadi', 'Delfinlar suzmaydi', 'Delfinlar dengizda yashamaydi'], answer: "Delfinlar juda tez suzishadi" },
              { type: 'fill_blank', sentence: 'Спортсмен ___ к финишу.', hint: "('suzmoq' — hozir, 3-shaxs)", options: ['плывёт', 'плавает', 'плыву', 'плаваю'], answer: 'плывёт' },
              { type: 'listening', audioText: 'Я плаваю в бассейне три раза в неделю.', question: 'Necha marta basseynda suzadi?', options: ['Uch marta', 'Bir marta', 'Har kuni', 'Hech qachon'], answer: 'Uch marta' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bolalar dengizda suzishmoqda', options: ['Дети плавают в море', 'Дети играют на пляже', 'Дети боятся воды', 'Дети не умеют плавать'], answer: 'Дети плавают в море' },
              { type: 'order', prompt: "U daryo bo'ylab suzib ketyapti", tiles: ['Он', 'плывёт', 'по', 'реке'], answer: 'Он плывёт по реке' },
              { type: 'fill_blank', sentence: 'Утка ___ по озеру.', hint: "('suzmoq' — hozir, 3-shaxs)", options: ['плывёт', 'плавает', 'плыву', 'плаваю'], answer: 'плывёт' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не умею плавать', options: ["Men suzishni bilmayman", 'Men suzishni bilaman', "Men suvdan qo'rqmayman", 'Men har kuni suzaman'], answer: "Men suzishni bilmayman" },
              { type: 'match', pairs: [{ ru: 'Волна', uz: "To'lqin" }, { ru: 'Берег', uz: "Qirg'oq" }, { ru: 'Спасательный жилет', uz: 'Suzish jaketi' }, { ru: 'Плавки', uz: 'Suzish shorti' }] },
              { type: 'fill_blank', sentence: 'На пляже большие ___.', hint: "('to'lqin' so'zining ko'plik shakli)", options: ['волны', 'волна', 'волн', 'волнами'], answer: 'волны' },
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
              { type: 'fill_blank', sentence: 'Она ___ на тренировку каждый день.', hint: "('yugurmoq' — takroriy, 3-shaxs)", options: ['бегает', 'бежит', 'бегаю', 'бегу'], answer: 'бегает' },
              { type: 'fill_blank', sentence: 'Куда ты так быстро ___?', hint: "('yugurmoq' — hozir, 2-shaxs)", options: ['бежишь', 'бегаешь', 'бегу', 'бегаю'], answer: 'бежишь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Собака бежит за мячом', options: ["It to'p ortidan yugurmoqda", 'It uxlayapti', "It o'ynayapti", 'It hurmoqda'], answer: "It to'p ortidan yugurmoqda" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men har ertalab yuguraman', options: ['Я бегаю каждое утро', 'Я бегаю иногда', 'Я никогда не бегаю', 'Я бегу сейчас'], answer: 'Я бегаю каждое утро' },
              { type: 'fill_blank', sentence: 'Дети ___ по двору.', hint: "('yugurmoq' — hozir, ko'plik)", options: ['бегут', 'бегают', 'бежит', 'бегает'], answer: 'бегут' },
              { type: 'match', pairs: [{ ru: 'Бежать быстро', uz: 'Tez yugurmoq (hozir)' }, { ru: 'Бегать по утрам', uz: 'Ertalab yugurmoq (odatda)' }, { ru: 'Марафон', uz: 'Marafon' }, { ru: 'Дистанция', uz: 'Masofa' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он бегает марафон каждый год', options: ["U har yili marafon yuguradi", 'U hech qachon yugurmaydi', 'U marafonni tomosha qiladi', 'U marafonda charchadi'], answer: "U har yili marafon yuguradi" },
              { type: 'fill_blank', sentence: 'Мы ___ на автобус, потому что опаздывали.', hint: "('yugurmoq' — o'tgan zamon, ko'plik)", options: ['бежали', 'бегали', 'бежит', 'бегает'], answer: 'бежали' },
              { type: 'listening', audioText: 'Спортсмен бежит очень быстро к финишу.', question: 'Sportchi qayerga yugurmoqda?', options: ['Finishga', 'Startga', 'Uyga', "Do'konga"], answer: 'Finishga' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bolalar bog'da yugurishmoqda", options: ['Дети бегают в парке', 'Дети сидят в парке', 'Дети играют дома', 'Дети спят'], answer: 'Дети бегают в парке' },
              { type: 'order', prompt: 'U doim ertalab yuguradi', tiles: ['Он', 'всегда', 'бегает', 'утром'], answer: 'Он всегда бегает утром' },
              { type: 'fill_blank', sentence: 'Время ___ очень быстро.', hint: "('yugurmoq' fe'lining majoziy ma'nosi, 3-shaxs)", options: ['бежит', 'бегает', 'бегу', 'бегаю'], answer: 'бежит' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я бегаю по вечерам для здоровья', options: ["Men sog'liq uchun kechqurun yuguraman", 'Men umuman yugurmayman', 'Men faqat ertalab yuguraman', "Men yugurishni yomon ko'raman"], answer: "Men sog'liq uchun kechqurun yuguraman" },
              { type: 'match', pairs: [{ ru: 'Скорость', uz: 'Tezlik' }, { ru: 'Финиш', uz: 'Finish' }, { ru: 'Старт', uz: 'Start' }, { ru: 'Тренировка', uz: "Mashg'ulot" }] },
              { type: 'fill_blank', sentence: 'Он развивает большую ___.', hint: "('tezlik' so'zi, tushum kelishigi)", options: ['скорость', 'скорости', 'скоростью', 'скоростям'], answer: 'скорость' },
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
              { type: 'fill_blank', sentence: 'У тебя нет ___?', hint: "('savol' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['вопросов', 'вопросы', 'вопросам', 'вопросами'], answer: 'вопросов' },
              { type: 'fill_blank', sentence: 'У неё нет ___.', hint: "('mashina' so'zi, qaratqich kelishigi)", options: ['машины', 'машина', 'машину', 'машиной'], answer: 'машины' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У него нет времени на отдых', options: ["Uning dam olishga vaqti yo'q", 'Uning dam olishga vaqti bor', 'U dam olyapti', 'U ishlamayapti'], answer: "Uning dam olishga vaqti yo'q" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bizda hech qanday muammo yo'q", options: ['У нас нет никаких проблем', 'У нас есть проблема', 'У нас большая проблема', 'Мы решаем проблему'], answer: 'У нас нет никаких проблем' },
              { type: 'fill_blank', sentence: 'У них нет ___.', hint: "('bola' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['детей', 'дети', 'детям', 'детьми'], answer: 'детей' },
              { type: 'match', pairs: [{ ru: 'Нет билета', uz: "Chipta yo'q" }, { ru: 'Нет места', uz: "Joy yo'q" }, { ru: 'Нет сил', uz: "Kuch yo'q" }, { ru: 'Нет желания', uz: "Xohish yo'q" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня нет сил больше работать', options: ["Ko'proq ishlashga kuchim yo'q", 'Ishlashga kuchim bor', 'Men charchamadim', 'Men ishlayapman'], answer: "Ko'proq ishlashga kuchim yo'q" },
              { type: 'fill_blank', sentence: 'У меня нет ___ идти туда.', hint: "('xohish' so'zi, qaratqich kelishigi)", options: ['желания', 'желание', 'желанию', 'желанием'], answer: 'желания' },
              { type: 'listening', audioText: 'У меня нет билета на концерт.', question: "Nima yo'q?", options: ['Konsert chiptasi', 'Pul', 'Vaqt', "Do'st"], answer: 'Konsert chiptasi' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu yerda joy yo'q", options: ['Здесь нет места', 'Здесь есть место', 'Здесь много места', 'Здесь мало людей'], answer: 'Здесь нет места' },
              { type: 'order', prompt: "Menda mashinam yo'q", tiles: ['У', 'меня', 'нет', 'машины'], answer: 'У меня нет машины' },
              { type: 'fill_blank', sentence: 'У вас нет ___ на завтра?', hint: "('reja' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['планов', 'планы', 'планам', 'планами'], answer: 'планов' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У нас нет выбора', options: ["Bizda tanlov yo'q", "Bizda ko'p tanlov bor", 'Biz tanladik', 'Tanlov oson'], answer: "Bizda tanlov yo'q" },
              { type: 'match', pairs: [{ ru: 'Нет причины', uz: "Sabab yo'q" }, { ru: 'Нет смысла', uz: "Ma'no yo'q" }, { ru: 'Нет разницы', uz: "Farq yo'q" }, { ru: 'Нет сомнений', uz: "Shubha yo'q" }] },
              { type: 'fill_blank', sentence: 'У меня нет никаких ___.', hint: "('shubha' so'zining ko'plik shakli, qaratqich kelishigi)", options: ['сомнений', 'сомнение', 'сомнению', 'сомнением'], answer: 'сомнений' },
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
              { type: 'fill_blank', sentence: 'Он живёт недалеко ___ центра.', hint: "('markazdan' — qaratqich kelishigi predlogi)", options: ['от', 'до', 'из', 'у'], answer: 'от' },
              { type: 'fill_blank', sentence: 'Дети играют ___ школы.', hint: "('maktab yonida' — qaratqich kelishigi predlogi)", options: ['у', 'от', 'до', 'из'], answer: 'у' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы шли от дома до школы пешком', options: ["Biz uydan maktabgacha piyoda yurdik", 'Biz maktabdan uygacha yurdik', 'Biz maktabga yaqin yashaymiz', 'Biz maktabga bormaymiz'], answer: "Biz uydan maktabgacha piyoda yurdik" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu do'kon uydan uzoq emas", options: ['Этот магазин недалеко от дома', 'Этот магазин далеко от дома', 'Этот магазин рядом с работой', 'Этот магазин закрыт'], answer: 'Этот магазин недалеко от дома' },
              { type: 'fill_blank', sentence: 'Я вернулся ___ работы поздно.', hint: "('ishdan' — qaratqich kelishigi predlogi)", options: ['с', 'от', 'из', 'до'], answer: 'с' },
              { type: 'match', pairs: [{ ru: 'Вместо', uz: "O'rniga" }, { ru: 'Кроме', uz: 'Tashqari' }, { ru: 'Вокруг', uz: 'Atrofida' }, { ru: 'Возле', uz: 'Yonida' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Все пришли, кроме него', options: ["U dan tashqari hamma keldi", 'Faqat u keldi', 'Hech kim kelmadi', 'U birinchi keldi'], answer: "U dan tashqari hamma keldi" },
              { type: 'fill_blank', sentence: 'Дом стоит ___ реки.', hint: "('daryo yonida' — qaratqich kelishigi predlogi)", options: ['возле', 'от', 'из', 'до'], answer: 'возле' },
              { type: 'listening', audioText: 'Вокруг дома растут красивые деревья.', question: 'Uy atrofida nima o\u2019sadi?', options: ["Go'zal daraxtlar", 'Gullar', 'Sabzavotlar', 'Hech narsa'], answer: "Go'zal daraxtlar" },
              { type: 'choice', dir: 'uz2ru', prompt: "Choy o'rniga suv ichaman", options: ['Я пью воду вместо чая', 'Я пью чай вместо воды', 'Я не пью ничего', 'Я пью и чай, и воду'], answer: 'Я пью воду вместо чая' },
              { type: 'order', prompt: "Uy daryo bo'yida joylashgan", tiles: ['Дом', 'находится', 'возле', 'реки'], answer: 'Дом находится возле реки' },
              { type: 'fill_blank', sentence: 'Я купил всё, ___ хлеба.', hint: "('tashqari' — qaratqich kelishigi predlogi)", options: ['кроме', 'вместо', 'возле', 'вокруг'], answer: 'кроме' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети бегают вокруг стола', options: ["Bolalar stol atrofida yugurishyapti", "Bolalar stolda o'tirishibdi", 'Bolalar stolni tozalashyapti', 'Bolalar stol yasashyapti'], answer: "Bolalar stol atrofida yugurishyapti" },
              { type: 'match', pairs: [{ ru: 'Около', uz: 'Taxminan/Yaqinida' }, { ru: 'Напротив', uz: 'Qarshisida' }, { ru: 'Среди', uz: 'Orasida' }, { ru: 'Вдоль', uz: "Bo'ylab" }] },
              { type: 'fill_blank', sentence: 'Школа находится ___ моего дома.', hint: "('qarshisida' — qaratqich kelishigi predlogi)", options: ['напротив', 'около', 'среди', 'вдоль'], answer: 'напротив' },
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
              { type: 'fill_blank', sentence: 'Он приехал ___ Германии.', hint: "('-dan' — mamlakat nomidan oldin)", options: ['из', 'в', 'на', 'с'], answer: 'из' },
              { type: 'fill_blank', sentence: 'Мы вернулись ___ работы поздно.', hint: "('-dan' — 'с' predlogi)", options: ['с', 'из', 'в', 'на'], answer: 'с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Откуда ты знаешь моё имя?', options: ["Mening ismimni qayerdan bilasan?", 'Mening ismim nima?', 'Ismingni ayt', 'Kim sen?'], answer: "Mening ismimni qayerdan bilasan?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu xat qayerdan keldi?', options: ['Откуда пришло это письмо?', 'Куда идёт это письмо?', 'Кому это письмо?', 'Когда пришло письмо?'], answer: 'Откуда пришло это письмо?' },
              { type: 'fill_blank', sentence: 'Гости приехали ___ разных стран.', hint: "('-dan' — mamlakat nomidan oldin, ko'plik)", options: ['из', 'в', 'на', 'с'], answer: 'из' },
              { type: 'match', pairs: [{ ru: 'Издалека', uz: 'Uzoqdan' }, { ru: 'Отовсюду', uz: 'Har tomondan' }, { ru: 'Ниоткуда', uz: "Hech qayerdan" }, { ru: 'Откуда-то', uz: "Qayerdandir" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот сувенир я привёз издалека', options: ["Bu suvenirni uzoqdan olib keldim", 'Bu suvenirni bu yerdan sotib oldim', 'Bu suvenir mening emas', "Bu suvenirni yo'qotdim"], answer: "Bu suvenirni uzoqdan olib keldim" },
              { type: 'fill_blank', sentence: 'Откуда ты ___ эту информацию?', hint: "('bilmoq' fe'lining o'tgan zamon, erkak jinsi)", options: ['узнал', 'узнала', 'узнало', 'узнали'], answer: 'узнал' },
              { type: 'listening', audioText: 'Откуда вы приехали? Мы приехали из Кореи.', question: 'Ular qayerdan kelishgan?', options: ['Koreyadan', 'Yaponiyadan', 'Xitoydan', 'Hindistondan'], answer: 'Koreyadan' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu mahsulot Turkiyadan olib kelingan', options: ['Этот товар привезён из Турции', 'Этот товар сделан здесь', 'Этот товар из Китая', 'Этот товар очень дорогой'], answer: 'Этот товар привезён из Турции' },
              { type: 'order', prompt: 'Siz qayerdan xabar topdingiz?', tiles: ['Откуда', 'вы', 'узнали?'], answer: 'Откуда вы узнали?' },
              { type: 'fill_blank', sentence: 'Свет идёт ___ окна.', hint: "('-dan' — 'от' predlogi)", options: ['от', 'из', 'с', 'до'], answer: 'от' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не знаю, откуда у него столько денег', options: ["Men uning qayerdan bunday ko'p puli borligini bilmayman", 'Men uning pulini bilaman', "U pulsiz", "U pulni yo'qotdi"], answer: "Men uning qayerdan bunday ko'p puli borligini bilmayman" },
              { type: 'match', pairs: [{ ru: 'Из дома', uz: 'Uydan' }, { ru: 'С работы', uz: 'Ishdan' }, { ru: 'От друга', uz: "Do'stdan (kishidan)" }, { ru: 'Из школы', uz: 'Maktabdan' }] },
              { type: 'fill_blank', sentence: 'Дети возвращаются ___ школы в три часа.', hint: "('-dan' — 'из' predlogi)", options: ['из', 'с', 'от', 'в'], answer: 'из' },
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
              { type: 'fill_blank', sentence: 'У меня пять ___.', hint: "('do'st' so'zi, 5dan keyin qaratqich ko'plik)", options: ['друзей', 'друга', 'друзья', 'другу'], answer: 'друзей' },
              { type: 'fill_blank', sentence: 'В комнате шесть ___.', hint: "('stul' so'zi, 6dan keyin qaratqich ko'plik)", options: ['стульев', 'стула', 'стулья', 'стулу'], answer: 'стульев' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У нас семь книг на полке', options: ["Bizda tokchada yettita kitob bor", 'Bizda tokchada bitta kitob bor', "Bizda kitob yo'q", "Bizda ko'p kitob bor"], answer: "Bizda tokchada yettita kitob bor" },
              { type: 'choice', dir: 'uz2ru', prompt: "Sinfda o'ttiz o'quvchi bor", options: ['В классе тридцать учеников', 'В классе три ученика', 'В классе тринадцать учеников', 'В классе нет учеников'], answer: 'В классе тридцать учеников' },
              { type: 'fill_blank', sentence: 'На улице стоят два ___.', hint: "('mashina' so'zi, 2 dan keyin qaratqich birlik)", options: ['автомобиля', 'автомобилей', 'автомобиль', 'автомобилю'], answer: 'автомобиля' },
              { type: 'match', pairs: [{ ru: 'Один стол', uz: 'Bitta stol' }, { ru: 'Два стола', uz: 'Ikkita stol (qaratqich birlik)' }, { ru: 'Пять столов', uz: "Beshta stol (qaratqich ko'plik)" }, { ru: 'Двадцать один стол', uz: 'Yigirma bir stol' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня двадцать одна книга', options: ["Menda yigirma bitta kitob bor", 'Menda yigirma kitob bor', 'Menda bitta kitob bor', "Menda kitob yo'q"], answer: "Menda yigirma bitta kitob bor" },
              { type: 'fill_blank', sentence: 'В зале восемь ___.', hint: "('deraza' so'zi, 8dan keyin qaratqich ko'plik)", options: ['окон', 'окна', 'окно', 'окнам'], answer: 'окон' },
              { type: 'listening', audioText: 'У меня три сестры и два брата.', question: 'Nechta opa-singil va aka-uka bor?', options: ['Uch opa-singil, ikki aka-uka', 'Ikki opa-singil, uch aka-uka', "To'rt opa-singil", 'Bitta aka'], answer: 'Uch opa-singil, ikki aka-uka' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu maktabda to'qqiz yuz o'quvchi bor", options: ['В этой школе девятьсот учеников', 'В этой школе девяносто учеников', 'В этой школе девять учеников', 'В этой школе нет учеников'], answer: 'В этой школе девятьсот учеников' },
              { type: 'order', prompt: "Menda to'rtta savol bor", tiles: ['У', 'меня', 'четыре', 'вопроса'], answer: 'У меня четыре вопроса' },
              { type: 'fill_blank', sentence: 'Она купила девять ___.', hint: "('olma' so'zi, 9dan keyin qaratqich ko'plik)", options: ['яблок', 'яблока', 'яблоко', 'яблокам'], answer: 'яблок' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У него есть двадцать два ученика', options: ["Uning yigirma ikkita o'quvchisi bor", "Uning ikki o'quvchisi bor", "Uning yigirma o'quvchisi bor", "Uning o'quvchisi yo'q"], answer: "Uning yigirma ikkita o'quvchisi bor" },
              { type: 'match', pairs: [{ ru: 'Одна минута', uz: 'Bir daqiqa' }, { ru: 'Две минуты', uz: 'Ikki daqiqa' }, { ru: 'Пять минут', uz: 'Besh daqiqa' }, { ru: 'Двадцать одна минута', uz: 'Yigirma bir daqiqa' }] },
              { type: 'fill_blank', sentence: 'Урок длится сорок пять ___.', hint: "('daqiqa' so'zi, 5dan keyin qaratqich ko'plik)", options: ['минут', 'минуты', 'минута', 'минутам'], answer: 'минут' },
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
              { type: 'match', pairs: [{ ru: 'Одноместный номер', uz: 'Bir kishilik xona' }, { ru: 'Двухместный номер', uz: 'Ikki kishilik xona' }, { ru: 'Люкс', uz: 'Lyuks xona' }, { ru: 'Горничная', uz: 'Xonaki' }] },
              { type: 'fill_blank', sentence: 'Я хочу забронировать ___ номер.', hint: "('bir kishilik' sifati, erkak jinsi)", options: ['одноместный', 'одноместная', 'одноместное', 'одноместные'], answer: 'одноместный' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В номере есть кондиционер и мини-бар', options: ["Xonada konditsioner va mini-bar bor", 'Xonada faqat televizor bor', "Xonada hech narsa yo'q", 'Xona bo\u2019sh'], answer: "Xonada konditsioner va mini-bar bor" },
              { type: 'choice', dir: 'uz2ru', prompt: "Chiqish vaqti soat o'n ikkida", options: ['Выезд в двенадцать часов', 'Заезд в двенадцать часов', 'Завтрак в двенадцать часов', 'Ужин в двенадцать часов'], answer: 'Выезд в двенадцать часов' },
              { type: 'fill_blank', sentence: 'Можно ___ Wi-Fi пароль?', hint: "('olmoq' fe'lining infinitivi)", options: ['получить', 'получил', 'получаю', 'получит'], answer: 'получить' },
              { type: 'match', pairs: [{ ru: 'Заезд', uz: 'Kirish (chek-in)' }, { ru: 'Выезд', uz: 'Chiqish (chek-aut)' }, { ru: 'Уборка номера', uz: 'Xonani tozalash' }, { ru: 'Обслуживание в номере', uz: 'Xonaga xizmat' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Заезд после двух часов дня', options: ["Kirish tushdan keyin soat ikkidan boshlanadi", 'Chiqish soat ikkida', "Xona bo'sh emas", 'Mehmonxona yopiq'], answer: "Kirish tushdan keyin soat ikkidan boshlanadi" },
              { type: 'fill_blank', sentence: 'В отеле есть бассейн и ___.', hint: "('sportzal' so'zi)", options: ['спортзал', 'спортзала', 'спортзалу', 'спортзалом'], answer: 'спортзал' },
              { type: 'listening', audioText: 'Ваш номер на пятом этаже, окна выходят на море.', question: 'Xona qaysi qavatda?', options: ['Beshinchi qavatda', 'Birinchi qavatda', "O'ninchi qavatda", 'Ikkinchi qavatda'], answer: 'Beshinchi qavatda' },
              { type: 'choice', dir: 'uz2ru', prompt: "Menga qo'shimcha sochiq kerak", options: ['Мне нужно дополнительное полотенце', 'Мне нужна дополнительная кровать', 'Мне нужен новый номер', 'Мне нужен другой этаж'], answer: 'Мне нужно дополнительное полотенце' },
              { type: 'order', prompt: "Iltimos, mening hisobimni tekshiring", tiles: ['Проверьте,', 'пожалуйста,', 'мой', 'счёт'], answer: 'Проверьте, пожалуйста, мой счёт' },
              { type: 'fill_blank', sentence: 'В отеле работает ___ ресторан.', hint: "('ajoyib' sifati, erkak jinsi)", options: ['отличный', 'отличная', 'отличное', 'отличные'], answer: 'отличный' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Персонал отеля очень вежливый', options: ["Mehmonxona xodimlari juda muloyim", "Mehmonxona xodimlari qo'pol", 'Mehmonxonada xodim yo\u2019q', 'Xodimlar band'], answer: "Mehmonxona xodimlari juda muloyim" },
              { type: 'match', pairs: [{ ru: 'Вид на море', uz: 'Dengiz manzarasi' }, { ru: 'Вид на город', uz: 'Shahar manzarasi' }, { ru: 'Завтрак включён', uz: 'Nonushta kiritilgan' }, { ru: 'Бесплатный Wi-Fi', uz: 'Bepul Wi-Fi' }] },
              { type: 'fill_blank', sentence: 'У этого номера прекрасный вид ___ море.', hint: "('dengizga' — vositalik kelishigi predlogi)", options: ['на', 'в', 'к', 'из'], answer: 'на' },
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
              { type: 'fill_blank', sentence: 'У больш___ дома есть сад.', hint: "(erkak so'z uchun qaratqich kelishigi -ОГО)", options: ['ого', 'ой', 'ая', 'ое'], answer: 'ого' },
              { type: 'fill_blank', sentence: 'Это стиль стар___ архитектуры.', hint: "(ayol so'z uchun qaratqich kelishigi -ОЙ)", options: ['ой', 'ого', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это подарок от моей любимой бабушки', options: ["Bu mening sevimli buvimdan sovg'a", 'Bu mening buvimga sovg\u2019a', 'Bu buvimning uyi', 'Bu buvim uchun'], answer: "Bu mening sevimli buvimdan sovg'a" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yangi mashinaning narxi', options: ['Это цена нового автомобиля', 'Это цвет нового автомобиля', 'Это модель нового автомобиля', 'Это марка нового автомобиля'], answer: 'Это цена нового автомобиля' },
              { type: 'fill_blank', sentence: 'Без хорош___ образования трудно найти работу.', hint: "(o'rta so'z uchun qaratqich kelishigi -ОГО)", options: ['ого', 'ой', 'ая', 'ое'], answer: 'ого' },
              { type: 'match', pairs: [{ ru: 'Синего неба', uz: "Ko'k osmonning" }, { ru: 'Зелёной травы', uz: "Yashil o'tning" }, { ru: 'Тёплого лета', uz: 'Issiq yozning' }, { ru: 'Холодной зимы', uz: 'Sovuq qishning' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я не боюсь холодной зимы', options: ["Men sovuq qishdan qo'rqmayman", 'Men issiq yozdan qo\u2019rqaman', "Men qishni yaxshi ko'raman", 'Qish keldi'], answer: "Men sovuq qishdan qo'rqmayman" },
              { type: 'fill_blank', sentence: 'Это результат долг___ труда.', hint: "(erkak so'z uchun qaratqich kelishigi -ОГО)", options: ['ого', 'ой', 'ая', 'ое'], answer: 'ого' },
              { type: 'listening', audioText: 'Это книга известного писателя.', question: 'Bu kimning kitobi?', options: ['Mashhur yozuvchining', 'Yosh yozuvchining', 'Notanish yozuvchining', 'Mening'], answer: 'Mashhur yozuvchining' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu buyuk san'atkorning asari", options: ['Это работа великого художника', 'Это работа молодого художника', 'Это моя работа', 'Это старая картина'], answer: 'Это работа великого художника' },
              { type: 'order', prompt: 'Bu qadimiy shaharning tarixi', tiles: ['Это', 'история', 'древнего', 'города'], answer: 'Это история древнего города' },
              { type: 'fill_blank', sentence: 'У нов___ ученика много вопросов.', hint: "(erkak so'z uchun qaratqich kelishigi -ОГО)", options: ['ого', 'ой', 'ая', 'ое'], answer: 'ого' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это дом моего старого друга', options: ["Bu mening eski do'stimning uyi", 'Bu mening yangi do\u2019stimning uyi', 'Bu mening uyim', 'Bu do\u2019stim uchun'], answer: "Bu mening eski do'stimning uyi" },
              { type: 'match', pairs: [{ ru: 'Высокого дерева', uz: 'Baland daraxtning' }, { ru: 'Маленького ребёнка', uz: 'Kichkina bolaning' }, { ru: 'Умного студента', uz: 'Aqlli talabaning' }, { ru: 'Доброй женщины', uz: 'Mehribon ayolning' }] },
              { type: 'fill_blank', sentence: 'Это дом добр___ женщины.', hint: "(ayol so'z uchun qaratqich kelishigi -ОЙ)", options: ['ой', 'ого', 'ая', 'ое'], answer: 'ой' },
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
              { type: 'fill_blank', sentence: 'В этом городе живёт ___ тысяч человек.', hint: "('300' soni)", options: ['триста', 'тридцать', 'три', 'третий'], answer: 'триста' },
              { type: 'fill_blank', sentence: 'Эта квартира стоит ___ тысяч долларов.', hint: "('yetti yuz' soni)", options: ['семьсот', 'семьдесят', 'семь', 'седьмой'], answer: 'семьсот' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В стране живёт тридцать миллионов человек', options: ["Mamlakatda o'ttiz million odam yashaydi", "Mamlakatda uch million odam yashaydi", "Mamlakatda o'ttiz ming odam yashaydi", "Mamlakatda kam odam yashaydi"], answer: "Mamlakatda o'ttiz million odam yashaydi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu kompaniya bir milliard dollar turadi', options: ['Эта компания стоит миллиард долларов', 'Эта компания стоит миллион долларов', 'Эта компания бесплатная', 'Эта компания маленькая'], answer: 'Эта компания стоит миллиард долларов' },
              { type: 'fill_blank', sentence: 'На стадионе было ___ зрителей.', hint: "('qirq ming' soni)", options: ['сорок тысяч', 'сорок', 'четыре тысячи', 'четыреста'], answer: 'сорок тысяч' },
              { type: 'match', pairs: [{ ru: 'Двести', uz: '200' }, { ru: 'Триста', uz: '300' }, { ru: 'Четыреста', uz: '400' }, { ru: 'Шестьсот', uz: '600' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Зарплата составляет пятьсот долларов', options: ["Ish haqi besh yuz dollarni tashkil qiladi", 'Ish haqi ellik dollar', 'Ish haqi besh ming dollar', "Ish haqi yo'q"], answer: "Ish haqi besh yuz dollarni tashkil qiladi" },
              { type: 'fill_blank', sentence: 'В библиотеке ___ книг.', hint: "('sakkiz ming' soni)", options: ['восемь тысяч', 'восемьсот', 'восемьдесят', 'восемь'], answer: 'восемь тысяч' },
              { type: 'listening', audioText: 'Население этого города составляет два миллиона человек.', question: 'Shahar aholisi qancha?', options: ['Ikki million', 'Ikki ming', 'Ikki yuz ming', 'Ikki yuz'], answer: 'Ikki million' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu loyiha bir million dollarga tushadi', options: ['Этот проект стоит миллион долларов', 'Этот проект стоит тысячу долларов', 'Этот проект бесплатный', 'Этот проект дешёвый'], answer: 'Этот проект стоит миллион долларов' },
              { type: 'order', prompt: 'Bu shaharda besh yuz ming odam yashaydi', tiles: ['В', 'этом', 'городе', 'живёт', 'пятьсот', 'тысяч', 'человек'], answer: 'В этом городе живёт пятьсот тысяч человек' },
              { type: 'fill_blank', sentence: 'Компания заработала ___ долларов в этом году.', hint: "('million' so'zi, qaratqich kelishigi ko'plik)", options: ['миллионов', 'миллион', 'миллиона', 'миллионом'], answer: 'миллионов' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это здание построили за девятьсот тысяч долларов', options: ["Bu bino to'qqiz yuz ming dollarga qurilgan", "Bu bino to'qson ming dollarga qurilgan", 'Bu bino bepul qurilgan', 'Bu bino qurilmagan'], answer: "Bu bino to'qqiz yuz ming dollarga qurilgan" },
              { type: 'match', pairs: [{ ru: 'Семьсот', uz: '700' }, { ru: 'Восемьсот', uz: '800' }, { ru: 'Девятьсот', uz: '900' }, { ru: 'Тысяча', uz: '1000' }] },
              { type: 'fill_blank', sentence: 'На счету у него ___ рублей.', hint: "('milliard' so'zi, qaratqich kelishigi)", options: ['миллиард', 'миллион', 'тысяча', 'сто'], answer: 'миллиард' },
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
              { type: 'fill_blank', sentence: 'Она родилась пятого ___.', hint: "('fevral' so'zi, qaratqich kelishigi)", options: ['февраля', 'февраль', 'феврале', 'февралём'], answer: 'февраля' },
              { type: 'fill_blank', sentence: 'Мой день рождения — десятого ___.', hint: "('iyul' so'zi, qaratqich kelishigi)", options: ['июля', 'июль', 'июле', 'июлем'], answer: 'июля' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В каком году вы родились?', options: ["Qaysi yilda tug'ilgansiz?", 'Qachon uylangansiz?', 'Necha yoshdasiz?', "Qayerda tug'ilgansiz?"], answer: "Qaysi yilda tug'ilgansiz?" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men ikki mingninchi yilda tug'ilganman", options: ['Я родился в двухтысячном году', 'Я родился в прошлом году', 'Я родился вчера', 'Я не помню'], answer: 'Я родился в двухтысячном году' },
              { type: 'fill_blank', sentence: 'Свадьба состоится пятнадцатого ___.', hint: "('avgust' so'zi, qaratqich kelishigi)", options: ['августа', 'август', 'августе', 'августом'], answer: 'августа' },
              { type: 'match', pairs: [{ ru: 'Ноября', uz: 'Noyabrning' }, { ru: 'Октября', uz: 'Oktyabrning' }, { ru: 'Апреля', uz: 'Aprelning' }, { ru: 'Июня', uz: 'Iyunning' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он родился тридцать первого декабря', options: ["U 31-dekabrda tug'ilgan", "U 1-yanvarda tug'ilgan", "U dekabrda tug'ilgan", "U qish oyida tug'ilgan"], answer: "U 31-dekabrda tug'ilgan" },
              { type: 'fill_blank', sentence: 'Их годовщина свадьбы — двенадцатого ___.', hint: "('mart' so'zi, qaratqich kelishigi)", options: ['марта', 'март', 'марте', 'мартом'], answer: 'марта' },
              { type: 'listening', audioText: 'Я родился двадцать третьего апреля тысяча девятьсот девяносто пятого года.', question: "Qachon tug'ilgan?", options: ['23-aprel, 1995-yil', '23-mart, 1995-yil', '3-aprel, 1985-yil', '13-aprel, 1995-yil'], answer: '23-aprel, 1995-yil' },
              { type: 'choice', dir: 'uz2ru', prompt: "Uning tug'ilgan kuni sentyabrda", options: ['Его день рождения в сентябре', 'Его день рождения в августе', 'Его день рождения в октябре', 'У него нет дня рождения'], answer: 'Его день рождения в сентябре' },
              { type: 'order', prompt: "U yigirmanchi iyunda tug'ilgan", tiles: ['Он', 'родился', 'двадцатого', 'июня'], answer: 'Он родился двадцатого июня' },
              { type: 'fill_blank', sentence: 'Мы познакомились восьмого ___.', hint: "('may' so'zi, qaratqich kelishigi)", options: ['мая', 'май', 'мае', 'маем'], answer: 'мая' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Какого числа у вас день рождения?', options: ["Tug'ilgan kuningiz qaysi sana?", 'Yoshingiz nechida?', 'Qachon uylangansiz?', "Bayram qachon?"], answer: "Tug'ilgan kuningiz qaysi sana?" },
              { type: 'match', pairs: [{ ru: 'Первого', uz: 'Birinchisida' }, { ru: 'Пятнадцатого', uz: "O'n beshinchisida" }, { ru: 'Двадцатого', uz: 'Yigirmanchisida' }, { ru: 'Тридцатого', uz: "O'ttizinchisida" }] },
              { type: 'fill_blank', sentence: 'Я забыл, что сегодня ___ февраля.', hint: "(tartib son, ayol jinsi — sanada)", options: ['четвёртое', 'четвёртого', 'четвёртая', 'четвёртый'], answer: 'четвёртое' },
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
              { type: 'fill_blank', sentence: 'У меня десять ___.', hint: "('rubl' so'zi, qaratqich ko'plik -EY)", options: ['рублей', 'рубли', 'рублям', 'рублями'], answer: 'рублей' },
              { type: 'fill_blank', sentence: 'В парке много ___.', hint: "('daraxt' so'zi, qaratqich ko'plik -ЕВ)", options: ['деревьев', 'деревья', 'деревьям', 'деревьями'], answer: 'деревьев' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У нас нет свободных дней', options: ["Bizda bo'sh kunlar yo'q", "Bizda ko'p bo'sh kun bor", 'Bugun bo\u2019sh kun', 'Ertaga bayram'], answer: "Bizda bo'sh kunlar yo'q" },
              { type: 'choice', dir: 'uz2ru', prompt: "Muzeyda ko'p rasmlar bor", options: ['В музее много картин', 'В музее мало картин', 'В музее нет картин', 'Музей закрыт'], answer: 'В музее много картин' },
              { type: 'fill_blank', sentence: 'На улице много ___.', hint: "('mashina' so'zi, qaratqich ko'plik -ИН)", options: ['машин', 'машины', 'машинам', 'машинами'], answer: 'машин' },
              { type: 'match', pairs: [{ ru: 'Много рублей', uz: "Ko'p rubl" }, { ru: 'Много дней', uz: "Ko'p kun" }, { ru: 'Много вещей', uz: "Ko'p narsa" }, { ru: 'Много ночей', uz: "Ko'p tun" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У них много вещей в доме', options: ["Ularning uyida ko'p narsa bor", "Ularning uyi bo'sh", 'Ular ko\u2019chib ketishdi', "Ularda hech narsa yo'q"], answer: "Ularning uyida ko'p narsa bor" },
              { type: 'fill_blank', sentence: 'В библиотеке тысячи ___.', hint: "('kitob' so'zi, qaratqich ko'plik)", options: ['книг', 'книги', 'книгам', 'книгами'], answer: 'книг' },
              { type: 'listening', audioText: 'В этом городе много музеев и театров.', question: "Shaharda nima ko'p?", options: ['Muzey va teatrlar', "Do'konlar", 'Maktablar', 'Kasalxonalar'], answer: 'Muzey va teatrlar' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu qishloqda kam uy bor', options: ['В этой деревне мало домов', 'В этой деревне много домов', 'В этой деревне нет домов', 'Деревня большая'], answer: 'В этой деревне мало домов' },
              { type: 'order', prompt: "Ko'chada ko'p odam bor", tiles: ['На', 'улице', 'много', 'людей'], answer: 'На улице много людей' },
              { type: 'fill_blank', sentence: 'У нас несколько ___.', hint: "('savol' so'zi, qaratqich ko'plik)", options: ['вопросов', 'вопросы', 'вопросам', 'вопросами'], answer: 'вопросов' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В саду растёт много цветов', options: ["Bog'da ko'p gul o'sadi", "Bog'da hech narsa yo'q", "Bog' kichkina", "Gullar yo'qolgan"], answer: "Bog'da ko'p gul o'sadi" },
              { type: 'match', pairs: [{ ru: 'Много часов', uz: "Ko'p soat" }, { ru: 'Много минут', uz: "Ko'p daqiqa" }, { ru: 'Много слов', uz: "Ko'p so'z" }, { ru: 'Много идей', uz: "Ko'p g'oya" }] },
              { type: 'fill_blank', sentence: 'У него много интересных ___.', hint: "('g'oya' so'zi, qaratqich ko'plik)", options: ['идей', 'идея', 'идее', 'идеей'], answer: 'идей' },
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
              { type: 'fill_blank', sentence: 'У меня двенадцать ___.', hint: "('do'st' so'zi, 12dan keyin qaratqich ko'plik)", options: ['друзей', 'друга', 'друг', 'другу'], answer: 'друзей' },
              { type: 'fill_blank', sentence: 'В нашей группе пятнадцать ___.', hint: "('talaba' so'zi, 15dan keyin qaratqich ko'plik)", options: ['студентов', 'студента', 'студент', 'студенту'], answer: 'студентов' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У нас двадцать пять учеников в классе', options: ["Bizning sinfimizda yigirma beshta o'quvchi bor", "Bizning sinfimizda beshta o'quvchi bor", 'Sinf bo\u2019sh', "O'quvchilar ko'p emas"], answer: "Bizning sinfimizda yigirma beshta o'quvchi bor" },
              { type: 'choice', dir: 'uz2ru', prompt: "Menda o'ttiz kitob bor", options: ['У меня тридцать книг', 'У меня три книги', 'У меня тринадцать книг', 'У меня нет книг'], answer: 'У меня тридцать книг' },
              { type: 'fill_blank', sentence: 'В зале сто ___.', hint: "('o'rindiq' so'zi, 100dan keyin qaratqich ko'plik)", options: ['мест', 'места', 'местам', 'местами'], answer: 'мест' },
              { type: 'match', pairs: [{ ru: 'Одиннадцать книг', uz: "O'n bir kitob" }, { ru: 'Пятнадцать минут', uz: "O'n besh daqiqa" }, { ru: 'Двадцать лет', uz: 'Yigirma yil' }, { ru: 'Сто рублей', uz: 'Yuz rubl' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне нужно сто долларов', options: ["Menga yuz dollar kerak", "Menga o'n dollar kerak", 'Menga ming dollar kerak', "Menga pul kerak emas"], answer: "Menga yuz dollar kerak" },
              { type: 'fill_blank', sentence: 'На конференции было сорок ___.', hint: "('ishtirokchi' so'zi, 40dan keyin qaratqich ko'plik)", options: ['участников', 'участника', 'участник', 'участнику'], answer: 'участников' },
              { type: 'listening', audioText: 'В этом здании работает семьдесят сотрудников.', question: 'Bu binoda nechta xodim ishlaydi?', options: ['Yetmish', 'Yetti', 'Yetmish besh', 'Yetti yuz'], answer: 'Yetmish' },
              { type: 'choice', dir: 'uz2ru', prompt: "Menda ellik so'm bor edi", options: ['У меня было пятьдесят сумов', 'У меня было пять сумов', 'У меня было пятнадцать сумов', 'У меня не было денег'], answer: 'У меня было пятьдесят сумов' },
              { type: 'order', prompt: 'Bu shaharda yuz maktab bor', tiles: ['В', 'этом', 'городе', 'сто', 'школ'], answer: 'В этом городе сто школ' },
              { type: 'fill_blank', sentence: 'У меня шестнадцать ___.', hint: "('yil' so'zi, 16dan keyin qaratqich ko'plik)", options: ['лет', 'года', 'год', 'годы'], answer: 'лет' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В музее хранится тысяча экспонатов', options: ["Muzeyda ming eksponat saqlanadi", "Muzeyda o'n eksponat bor", 'Muzey bo\u2019sh', "Muzeyda hech narsa yo'q"], answer: "Muzeyda ming eksponat saqlanadi" },
              { type: 'match', pairs: [{ ru: 'Двенадцать месяцев', uz: "O'n ikki oy" }, { ru: 'Тридцать дней', uz: "O'ttiz kun" }, { ru: 'Шестьдесят минут', uz: 'Oltmish daqiqa' }, { ru: 'Девяносто градусов', uz: "To'qson daraja" }] },
              { type: 'fill_blank', sentence: 'В этом году будет двадцать ___ праздников.', hint: "('bayram' so'zi, 20dan keyin qaratqich ko'plik)", options: ['праздников', 'праздника', 'праздник', 'празднику'], answer: 'праздников' },
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
              { type: 'match', pairs: [{ ru: 'Наличные', uz: 'Naqd pul' }, { ru: 'Кредитная карта', uz: 'Kredit karta' }, { ru: 'Валюта', uz: 'Valyuta' }, { ru: 'Курс обмена', uz: 'Almashuv kursi' }] },
              { type: 'fill_blank', sentence: 'Какой сегодня ___ доллара?', hint: "('kurs' so'zi)", options: ['курс', 'курса', 'курсу', 'курсом'], answer: 'курс' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я хочу обменять доллары на сумы', options: ["Men dollarni so'mga almashtirmoqchiman", "Men so'mni dollarga sotmoqchiman", "Menda pul yo'q", "Men bank ochmoqchiman"], answer: "Men dollarni so'mga almashtirmoqchiman" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bankomat qayerda?', options: ['Где находится банкомат?', 'Где находится банк?', 'Сколько денег в банкомате?', 'Банкомат работает?'], answer: 'Где находится банкомат?' },
              { type: 'fill_blank', sentence: 'У меня закончилась ___.', hint: "('naqd pul' so'zi)", options: ['наличность', 'наличностью', 'наличности', 'наличностей'], answer: 'наличность' },
              { type: 'match', pairs: [{ ru: 'Зарплата', uz: 'Maosh' }, { ru: 'Расходы', uz: 'Xarajatlar' }, { ru: 'Сбережения', uz: "Jamg'arma" }, { ru: 'Долг', uz: 'Qarz' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня есть небольшой долг', options: ["Menda kichik qarz bor", "Menda qarz yo'q", 'Men qarz beryapman', 'Men boyman'], answer: "Menda kichik qarz bor" },
              { type: 'fill_blank', sentence: 'Я коплю деньги на ___.', hint: "('kelajak' so'zi, tushum kelishigi)", options: ['будущее', 'будущего', 'будущему', 'будущим'], answer: 'будущее' },
              { type: 'listening', audioText: 'Курс доллара сегодня двенадцать тысяч пятьсот сумов.', question: 'Bugungi dollar kursi qancha?', options: ["12500 so'm", "1250 so'm", "125000 so'm", "1250000 so'm"], answer: "12500 so'm" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men har oy pul jamg'araman", options: ['Я коплю деньги каждый месяц', 'Я трачу все деньги', 'У меня нет сбережений', 'Я не думаю о деньгах'], answer: 'Я коплю деньги каждый месяц' },
              { type: 'order', prompt: "Menda yetarlicha pul yo'q", tiles: ['У', 'меня', 'недостаточно', 'денег'], answer: 'У меня недостаточно денег' },
              { type: 'fill_blank', sentence: 'Мне нужно оплатить ___.', hint: "('qarz' so'zi, tushum kelishigi)", options: ['долг', 'долга', 'долгу', 'долгом'], answer: 'долг' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Важно уметь управлять своими финансами', options: ["O'z moliyasini boshqara olish muhim", 'Pul muhim emas', "Har kim boy bo'lishi kerak", "Pulni tejash shart emas"], answer: "O'z moliyasini boshqara olish muhim" },
              { type: 'match', pairs: [{ ru: 'Инвестиции', uz: 'Investitsiyalar' }, { ru: 'Бюджет', uz: 'Byudjet' }, { ru: 'Скидка', uz: 'Chegirma' }, { ru: 'Налог', uz: 'Soliq' }] },
              { type: 'fill_blank', sentence: 'Каждая семья должна планировать свой ___.', hint: "('byudjet' so'zi)", options: ['бюджет', 'бюджета', 'бюджету', 'бюджетом'], answer: 'бюджет' },
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
              { type: 'fill_blank', sentence: 'Ты ___ меня у входа?', hint: "('kutmoq' fe'li, 2-shaxs)", options: ['ждёшь', 'жду', 'ждём', 'ждёте'], answer: 'ждёшь' },
              { type: 'fill_blank', sentence: 'Она ___ важного звонка.', hint: "('kutmoq' fe'li, 3-shaxs)", options: ['ждёт', 'жду', 'ждём', 'ждут'], answer: 'ждёт' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы ждём результатов экзамена', options: ["Biz imtihon natijalarini kutyapmiz", "Biz imtihonga tayyorlanyapmiz", 'Biz imtihonni topshirdik', 'Biz imtihonni bekor qildik'], answer: "Biz imtihon natijalarini kutyapmiz" },
              { type: 'choice', dir: 'uz2ru', prompt: "Ular meni to'xtovsiz kutishmoqda", options: ['Они ждут меня без остановки', 'Они забыли обо мне', 'Они уехали без меня', 'Они не хотят меня видеть'], answer: 'Они ждут меня без остановки' },
              { type: 'fill_blank', sentence: 'Дети ___ праздника с нетерпением.', hint: "('kutmoq' fe'li, ko'plik)", options: ['ждут', 'ждёт', 'ждём', 'жду'], answer: 'ждут' },
              { type: 'match', pairs: [{ ru: 'Ждать с нетерпением', uz: 'Sabrsizlik bilan kutmoq' }, { ru: 'Ждать напрасно', uz: 'Bekorga kutmoq' }, { ru: 'Заставить ждать', uz: 'Kutdirmoq' }, { ru: 'Долго ждать', uz: 'Uzoq kutmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я жду с нетерпением встречи с тобой', options: ["Sen bilan uchrashishni sabrsizlik bilan kutyapman", 'Men seni unutdim', "Men senga qo'ng'iroq qilmayman", 'Men bandman'], answer: "Sen bilan uchrashishni sabrsizlik bilan kutyapman" },
              { type: 'fill_blank', sentence: 'Мы ждали ___ два часа.', hint: "('u' erkak so'zining tushum kelishigi)", options: ['его', 'он', 'ему', 'им'], answer: 'его' },
              { type: 'listening', audioText: 'Я жду автобус уже двадцать минут.', question: 'Qancha vaqtdan beri kutyapti?', options: ['Yigirma daqiqa', "O'n daqiqa", 'Bir soat', 'Besh daqiqa'], answer: 'Yigirma daqiqa' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kutish qiyin', options: ['Ждать трудно', 'Ждать легко', 'Ждать приятно', 'Ждать быстро'], answer: 'Ждать трудно' },
              { type: 'order', prompt: 'Biz seni bekatda kutamiz', tiles: ['Мы', 'ждём', 'тебя', 'на', 'остановке'], answer: 'Мы ждём тебя на остановке' },
              { type: 'fill_blank', sentence: 'Не заставляй меня ___ так долго!', hint: "('kutmoq' fe'lining infinitivi)", options: ['ждать', 'жду', 'ждёшь', 'ждёт'], answer: 'ждать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я устал ждать тебя', options: ["Seni kutishdan charchadim", 'Men sendan xafaman', "Men senga qo'ng'iroq qilmoqchiman", 'Men seni unutdim'], answer: "Seni kutishdan charchadim" },
              { type: 'match', pairs: [{ ru: 'Терпение', uz: 'Sabr' }, { ru: 'Надежда', uz: 'Umid' }, { ru: 'Очередь', uz: 'Navbat' }, { ru: 'Задержка', uz: 'Kechikish' }] },
              { type: 'fill_blank', sentence: 'У меня закончилось ___.', hint: "('sabr' so'zi)", options: ['терпение', 'терпения', 'терпению', 'терпением'], answer: 'терпение' },
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
              { type: 'match', pairs: [{ ru: 'Первое блюдо', uz: "Birinchi taom (sho'rva)" }, { ru: 'Второе блюдо', uz: 'Ikkinchi taom' }, { ru: 'Гарнир', uz: 'Garnir' }, { ru: 'Напиток', uz: 'Ichimlik' }] },
              { type: 'fill_blank', sentence: 'Я закажу борщ на ___.', hint: "('birinchi' — taom sifatida)", options: ['первое', 'первый', 'первую', 'первых'], answer: 'первое' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Что вы порекомендуете на второе?', options: ["Ikkinchi taomga nima tavsiya qilasiz?", 'Birinchi taomga nima bor?', 'Desertga nima bor?', "Ichimlikka nima bor?"], answer: "Ikkinchi taomga nima tavsiya qilasiz?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Manti bilan salat olib kelaman', options: ['Принесу манты с салатом', 'Принесу плов с салатом', 'Принесу суп без хлеба', 'Принесу чай без сахара'], answer: 'Принесу манты с салатом' },
              { type: 'fill_blank', sentence: 'Без ___, пожалуйста.', hint: "('piyoz' so'zi, qaratqich kelishigi)", options: ['лука', 'лук', 'луку', 'луком'], answer: 'лука' },
              { type: 'match', pairs: [{ ru: 'Без сахара', uz: 'Shakarsiz' }, { ru: 'Без соли', uz: 'Tuzsiz' }, { ru: 'Поменьше специй', uz: "Kamroq ziravor bilan" }, { ru: 'Побольше мяса', uz: "Ko'proq go'sht bilan" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно без лука, пожалуйста?', options: ["Piyozsiz bo'lsa mumkinmi?", 'Piyoz bilan bering', "Piyoz qo'shmang", "Piyoz yo'qmi?"], answer: "Piyozsiz bo'lsa mumkinmi?" },
              { type: 'fill_blank', sentence: 'Официант принёс нам ___.', hint: "('menyu' so'zi)", options: ['меню', 'меня', 'меню', 'меню'], answer: 'меню' },
              { type: 'listening', audioText: 'Я закажу манты, а на десерт — мороженое.', question: 'Nima buyurtma qildi?', options: ['Manti va muzqaymoq', 'Osh va salat', "Sho'rva va non", 'Choy va tort'], answer: 'Manti va muzqaymoq' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu taom uchun choy tavsiya qilaman', options: ['К этому блюду рекомендую чай', 'К этому блюду рекомендую воду', 'К этому блюду рекомендую сок', 'К этому блюду рекомендую вино'], answer: 'К этому блюду рекомендую чай' },
              { type: 'order', prompt: "Iltimos, hisobni ajratib bering", tiles: ['Разделите', 'счёт,', 'пожалуйста'], answer: 'Разделите счёт, пожалуйста' },
              { type: 'fill_blank', sentence: 'Мы будем ___ час.', hint: "('kutmoq' fe'lining infinitivi)", options: ['ждать', 'жду', 'ждёшь', 'ждёт'], answer: 'ждать' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Приятного аппетита!', options: ["Ishtahangiz ochilsin!", "Sog' bo'ling!", 'Xayr!', 'Rahmat!'], answer: "Ishtahangiz ochilsin!" },
              { type: 'match', pairs: [{ ru: 'Заказать столик', uz: 'Stol bron qilmoq' }, { ru: 'Позвать официанта', uz: 'Ofitsiantni chaqirmoq' }, { ru: 'Попросить счёт', uz: "Hisob so'ramoq" }, { ru: 'Оставить чаевые', uz: "Choy puli qoldirmoq" }] },
              { type: 'fill_blank', sentence: 'Я хочу оставить ___ официанту.', hint: "('choy puli' so'zi, tushum kelishigi)", options: ['чаевые', 'чаевых', 'чаевым', 'чаевыми'], answer: 'чаевые' },
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
              { type: 'fill_blank', sentence: 'Вот девушка, ___ поёт в хоре.', hint: "('qaysiki' — ayol so'z, nominativ)", options: ['которая', 'который', 'которое', 'которые'], answer: 'которая' },
              { type: 'fill_blank', sentence: 'Это окно, ___ выходит в сад.', hint: "('qaysiki' — neytral so'z, nominativ)", options: ['которое', 'который', 'которая', 'которые'], answer: 'которое' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это фильм, который я хочу посмотреть', options: ["Bu men ko'rmoqchi bo'lgan film", "Bu men ko'rgan film", 'Bu yangi film', "Bu qiziqarli emas"], answer: "Bu men ko'rmoqchi bo'lgan film" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bular men yaxshi ko'rgan kitoblar", options: ['Это книги, которые я люблю', 'Это книги, которые я не читал', 'Это новые книги', 'Это старые книги'], answer: 'Это книги, которые я люблю' },
              { type: 'fill_blank', sentence: 'Вот студенты, ___ сдали экзамен.', hint: "('qaysiki' — ko'plik, nominativ)", options: ['которые', 'который', 'которая', 'которое'], answer: 'которые' },
              { type: 'match', pairs: [{ ru: 'Дом, который', uz: 'Uy, qaysi' }, { ru: 'Книга, которую', uz: 'Kitob, qaysini' }, { ru: 'Письмо, которое', uz: 'Xat, qaysini' }, { ru: 'Друзья, которые', uz: "Do'stlar, qaysilari" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это письмо, которое я написал вчера', options: ["Bu men kecha yozgan xat", 'Bu men olgan xat', 'Bu yangi xat', 'Bu eski xat'], answer: "Bu men kecha yozgan xat" },
              { type: 'fill_blank', sentence: 'Учитель, ___ преподаёт нам, очень строгий.', hint: "('qaysiki' — erkak so'z, nominativ)", options: ['который', 'которая', 'которое', 'которые'], answer: 'который' },
              { type: 'listening', audioText: 'Вот песня, которую я люблю больше всего.', question: 'Bu nima?', options: ["Eng yaxshi ko'rgan qo'shiq", "Yangi qo'shiq", "Eski qo'shiq", "Notanish qo'shiq"], answer: "Eng yaxshi ko'rgan qo'shiq" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu men yozgan maqola', options: ['Это статья, которую я написал', 'Это статья, которую я прочитал', 'Это новая статья', 'Это старая статья'], answer: 'Это статья, которую я написал' },
              { type: 'order', prompt: "Bu men ko'rgan filmi", tiles: ['Это', 'фильм', 'который', 'я', 'видел'], answer: 'Это фильм который я видел' },
              { type: 'fill_blank', sentence: 'Вот машина, ___ я купил.', hint: "('qaysiki' — ayol so'z, tushum kelishigi)", options: ['которую', 'который', 'которое', 'которые'], answer: 'которую' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это подарок, который мне подарили', options: ["Bu menga berilgan sovg'a", "Bu men bergan sovg'a", "Bu yangi sovg'a", "Bu eski sovg'a"], answer: "Bu menga berilgan sovg'a" },
              { type: 'match', pairs: [{ ru: 'Работа, которую', uz: "Ish, qaysini" }, { ru: 'Идея, которая', uz: "G'oya, qaysi" }, { ru: 'Место, которое', uz: 'Joy, qaysini' }, { ru: 'Люди, которые', uz: 'Odamlar, qaysilari' }] },
              { type: 'fill_blank', sentence: 'Вот идея, ___ мне понравилась.', hint: "('qaysiki' — ayol so'z, nominativ)", options: ['которая', 'который', 'которое', 'которые'], answer: 'которая' },
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
              { type: 'fill_blank', sentence: 'Это друг, с ___ я учился в школе.', hint: "('qaysiki' — erkak so'z, vositalik kelishigi)", options: ['которым', 'который', 'которого', 'которой'], answer: 'которым' },
              { type: 'fill_blank', sentence: 'Вот девушка, с ___ я познакомился вчера.', hint: "('qaysiki' — ayol so'z, vositalik kelishigi)", options: ['которой', 'который', 'которого', 'которую'], answer: 'которой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это книга, о которой все говорят', options: ["Bu hamma gapirayotgan kitob", 'Bu men yozgan kitob', 'Bu yangi kitob', "Bu kitob haqida hech kim bilmaydi"], answer: "Bu hamma gapirayotgan kitob" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu men ishlaydigan kompaniya', options: ['Это компания, в которой я работаю', 'Это компания, которую я знаю', 'Это новая компания', 'Это моя компания'], answer: 'Это компания, в которой я работаю' },
              { type: 'fill_blank', sentence: 'Вот дети, для ___ мы купили подарки.', hint: "('qaysiki' — ko'plik, jo'nalish kelishigi)", options: ['которых', 'который', 'которая', 'которое'], answer: 'которых' },
              { type: 'match', pairs: [{ ru: 'С которым', uz: 'Qaysi bilan (erkak)' }, { ru: 'В которой', uz: 'Qaysida (ayol)' }, { ru: 'Для которых', uz: 'Qaysilar uchun' }, { ru: 'Благодаря которому', uz: 'Qaysi tufayli' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это учитель, благодаря которому я выучил язык', options: ["Bu tufayli tilni o'rgangan o'qituvchim", 'Bu meni tilga o\u2019rgatmagan o\u2019qituvchi', 'Bu yangi o\u2019qituvchi', 'Bu mening o\u2019qituvchim emas'], answer: "Bu tufayli tilni o'rgangan o'qituvchim" },
              { type: 'fill_blank', sentence: 'Вот книга, в ___ я нашёл ответ.', hint: "('qaysiki' — ayol so'z, joy-payt kelishigi)", options: ['которой', 'который', 'которого', 'которую'], answer: 'которой' },
              { type: 'listening', audioText: 'Это тот дом, в котором я родился.', question: 'Bu nima?', options: ["Tug'ilgan uyi", "Do'stining uyi", 'Yangi uy', 'Sotilgan uy'], answer: "Tug'ilgan uyi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu men bilan gaplashgan odam', options: ['Это человек, с которым я разговаривал', 'Это человек, которого я не знаю', 'Это новый сосед', 'Это мой брат'], answer: 'Это человек, с которым я разговаривал' },
              { type: 'order', prompt: 'Bu men ishlagan kompaniya', tiles: ['Это', 'компания,', 'в', 'которой', 'я', 'работал'], answer: 'Это компания, в которой я работал' },
              { type: 'fill_blank', sentence: 'Вот город, из ___ я приехал.', hint: "('qaysiki' — erkak so'z, qaratqich kelishigi)", options: ['которого', 'который', 'которая', 'которое'], answer: 'которого' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Это проблема, о которой мы говорили', options: ["Bu biz gaplashgan muammo", 'Bu yangi muammo', 'Bu muammo emas', "Bu hal qilingan muammo"], answer: "Bu biz gaplashgan muammo" },
              { type: 'match', pairs: [{ ru: 'О котором', uz: 'Qaysi haqida (erkak)' }, { ru: 'О которой', uz: 'Qaysi haqida (ayol)' }, { ru: 'Из которого', uz: 'Qaysidan (erkak)' }, { ru: 'Через который', uz: 'Qaysi orqali' }] },
              { type: 'fill_blank', sentence: 'Это мост, через ___ мы прошли.', hint: "('qaysiki' — erkak so'z, tushum kelishigi)", options: ['который', 'которого', 'которому', 'котором'], answer: 'который' },
            ],
          },
          {
            id: 129, title: 'Rus oshxonasi tarixi', icon: CookingPot,
            questions: [
              { type: 'reading', text: 'Русская кухня очень старая. Она начала формироваться много веков назад.', question: 'Rus oshxonasi qanday?', options: ['Juda qadimiy', "Yangi paydo bo'lgan", 'Faqat zamonaviy', 'Boshqa mamlakatdan kelgan'], answer: 'Juda qadimiy' },
              { type: 'reading', text: 'Раньше русские люди ели простую еду: хлеб, кашу и суп.', question: 'Qadimgi ruslar nima yeyishgan?', options: ["Non, bo'tqa va sho'rva", "Faqat go'sht", 'Faqat meva', 'Faqat baliq'], answer: "Non, bo'tqa va sho'rva" },
              { type: 'reading', text: 'Самое известное русское блюдо — борщ, суп из свёклы.', question: 'Eng mashhur rus taomi qaysi?', options: ['Borsh', 'Palov', 'Manti', "Lag'mon"], answer: 'Borsh' },
              { type: 'reading', text: 'Сегодня в русской кухне есть блюда из разных стран мира.', question: 'Bugungi rus oshxonasida nima bor?', options: ["Dunyoning turli mamlakatlaridan taomlar", "Faqat an'anaviy taomlar", 'Faqat vegetarian taomlar', "Hech narsa o'zgarmagan"], answer: "Dunyoning turli mamlakatlaridan taomlar" },
              { type: 'match', pairs: [{ ru: 'Борщ', uz: "Borsh (lavlagi sho'rva)" }, { ru: 'Каша', uz: "Bo'tqa" }, { ru: 'Блины', uz: 'Bliny (quymoq)' }, { ru: 'Пельмени', uz: 'Pelmeni' }] },
              { type: 'reading', text: 'В старину блины пекли на Масленицу — праздник проводов зимы.', question: 'Bliny qachon pishirilardi?', options: ['Maslenitsa bayramida', 'Yangi yilda', 'Har kuni', 'Faqat qishda'], answer: 'Maslenitsa bayramida' },
              { type: 'reading', text: 'Пельмени пришли в русскую кухню из Сибири и очень популярны зимой.', question: 'Pelmeni qayerdan kelgan?', options: ['Sibirdan', 'Yevropadan', 'Osiyodan', 'Kavkazdan'], answer: 'Sibirdan' },
              { type: 'reading', text: 'Квас — старинный русский напиток, который делают из хлеба.', question: 'Kvas nimadan tayyorlanadi?', options: ['Nondan', 'Sutdan', 'Mevadan', 'Sabzavotdan'], answer: 'Nondan' },
              { type: 'reading', text: 'В царской России богатые люди ели изысканные блюда, а бедные — простую еду.', question: 'Podshoh Rossiyasida boy odamlar nima yeyishgan?', options: ['Nafis taomlar', 'Oddiy taomlar', 'Faqat non', 'Hech narsa'], answer: 'Nafis taomlar' },
              { type: 'reading', text: 'Оливье — салат, который придумал французский повар в Москве в XIX веке.', question: 'Salat Olive kim tomonidan o\u2019ylab topilgan?', options: ['Fransuz oshpazi', 'Rus oshpazi', 'Ingliz oshpazi', 'Italyan oshpazi'], answer: 'Fransuz oshpazi' },
              { type: 'match', pairs: [{ ru: 'Квас', uz: 'Kvas' }, { ru: 'Оливье', uz: 'Olive saladi' }, { ru: 'Кулич', uz: 'Kulich' }, { ru: 'Икра', uz: 'Ikra' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Кулич — традиционный пасхальный хлеб', options: ["Kulich - an'anaviy Pasxa noni", 'Kulich - kundalik non', 'Kulich - shirinlik', "Kulich - sho'rva"], answer: "Kulich - an'anaviy Pasxa noni" },
              { type: 'fill_blank', sentence: 'Русские люди любят пить чай с ___.', hint: "('murabbo' so'zi, vositalik kelishigi)", options: ['вареньем', 'варенье', 'варенья', 'варенью'], answer: 'вареньем' },
              { type: 'listening', audioText: 'Чаепитие — важная традиция в русской культуре.', question: 'Rus madaniyatida muhim an\u2019ana nima?', options: ['Choy ichish', 'Non yeyish', 'Sut ichish', 'Meva yeyish'], answer: 'Choy ichish' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Rus taomlari mintaqaga qarab farq qiladi', options: ['Русская еда отличается по регионам', 'Русская еда везде одинаковая', 'Русская еда только в Москве', 'Русская еда не меняется'], answer: 'Русская еда отличается по регионам' },
              { type: 'order', prompt: "Osh - o'zbek va rus dasturxonlarida sevimli taom", tiles: ['Плов', '—', 'любимое', 'блюдо', 'узбекского', 'и', 'русского', 'стола'], answer: 'Плов — любимое блюдо узбекского и русского стола' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самовар использовали для приготовления чая', options: ["Samovar choy tayyorlash uchun ishlatilgan", 'Samovar ovqat pishirish uchun', 'Samovar suv isitish uchun emas', 'Samovar dekorativ buyum'], answer: "Samovar choy tayyorlash uchun ishlatilgan" },
              { type: 'match', pairs: [{ ru: 'Самовар', uz: 'Samovar' }, { ru: 'Матрёшка', uz: 'Matryoshka' }, { ru: 'Хохлома', uz: 'Xoxloma' }, { ru: 'Гжель', uz: 'Gjel' }] },
              { type: 'fill_blank', sentence: 'Русская кухня богата ___ блюдами.', hint: "('sut mahsulotlari' sifati, vositalik ko'plik)", options: ['молочными', 'молочные', 'молочных', 'молочным'], answer: 'молочными' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bortsh lavlagidan tayyorlanadi", options: ['Борщ готовят из свёклы', 'Борщ готовят из капусты', 'Борщ готовят из картофеля', 'Борщ готовят из моркови'], answer: 'Борщ готовят из свёклы' },
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
              { type: 'fill_blank', sentence: 'Ты ___ на самолёт?', hint: "('ulgurmoq' fe'li, 2-shaxs)", options: ['успеваешь', 'успеваю', 'успевает', 'успеваем'], answer: 'успеваешь' },
              { type: 'fill_blank', sentence: 'Она всегда ___ вовремя.', hint: "('ulgurmoq' fe'li, 3-shaxs)", options: ['успевает', 'успеваю', 'успеваешь', 'успеваем'], answer: 'успевает' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я спешу, у меня мало времени', options: ["Shoshilyapman, vaqtim oz", 'Men shoshilmayapman', "Menda ko'p vaqt bor", 'Men band emasman'], answer: "Shoshilyapman, vaqtim oz" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz poyezdga ulgurmadik', options: ['Мы не успели на поезд', 'Мы успели на поезд', 'Мы не спешили', 'Поезд опоздал'], answer: 'Мы не успели на поезд' },
              { type: 'fill_blank', sentence: 'Не ___, у нас ещё есть время.', hint: "('shoshilmoq' fe'lining buyruq shakli)", options: ['спеши', 'спешу', 'спешишь', 'спешит'], answer: 'спеши' },
              { type: 'match', pairs: [{ ru: 'Успеть вовремя', uz: "O'z vaqtida ulgurmoq" }, { ru: 'Опоздать', uz: 'Kechikmoq' }, { ru: 'Спешить куда-то', uz: 'Qayergadir shoshilmoq' }, { ru: 'Не торопиться', uz: 'Shoshilmaslik' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы успели на встречу вовремя', options: ["Biz uchrashuvga o'z vaqtida ulgurdik", 'Biz uchrashuvga kechikdik', 'Biz uchrashuvga bormadik', 'Uchrashuv bekor qilindi'], answer: "Biz uchrashuvga o'z vaqtida ulgurdik" },
              { type: 'fill_blank', sentence: 'Куда вы так ___?', hint: "('shoshilmoq' fe'li, 2-shaxs ko'plik)", options: ['спешите', 'спешишь', 'спешу', 'спешим'], answer: 'спешите' },
              { type: 'listening', audioText: 'Я успел на автобус в последнюю минуту.', question: 'Avtobusga qachon ulgurdi?', options: ['Oxirgi daqiqada', 'Erta', 'Kech', 'Umuman ulgurmadi'], answer: 'Oxirgi daqiqada' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Shoshilmang, hali vaqt bor', options: ['Не спешите, ещё есть время', 'Спешите, времени нет', 'Опоздайте', 'Бегите быстрее'], answer: 'Не спешите, ещё есть время' },
              { type: 'order', prompt: 'Biz aeroportga ulgurishimiz kerak', tiles: ['Нам', 'нужно', 'успеть', 'в', 'аэропорт'], answer: 'Нам нужно успеть в аэропорт' },
              { type: 'fill_blank', sentence: 'Я не ___ закончить работу вовремя.', hint: "('ulgurmoq' fe'li, 1-shaxs)", options: ['успеваю', 'успеваешь', 'успевает', 'успеваем'], answer: 'успеваю' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Торопиться не всегда хорошо', options: ["Shoshilish har doim ham yaxshi emas", 'Shoshilish doim yaxshi', 'Shoshilmaslik yomon', 'Vaqt muhim emas'], answer: "Shoshilish har doim ham yaxshi emas" },
              { type: 'match', pairs: [{ ru: 'Медленно', uz: 'Sekin' }, { ru: 'Быстро', uz: 'Tez' }, { ru: 'Вовремя', uz: "O'z vaqtida" }, { ru: 'С опозданием', uz: 'Kechikib' }] },
              { type: 'fill_blank', sentence: 'Поезд пришёл ___.', hint: "('kechikib' ravishi)", options: ['с опозданием', 'вовремя', 'быстро', 'медленно'], answer: 'с опозданием' },
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
              { type: 'fill_blank', sentence: 'Я вижу ___.', hint: "('do'st' so'zi — jonli, vinitelniy qaratqichga o'xshaydi)", options: ['друга', 'друг', 'другу', 'другом'], answer: 'друга' },
              { type: 'fill_blank', sentence: 'Мы читаем ___.', hint: "('kitob' so'zi — jonsiz, oddiy vinitelniy)", options: ['книгу', 'книга', 'книги', 'книге'], answer: 'книгу' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ты знаешь эту девушку?', options: ["Sen bu qizni tanaysanmi?", 'Sen bu qizga o\u2019xshaysanmi?', 'Sen bu qiz bilan tanishmisan?', 'Sen bu qizdan xat oldingmi?'], answer: "Sen bu qizni tanaysanmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men bu o'qituvchini hurmat qilaman", options: ['Я уважаю этого учителя', 'Я знаю этого учителя', 'Я боюсь этого учителя', 'Я не люблю этого учителя'], answer: 'Я уважаю этого учителя' },
              { type: 'fill_blank', sentence: 'Врач осматривает ___.', hint: "('bemor' so'zi — jonli, vinitelniy qaratqichga o'xshaydi)", options: ['пациента', 'пациент', 'пациенту', 'пациентом'], answer: 'пациента' },
              { type: 'match', pairs: [{ ru: 'Вижу учителя', uz: "O'qituvchini ko'raman" }, { ru: 'Вижу дом', uz: "Uyni ko'raman" }, { ru: 'Знаю соседа', uz: "Qo'shnini bilaman" }, { ru: 'Читаю письмо', uz: "Xatni o'qiyman" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я приглашаю друга на день рождения', options: ["Men do'stimni tug'ilgan kunimga taklif qilyapman", "Men do'stimga sovg'a beryapman", "Men do'stimdan sovg'a olyapman", "Men do'stim bilan gaplashyapman"], answer: "Men do'stimni tug'ilgan kunimga taklif qilyapman" },
              { type: 'fill_blank', sentence: 'Мы благодарим ___.', hint: "('o'qituvchi' so'zi — jonli, vinitelniy qaratqichga o'xshaydi)", options: ['учителя', 'учитель', 'учителю', 'учителем'], answer: 'учителя' },
              { type: 'listening', audioText: 'Я вижу нового ученика в классе.', question: 'Kimni ko\u2019ryapti?', options: ["Yangi o'quvchini", "Eski o'quvchini", "O'qituvchini", 'Direktorni'], answer: "Yangi o'quvchini" },
              { type: 'choice', dir: 'uz2ru', prompt: "Biz yangi mahsulotni sinab ko'ryapmiz", options: ['Мы пробуем новый продукт', 'Мы покупаем новый продукт', 'Мы продаём новый продукт', 'Мы делаем новый продукт'], answer: 'Мы пробуем новый продукт' },
              { type: 'order', prompt: 'U yangi kitobni sotib oldi', tiles: ['Он', 'купил', 'новую', 'книгу'], answer: 'Он купил новую книгу' },
              { type: 'fill_blank', sentence: 'Полиция ищет ___.', hint: "('jinoyatchi' so'zi — jonli, vinitelniy qaratqichga o'xshaydi)", options: ['преступника', 'преступник', 'преступнику', 'преступником'], answer: 'преступника' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дети любят своих родителей', options: ["Bolalar ota-onalarini yaxshi ko'radi", "Bolalar ota-onalaridan qo'rqadi", 'Bolalar ota-onalarini tanimaydi', 'Bolalar ota-onalariga o\u2019xshaydi'], answer: "Bolalar ota-onalarini yaxshi ko'radi" },
              { type: 'match', pairs: [{ ru: 'Люблю сестру', uz: "Opamni yaxshi ko'raman" }, { ru: 'Уважаю директора', uz: 'Direktorni hurmat qilaman' }, { ru: 'Ищу ключ', uz: 'Kalitni qidiryapman' }, { ru: 'Слушаю музыку', uz: 'Musiqa tinglayapman' }] },
              { type: 'fill_blank', sentence: 'Я встретил ___ вчера.', hint: "('do'stim' so'zi — jonli, vinitelniy qaratqichga o'xshaydi)", options: ['друга', 'друг', 'другу', 'другом'], answer: 'друга' },
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
              { type: 'fill_blank', sentence: 'Он идёт ___ работы.', hint: "('-dan' — 'работа' so'zi bilan 'с' ishlatiladi)", options: ['с', 'из', 'от', 'до'], answer: 'с' },
              { type: 'fill_blank', sentence: 'Мы вернулись ___ отпуска.', hint: "('-dan' — 'с' + otpusk)", options: ['с', 'из', 'от', 'до'], answer: 'с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я приехал с юга страны', options: ["Men mamlakatning janubidan keldim", 'Men mamlakatning shimolidan keldim', 'Men chet eldan keldim', "Men shahardan chiqib ketdim"], answer: "Men mamlakatning janubidan keldim" },
              { type: 'choice', dir: 'uz2ru', prompt: 'U kutubxonadan kitob olib keldi', options: ['Он принёс книгу из библиотеки', 'Он принёс книгу с работы', 'Он принёс книгу от друга', 'Он купил книгу в магазине'], answer: 'Он принёс книгу из библиотеки' },
              { type: 'fill_blank', sentence: 'Дети вернулись ___ школы.', hint: "('-dan' — bino uchun 'из')", options: ['из', 'с', 'от', 'до'], answer: 'из' },
              { type: 'match', pairs: [{ ru: 'Из дома', uz: 'Uydan (bino)' }, { ru: 'С урока', uz: 'Darsdan (tadbir)' }, { ru: 'Из магазина', uz: "Do'kondan (bino)" }, { ru: 'С работы', uz: 'Ishdan (tadbir)' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она пришла с тренировки уставшая', options: ["U mashg'ulotdan charchab keldi", "U mashg'ulotga bormadi", "U mashg'ulotda edi", "U mashg'ulotni yoqtiradi"], answer: "U mashg'ulotdan charchab keldi" },
              { type: 'fill_blank', sentence: 'Гости приехали ___ свадьбы.', hint: "('-dan' — tadbir uchun 'с')", options: ['со', 'из', 'от', 'до'], answer: 'со' },
              { type: 'listening', audioText: 'Я иду с работы домой пешком.', question: 'Qayerdan uyga ketyapti?', options: ['Ishdan', 'Maktabdan', "Do'kondan", 'Bozordan'], answer: 'Ishdan' },
              { type: 'choice', dir: 'uz2ru', prompt: "Bolalar bog'chadan qaytishdi", options: ['Дети вернулись из детского сада', 'Дети вернулись с детского сада', 'Дети вернулись от детского сада', 'Дети пошли в детский сад'], answer: 'Дети вернулись из детского сада' },
              { type: 'order', prompt: 'U konsertdan kech qaytdi', tiles: ['Он', 'поздно', 'вернулся', 'с', 'концерта'], answer: 'Он поздно вернулся с концерта' },
              { type: 'fill_blank', sentence: 'Мы идём ___ собрания.', hint: "('-dan' — tadbir uchun 'с')", options: ['с', 'из', 'от', 'до'], answer: 'с' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самолёт летит из Ташкента в Москву', options: ["Samolyot Toshkentdan Moskvaga uchmoqda", "Samolyot Moskvadan Toshkentga uchmoqda", "Samolyot Toshkentda qoladi", "Samolyot Moskvada qo'nadi"], answer: "Samolyot Toshkentdan Moskvaga uchmoqda" },
              { type: 'match', pairs: [{ ru: 'Из страны', uz: 'Mamlakatdan' }, { ru: 'С экзамена', uz: 'Imtihondan' }, { ru: 'Из офиса', uz: 'Ofisdan' }, { ru: 'С прогулки', uz: 'Sayrdan' }] },
              { type: 'fill_blank', sentence: 'Она вернулась ___ прогулки.', hint: "('-dan' — tadbir uchun 'с')", options: ['с', 'из', 'от', 'до'], answer: 'с' },
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
              { type: 'fill_blank', sentence: 'В этой книге много ___.', hint: "('rasm' so'zi, qaratqich ko'plik)", options: ['картинок', 'картинка', 'картинки', 'картинке'], answer: 'картинок' },
              { type: 'fill_blank', sentence: 'На улице мало ___.', hint: "('mashina' so'zi, qaratqich ko'plik)", options: ['машин', 'машина', 'машины', 'машине'], answer: 'машин' },
              { type: 'choice', dir: 'ru2uz', prompt: 'В нашем классе двадцать пять учеников', options: ["Bizning sinfimizda yigirma beshta o'quvchi bor", 'Sinf kichkina', "O'quvchilar kam", "Sinf bo'sh"], answer: "Bizning sinfimizda yigirma beshta o'quvchi bor" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bu shaharda ko'p muzeylar bor", options: ['В этом городе много музеев', 'В этом городе мало музеев', 'В этом городе нет музеев', 'Музеи закрыты'], answer: 'В этом городе много музеев' },
              { type: 'fill_blank', sentence: 'У нас достаточно ___.', hint: "('vaqt' so'zi, qaratqich kelishigi)", options: ['времени', 'время', 'временем', 'времена'], answer: 'времени' },
              { type: 'match', pairs: [{ ru: 'Слишком много', uz: "Juda ko'p" }, { ru: 'Совсем мало', uz: 'Juda oz' }, { ru: 'Немного', uz: 'Bir oz' }, { ru: 'Достаточно', uz: 'Yetarli' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'У меня слишком много работы', options: ["Mening ishim juda ko'p", "Mening ishim yo'q", 'Ishim kam', "Ish oson"], answer: "Mening ishim juda ko'p" },
              { type: 'fill_blank', sentence: 'В саду немного ___.', hint: "('gul' so'zi, qaratqich ko'plik)", options: ['цветов', 'цветы', 'цветам', 'цветами'], answer: 'цветов' },
              { type: 'listening', audioText: 'В нашем офисе слишком много сотрудников.', question: "Ofisda nima ko'p?", options: ['Xodimlar', 'Kompyuterlar', 'Xonalar', 'Stollar'], answer: 'Xodimlar' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bizda yetarlicha resurs bor', options: ['У нас достаточно ресурсов', 'У нас мало ресурсов', 'У нас нет ресурсов', 'Ресурсы кончились'], answer: 'У нас достаточно ресурсов' },
              { type: 'order', prompt: "Uyimizda kam mebel bor", tiles: ['В', 'нашем', 'доме', 'мало', 'мебели'], answer: 'В нашем доме мало мебели' },
              { type: 'fill_blank', sentence: 'У меня нет ___ проблем.', hint: "('hech qanday' so'zi)", options: ['никаких', 'некоторых', 'многих', 'нескольких'], answer: 'никаких' },
              { type: 'choice', dir: 'ru2uz', prompt: 'У нас есть несколько вариантов', options: ["Bizda bir necha variant bor", "Bizda variant yo'q", 'Faqat bitta variant', "Ko'p variant bor"], answer: "Bizda bir necha variant bor" },
              { type: 'match', pairs: [{ ru: 'Полно', uz: "To'lib-toshgan" }, { ru: 'Пусто', uz: "Bo'sh" }, { ru: 'Хватает', uz: 'Yetadi' }, { ru: 'Не хватает', uz: 'Yetmaydi' }] },
              { type: 'fill_blank', sentence: 'Нам не хватает ___.', hint: "('vaqt' so'zi, qaratqich kelishigi)", options: ['времени', 'время', 'временем', 'времена'], answer: 'времени' },
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
              { type: 'fill_blank', sentence: 'Каждый день я ___ на работу пешком.', hint: "('yurmoq' — takroriy, 1-shaxs)", options: ['хожу', 'иду', 'ходишь', 'идёшь'], answer: 'хожу' },
              { type: 'fill_blank', sentence: 'Сейчас мы ___ в аэропорт на такси.', hint: "('bormoq' transportda — hozir, 1-shaxs ko'plik)", options: ['едем', 'ездим', 'едете', 'ездите'], answer: 'едем' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Птицы летают высоко в небе', options: ["Qushlar osmonda baland uchishadi", 'Qushlar yerda yurishadi', 'Qushlar suvda suzishadi', 'Qushlar uxlashyapti'], answer: "Qushlar osmonda baland uchishadi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Baliqlar dengizda suzishadi', options: ['Рыбы плавают в море', 'Рыбы летают в небе', 'Рыбы бегают по земле', 'Рыбы спят в воде'], answer: 'Рыбы плавают в море' },
              { type: 'fill_blank', sentence: 'Обычно я ___ в бассейн два раза в неделю.', hint: "('bormoq' — takroriy, 1-shaxs)", options: ['хожу', 'иду', 'ходишь', 'идёшь'], answer: 'хожу' },
              { type: 'match', pairs: [{ ru: 'Идти пешком', uz: 'Piyoda ketmoq' }, { ru: 'Ехать на машине', uz: 'Mashinada ketmoq' }, { ru: 'Лететь на самолёте', uz: 'Samolyotda uchmoq' }, { ru: 'Плыть на лодке', uz: 'Qayiqda suzmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы бежим, потому что опаздываем', options: ["Biz kechikayotganimiz uchun yugurmoqdamiz", 'Biz sekin yuryapmiz', "Biz to'xtadik", 'Biz vaqtimiz bor'], answer: "Biz kechikayotganimiz uchun yugurmoqdamiz" },
              { type: 'fill_blank', sentence: 'Ты часто ___ в театр?', hint: "('bormoq' — takroriy, 2-shaxs)", options: ['ходишь', 'идёшь', 'ходите', 'идёте'], answer: 'ходишь' },
              { type: 'listening', audioText: 'Он едет на работу на автобусе каждый день.', question: 'Ishga qanday boradi?', options: ['Avtobusda', 'Piyoda', 'Mashinada', 'Poyezdda'], answer: 'Avtobusda' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Biz kelasi hafta chet elga uchamiz', options: ['Мы летим за границу на следующей неделе', 'Мы едем за границу на машине', 'Мы плывём за границу', 'Мы никогда не летаем'], answer: 'Мы летим за границу на следующей неделе' },
              { type: 'order', prompt: "U hozir do'stiga yugurib bormoqda", tiles: ['Он', 'сейчас', 'бежит', 'к', 'другу'], answer: 'Он сейчас бежит к другу' },
              { type: 'fill_blank', sentence: 'Мы ___ в горы каждое лето.', hint: "('bormoq' — takroriy, transportda, 1-shaxs ko'plik)", options: ['ездим', 'едем', 'ездите', 'едете'], answer: 'ездим' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Дельфины плавают очень грациозно', options: ["Delfinlar juda nafis suzishadi", 'Delfinlar sekin suzishadi', 'Delfinlar uchishadi', 'Delfinlar yugurishadi'], answer: "Delfinlar juda nafis suzishadi" },
              { type: 'match', pairs: [{ ru: 'Ходить в школу', uz: 'Maktabga qatnamoq' }, { ru: 'Ездить на работу', uz: 'Ishga qatnamoq' }, { ru: 'Летать в командировки', uz: 'Xizmat safariga uchmoq' }, { ru: 'Плавать в бассейне', uz: 'Basseynda suzmoq' }] },
              { type: 'fill_blank', sentence: 'Спортсмены ___ каждый день на тренировке.', hint: "('yugurmoq' — takroriy, ko'plik)", options: ['бегают', 'бегут', 'бежит', 'бежат'], answer: 'бегают' },
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
              { type: 'fill_blank', sentence: 'Учитель объясняет ___ правило.', hint: "('o'quvchi' so'zi — dativ kelishik)", options: ['ученику', 'ученик', 'ученика', 'учеником'], answer: 'ученику' },
              { type: 'fill_blank', sentence: 'Я пишу письмо ___.', hint: "('buvi' so'zi — dativ kelishik)", options: ['бабушке', 'бабушка', 'бабушку', 'бабушкой'], answer: 'бабушке' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Врач говорит пациенту о лечении', options: ["Shifokor bemorga davolash haqida gapiryapti", 'Shifokor bemordan pul olyapti', "Shifokor bemorni ko'zdan kechiryapti", "Shifokor bemorga dori beryapti"], answer: "Shifokor bemorga davolash haqida gapiryapti" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men do'stimga sovg'a beryapman", options: ['Я дарю подарок другу', 'Я получаю подарок от друга', 'Я покупаю подарок для друга', 'Я говорю о подарке другу'], answer: 'Я дарю подарок другу' },
              { type: 'fill_blank', sentence: 'Она рассказывает ___ сказку.', hint: "('bola' so'zi — dativ kelishik)", options: ['ребёнку', 'ребёнок', 'ребёнка', 'ребёнком'], answer: 'ребёнку' },
              { type: 'match', pairs: [{ ru: 'Писать сестре', uz: 'Opamga yozmoq' }, { ru: 'Звонить брату', uz: "Ukamga qo'ng'iroq qilmoq" }, { ru: 'Помогать другу', uz: "Do'stimga yordam bermoq" }, { ru: 'Давать книгу студенту', uz: 'Talabaga kitob bermoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мама читает ребёнку книгу', options: ["Ona bolaga kitob o'qib beryapti", "Ona bola bilan o'ynayapti", 'Bola onaga kitob beryapti', 'Ona bolani maktabga olib boryapti'], answer: "Ona bolaga kitob o'qib beryapti" },
              { type: 'fill_blank', sentence: 'Мы желаем ___ счастья.', hint: "('siz' so'zining dativ shakli)", options: ['вам', 'вы', 'вас', 'вами'], answer: 'вам' },
              { type: 'listening', audioText: 'Я звоню своей маме каждый вечер.', question: "Kimga qo'ng'iroq qiladi?", options: ['Onasiga', 'Otasiga', "Do'stiga", 'Opasiga'], answer: 'Onasiga' },
              { type: 'choice', dir: 'uz2ru', prompt: 'U menga muhim savol berdi', options: ['Он задал мне важный вопрос', 'Он ответил мне на вопрос', 'Он спросил у меня совет', 'Он рассказал мне историю'], answer: 'Он задал мне важный вопрос' },
              { type: 'order', prompt: "Men onamga qo'ng'iroq qilaman", tiles: ['Я', 'звоню', 'маме'], answer: 'Я звоню маме' },
              { type: 'fill_blank', sentence: 'Он объяснил ___ правила игры.', hint: "('bolalar' so'zi — dativ kelishik ko'plik)", options: ['детям', 'дети', 'детей', 'детьми'], answer: 'детям' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Учительница помогает ученикам с домашним заданием', options: ["O'qituvchi o'quvchilarga uyga vazifada yordam beryapti", "O'qituvchi o'quvchilarni tekshiryapti", "O'quvchilar o'qituvchiga yordam beryapti", "O'qituvchi darsni tugatdi"], answer: "O'qituvchi o'quvchilarga uyga vazifada yordam beryapti" },
              { type: 'match', pairs: [{ ru: 'Кому?', uz: 'Kimga?' }, { ru: 'Чему?', uz: 'Nimaga?' }, { ru: 'Дать другу', uz: "Do'stga bermoq" }, { ru: 'Сказать правду', uz: 'Rost gapirmoq' }] },
              { type: 'fill_blank', sentence: 'Спасибо ___ за помощь.', hint: "('sen' so'zining dativ shakli)", options: ['тебе', 'ты', 'тебя', 'тобой'], answer: 'тебе' },
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
              { type: 'fill_blank', sentence: 'Он объяснил задачу молод___ ученику.', hint: "(erkak so'z uchun dativ -ОМУ)", options: ['ому', 'ой', 'ая', 'ое'], answer: 'ому' },
              { type: 'fill_blank', sentence: 'Я желаю удачи хорош___ команде.', hint: "(ayol so'z uchun dativ -ЕЙ)", options: ['ей', 'ому', 'ая', 'ое'], answer: 'ей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мы отправили посылку старой подруге', options: ["Biz eski do'stimizga (ayol) posilka jo'natdik", "Biz yangi do'stimizga xat yozdik", "Biz eski do'stimizni ziyorat qildik", "Biz posilkani yo'qotdik"], answer: "Biz eski do'stimizga (ayol) posilka jo'natdik" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men aqlli talabaga savol berdim', options: ['Я задал вопрос умному студенту', 'Я дал ответ умному студенту', 'Я похвалил умного студента', 'Я не знаю умного студента'], answer: 'Я задал вопрос умному студенту' },
              { type: 'fill_blank', sentence: 'Дай книгу маленьк___ ребёнку.', hint: "(erkak so'z uchun dativ -ОМУ)", options: ['ому', 'ой', 'ая', 'ое'], answer: 'ому' },
              { type: 'match', pairs: [{ ru: 'Молодому врачу', uz: 'Yosh shifokorga' }, { ru: 'Старой учительнице', uz: "Keksa o'qituvchiga (ayol)" }, { ru: 'Умному студенту', uz: 'Aqlli talabaga' }, { ru: 'Доброй бабушке', uz: 'Mehribon buviga' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я всегда доверяю близкому другу', options: ["Men doim yaqin do'stimga ishonaman", 'Men hech kimga ishonmayman', "Men yaqin do'stimni tanimayman", "Men do'stimni yo'qotdim"], answer: "Men doim yaqin do'stimga ishonaman" },
              { type: 'fill_blank', sentence: 'Он написал письмо люб___ жене.', hint: "(ayol so'z uchun dativ -ИМОЙ, sevimli)", options: ['имой', 'ому', 'ая', 'ое'], answer: 'имой' },
              { type: 'listening', audioText: 'Мы подарили цветы нашей любимой учительнице.', question: 'Kimga gul berishdi?', options: ["Sevimli o'qituvchisiga", 'Onasiga', "Do'stiga", 'Buvisiga'], answer: "Sevimli o'qituvchisiga" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men yangi qo'shnimga yordam berdim", options: ['Я помог новому соседу', 'Я познакомился с новым соседом', 'Я не знаю нового соседа', 'Я живу рядом с новым соседом'], answer: 'Я помог новому соседу' },
              { type: 'order', prompt: 'Biz keksa buvimizga tashrif buyurdik', tiles: ['Мы', 'навестили', 'нашу', 'старую', 'бабушку'], answer: 'Мы навестили нашу старую бабушку' },
              { type: 'fill_blank', sentence: 'Дай воды маленьк___ девочке.', hint: "(ayol so'z uchun dativ -ОЙ)", options: ['ой', 'ому', 'ая', 'ое'], answer: 'ой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я купил подарок дорогому другу', options: ["Men aziz do'stimga sovg'a sotib oldim", "Men sovg'ani sotdim", "Men do'stimdan sovg'a oldim", "Men do'stimni unutdim"], answer: "Men aziz do'stimga sovg'a sotib oldim" },
              { type: 'match', pairs: [{ ru: 'Дорогому гостю', uz: 'Aziz mehmonga' }, { ru: 'Новой соседке', uz: "Yangi qo'shniga (ayol)" }, { ru: 'Известному писателю', uz: 'Mashhur yozuvchiga' }, { ru: 'Молодой актрисе', uz: 'Yosh aktrisaga' }] },
              { type: 'fill_blank', sentence: 'Врач дал совет больн___ пациенту.', hint: "(erkak so'z uchun dativ -ОМУ)", options: ['ому', 'ой', 'ая', 'ое'], answer: 'ому' },
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
              { type: 'fill_blank', sentence: '___ жарко летом.', hint: "('unga (erkak)' — dativ shaklida)", options: ['Ему', 'Он', 'Его', 'Им'], answer: 'Ему' },
              { type: 'fill_blank', sentence: '___ грустно без тебя.', hint: "('unga (ayol)' — dativ shaklida)", options: ['Ей', 'Она', 'Её', 'Ею'], answer: 'Ей' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Тебе не холодно на улице?', options: ["Ko'chada senga sovuq emasmi?", 'Ko\u2019chada senga issiq emasmi?', 'Sen ko\u2019chadamisan?', 'Sen sovuqni yaxshi ko\u2019rasanmi?'], answer: "Ko'chada senga sovuq emasmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Ularga bu yerda qiziq', options: ['Им здесь интересно', 'Им здесь скучно', 'Им здесь плохо', 'Им здесь тепло'], answer: 'Им здесь интересно' },
              { type: 'fill_blank', sentence: '___ трудно понять эту тему.', hint: "('bizga' — dativ shaklida)", options: ['Нам', 'Мы', 'Нас', 'Нами'], answer: 'Нам' },
              { type: 'match', pairs: [{ ru: 'Мне плохо', uz: 'Menga yomon' }, { ru: 'Ему легко', uz: 'Unga oson' }, { ru: 'Ей трудно', uz: 'Unga qiyin' }, { ru: 'Нам приятно', uz: 'Bizga yoqimli' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мне важно знать правду', options: ["Menga haqiqatni bilish muhim", 'Menga haqiqat kerak emas', 'Men haqiqatni bilaman', "Men yolg'on gapiryapman"], answer: "Menga haqiqatni bilish muhim" },
              { type: 'fill_blank', sentence: 'Тебе не ___ ждать так долго?', hint: "('zerikarli' — qisqa sifat)", options: ['скучно', 'скучный', 'скучная', 'скучные'], answer: 'скучно' },
              { type: 'listening', audioText: 'Мне очень стыдно за своё поведение.', question: 'Nima uchun uyaladi?', options: ["O'z xatti-harakati uchun", 'Boshqa birov uchun', 'Hech narsa uchun', 'Sovuq uchun'], answer: "O'z xatti-harakati uchun" },
              { type: 'choice', dir: 'uz2ru', prompt: "Menga sizni ko'rish yoqimli", options: ['Мне приятно вас видеть', 'Мне неприятно вас видеть', 'Я вас не вижу', 'Я вас не знаю'], answer: 'Мне приятно вас видеть' },
              { type: 'order', prompt: 'Bizga bu yerda yaxshi', tiles: ['Нам', 'здесь', 'хорошо'], answer: 'Нам здесь хорошо' },
              { type: 'fill_blank', sentence: '___ нужно идти домой.', hint: "('menga' — dativ shaklida)", options: ['Мне', 'Я', 'Меня', 'Мной'], answer: 'Мне' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Ему повезло с работой', options: ["Unga ish borasida omad kulib boqdi", 'Unga omad kulib boqmadi', 'U ishsiz', 'U ishdan norozi'], answer: "Unga ish borasida omad kulib boqdi" },
              { type: 'match', pairs: [{ ru: 'Мне везёт', uz: 'Menga omad kuladi' }, { ru: 'Тебе везёт', uz: 'Senga omad kuladi' }, { ru: 'Ей повезло', uz: 'Unga omad kulib boqdi' }, { ru: 'Нам не повезло', uz: 'Bizga omad kulib boqmadi' }] },
              { type: 'fill_blank', sentence: 'Детям ___ играть на улице.', hint: "('qiziq' — qisqa sifat)", options: ['интересно', 'интересный', 'интересная', 'интересные'], answer: 'интересно' },
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
              { type: 'fill_blank', sentence: 'Мне ___ новая машина.', hint: "('kerak' — ayol so'z uchun)", options: ['нужна', 'нужен', 'нужно', 'нужны'], answer: 'нужна' },
              { type: 'fill_blank', sentence: 'Нам ___ новые книги.', hint: "('kerak' — ko'plik uchun)", options: ['нужны', 'нужен', 'нужна', 'нужно'], answer: 'нужны' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно мне задать вопрос?', options: ["Savol bersam mumkinmi?", "Savolim yo'q", 'Men savol berdim', 'Sizga savolim bor'], answer: "Savol bersam mumkinmi?" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerda fotosurat olish mumkin emas', options: ['Здесь нельзя фотографировать', 'Здесь можно фотографировать', 'Здесь нужно фотографировать', 'Здесь фотографируют'], answer: 'Здесь нельзя фотографировать' },
              { type: 'fill_blank', sentence: 'Тебе ___ отдохнуть.', hint: "('kerak' — neytral shakl 'нужно')", options: ['нужно', 'нужен', 'нужна', 'нужны'], answer: 'нужно' },
              { type: 'match', pairs: [{ ru: 'Можно войти?', uz: "Kirsam bo'ladimi?" }, { ru: 'Нельзя шуметь', uz: 'Shovqin qilish mumkin emas' }, { ru: 'Надо работать', uz: 'Ishlash kerak' }, { ru: 'Нужно спешить', uz: 'Shoshilish kerak' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Надо беречь природу', options: ["Tabiatni asrash kerak", 'Tabiatni buzish mumkin', 'Tabiat muhim emas', "Tabiat o'zi asraladi"], answer: "Tabiatni asrash kerak" },
              { type: 'fill_blank', sentence: 'Здесь ___ парковаться.', hint: "('taqiqlangan' — 'нельзя')", options: ['нельзя', 'можно', 'надо', 'нужно'], answer: 'нельзя' },
              { type: 'listening', audioText: 'Вам нужно подписать эти документы.', question: 'Nima qilish kerak?', options: ['Hujjatlarni imzolash', "Hujjatlarni o'qish", 'Hujjatlarni yozish', "Hujjatlarni yo'qotish"], answer: 'Hujjatlarni imzolash' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Menga sizning yordamingiz kerak', options: ['Мне нужна ваша помощь', 'Мне не нужна помощь', 'Я помогаю вам', 'Вы мне не нужны'], answer: 'Мне нужна ваша помощь' },
              { type: 'order', prompt: 'Bu yerda chekish mumkin emas', tiles: ['Здесь', 'нельзя', 'курить'], answer: 'Здесь нельзя курить' },
              { type: 'fill_blank', sentence: 'Ему ___ операция.', hint: "('kerak' — ayol so'z uchun)", options: ['нужна', 'нужен', 'нужно', 'нужны'], answer: 'нужна' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Можно открыть окно? Здесь душно', options: ["Derazani ochsam bo'ladimi? Bu yerda dim", 'Derazani yopsam bo\u2019ladimi?', 'Deraza ochiq', 'Bu yerda sovuq'], answer: "Derazani ochsam bo'ladimi? Bu yerda dim" },
              { type: 'match', pairs: [{ ru: 'Разрешено', uz: 'Ruxsat etilgan' }, { ru: 'Запрещено', uz: 'Taqiqlangan' }, { ru: 'Обязательно', uz: 'Majburiy' }, { ru: 'Необязательно', uz: 'Majburiy emas' }] },
              { type: 'fill_blank', sentence: 'Курить в самолёте строго ___.', hint: "('taqiqlangan' — 'запрещено')", options: ['запрещено', 'разрешено', 'обязательно', 'можно'], answer: 'запрещено' },
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
              { type: 'fill_blank', sentence: '___ сюда, пожалуйста!', hint: "('kelmoq' fe'lining buyruq shakli, hurmat)", options: ['Подойдите', 'Подойти', 'Подходит', 'Подошёл'], answer: 'Подойдите' },
              { type: 'fill_blank', sentence: 'Не ___ так быстро!', hint: "('yurmoq' fe'lining buyruq shakli, inkor)", options: ['ходите', 'ходить', 'ходит', 'ходил'], answer: 'ходите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Слушайте внимательно!', options: ['Diqqat bilan tinglang!', 'Gapiring!', 'Yozing!', 'Uxlang!'], answer: 'Diqqat bilan tinglang!' },
              { type: 'choice', dir: 'uz2ru', prompt: 'Kirishga ijozat bering, iltimos!', options: ['Разрешите войти, пожалуйста!', 'Не входите, пожалуйста!', 'Закройте дверь!', 'Подождите здесь!'], answer: 'Разрешите войти, пожалуйста!' },
              { type: 'fill_blank', sentence: '___ мне, пожалуйста!', hint: "('yordam bermoq' fe'lining buyruq shakli)", options: ['Помогите', 'Помочь', 'Помогает', 'Помог'], answer: 'Помогите' },
              { type: 'match', pairs: [{ ru: 'Не бойтесь!', uz: "Qo'rqmang!" }, { ru: 'Не волнуйтесь!', uz: 'Xavotirlanmang!' }, { ru: 'Не переживайте!', uz: 'Tashvishlanmang!' }, { ru: 'Успокойтесь!', uz: 'Tinchlaning!' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не бойтесь ошибаться!', options: ["Xato qilishdan qo'rqmang!", 'Xato qilmang!', 'Xato qildingiz!', "Xato yo'q!"], answer: "Xato qilishdan qo'rqmang!" },
              { type: 'fill_blank', sentence: '___ окно, пожалуйста, здесь жарко.', hint: "('ochmoq' fe'lining buyruq shakli)", options: ['Откройте', 'Открыть', 'Открывает', 'Открыл'], answer: 'Откройте' },
              { type: 'listening', audioText: 'Пожалуйста, выключите телефоны перед фильмом.', question: 'Filmdan oldin nima qilish kerak?', options: ["Telefonlarni o'chirish", 'Telefonlarni yoqish', 'Ovoz chiqarish', 'Suratga olish'], answer: "Telefonlarni o'chirish" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu yerda kutib turing', options: ['Подождите здесь', 'Идите отсюда', 'Бегите быстрее', 'Садитесь там'], answer: 'Подождите здесь' },
              { type: 'order', prompt: 'Yordam bering, iltimos!', tiles: ['Помогите,', 'пожалуйста!'], answer: 'Помогите, пожалуйста!' },
              { type: 'fill_blank', sentence: '___ внимание на детали.', hint: "('e'tibor bermoq' fe'lining buyruq shakli)", options: ['Обратите', 'Обратить', 'Обращает', 'Обратил'], answer: 'Обратите' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Не забудьте закрыть дверь!', options: ["Eshikni yopishni unutmang!", 'Eshikni oching!', 'Eshikni yoping!', 'Eshik ochiq qoldi!'], answer: "Eshikni yopishni unutmang!" },
              { type: 'match', pairs: [{ ru: 'Начните!', uz: 'Boshlang!' }, { ru: 'Закончите!', uz: 'Tugating!' }, { ru: 'Продолжайте!', uz: 'Davom eting!' }, { ru: 'Остановитесь!', uz: "To'xtang!" }] },
              { type: 'fill_blank', sentence: '___ работать над проектом!', hint: "('davom etmoq' fe'lining buyruq shakli)", options: ['Продолжайте', 'Продолжать', 'Продолжает', 'Продолжил'], answer: 'Продолжайте' },
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
              { type: 'fill_blank', sentence: 'Он посоветовал ___ отдохнуть.', hint: "('men' so'zining dativ shakli)", options: ['мне', 'я', 'меня', 'мной'], answer: 'мне' },
              { type: 'fill_blank', sentence: 'Я разрешил ___ пойти на вечеринку.', hint: "('u erkak' so'zining dativ shakli)", options: ['ему', 'его', 'им', 'него'], answer: 'ему' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она попросила меня о помощи', options: ["U mendan yordam so'radi", 'Men undan yordam so\u2019radim', "U menga yordam berdi", "Men unga yordam berdim"], answer: "U mendan yordam so'radi" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Men senga rost gapirishni maslahat beraman', options: ['Я советую тебе говорить правду', 'Я прошу тебя молчать', 'Я запрещаю тебе говорить', 'Я не верю тебе'], answer: 'Я советую тебе говорить правду' },
              { type: 'fill_blank', sentence: 'Врач посоветовал ___ больше отдыхать.', hint: "('bemor' so'zining dativ shakli)", options: ['пациенту', 'пациент', 'пациента', 'пациентом'], answer: 'пациенту' },
              { type: 'match', pairs: [{ ru: 'Просить о помощи', uz: "Yordam so'ramoq" }, { ru: 'Советовать что-то', uz: 'Nimanidir maslahat bermoq' }, { ru: 'Разрешать делать', uz: 'Qilishga ruxsat bermoq' }, { ru: 'Запрещать делать', uz: 'Qilishni taqiqlamoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Родители запретили ему поздно гулять', options: ["Ota-onasi unga kech sayr qilishni taqiqlashdi", 'Ota-onasi unga sayr qilishga ruxsat berishdi', 'U kech qaytdi', 'U uyda qoldi'], answer: "Ota-onasi unga kech sayr qilishni taqiqlashdi" },
              { type: 'fill_blank', sentence: 'Я советую ___ быть осторожным.', hint: "('sen' so'zining dativ shakli)", options: ['тебе', 'ты', 'тебя', 'тобой'], answer: 'тебе' },
              { type: 'listening', audioText: 'Он попросил друга помочь с переездом.', question: 'Nima uchun yordam so\u2019radi?', options: ["Ko'chib o'tish uchun", 'Ovqat uchun', 'Ish uchun', 'Sayohat uchun'], answer: "Ko'chib o'tish uchun" },
              { type: 'choice', dir: 'uz2ru', prompt: "Men undan meni kechirishini so'radim", options: ['Я попросил его простить меня', 'Я простил его', 'Он попросил меня простить', 'Мы поссорились'], answer: 'Я попросил его простить меня' },
              { type: 'order', prompt: "Men senga bu haqida o'ylashni maslahat beraman", tiles: ['Я', 'советую', 'тебе', 'подумать', 'об', 'этом'], answer: 'Я советую тебе подумать об этом' },
              { type: 'fill_blank', sentence: 'Учитель разрешил ___ выйти.', hint: "('o'quvchilar' so'zining dativ ko'plik shakli)", options: ['ученикам', 'ученики', 'учеников', 'учениками'], answer: 'ученикам' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я прошу вас говорить тише', options: ["Sizdan sekinroq gapirishingizni so'rayman", 'Men gapirmoqchi emasman', 'Siz baland gapirasiz', 'Men eshitmayapman'], answer: "Sizdan sekinroq gapirishingizni so'rayman" },
              { type: 'match', pairs: [{ ru: 'Совет', uz: 'Maslahat' }, { ru: 'Просьба', uz: 'Iltimos' }, { ru: 'Разрешение', uz: 'Ruxsat' }, { ru: 'Запрет', uz: 'Taqiq' }] },
              { type: 'fill_blank', sentence: 'Дайте мне, пожалуйста, хороший ___.', hint: "('maslahat' so'zi)", options: ['совет', 'совета', 'совету', 'советом'], answer: 'совет' },
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
              { type: 'fill_blank', sentence: 'Я режу хлеб ___.', hint: "('pichoq' so'zi — instrumental)", options: ['ножом', 'нож', 'ножу', 'ноже'], answer: 'ножом' },
              { type: 'fill_blank', sentence: 'Мы едим суп ___.', hint: "('qoshiq' so'zi — instrumental)", options: ['ложкой', 'ложка', 'ложку', 'ложке'], answer: 'ложкой' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я иду в кино с братом', options: ["Men ukam bilan kinoga ketyapman", "Men ukam uchun bilet oldim", "Men ukamdan kinoni so'radim", "Men ukamni kinoga taklif qilmadim"], answer: "Men ukam bilan kinoga ketyapman" },
              { type: 'choice', dir: 'uz2ru', prompt: 'U vilka bilan ovqatlanadi', options: ['Он ест вилкой', 'Он ест ложкой', 'Он ест руками', 'Он не ест'], answer: 'Он ест вилкой' },
              { type: 'fill_blank', sentence: 'Она рисует ___.', hint: "('qalam' so'zi — instrumental)", options: ['карандашом', 'карандаш', 'карандашу', 'карандаше'], answer: 'карандашом' },
              { type: 'match', pairs: [{ ru: 'Писать ручкой', uz: 'Ruchka bilan yozmoq' }, { ru: 'Резать ножом', uz: 'Pichoq bilan kesmoq' }, { ru: 'Есть вилкой', uz: 'Vilka bilan yemoq' }, { ru: 'Рисовать карандашом', uz: 'Qalam bilan chizmoq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Она увлекается фотографией', options: ["U fotografiya bilan berilib shug'ullanadi", 'U fotografiyani yomon ko\u2019radi', 'U fotograf emas', "U kamerasi yo'q"], answer: "U fotografiya bilan berilib shug'ullanadi" },
              { type: 'fill_blank', sentence: 'Мой брат стал ___.', hint: "('shifokor' so'zi — instrumental, 'bo'lib qolmoq' bilan)", options: ['врачом', 'врач', 'врача', 'врачу'], answer: 'врачом' },
              { type: 'listening', audioText: 'Я занимаюсь плаванием три раза в неделю.', question: "Nima bilan shug'ullanadi?", options: ['Suzish', 'Yugurish', "Chang'i", 'Velosiped'], answer: 'Suzish' },
              { type: 'choice', dir: 'uz2ru', prompt: "U shifokor bo'ldi", options: ['Он стал врачом', 'Он был врачом', 'Он хочет стать врачом', 'Он врач'], answer: 'Он стал врачом' },
              { type: 'order', prompt: 'Men gitara bilan qiziqaman', tiles: ['Я', 'интересуюсь', 'гитарой'], answer: 'Я интересуюсь гитарой' },
              { type: 'fill_blank', sentence: 'Мы разговариваем ___ по телефону.', hint: "('u ayol' so'zining instrumental shakli, 'с' bilan)", options: ['с ней', 'с она', 'с её', 'с ей'], answer: 'с ней' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Он гордится своей семьёй', options: ["U o'z oilasi bilan faxrlanadi", 'U oilasini yomon ko\u2019radi', 'U oilasiz', 'U oilasidan uyaladi'], answer: "U o'z oilasi bilan faxrlanadi" },
              { type: 'match', pairs: [{ ru: 'Гордиться', uz: "Faxrlanmoq (+bilan)" }, { ru: 'Разговаривать', uz: 'Gaplashmoq (+bilan)' }, { ru: 'Дружить', uz: "Do'stlashmoq (+bilan)" }, { ru: 'Работать', uz: "Ishlamoq (+bo'lib)" }] },
              { type: 'fill_blank', sentence: 'Мы дружим ___ уже пять лет.', hint: "('u erkak' so'zining instrumental shakli, 'с' bilan)", options: ['с ним', 'с он', 'с его', 'с ему'], answer: 'с ним' },
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
              { type: 'fill_blank', sentence: 'Собака сидит перед ___.', hint: "('eshik' so'zi — instrumental)", options: ['дверью', 'дверь', 'двери', 'дверями'], answer: 'дверью' },
              { type: 'fill_blank', sentence: 'Дерево растёт за ___.', hint: "('uy' so'zi — instrumental)", options: ['домом', 'дом', 'дому', 'доме'], answer: 'домом' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Кошка спряталась под кроватью', options: ["Mushuk karavot ostiga yashirindi", "Mushuk karavot ustida yotibdi", "Mushuk karavot yonida", "Mushuk uxlayapti"], answer: "Mushuk karavot ostiga yashirindi" },
              { type: 'choice', dir: 'uz2ru', prompt: "Bog' uy orqasida", options: ['Сад находится за домом', 'Сад находится перед домом', 'Сад находится под домом', 'Сад находится над домом'], answer: 'Сад находится за домом' },
              { type: 'fill_blank', sentence: 'Между школой и ___ есть парк.', hint: "('kasalxona' so'zi — instrumental)", options: ['больницей', 'больница', 'больницу', 'больнице'], answer: 'больницей' },
              { type: 'match', pairs: [{ ru: 'Между городами', uz: 'Shaharlar orasida' }, { ru: 'Рядом с рекой', uz: 'Daryo yonida' }, { ru: 'Над горой', uz: "Tog' ustida" }, { ru: 'Под мостом', uz: "Ko'prik ostida" }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Самолёт летит над облаками', options: ["Samolyot bulutlar ustidan uchmoqda", 'Samolyot bulutlar ostida', 'Samolyot yerda', "Samolyot to'xtadi"], answer: "Samolyot bulutlar ustidan uchmoqda" },
              { type: 'fill_blank', sentence: 'Дети играют перед ___.', hint: "('maktab' so'zi — instrumental)", options: ['школой', 'школа', 'школу', 'школе'], answer: 'школой' },
              { type: 'listening', audioText: 'Кот лежит под столом, а собака — рядом с диваном.', question: 'It qayerda?', options: ['Divan yonida', 'Stol ostida', 'Stol ustida', 'Eshik oldida'], answer: 'Divan yonida' },
              { type: 'choice', dir: 'uz2ru', prompt: "Ko'prik daryo ustida", options: ['Мост находится над рекой', 'Мост находится под рекой', 'Мост находится за рекой', 'Моста нет'], answer: 'Мост находится над рекой' },
              { type: 'order', prompt: 'Bola onasi bilan yuribdi', tiles: ['Ребёнок', 'идёт', 'рядом', 'с', 'мамой'], answer: 'Ребёнок идёт рядом с мамой' },
              { type: 'fill_blank', sentence: 'Библиотека находится между музеем и ___.', hint: "('teatr' so'zi — instrumental)", options: ['театром', 'театр', 'театру', 'театре'], answer: 'театром' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Я живу над магазином', options: ["Men do'kon ustida yashayman", "Men do'kon ostida yashayman", "Men do'kon yonida yashayman", "Men do'konda ishlayman"], answer: "Men do'kon ustida yashayman" },
              { type: 'match', pairs: [{ ru: 'Перед зданием', uz: 'Bino oldida' }, { ru: 'За зданием', uz: 'Bino ortida' }, { ru: 'Под зданием', uz: 'Bino ostida' }, { ru: 'Над зданием', uz: 'Bino ustida' }] },
              { type: 'fill_blank', sentence: 'Флаг развевается над ___.', hint: "('bino' so'zi — instrumental)", options: ['зданием', 'здание', 'зданию', 'здании'], answer: 'зданием' },
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
              { type: 'fill_blank', sentence: 'Сегодня ___, чем вчера.', hint: "('sovuqroq' — solishtirma daraja)", options: ['холоднее', 'холодный', 'более холодный', 'холодная'], answer: 'холоднее' },
              { type: 'fill_blank', sentence: 'Он бегает ___ меня.', hint: "('tezroq' — solishtirma daraja)", options: ['быстрее', 'быстрый', 'более быстрый', 'быстрая'], answer: 'быстрее' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Этот телефон дороже того', options: ["Bu telefon undan qimmatroq", 'Bu telefon undan arzonroq', 'Ikkalasi bir xil narxda', "Bu telefon eskirgan"], answer: "Bu telefon undan qimmatroq" },
              { type: 'choice', dir: 'uz2ru', prompt: 'Bu vazifa avvalgisidan qiyinroq', options: ['Это задание сложнее предыдущего', 'Это задание легче предыдущего', 'Задания одинаковые', 'Это задание последнее'], answer: 'Это задание сложнее предыдущего' },
              { type: 'fill_blank', sentence: 'Моя сестра ___ меня.', hint: "('yoshroq' — solishtirma daraja)", options: ['младше', 'молодая', 'более молодая', 'юная'], answer: 'младше' },
              { type: 'match', pairs: [{ ru: 'Старше', uz: 'Kattaroq (yosh)' }, { ru: 'Младше', uz: 'Kichikroq (yosh)' }, { ru: 'Выше', uz: 'Balandroq' }, { ru: 'Ниже', uz: 'Pastroq' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'Мой брат старше меня на два года', options: ["Akam mendan ikki yosh katta", 'Akam mendan kichik', 'Biz tengdoshmiz', "Akam mendan uzoq"], answer: "Akam mendan ikki yosh katta" },
              { type: 'fill_blank', sentence: 'Это ___ простой способ.', hint: "('eng oddiy' — превосходная daraja)", options: ['самый', 'более', 'лучше', 'менее'], answer: 'самый' },
              { type: 'listening', audioText: 'Этот город больше, чем наш, но менее красивый.', question: 'Bu shahar qanday?', options: ['Kattaroq, ammo kamroq chiroyli', 'Kichikroq va chiroyli', 'Bir xil', 'Eng chiroyli'], answer: 'Kattaroq, ammo kamroq chiroyli' },
              { type: 'choice', dir: 'uz2ru', prompt: "U mendan ko'ra ko'proq bilim oladi", options: ['Он получает больше знаний, чем я', 'Он получает меньше знаний', 'Мы получаем одинаковые знания', 'Он не учится'], answer: 'Он получает больше знаний, чем я' },
              { type: 'order', prompt: "Bu yil o'tgan yildan issiqroq", tiles: ['Этот', 'год', 'теплее', 'прошлого'], answer: 'Этот год теплее прошлого' },
              { type: 'fill_blank', sentence: 'Здоровье ___ денег.', hint: "('muhimroq' — solishtirma daraja)", options: ['важнее', 'важный', 'более важный', 'важная'], answer: 'важнее' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Чем больше ты стараешься, тем лучше результат', options: ["Qancha ko'p harakat qilsang, natija shuncha yaxshi bo'ladi", 'Harakat qilish shart emas', 'Natija har doim bir xil', "Kam harakat qil"], answer: "Qancha ko'p harakat qilsang, natija shuncha yaxshi bo'ladi" },
              { type: 'match', pairs: [{ ru: 'Самый лучший', uz: 'Eng yaxshisi' }, { ru: 'Самый большой', uz: 'Eng kattasi' }, { ru: 'Самый маленький', uz: 'Eng kichigi' }, { ru: 'Самый умный', uz: 'Eng aqllisi' }] },
              { type: 'fill_blank', sentence: 'Это ___ интересная книга, которую я читал.', hint: "(превосходная daraja — 'eng')", options: ['самая', 'более', 'менее', 'лучше'], answer: 'самая' },
            ],
          },
          {
            id: 144, title: "Rossiyada odob-axloq qoidalari", icon: BookHeart,
            questions: [
              { type: 'reading', text: 'В России не любят свистеть дома: считают, что тогда не будет денег.', question: 'Uyda nima qilish yoqtirilmaydi?', options: ['Hushtak chalish', 'Kulish', "Qo'shiq aytish", 'Gaplashish'], answer: 'Hushtak chalish' },
              { type: 'reading', text: 'Если хотите подарить цветы, дарите нечётное число: один, три, пять.', question: "Gul sovg'a qilishda nechta bo'lishi kerak?", options: ['Toq son (1, 3, 5)', 'Juft son (2, 4, 6)', "Har doim o'nta", "Farqi yo'q"], answer: 'Toq son (1, 3, 5)' },
              { type: 'reading', text: 'На тосте говорят «За здоровье!», а не «На здоровье!».', question: 'Tost aytishda qanday deyish kerak?', options: ['«За здоровье!»', '«На здоровье!»', '«Спасибо!»', '«Пожалуйста!»'], answer: '«За здоровье!»' },
              { type: 'reading', text: 'Перед едой в России часто выпивают, а после этого едят горячий суп.', question: 'Ovqatdan oldin odatda nima qilishadi?', options: ['Ichishadi', 'Uxlashadi', 'Yugurishadi', 'Kuylashadi'], answer: 'Ichishadi' },
              { type: 'match', pairs: [{ ru: 'Обычай', uz: 'Odat' }, { ru: 'Традиция', uz: "An'ana" }, { ru: 'Суеверие', uz: 'Xurofot' }, { ru: 'Примета', uz: 'Alomat' }] },
              { type: 'reading', text: 'В России принято снимать обувь, когда заходишь в гости.', question: 'Mehmonga kirganda nima qilish odat?', options: ['Poyabzalni yechish', 'Palto kiyish', "Sovg'a berish", "Qo'l yuvish"], answer: 'Poyabzalni yechish' },
              { type: 'reading', text: 'Здороваться через порог считается плохой приметой.', question: 'Bo\u2019sag\u2019a orqali salomlashish qanday alomat?', options: ['Yomon alomat', 'Yaxshi alomat', 'Oddiy narsa', 'Muhim emas'], answer: 'Yomon alomat' },
              { type: 'reading', text: 'В России не принято дарить чётное количество цветов на похороны, а нечётное на праздники.', question: 'Bayramda gul necha dona bo\u2019lishi kerak?', options: ['Toq son', 'Juft son', 'Har doim beshta', "Farqi yo'q"], answer: 'Toq son' },
              { type: 'reading', text: 'Гостей в России часто угощают чаем с вареньем и сладостями.', question: 'Mehmonlarni odatda nima bilan siylashadi?', options: ['Choy, murabbo va shirinliklar', 'Faqat suv', 'Faqat non', 'Hech narsa'], answer: 'Choy, murabbo va shirinliklar' },
              { type: 'reading', text: 'В России рукопожатие через порог тоже считается плохой приметой.', question: 'Bo\u2019sag\u2019a orqali qo\u2019l siqishish qanday hisoblanadi?', options: ['Yomon alomat', 'Yaxshi odat', 'Zarur qoida', 'Muhim emas'], answer: 'Yomon alomat' },
              { type: 'match', pairs: [{ ru: 'Гостеприимство', uz: "Mehmondo'stlik" }, { ru: 'Уважение к старшим', uz: 'Kattalarga hurmat' }, { ru: 'Вежливость', uz: 'Xushmuomalalik' }, { ru: 'Скромность', uz: 'Kamtarlik' }] },
              { type: 'choice', dir: 'ru2uz', prompt: 'В русской культуре важно уважать старших', options: ["Rus madaniyatida kattalarni hurmat qilish muhim", 'Yoshlar muhimroq', 'Yosh farqi ahamiyatsiz', "Faqat do'stlarni hurmat qilish kerak"], answer: "Rus madaniyatida kattalarni hurmat qilish muhim" },
              { type: 'fill_blank', sentence: 'В гостях нужно вести себя ___.', hint: "('xushmuomala' ravishi)", options: ['вежливо', 'вежливый', 'вежливая', 'вежливое'], answer: 'вежливо' },
              { type: 'listening', audioText: 'В России принято приходить в гости не с пустыми руками.', question: 'Mehmonga borishda nima olish kerak?', options: ["Biror narsa (bo'sh qo'l bilan emas)", 'Hech narsa kerak emas', 'Faqat gul', 'Faqat shirinlik'], answer: "Biror narsa (bo'sh qo'l bilan emas)" },
              { type: 'choice', dir: 'uz2ru', prompt: "Rus madaniyatida mehmondo'stlik muhim", options: ['В русской культуре важно гостеприимство', 'В русской культуре гости не важны', 'Гостей не приглашают', 'Гостеприимство не нужно'], answer: 'В русской культуре важно гостеприимство' },
              { type: 'order', prompt: 'Uyga kirishdan oldin poyabzalni yeching', tiles: ['Снимите', 'обувь', 'перед', 'входом', 'в', 'дом'], answer: 'Снимите обувь перед входом в дом' },
              { type: 'fill_blank', sentence: 'На столе всегда должен быть ___.', hint: "('non' so'zi)", options: ['хлеб', 'хлеба', 'хлебу', 'хлебом'], answer: 'хлеб' },
              { type: 'choice', dir: 'ru2uz', prompt: 'Считается плохой приметой свистеть в доме', options: ["Uyda hushtak chalish yomon alomat hisoblanadi", 'Uyda hushtak chalish yaxshi', 'Hushtak chalish odat emas', 'Bu haqda hech kim bilmaydi'], answer: "Uyda hushtak chalish yomon alomat hisoblanadi" },
              { type: 'match', pairs: [{ ru: 'Примета', uz: 'Alomat' }, { ru: 'Суеверие', uz: 'Xurofot' }, { ru: 'Обычай', uz: 'Odat' }, { ru: 'Ритуал', uz: 'Marosim' }] },
              { type: 'fill_blank', sentence: 'Многие люди верят в старые ___.', hint: "('alomatlar' so'zining ko'plik shakli)", options: ['приметы', 'примета', 'примете', 'приметой'], answer: 'приметы' },
            ],
          },
        ],
      },
      {
        title: "11-bo'lim: Lug'at boyligi",
        lessons: [
          {
            id: 1012, title: '1-qism', icon: SquareUser,
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
            id: 1013, title: '2-qism', icon: UsersRound,
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
            id: 1014, title: '3-qism', icon: CircleUserRound,
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
            id: 1015, title: '4-qism', icon: Fingerprint,
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
            id: 1016, title: '5-qism', icon: UserCheck,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'yo’lboshchi', options: ['пол', 'бабушка', 'хвастун', 'лидер, вождь'], answer: 'лидер, вождь' },
              { type: 'choice', dir: 'ru2uz', prompt: 'начальник, руководитель', options: ['sovchi', 'boshliq, rahbar', 'qari odam', 'ovchi'], answer: 'boshliq, rahbar' },
              { type: 'listening', audioText: 'любовник', question: "Bu so'z qanday tarjima qilinadi?", options: ['oshiq', 'o’yinchi', 'voyaga yetgan', 'savdogar'], answer: 'oshiq' },
              { type: 'choice', dir: 'ru2uz', prompt: 'любовница', options: ['murda', 'chaqaloq, go\'dak', 'aybdor', 'ma’shuqa'], answer: 'ma’shuqa' },
              { type: 'choice', dir: 'uz2ru', prompt: 'qo’riqchi', options: ['охранник', 'мачеха', 'строитель', 'папа'], answer: 'охранник' },
              { type: 'match', pairs: [{ ru: 'лидер, вождь', uz: 'yo’lboshchi' }, { ru: 'начальник, руководитель', uz: 'boshliq, rahbar' }, { ru: 'любовник', uz: 'oshiq' }, { ru: 'любовница', uz: 'ma’shuqa' }, { ru: 'охранник', uz: 'qo’riqchi' }, { ru: 'сторож', uz: 'qorovul' }] },
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
      {
        title: "2-bo'lim: Lug'at boyligi",
        lessons: [
          {
            id: 1017, title: '1-qism', icon: Users,
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
            id: 1018, title: '2-qism', icon: UserCircle,
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
            id: 1019, title: '3-qism', icon: Contact,
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
            id: 1020, title: '4-qism', icon: SquareUser,
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
            id: 1021, title: '5-qism', icon: UsersRound,
            questions: [
              { type: 'choice', dir: 'uz2ru', prompt: 'yordamchi', options: ['молодость, юность', 'помощник(ца)', 'зять', 'свояченица (сестра жены)'], answer: 'помощник(ца)' },
              { type: 'choice', dir: 'ru2uz', prompt: 'дежурный', options: ['navbatchi', 'qaynona', 'sovchi', 'jins'], answer: 'navbatchi' },
              { type: 'listening', audioText: 'хвастун', question: "Bu so'z qanday tarjima qilinadi?", options: ['maqtanchoq', 'taniqli', 'janob, xonim', 'haydovchi'], answer: 'maqtanchoq' },
              { type: 'choice', dir: 'ru2uz', prompt: 'заложник', options: ['qaynaka', 'xodim', 'asir', 'oqsoch'], answer: 'asir' },
              { type: 'choice', dir: 'uz2ru', prompt: 'merosxo’r', options: ['папа', 'народ', 'наследник, наследница', 'человек'], answer: 'наследник, наследница' },
              { type: 'choice', dir: 'ru2uz', prompt: 'представитель, агент', options: ['yoshlar', 'vakil', 'ma’shuqa', 'qiz jiyan'], answer: 'vakil' },
              { type: 'match', pairs: [{ ru: 'помощник(ца)', uz: 'yordamchi' }, { ru: 'дежурный', uz: 'navbatchi' }, { ru: 'хвастун', uz: 'maqtanchoq' }, { ru: 'заложник', uz: 'asir' }, { ru: 'наследник, наследница', uz: 'merosxo’r' }, { ru: 'представитель, агент', uz: 'vakil' }, { ru: 'сваха', uz: 'sovchi' }] },
            ],
          },
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
  // MUHIM: mahalliy (foydalanuvchi qurilmasi) sanasidan foydalanamiz, UTC'dan emas!
  // Agar UTC ishlatilsa, Toshkent kabi UTC+5 mintaqalarda foydalanuvchi tungi soat
  // 00:00–05:00 oralig'ida ilovadan foydalansa, sana hali "kechagi kun" deb hisoblanib,
  // seriya (streak) noto'g'ri uzilib qolishi mumkin edi.
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
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

// ---- Yuraklarni tiklash (har 3 daqiqada bittadan) ----
const MAX_HEARTS = 5;
const HEART_REGEN_MS = 3 * 60 * 1000;
// Ilovaga qayta kirilganda, oflayn o'tgan vaqtga qarab necha yurak tiklanganini hisoblaydi.
function computeHeartsOnLoad(extra) {
  const storedHearts = typeof extra.hearts === 'number' ? extra.hearts : MAX_HEARTS;
  const storedAt = extra.heartsUpdatedAt || null;
  if (storedHearts >= MAX_HEARTS || !storedAt) {
    return { hearts: Math.min(MAX_HEARTS, storedHearts), heartsUpdatedAt: null };
  }
  const elapsed = Date.now() - storedAt;
  const gained = Math.floor(elapsed / HEART_REGEN_MS);
  if (gained <= 0) return { hearts: storedHearts, heartsUpdatedAt: storedAt };
  const newHearts = Math.min(MAX_HEARTS, storedHearts + gained);
  return { hearts: newHearts, heartsUpdatedAt: newHearts >= MAX_HEARTS ? null : storedAt + gained * HEART_REGEN_MS };
}
function formatHeartTimer(ms) {
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

// ---- Daraja aniqlash (placement) uchun tezkor test savollari ----
// Har bir darajadan (A1..C1) bittadan 'choice' turidagi savol tanlanadi.
const PLACEMENT_BLOCK_SIZE = 4;

function getPlacementQuestions() {
  const out = [];
  LEVELS.forEach((lvl, levelIdx) => {
    const allLessons = [];
    lvl.units.forEach((u) => u.lessons.forEach((ls) => allLessons.push(ls)));
    const n = allLessons.length;
    if (!n) return;
    for (let k = 0; k < PLACEMENT_BLOCK_SIZE; k++) {
      const pos = n <= PLACEMENT_BLOCK_SIZE ? k % n : Math.min(Math.floor((k * n) / PLACEMENT_BLOCK_SIZE), n - 1);
      const lesson = allLessons[pos];
      if (!lesson) continue;
      const q = lesson.questions.find((qq) => qq.type === 'choice')
        || lesson.questions.find((qq) => qq.options && qq.answer)
        || null;
      if (!q) continue;
      out.push({ levelIdx, levelLabel: lvl.label, q });
    }
  });
  return out;
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
const CREATOR_PHOTO = 'data:image/jpeg;base64,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';
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
  panda: { face: '#FFFFFF', ear: '#16181D' },
  owl: { face: '#E7D8BE', ear: '#6B4A2E' },
  fox: { face: '#E8813A', ear: '#D2803D' },
  lion: { face: '#F3C25E', ear: '#D69A2D' },
  leopard: { face: '#EFCB8E', ear: '#3B2A1E' },
};

// Har bir hayvon uchun ko'z markazlari — ko'zoynak aksessuari shu koordinatalarga moslashadi
const EYE_ANCHORS = {
  panda: { lx: 40, ly: 63, rx: 80, ry: 63, r: 12 },
  owl: { lx: 42, ly: 58, rx: 78, ry: 58, r: 15 },
  fox: { lx: 40, ly: 57, rx: 80, ry: 57, r: 11 },
  lion: { lx: 42, ly: 60, rx: 78, ry: 60, r: 10 },
  leopard: { lx: 40, ly: 62, rx: 80, ry: 62, r: 11 },
};

function Mascot({ variant = 'panda', accessories = [], size = 96 }) {
  const st = AVATAR_STYLES[variant] || AVATAR_STYLES.panda;
  const eye = EYE_ANCHORS[variant] || EYE_ANCHORS.panda;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block' }}>
      {variant === 'panda' && (
        <>
          <circle cx="28" cy="26" r="17" fill={st.ear} />
          <circle cx="92" cy="26" r="17" fill={st.ear} />
          <circle cx="60" cy="64" r="46" fill={st.face} stroke="#16181D" strokeWidth="3" />
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
        </>
      )}

      {variant === 'owl' && (
        <>
          <polygon points="24,22 34,2 42,26" fill={st.ear} />
          <polygon points="96,22 86,2 78,26" fill={st.ear} />
          <circle cx="60" cy="66" r="46" fill={st.face} stroke="#16181D" strokeWidth="3" />
          <circle cx="60" cy="66" r="38" fill="none" stroke="#B99B6B" strokeWidth="2" opacity="0.55" />
          <circle cx="42" cy="58" r="17" fill="#3B2A1E" />
          <circle cx="78" cy="58" r="17" fill="#3B2A1E" />
          <circle cx="42" cy="58" r="12.5" fill="#E8A93C" />
          <circle cx="78" cy="58" r="12.5" fill="#E8A93C" />
          <circle cx="42" cy="58" r="5.5" fill="#16181D" />
          <circle cx="78" cy="58" r="5.5" fill="#16181D" />
          <circle cx="45" cy="54" r="2.2" fill="#fff" />
          <circle cx="81" cy="54" r="2.2" fill="#fff" />
          <polygon points="53,76 67,76 60,92" fill="#D9862E" stroke="#16181D" strokeWidth="1.5" />
          <path d="M42 96 L48 102 L54 96" stroke="#B99B6B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M66 96 L72 102 L78 96" stroke="#B99B6B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {variant === 'fox' && (
        <>
          <polygon points="14,38 34,4 46,34" fill="#2A1A12" />
          <polygon points="106,38 86,4 74,34" fill="#2A1A12" />
          <polygon points="18,33 33,10 41,31" fill={st.ear} />
          <polygon points="102,33 87,10 79,31" fill={st.ear} />
          <path d="M14,64 A46,46 0 1,1 106,64 Q98,104 60,112 Q22,104 14,64 Z" fill={st.face} stroke="#16181D" strokeWidth="3" />
          <path d="M34,80 Q60,68 86,80 Q84,104 60,110 Q36,104 34,80 Z" fill="#FFF6EC" />
          <path d="M34 58 Q40 49 48 58 Q40 65 34 58 Z" fill="#16181D" />
          <path d="M86 58 Q80 49 72 58 Q80 65 86 58 Z" fill="#16181D" />
          <circle cx="38.5" cy="55.5" r="1.6" fill="#fff" />
          <circle cx="81.5" cy="55.5" r="1.6" fill="#fff" />
          <polygon points="53,92 67,92 60,100" fill="#16181D" />
          <path d="M50 101 Q60 107 70 101" stroke="#16181D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="26" cy="78" r="6" fill="#F6B4A0" opacity="0.6" />
          <circle cx="94" cy="78" r="6" fill="#F6B4A0" opacity="0.6" />
        </>
      )}

      {variant === 'lion' && (
        <>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => {
            const rad = (a * Math.PI) / 180;
            const spread = (11 * Math.PI) / 180;
            const bx1 = 60 + 30 * Math.cos(rad - spread);
            const by1 = 64 + 30 * Math.sin(rad - spread);
            const bx2 = 60 + 30 * Math.cos(rad + spread);
            const by2 = 64 + 30 * Math.sin(rad + spread);
            const tx = 60 + 54 * Math.cos(rad);
            const ty = 64 + 54 * Math.sin(rad);
            return (
              <polygon
                key={a}
                points={`${bx1},${by1} ${tx},${ty} ${bx2},${by2}`}
                fill={i % 2 === 0 ? '#D69A2D' : '#C9862A'}
              />
            );
          })}
          <circle cx="60" cy="66" r="40" fill={st.face} stroke="#16181D" strokeWidth="3" />
          <ellipse cx="60" cy="88" rx="22" ry="16" fill="#FBE7B8" />
          <path d="M34 50 Q42 44 50 50" stroke="#8A5A26" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M70 50 Q78 44 86 50" stroke="#8A5A26" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="42" cy="60" r="7.5" fill="#fff" stroke="#16181D" strokeWidth="2" />
          <circle cx="78" cy="60" r="7.5" fill="#fff" stroke="#16181D" strokeWidth="2" />
          <circle cx="42" cy="60" r="4" fill="#16181D" />
          <circle cx="78" cy="60" r="4" fill="#16181D" />
          <path d="M50,78 Q60,72 70,78 Q68,86 60,88 Q52,86 50,78 Z" fill="#16181D" />
          <path d="M50 92 Q60 98 70 92" stroke="#16181D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="30" cy="82" r="6" fill="#F6B4A0" opacity="0.5" />
          <circle cx="90" cy="82" r="6" fill="#F6B4A0" opacity="0.5" />
        </>
      )}

      {variant === 'leopard' && (
        <>
          <circle cx="30" cy="28" r="14" fill={st.ear} />
          <circle cx="90" cy="28" r="14" fill={st.ear} />
          <circle cx="30" cy="30" r="7" fill={st.face} />
          <circle cx="90" cy="30" r="7" fill={st.face} />
          <circle cx="60" cy="64" r="46" fill={st.face} stroke="#16181D" strokeWidth="3" />
          {[[34, 40], [52, 26], [86, 40], [68, 24], [22, 66], [98, 66], [38, 96], [82, 96]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="#5C3A1E" strokeWidth="3" strokeDasharray="9 3" opacity="0.85" />
          ))}
          <ellipse cx="40" cy="62" rx="9" ry="11" fill="#D9B84A" stroke="#16181D" strokeWidth="2" />
          <ellipse cx="80" cy="62" rx="9" ry="11" fill="#D9B84A" stroke="#16181D" strokeWidth="2" />
          <ellipse cx="40" cy="62" rx="2.2" ry="7" fill="#16181D" />
          <ellipse cx="80" cy="62" rx="2.2" ry="7" fill="#16181D" />
          <circle cx="37" cy="58" r="1.4" fill="#fff" />
          <circle cx="77" cy="58" r="1.4" fill="#fff" />
          <polygon points="55,80 65,80 60,86" fill="#16181D" />
          <path d="M60 86 L60 90" stroke="#16181D" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 92 Q60 97 70 92" stroke="#16181D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="32" cy="84" r="6" fill="#F6B4A0" opacity="0.6" />
          <circle cx="88" cy="84" r="6" fill="#F6B4A0" opacity="0.6" />
        </>
      )}

      {accessories.includes('scarf') && (
        <g>
          <path d="M24 96 Q60 112 96 96 L96 104 Q60 120 24 104 Z" fill="#C1502E" />
          <path d="M52 108 L52 122 L64 118 L58 108 Z" fill="#A83F20" />
        </g>
      )}
      {accessories.includes('glasses') && (
        <g stroke="#16181D" strokeWidth="3" fill="none">
          <circle cx={eye.lx} cy={eye.ly} r={eye.r} fill="rgba(255,255,255,0.15)" />
          <circle cx={eye.rx} cy={eye.ry} r={eye.r} fill="rgba(255,255,255,0.15)" />
          <path d={`M${eye.lx + eye.r} ${eye.ly} L${eye.rx - eye.r} ${eye.ry}`} />
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
let __reverbNode = null;
let __reverbConnected = false;
function getAudioCtx() {
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  if (!__audioCtx) __audioCtx = new AC();
  if (__audioCtx.state === 'suspended') __audioCtx.resume();
  return __audioCtx;
}
// Sodda algoritmik reverb: qisqa "oq shovqin" buferini eksponensial pasaytirib,
// tabiiy xona-aksi hissi beradi — tashqi audio fayl talab qilmaydi.
function createReverbBuffer(ctx, duration = 1.4, decay = 2.6) {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const buffer = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buffer.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return buffer;
}
function getReverb(ctx) {
  if (!__reverbNode) {
    __reverbNode = ctx.createConvolver();
    __reverbNode.buffer = createReverbBuffer(ctx);
  }
  if (!__reverbConnected) {
    __reverbNode.connect(ctx.destination);
    __reverbConnected = true;
  }
  return __reverbNode;
}
// Ikkita bir-biridan sal chetlashtirilgan (detuned) oscillator + past chastotali filtr +
// yumshoq ADSR konvert + ozgina reverb — bitta tekis ovoz o'rniga boyroq, "premium" tembr beradi.
function richTone(ctx, { freq, start = 0, duration = 0.3, type = 'sine', peak = 0.18, filterFreq = 3200, q = 0.6, wet = 0.16 }) {
  const t = ctx.currentTime + start;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(filterFreq, t);
  filter.Q.setValueAtTime(q, t);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(peak, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(Math.max(peak * 0.32, 0.0006), t + duration * 0.55);
  gain.gain.exponentialRampToValueAtTime(0.0004, t + duration);

  filter.connect(gain);
  gain.connect(ctx.destination);

  [-5, 5].forEach((detune) => {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    osc.detune.setValueAtTime(detune, t);
    osc.connect(filter);
    osc.start(t);
    osc.stop(t + duration + 0.06);
  });

  if (wet > 0) {
    const wetGain = ctx.createGain();
    wetGain.gain.setValueAtTime(wet, t);
    filter.connect(wetGain);
    wetGain.connect(getReverb(ctx));
  }
}
function playCorrectSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 659.25, start: 0, duration: 0.42, type: 'sine', peak: 0.15, filterFreq: 3600, wet: 0.2 });
  richTone(ctx, { freq: 987.77, start: 0.08, duration: 0.5, type: 'sine', peak: 0.13, filterFreq: 3400, wet: 0.24 });
}
function playWrongSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 196.0, start: 0, duration: 0.24, type: 'sine', peak: 0.15, filterFreq: 850, q: 0.5, wet: 0.05 });
}
function playMatchTickSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 880, start: 0, duration: 0.12, type: 'sine', peak: 0.11, filterFreq: 4200, wet: 0.08 });
}
function playMismatchSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 220, start: 0, duration: 0.16, type: 'sine', peak: 0.11, filterFreq: 1300, q: 0.5, wet: 0.05 });
}
function playLessonPassSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 523.25, start: 0, duration: 0.32, type: 'sine', peak: 0.13, filterFreq: 4000, wet: 0.18 });
  richTone(ctx, { freq: 659.25, start: 0.1, duration: 0.32, type: 'sine', peak: 0.13, filterFreq: 4000, wet: 0.2 });
  richTone(ctx, { freq: 783.99, start: 0.2, duration: 0.34, type: 'sine', peak: 0.14, filterFreq: 4200, wet: 0.22 });
  richTone(ctx, { freq: 1046.5, start: 0.3, duration: 0.65, type: 'sine', peak: 0.16, filterFreq: 4600, wet: 0.32 });
}
function playLessonRetrySound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 349.23, start: 0, duration: 0.24, type: 'sine', peak: 0.12, filterFreq: 2200, wet: 0.1 });
  richTone(ctx, { freq: 293.66, start: 0.12, duration: 0.34, type: 'sine', peak: 0.12, filterFreq: 2000, wet: 0.12 });
}
function playHeartsOutSound() {
  const ctx = getAudioCtx();
  if (!ctx || !SOUND_ENABLED) return;
  richTone(ctx, { freq: 246.94, start: 0, duration: 0.24, type: 'sine', peak: 0.14, filterFreq: 1100, q: 0.5, wet: 0.08 });
  richTone(ctx, { freq: 185.0, start: 0.14, duration: 0.44, type: 'sine', peak: 0.15, filterFreq: 950, q: 0.5, wet: 0.1 });
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [xp, setXp] = useState(100);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [streak, setStreak] = useState(0);
  const [streakFreezes, setStreakFreezes] = useState(0);
  const [hasBadge, setHasBadge] = useState(false);
  const [hints, setHints] = useState(0);
  const [ownedAvatars, setOwnedAvatars] = useState(['panda']);
  const [activeAvatar, setActiveAvatar] = useState('panda');
  const [ownedAccessories, setOwnedAccessories] = useState([]);
  const [equippedAccessories, setEquippedAccessories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminError, setAdminError] = useState('');
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminStats, setAdminStats] = useState(null);
  const [soundOn, setSoundOn] = useState(true);
  const [placementIdx, setPlacementIdx] = useState(0);
  const [placementSelected, setPlacementSelected] = useState(null);
  const [placementChecked, setPlacementChecked] = useState(false);
  const [placementResults, setPlacementResults] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [ratings, setRatings] = useState({});
  const [activeLevelId, setActiveLevelId] = useState(null);
  const [activeUnitIdx, setActiveUnitIdx] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [heartsUpdatedAt, setHeartsUpdatedAt] = useState(null);
  const [heartTimerOpen, setHeartTimerOpen] = useState(false);
  const [nowTick, setNowTick] = useState(() => Date.now());
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
  // Joriy ko'rsatilayotgan darajadan qat'i nazar, imtihon kutayotgan yoki sertifikat
  // olishga tayyor bo'lgan darajani topadi (avtomatik keyingi darajaga o'tilganda ham yo'qolib qolmasligi uchun)
  const examNeededLevel = LEVELS.find((lv) => isLevelComplete(lv) && !examPassedLevels.includes(lv.id));
  const certReadyLevel = !examNeededLevel ? LEVELS.find((lv) => isLevelComplete(lv) && examPassedLevels.includes(lv.id)) : null;
  const canSkipAhead = LEVELS.findIndex((l) => l.id === selectedLevel) < LEVELS.length - 1;

  function findLesson(id) {
    for (const lv of LEVELS) for (const u of lv.units) for (const ls of u.lessons) if (ls.id === id) return ls;
    return null;
  }

  const activeLesson = examMode ? { id: 'exam', title: "Yakuniy imtihon", questions: examQuestions } : (activeLessonId != null ? findLesson(activeLessonId) : null);
  const activeQuestion = activeLesson ? activeLesson.questions[qIndex] : null;
  const hintEligible = !!(activeQuestion && activeQuestion.type !== 'order' && activeQuestion.type !== 'match' && !checked);

  // Ilova ochilganda saqlangan sessiyani window.storage'dan tiklashga harakat qilish
  async function applySessionData(accessToken, userId, profileFallback) {
    setProgressLoaded(false);
    let prof = null;
    try {
      prof = await supaGetProfile(accessToken, userId);
    } catch (e) {
      prof = null;
    }
    setProfile(prof || profileFallback);
    setSession({ access_token: accessToken, user_id: userId });
    let prog = null;
    let fetchOk = false;
    try {
      prog = await supaGetProgress(accessToken, userId);
      fetchOk = true;
    } catch (e) {
      // Bitta marta qayta urinib ko'ramiz (vaqtinchalik tarmoq uzilishi bo'lishi mumkin)
      try {
        await new Promise((r) => setTimeout(r, 1200));
        prog = await supaGetProgress(accessToken, userId);
        fetchOk = true;
      } catch (e2) {
        fetchOk = false;
      }
    }
    const hasProgress = !!(prog && Array.isArray(prog.completed) && prog.completed.length > 0);
    if (fetchOk) {
      if (prog) {
        if (Array.isArray(prog.completed)) setCompleted(prog.completed);
        if (prog.ratings) setRatings(prog.ratings);
        if (typeof prog.xp === 'number' && (prog.xp > 0 || hasProgress)) setXp(prog.xp);
        else setXp(100);
      } else {
        setXp(100);
      }
      // progressLoaded'ni faqat so'rov chindan ham muvaffaqiyatli tugaganda 'true' qilamiz.
      // Aks holda (fetchOk=false) uni 'false' holida qoldiramiz — shu orqali avtomatik
      // saqlash effekti standart (hali yuklanmagan) qiymatlarni bazaga yozib, foydalanuvchining
      // haqiqiy progressini bosib yozib qo'yishining oldini olamiz.
      setProgressLoaded(true);
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
    const hc = computeHeartsOnLoad(extra);
    setHearts(hc.hearts);
    setHeartsUpdatedAt(hc.heartsUpdatedAt);
    if (hc.hearts !== extra.hearts || hc.heartsUpdatedAt !== extra.heartsUpdatedAt) {
      saveExtra(userId, { hearts: hc.hearts, heartsUpdatedAt: hc.heartsUpdatedAt });
    }
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
          let validUser = null;
          try {
            validUser = await supaGetUser(accessToken);
          } catch (e) {
            validUser = null;
          }
          if (!validUser && saved.refresh_token) {
            try {
              const refreshed = await supaRefreshSession(saved.refresh_token);
              accessToken = refreshed.access_token;
              await localSession.set('session', JSON.stringify({ access_token: refreshed.access_token, refresh_token: refreshed.refresh_token, user_id: refreshed.user.id }), false);
              validUser = refreshed.user;
            } catch (e) {
              validUser = null;
            }
          }
          if (validUser) {
            const displayName = validUser.user_metadata?.full_name || validUser.user_metadata?.name || '';
            await applySessionData(accessToken, validUser.id || userId, { name: displayName, email: validUser.email || '' });
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
  // (progressLoaded=true bo'lmasa hech qachon saqlamaymiz — aks holda hali yuklanmagan
  // standart qiymatlar (bo'sh completed, 100 xp) haqiqiy saqlangan progressni bosib yozib qo'yishi mumkin edi.
  // Qo'shimcha himoya: xp===0 faqat signOut() dan keyingi bir lahzalik holat, haqiqiy yuklangan
  // sessiyada hech qachon bo'lmaydi — shuning uchun bunday holatni ham saqlamaymiz.)
  useEffect(() => {
    if (!session || !progressLoaded) return;
    if (xp === 0 && completed.length === 0) return;
    supaSaveProgress(session.access_token, session.user_id, { completed, ratings, xp }).catch(() => {});
  }, [completed, ratings, xp, session, progressLoaded]);

  // Yuraklar holatini (soni va tiklanish vaqti) qurilmada saqlash — shu orqali darsdan
  // chiqib qayta kirilganda ham yuraklar bekorga to'lib qolmaydi.
  useEffect(() => {
    if (!session || !progressLoaded) return;
    saveExtra(session.user_id, { hearts, heartsUpdatedAt });
  }, [hearts, heartsUpdatedAt, session, progressLoaded]);

  // Har soniyada yuraklar tiklanishini tekshiradi (3 daqiqada bittadan, MAX_HEARTS gacha)
  useEffect(() => {
    setNowTick(Date.now());
    if (hearts >= MAX_HEARTS || heartsUpdatedAt == null) return;
    const id = setInterval(() => {
      const now = Date.now();
      setNowTick(now);
      const gained = Math.floor((now - heartsUpdatedAt) / HEART_REGEN_MS);
      if (gained > 0) {
        const newHearts = Math.min(MAX_HEARTS, hearts + gained);
        setHearts(newHearts);
        setHeartsUpdatedAt(newHearts >= MAX_HEARTS ? null : heartsUpdatedAt + gained * HEART_REGEN_MS);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [hearts, heartsUpdatedAt]);

  // Joriy (tanlangan) daraja to'liq tugagach, agar keyingi daraja ochilgan bo'lsa,
  // foydalanuvchini avtomatik ravishda o'sha darajaga o'tkazadi.
  useEffect(() => {
    const idx = LEVELS.findIndex((l) => l.id === selectedLevel);
    if (idx === -1 || idx >= LEVELS.length - 1) return;
    if (isLevelComplete(LEVELS[idx]) && isLevelUnlocked(LEVELS[idx + 1].id)) {
      setSelectedLevel(LEVELS[idx + 1].id);
    }
  }, [completed, selectedLevel]);

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
          setProgressLoaded(true);
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
    setProgressLoaded(false);
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

  const ADMIN_PASSWORD = 'Zoxida2017';

  function submitAdminPassword() {
    if (adminPasswordInput === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      setAdminError('');
      setAdminPasswordInput('');
      setScreen('admin-stats');
      fetchAdminStats();
    } else {
      setAdminError("Parol noto'g'ri");
    }
  }

  async function fetchAdminStats() {
    if (!session) return;
    setAdminLoading(true);
    setAdminError('');
    try {
      const headers = { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${session.access_token}` };
      const [profRes, progRes] = await Promise.all([
        fetch(`${SUPABASE_URL}/rest/v1/profiles?select=*`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/progress?select=*`, { headers }),
      ]);
      const profiles = profRes.ok ? await profRes.json() : [];
      const progress = progRes.ok ? await progRes.json() : [];
      setAdminStats({
        profiles: Array.isArray(profiles) ? profiles : [],
        progress: Array.isArray(progress) ? progress : [],
      });
    } catch (e) {
      setAdminError("Ma'lumotlarni yuklab bo'lmadi. Internetni tekshiring.");
    } finally {
      setAdminLoading(false);
    }
  }

  function isLevelComplete(level) {
    const total = level.units.reduce((s, u) => s + u.lessons.length, 0);
    const done = level.units.reduce((s, u) => s + u.lessons.filter((ls) => completed.includes(ls.id)).length, 0);
    return total > 0 && done === total;
  }

  function isLevelUnlocked(levelId) {
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
    setHeartsUpdatedAt((t) => (t == null ? Date.now() : t));
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
    const newResults = [...placementResults, correct];
    setPlacementResults(newResults);
    setTimeout(() => {
      const atEnd = placementIdx + 1 >= qs.length;
      const enteringNewLevel = !atEnd && qs[placementIdx + 1].levelIdx !== cur.levelIdx;
      if (atEnd || enteringNewLevel) {
        const blockSize = qs.filter((q) => q.levelIdx === cur.levelIdx).length;
        const blockResults = newResults.slice(newResults.length - blockSize);
        const rightCount = blockResults.filter(Boolean).length;
        const passedBlock = rightCount / blockSize >= 0.7;
        if (!passedBlock) {
          finishPlacement(cur.levelIdx - 1);
          return;
        }
        if (atEnd) {
          finishPlacement(cur.levelIdx);
          return;
        }
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

  function finishPlacement(passedLevelIdx) {
    const userId = session ? session.user_id : 'guest';
    const cefrLevels = LEVELS;
    const currentIdx = Math.max(0, cefrLevels.findIndex((l) => l.id === selectedLevel));
    if (passedLevelIdx >= 0) {
      const idsToComplete = [];
      for (let i = 0; i <= passedLevelIdx; i++) {
        const lvl = cefrLevels[i];
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
      const nextIdx = Math.min(passedLevelIdx + 1, cefrLevels.length - 1);
      // Qayta sinovdan o'tilganda ham foydalanuvchini hech qachon ORQAGA surmaymiz —
      // faqat oldinga (yoki joyida) siljitadi.
      if (nextIdx > currentIdx) {
        setSelectedLevel(cefrLevels[nextIdx].id);
        setXp((x) => x + 30);
      }
    } else if (!session || currentIdx === 0) {
      setSelectedLevel(cefrLevels[0].id);
    }
    saveExtra(userId, { placementDone: true });
    setScreen('home');
  }

  function startPlacementTest() {
    setPlacementIdx(0);
    setPlacementSelected(null);
    setPlacementChecked(false);
    setPlacementResults([]);
    setScreen('placement-test');
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
      if (!examMode) {
        setHearts((h) => {
          if (h >= MAX_HEARTS) setHeartsUpdatedAt(Date.now());
          return Math.max(0, h - 1);
        });
      } else {
        setHearts((h) => Math.max(0, h - 1));
      }
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
  const pathContainerRef = useRef(null);
  const [scrollTick, setScrollTick] = useState(0);

  // Yo'l (path) ekranida pastga scroll qilinganda tugunlarga yengil 3D "coverflow" tilt effekti beradi:
  // ekran markaziga yaqin tugun to'liq va tekis, undan uzoqlashgani sari biroz burilib/kichrayadi.
  useEffect(() => {
    if (screen !== 'path') return;
    let rafId = null;
    const onScroll = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        setScrollTick((t) => t + 1);
        rafId = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [screen]);
  const pathContainerTop = pathContainerRef.current ? pathContainerRef.current.getBoundingClientRect().top : 0;
  const viewportCenterY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  void scrollTick; // scroll harakati re-render'ni majburlab, yuqoridagi qiymatni yangilab turadi
  function nodeTiltStyle(y) {
    const nodeViewportY = pathContainerTop + y;
    const progress = viewportCenterY ? Math.max(-1, Math.min(1, (nodeViewportY - viewportCenterY) / viewportCenterY)) : 0;
    const tilt = progress * -14;
    const scaleF = 1 - Math.abs(progress) * 0.1;
    return `translate(-50%,-50%) rotateX(${tilt}deg) scale(${scaleF})`;
  }

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
        @keyframes screenFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes staggerUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes numberPop { 0% { transform: scale(1); } 40% { transform: scale(1.32); } 100% { transform: scale(1); } }
        @keyframes drawerSlide { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes scrimFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes tabPop { 0% { transform: scale(1); } 45% { transform: scale(1.14); } 100% { transform: scale(1); } }
        @keyframes softBounceIn { 0% { opacity: 0; transform: scale(.85); } 60% { opacity: 1; transform: scale(1.04); } 100% { transform: scale(1); } }
        @keyframes progressShine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .screen-fade { animation: screenFadeIn .4s cubic-bezier(.22,1,.36,1) both; }
        .stagger-item { opacity: 0; animation: staggerUp .45s cubic-bezier(.22,1,.36,1) both; }
        .number-pop { display: inline-block; animation: numberPop .38s cubic-bezier(.34,1.56,.64,1) both; }
        .drawer-slide { animation: drawerSlide .32s cubic-bezier(.22,1,.36,1) both; }
        .scrim-fade { animation: scrimFade .22s ease both; }
        .tab-pop { animation: tabPop .32s cubic-bezier(.34,1.56,.64,1) both; }
        .soft-bounce-in { animation: softBounceIn .4s cubic-bezier(.22,1,.36,1) both; }
        .press-btn { transition: transform .12s ease, box-shadow .12s ease, filter .12s ease; }
        .press-btn:active { transform: scale(0.96); filter: brightness(0.97); }
        .lift-card { transition: transform .18s cubic-bezier(.22,1,.36,1), box-shadow .18s ease, border-color .18s ease; }
        .lift-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,0.14); }
        .lift-card:active { transform: translateY(-1px) scale(0.985); }
        .icon-hover { transition: transform .15s ease; }
        .icon-hover:hover { transform: scale(1.12); }
        .fade-swap { transition: opacity .25s ease; }
        .pulse-node { animation: pulseGlow 2.2s ease-in-out infinite; }
        .shake { animation: shakeX .35s ease; }
        .pop-in { animation: popIn .25s ease; }
        .panda-pop { animation: pandaPop .65s cubic-bezier(.34,1.56,.64,1) both; }
        .confetti-wrap { position: absolute; inset: 0; pointer-events: none; }
        .confetti-dot { position: absolute; left: 50%; top: 50%; width: 9px; height: 9px; border-radius: 3px; animation: confettiBurst .85s ease-out both; }
        .summary-rise { opacity: 0; animation: riseIn .5s ease both; }
        .opt-btn { transition: border-color .15s ease, background .15s ease, transform .12s ease; }
        .opt-btn:hover { border-color: #8FCFC7 !important; transform: translateY(-1px); }
        .opt-btn:active { transform: scale(0.98); }
        .tile-btn { transition: border-color .15s ease, background .15s ease, transform .12s ease; }
        .tile-btn:hover { border-color: #8FCFC7 !important; }
        .tile-btn:active { transform: scale(0.95); }
        .primary-btn { transition: transform .1s ease, box-shadow .1s ease; }
        .primary-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #1F7A73 !important; }
        .level-tab { transition: background .2s ease, color .2s ease, transform .15s cubic-bezier(.34,1.56,.64,1), border-color .2s ease; }
        .level-tab:active { transform: scale(0.94); }
        .unit-card { transition: border-color .18s ease, transform .18s cubic-bezier(.22,1,.36,1), box-shadow .18s ease; }
        .unit-card:hover { border-color: #8FCFC7 !important; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-icon { animation: spin 1s linear infinite; }
        @keyframes bounceY { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-7px); } }
        .bounce-indicator { animation: bounceY 1.1s ease-in-out infinite; }
        @keyframes notifPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.35); opacity: 0.6; } }
        .notif-dot { animation: notifPulse 1.6s ease-in-out infinite; }
        @keyframes coinFlip { 0% { transform: rotateY(180deg); opacity: 0; } 55% { opacity: 1; } 100% { transform: rotateY(0deg); opacity: 1; } }
        .star-flip { display: inline-block; backface-visibility: hidden; animation: coinFlip .55s cubic-bezier(.34,1.56,.64,1) both; }
        .avatar-flip-wrap { perspective: 800px; }
        .avatar-flip-wrap .lift-card { backface-visibility: hidden; transition: transform .35s cubic-bezier(.22,1,.36,1), border-color .18s ease, box-shadow .18s ease; }
        .avatar-flip-wrap:hover .lift-card { transform: rotateY(8deg) translateY(-3px); }
      `}</style>

      {profileLoading ? (
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Loader2 className="spin-icon" size={32} color="rgba(255,255,255,0.6)" />
        </div>
      ) : !supaConfigured() ? (
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
          <ShieldCheck size={48} color="#E3B23C" style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 10 }}>Backend hali ulanmagan</div>
          <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 280, lineHeight: 1.6 }}>
            Kodning yuqori qismidagi <b>SUPABASE_URL</b> va <b>SUPABASE_ANON_KEY</b> qiymatlarini o'z Supabase loyihangiznikiga almashtiring.
          </div>
        </div>
      ) : !profile ? (
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
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
                className="press-btn"
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
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 30 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <button
                  onClick={() => setMenuOpen(true)}
                  className="press-btn"
                  style={{ border: 'none', background: 'rgba(255,255,255,0.12)', borderRadius: 12, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  aria-label="Menyu"
                >
                  <Menu size={19} color="#fff" />
                </button>
                {(examNeededLevel || certReadyLevel) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" className="notif-dot" style={{ position: 'absolute', top: -3, right: -3, pointerEvents: 'none' }}>
                    <circle cx="6" cy="6" r="5" fill="#3B82F6" stroke="#123A5C" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
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
                <Flame size={16} fill="#E3B23C" stroke="#E3B23C" /> <span key={streak} className="number-pop">{streak}</span>
              </div>
              <div
                onClick={() => setScreen('shop')}
                className="press-btn"
                style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 5, color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: UZ_FONT, cursor: 'pointer' }}
              >
                <Gem size={16} fill="#2FA89C" stroke="#2FA89C" /> <span key={xp} className="number-pop">{xp}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '0 20px 6px' }}>
            <div style={{ textAlign: 'center', fontFamily: UZ_FONT, fontSize: 13.5, fontWeight: 800, color: '#fff' }}>
              {currentLevel.id} · {currentLevel.label}
            </div>
            <div style={{ marginTop: 4, textAlign: 'center', fontFamily: UZ_FONT, fontSize: 12.5, color: 'rgba(255,255,255,0.65)' }}>
              {currentLevel.units.reduce((s, u) => s + u.lessons.filter((ls) => completed.includes(ls.id)).length, 0)}/
              {currentLevel.units.reduce((s, u) => s + u.lessons.length, 0)} dars tugatildi
            </div>
          </div>

          {canSkipAhead && (
            <div
              onClick={startPlacementTest}
              className="press-btn lift-card"
              style={{ margin: '0 20px 16px', background: 'rgba(255,255,255,0.07)', border: '1.5px dashed rgba(143,207,199,0.45)', borderRadius: 16, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(143,207,199,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Compass size={18} color="#8FCFC7" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, color: '#fff' }}>Bilimingiz kuchliroqmi?</div>
                <div style={{ fontFamily: UZ_FONT, fontSize: 10.5, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>Tezkor sinovdan o'ting, agar bilsangiz — keyingi darajaga sakrab o'ting</div>
              </div>
              <ChevronRight size={18} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0 }} />
            </div>
          )}

          {examNeededLevel && (
            <div
              onClick={() => startExam(examNeededLevel.id)}
              className="press-btn soft-bounce-in"
              style={{ margin: '0 20px 16px', background: 'linear-gradient(90deg,#2FA89C,#4FC2B5)', borderRadius: 16, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', boxShadow: '0 6px 0 #1F7A73' }}
            >
              <ClipboardList size={22} color="#fff" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13.5, color: '#fff' }}>
                {examNeededLevel.id} darajasining barcha darslari tugadi! Yakuniy imtihonni (30 savol) topshiring
              </div>
            </div>
          )}
          {certReadyLevel && (
            <div
              onClick={() => { setCertLevelId(certReadyLevel.id); setScreen('certificate'); }}
              className="press-btn soft-bounce-in"
              style={{ margin: '0 20px 16px', background: 'linear-gradient(90deg,#E3B23C,#F0C868)', borderRadius: 16, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', boxShadow: '0 6px 0 #B8862A' }}
            >
              <Award size={22} color="#12233A" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13.5, color: '#12233A' }}>
                Tabriklaymiz! {certReadyLevel.label} darajasi tugadi — sertifikatingizni oling
              </div>
            </div>
          )}

          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {currentLevel.units.map((unit, uIdx) => {
              const status = getUnitStatus(selectedLevel, uIdx);
              const doneCount = unit.lessons.filter((ls) => completed.includes(ls.id)).length;
              return (
                <div
                  key={selectedLevel + '-' + uIdx}
                  className="unit-card stagger-item"
                  onClick={() => openUnit(selectedLevel, uIdx)}
                  style={{ background: status === 'locked' ? 'rgba(255,255,255,0.06)' : '#fff', borderRadius: 18, padding: '16px 18px', cursor: status === 'locked' ? 'default' : 'pointer', border: '2px solid transparent', opacity: status === 'locked' ? 0.75 : 1, animationDelay: `${uIdx * 0.06}s` }}
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
            {selectedLevel === 'C1' && (
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Rocket size={20} color="rgba(255,255,255,0.5)" />
                <div style={{ fontFamily: UZ_FONT, fontSize: 12.5, color: 'rgba(255,255,255,0.55)' }}>Ko'proq bo'limlar tez orada...</div>
              </div>
            )}
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

          <div ref={pathContainerRef} style={{ position: 'relative', width: 300, height: pathHeight, margin: '10px auto 0', perspective: 900 }}>
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
                <div key={lesson.id} style={{ position: 'absolute', left: x, top: y, transform: nodeTiltStyle(y), transition: 'transform .12s ease-out' }}>
                  {status === 'active' && (
                    <div className="bounce-indicator" style={{ position: 'absolute', top: -46, left: '50%' }}>
                      <ChevronDown size={22} color="#4FC2B5" strokeWidth={3} />
                    </div>
                  )}
                  <div
                    onClick={() => handleNodeClick(idx)}
                    className={`press-btn${lockMsg && lockMsg.id === lesson.id ? ' shake' : ''}`}
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
        <div className="screen-fade" style={{ background: '#EFF6F3', padding: '18px 22px 26px', minHeight: 560 }}>
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
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div
                key={hearts}
                className="shake"
                onClick={() => !examMode && setHeartTimerOpen((o) => !o)}
                style={{ display: 'flex', gap: 2, cursor: examMode ? 'default' : 'pointer' }}
              >
                {Array.from({ length: examMode ? 10 : 5 }, (_, i) => (
                  <Heart key={i} size={examMode ? 13 : 17} fill={i < hearts ? '#C1502E' : 'none'} stroke={i < hearts ? '#C1502E' : '#C7D2D9'} />
                ))}
              </div>
              {!examMode && heartTimerOpen && (
                <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 8, background: '#12233A', borderRadius: 12, padding: '9px 12px', whiteSpace: 'nowrap', boxShadow: '0 6px 16px rgba(0,0,0,0.2)', zIndex: 20 }}>
                  {hearts >= MAX_HEARTS ? (
                    <div style={{ fontFamily: UZ_FONT, fontSize: 12, color: '#fff', fontWeight: 700 }}>Yuraklar to'liq ❤️</div>
                  ) : (
                    <div style={{ fontFamily: UZ_FONT, fontSize: 12, color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Heart size={13} fill="#C1502E" stroke="#C1502E" />
                      Keyingisi: {formatHeartTimer(Math.max(0, HEART_REGEN_MS - (nowTick - (heartsUpdatedAt || nowTick))))}
                    </div>
                  )}
                </div>
              )}
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
                    key={qIndex + '-' + i}
                    className="opt-btn stagger-item"
                    onClick={() => selectChoice(i)}
                    style={{ textAlign: 'left', border: `2px solid ${borderColor}`, background: bg, color, borderRadius: 16, padding: '14px 18px', fontSize: 16, cursor: checked ? 'default' : 'pointer', fontFamily: optionsAreRussian ? RU_FONT : UZ_FONT, fontWeight: optionsAreRussian ? 500 : 700, animationDelay: `${i * 0.05}s` }}
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
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 40 }}>
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
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 30px', textAlign: 'center' }}>
          <Compass size={54} color="#E3B23C" style={{ marginBottom: 18 }} />
          <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 10 }}>Darajangizni bilamizmi?</div>
          <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginBottom: 26, maxWidth: 280, lineHeight: 1.6 }}>
            Bir necha savolga javob bering — sizga mos darajadan darslarni ochib beramiz. Xohlasangiz, boshlang'ich darajadan ham boshlashingiz mumkin.
          </div>
          <button
            onClick={startPlacementTest}
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
          <div className="screen-fade" style={{ background: '#EFF6F3', padding: '24px 22px 30px', minHeight: 560 }}>
            <div className="soft-bounce-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#12233A', borderRadius: 999, padding: '7px 14px 7px 8px', marginBottom: 18 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg,#4FC2B5,#1F7A73)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 10, color: '#fff', flexShrink: 0 }}>
                {LEVELS[cur.levelIdx] ? LEVELS[cur.levelIdx].id : '?'}
              </div>
              <div style={{ fontFamily: UZ_FONT, fontSize: 12, fontWeight: 700, color: '#fff' }}>
                {cur.levelLabel} darajasi savoli · {placementIdx + 1}/{qs.length}
              </div>
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
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C 55%,#1C4A6E)', minHeight: 600, paddingBottom: 40 }}>
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
              {AVATARS.map((av, avIdx) => {
                const owned = ownedAvatars.includes(av.id);
                const isActive = activeAvatar === av.id;
                const affordable = owned || xp >= av.cost;
                return (
                  <div key={av.id} className="avatar-flip-wrap">
                    <button
                      onClick={() => (owned ? selectAvatar(av.id) : buyAvatar(av.id))}
                      disabled={!affordable}
                      className={`lift-card press-btn stagger-item${isActive ? ' tab-pop' : ''}`}
                      style={{ background: '#fff', border: isActive ? '2px solid #E3B23C' : '2px solid transparent', borderRadius: 16, padding: '10px 4px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: affordable ? 'pointer' : 'default', opacity: affordable ? 1 : 0.55, animationDelay: `${avIdx * 0.06}s` }}
                    >
                      <Mascot variant={av.id} accessories={[]} size={50} />
                      <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 10.5, color: '#12233A' }}>{av.name}</div>
                      <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 10, color: owned ? '#2FA89C' : '#B8862A', display: 'flex', alignItems: 'center', gap: 2 }}>
                        {owned ? (isActive ? 'Tanlangan' : "O'rnatish") : (<>{av.cost} <Gem size={10} /></>)}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Aksessuarlar</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10 }}>
              {ACCESSORIES.map((ac, acIdx) => {
                const owned = ownedAccessories.includes(ac.id);
                const equipped = equippedAccessories.includes(ac.id);
                const affordable = owned || xp >= ac.cost;
                return (
                  <button
                    key={ac.id}
                    onClick={() => (owned ? toggleAccessory(ac.id) : buyAccessory(ac.id))}
                    disabled={!affordable}
                    className={`lift-card press-btn stagger-item${equipped ? ' tab-pop' : ''}`}
                    style={{ background: '#fff', border: equipped ? '2px solid #2FA89C' : '2px solid transparent', borderRadius: 16, padding: '10px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: affordable ? 'pointer' : 'default', opacity: affordable ? 1 : 0.55, animationDelay: `${acIdx * 0.06}s` }}
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

      {screen === 'admin-password' && (
        <div style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C)', padding: '70px 26px', minHeight: 560, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 26, left: 22 }}>
            <ArrowLeft onClick={() => setScreen('home')} size={22} style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }} />
          </div>
          <Lock size={44} color="#8FCFC7" style={{ marginBottom: 18 }} />
          <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 8 }}>Statistika</div>
          <div style={{ fontFamily: UZ_FONT, fontSize: 13.5, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>Bu bo'lim faqat parol bilan ochiladi</div>
          <input
            type="password"
            value={adminPasswordInput}
            onChange={(e) => { setAdminPasswordInput(e.target.value); setAdminError(''); }}
            onKeyDown={(e) => { if (e.key === 'Enter') submitAdminPassword(); }}
            placeholder="Parolni kiriting"
            autoFocus
            style={{ width: '100%', border: adminError ? '2px solid #C1502E' : '2px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 16px', fontFamily: UZ_FONT, fontSize: 15, color: '#fff', outline: 'none', textAlign: 'center', marginBottom: 10, boxSizing: 'border-box' }}
          />
          {adminError && (
            <div style={{ fontFamily: UZ_FONT, fontSize: 12.5, color: '#E39C8A', marginBottom: 10 }}>{adminError}</div>
          )}
          <button
            className="primary-btn"
            onClick={submitAdminPassword}
            style={{ width: '100%', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, color: '#fff', fontFamily: UZ_FONT, background: '#2FA89C', boxShadow: '0 5px 0 #1F7A73', cursor: 'pointer', marginTop: 6 }}
          >
            Kirish
          </button>
        </div>
      )}

      {screen === 'admin-stats' && adminUnlocked && (() => {
        const profiles = adminStats?.profiles || [];
        const progress = adminStats?.progress || [];
        const profById = {};
        profiles.forEach((p) => { profById[p.id] = p; });
        const totalUsers = progress.length;
        const totalXp = progress.reduce((s, p) => s + (p.xp || 0), 0);
        const avgXp = totalUsers ? Math.round(totalXp / totalUsers) : 0;
        const totalLessonsDone = progress.reduce((s, p) => s + (Array.isArray(p.completed) ? p.completed.length : 0), 0);
        const weekAgo = Date.now() - 7 * 86400000;
        const activeThisWeek = progress.filter((p) => p.updated_at && new Date(p.updated_at).getTime() >= weekAgo).length;
        const sorted = [...progress].sort((a, b) => (b.xp || 0) - (a.xp || 0));
        return (
          <div className="screen-fade" style={{ background: '#EFF6F3', padding: '18px 22px 32px', minHeight: 560 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <ArrowLeft onClick={() => setScreen('home')} size={22} style={{ cursor: 'pointer', color: '#94A3A8', flexShrink: 0 }} />
              <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 19, color: '#12233A' }}>Foydalanuvchilar statistikasi</div>
            </div>

            {adminLoading && (
              <div style={{ textAlign: 'center', padding: '40px 0', fontFamily: UZ_FONT, color: '#5B807B' }}>Yuklanmoqda...</div>
            )}

            {!adminLoading && adminError && (
              <div style={{ background: '#FBEAF0', borderRadius: 14, padding: '14px 16px', marginBottom: 16 }}>
                <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: '#B8433E', marginBottom: 10 }}>{adminError}</div>
                <button onClick={fetchAdminStats} className="press-btn" style={{ border: 'none', borderRadius: 10, padding: '8px 12px', background: '#2FA89C', color: '#fff', fontFamily: UZ_FONT, fontWeight: 700, fontSize: 12.5, cursor: 'pointer' }}>Qayta urinish</button>
              </div>
            )}

            {!adminLoading && !adminError && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px' }}>
                    <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B' }}>Jami foydalanuvchilar</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 22, color: '#12233A', marginTop: 2 }}>{totalUsers}</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px' }}>
                    <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B' }}>So'nggi 7 kunda faol</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 22, color: '#12233A', marginTop: 2 }}>{activeThisWeek}</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px' }}>
                    <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B' }}>Jami tugatilgan darslar</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 22, color: '#12233A', marginTop: 2 }}>{totalLessonsDone}</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px' }}>
                    <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#5B807B' }}>O'rtacha olmos (XP)</div>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 22, color: '#12233A', marginTop: 2 }}>{avgXp}</div>
                  </div>
                </div>

                {totalUsers === 0 && (
                  <div style={{ background: '#FDF2DC', borderRadius: 14, padding: '14px 16px', marginBottom: 16, fontFamily: UZ_FONT, fontSize: 12.5, color: '#8A6A1E', lineHeight: 1.5 }}>
                    Hech qanday ma'lumot topilmadi. Buning sababi Supabase'dagi <b>progress</b> jadvalida "Row Level Security" har bir foydalanuvchiga faqat o'zining qatorini ko'rishga ruxsat berayotgani bo'lishi mumkin — shu bois boshqa foydalanuvchilar hozircha ko'rinmayapti.
                  </div>
                )}

                <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: '#12233A', marginBottom: 10 }}>Foydalanuvchilar ro'yxati (XP bo'yicha)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {sorted.map((p, i) => {
                    const prof = profById[p.user_id];
                    const label = prof?.name || prof?.email || `Foydalanuvchi #${String(p.user_id || '').slice(0, 8)}`;
                    return (
                      <div key={p.user_id || i} style={{ background: '#fff', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 26, textAlign: 'center', fontFamily: UZ_FONT, fontWeight: 800, fontSize: 12.5, color: '#5B807B', flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 13.5, color: '#12233A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</div>
                          <div style={{ fontFamily: UZ_FONT, fontSize: 11, color: '#94A3A8', marginTop: 1 }}>
                            {Array.isArray(p.completed) ? p.completed.length : 0} dars · {p.updated_at ? String(p.updated_at).slice(0, 10) : '—'}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                          <Gem size={13} color="#2FA89C" />
                          <span style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 13, color: '#12233A' }}>{p.xp || 0}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })()}

      {screen === 'about-creator' && (
        <div className="screen-fade" style={{ background: 'linear-gradient(180deg,#0E2A43,#123A5C)', padding: '26px 22px 40px', minHeight: 560 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <ArrowLeft onClick={() => setScreen('home')} size={22} style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', flexShrink: 0 }} />
            <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 19, color: '#fff' }}>Muallif haqida</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: '3px solid #E3B23C', marginBottom: 16, flexShrink: 0 }}>
              <img src={CREATOR_PHOTO} alt="Habibullayev Abdulqodir" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 19, color: '#fff' }}>Habibullayev Abdulqodir</div>
            <div style={{ fontFamily: UZ_FONT, fontSize: 13, color: '#E3B23C', fontWeight: 700, marginTop: 4 }}>Uzduolingo ilovasi muallifi</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: '6px 14px', marginTop: 14 }}>
              <Rocket size={13} color="#8FCFC7" />
              <span style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: 'rgba(255,255,255,0.75)' }}>National AI Hackathon ishtirokchisi</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: '18px 20px', marginTop: 22, textAlign: 'left' }}>
              <div style={{ fontFamily: UZ_FONT, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                Rus tilini o'zbek o'quvchilariga qiziqarli va tushunarli tarzda o'rgatish maqsadida Uzduolingo ilovasini yaratdi.
                Ta'lim texnologiyalari va rus tili o'qitish yo'nalishida faoliyat yuritadi — darslar, testlar va lug'at boyligi
                shu tajriba asosida tuzilgan.
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20, width: '100%' }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '12px 10px', textAlign: 'center' }}>
                <BookOpen size={17} color="#8FCFC7" style={{ marginBottom: 4 }} />
                <div style={{ fontFamily: UZ_FONT, fontSize: 10.5, color: 'rgba(255,255,255,0.6)' }}>Rus tili o'qituvchisi</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '12px 10px', textAlign: 'center' }}>
                <Rocket size={17} color="#E3B23C" style={{ marginBottom: 4 }} />
                <div style={{ fontFamily: UZ_FONT, fontSize: 10.5, color: 'rgba(255,255,255,0.6)' }}>Ilova dasturchisi</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === 'my-certificates' && (
        <div className="screen-fade" style={{ background: '#EFF6F3', padding: '18px 22px 32px', minHeight: 560 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <ArrowLeft onClick={() => setScreen('home')} size={22} style={{ cursor: 'pointer', color: '#94A3A8', flexShrink: 0 }} />
            <div style={{ fontFamily: RU_FONT, fontWeight: 700, fontSize: 19, color: '#12233A' }}>Sertifikatlarim</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {LEVELS.map((lv) => {
              const earned = examPassedLevels.includes(lv.id);
              const ready = !earned && isLevelComplete(lv);
              return (
                <div
                  key={lv.id}
                  onClick={() => {
                    if (earned) { setCertLevelId(lv.id); setScreen('certificate'); }
                    else if (ready) startExam(lv.id);
                  }}
                  className={earned || ready ? 'press-btn lift-card' : ''}
                  style={{ background: '#fff', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: earned || ready ? 'pointer' : 'default', opacity: earned || ready ? 1 : 0.55 }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: earned ? 'linear-gradient(135deg,#F3C862,#C68F1F)' : 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={20} color={earned ? '#fff' : '#9AA7AE'} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: UZ_FONT, fontWeight: 800, fontSize: 14, color: '#12233A' }}>{lv.id} · {lv.label}</div>
                    <div style={{ fontFamily: UZ_FONT, fontSize: 11.5, color: '#94A3A8', marginTop: 1 }}>
                      {earned ? "Sertifikat tayyor — ko'rish uchun bosing" : ready ? 'Imtihonga tayyor — boshlash uchun bosing' : 'Avval darslarni tugating'}
                    </div>
                  </div>
                  {(earned || ready) && <ChevronRight size={18} color="#B7C2C8" style={{ flexShrink: 0 }} />}
                </div>
              );
            })}
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
                <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                  {[1, 2, 3].map((n) => (
                    <span key={n} className="star-flip" style={{ animationDelay: `${0.25 + n * 0.12}s` }}>
                      <Star size={42} fill={n <= (ratings[activeLesson.id] || 0) ? '#E3B23C' : 'none'} stroke="#E3B23C" />
                    </span>
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
          className="scrim-fade"
          style={{ position: 'fixed', inset: 0, background: 'rgba(6,18,30,0.55)', zIndex: 50, display: 'flex' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="drawer-slide"
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
              onClick={() => {
                setMenuOpen(false);
                setAdminPasswordInput('');
                setAdminError('');
                setScreen(adminUnlocked ? 'admin-stats' : 'admin-password');
                if (adminUnlocked) fetchAdminStats();
              }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginBottom: 8, textAlign: 'left' }}
            >
              <Lock size={19} color="#8FCFC7" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#fff' }}>Statistika</div>
            </button>

            <button
              onClick={() => { setScreen('about-creator'); setMenuOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginBottom: 8, textAlign: 'left' }}
            >
              <GraduationCap size={19} color="#E3B25C" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#fff' }}>Muallif haqida</div>
            </button>

            <button
              onClick={() => { setScreen('my-certificates'); setMenuOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '13px 14px', cursor: 'pointer', marginBottom: 8, textAlign: 'left' }}
            >
              <Award size={19} color="#E3B23C" />
              <div style={{ fontFamily: UZ_FONT, fontWeight: 700, fontSize: 14, color: '#fff' }}>Sertifikatlarim</div>
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
