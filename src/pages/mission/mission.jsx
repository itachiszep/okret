import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const videos = [
    "wnHW6o8WMas",
    "G8RnMeuJULw",
    "6_uvpReICDU",
    "juNZV3AVlpk",
    "elmJQTKLC6c",
    "46FPF6pCtY8",
    "_KmsNRHVudk",
    "kt04TZi72P0",
    "YkIFDQxtos8",
    "ax8ffdMFsKs",
    "E0MHHWCC1j4",
    "hO7Sf1vc4R4",
    "hebSY9_pZD8",
    "GLheiLGZ1k8",
    "D_Vg4uyYwEk",
    "fvFuGq-1Z8M",
    "7u9JDhwJXTc",
    "ZtLlfdyDySY",
    "pLnGByBsFqE",
    "BsblgcBB17A",
    "y4-in1XbVEc",
    "0X-bcrwmEBc",
    "h3Nqbx7mbAo",
    "1eiFc8g1VXI",
    "H0NCRHpKuO0",
    "wtHrDSR6100",
    "H4BXkyj9dJE",
    "yHFfpqgHld4",
    "82InbtYxdJY",
    "JzVt7CznI9k",
    "HWmqLXP1-o0",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Your featured video on top */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Video</h2>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videos[0]}`}
              title="Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* YouTube videos grid */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">More Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(1).map((videoId, index) => (
              <div key={videoId} className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Video ${index + 2}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
