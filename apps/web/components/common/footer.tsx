import ContentWrapper from "./content-wrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 flex justify-center">
      <ContentWrapper className="max-w-7xl h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div>Moimter</div>
          <div>기능</div>
          <div>커뮤니티</div>
          <div>고객지원</div>
        </div>
        <hr className="my-8 text-white/20" />
        <p className="text-center text-white/60">
          &copy; {new Date().getFullYear()} Moimter. All rights reserved.
        </p>
      </ContentWrapper>
    </footer>
  );
}
