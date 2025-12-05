import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

const IrregularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const verbs = [
    { base: "arise", past: "arose", participle: "arisen", pl: "powstać, pojawić się" },
    { base: "awake", past: "awoke", participle: "awoken", pl: "obudzić się, uświadomić sobie" },
    { base: "be", past: "was/were", participle: "been", pl: "być" },
    { base: "bear", past: "bore", participle: "borne/born", pl: "rodzić, znieść" },
    { base: "beat", past: "beat", participle: "beaten", pl: "bić" },
    { base: "become", past: "became", participle: "become", pl: "stać się" },
    { base: "begin", past: "began", participle: "begun", pl: "zacząć" },
    { base: "bend", past: "bent", participle: "bent", pl: "zginać, uginać" },
    { base: "bet", past: "bet", participle: "bet", pl: "zakładać się" },
    { base: "bid", past: "bid", participle: "bid", pl: "licytować / żegnać (staroświeckie: nakazywać)" },
    { base: "bite", past: "bit", participle: "bitten", pl: "gryźć" },
    { base: "bleed", past: "bled", participle: "bled", pl: "krwawić" },
    { base: "blow", past: "blew", participle: "blown", pl: "dmuchać, wiać" },
    { base: "break", past: "broke", participle: "broken", pl: "złamać, zepsuć" },
    { base: "breed", past: "bred", participle: "bred", pl: "rozmnażać, hodować" },
    { base: "bring", past: "brought", participle: "brought", pl: "przynieść" },
    { base: "build", past: "built", participle: "built", pl: "budować" },
    { base: "burn", past: "burnt / burned", participle: "burnt / burned", pl: "palić, spalać" },
    { base: "burst", past: "burst", participle: "burst", pl: "pęknąć, wybuchnąć" },
    { base: "buy", past: "bought", participle: "bought", pl: "kupić" },
    { base: "catch", past: "caught", participle: "caught", pl: "złapać" },
    { base: "choose", past: "chose", participle: "chosen", pl: "wybrać" },
    { base: "cling", past: "clung", participle: "clung", pl: "przylgnąć, trzymać się" },
    { base: "come", past: "came", participle: "come", pl: "przyjść, przybyć" },
    { base: "cost", past: "cost", participle: "cost", pl: "kosztować" },
    { base: "creep", past: "crept", participle: "crept", pl: "skradać się" },
    { base: "cut", past: "cut", participle: "cut", pl: "ciąć, przecinać" },
    { base: "deal", past: "dealt", participle: "dealt", pl: "radzić sobie, rozpatrywać" },
    { base: "dig", past: "dug", participle: "dug", pl: "kopać" },
    { base: "do", past: "did", participle: "done", pl: "robić" },
    { base: "draw", past: "drew", participle: "drawn", pl: "rysować, ciągnąć" },
    { base: "dream", past: "dreamt / dreamed", participle: "dreamt / dreamed", pl: "śnić, marzyć" },
    { base: "drink", past: "drank", participle: "drunk", pl: "pić" },
    { base: "drive", past: "drove", participle: "driven", pl: "prowadzić (pojazd)" },
    { base: "eat", past: "ate", participle: "eaten", pl: "jeść" },
    { base: "fall", past: "fell", participle: "fallen", pl: "upaść, spaść" },
    { base: "feed", past: "fed", participle: "fed", pl: "karmić" },
    { base: "feel", past: "felt", participle: "felt", pl: "czuć" },
    { base: "fight", past: "fought", participle: "fought", pl: "walczyć" },
    { base: "find", past: "found", participle: "found", pl: "znaleźć" },
    { base: "fit", past: "fit", participle: "fit", pl: "pasować" },
    { base: "flee", past: "fled", participle: "fled", pl: "uciekać" },
    { base: "fling", past: "flung", participle: "flung", pl: "rzucić, podrzucić" },
    { base: "fly", past: "flew", participle: "flown", pl: "latać" },
    { base: "forbid", past: "forbade", participle: "forbidden", pl: "zabronić" },
    { base: "forget", past: "forgot", participle: "forgotten", pl: "zapomnieć" },
    { base: "forgive", past: "forgave", participle: "forgiven", pl: "wybaczyć" },
    { base: "freeze", past: "froze", participle: "frozen", pl: "zamarznąć" },
    { base: "get", past: "got", participle: "gotten / got", pl: "dostać, otrzymać" },
    { base: "give", past: "gave", participle: "given", pl: "dać" },
    { base: "go", past: "went", participle: "gone", pl: "iść, jechać" },
    { base: "grow", past: "grew", participle: "grown", pl: "rosnąć, hodować" },
    { base: "hang", past: "hung", participle: "hung", pl: "wisieć, powiesić (np. portret)" },
    { base: "have", past: "had", participle: "had", pl: "mieć" },
    { base: "hear", past: "heard", participle: "heard", pl: "słyszeć" },
    { base: "hide", past: "hid", participle: "hidden", pl: "ukryć, schować" },
    { base: "hit", past: "hit", participle: "hit", pl: "uderzyć" },
    { base: "hold", past: "held", participle: "held", pl: "trzymać, utrzymać" },
    { base: "hurt", past: "hurt", participle: "hurt", pl: "zranić, boleć" },
    { base: "keep", past: "kept", participle: "kept", pl: "zachować, trzymać" },
    { base: "kneel", past: "knelt / kneeled", participle: "knelt / kneeled", pl: "klęczeć" },
    { base: "knit", past: "knit / knitted", participle: "knit / knitted", pl: "dziergać, przerabiać na drutach" },
    { base: "know", past: "knew", participle: "known", pl: "wiedzieć, znać" },
    { base: "lay", past: "laid", participle: "laid", pl: "kłaść, położyć" },
    { base: "lead", past: "led", participle: "led", pl: "prowadzić, przewodzić" },
    { base: "lean", past: "leant / leaned", participle: "leant / leaned", pl: "opierać się, przechylać się" },
    { base: "leap", past: "leapt / leaped", participle: "leapt / leaped", pl: "skakać, przeskakiwać" },
    { base: "leave", past: "left", participle: "left", pl: "opuszczać, zostawiać" },
    { base: "lend", past: "lent", participle: "lent", pl: "pożyczyć (komuś)" },
    { base: "let", past: "let", participle: "let", pl: "pozwalać, umożliwiać" },
    { base: "lie (recline)", past: "lay", participle: "lain", pl: "leżeć" },
    { base: "light", past: "lit / lighted", participle: "lit / lighted", pl: "zapalać, oświetlać" },
    { base: "lose", past: "lost", participle: "lost", pl: "zgubić, stracić" },
    { base: "make", past: "made", participle: "made", pl: "robić, tworzyć" },
    { base: "mean", past: "meant", participle: "meant", pl: "oznaczać, znaczyć" },
    { base: "meet", past: "met", participle: "met", pl: "spotkać, poznać" },
    { base: "melt", past: "melted", participle: "melted / molten", pl: "topić, rozpuszczać" },
    { base: "mistake", past: "mistook", participle: "mistaken", pl: "pomylić, mylić" },
    { base: "mow", past: "mowed", participle: "mown / mowed", pl: "kosić (trawnik)" },
    { base: "overcome", past: "overcame", participle: "overcome", pl: "pokonać, przezwyciężyć" },
    { base: "pay", past: "paid", participle: "paid", pl: "zapłacić, opłacić" },
    { base: "put", past: "put", participle: "put", pl: "położyć, umieścić" },
    { base: "quit", past: "quit / quitted", participle: "quit / quitted", pl: "rzucić (pracę, nałóg) lub przestać" },
    { base: "read", past: "read (red)", participle: "read (red)", pl: "czytać" },
    { base: "ride", past: "rode", participle: "ridden", pl: "jeździć (konno, rowerem)" },
    { base: "ring", past: "rang", participle: "rung", pl: "dzwonić, zadzwonić" },
    { base: "rise", past: "rose", participle: "risen", pl: "wschodzić, podnieść się" },
    { base: "run", past: "ran", participle: "run", pl: "biegać" },
    { base: "saw (verb)", past: "sawed", participle: "sawn / sawed", pl: "piłować" },
    { base: "say", past: "said", participle: "said", pl: "powiedzieć, mówić" },
    { base: "see", past: "saw", participle: "seen", pl: "widzieć" },
    { base: "seek", past: "sought", participle: "sought", pl: "szukać, poszukiwać" },
    { base: "sell", past: "sold", participle: "sold", pl: "sprzedać" },
    { base: "send", past: "sent", participle: "sent", pl: "wysłać" },
    { base: "set", past: "set", participle: "set", pl: "ustawić, umieścić" },
    { base: "sew", past: "sewed", participle: "sewn / sewed", pl: "szyć" },
    { base: "shake", past: "shook", participle: "shaken", pl: "potrząsnąć" },
    { base: "shear", past: "sheared", participle: "shorn / sheared", pl: "strzyc (np. owce)" },
    { base: "shine", past: "shone", participle: "shone", pl: "świecić, lśnić" },
    { base: "shoot", past: "shot", participle: "shot", pl: "strzelać" },
    { base: "show", past: "showed", participle: "shown / showed", pl: "pokazać" },
    { base: "shrink", past: "shrank", participle: "shrunk", pl: "kurczyć się" },
    { base: "shut", past: "shut", participle: "shut", pl: "zamknąć, zatrzasnąć" },
    { base: "sing", past: "sang", participle: "sung", pl: "śpiewać" },
    { base: "sink", past: "sank", participle: "sunk", pl: "tonąć, zapadać się" },
    { base: "sit", past: "sat", participle: "sat", pl: "siedzieć" },
    { base: "slay", past: "slew", participle: "slain", pl: "zabić (często w literaturze)" },
    { base: "sleep", past: "slept", participle: "slept", pl: "spać" },
    { base: "slide", past: "slid", participle: "slid", pl: "ślizgać się" },
    { base: "sling", past: "slung", participle: "slung", pl: "rzucić (np. kamieniem)" },
    { base: "smell", past: "smelt / smelled", participle: "smelt / smelled", pl: "pachnieć, wyczuć zapach" },
    { base: "speak", past: "spoke", participle: "spoken", pl: "mówić, rozmawiać" },
    { base: "speed", past: "sped / speeded", participle: "sped / speeded", pl: "pędzić, przyspieszać" },
    { base: "spend", past: "spent", participle: "spent", pl: "spędzać (czas) lub wydawać (pieniądze)" },
    { base: "spill", past: "spilt / spilled", participle: "spilt / spilled", pl: "rozlać, rozprysnąć" },
    { base: "spin", past: "spun", participle: "spun", pl: "wirować, kręcić" },
    { base: "spit", past: "spat", participle: "spat", pl: "pluć" },
    { base: "split", past: "split", participle: "split", pl: "dzielić, rozszczepiać" },
    { base: "spoil", past: "spoilt / spoiled", participle: "spoilt / spoiled", pl: "psuć, zepsuć" },
    { base: "spread", past: "spread", participle: "spread", pl: "rozprzestrzeniać, rozłożyć" },
    { base: "spring", past: "sprang", participle: "sprung", pl: "skakać, wybuchnąć (o uczuciach)" },
    { base: "stand", past: "stood", participle: "stood", pl: "stać" },
    { base: "steal", past: "stole", participle: "stolen", pl: "kraść" },
    { base: "stick", past: "stuck", participle: "stuck", pl: "przykleić, przykładać" },
    { base: "sting", past: "stung", participle: "stung", pl: "użądlić" },
    { base: "stink", past: "stank / stunk", participle: "stunk", pl: "śmierdzieć" },
    { base: "stride", past: "strode", participle: "stridden", pl: "kroczyć, paradować" },
    { base: "strike", past: "struck", participle: "struck / stricken", pl: "uderzyć, uderzenie (np. piorunem)" },
    { base: "string", past: "strung", participle: "strung", pl: "nawlekać, sznurować" },
    { base: "strive", past: "strove", participle: "striven", pl: "usiłować, dążyć" },
    { base: "sublet", past: "sublet", participle: "sublet", pl: "podnajmować" },
    { base: "swim", past: "swam", participle: "swum", pl: "pływać" },
    { base: "swing", past: "swung", participle: "swung", pl: "huśtać się, bujać" },
    { base: "take", past: "took", participle: "taken", pl: "brać, zabierać" },
    { base: "teach", past: "taught", participle: "taught", pl: "uczyć, przekazywać wiedzę" },
    { base: "tear", past: "tore", participle: "torn", pl: "drzeć, rozrywać" },
    { base: "tell", past: "told", participle: "told", pl: "powiedzieć, opowiadać" },
    { base: "think", past: "thought", participle: "thought", pl: "myśleć" },
    { base: "thrash", past: "thrashed", participle: "thrashed", pl: "tarsać, bić" },
    { base: "throw", past: "threw", participle: "thrown", pl: "rzucać" },
    { base: "thrust", past: "thrust", participle: "thrust", pl: "pchać, wbijać" },
    { base: "tread", past: "trod", participle: "trodden / trod", pl: "stąpać, depczać" },
    { base: "understand", past: "understood", participle: "understood", pl: "rozumieć" },
    { base: "unbind", past: "unbound", participle: "unbound", pl: "odwiązać, rozwiązać (wiązanie)" },
    { base: "undo", past: "undid", participle: "undone", pl: "cofnąć, rozwiązać" },
    { base: "uphold", past: "upheld", participle: "upheld", pl: "podtrzymywać, utrzymywać" },
    { base: "upset", past: "upset", participle: "upset", pl: "zburzyć, zdenerwować" },
    { base: "wake", past: "woke", participle: "woken", pl: "budzić się" },
    { base: "wear", past: "wore", participle: "worn", pl: "nosić (ubranie)" },
    { base: "weave", past: "wove", participle: "woven", pl: "tkać, pleść" },
    { base: "weep", past: "wept", participle: "wept", pl: "płakać" },
    { base: "win", past: "won", participle: "won", pl: "wygrać" },
    { base: "wind", past: "wound", participle: "wound", pl: "zawijać, skręcać" },
    { base: "withdraw", past: "withdrew", participle: "withdrawn", pl: "wycofać, cofnąć się" },
    { base: "wring", past: "wrung", participle: "wrung", pl: "wykręcić, wycisnąć" },
    { base: "write", past: "wrote", participle: "written", pl: "pisać" }
  ];

  const filteredVerbs = verbs.filter(verb => 
    verb.base.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.past.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.participle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.pl.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Czasowniki Nieregularne
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Kompletna lista angielskich czasowników nieregularnych
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj czasownika..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none text-lg shadow-sm"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Znaleziono: {filteredVerbs.length} czasowników
          </p>
        </div>

        {/* Table Header - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg shadow-md">
          <div>Bezokolicznik</div>
          <div>Past Simple</div>
          <div>Past Participle</div>
          <div>Tłumaczenie</div>
        </div>

        {/* Verbs List */}
        <div className="space-y-3">
          {filteredVerbs.map((verb, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-4 gap-4 p-6 items-center">
                <div className="font-semibold text-indigo-700 text-lg">{verb.base}</div>
                <div className="text-gray-700 font-medium">{verb.past}</div>
                <div className="text-gray-700 font-medium">{verb.participle}</div>
                <div className="text-gray-600">{verb.pl}</div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden p-5 space-y-3">
                <div className="font-bold text-xl text-indigo-700 mb-3">{verb.base}</div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-500 min-w-32">Past Simple:</span>
                    <span className="text-gray-700 font-medium">{verb.past}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-500 min-w-32">Past Participle:</span>
                    <span className="text-gray-700 font-medium">{verb.participle}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-500 min-w-32">Tłumaczenie:</span>
                    <span className="text-gray-600">{verb.pl}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVerbs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">Nie znaleziono czasowników spełniających kryteria wyszukiwania</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Łącznie {verbs.length} czasowników nieregularnych</p>
        </div>
      </div>
    </div>
  );
};

export default IrregularVerbs;
