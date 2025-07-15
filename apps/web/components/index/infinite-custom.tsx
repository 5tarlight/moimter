import { Layout, Palette } from "lucide-react";
import ContentWrapper from "../common/content-wrapper";
import MainCard from "./main-card";
import cn from "@yeahx4/cn";

export default function InfiniteCustom() {
  return (
    <div id="customize">
      <div className="flex flex-col items-center gap-4 mb-16 mt-16">
        <div className="text-3xl sm:text-4xl font-bold text-center">
          무한한 커스터마이징의 세계
        </div>
        <div className="text-xl text-gray-600">
          당신의 개성을 마음껏 표현하세요. 모든 것이 자유롭게 변경 가능합니다.
        </div>
      </div>
      <ContentWrapper className="flex flex-wrap justify-between">
        <MainCard>
          <div
            className={cn(
              "w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500",
              "rounded-2xl flex items-center justify-center mx-auto mb-4",
              "group-hover:scale-110 transition-transform"
            )}
          >
            <Palette className="w-8 h-8 text-white" />
          </div>
          {"나만의 테마"}
          {"세상에 하나뿐인 나만의 테마를 만들어보세요."}
        </MainCard>

        <MainCard>
          <div
            className={cn(
              "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500",
              "rounded-2xl flex items-center justify-center mx-auto mb-4",
              "group-hover:scale-110 transition-transform"
            )}
          >
            <Layout className="w-8 h-8 text-white" />
          </div>
          {"레이아웃 편집"}
          {"드래그 앤 드롭으로 레이아웃을 자유롭게 설정해보세요."}
        </MainCard>

        <MainCard>
          <div
            className={cn(
              "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500",
              "rounded-2xl flex items-center justify-center mx-auto mb-4",
              "group-hover:scale-110 transition-transform"
            )}
          >
            <Palette className="w-8 h-8 text-white" />
          </div>
          {"이모지 & 스티커"}
          {"다양한 이모지와 스티커로 나만의 개성을 표현해보세요."}
        </MainCard>

        <MainCard>
          <div
            className={cn(
              "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500",
              "rounded-2xl flex items-center justify-center mx-auto mb-4",
              "group-hover:scale-110 transition-transform"
            )}
          >
            <Palette className="w-8 h-8 text-white" />
          </div>
          {"다양한 꾸미기"}
          {"애니메이션, 파티클,  더욱 더 특별하게."}
        </MainCard>
      </ContentWrapper>
    </div>
  );
}
