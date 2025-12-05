import React from "react";

const irregularVerbs = [
  { base: "arise", past: "arose", pastParticiple: "arisen", meaning: "powstać" },
  { base: "awake", past: "awoke", pastParticiple: "awoken", meaning: "obudzić się" },
  { base: "be", past: "was/were", pastParticiple: "been", meaning: "być" },
  { base: "bear", past: "bore", pastParticiple: "borne/born", meaning: "nosić, znieść" },
  { base: "beat", past: "beat", pastParticiple: "beaten", meaning: "bić" },
  { base: "become", past: "became", pastParticiple: "become", meaning: "stawać się" },
  { base: "begin", past: "began", pastParticiple: "begun", meaning: "zaczynać" },
  { base: "bend", past: "bent", pastParticiple: "bent", meaning: "zginać" },
  { base: "bet", past: "bet", pastParticiple: "bet", meaning: "zakładać się" },
  { base: "bind", past: "bound", pastParticiple: "bound", meaning: "wiązać" },
  { base: "bite", past: "bit", pastParticiple: "bitten", meaning: "gryźć" },
  { base: "bleed", past: "bled", pastParticiple: "bled", meaning: "krwawić" },
  { base: "blow", past: "blew", pastParticiple: "blown", meaning: "dmuchać" },
  { base: "break", past: "broke", pastParticiple: "broken", meaning: "łamać, psuć" },
  { base: "bring", past: "brought", pastParticiple: "brought", meaning: "przynosić" },
  { base: "broadcast", past: "broadcast", pastParticiple: "broadcast", meaning: "nadawać" },
  { base: "build", past: "built", pastParticiple: "built", meaning: "budować" },
  { base: "burn", past: "burnt/burned", pastParticiple: "burnt/burned", meaning: "palić" },
  { base: "burst", past: "burst", pastParticiple: "burst", meaning: "wybuchać" },
  { base: "buy", past: "bought", pastParticiple: "bought", meaning: "kupować" },
  { base: "catch", past: "caught", pastParticiple: "caught", meaning: "łapać" },
  { base: "choose", past: "chose", pastParticiple: "chosen", meaning: "wybierać" },
  { base: "cling", past: "clung", pastParticiple: "clung", meaning: "trzymać się" },
  { base: "come", past: "came", pastParticiple: "come", meaning: "przyjść" },
  { base: "cost", past: "cost", pastParticiple: "cost", meaning: "kosztować" },
  { base: "creep", past: "crept", pastParticiple: "crept", meaning: "pełzać" },
  { base: "cut", past: "cut", pastParticiple: "cut", meaning: "ciąć" },
  { base: "deal", past: "dealt", pastParticiple: "dealt", meaning: "radzić sobie, zajmować się" },
  { base: "dig", past: "dug", pastParticiple: "dug", meaning: "kopać" },
  { base: "do", past: "did", pastParticiple: "done", meaning: "robić" },
  { base: "draw", past: "drew", pastParticiple: "drawn", meaning: "rysować, ciągnąć" },
  { base: "dream", past: "dreamt/dreamed", pastParticiple: "dreamt/dreamed", meaning: "marzyć, śnić" },
  { base: "drink", past: "drank", pastParticiple: "drunk", meaning: "pić" },
  { base: "drive", past: "drove", pastParticiple: "driven", meaning: "prowadzić (pojazd)" },
  { base: "eat", past: "ate", pastParticiple: "eaten", meaning: "jeść" },
  { base: "fall", past: "fell", pastParticiple: "fallen", meaning: "upaść" },
  { base: "feed", past: "fed", pastParticiple: "fed", meaning: "karmić" },
  { base: "feel", past: "felt", pastParticiple: "felt", meaning: "czuć" },
  { base: "fight", past: "fought", pastParticiple: "fought", meaning: "walczyć" },
  { base: "find", past: "found", pastParticiple: "found", meaning: "znaleźć" },
  { base: "fit", past: "fit/fitted", pastParticiple: "fit/fitted", meaning: "pasować" },
  { base: "flee", past: "fled", pastParticiple: "fled", meaning: "uciekać" },
  { base: "fling", past: "flung", pastParticiple: "flung", meaning: "rzucać" },
  { base: "fly", past: "flew", pastParticiple: "flown", meaning: "latać" },
  { base: "forbid", past: "forbade", pastParticiple: "forbidden", meaning: "zakazać" },
  { base: "forget", past: "forgot", pastParticiple: "forgotten", meaning: "zapomnieć" },
  { base: "forgive", past: "forgave", pastParticiple: "forgiven", meaning: "wybaczać" },
  { base: "freeze", past: "froze", pastParticiple: "frozen", meaning: "zamrażać" },
  { base: "get", past: "got", pastParticiple: "got/gotten", meaning: "dostać" },
  { base: "give", past: "gave", pastParticiple: "given", meaning: "dawać" },
  { base: "go", past: "went", pastParticiple: "gone", meaning: "iść" },
  { base: "grow", past: "grew", pastParticiple: "grown", meaning: "rosnąć" },
  { base: "hang", past: "hung", pastParticiple: "hung", meaning: "wisieć" },
  { base: "have", past: "had", pastParticiple: "had", meaning: "mieć" },
  { base: "hear", past: "heard", pastParticiple: "heard", meaning: "słyszeć" },
  { base: "hide", past: "hid", pastParticiple: "hidden", meaning: "ukrywać" },
  { base: "hit", past: "hit", pastParticiple: "hit", meaning: "uderzać" },
  { base: "hold", past: "held", pastParticiple: "held", meaning: "trzymać" },
  { base: "hurt", past: "hurt", pastParticiple: "hurt", meaning: "zranić, boleć" },
  { base: "keep", past: "kept", pastParticiple: "kept", meaning: "trzymać" },
  { base: "kneel", past: "knelt/kneeled", pastParticiple: "knelt/kneeled", meaning: "klękać" },
  { base: "know", past: "knew", pastParticiple: "known", meaning: "wiedzieć, znać" },
  { base: "lay", past: "laid", pastParticiple: "laid", meaning: "kłaść" },
  { base: "lead", past: "led", pastParticiple: "led", meaning: "prowadzić" },
  { base: "lean", past: "leant/leaned", pastParticiple: "leant/leaned", meaning: "pochylać się" },
  { base: "leap", past: "leapt/leaped", pastParticiple: "leapt/leaped", meaning: "skakać" },
  { base: "leave", past: "left", pastParticiple: "left", meaning: "opuszczać" },
  { base: "lend", past: "lent", pastParticiple: "lent", meaning: "pożyczać" },
  { base: "let", past: "let", pastParticiple: "let", meaning: "pozwalać" },
  { base: "lie", past: "lay", pastParticiple: "lain", meaning: "leżeć" },
  { base: "light", past: "lit/lighted", pastParticiple: "lit/lighted", meaning: "zapalać" },
  { base: "lose", past: "lost", pastParticiple: "lost", meaning: "gubić, tracić" },
  { base: "make", past: "made", pastParticiple: "made", meaning: "robić, tworzyć" },
  { base: "mean", past: "meant", pastParticiple: "meant", meaning: "oznaczać" },
  { base: "meet", past: "met", pastParticiple: "met", meaning: "spotykać" },
  { base: "pay", past: "paid", pastParticiple: "paid", meaning: "płacić" },
  { base: "put", past: "put", pastParticiple: "put", meaning: "kłaść" },
  { base: "read", past: "read", pastParticiple: "read", meaning: "czytać" },
  { base: "ride", past: "rode", pastParticiple: "ridden", meaning: "jeździć (np. konno, rowerem)" },
  { base: "ring", past: "rang", pastParticiple: "rung", meaning: "dzwonić" },
  { base: "rise", past: "rose", pastParticiple: "risen", meaning: "wzrastać" },
  { base: "run", past: "ran", pastParticiple: "run", meaning: "biegać" },
  { base: "say", past: "said", pastParticiple: "said", meaning: "mówić" },
  { base: "see", past: "saw", pastParticiple: "seen", meaning: "widzieć" },
  { base: "sell", past: "sold", pastParticiple: "sold", meaning: "sprzedawać" },
  { base: "send", past: "sent", pastParticiple: "sent", meaning: "wysyłać" },
  { base: "set", past: "set", pastParticiple: "set", meaning: "ustawiać" },
  { base: "shake", past: "shook", pastParticiple: "shaken", meaning: "trząść" },
  { base: "shine", past: "shone", pastParticiple: "shone", meaning: "świecić" },
  { base: "shoot", past: "shot", pastParticiple: "shot", meaning: "strzelać" },
  { base: "show", past: "showed", pastParticiple: "shown/showed", meaning: "pokazywać" },
  { base: "shut", past: "shut", pastParticiple: "shut", meaning: "zamykać" },
  { base: "sing", past: "sang", pastParticiple: "sung", meaning: "śpiewać" },
  { base: "sink", past: "sank", pastParticiple: "sunk", meaning: "tonąć" },
  { base: "sit", past: "sat", pastParticiple: "sat", meaning: "siedzieć" },
  { base: "sleep", past: "slept", pastParticiple: "slept", meaning: "spać" },
  { base: "slide", past: "slid", pastParticiple: "slid", meaning: "ślizgać się" },
  { base: "speak", past: "spoke", pastParticiple: "spoken", meaning: "mówić" },
  { base: "spend", past: "spent", pastParticiple: "spent", meaning: "spędzać, wydawać" },
  { base: "spill", past: "spilt/spilled", pastParticiple: "spilt/spilled", meaning: "rozlewać" },
  { base: "spin", past: "spun", pastParticiple: "spun", meaning: "wirować" },
  { base: "split", past: "split", pastParticiple: "split", meaning: "dzielić" },
  { base: "spread", past: "spread", pastParticiple: "spread", meaning: "rozprzestrzeniać" },
  { base: "spring", past: "sprang", pastParticiple: "sprung", meaning: "skakać" },
  { base: "stand", past: "stood", pastParticiple: "stood", meaning: "stać" },
  { base: "steal", past: "stole", pastParticiple: "stolen", meaning: "kraść" },
  { base: "stick", past: "stuck", pastParticiple: "stuck", meaning: "przyklejać" },
  { base: "strike", past: "struck", pastParticiple: "struck/stricken", meaning: "uderzać" },
  { base: "swear", past: "swore", pastParticiple: "sworn", meaning: "przysięgać" },
  { base: "sweep", past: "swept", pastParticiple: "swept", meaning: "zamiatać" },
  { base: "swim", past: "swam", pastParticiple: "swum", meaning: "pływać" },
  { base: "swing", past: "swung", pastParticiple: "swung", meaning: "huśtać się" },
  { base: "take", past: "took", pastParticiple: "taken", meaning: "brać" },
  { base: "teach", past: "taught", pastParticiple: "taught", meaning: "uczyć" },
  { base: "tear", past: "tore", pastParticiple: "torn", meaning: "drzeć" },
  { base: "tell", past: "told", pastParticiple: "told", meaning: "opowiadać" },
  { base: "think", past: "thought", pastParticiple: "thought", meaning: "myśleć" },
  { base: "throw", past: "threw", pastParticiple: "thrown", meaning: "rzucać" },
  { base: "understand", past: "understood", pastParticiple: "understood", meaning: "rozumieć" },
  { base: "wake", past: "woke", pastParticiple: "woken", meaning: "budzić" },
  { base: "wear", past: "wore", pastParticiple: "worn", meaning: "nosić (ubranie)" },
  { base: "weave", past: "wove", pastParticiple: "woven", meaning: "tkać" },
  { base: "weep", past: "wept", pastParticiple: "wept", meaning: "płakać" },
  { base: "win", past: "won", pastParticiple: "won", meaning: "wygrywać" },
  { base: "wind", past: "wound", pastParticiple: "wound", meaning: "nakręcać, owijać" },
  { base: "write", past: "wrote", pastParticiple: "written", meaning: "pisać" }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Czasowniki nieregularne</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Base</th>
              <th className="py-2 px-4 border-b">Past</th>
              <th className="py-2 px-4 border-b">Past Participle</th>
              <th className="py-2 px-4 border-b">Znaczenie</th>
            </tr>
          </thead>
          <tbody>
            {irregularVerbs.map((verb, idx) => (
              <tr key={idx} className="text-center hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{verb.base}</td>
                <td className="py-2 px-4 border-b">{verb.past}</td>
                <td className="py-2 px-4 border-b">{verb.pastParticiple}</td>
                <td className="py-2 px-4 border-b">{verb.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
