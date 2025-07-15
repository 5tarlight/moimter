import ContentWrapper from "./content-wrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 h-64 flex justify-center">
      <ContentWrapper className="max-w-7xl h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div>Pravacy</div>
          <div>SNS</div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Moimter. All rights reserved.
        </p>
      </ContentWrapper>
    </footer>
  );
}
