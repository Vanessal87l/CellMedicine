import texno from "@/assets/video/bg-2.mp4";
import Container from "@/Container/Container";

export default function KletocniyeTexnologiy() {
  return (
    <div className="w-full min-h-[2500px] relative">
      <Container className="relative z-10 pt-[150px] flex justify-center">
        <div className="flex flex-col items-center text-center gap-5 max-w-[580px]">
          <div className=" text-white bg-[#0C7779]/60 text-center justify-center items-center flex rounded-3xl w-full max-w-[420px] h-[40px] gap-1 ">
            <span className="text-[45px] pb-[5px]">•</span>
            <h1>Cистема мониторинга в реальном времени</h1>
          </div>
          <div className="font-semibold w-full">
            <h1 className="text-[50px] text-white">Cell Medicine:</h1>
            <p className="text-[50px] text-white w-full flex flex-col">
              <span
                className="font-bold  text-[60px] bg-gradient-to-r 
 
  bg-clip-text 
  animate-text"
              >
                Регенеративная
              </span>
              медицина
            </p>
          </div>
          <p className="text-white w-full max-w-[500px]">
            Научные решения для восстановления организма на клеточном уровне с
            использованием передовых технологий и доказательной медицины .
          </p>
          <div className="flex justify-center pt-4">
            <button className="bg-[#0C7779]/60 text-white px-6  rounded-3xl hover:bg-[#0A5F5F]/60 cursor-pointer transition-colors duration-200 flex pt-3 gap-2">
              Получить Консультацию
            </button>
            <button className="ml-4  border-2 border-[#0C7779]  font-medium  cursor-pointer px-6 py-3 rounded-full bg-white/5  backdrop-blur-sm text-white transition-colors duration-200">
              Изучите Технологии
            </button>
          </div>
        </div>
      </Container>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      >
        <source src={texno} type="video/mp4" />
      </video>
    </div>
  );
}
