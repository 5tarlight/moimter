import cn from "@yeahx4/cn";
import { Brush, Camera, Heart, Layout, Smile, Star } from "lucide-react";
import { HomeTheme } from "../../app/page";

export default function LayoutPreview({ theme }: { theme: HomeTheme }) {
  return (
    <div className="mt-16 w-full mx-auto">
      <div className="relative w-full">
        <div
          className={cn(
            `relative`,
            theme.card,
            `backdrop-blur-sm shadow-2xl border-2 overflow-hidden`,
            "w-full rounded-md mb-32"
          )}
        >
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <Brush className="w-4 h-4 mr-2" />
                  테마 설정
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
                    <span className="text-sm">배경색</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
                    <span className="text-sm">폰트</span>
                    <select className="text-xs bg-transparent">
                      <option>귀여운체</option>
                      <option>모던체</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <Layout className="w-4 h-4 mr-2" />
                  레이아웃
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-2">
                    <div className="w-full h-2 bg-pink-300 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-pink-200 rounded"></div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-2">
                    <div className="w-full h-2 bg-blue-300 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <Smile className="w-4 h-4 mr-2" />
                  위젯 & 꾸미기
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-white/50 rounded-lg">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-sm">좋아요 카운터</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white/50 rounded-lg">
                    <Camera className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">사진 갤러리</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white/50 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">인기글 위젯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
