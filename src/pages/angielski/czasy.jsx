import React from "react";



 export default function CzasyAngielskie() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Kompletna Dokumentacja Czasów Angielskich</h1>
            <p className="text-blue-100">Wszystkie formy dla każdego czasu z tymi samymi zdaniami</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Present Simple */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Present Simple</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności powtarzające się, nawyki, fakty, prawdy uniwersalne. Słowa kluczowe: every day, always, usually, often, sometimes, never.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + czasownik (I forma) / czasownik + s/es (he/she/it)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + don't/doesn't + czasownik (I forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Do/Does + podmiot + czasownik (I forma)?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>go</strong> to school every day.</p>
                <p className="mb-1">You <strong>go</strong> to school every day.</p>
                <p className="mb-1">He/She/It <strong>goes</strong> to school every day.</p>
                <p className="mb-1">We <strong>go</strong> to school every day.</p>
                <p className="mb-1">You <strong>go</strong> to school every day.</p>
                <p>They <strong>go</strong> to school every day.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>don't go</strong> to school on Sundays.</p>
                <p className="mb-1">You <strong>don't go</strong> to school on Sundays.</p>
                <p className="mb-1">He/She/It <strong>doesn't go</strong> to school on Sundays.</p>
                <p className="mb-1">We <strong>don't go</strong> to school on Sundays.</p>
                <p className="mb-1">You <strong>don't go</strong> to school on Sundays.</p>
                <p>They <strong>don't go</strong> to school on Sundays.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Do</strong> I go to school every day?</p>
              <p className="mb-1"><strong>Do</strong> you go to school every day?</p>
              <p className="mb-1"><strong>Does</strong> he/she/it go to school every day?</p>
              <p className="mb-1"><strong>Do</strong> we go to school every day?</p>
              <p className="mb-1"><strong>Do</strong> you go to school every day?</p>
              <p><strong>Do</strong> they go to school every day?</p>
            </div>
          </div>

          {/* Present Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Present Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności dziejące się teraz, w tej chwili lub planowane na najbliższą przyszłość. Słowa kluczowe: now, at the moment, right now, tonight, this week.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + am/is/are + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + am not/isn't/aren't + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Am/Is/Are + podmiot + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>am going</strong> to school now.</p>
                <p className="mb-1">You <strong>are going</strong> to school now.</p>
                <p className="mb-1">He/She/It <strong>is going</strong> to school now.</p>
                <p className="mb-1">We <strong>are going</strong> to school now.</p>
                <p className="mb-1">You <strong>are going</strong> to school now.</p>
                <p>They <strong>are going</strong> to school now.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>am not going</strong> to school now.</p>
                <p className="mb-1">You <strong>aren't going</strong> to school now.</p>
                <p className="mb-1">He/She/It <strong>isn't going</strong> to school now.</p>
                <p className="mb-1">We <strong>aren't going</strong> to school now.</p>
                <p className="mb-1">You <strong>aren't going</strong> to school now.</p>
                <p>They <strong>aren't going</strong> to school now.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Am</strong> I going to school now?</p>
              <p className="mb-1"><strong>Are</strong> you going to school now?</p>
              <p className="mb-1"><strong>Is</strong> he/she/it going to school now?</p>
              <p className="mb-1"><strong>Are</strong> we going to school now?</p>
              <p className="mb-1"><strong>Are</strong> you going to school now?</p>
              <p><strong>Are</strong> they going to school now?</p>
            </div>
          </div>

          {/* Present Perfect */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Present Perfect</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności z przeszłości, które mają związek z teraźniejszością, doświadczenia życiowe. Słowa kluczowe: ever, never, already, yet, just, so far, recently, for, since.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + have/has + czasownik (III forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + haven't/hasn't + czasownik (III forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Have/Has + podmiot + czasownik (III forma)?</p>
              <p className="text-xs text-amber-600 mt-2">💡 go → went → <strong>gone</strong> (czasownik nieregularny!)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>have gone</strong> to school already.</p>
                <p className="mb-1">You <strong>have gone</strong> to school already.</p>
                <p className="mb-1">He/She/It <strong>has gone</strong> to school already.</p>
                <p className="mb-1">We <strong>have gone</strong> to school already.</p>
                <p className="mb-1">You <strong>have gone</strong> to school already.</p>
                <p>They <strong>have gone</strong> to school already.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>haven't gone</strong> to school yet.</p>
                <p className="mb-1">You <strong>haven't gone</strong> to school yet.</p>
                <p className="mb-1">He/She/It <strong>hasn't gone</strong> to school yet.</p>
                <p className="mb-1">We <strong>haven't gone</strong> to school yet.</p>
                <p className="mb-1">You <strong>haven't gone</strong> to school yet.</p>
                <p>They <strong>haven't gone</strong> to school yet.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Have</strong> I gone to school already?</p>
              <p className="mb-1"><strong>Have</strong> you gone to school already?</p>
              <p className="mb-1"><strong>Has</strong> he/she/it gone to school already?</p>
              <p className="mb-1"><strong>Have</strong> we gone to school already?</p>
              <p className="mb-1"><strong>Have</strong> you gone to school already?</p>
              <p><strong>Have</strong> they gone to school already?</p>
            </div>
          </div>

          {/* Present Perfect Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Present Perfect Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności, które zaczęły się w przeszłości i trwają nadal lub właśnie się skończyły. Nacisk na CZAS TRWANIA. Słowa kluczowe: for, since, how long.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + have/has + been + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + haven't/hasn't + been + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Have/Has + podmiot + been + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>have been going</strong> to school for 5 years.</p>
                <p className="mb-1">You <strong>have been going</strong> to school for 5 years.</p>
                <p className="mb-1">He/She/It <strong>has been going</strong> to school for 5 years.</p>
                <p className="mb-1">We <strong>have been going</strong> to school for 5 years.</p>
                <p className="mb-1">You <strong>have been going</strong> to school for 5 years.</p>
                <p>They <strong>have been going</strong> to school for 5 years.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>haven't been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>haven't been going</strong> to school for long.</p>
                <p className="mb-1">He/She/It <strong>hasn't been going</strong> to school for long.</p>
                <p className="mb-1">We <strong>haven't been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>haven't been going</strong> to school for long.</p>
                <p>They <strong>haven't been going</strong> to school for long.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Have</strong> I been going to school for 5 years?</p>
              <p className="mb-1"><strong>Have</strong> you been going to school for 5 years?</p>
              <p className="mb-1"><strong>Has</strong> he/she/it been going to school for 5 years?</p>
              <p className="mb-1"><strong>Have</strong> we been going to school for 5 years?</p>
              <p className="mb-1"><strong>Have</strong> you been going to school for 5 years?</p>
              <p><strong>Have</strong> they been going to school for 5 years?</p>
            </div>
          </div>

          {/* Past Simple */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Past Simple</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności zakończone w przeszłości, konkretny moment w przeszłości. Słowa kluczowe: yesterday, last week/month/year, ago, in 2010.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + czasownik (II forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + didn't + czasownik (I forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Did + podmiot + czasownik (I forma)?</p>
              <p className="text-xs text-amber-600 mt-2">💡 go → <strong>went</strong> → gone (czasownik nieregularny!)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>went</strong> to school yesterday.</p>
                <p className="mb-1">You <strong>went</strong> to school yesterday.</p>
                <p className="mb-1">He/She/It <strong>went</strong> to school yesterday.</p>
                <p className="mb-1">We <strong>went</strong> to school yesterday.</p>
                <p className="mb-1">You <strong>went</strong> to school yesterday.</p>
                <p>They <strong>went</strong> to school yesterday.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>didn't go</strong> to school yesterday.</p>
                <p className="mb-1">You <strong>didn't go</strong> to school yesterday.</p>
                <p className="mb-1">He/She/It <strong>didn't go</strong> to school yesterday.</p>
                <p className="mb-1">We <strong>didn't go</strong> to school yesterday.</p>
                <p className="mb-1">You <strong>didn't go</strong> to school yesterday.</p>
                <p>They <strong>didn't go</strong> to school yesterday.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Did</strong> I go to school yesterday?</p>
              <p className="mb-1"><strong>Did</strong> you go to school yesterday?</p>
              <p className="mb-1"><strong>Did</strong> he/she/it go to school yesterday?</p>
              <p className="mb-1"><strong>Did</strong> we go to school yesterday?</p>
              <p className="mb-1"><strong>Did</strong> you go to school yesterday?</p>
              <p><strong>Did</strong> they go to school yesterday?</p>
            </div>
          </div>

          {/* Past Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Past Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności trwające w konkretnym momencie w przeszłości, przerwane przez inną czynność. Słowa kluczowe: at 5 PM yesterday, when, while.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + was/were + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + wasn't/weren't + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Was/Were + podmiot + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>was going</strong> to school at 8 AM.</p>
                <p className="mb-1">You <strong>were going</strong> to school at 8 AM.</p>
                <p className="mb-1">He/She/It <strong>was going</strong> to school at 8 AM.</p>
                <p className="mb-1">We <strong>were going</strong> to school at 8 AM.</p>
                <p className="mb-1">You <strong>were going</strong> to school at 8 AM.</p>
                <p>They <strong>were going</strong> to school at 8 AM.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>wasn't going</strong> to school at 8 AM.</p>
                <p className="mb-1">You <strong>weren't going</strong> to school at 8 AM.</p>
                <p className="mb-1">He/She/It <strong>wasn't going</strong> to school at 8 AM.</p>
                <p className="mb-1">We <strong>weren't going</strong> to school at 8 AM.</p>
                <p className="mb-1">You <strong>weren't going</strong> to school at 8 AM.</p>
                <p>They <strong>weren't going</strong> to school at 8 AM.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Was</strong> I going to school at 8 AM?</p>
              <p className="mb-1"><strong>Were</strong> you going to school at 8 AM?</p>
              <p className="mb-1"><strong>Was</strong> he/she/it going to school at 8 AM?</p>
              <p className="mb-1"><strong>Were</strong> we going to school at 8 AM?</p>
              <p className="mb-1"><strong>Were</strong> you going to school at 8 AM?</p>
              <p><strong>Were</strong> they going to school at 8 AM?</p>
            </div>
          </div>

          {/* Past Perfect */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Past Perfect</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynność, która zakończyła się przed inną czynnością w przeszłości (przeszłość przed przeszłością). Słowa kluczowe: before, after, by the time, already, just.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + had + czasownik (III forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + hadn't + czasownik (III forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Had + podmiot + czasownik (III forma)?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>had gone</strong> to school before 8 AM.</p>
                <p className="mb-1">You <strong>had gone</strong> to school before 8 AM.</p>
                <p className="mb-1">He/She/It <strong>had gone</strong> to school before 8 AM.</p>
                <p className="mb-1">We <strong>had gone</strong> to school before 8 AM.</p>
                <p className="mb-1">You <strong>had gone</strong> to school before 8 AM.</p>
                <p>They <strong>had gone</strong> to school before 8 AM.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>hadn't gone</strong> to school before 8 AM.</p>
                <p className="mb-1">You <strong>hadn't gone</strong> to school before 8 AM.</p>
                <p className="mb-1">He/She/It <strong>hadn't gone</strong> to school before 8 AM.</p>
                <p className="mb-1">We <strong>hadn't gone</strong> to school before 8 AM.</p>
                <p className="mb-1">You <strong>hadn't gone</strong> to school before 8 AM.</p>
                <p>They <strong>hadn't gone</strong> to school before 8 AM.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Had</strong> I gone to school before 8 AM?</p>
              <p className="mb-1"><strong>Had</strong> you gone to school before 8 AM?</p>
              <p className="mb-1"><strong>Had</strong> he/she/it gone to school before 8 AM?</p>
              <p className="mb-1"><strong>Had</strong> we gone to school before 8 AM?</p>
              <p className="mb-1"><strong>Had</strong> you gone to school before 8 AM?</p>
              <p><strong>Had</strong> they gone to school before 8 AM?</p>
            </div>
          </div>

          {/* Past Perfect Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Past Perfect Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynność trwająca przez pewien czas przed inną czynnością w przeszłości. Nacisk na CZAS TRWANIA przed wydarzeniem w przeszłości.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + had + been + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + hadn't + been + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Had + podmiot + been + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>had been going</strong> to school for 3 years.</p>
                <p className="mb-1">You <strong>had been going</strong> to school for 3 years.</p>
                <p className="mb-1">He/She/It <strong>had been going</strong> to school for 3 years.</p>
                <p className="mb-1">We <strong>had been going</strong> to school for 3 years.</p>
                <p className="mb-1">You <strong>had been going</strong> to school for 3 years.</p>
                <p>They <strong>had been going</strong> to school for 3 years.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>hadn't been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>hadn't been going</strong> to school for long.</p>
                <p className="mb-1">He/She/It <strong>hadn't been going</strong> to school for long.</p>
                <p className="mb-1">We <strong>hadn't been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>hadn't been going</strong> to school for long.</p>
                <p>They <strong>hadn't been going</strong> to school for long.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Had</strong> I been going to school for 3 years?</p>
              <p className="mb-1"><strong>Had</strong> you been going to school for 3 years?</p>
              <p className="mb-1"><strong>Had</strong> he/she/it been going to school for 3 years?</p>
              <p className="mb-1"><strong>Had</strong> we been going to school for 3 years?</p>
              <p className="mb-1"><strong>Had</strong> you been going to school for 3 years?</p>
              <p><strong>Had</strong> they been going to school for 3 years?</p>
            </div>
          </div>

          {/* Future Simple (will) */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Future Simple (will)</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Spontaniczne decyzje, przewidywania, obietnice, oferty pomocy. Słowa kluczowe: tomorrow, next week/month/year, in the future.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + will + czasownik (I forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + won't + czasownik (I forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Will + podmiot + czasownik (I forma)?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>will go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>will go</strong> to school tomorrow.</p>
                <p className="mb-1">He/She/It <strong>will go</strong> to school tomorrow.</p>
                <p className="mb-1">We <strong>will go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>will go</strong> to school tomorrow.</p>
                <p>They <strong>will go</strong> to school tomorrow.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>won't go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>won't go</strong> to school tomorrow.</p>
                <p className="mb-1">He/She/It <strong>won't go</strong> to school tomorrow.</p>
                <p className="mb-1">We <strong>won't go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>won't go</strong> to school tomorrow.</p>
                <p>They <strong>won't go</strong> to school tomorrow.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Will</strong> I go to school tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> you go to school tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> he/she/it go to school tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> we go to school tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> you go to school tomorrow?</p>
              <p><strong>Will</strong> they go to school tomorrow?</p>
            </div>
          </div>

          {/* Future Simple (going to) */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Future Simple (going to)</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Zaplanowane decyzje, intencje, przewidywania oparte na dowodach. Słowa kluczowe: tomorrow, next week, in the future.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + am/is/are + going to + czasownik (I forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + am not/isn't/aren't + going to + czasownik (I forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Am/Is/Are + podmiot + going to + czasownik (I forma)?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>am going to go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>are going to go</strong> to school tomorrow.</p>
                <p className="mb-1">He/She/It <strong>is going to go</strong> to school tomorrow.</p>
                <p className="mb-1">We <strong>are going to go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>are going to go</strong> to school tomorrow.</p>
                <p>They <strong>are going to go</strong> to school tomorrow.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>am not going to go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>aren't going to go</strong> to school tomorrow.</p>
                <p className="mb-1">He/She/It <strong>isn't going to go</strong> to school tomorrow.</p>
                <p className="mb-1">We <strong>aren't going to go</strong> to school tomorrow.</p>
                <p className="mb-1">You <strong>aren't going to go</strong> to school tomorrow.</p>
                <p>They <strong>aren't going to go</strong> to school tomorrow.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Am</strong> I going to go to school tomorrow?</p>
              <p className="mb-1"><strong>Are</strong> you going to go to school tomorrow?</p>
              <p className="mb-1"><strong>Is</strong> he/she/it going to go to school tomorrow?</p>
              <p className="mb-1"><strong>Are</strong> we going to go to school tomorrow?</p>
              <p className="mb-1"><strong>Are</strong> you going to go to school tomorrow?</p>
              <p><strong>Are</strong> they going to go to school tomorrow?</p>
            </div>
          </div>

          {/* Future Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Future Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynności, które będą trwały w konkretnym momencie w przyszłości. Słowa kluczowe: at 8 PM tomorrow, this time next week.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + will + be + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + won't + be + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Will + podmiot + be + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>will be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">You <strong>will be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">He/She/It <strong>will be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">We <strong>will be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">You <strong>will be going</strong> to school at 8 AM tomorrow.</p>
                <p>They <strong>will be going</strong> to school at 8 AM tomorrow.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">You <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">He/She/It <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">We <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
                <p className="mb-1">You <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
                <p>They <strong>won't be going</strong> to school at 8 AM tomorrow.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Will</strong> I be going to school at 8 AM tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> you be going to school at 8 AM tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> he/she/it be going to school at 8 AM tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> we be going to school at 8 AM tomorrow?</p>
              <p className="mb-1"><strong>Will</strong> you be going to school at 8 AM tomorrow?</p>
              <p><strong>Will</strong> they be going to school at 8 AM tomorrow?</p>
            </div>
          </div>

          {/* Future Perfect */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Future Perfect</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynność, która zakończy się przed konkretnym momentem w przyszłości. Słowa kluczowe: by tomorrow, by next week, by the time.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + will + have + czasownik (III forma)</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + won't + have + czasownik (III forma)</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Will + podmiot + have + czasownik (III forma)?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>will have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">You <strong>will have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">He/She/It <strong>will have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">We <strong>will have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">You <strong>will have gone</strong> to school by 9 AM.</p>
                <p>They <strong>will have gone</strong> to school by 9 AM.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>won't have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">You <strong>won't have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">He/She/It <strong>won't have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">We <strong>won't have gone</strong> to school by 9 AM.</p>
                <p className="mb-1">You <strong>won't have gone</strong> to school by 9 AM.</p>
                <p>They <strong>won't have gone</strong> to school by 9 AM.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Will</strong> I have gone to school by 9 AM?</p>
              <p className="mb-1"><strong>Will</strong> you have gone to school by 9 AM?</p>
              <p className="mb-1"><strong>Will</strong> he/she/it have gone to school by 9 AM?</p>
              <p className="mb-1"><strong>Will</strong> we have gone to school by 9 AM?</p>
              <p className="mb-1"><strong>Will</strong> you have gone to school by 9 AM?</p>
              <p><strong>Will</strong> they have gone to school by 9 AM?</p>
            </div>
          </div>

          {/* Future Perfect Continuous */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">Future Perfect Continuous</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">📌 Kiedy używamy:</p>
              <p className="text-sm text-blue-700">Czynność trwająca przez pewien czas do konkretnego momentu w przyszłości. Nacisk na CZAS TRWANIA do momentu w przyszłości.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded">
              <p className="text-sm font-semibold text-amber-800 mb-2">⚡ Budowa:</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Twierdzenie:</strong> podmiot + will + have + been + czasownik + ing</p>
              <p className="text-sm text-amber-700 mb-1"><strong>Przeczenie:</strong> podmiot + won't + have + been + czasownik + ing</p>
              <p className="text-sm text-amber-700"><strong>Pytanie:</strong> Will + podmiot + have + been + czasownik + ing?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">✓ TWIERDZENIE</p>
                <p className="mb-1">I <strong>will have been going</strong> to school for 10 years.</p>
                <p className="mb-1">You <strong>will have been going</strong> to school for 10 years.</p>
                <p className="mb-1">He/She/It <strong>will have been going</strong> to school for 10 years.</p>
                <p className="mb-1">We <strong>will have been going</strong> to school for 10 years.</p>
                <p className="mb-1">You <strong>will have been going</strong> to school for 10 years.</p>
                <p>They <strong>will have been going</strong> to school for 10 years.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-700 mb-2">✗ PRZECZENIE</p>
                <p className="mb-1">I <strong>won't have been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>won't have been going</strong> to school for long.</p>
                <p className="mb-1">He/She/It <strong>won't have been going</strong> to school for long.</p>
                <p className="mb-1">We <strong>won't have been going</strong> to school for long.</p>
                <p className="mb-1">You <strong>won't have been going</strong> to school for long.</p>
                <p>They <strong>won't have been going</strong> to school for long.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">? PYTANIE</p>
              <p className="mb-1"><strong>Will</strong> I have been going to school for 10 years?</p>
              <p className="mb-1"><strong>Will</strong> you have been going to school for 10 years?</p>
              <p className="mb-1"><strong>Will</strong> he/she/it have been going to school for 10 years?</p>
              <p className="mb-1"><strong>Will</strong> we have been going to school for 10 years?</p>
              <p className="mb-1"><strong>Will</strong> you have been going to school for 10 years?</p>
              <p><strong>Will</strong> they have been going to school for 10 years?</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white shadow-lg rounded-xl p-6 mt-8 text-center">
          <p className="text-gray-600 mb-2">💡 <span className="font-semibold">Wskazówka:</span> Zacznij od Present Simple, Present Continuous i Past Simple!</p>
          <p className="text-sm text-gray-500">📖 Wszystkie zdania używają tego samego kontekstu (going to school) dla łatwiejszego zapamiętania</p>
        </div>
      </div>
    </div>
  );
}

