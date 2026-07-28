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
const PLACEMENT_BLOCK_SIZE = 4;

function getPlacementQuestions() {
  const out = [];
  LEVELS.filter((lvl) => lvl.id !== 'LG').forEach((lvl, levelIdx) => {
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
  const [placementResults, setPlacementResults] = useState([]);
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
    const cefrLevels = LEVELS.filter((lvl) => lvl.id !== 'LG');
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
      setSelectedLevel(cefrLevels[nextIdx].id);
      setXp((x) => x + 30);
    } else {
      setSelectedLevel(cefrLevels[0].id);
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
              <button
                onClick={() => setMenuOpen(true)}
                className="press-btn"
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
            <div style={{ display: 'flex', gap: 6 }}>
              {LEVELS.map((lv) => {
                const unlocked = isLevelUnlocked(lv.id);
                const complete = isLevelComplete(lv);
                const isSel = selectedLevel === lv.id;
                return (
                  <button
                    key={lv.id}
                    className={`level-tab press-btn${isSel ? ' tab-pop' : ''}`}
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
              className="press-btn soft-bounce-in"
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
              className="press-btn soft-bounce-in"
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
            <div key={hearts} className="shake" style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
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
            onClick={() => { setPlacementIdx(0); setPlacementSelected(null); setPlacementChecked(false); setPlacementResults([]); setScreen('placement-test'); }}
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
                  <button
                    key={av.id}
                    onClick={() => (owned ? selectAvatar(av.id) : buyAvatar(av.id))}
                    disabled={!affordable}
                    className={`lift-card press-btn stagger-item${isActive ? ' tab-pop' : ''}`}
                    style={{ background: '#fff', border: isActive ? '2px solid #E3B23C' : '2px solid transparent', borderRadius: 16, padding: '10px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: affordable ? 'pointer' : 'default', opacity: affordable ? 1 : 0.55, animationDelay: `${avIdx * 0.06}s` }}
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
